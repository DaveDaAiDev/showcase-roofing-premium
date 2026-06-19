import { siteContent } from "@/content/site";

export function LocalPresence() {
  const { localPresence } = siteContent;

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">Local Presence Add-On</p>
          <h2 className="mt-2 text-3xl font-bold text-stone-50 sm:text-4xl">{localPresence.title}</h2>
          <p className="mt-3 text-stone-400">{localPresence.description}</p>
        </div>

        <div className="space-y-4">
          <article className="rounded-2xl border border-stone-700 bg-stone-900/80 p-5 transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:border-amber-500/30">
            <h3 className="text-sm font-semibold text-stone-100">Service Area / Coverage</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {localPresence.primaryAreas.map((area) => (
                <li key={area} className="rounded-full border border-stone-600 bg-stone-950 px-3 py-1.5 text-xs font-medium text-stone-300 transition hover:border-amber-500/40 hover:text-amber-200">
                  {area}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-stone-700 bg-stone-900/80 p-5 transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:border-amber-500/30">
            <h3 className="text-sm font-semibold text-stone-100">Profile Readiness</h3>
            <ul className="mt-4 space-y-2.5">
              {localPresence.checklist.map((item, index) => (
                <li key={item} className={`flex items-center gap-2.5 rounded-xl border border-stone-700 px-3.5 py-2.5 text-sm text-stone-300 ${index === 0 ? "bg-stone-950/80" : ""}`}>
                  <span className={`h-2 w-2 shrink-0 rounded-full bg-amber-400 ${index === 0 ? "motion-safe:animate-status-pulse motion-reduce:animate-none" : ""}`} />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-stone-700 bg-stone-900/80 p-5 transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:border-amber-500/30">
            <h3 className="text-sm font-semibold text-stone-100">Trust / Review Strategy</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {localPresence.trustStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-stone-700 bg-stone-950/80 p-3">
                  <p className="text-lg font-semibold text-amber-200">{stat.value}</p>
                  <p className="mt-1 text-xs text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-stone-500">{localPresence.note}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
