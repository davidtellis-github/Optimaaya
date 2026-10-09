import { useEffect, useState } from "react";
import logo from "./assests/LOgo.svg";
import logomark from "./assests/logomark.svg";
import "./HomeSections.css";

const EMAIL = "optimaaya@gmail.com";

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
function useScrollReveal() {
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
  }, []);
}

/* ---------- 01 Perspective ---------- */

const OUTCOMES = [
  "A stronger identity.",
  "A considered launch.",
  "Content that connects.",
  "A website that makes the next step easy.",
];

export function Perspective() {
  return (
    <section id="perspective" className="section perspective" aria-labelledby="perspective-title">
      <div className="grid12">
        <SectionLabel index="02">Perspective</SectionLabel>
        <h2 id="perspective-title" className="section-title perspective-title" data-reveal>
          A clear perspective changes what’s possible.
        </h2>
      </div>

      <div className="grid12">
        <div className="bento">
          <article className="bento-card bento-card--feature" data-reveal>
            <span
              className="bento-mark"
              aria-hidden="true"
              style={{ WebkitMaskImage: `url(${logomark})`, maskImage: `url(${logomark})` }}
            />
            <p className="bento-feature-text">
              Whatever your business needs next, we begin by understanding it. Then we bring the
              right ideas, channels and expertise together around a clear direction.
            </p>
          </article>

          {OUTCOMES.map((outcome, i) => (
            <article key={outcome} className="bento-card" data-reveal style={{ "--i": i }}>
              <span className="bento-index">0{i + 1}</span>
              <p className="bento-text">{outcome}</p>
              <Sparkle />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 What we do ---------- */

const SERVICES = [
  {
    name: "Brand & Creative",
    text: "Define what your brand stands for and bring it to life through identity, storytelling and creative direction.",
    tags: ["Brand positioning", "Tone of voice", "Brand guidelines", "Visual identity", "Campaign concepts", "Launch planning"],
  },
  {
    name: "Social & Influence",
    text: "Build a presence people recognise, connect with and return to through content, social media and creator partnerships.",
    tags: ["Social strategy", "Content production", "Video content", "Influencer campaigns", "Personal branding", "On-camera coaching"],
  },
  {
    name: "Performance Marketing",
    text: "Connect audience insight, campaign creative and paid media to your business goals.",
    tags: ["Meta & Google ads", "Audience targeting", "Creative testing", "Landing pages", "Conversion tracking", "Reporting"],
  },
  {
    name: "Websites & Digital Experiences",
    text: "Create websites and online stores that communicate clearly and make it easier for people to take action.",
    tags: ["Website strategy", "Design & development", "Landing pages", "Shopify storefronts", "Checkout setup"],
  },
  {
    name: "Search & Visibility",
    text: "Help your business become easier to discover through search engines and AI-powered search experiences.",
    tags: ["SEO", "Technical SEO", "On-page optimisation", "Answer engine optimisation", "AI visibility audits"],
  },
  {
    name: "Automation & Measurement",
    text: "Connect your marketing systems, follow up with intent and understand what your efforts contribute.",
    tags: ["Funnel planning", "CRM integration", "Marketing automation", "Analytics & tracking", "Performance reporting"],
  },
];

export function Services() {
  return (
    <section id="services" className="section panel panel--dark services" aria-labelledby="services-title">
      <PanelGrid />
      <div className="grid12">
        <SectionLabel index="03">Services</SectionLabel>
        <h2 id="services-title" className="section-title services-title" data-reveal>
          What we do
        </h2>
      </div>

      <ol className="service-list">
        {SERVICES.map((service, i) => (
          <li key={service.name} className="service-row grid12" data-reveal>
            <span className="service-index">0{i + 1}</span>
            <h3 className="service-name">{service.name}</h3>
            <div className="service-detail">
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
      OPTIMAAYA<sup>™</sup> <span className="marquee-dash" /> Imagination, optimised.{" "}
      <span className="marquee-dash" />
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
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

const FOOTER_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

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
          {FOOTER_LINKS.map((link) => (
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
