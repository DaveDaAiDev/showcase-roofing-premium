import Link from "next/link";

import { siteContent } from "@/content/site";

export function StormTriage() {
  const { stormTriage } = siteContent;

  return (
    <section className="border-y border-stone-800 bg-stone-900/40 px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">Storm Response</p>
          <h2 className="mt-2 text-3xl font-bold text-stone-50 sm:text-4xl">{stormTriage.title}</h2>
          <p className="mt-3 text-stone-400">{stormTriage.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stormTriage.cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl border border-stone-700 bg-stone-950/80 p-5 transition motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-reduce:transform-none hover:border-amber-600/40 hover:shadow-lg hover:shadow-amber-950/20"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-stone-100">{card.title}</h3>
                <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                  {card.urgency}
                </span>
              </div>
              <p className="mt-3 text-sm text-stone-400">
                <span className="font-medium text-stone-300">Warning sign: </span>
                {card.sign}
              </p>
              <p className="mt-2 text-sm text-stone-300">
                <span className="font-medium text-amber-300/90">Next step: </span>
                {card.nextStep}
              </p>
              <div className="mt-4 h-px bg-gradient-to-r from-amber-500/40 via-stone-700 to-transparent" aria-hidden />
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 transition motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-400"
          >
            {stormTriage.cta}
            <span className="transition motion-safe:duration-200 motion-safe:group-hover:translate-x-1 motion-reduce:transform-none">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
