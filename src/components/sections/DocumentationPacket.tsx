import Link from "next/link";

import { siteContent } from "@/content/site";

export function DocumentationPacket() {
  const { documentationPacket } = siteContent;

  return (
    <section className="rounded-2xl bg-zinc-950 px-4 py-12 text-amber-50 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-amber-300 uppercase">File packet</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{documentationPacket.title}</h2>
            <p className="mt-3 text-sm text-amber-100/80 sm:text-base">{documentationPacket.description}</p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-amber-500/40 bg-zinc-900 px-4 py-3">
              <span className="text-lg" aria-hidden>
                📁
              </span>
              <div>
                <p className="text-sm font-bold">Inspection packet</p>
                <p className="text-xs text-amber-100/80">Organized for homeowner review</p>
              </div>
            </div>

            <Link
              href="#contact"
              className="mt-6 inline-flex rounded-md bg-amber-400 px-5 py-3 text-sm font-bold tracking-wide text-zinc-950 uppercase transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-300"
            >
              {documentationPacket.cta}
            </Link>
          </div>

          <div className="rounded-lg border border-amber-500/35 bg-zinc-900 p-2">
            <ul className="divide-y divide-amber-600/25">
              {documentationPacket.rows.map((row, index) => (
                <li key={row.label} className="flex gap-4 px-4 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-amber-400/15 text-xs font-bold text-amber-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{row.label}</p>
                    <p className="mt-1 text-sm text-amber-100/80">{row.description}</p>
                  </div>
                  <span
                    className="ml-auto hidden h-5 w-5 shrink-0 rounded-sm border border-amber-500/40 sm:block"
                    aria-hidden
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
