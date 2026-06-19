import Link from "next/link";

import { MediaPanel } from "@/components/ui/MediaPanel";
import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-800 px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_0%,rgba(245,158,11,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(100,116,139,0.18),transparent_40%)]" />
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
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-base font-semibold text-stone-950 shadow-lg shadow-amber-900/40 transition motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-400"
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

        <MediaPanel label="Inspection queue · Fort Worth">
          <div className="grid gap-3 sm:mt-auto">
            <div className="motion-safe:animate-media-float motion-reduce:animate-none rounded-2xl border border-stone-600/80 bg-stone-950/80 p-4 backdrop-blur transition motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-reduce:transform-none hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-900/20">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Storm Inspection Status</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2 py-0.5 text-[11px] font-semibold text-amber-200">
                  <span className="motion-safe:animate-status-pulse motion-reduce:animate-none h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Active
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-stone-700 bg-stone-900/80 p-3">
                  <p className="text-[11px] uppercase text-stone-500">Hail Risk</p>
                  <p className="mt-1 text-sm font-semibold text-amber-200">Elevated</p>
                </div>
                <div className="rounded-xl border border-stone-700 bg-stone-900/80 p-3">
                  <p className="text-[11px] uppercase text-stone-500">Crew Window</p>
                  <p className="mt-1 text-sm font-semibold text-stone-100">This week</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-stone-400">
                <li className="flex gap-2"><span className="text-amber-400">▸</span> Wind damage checklist ready</li>
                <li className="flex gap-2"><span className="text-amber-400">▸</span> Leak triage protocol active</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-600/80 bg-stone-950/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-stone-500">Response Zone</p>
              <p className="mt-1 text-lg font-bold text-stone-100">Fort Worth + Mid-Cities</p>
            </div>
          </div>
        </MediaPanel>
      </div>
    </section>
  );
}
