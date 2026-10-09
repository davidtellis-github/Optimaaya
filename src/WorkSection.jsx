import { useEffect, useState } from "react";
import { LiquidGlassCarousel } from "@/components/ui/liquid-glass-carousel";
import { SectionLabel } from "./HomeSections";
import "./WorkSection.css";

// Placeholder projects (the component's demo photos). Swap src/title for real case studies.
const photo = (id) =>
  `https://images.unsplash.com/photo-${id}?w=900&h=1200&q=85&auto=format&fit=crop`;

const PROJECTS = [
  { title: "Project One", src: photo("1600585154340-be6161a56a0c"), aspect: 3 / 4 },
  { title: "Project Two", src: photo("1514906689926-25ba6dcb584b"), aspect: 3 / 4 },
  { title: "Project Three", src: photo("1568557412756-7d219873dd11"), aspect: 3 / 4 },
  { title: "Project Four", src: photo("1581892805885-73bdd91beff0"), aspect: 3 / 4 },
  { title: "Project Five", src: photo("1482938289607-e9573fc25ebb"), aspect: 3 / 4 },
  { title: "Project Six", src: photo("1610846202780-b4d9837371ea"), aspect: 3 / 4 },
  { title: "Project Seven", src: photo("1527630941-4a229fd674ab"), aspect: 3 / 4 },
  { title: "Project Eight", src: photo("1603786420263-ad59136a7409"), aspect: 3 / 4 },
];

// lensScale and panelFill are fractions of the carousel height, so they change with it.
// Desktop: 1700px area; lens 0.835 = the 1.42 lens chosen for the 1000px area, now fully inside;
// panels 28.2% = 480px. Phones: 640px area; lens 0.82, panels 48% = ~307px.
const LAYOUT = {
  desktop: { lensScale: 0.835, panelFill: 0.282 },
  mobile: { lensScale: 0.82, panelFill: 0.48 },
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
          panelHeight={720}
          fullWidthLens
          imageOverlay={false}
          lensScale={layout.lensScale}
          panelFill={layout.panelFill}
          labelGap={44}
          transparent
        />
      </div>
    </section>
  );
}
