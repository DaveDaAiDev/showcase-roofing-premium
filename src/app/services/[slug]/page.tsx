import Link from "next/link";
import { notFound } from "next/navigation";

import { Contact } from "@/components/sections/Contact";
import { getServiceDetail, serviceDetails, siteContent } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  return (
    <div>
      <section className="border-b border-stone-800 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">{service.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-bold text-stone-50 sm:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-400">{service.description}</p>
          <Link href="/#contact" className="mt-8 inline-flex rounded-xl bg-amber-500 px-6 py-3 font-semibold text-stone-950 hover:bg-amber-400">
            Request {service.name} Inspection
          </Link>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-stone-50">When to call</h2>
            <ul className="mt-4 space-y-3 text-stone-300">
              {service.signs.map((sign) => (
                <li key={sign} className="flex gap-3 rounded-xl border border-stone-700 bg-stone-900/50 px-4 py-3">
                  <span className="text-amber-400">▸</span>{sign}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-stone-50">Why homeowners choose us</h2>
            <div className="mt-4 space-y-4">
              {service.benefits.map((benefit) => (
                <article key={benefit.title} className="rounded-xl border border-stone-700 bg-stone-900/50 p-4">
                  <h3 className="font-semibold text-stone-100">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-stone-400">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-900/30 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-stone-50">Our process</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.process.map((step) => (
              <article key={step.step} className="rounded-2xl border border-stone-700 bg-stone-950/80 p-5">
                <p className="text-sm font-bold text-amber-400">{step.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-stone-100">{step.title}</h3>
                <p className="mt-2 text-sm text-stone-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-stone-700 bg-stone-900/60 p-6">
          <h2 className="text-xl font-bold text-stone-50">Local trust</h2>
          <p className="mt-2 text-stone-400">
            {siteContent.brand} serves {siteContent.serviceAreas.slice(0, 4).join(", ")}, and nearby Fort Worth communities with storm-ready response and documented inspections.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
}
