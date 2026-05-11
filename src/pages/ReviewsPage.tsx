import { Rating } from "@/components/site/Rating";
import { reviews, getLocalized } from "@/data/content";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const ReviewsPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-x py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t('reviews.tagline')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-none">{t('reviews.title')}</h1>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="flex flex-col gap-24">
          {reviews.map((r, index) => {
            const embedUrl = r.videoUrl ? (r.videoUrl.replace(/\/$/, '') + '/embed/') : null;
            const isTextLeft = index % 2 === 0;
            const title = getLocalized(r.title, lang);
            const subtitle = getLocalized(r.subtitle, lang);
            const excerpt = getLocalized(r.excerpt, lang);
            const pros = getLocalized(r.pros, lang) || [];
            const cons = getLocalized(r.cons, lang) || [];
            const specs = r.specs.map(s => ({
              label: typeof s.label === 'string' ? s.label : getLocalized(s.label, lang),
              value: typeof s.value === 'string' ? s.value : getLocalized(s.value, lang)
            }));

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
                    <img src={r.image} alt={title} loading="lazy" className="h-full w-full object-cover" />
                  )}
                </div>

                {/* Description Container */}
                <div>
                  <Rating value={r.rating} />
                  <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink leading-tight">{title}</h2>
                  <p className="mt-2 text-base uppercase tracking-widest text-muted-foreground">{subtitle}</p>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{excerpt}</p>
                  
                  {/* Specs */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    {specs.map((s, i) => (
                      <div key={i} className="text-sm">
                        <span className="font-semibold text-ink">{s.label}:</span>{" "}
                        <span className="text-muted-foreground">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    {pros.length > 0 && (
                      <div className="rounded-2xl bg-highlight-soft p-4">
                        <h3 className="font-display text-lg font-bold text-ink mb-2">{t('reviews.pros')}</h3>
                        <ul className="space-y-1 text-sm">
                          {pros.map(p => <li key={p}>• {p}</li>)}
                        </ul>
                      </div>
                    )}
                    {cons.length > 0 && (
                      <div className="rounded-2xl bg-secondary p-4">
                        <h3 className="font-display text-lg font-bold text-ink mb-2">{t('reviews.cons')}</h3>
                        <ul className="space-y-1 text-sm">
                          {cons.map(p => <li key={p}>• {p}</li>)}
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
                        {t('reviews.watchOnInsta')}
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
