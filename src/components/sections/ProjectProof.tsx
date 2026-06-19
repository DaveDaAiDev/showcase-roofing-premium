import { siteContent } from "@/content/site";

export function ProjectProof() {
  const { projectProof } = siteContent;

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">Project Proof</p>
          <h2 className="mt-2 text-3xl font-bold text-stone-50 sm:text-4xl">{projectProof.title}</h2>
          <p className="mt-3 text-stone-400">{projectProof.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projectProof.panels.map((panel, index) => (
            <article
              key={panel.label}
              className="relative overflow-hidden rounded-2xl border border-stone-700 bg-stone-950/70 p-5 transition motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-reduce:transform-none hover:border-stone-500"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rotate-12 border border-stone-600/40 bg-stone-800/30"
                aria-hidden
              />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">{panel.label}</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-100">{panel.title}</h3>
              <p className="mt-2 text-sm text-stone-400">{panel.detail}</p>
              <div
                className={`mt-5 h-28 rounded-xl border border-dashed ${
                  index === 0
                    ? "border-stone-600 bg-gradient-to-br from-stone-800 to-stone-900"
                    : index === 1
                      ? "border-amber-600/30 bg-gradient-to-br from-stone-800 via-stone-900 to-amber-950/20"
                      : "border-slate-600/40 bg-gradient-to-br from-slate-900 to-stone-950"
                }`}
                aria-hidden
              >
                <div className="flex h-full items-end p-3">
                  <span className="text-[11px] uppercase tracking-wide text-stone-500">Demo placeholder panel</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
