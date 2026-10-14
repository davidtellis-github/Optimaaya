// Work carousel items and their project pages, in carousel order.
// Full case studies come from "Optimaaya_Portfolio_Case_Study_Research.pdf": headlines are
// its suggested lines, metrics carry its exact definitions and stay labelled as
// portfolio-reported. Short pages only describe what the work image itself shows.
import boroka from "./assests/work/boroka-gin-soda.jpg";
import zayzo from "./assests/work/zayzo-stories.jpg";
import amateurVodka from "./assests/work/amateur-vodka.svg";
import porsche from "./assests/work/porsche-centre-bengaluru.svg";
import waterSolutions from "./assests/work/water-solutions.jpg";
import silverIdols from "./assests/work/silver-idols.jpg";
import aradhana from "./assests/work/house-of-aradhana.jpg";

const LANDSCAPE = 827 / 620;

export const PROJECTS = [
  {
    slug: "boroka",
    title: "Boroka",
    src: boroka,
    aspect: LANDSCAPE,
    kind: "full",
    sector: "Ready-to-drink beverages",
    headline: "Local stories. Wider conversations. Real movement.",
    lede: "Regional-first campaigns that joined creators, culture and marketplace movement across key Indian markets.",
    tags: ["360° marketing", "Creator partnerships", "Social-first content", "On-ground activation"],
    glance: [
      { label: "Sector", value: "Ready-to-drink beverages" },
      { label: "Timeframe", value: "September 2025 onward" },
      { label: "Markets", value: "Karnataka · Goa · Rajasthan · Pondicherry" },
      { label: "Channels", value: "Instagram · Creators · On-ground" },
    ],
    situation:
      "The work was framed around getting the product into the right hands, not simply publishing content: connecting local audiences, platform content and brand visibility with on-ground market activity.",
    pullLine: "Content, creators and market-specific execution, working as one.",
    approach: [
      { step: "Market selection", text: "Prioritise the regional markets and settings the brand should live in." },
      { step: "Creator choices", text: "Source, brief and track regional and national creators, including Godgodo TV, Monisha and Deekshith." },
      { step: "Content production", text: "Content strategy, messaging, photoshoots, short-form concepts and carousels." },
      { step: "Amplification", text: "Launch and run the brand’s Instagram presence in-house, with ongoing community activity." },
      { step: "Retail linkage", text: "Coordinate multi-market activity alongside on-ground sales priorities." },
      { step: "Measurement", text: "Track creator deliverables and content performance across markets." },
    ],
    deliverables: [
      "In-house Instagram launch",
      "Content strategy & messaging",
      "Creative direction & photoshoots",
      "Reels & carousels",
      "Creator briefs & tracking",
      "Coastal-themed feed content",
    ],
    metrics: [
      { value: "2.5M+", label: "Reel views", definition: "Views on the single top-performing reel; not combined campaign reach." },
      { value: "₹3.6 lakh", label: "Direct tertiary sales", definition: "Attributed to a Pondicherry activation." },
      { value: "4", label: "Regions activated", definition: "Karnataka, Goa, Rajasthan and Pondicherry." },
    ],
  },
  {
    slug: "zayzo-stories",
    title: "Zayzo Stories",
    src: zayzo,
    aspect: LANDSCAPE,
    kind: "full",
    status: "Active · in progress",
    sector: "Content & podcast property",
    headline: "Beyond the feed: building the system behind the story.",
    lede: "An evolving content ecosystem designed to do more than publish, joining research, production, audience relationships and future learning experiences.",
    tags: ["Social strategy", "Podcast", "Personal branding", "Monetisation planning"],
    glance: [
      { label: "Sector", value: "Content & podcast property" },
      { label: "Timeframe", value: "April 2026 onward" },
      { label: "Status", value: "Active · in progress" },
      { label: "Channels", value: "Social · Podcast · Learning programs" },
    ],
    situation:
      "Not just another content calendar. The work connects content production with audience building, personal brand development, repeatable operations and possible future revenue formats.",
    pullLine: "A deliberate operating model, not a posting schedule.",
    ecosystem: [
      { step: "Research", text: "Guest selection, research, topic development and interview design.", state: "Ongoing" },
      { step: "Production", text: "Content ideas, scripts and platform-specific publishing plans.", state: "Ongoing" },
      { step: "Presence", text: "On-camera communication and presentation coaching.", state: "Ongoing" },
      { step: "Learning experiences", text: "Workshops, masterclasses and other training programs.", state: "In planning" },
      { step: "Operations", text: "Program operations and launch planning.", state: "In planning" },
    ],
    deliverables: [
      "End-to-end social strategy",
      "Scripts & publishing plans",
      "Podcast guest research",
      "On-camera coaching",
      "Monetisation framework",
      "Launch planning",
    ],
    outputs: [
      "An ongoing research-to-publishing workflow for the podcast and social channels",
      "A coached on-camera presence",
      "A monetisation framework for workshops and masterclasses, in planning",
    ],
    outputsNote: "Work in progress. Audience and revenue figures will be published once approved.",
  },
  {
    slug: "amateur-vodka",
    title: "Amateur Vodka",
    src: amateurVodka,
    aspect: LANDSCAPE,
    kind: "full",
    sector: "Premium spirits",
    headline: "Premium is a feeling. We built the language around it.",
    lede: "A premium-first content language across social, production and collateral, making the brand’s character felt rather than claimed.",
    tags: ["Brand positioning", "Content architecture", "Art direction", "Social"],
    glance: [
      { label: "Sector", value: "Premium spirits" },
      { label: "Scope", value: "Positioning · Social · Production" },
      { label: "Channels", value: "Social · Print · Digital collateral" },
    ],
    situation:
      "The ambition was to make premium character felt through visual and digital touchpoints, rather than repeatedly claiming premium status. The challenge: consistent positioning, visual expression and platform execution.",
    pullLine: "Make premium felt, not claimed.",
    approach: [
      { step: "Positioning", text: "Brand positioning strategy as the base for every touchpoint." },
      { step: "Content architecture", text: "A premium-first content system with platform-specific storytelling." },
      { step: "Art direction", text: "High-contrast photographic treatments that carry the brand’s character." },
      { step: "Feed system", text: "Styled social feeds built on repeatable templates." },
      { step: "Reels", text: "Dynamic reels concepts and short-form video direction." },
      { step: "Production", text: "Directing photoshoots and production teams to keep every output consistent." },
    ],
    deliverables: [
      "Brand positioning strategy",
      "Premium-first content system",
      "Styled social feeds",
      "Reels concepts & direction",
      "Photoshoot direction",
      "Print & digital collateral",
    ],
    outputs: [
      "A coherent visual and editorial identity across the brand’s digital presence",
      "Repeatable templates that keep the feed consistent",
      "Art direction held consistent across shoots and production teams",
      "Print and digital collateral in the same language",
    ],
    outputsNote: "This case is about creative direction and consistency, so it’s told through outputs rather than numbers.",
  },
  {
    slug: "porsche-centre-bengaluru",
    title: "Porsche Centre Bengaluru",
    src: porsche,
    aspect: LANDSCAPE,
    kind: "full",
    sector: "Luxury automotive retail",
    headline: "Every touchpoint should feel considered.",
    lede: "Personalised luxury touchpoints and customer communication: curated guest moments and feedback-led engagement that turned a luxury experience into tangible customer responses.",
    tags: ["Client engagement", "Experiential", "Customer communication"],
    glance: [
      { label: "Sector", value: "Luxury automotive retail" },
      { label: "Timeframe", value: "April – June 2024" },
      { label: "Scope", value: "Events · Communication · Feedback" },
    ],
    situation:
      "Marketing beyond paid or organic social: high-consideration customer touchpoints, service experience and direct response, all matched to the expectations of a luxury customer.",
    pullLine: "Orchestrating moments that match luxury expectations.",
    approach: [
      { step: "Bespoke events", text: "Luxury customer engagement through bespoke events." },
      { step: "Personal communication", text: "Personalised, standards-led communication with clients." },
      { step: "Delivery moments", text: "Premium experience design and detail-led vehicle delivery moments." },
      { step: "Accessory catalogue", text: "Catalogue communication and targeted guest touchpoints." },
      { step: "Feedback loop", text: "Client-feedback collection and relationship communication." },
    ],
    deliverables: [
      "Bespoke client events",
      "Personalised communication",
      "Vehicle delivery moments",
      "Accessory catalogue",
      "Targeted guest touchpoints",
      "Feedback collection",
    ],
    metrics: [
      { value: "30%", label: "Feedback response rate", definition: "Response rate to client feedback requests; not a general engagement rate." },
      { value: "₹1 lakh+", label: "Campaign enquiries", definition: "Enquiry value from accessory catalogues and guest delivery moments; not sales or booked revenue." },
    ],
  },
  {
    slug: "water-solutions",
    title: "Water Solutions Website",
    src: waterSolutions,
    aspect: LANDSCAPE,
    kind: "short",
    sector: "Water solutions",
    headline: "Clean, pure water, clearly explained.",
    lede: "A website for a water solutions business, built around a clear promise of clean, pure water for every home and business.",
    tags: ["Website", "Web design"],
    glance: [
      { label: "Sector", value: "Water solutions" },
      { label: "Deliverable", value: "Website" },
    ],
  },
  {
    slug: "silver-idols",
    title: "Silver Idols Storefront",
    src: silverIdols,
    aspect: LANDSCAPE,
    kind: "short",
    sector: "Handcrafted idols",
    headline: "Silver, 24 karat gold and a pair of hands.",
    lede: "An online storefront for handcrafted silver idols, chased by hand and finished in 24K gold.",
    tags: ["E-commerce", "Storefront design"],
    glance: [
      { label: "Sector", value: "Handcrafted idols" },
      { label: "Deliverable", value: "Online storefront" },
    ],
  },
  {
    slug: "house-of-aradhana",
    title: "The House of Aradhana",
    src: aradhana,
    aspect: 1127 / 1200,
    kind: "short",
    sector: "Devotional brand",
    headline: "A monogram, a diya and a lotus.",
    lede: "A brand identity for The House of Aradhana: an interlocking H and A monogram holding a diya, with a lotus mark and a classical wordmark.",
    tags: ["Brand identity", "Logo design"],
    glance: [
      { label: "Sector", value: "Devotional brand" },
      { label: "Deliverable", value: "Brand identity" },
    ],
  },
];

export const projectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug);
