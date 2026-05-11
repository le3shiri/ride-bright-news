import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Rating } from "@/components/site/Rating";
import { articles, reviews, getLocalized } from "@/data/content";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const latest = articles.slice(0, 6);
  const trending = articles.slice(0, 4);
  const featuredReview = reviews[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink h-[calc(100vh-80px)]">
        <img
          src="/hero.jpeg"
          alt="Sport motorcycle on a wet city street"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container-x py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] text-balance">
              {t('home.hero.titlePrefix')}<br />
              <span className="italic text-accent">{t('home.hero.titleAccent')}</span>{t('home.hero.titleSuffix')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl text-pretty">
              {t('home.hero.tagline')}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/news">
                  {t('home.hero.cta')} <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{t('home.sections.fresh')}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">{t('home.sections.latestNews')}</h2>
          </div>
          <Link to="/news" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-smooth">
            {t('home.sections.viewAll')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
      </section>

      {/* TRENDING + FEATURED REVIEW */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-3">
          {/* Trending */}
          <aside className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-5 w-5 text-accent" />
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t('home.sections.trending')}</p>
            </div>
            <h2 className="font-display text-4xl font-bold text-ink mb-8">{t('home.sections.whatReading')}</h2>
            <ol className="space-y-6">
              {trending.map((a, i) => (
                <li key={a.id} className="flex gap-4 items-start group">
                  <span className="font-display text-3xl font-bold text-accent leading-none w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link to={`/news/${a.id}`} className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{a.category}</p>
                    <h4 className="font-display font-semibold text-ink leading-snug group-hover:text-accent transition-smooth">
                      {getLocalized(a.title, lang)}
                    </h4>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>

          {/* Featured Review */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t('home.sections.featuredReview')}</p>
            <div className="grid gap-8 md:grid-cols-2 items-center bg-card rounded-3xl p-6 md:p-10 shadow-elev">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-ink">
                <img src={featuredReview.image} alt={getLocalized(featuredReview.title, lang)} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <Rating value={featuredReview.rating} />
                <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
                  {getLocalized(featuredReview.title, lang)}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                  {getLocalized(featuredReview.subtitle, lang)}
                </p>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {getLocalized(featuredReview.excerpt, lang)}
                </p>
                <Button asChild variant="ink" size="lg" className="mt-6">
                  <Link to="/reviews">{t('home.sections.allReviews')} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20 md:pb-28">
        <div className="rounded-3xl bg-ink p-10 md:p-16 text-primary-foreground relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              {t('home.sections.newsletterTitle')}
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg">
              {t('home.sections.newsletterDesc')}
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3 placeholder:text-primary-foreground/40 outline-none focus:border-accent" />
              <Button variant="hero" size="lg">{t('home.sections.subscribeFree')}</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
