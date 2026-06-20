import Link from "next/link";

import { siteContent } from "@/content/site";

export function StormTriage() {
  const { stormTriage } = siteContent;

  return (
    <section className="border-y border-amber-600/30 bg-zinc-950 px-4 py-12 text-amber-50 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold tracking-[0.18em] text-amber-300 uppercase">Triage board</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{stormTriage.title}</h2>
          <p className="mt-3 text-sm text-amber-100/80 sm:text-base">{stormTriage.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stormTriage.cards.map((card, index) => (
            <article
              key={card.title}
              className="relative overflow-hidden rounded-md border border-amber-500/35 bg-zinc-900 p-5"
            >
              <div
                aria-hidden
                className="absolute top-0 right-0 h-16 w-16 translate-x-4 -translate-y-4 rotate-45 bg-amber-400/10"
              />
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-zinc-800 text-xs font-bold text-amber-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>
                <span className="shrink-0 rounded-sm bg-amber-400/15 px-2 py-1 text-[0.65rem] font-bold tracking-wide text-amber-300 uppercase">
                  {card.urgency}
                </span>
              </div>

              <div className="relative mt-4 space-y-3">
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.14em] text-amber-400 uppercase">
                    Warning signs
                  </p>
                  <p className="mt-1 text-sm text-amber-100/80">{card.signs}</p>
                </div>
                <div className="rounded-sm border-l-2 border-l-amber-400 bg-zinc-800/80 px-3 py-2">
                  <p className="text-[0.65rem] font-bold tracking-[0.14em] text-amber-400 uppercase">Next step</p>
                  <p className="mt-1 text-sm font-medium">{card.nextStep}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="#contact"
            className="inline-flex rounded-md bg-amber-400 px-5 py-3 text-sm font-bold tracking-wide text-zinc-950 uppercase transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-300"
          >
            {stormTriage.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
