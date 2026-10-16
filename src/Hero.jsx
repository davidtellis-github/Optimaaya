import { GridOverlay, SiteNav, useMenu } from "./SiteChrome";

// Placeholder photos (Unsplash) until there's campaign imagery for the hero.
const photo = (id) => `https://images.unsplash.com/photo-${id}?w=1400&h=1000&q=80&auto=format&fit=crop`;

const HERO_CARDS = [
  { tags: ["Brand & Creative", "Social & Influence"], src: photo("1527630941-4a229fd674ab") },
  { tags: ["Performance Marketing", "Websites & Digital"], src: photo("1581892805885-73bdd91beff0") },
];

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
                  We make brands{" "}
                  <a href="#perspective" className="hero-circle" aria-label="Scroll to learn more">
                    <span aria-hidden="true">↳</span>
                  </a>{" "}
                  understood, desired and <em>optimised.</em>
                </h1>
              </div>
            </div>

            <div className="hero-work">
              {HERO_CARDS.map((card, i) => (
                <div key={card.src} className={`hero-card hero-card--${i ? "right" : "left"} reveal`} style={{ "--d": 2 + i }}>
                  <ul className="hero-tags">
                    {card.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <figure>
                    <img src={card.src} alt="" />
                  </figure>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
