import Link from "next/link";

import { MediaPanel } from "@/components/ui/MediaPanel";
import { siteContent } from "@/content/site";

export function Hero() {
  const { heroReport } = siteContent;

  return (
    <section className="relative overflow-hidden border-b border-stone-800 px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(245,158,11,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(71,85,105,0.25),transparent_45%)]" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
            {siteContent.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
            {siteContent.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-stone-400">{siteContent.hero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="btn-shine group relative inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-base font-semibold text-stone-950 shadow-lg shadow-amber-900/40 transition motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-400"
            >
              <span className="pointer-events-none absolute inset-0 motion-safe:animate-shine-sweep motion-reduce:animate-none">
                <span className="absolute inset-y-0 w-1/3 bg-white/25 blur-sm" />
              </span>
              <span className="relative">{siteContent.hero.primaryCta}</span>
              <span className="relative transition motion-safe:duration-200 motion-safe:group-hover:translate-x-1 motion-reduce:transform-none">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-600 bg-stone-900/60 px-6 py-3.5 text-base font-semibold text-stone-100 transition hover:border-amber-500/40 hover:bg-stone-900"
            >
              {siteContent.hero.secondaryCta}
            </Link>
          </div>

          <ul className="mt-8 grid gap-2 text-sm text-stone-300 sm:grid-cols-3">
            {siteContent.hero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 rounded-lg border border-stone-700 bg-stone-900/60 px-3 py-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500/20 text-[10px] text-amber-300">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <MediaPanel label="Storm Response Board · Fort Worth">
          <div className="grid gap-3 sm:mt-auto">
            <div className="rounded-2xl border border-stone-600/80 bg-stone-950/90 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">{heroReport.panelTitle}</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2 py-0.5 text-[11px] font-semibold text-amber-200">
                  <span className="motion-safe:animate-status-pulse motion-reduce:animate-none h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Live queue
                </span>
              </div>
              <p className="mt-3 text-sm text-stone-500">{heroReport.statusLabel}</p>
              <p className="text-lg font-semibold text-stone-100">{heroReport.statusValue}</p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {heroReport.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-stone-700 bg-stone-900/80 p-2.5">
                    <p className="text-[10px] uppercase tracking-wide text-stone-500">{metric.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-amber-100">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-600/80 bg-stone-950/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">Inspection checklist</p>
              <ul className="mt-3 space-y-2">
                {heroReport.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-stone-400">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-700/30 bg-gradient-to-r from-stone-950 to-amber-950/20 p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-stone-500">Response Zone</p>
              <p className="mt-1 text-base font-bold text-stone-100">{heroReport.responseZone}</p>
            </div>
          </div>
        </MediaPanel>
      </div>
    </section>
  );
}
