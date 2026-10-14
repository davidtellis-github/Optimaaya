import { useEffect, useState } from "react";
import { LiquidGlassCarousel } from "@/components/ui/liquid-glass-carousel";
import { SectionLabel } from "./HomeSections";
import "./WorkSection.css";
import waterSolutions from "./assests/work/water-solutions.jpg";
import silverIdols from "./assests/work/silver-idols.jpg";
import zayzoStories from "./assests/work/zayzo-stories.jpg";
import borokaGinSoda from "./assests/work/boroka-gin-soda.jpg";
import houseOfAradhana from "./assests/work/house-of-aradhana.jpg";

// Work samples (mostly 827 × 620; Aradhana logo 1127 × 1200). Titles for the first two are descriptive placeholders.
const ASPECT = 827 / 620;

const PROJECTS = [
  { title: "Water Solutions Website", src: waterSolutions, aspect: ASPECT },
  { title: "Silver Idols Storefront", src: silverIdols, aspect: ASPECT },
  { title: "Zayzo Stories", src: zayzoStories, aspect: ASPECT },
  { title: "Boroka Gin Soda", src: borokaGinSoda, aspect: ASPECT },
  { title: "The House of Aradhana", src: houseOfAradhana, aspect: 1127 / 1200 },
];

// lensScale and panelFill are fractions of the carousel height, so they change with it.
// Desktop: 1700px area; lens 0.835 = the 1.42 lens chosen for the 1000px area, now fully inside;
// panels 28.2% = 480px. Phones: 640px area; lens 0.88, panels 42% = ~269px.
const LAYOUT = {
  desktop: { lensScale: 0.855, panelFill: 0.282 },
  mobile: { lensScale: 0.88, panelFill: 0.42 }, // captions stay out of the lens rim
};

function useIsMobile() {
  const query = "(max-width: 900px)";
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (event) => setIsMobile(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

export default function WorkSection() {
  const layout = useIsMobile() ? LAYOUT.mobile : LAYOUT.desktop;

  return (
    <section id="work" className="work" aria-label="Work">
      

      <div className="work-carousel">
        <LiquidGlassCarousel
          items={PROJECTS}
          background="#FFFAEB"
          panelHeight={420}
          fullWidthLens
          imageOverlay={false}
          lensScale={layout.lensScale}
          panelFill={layout.panelFill}
          labelGap={64}
          showTitle={false}
          showCounter={false}
          captions
          captionColor="#231C3E"
          autoplaySpeed={30}
          transparent
        />
      </div>
    </section>
  );
}
