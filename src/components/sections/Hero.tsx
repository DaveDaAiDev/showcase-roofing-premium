import Link from "next/link";

import { siteContent } from "@/content/site";

export function Hero() {
  const { hero, heroReport } = siteContent;

  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-zinc-950 text-amber-50">
        <div
          aria-hidden
          className="bg-roof-grid pointer-events-none absolute inset-0 opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(245,158,11,0.08) 1px, transparent 1px), linear-gradient(45deg, rgba(245,158,11,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px, 72px 72px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-32 h-72 w-[140%] rotate-[-6deg] bg-stone-900/90"
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-28 sm:px-6 sm:pt-14 sm:pb-32">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 uppercase">
                {hero.eyebrow}
              </p>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-3xl leading-[1.1] font-bold tracking-tight text-stone-50 sm:text-4xl lg:text-[2.65rem]">
                  {hero.title}
                </h1>
                <p className="max-w-xl text-base text-amber-100/80 sm:text-lg">{hero.description}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="btn-shine rounded-md bg-amber-400 px-5 py-3 text-sm font-bold tracking-wide text-zinc-950 uppercase transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-300"
                >
                  {hero.primaryCta}
                </Link>
                <Link
                  href="/services"
                  className="rounded-md border border-amber-300/60 px-5 py-3 text-sm font-semibold text-amber-50 transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-zinc-800"
                >
                  {hero.secondaryCta}
                </Link>
              </div>

              <ul className="flex flex-wrap gap-2">
                {hero.trustPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-sm border border-amber-500/30 bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-amber-100/90"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="relative rounded-lg border border-amber-600/40 border-l-4 border-l-amber-400 bg-zinc-900 p-5 shadow-xl sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.2em] text-amber-400 uppercase">
                    {heroReport.panelTitle}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-stone-100">{heroReport.responseZone}</p>
                </div>
                <span className="rounded-sm bg-amber-400/15 px-2 py-1 text-[0.65rem] font-bold tracking-wide text-amber-300 uppercase">
                  {heroReport.queueLabel}
                </span>
              </div>

              <ul className="space-y-3">
                {heroReport.metrics.map((metric) => (
                  <li
                    key={metric.label}
                    className="flex items-center justify-between gap-3 rounded-sm bg-zinc-800/80 px-3 py-2 text-sm"
                  >
                    <span className="text-amber-100/80">{metric.label}</span>
                    <span className="font-semibold text-amber-200">{metric.value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-amber-600/30 pt-4">
                <p className="text-[0.65rem] font-bold tracking-[0.16em] text-amber-400 uppercase">
                  Inspection checklist
                </p>
                <ul className="mt-2 space-y-1.5">
                  {heroReport.checklist.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-amber-100/80">
                      <span className="inline-block h-2 w-2 rounded-sm bg-amber-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-16 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {heroReport.triagePreview.map((item) => (
            <div
              key={item.label}
              className="rounded-md border border-amber-500/40 bg-zinc-900 p-4 shadow-lg"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-bold tracking-wide text-amber-300 uppercase">{item.label}</p>
                <span className="rounded-sm bg-amber-400/20 px-1.5 py-0.5 text-[0.6rem] font-bold text-amber-200 uppercase">
                  Flag
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-stone-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
