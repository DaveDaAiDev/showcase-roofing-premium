import { Contact } from "@/components/sections/Contact";
import { DocumentationPacket } from "@/components/sections/DocumentationPacket";
import { Hero } from "@/components/sections/Hero";
import { InspectionProcessTimeline } from "@/components/sections/InspectionProcessTimeline";
import { LocalPresence } from "@/components/sections/LocalPresence";
import { ProjectProof } from "@/components/sections/ProjectProof";
import { Reviews } from "@/components/sections/Reviews";
import { Services } from "@/components/sections/Services";
import { StormTriage } from "@/components/sections/StormTriage";

export default function Home() {
  return (
    <>
      <Hero />
      <StormTriage />
      <Services />
      <ProjectProof />
      <DocumentationPacket />
      <InspectionProcessTimeline />
      <LocalPresence />
      <Reviews />
      <Contact />
    </>
  );
}
