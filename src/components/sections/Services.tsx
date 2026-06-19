import Link from "next/link";

import { siteContent } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-y border-stone-800 px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">Services</p>
          <h2 className="mt-2 text-3xl font-bold text-stone-50 sm:text-4xl">
            Roofing response paths built for storm urgency and long-term protection.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {siteContent.services.map((service) => (
            <article
              key={service.slug}
              className="group flex h-full flex-col rounded-2xl border border-stone-700 bg-gradient-to-b from-stone-900/90 to-stone-950 p-6 transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transform-none hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-900/10 hover:ring-1 hover:ring-amber-500/20"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30">
                <span className="text-lg font-bold">{service.title.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-50">{service.title}</h3>
              <p className="mt-2 text-sm text-stone-400">{service.benefit}</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-300">
                {service.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-lg border border-stone-600 bg-stone-900 px-3.5 py-2 text-sm font-semibold text-stone-100 transition group-hover:border-amber-500/50 group-hover:bg-amber-500/10"
              >
                {service.cta}
                <span className="transition motion-safe:duration-200 motion-safe:group-hover:translate-x-1 motion-reduce:transform-none">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
