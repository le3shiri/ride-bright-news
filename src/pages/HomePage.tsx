import { Link } from "react-router-dom";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Rating } from "@/components/site/Rating";
import { articles, reviews, videos } from "@/data/content";
import heroBike from "@/assets/hero-bike.jpg";

const HomePage = () => {
  const latest = articles.slice(0, 6);
  const trending = articles.slice(0, 4);
  const featuredReview = reviews[0];
  const homeVideos = videos.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <img
          src={heroBike}
          alt="Sport motorcycle on a wet city street"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container-x py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Issue 142 · April 2026
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] text-balance">
              Two wheels.<br />
              <span className="italic text-accent">Infinite</span> stories.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl text-pretty">
              The world's most read motorcycle magazine. Honest reviews, race-day reporting, and the rides that move us.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/news">
                  Read latest stories <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="rounded-full bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background hover:text-ink">
                <Link to="/videos"><Play className="h-4 w-4" /> Watch trailer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Fresh off the press</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Latest News</h2>
          </div>
          <Link to="/news" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-smooth">
            View all <ArrowRight className="h-4 w-4" />
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
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Trending now</p>
            </div>
            <h2 className="font-display text-4xl font-bold text-ink mb-8">What riders<br />are reading</h2>
            <ol className="space-y-6">
              {trending.map((a, i) => (
                <li key={a.id} className="flex gap-4 items-start group">
                  <span className="font-display text-3xl font-bold text-accent leading-none w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link to={`/news/${a.id}`} className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{a.category}</p>
                    <h4 className="font-display font-semibold text-ink leading-snug group-hover:text-accent transition-smooth">{a.title}</h4>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>

          {/* Featured Review */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Featured review</p>
            <div className="grid gap-8 md:grid-cols-2 items-center bg-card rounded-3xl p-6 md:p-10 shadow-elev">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-ink">
                <img src={featuredReview.image} alt={featuredReview.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <Rating value={featuredReview.rating} />
                <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink leading-tight">{featuredReview.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{featuredReview.subtitle}</p>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{featuredReview.excerpt}</p>
                <Button asChild variant="ink" size="lg" className="mt-6">
                  <Link to={`/reviews/${featuredReview.id}`}>Read full review <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST VIDEOS */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Watch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Latest Videos</h2>
          </div>
          <Link to="/videos" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-smooth">
            All videos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeVideos.map((v) => (
            <Link to="/videos" key={v.id} className="group">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink shadow-soft">
                <img src={v.thumb} alt={v.title} loading="lazy" className="h-full w-full object-cover opacity-90 transition-smooth group-hover:scale-105 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/95 text-ink shadow-elev transition-smooth group-hover:bg-accent group-hover:text-accent-foreground">
                    <Play className="h-5 w-5 ml-0.5 fill-current" />
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 rounded-md bg-ink/90 px-2 py-1 text-xs font-semibold text-primary-foreground">
                  {v.duration}
                </span>
              </div>
              <h4 className="mt-4 font-display font-semibold text-ink leading-snug line-clamp-2 group-hover:text-accent transition-smooth">
                {v.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">{v.views} views · {v.category}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20 md:pb-28">
        <div className="rounded-3xl bg-ink p-10 md:p-16 text-primary-foreground relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Get the best of Throttle, every Sunday.
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg">
              One curated email. Reviews, race recaps, and the week's most beautiful machines.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3 placeholder:text-primary-foreground/40 outline-none focus:border-accent" />
              <Button variant="hero" size="lg">Subscribe free</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
