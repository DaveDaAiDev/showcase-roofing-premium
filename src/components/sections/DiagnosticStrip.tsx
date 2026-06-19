import Link from "next/link";

import { siteContent } from "@/content/site";

export function DiagnosticStrip() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="group relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-amber-600/40 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 shadow-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(245,158,11,0.12),transparent_50%)]" />
        <div className="relative flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300/90">Next step</p>
            <h2 className="mt-1 text-xl font-bold text-stone-50 sm:text-2xl">{siteContent.diagnostic.title}</h2>
            <p className="mt-2 max-w-lg text-sm text-stone-400">{siteContent.diagnostic.description}</p>
          </div>
          <Link
            href="#contact"
            className="btn-shine group inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-stone-950 transition motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-400"
          >
            {siteContent.diagnostic.cta}
            <span className="transition motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transform-none">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
