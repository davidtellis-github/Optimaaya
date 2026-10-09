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
export default function App() {
  useScrollReveal();

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
