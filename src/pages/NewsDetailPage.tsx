import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { articles, getLocalized } from "@/data/content";
import { ArticleCard } from "@/components/site/ArticleCard";
import { ShareButtons } from "@/components/site/ShareButtons";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!article) {
    return (
      <section className="container-x py-32 text-center">
        <h1 className="font-display text-4xl font-bold text-ink">{t('common.notFound')}</h1>
        <p className="mt-4 text-muted-foreground">{t('common.notFoundDesc')}</p>
        <Button asChild variant="ink" size="lg" className="mt-8">
          <Link to="/news"><ArrowLeft className="h-4 w-4" /> {t('news.back')}</Link>
        </Button>
      </section>
    );
  }

  const title = getLocalized(article.title, lang);
  const excerpt = getLocalized(article.excerpt, lang);
  const body = getLocalized(article.body, lang) || [];
  const readTimeLabel = t('news.readTime', { min: article.readTime.split(' ')[0] });

  const related = articles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3);
  const fallbackRelated = articles.filter((a) => a.id !== article.id).slice(0, 3);
  const relatedFinal = related.length >= 2 ? related : fallbackRelated;

  const getCategoryLabel = (cat: string) => {
    const key = cat.toLowerCase().replace(/\s+/g, '');
    const mappedKey = key === 'newbikes' ? 'newBikes' : key;
    return t(`common.categories.${mappedKey}`) || cat;
  };

  return (
    <article>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="container-x py-10 md:py-14">
          <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-ink transition-smooth">
            <ArrowLeft className="h-4 w-4" /> {t('news.back')}
          </Link>
          <div className="mt-8 max-w-4xl">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">
              {getCategoryLabel(article.category)}
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-ink leading-[1.05] text-balance">
              {title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
              {excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {readTimeLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div className="container-x mt-10 md:mt-14">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-ink shadow-elev">
          <img src={article.image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Body + sidebar */}
      <section className="container-x py-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="space-y-6">
              {body.map((p, i) => {
                const extraImages = article.extraImages || [];
                const imageInterval = Math.max(1, Math.floor(body.length / (extraImages.length + 1)));
                const shouldShowImage = extraImages.length > 0 && (i + 1) % imageInterval === 0;
                const imgIndex = Math.floor((i + 1) / imageInterval) - 1;
                const showImage = shouldShowImage && imgIndex >= 0 && imgIndex < extraImages.length;

                const trimmed = p.trim();
                const isHtml = trimmed.startsWith('<') && trimmed.endsWith('>');

                return (
                  <div key={i} className="space-y-6">
                    {isHtml ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: p }}
                        className="article-html-block"
                      />
                    ) : (
                      <p
                        className={
                          i === 0
                            ? "font-display text-2xl text-ink leading-relaxed first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-none"
                            : "text-lg text-foreground leading-relaxed"
                        }
                      >
                        {p}
                      </p>
                    )}
                    {showImage && (
                      <div className="my-10 aspect-[16/9] overflow-hidden rounded-3xl bg-ink shadow-elev">
                        <img src={extraImages[imgIndex]} alt="" className="h-full w-full object-cover" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Show any remaining images that were not shown between paragraphs */}
              {article.extraImages && article.extraImages.length > 0 && (
                <div className="space-y-10 pt-10">
                  {article.extraImages.slice(Math.min(article.extraImages.length, body.length)).map((img, idx) => (
                    <div key={`rem-${idx}`} className="aspect-[16/9] overflow-hidden rounded-3xl bg-ink shadow-elev">
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pull quote */}
            <blockquote className="my-12 border-l-4 border-accent pl-6 py-2">
              <p className="font-display text-2xl md:text-3xl font-semibold text-ink leading-snug italic text-balance">
                {t('news.pullQuote')}
              </p>
            </blockquote>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <ShareButtons title={title} />
            </div>

          </div>

          {/* Sticky sidebar share */}
          <aside>
            <div className="sticky top-28 space-y-8">
              <div className="rounded-2xl bg-card border border-border p-6">
                <h3 className="font-display text-lg font-bold text-ink mb-4">{t('common.spreadWord')}</h3>
                <ShareButtons title={title} />
              </div>
              <div className="rounded-2xl bg-ink p-6 text-primary-foreground">
                <h3 className="font-display text-xl font-bold leading-tight">{t('common.moreLikeThis')}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{t('common.oneEmail')}</p>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-4 w-full rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm placeholder:text-primary-foreground/40 outline-none focus:border-accent"
                />
                <Button variant="hero" size="sm" className="mt-3 w-full">{t('common.subscribe')}</Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{t('common.keepReading')}</p>
              <h2 className="font-display text-4xl font-bold text-ink">{t('common.relatedStories')}</h2>
            </div>
            <Link to="/news" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-smooth">
              {t('common.allNews')}
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {relatedFinal.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>
    </article>
  );
};

export default NewsDetailPage;
