import { Rating } from "@/components/site/Rating";
import { reviews } from "@/data/content";
import { cn } from "@/lib/utils";

const ReviewsPage = () => {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-x py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Tested. Rated. Reviewed.</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-none">Reviews</h1>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="flex flex-col gap-24">
          {reviews.map((r, index) => {
            const embedUrl = r.videoUrl ? (r.videoUrl.replace(/\/$/, '') + '/embed/') : null;
            const isTextLeft = index % 2 === 0;

            return (
              <div key={r.id} className="grid gap-10 lg:grid-cols-2 items-center">
                {/* Video Container */}
                <div 
                  className={cn(
                    "relative aspect-[9/16] w-full max-w-[400px] mx-auto overflow-hidden rounded-3xl bg-ink shadow-elev",
                    isTextLeft ? "lg:order-last" : ""
                  )}
                >
                  {embedUrl ? (
                    <iframe 
                      src={embedUrl}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="encrypted-media"
                    />
                  ) : (
                    <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover" />
                  )}
                </div>

                {/* Description Container */}
                <div>
                  <Rating value={r.rating} />
                  <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink leading-tight">{r.title}</h2>
                  <p className="mt-2 text-base uppercase tracking-widest text-muted-foreground">{r.subtitle}</p>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{r.excerpt}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    {r.pros.length > 0 && (
                      <div className="rounded-2xl bg-highlight-soft p-4">
                        <h3 className="font-display text-lg font-bold text-ink mb-2">Pros</h3>
                        <ul className="space-y-1 text-sm">
                          {r.pros.map(p => <li key={p}>• {p}</li>)}
                        </ul>
                      </div>
                    )}
                    {r.cons.length > 0 && (
                      <div className="rounded-2xl bg-secondary p-4">
                        <h3 className="font-display text-lg font-bold text-ink mb-2">Cons</h3>
                        <ul className="space-y-1 text-sm">
                          {r.cons.map(p => <li key={p}>• {p}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {r.videoUrl && (
                    <div className="mt-8">
                      <a 
                        href={r.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-smooth"
                      >
                        Watch on Instagram
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
