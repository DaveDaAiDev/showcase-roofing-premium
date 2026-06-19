import { siteContent } from "@/content/site";

export function ServiceArea() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-3xl border border-stone-700 bg-stone-900/80 p-7 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">Service Area</p>
          <h2 className="mt-2 text-3xl font-bold text-stone-50 sm:text-4xl">
            Proudly serving Fort Worth and nearby communities.
          </h2>
          <p className="mt-3 text-stone-400">
            Local coverage keeps storm response practical and inspection windows realistic.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {siteContent.serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-stone-600 bg-stone-950 px-3.5 py-1.5 text-sm font-medium text-stone-300 transition hover:border-amber-500/40 hover:text-amber-200">
                {area}
              </span>
            ))}
          </div>
        </div>
        <aside className="relative overflow-hidden rounded-3xl border border-stone-700 bg-gradient-to-br from-stone-900 to-stone-950 p-7">
          <div className="bg-roof-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative">
            <p className="text-sm font-semibold text-stone-300">Coverage Snapshot</p>
            <p className="mt-32 rounded-2xl border border-stone-600 bg-stone-950/80 p-4">
              <span className="text-xs uppercase tracking-[0.14em] text-stone-500">Core Response Zone</span>
              <span className="mt-1 block text-xl font-semibold text-stone-100">Fort Worth + Mid-Cities</span>
              <span className="mt-1 block text-sm text-stone-400">Outside listed areas? Ask about availability.</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
