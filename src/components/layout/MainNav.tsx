import Link from "next/link";

import { siteContent } from "@/content/site";

type MainNavProps = { variant: "desktop" | "mobile" };

export function MainNav({ variant }: MainNavProps) {
  const className =
    variant === "desktop"
      ? "hidden items-center gap-1 md:flex"
      : "mt-3 flex flex-wrap gap-2 border-t border-stone-700/60 pt-3 md:hidden";

  return (
    <nav className={className}>
      {siteContent.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-lg px-3 py-2 text-sm font-medium text-stone-300 transition hover:bg-stone-800 hover:text-amber-100"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
