import Link from "next/link";

import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 px-4 py-10 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-stone-50">{siteContent.brand}</p>
          <p className="mt-2 text-sm text-stone-400">{siteContent.demoNote}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-200">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            {siteContent.services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-amber-300">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-200">Contact</p>
          <p className="mt-3 text-sm text-stone-400">{siteContent.phoneDisplay}</p>
          <p className="text-sm text-stone-400">{siteContent.email}</p>
        </div>
      </div>
    </footer>
  );
}
