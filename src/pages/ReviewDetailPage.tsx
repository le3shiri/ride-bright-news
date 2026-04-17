import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/site/Rating";
import { reviews } from "@/data/content";

const ReviewDetailPage = () => {
  const { id } = useParams();
  const review = reviews.find((r) => r.id === id) ?? reviews[0];
  const gallery = [review.image, reviews[1].image, reviews[2].image, reviews[0].image];

  return (
    <article>
      <section className="border-b border-border bg-surface">
        <div className="container-x py-12">
          <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-ink mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to reviews
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Long-term review</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink leading-tight max-w-4xl">{review.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{review.subtitle}</p>
          <div className="mt-6"><Rating value={review.rating} /></div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-ink shadow-elev">
          <img src={review.image} alt={review.title} className="h-full w-full object-cover" />
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-16 mt-16">
          <div className="prose prose-lg max-w-none">
            <p className="font-display text-2xl text-ink leading-relaxed first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              {review.excerpt}
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We spent six weeks and over 4,000 km with this machine — commuting, touring, and a dedicated track day. What follows is everything we learned, both the brilliant and the frustrating.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Build quality is exceptional. Every weld, every fastener, every panel feels considered. The riding position is balanced — neither too aggressive nor cruiser-soft — and the controls fall to hand with a sense of inevitability that only comes from many iterations of design.
            </p>

            {/* Pros / Cons */}
            <div className="not-prose grid md:grid-cols-2 gap-6 mt-12">
              <div className="rounded-2xl bg-highlight-soft p-6">
                <h3 className="font-display text-xl font-bold text-ink mb-4">Pros</h3>
                <ul className="space-y-3">
                  {review.pros.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-secondary p-6">
                <h3 className="font-display text-xl font-bold text-ink mb-4">Cons</h3>
                <ul className="space-y-3">
                  {review.cons.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="not-prose mt-16">
              <h3 className="font-display text-2xl font-bold text-ink mb-6">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {gallery.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-2xl bg-ink">
                    <img src={src} loading="lazy" alt="" className="h-full w-full object-cover hover:scale-105 transition-smooth" />
                  </div>
                ))}
              </div>
            </div>

            {/* Video */}
            <div className="not-prose mt-16">
              <h3 className="font-display text-2xl font-bold text-ink mb-6">Video Review</h3>
              <Link to="/videos" className="group block relative aspect-video overflow-hidden rounded-2xl bg-ink">
                <img src={review.image} alt="Video review" className="h-full w-full object-cover opacity-70 group-hover:opacity-90 transition-smooth" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow group-hover:scale-110 transition-smooth">
                    <Play className="h-7 w-7 ml-1 fill-current" />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Specs sidebar */}
          <aside>
            <div className="sticky top-28 rounded-2xl bg-surface p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-ink mb-6">Specifications</h3>
              <dl className="space-y-4">
                {review.specs.map((s) => (
                  <div key={s.label} className="flex justify-between items-baseline border-b border-border pb-3 last:border-0">
                    <dt className="text-sm uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                    <dd className="font-display text-lg font-semibold text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <Button variant="ink" size="lg" className="mt-8 w-full">Compare with rivals</Button>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
};

export default ReviewDetailPage;
