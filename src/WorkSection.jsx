import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiquidGlassCarousel } from "@/components/ui/liquid-glass-carousel";
import { SectionLabel } from "./HomeSections";
import "./WorkSection.css";
import { PROJECTS } from "./projects";

// lensScale and panelFill are fractions of the carousel height, so they change with it.
// Desktop: 1700px area; lens 0.835 = the 1.42 lens chosen for the 1000px area, now fully inside;
// panels 22.5% = ~383px. Phones: 640px area; lens 0.88, panels 34% = ~218px.
const LAYOUT = {
  desktop: { lensScale: 0.855, panelFill: 0.225 },
  mobile: { lensScale: 0.88, panelFill: 0.34 }, // captions stay out of the lens rim
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
  const navigate = useNavigate();

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
          onSelect={(i) => navigate(`/work/${PROJECTS[i].slug}`)}
          transparent
        />
      </div>
    </section>
  );
}
