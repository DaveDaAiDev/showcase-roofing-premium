import { siteContent } from "@/content/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < Math.round(rating) ? "text-amber-400" : "text-stone-600"}>★</span>
      ))}
    </div>
  );
}

export function Reviews() {
  const { averageRating, reviewCount, items } = siteContent.reviews;

  return (
    <section id="reviews" className="scroll-mt-24 border-y border-stone-800 px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">Reviews</p>
            <h2 className="mt-2 text-3xl font-bold text-stone-50 sm:text-4xl">
              Homeowners trust a roofing process that is clear under pressure.
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-stone-700 bg-stone-900/60 px-5 py-3">
            <p className="text-3xl font-bold text-amber-300">{averageRating.toFixed(1)}</p>
            <div>
              <Stars rating={averageRating} />
              <p className="text-xs text-stone-500">Based on {reviewCount}+ demo reviews</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((review) => (
            <article
              key={review.name + review.serviceType}
              className="flex h-full flex-col rounded-2xl border border-stone-700 bg-stone-900/50 p-6 transition motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-reduce:transform-none hover:border-amber-500/30 hover:shadow-lg"
            >
              <Stars rating={review.rating} />
              <p className="mt-4 flex-1 text-base leading-relaxed text-stone-200">&ldquo;{review.quote}&rdquo;</p>
              <div className="mt-5 border-t border-stone-700 pt-4">
                <p className="text-sm font-semibold text-stone-100">{review.name}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-stone-500">
                  <span className="rounded-full bg-amber-500/10 px-2 py-0.5 font-medium text-amber-200">{review.serviceType}</span>
                  <span>{review.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
