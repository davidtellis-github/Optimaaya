import { useEffect, useRef, useState } from "react";
import logo from "./assests/LOgo.svg";
import { NAV_LINKS } from "./SiteChrome";

const EMAIL = "optimaaya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/company/optimaaya-creative-digital-agency/";

/* ---------- Shared bits ---------- */

// Grid lines for dark panels, matching the page's fixed 12-column overlay.
function PanelGrid() {
  return (
    <div className="panel-grid" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

function Sparkle() {
  return (
    <svg className="sparkle" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 0 7.2 4.8 12 6 7.2 7.2 6 12 4.8 7.2 0 6 4.8 4.8Z" fill="currentColor" />
    </svg>
  );
}

function SectionLabel({ index, children }) {
  return (
    <p className="section-label" data-reveal>
      <span>{index}</span>
      {children}
    </p>
  );
}

// Fades elements marked data-reveal in as they scroll into view.
// Pass `key` to re-run when the page's content changes (e.g. a new project slug).
function useScrollReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}

/* ---------- 02 Perspective (outcome cards) ---------- */

// Thin line icons in the reference style (64×64, 1px strokes, current colour).
const ICONS = {
  identity: (
    <>
      <circle cx="32" cy="32" r="24" />
      <path d="M20 34a12 12 0 0 1 24 0" />
      <path d="M14 33a18 18 0 0 1 36 0" />
      <path d="M26 35a6 6 0 0 1 12 0c0 6-3 11-6 15" />
      <path d="M32 33v4c0 5-2 9-5 13" />
    </>
  ),
  launch: (
    <>
      <path d="M32 10 54 21 32 32 10 21Z" />
      <path d="M10 29l22 11 22-11" />
      <path d="M10 37l22 11 22-11" />
      <path d="M10 45l22 11 22-11" />
    </>
  ),
  content: (
    <>
      <circle cx="32" cy="32" r="4" />
      {Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * Math.PI * 2;
        const r1 = i % 2 ? 10 : 8;
        const r2 = i % 2 ? 18 : 26;
        return (
          <line
            key={i}
            x1={32 + Math.cos(a) * r1}
            y1={32 + Math.sin(a) * r1}
            x2={32 + Math.cos(a) * r2}
            y2={32 + Math.sin(a) * r2}
          />
        );
      })}
    </>
  ),
  website: (
    <>
      <rect x="8" y="12" width="48" height="36" rx="3" />
      <path d="M8 20h48" />
      <circle cx="13" cy="16" r="1" />
      <circle cx="17" cy="16" r="1" />
      <path d="M16 28h20M16 34h14" />
      <path d="M38 36l14 5-6 2-2 6Z" />
    </>
  ),
};

const OUTCOMES = [
  {
    icon: "identity",
    title: "A stronger identity.",
    text: "Define what your brand stands for and bring it to life through identity, storytelling and creative direction.",
  },
  {
    icon: "launch",
    title: "A considered launch.",
    text: "Connect audience insight, campaign creative and paid media to your business goals.",
  },
  {
    icon: "content",
    title: "Content that connects.",
    text: "Build a presence people recognise, connect with and return to through content, social media and creator partnerships.",
  },
  {
    icon: "website",
    title: "A website that makes the next step easy.",
    text: "Create websites and online stores that communicate clearly and make it easier for people to take action.",
  },
];

export function Perspective() {
  return (
    <section id="perspective" className="section perspective" aria-labelledby="perspective-title">
      <div className="grid12">
        <div className="persp-top" data-reveal>
          <div>
            <span className="persp-tag">Perspective</span>
            <h2 id="perspective-title" className="persp-title">
              A clear perspective changes what’s possible.
            </h2>
          </div>
          <p className="persp-lede">
            Whatever your business needs next, we begin by understanding it. Then we bring the
            right ideas, channels and expertise together around a clear direction.
          </p>
        </div>

        <ol className="persp-cards">
          {OUTCOMES.map((item, i) => (
            <li key={item.title} className="persp-card" data-reveal style={{ "--i": i }}>
              <span className="persp-card-index">00{i + 1}</span>
              <svg className="persp-card-icon" viewBox="0 0 64 64" aria-hidden="true">
                {ICONS[item.icon]}
              </svg>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- 02 What we do ---------- */

// Placeholder photos (Unsplash) until there's imagery for each service.
const serviceImage = (id) =>
  `https://images.unsplash.com/photo-${id}?w=900&h=560&q=80&auto=format&fit=crop`;

const SERVICES = [
  {
    name: "Brand & Creative",
    text: "Define what your brand stands for and bring it to life through identity, storytelling and creative direction.",
    image: serviceImage("1600585154340-be6161a56a0c"),
    tags: ["Brand positioning", "Tone of voice", "Brand guidelines", "Visual identity", "Campaign concepts", "Launch planning"],
  },
  {
    name: "Social & Influence",
    text: "Build a presence people recognise, connect with and return to through content, social media and creator partnerships.",
    image: serviceImage("1610846202780-b4d9837371ea"),
    tags: ["Social strategy", "Content production", "Video content", "Influencer campaigns", "Personal branding", "On-camera coaching"],
  },
  {
    name: "Performance Marketing",
    text: "Connect audience insight, campaign creative and paid media to your business goals.",
    image: serviceImage("1527630941-4a229fd674ab"),
    tags: ["Meta & Google ads", "Audience targeting", "Creative testing", "Landing pages", "Conversion tracking", "Reporting"],
  },
  {
    name: "Websites & Digital Experiences",
    text: "Create websites and online stores that communicate clearly and make it easier for people to take action.",
    image: serviceImage("1581892805885-73bdd91beff0"),
    tags: ["Website strategy", "Design & development", "Landing pages", "Shopify storefronts", "Checkout setup"],
  },
  {
    name: "Search & Visibility",
    text: "Help your business become easier to discover through search engines and AI-powered search experiences.",
    image: serviceImage("1482938289607-e9573fc25ebb"),
    tags: ["SEO", "Technical SEO", "On-page optimisation", "Answer engine optimisation", "AI visibility audits"],
  },
  {
    name: "Automation & Measurement",
    text: "Connect your marketing systems, follow up with intent and understand what your efforts contribute.",
    image: serviceImage("1568557412756-7d219873dd11"),
    tags: ["Funnel planning", "CRM integration", "Marketing automation", "Analytics & tracking", "Performance reporting"],
  },
];

// The page background fades ivory -> purple as What we do scrolls in (its top moving
// from 75% to 25% of the screen), and back as it leaves, so there's no hard edge.
const IVORY = [255, 250, 235];
const PURPLE = [35, 28, 62];
function fadePageBackground(rect) {
  const vh = window.innerHeight;
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const enter = clamp((vh * 0.75 - rect.top) / (vh * 0.5));
  const leave = clamp((rect.bottom - vh * 0.25) / (vh * 0.5));
  const t = Math.min(enter, leave);
  const e = t * t * (3 - 2 * t); // smoothstep
  const c = IVORY.map((v, i) => Math.round(v + (PURPLE[i] - v) * e));
  document.body.style.backgroundColor = `rgb(${c.join(",")})`;
}

const STEP_MS = 900; // duration of the glide when a service name is clicked

// Pinned while scrolling: each 1/n of the section's scroll lights up the next service.
export function Services() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const n = SERVICES.length;

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      fadePageBackground(r);
      const travel = r.height - window.innerHeight;
      if (travel <= 0) return; // not pinned (phones)
      const progress = Math.min(1, Math.max(0, -r.top / travel));
      setActive(Math.min(n - 1, Math.floor(progress * n)));
      el.style.setProperty("--svc-progress", progress.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.body.style.backgroundColor = "";
    };
  }, [n]);

  // Eased scroll to a service (ease-in-out cubic) when its name is clicked.
  const scrollAnim = useRef(0);
  useEffect(() => () => cancelAnimationFrame(scrollAnim.current), []);
  const goTo = (i, duration = STEP_MS) => {
    const el = sectionRef.current;
    const travel = el.offsetHeight - window.innerHeight;
    if (travel <= 0) return;
    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    const to = sectionTop + ((i + 0.5) / n) * travel;
    const from = window.scrollY;
    cancelAnimationFrame(scrollAnim.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: to, behavior: "instant" });
      return;
    }
    const start = performance.now();
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    let expected = from;
    const tick = (now) => {
      // The user scrolled during the glide: stop and let them take over.
      if (Math.abs(window.scrollY - expected) > 2) {
        scrollAnim.current = 0;
        return;
      }
      const t = Math.min(1, (now - start) / duration);
      expected = Math.round(from + (to - from) * ease(t));
      window.scrollTo({ top: expected, behavior: "instant" });
      if (t < 1) scrollAnim.current = requestAnimationFrame(tick);
      else scrollAnim.current = 0;
    };
    scrollAnim.current = requestAnimationFrame(tick);
  };

  // Gentle snap: when scrolling stops inside the section, glide to a service.
  // Direction-aware (a small push moves on, a tiny one settles back), and never
  // past the last/first service, so scrolling out is never blocked.
  useEffect(() => {
    let timer = 0;
    let lastY = window.scrollY;
    let dir = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) dir = Math.sign(y - lastY);
      lastY = y;
      clearTimeout(timer);
      timer = setTimeout(settle, 140);
    };
    const settle = () => {
      const el = sectionRef.current;
      if (!el || scrollAnim.current) return;
      const travel = el.offsetHeight - window.innerHeight;
      if (travel <= 0) return; // not pinned (phones)
      const step = travel / n;
      const pos = window.scrollY - (el.getBoundingClientRect().top + window.scrollY); // px into the section
      const f = pos / step - 0.5; // fractional service index at the slice centres
      if (f <= 0 || f >= n - 1) return; // before the first / past the last centre: free
      const base = Math.floor(f);
      const into = f - base;
      let target = Math.round(f);
      if (dir > 0 && into > 0.15) target = base + 1;
      if (dir < 0 && into < 0.85) target = base;
      if (Math.abs(f - target) * step < 2) return;
      goTo(target, 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [n]);


  // Preload every service image so switching never shows an empty frame.
  useEffect(() => {
    SERVICES.forEach((service) => {
      new Image().src = service.image;
    });
  }, []);

  const current = SERVICES[active];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section panel panel--dark services"
      aria-labelledby="services-title"
      style={{ "--steps": n }}
    >
      <div className="svc-pin">
        <PanelGrid />
        <div className="grid12 svc-layout">
          <div className="svc-list">
            <h2 id="services-title" className="svc-label">What we do</h2>
            <ol className="svc-names">
              {SERVICES.map((service, i) => (
                <li key={service.name} className={i === active ? "is-active" : i < active ? "is-past" : ""}>
                  <button type="button" onClick={() => goTo(i)}>
                    <h3>{service.name}</h3>
                  </button>
                  {/* Phones: no pinning, so each service shows its own details */}
                  <div className="svc-mobile-detail">
                    <img className="svc-detail-image" src={service.image} alt="" loading="lazy" />
                    <p>{service.text}</p>
                    <ul className="service-tags">
                      {service.tags.map((tag) => (
                        <li key={tag}>
                          <Sparkle />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="svc-detail" aria-live="polite">
            <div key={active} className="svc-detail-inner">
              <p className="svc-detail-index">0{active + 1}</p>
              <img className="svc-detail-image" src={current.image} alt="" />
              <p className="svc-detail-text">{current.text}</p>
              <ul className="service-tags">
                {current.tags.map((tag) => (
                  <li key={tag}>
                    <Sparkle />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="svc-scrollbar" aria-hidden="true">
            <span className="svc-scrollbar-thumb" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 Process ---------- */

const STEPS = [
  { name: "Understand", text: "We get to know your business, audience and the challenge you want to solve." },
  { name: "Define", text: "We establish the direction, priorities and what progress should look like." },
  { name: "Create", text: "We develop the content, campaigns and digital experiences that bring the strategy to life." },
  { name: "Improve", text: "We review performance, learn from the response and refine the work." },
];

export function Process() {
  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="grid12">
        <SectionLabel index="04">Process</SectionLabel>
        <h2 id="process-title" className="section-title process-title" data-reveal>
          From understanding to execution.
        </h2>
      </div>

      <ol className="process-stack">
        {STEPS.map((step, i) => (
          <li key={step.name} className="process-step grid12" style={{ "--i": i }}>
            <h3 className="process-name">{step.name}</h3>
            <p className="process-text">{step.text}</p>
            <span className="process-number" aria-hidden="true">0{i + 1}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- 05 Collaboration ---------- */

const FOUNDERS = [
  {
    name: "Ranjitha Yellur",
    initials: "RY",
    role: "Co-founder, Brand & Marketing Strategy",
    bio: "Ranjitha brings experience across brand building, creative strategy, content, social media and influencer marketing. She connects a business’s goals with how its brand communicates and shows up in the world.",
  },
  {
    name: "Ravi Nidwannaya",
    initials: "RN",
    role: "Co-founder, Technology & Digital Strategy",
    bio: "Ravi brings the technical perspective across websites, SEO, backend systems and digital implementation. He connects strategic ideas with the infrastructure needed to put them into practice.",
  },
];

export function Collaboration() {
  return (
    <section id="about" className="section collaboration" aria-labelledby="about-title">
      <div className="grid12">
        <div className="collab-intro">
          <SectionLabel index="05">About</SectionLabel>
          <h2 id="about-title" className="section-title collab-title" data-reveal>
            Close collaboration. Clear ownership.
          </h2>
          <p className="section-lede" data-reveal>
            Optimaaya brings brand and marketing expertise together with technical thinking. Our
            founders stay involved throughout the work, keeping strategy, creativity and execution
            connected.
          </p>
        </div>

        <div className="founders">
          {FOUNDERS.map((founder) => (
            <article key={founder.name} className="founder" data-reveal>
              <div className="founder-head">
                <span className="founder-avatar" aria-hidden="true">{founder.initials}</span>
                <div>
                  <h3 className="founder-name">{founder.name}</h3>
                  <p className="founder-role">{founder.role}</p>
                </div>
              </div>
              <p className="founder-bio">{founder.bio}</p>
            </article>
          ))}
          <p className="founders-note" data-reveal>
            Together, we keep the thinking and the execution closely connected.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee + 06 Contact ---------- */

const SUPPORT_OPTIONS = [...SERVICES.map((s) => s.name), "Not sure yet"];

function ContactForm() {
  const [sent, setSent] = useState(false);

  // No form backend yet: compose the enquiry in the visitor's email app.
  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company or brand: ${data.get("company")}`,
      `Support with: ${data.get("support")}`,
      data.get("budget") && `Budget range: ${data.get("budget")}`,
      data.get("timeline") && `Preferred timeline: ${data.get("timeline")}`,
      "",
      data.get("message"),
    ].filter((line) => line !== null && line !== false);
    const subject = `Enquiry from ${data.get("name")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} data-reveal>
      <p className="contact-form-title">Let’s talk</p>
      <label>
        <span>Your name</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        <span>Email address</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Company or brand</span>
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        <span>What would you like support with?</span>
        <select name="support" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          {SUPPORT_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Tell us about your project</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="What are you working on, what would you like to achieve and where do you need support?"
        />
      </label>
      <div className="contact-form-row">
        <label>
          <span>Budget range - optional</span>
          <input name="budget" />
        </label>
        <label>
          <span>Preferred timeline - optional</span>
          <input name="timeline" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary contact-submit">
        Send enquiry <span aria-hidden="true">→</span>
      </button>
      {sent && (
        <p className="contact-status" role="status">
          Your email app should open with your enquiry. If it doesn’t, write to us at{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}
    </form>
  );
}

export function Contact() {
  const phrase = (
    <span className="marquee-item">
      OPTIMAAYA<sup>™</sup> <span className="marquee-dot" /> Imagination, optimised.{" "}
      <span className="marquee-dot" />
    </span>
  );

  return (
    <section id="contact" className="section panel panel--dark contact" aria-labelledby="contact-title">
      <PanelGrid />
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {phrase}
          {phrase}
        </div>
      </div>

      <div className="grid12 contact-body">
        <div className="contact-intro">
          <SectionLabel index="06">Contact</SectionLabel>
          <h2 id="contact-title" className="section-title contact-title" data-reveal>
            What’s next for your brand?
          </h2>
          <p className="section-lede" data-reveal>
            Tell us where you are, what you’re working towards and where you need support. You
            don’t need a finished brief to start the conversation.
          </p>
          <p className="contact-direct" data-reveal>
            Prefer email?
            <a href={`mailto:${EMAIL}`}>Write to us at {EMAIL}</a>
          </p>
          <p className="contact-direct" data-reveal>
            Follow our work
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              Optimaaya on LinkedIn ↗
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */


export function Footer() {
  return (
    <footer className="footer">
      <div className="grid12 footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Optimaaya" className="footer-logo" width="305" height="62" />
          <p>Imagination, optimised.</p>
          <p className="footer-muted">Brand Strategy • Creative • Digital</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>

      <p className="footer-wordmark" aria-hidden="true">OPTIMAAYA</p>

      <div className="grid12 footer-bottom">
        <p>© {new Date().getFullYear()} Optimaaya. All rights reserved.</p>
      </div>
    </footer>
  );
}

export { SectionLabel, useScrollReveal };
