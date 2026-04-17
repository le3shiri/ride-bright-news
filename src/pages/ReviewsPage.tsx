import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/site/Rating";
import { reviews } from "@/data/content";

const ReviewsPage = () => {
  const [featured, ...rest] = reviews;

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-x py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Tested. Rated. Reviewed.</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-none">Reviews</h1>
        </div>
      </section>

      {/* Featured review */}
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink shadow-elev">
            <img src={featured.image} alt={featured.title} loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute top-6 left-6 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Editor's Choice
            </span>
          </div>
          <div>
            <Rating value={featured.rating} />
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink leading-tight">{featured.title}</h2>
            <p className="mt-2 text-base uppercase tracking-widest text-muted-foreground">{featured.subtitle}</p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <Button asChild variant="ink" size="lg" className="mt-8">
              <Link to={`/reviews/${featured.id}`}>Read full review <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-12">All Reviews</h2>
          <div className="grid gap-8">
            {rest.map((r) => (
              <Link
                to={`/reviews/${r.id}`}
                key={r.id}
                className="group grid md:grid-cols-[280px_1fr] gap-6 bg-card rounded-2xl p-4 md:p-6 shadow-soft hover:shadow-elev transition-smooth"
              >
                <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-xl bg-ink">
                  <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center">
                  <Rating value={r.rating} />
                  <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-ink group-hover:text-accent transition-smooth">{r.title}</h3>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mt-1">{r.subtitle}</p>
                  <p className="mt-3 text-muted-foreground line-clamp-2">{r.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Read review <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
