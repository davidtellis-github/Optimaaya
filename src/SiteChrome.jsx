import { useState } from "react";
import logo from "./assests/LOgo.svg";

// Shared across the home page and project pages. Links point at "/#section" so they
// work from any route (a full load of the home page, then a jump to the section).
export const NAV_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

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

// Fixed glass nav. `menuOpen` lives with the caller so the page wrapper can carry
// the .menu-open class the mobile menu styles key off.
export function SiteNav({ menuOpen, setMenuOpen }) {
  return (
    <header className="nav">
      <Logo />

      <nav className="nav-links" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a href="/#contact" className="btn btn-dark">Let’s talk</a>
      </div>

      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export function useMenu() {
  return useState(false);
}
