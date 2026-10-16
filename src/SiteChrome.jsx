import { useState } from "react";
import logo from "./assests/LOgo.svg";
import { SHOW_WORK } from "./features";

// Shared across the home page and project pages. Links point at "/#section" so they
// work from any route (a full load of the home page, then a jump to the section).
export const NAV_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
].filter((link) => SHOW_WORK || link.label !== "Work");

export function GridOverlay() {
  return (
    <div className="grid-overlay" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

function Logo() {
  return (
    <a href="/" className="brand" aria-label="Optimaaya home">
      <img src={logo} alt="Optimaaya" className="brand-logo" width="305" height="62" />
    </a>
  );
}

// Fixed nav: links split either side of a centred logo, hairline underneath.
// `menuOpen` lives with the caller so the page wrapper can carry the .menu-open class
// the mobile menu styles key off.
export function SiteNav({ menuOpen, setMenuOpen }) {
  const half = Math.ceil(NAV_LINKS.length / 2);
  const close = () => setMenuOpen(false);
  const links = (list) =>
    list.map((link) => (
      <a key={link.href} href={link.href} onClick={close}>
        {link.label}
      </a>
    ));

  return (
    <header className="nav">
      <nav className="nav-group nav-group--left" aria-label="Primary">
        {links(NAV_LINKS.slice(0, half))}
      </nav>
      <Logo />
      <nav className="nav-group nav-group--right" aria-label="Secondary">
        {links(NAV_LINKS.slice(half))}
      </nav>

      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      {/* Phones: every link in one dropdown */}
      <nav className="nav-links" aria-label="Menu">
        {links(NAV_LINKS)}
      </nav>
    </header>
  );
}

export function useMenu() {
  return useState(false);
}
