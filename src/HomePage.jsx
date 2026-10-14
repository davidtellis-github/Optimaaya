import { useEffect } from "react";
import Hero from "./Hero";
import WorkSection from "./WorkSection";
import {
  Collaboration,
  Contact,
  Footer,
  Perspective,
  Process,
  Services,
  useScrollReveal,
} from "./HomeSections";

// Section order follows the "01 / Home" handoff, with Work moved directly under the hero.
export default function HomePage() {
  useScrollReveal();

  // Arriving from another page with "/#work" etc.: the browser tries the jump before
  // React has rendered, so do it once the sections exist. (Same-page hash links are
  // left to the browser's own smooth scroll.)
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Hero />
      <WorkSection />
      <Perspective />
      <Services />
      <Process />
      <Collaboration />
      <Contact />
      <Footer />
    </>
  );
}
