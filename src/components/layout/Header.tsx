import Link from "next/link";

import { MainNav } from "@/components/layout/MainNav";
import { siteContent } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-700/70 bg-stone-950/90 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-700 text-sm font-bold text-stone-950 shadow-lg shadow-amber-900/40">
              SS
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-stone-50">{siteContent.brand}</p>
              <p className="text-xs text-stone-400">Fort Worth, TX · Demo</p>
            </div>
          </Link>

          <MainNav variant="desktop" />

          <div className="flex items-center gap-2">
            <a
              href={siteContent.phoneHref}
              className="hidden items-center gap-1.5 rounded-lg border border-stone-600 px-3 py-2 text-sm font-medium text-stone-200 transition hover:border-amber-500/50 hover:bg-stone-900 sm:inline-flex"
            >
              Call Now
            </a>
            <Link
              href="/#contact"
              className="btn-shine rounded-lg bg-amber-500 px-3.5 py-2 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-900/30 transition motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-400"
            >
              Request Inspection
            </Link>
          </div>
        </div>
        <MainNav variant="mobile" />
      </div>
    </header>
  );
}
