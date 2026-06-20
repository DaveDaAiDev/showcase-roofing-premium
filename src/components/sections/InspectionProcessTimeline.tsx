import Link from "next/link";

import { siteContent } from "@/content/site";

export function InspectionProcessTimeline() {
  const { inspectionProcess } = siteContent;

  return (
    <section className="rounded-2xl border border-zinc-700/60 bg-white px-4 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold tracking-[0.18em] text-amber-700 uppercase">Inspection process</p>
          <h2 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">{inspectionProcess.title}</h2>
          <p className="mt-3 text-sm text-zinc-600 sm:text-base">{inspectionProcess.description}</p>
        </div>

        <ol className="relative grid gap-6 md:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-8 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-amber-400 via-amber-300 to-zinc-300 md:block"
          />
          {inspectionProcess.steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex flex-col items-start md:items-center md:text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-md border-2 border-amber-400 bg-zinc-950 text-sm font-bold text-amber-300 shadow-lg">
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{step.description}</p>
                {index < inspectionProcess.steps.length - 1 ? (
                  <div aria-hidden className="mt-4 h-8 w-0.5 bg-amber-300 md:hidden" />
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Link
            href="#contact"
            className="inline-flex rounded-md bg-amber-400 px-5 py-3 text-sm font-bold tracking-wide text-zinc-950 uppercase transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-300"
          >
            {inspectionProcess.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
