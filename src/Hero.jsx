import { GridOverlay, SiteNav, useMenu } from "./SiteChrome";
import { Link } from "react-router-dom";
import { PROJECTS } from "./projects";
import { SHOW_PROJECTS } from "./features";

// Every project, looping right-to-left. The list is rendered twice so the strip can
// scroll by exactly one copy and restart without a visible jump.
const HERO_CARDS = PROJECTS.map((p) => ({
  slug: p.slug,
  title: p.title,
  src: p.src,
  tags: p.tags.slice(0, 2),
}));

export default function Hero() {
  const [menuOpen, setMenuOpen] = useMenu();

  return (
    <div id="top" className={menuOpen ? "menu-open" : undefined}>
      <GridOverlay />

      <div className="hero-shell">
        <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          <section className="hero">
            <div className="hero-top">
              <div className="hero-intro reveal" style={{ "--d": 1 }}>
                <p className="lede">
                  We bring brand strategy, creativity and digital expertise together to shape
                  how your business is seen, understood and chosen.
                </p>
                <a href="#contact" className="btn btn-square">
                  Let’s talk about your brand <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="hero-title">
                <h1 className="headline reveal" style={{ "--d": 0 }}>
                  We make your brand understood, desired and <em>optimised.</em>
                </h1>
              </div>
            </div>

            <div className="hero-work reveal" style={{ "--d": 2 }} aria-label="Selected projects">
              <div className="hero-track" style={{ "--count": HERO_CARDS.length }}>
                {[...HERO_CARDS, ...HERO_CARDS].map((card, i) => {
                  const copy = i >= HERO_CARDS.length;
                  const body = (
                    <>
                      <ul className="hero-tags">
                        {card.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                      <figure>
                        <img src={card.src} alt={copy ? "" : `${card.title} project`} />
                      </figure>
                    </>
                  );
                  return SHOW_PROJECTS ? (
                    <Link
                      key={i}
                      to={`/work/${card.slug}`}
                      className="hero-card"
                      aria-hidden={copy || undefined}
                      tabIndex={copy ? -1 : undefined}
                    >
                      {body}
                    </Link>
                  ) : (
                    <div key={i} className="hero-card" aria-hidden={copy || undefined}>
                      {body}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
