import { siteContent } from "@/content/site";

export function ProjectProof() {
  const { projectProof } = siteContent;

  return (
    <section className="rounded-2xl border border-zinc-700/60 bg-zinc-100 px-4 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold tracking-[0.18em] text-amber-700 uppercase">Project proof</p>
          <h2 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">{projectProof.title}</h2>
          <p className="mt-3 text-sm text-zinc-600 sm:text-base">{projectProof.description}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projectProof.panels.map((panel) => (
            <article
              key={panel.label}
              className="overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-zinc-900">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, #27272a 0, #27272a 12px, #18181b 12px, #18181b 24px)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-4">
                  <span className="rounded-sm bg-amber-400 px-2 py-1 text-[0.65rem] font-bold tracking-wide text-zinc-950 uppercase">
                    {panel.label}
                  </span>
                </div>
                <div className="absolute top-3 right-3 rounded-sm border border-amber-500/40 bg-zinc-950/80 px-2 py-1 text-[0.6rem] font-medium text-amber-200">
                  Image slot
                </div>
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-bold text-zinc-900">{panel.title}</h3>
                <p className="text-sm text-zinc-600">{panel.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {projectProof.highlights.map((label) => (
            <div
              key={label}
              className="rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-700"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
