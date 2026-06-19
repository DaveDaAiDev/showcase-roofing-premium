"use client";

import { FormEvent, useState } from "react";

import { siteContent } from "@/content/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl border border-stone-600 bg-stone-950/80 px-4 py-3 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-500/50 focus:bg-stone-950";

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-stone-700 bg-gradient-to-br from-stone-900 to-stone-950 p-6 sm:grid-cols-[0.9fr_1.1fr] sm:p-9">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">Contact</p>
          <h2 className="mt-2 text-3xl font-bold text-stone-50 sm:text-4xl">Request a roof inspection</h2>
          <p className="mt-3 text-stone-400">UI-only demo form — no backend submission.</p>
          <a href={siteContent.phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-xl border border-stone-600 px-5 py-3 text-base font-semibold text-stone-100 transition hover:border-amber-500/40">
            {siteContent.phoneDisplay}
          </a>
          <dl className="mt-8 space-y-2 border-t border-stone-700 pt-6 text-sm">
            {siteContent.businessHours.map((hour) => (
              <div key={hour.label} className="flex justify-between gap-4">
                <dt className="text-stone-500">{hour.label}</dt>
                <dd className="font-medium text-stone-300">{hour.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-300">Name</label>
            <input id="name" name="name" required className={inputClass} placeholder="Your name" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-stone-300">Phone</label>
              <input id="phone" name="phone" className={inputClass} placeholder="(817) 555-0198" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-300">Email</label>
              <input id="email" name="email" type="email" className={inputClass} placeholder="you@email.com" />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-stone-300">Service needed</label>
            <select id="service" name="service" className={inputClass} defaultValue="">
              <option value="" disabled>Select a service</option>
              {siteContent.services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-stone-300">Message</label>
            <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Describe damage, leaks, or inspection needs" />
          </div>
          <button
            type="submit"
            className="btn-shine inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-6 py-3.5 text-base font-semibold text-stone-950 transition motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-400 sm:w-auto"
          >
            Send Inspection Request
          </button>
          {submitted ? (
            <p className="text-sm text-emerald-400" role="status">
              Demo success — inspection request captured locally. Connect a backend when ready.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
