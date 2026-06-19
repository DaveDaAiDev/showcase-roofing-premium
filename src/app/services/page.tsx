import Link from "next/link";

import { Services } from "@/components/sections/Services";
import { siteContent } from "@/content/site";

export default function ServicesPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto mb-10 max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">All Services</p>
        <h1 className="mt-2 text-3xl font-bold text-stone-50 sm:text-4xl">Roofing services for storm, repair, and replacement.</h1>
        <p className="mt-3 max-w-2xl text-stone-400">{siteContent.demoNote}</p>
        <Link href="/#contact" className="mt-6 inline-flex rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 hover:bg-amber-400">
          Request Inspection
        </Link>
      </div>
      <Services />
    </div>
  );
}
