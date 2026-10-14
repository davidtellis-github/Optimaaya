import { GridOverlay, SiteNav, useMenu } from "./SiteChrome";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useMenu();

  return (
    <div id="top" className={menuOpen ? "menu-open" : undefined}>
      <GridOverlay />

      <div className="hero-shell">
        <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

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
