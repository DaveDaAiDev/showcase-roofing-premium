import { Contact } from "@/components/sections/Contact";
import { DiagnosticStrip } from "@/components/sections/DiagnosticStrip";
import { Hero } from "@/components/sections/Hero";
import { LocalPresence } from "@/components/sections/LocalPresence";
import { ProjectProof } from "@/components/sections/ProjectProof";
import { Reviews } from "@/components/sections/Reviews";
import { Services } from "@/components/sections/Services";
import { StormTriage } from "@/components/sections/StormTriage";

export default function Home() {
  return (
    <>
      <Hero />
      <DiagnosticStrip />
      <StormTriage />
      <Services />
      <ProjectProof />
      <LocalPresence />
      <Reviews />
      <Contact />
    </>
  );
}
