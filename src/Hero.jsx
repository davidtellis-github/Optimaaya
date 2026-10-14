import { useState } from "react";
import logo from "./assests/LOgo.svg";
import "./Hero.css";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="/" className="brand" aria-label="Optimaaya home">
      <img src={logo} alt="Optimaaya" className="brand-logo" width="305" height="62" />
    </a>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className={menuOpen ? "menu-open" : undefined}>
      <div className="grid-overlay" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="hero-shell">
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
            <a href="#contact" className="btn btn-dark">Let’s talk</a>
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

        <main>
          <section className="hero">
            <a href="#services" className="eyebrow reveal" style={{ "--d": 0 }}>
              <span className="eyebrow-dot" />
              Creative &amp; Digital Agency
              <span className="eyebrow-arrow" aria-hidden="true">→</span>
            </a>

            <div className="headline-stage">
              <h1 className="headline reveal" style={{ "--d": 1 }}>
                We make brands <br />understood, desired and
                <br />
                <em>optimised.</em>
              </h1>
            </div>

            <p className="lede reveal" style={{ "--d": 2 }}>
              We bring brand strategy, creativity and digital expertise together to shape how
              your business is seen, understood and chosen.
            </p>

            <div className="cta-row reveal" style={{ "--d": 3 }}>
              <a href="#contact" className="btn btn-primary">
                Let’s talk about your brand
                <span aria-hidden="true">→</span>
              </a>
              
            </div>

            
          </section>
        </main>
      </div>
    </div>
  );
}
