import { Link, Navigate, useParams } from "react-router-dom";
import { GridOverlay, SiteNav, useMenu } from "./SiteChrome";
import { Footer, useScrollReveal } from "./HomeSections";
import { PROJECTS, projectBySlug } from "./projects";
import "./ProjectPage.css";

// Thin line icons for the "What we delivered" cards (64×64, 1px strokes), cycled by index.
const ICONS = [
  <>
    <circle cx="32" cy="32" r="22" />
    <path d="M32 18v28M18 32h28" />
  </>,
  <>
    <path d="M32 12 52 22 32 32 12 22Z" />
    <path d="M12 30l20 10 20-10M12 38l20 10 20-10" />
  </>,
  <>
    <rect x="10" y="20" width="44" height="30" rx="4" />
    <circle cx="32" cy="35" r="9" />
    <path d="M24 20l3-6h10l3 6" />
  </>,
  <>
    <rect x="12" y="14" width="40" height="36" rx="4" />
    <path d="M28 25v14l12-7Z" />
  </>,
  <>
    <circle cx="24" cy="24" r="7" />
    <circle cx="42" cy="28" r="5" />
    <path d="M10 50c0-8 6-13 14-13s14 5 14 13M36 50c0-6 3-10 8-10s8 4 8 10" />
  </>,
  <>
    <path d="M12 50h40" />
    <path d="M18 44V32M28 44V22M38 44V28M48 44V16" />
  </>,
];

function ProjectHero({ project }) {
  return (
    <header className="pj-hero grid12">
      <nav className="pj-crumbs" aria-label="Breadcrumb" data-reveal>
        <a href="/#work" className="pj-back">
          <span aria-hidden="true">←</span> All work
        </a>
        <span aria-hidden="true">/</span>
        <span>{project.title}</span>
      </nav>

      <h1 className="pj-headline" data-reveal style={{ "--i": 1 }}>
        {project.headline}
      </h1>

      <div className="pj-intro" data-reveal style={{ "--i": 2 }}>
        <p className="pj-client">{project.title}</p>
        <p className="pj-lede">{project.lede}</p>
        <ul className="pj-tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="pj-meta" data-reveal style={{ "--i": 3 }}>
        <p className="pj-meta-label">Selected work</p>
        <p className="pj-meta-sector">{project.sector}</p>
        {project.status && <span className="pj-status">{project.status}</span>}
      </div>

      <figure className="pj-visual" style={{ "--aspect": project.aspect }}>
        <img src={project.src} alt={`${project.title}: project visual`} />
      </figure>
    </header>
  );
}

function Glance({ items }) {
  return (
    <section className="pj-glance grid12" aria-label="At a glance">
      <p className="pj-kicker" data-reveal>At a glance</p>
      <dl className="pj-glance-list" style={{ "--cols": items.length }}>
        {items.map((item, i) => (
          <div key={item.label} data-reveal style={{ "--i": i }}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Situation({ project }) {
  return (
    <section className="pj-section grid12" aria-labelledby="pj-situation">
      <div className="pj-situation-text" data-reveal>
        <h2 id="pj-situation" className="pj-kicker">The situation</h2>
        <p>{project.situation}</p>
      </div>
      <blockquote className="pj-pull" data-reveal style={{ "--i": 1 }}>
        {project.pullLine}
      </blockquote>
    </section>
  );
}

function Approach({ steps }) {
  return (
    <section className="pj-section grid12" aria-labelledby="pj-approach">
      <div className="pj-section-head" data-reveal>
        <h2 id="pj-approach" className="pj-kicker">The approach</h2>
        <p className="pj-section-title">How the work came together, step by step.</p>
      </div>
      <ol className="pj-flow" style={{ "--n": steps.length }}>
        {steps.map((s, i) => (
          <li key={s.step} data-reveal style={{ "--i": i }}>
            <span className="pj-flow-index">0{i + 1}</span>
            <h3>{s.step}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// Zayzo: the ecosystem as connected nodes, each marked ongoing or in planning.
function Ecosystem({ nodes }) {
  return (
    <section className="pj-section grid12" aria-labelledby="pj-ecosystem">
      <div className="pj-section-head" data-reveal>
        <h2 id="pj-ecosystem" className="pj-kicker">Inside the system</h2>
        <p className="pj-section-title">One operating model, from research to learning experiences.</p>
      </div>
      <ol className="pj-eco">
        {nodes.map((node, i) => (
          <li
            key={node.step}
            className={node.state === "Ongoing" ? "is-live" : "is-planned"}
            data-reveal
            style={{ "--i": i }}
          >
            <span className="pj-eco-state">{node.state}</span>
            <h3>{node.step}</h3>
            <p>{node.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Delivered({ items }) {
  return (
    <section className="pj-section grid12" aria-labelledby="pj-delivered">
      <div className="pj-section-head" data-reveal>
        <h2 id="pj-delivered" className="pj-kicker">What we delivered</h2>
      </div>
      <ul className="pj-cards">
        {items.map((item, i) => (
          <li key={item} className="pj-card" data-reveal style={{ "--i": i }}>
            <svg viewBox="0 0 64 64" aria-hidden="true">
              {ICONS[i % ICONS.length]}
            </svg>
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Results({ project }) {
  if (project.metrics) {
    return (
      <section className="pj-results" aria-labelledby="pj-results">
        <div className="grid12">
          <div className="pj-section-head" data-reveal>
            <h2 id="pj-results" className="pj-kicker">Results</h2>
            <p className="pj-section-title">What the work moved.</p>
          </div>
          <ul className="pj-metrics" style={{ "--n": project.metrics.length }}>
            {project.metrics.map((m, i) => (
              <li key={m.label} data-reveal style={{ "--i": i }}>
                <span className="pj-metric-value">{m.value}</span>
                <span className="pj-metric-label">{m.label}</span>
                <p>{m.definition}</p>
                <span className="pj-reported">Portfolio-reported</span>
              </li>
            ))}
          </ul>
          <p className="pj-footnote" data-reveal>
            Figures are portfolio-reported and shown with their exact definitions.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="pj-results" aria-labelledby="pj-outputs">
      <div className="grid12">
        <div className="pj-section-head" data-reveal>
          <h2 id="pj-outputs" className="pj-kicker">Outputs</h2>
          <p className="pj-section-title">What the work produced.</p>
        </div>
        <ul className="pj-outputs">
          {project.outputs.map((o, i) => (
            <li key={o} data-reveal style={{ "--i": i }}>
              <span aria-hidden="true">0{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
        {project.outputsNote && (
          <p className="pj-footnote" data-reveal>
            {project.outputsNote}
          </p>
        )}
      </div>
    </section>
  );
}

function ComingSoon() {
  return (
    <section className="pj-section grid12">
      <div className="pj-soon" data-reveal>
        <p className="pj-kicker">Case study</p>
        <p className="pj-soon-title">The full story is being written.</p>
        <p>
          The brief, approach and results for this project are coming soon. Want the details
          sooner? Ask us about it.
        </p>
        <a href="/#contact" className="btn btn-primary">
          Ask about this project <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

function NextProject({ project }) {
  const i = PROJECTS.indexOf(project);
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  return (
    <section className="pj-next grid12" aria-label="Next project">
      <Link to={`/work/${next.slug}`} className="pj-next-card" data-reveal>
        <span className="pj-kicker">Next project</span>
        <span className="pj-next-title">
          {next.title} <span aria-hidden="true">→</span>
        </span>
        <span className="pj-next-sector">{next.sector}</span>
        <img src={next.src} alt="" />
      </Link>
      <div className="pj-cta" data-reveal style={{ "--i": 1 }}>
        <p>Have a project in mind?</p>
        <a href="/#contact" className="btn btn-primary">
          Let’s talk about your brand <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectBySlug(slug);
  const [menuOpen, setMenuOpen] = useMenu();
  useScrollReveal(slug);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className={`pj-page${menuOpen ? " menu-open" : ""}`}>
      <GridOverlay />
      <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main key={slug} className="pj-main">
        <ProjectHero project={project} />
        <Glance items={project.glance} />
        {project.kind === "full" ? (
          <>
            <Situation project={project} />
            {project.ecosystem ? <Ecosystem nodes={project.ecosystem} /> : <Approach steps={project.approach} />}
            <Delivered items={project.deliverables} />
            <Results project={project} />
          </>
        ) : (
          <ComingSoon />
        )}
        <NextProject project={project} />
      </main>
      <Footer />
    </div>
  );
}
