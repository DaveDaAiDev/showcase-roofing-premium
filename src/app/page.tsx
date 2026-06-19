import { Contact } from "@/components/sections/Contact";
import { DiagnosticStrip } from "@/components/sections/DiagnosticStrip";
import { Hero } from "@/components/sections/Hero";
import { LocalPresence } from "@/components/sections/LocalPresence";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <DiagnosticStrip />
      <Services />
      <LocalPresence />
      <Reviews />
      <ServiceArea />
      <Contact />
    </>
  );
}
