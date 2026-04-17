import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Twitter } from "lucide-react";
import { articles, articleBody, authors } from "@/data/content";
import { ArticleCard } from "@/components/site/ArticleCard";
import { ShareButtons } from "@/components/site/ShareButtons";
import { Button } from "@/components/ui/button";

const NewsDetailPage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!article) {
    return (
      <section className="container-x py-32 text-center">
        <h1 className="font-display text-4xl font-bold text-ink">Article not found</h1>
        <p className="mt-4 text-muted-foreground">The story you're looking for has moved or doesn't exist.</p>
        <Button asChild variant="ink" size="lg" className="mt-8">
          <Link to="/news"><ArrowLeft className="h-4 w-4" /> Back to news</Link>
        </Button>
      </section>
    );
  }

  const author = authors[article.author];
  const body = article.body ?? articleBody(article);
  const related = articles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3);
  const fallbackRelated = articles.filter((a) => a.id !== article.id).slice(0, 3);
  const relatedFinal = related.length >= 2 ? related : fallbackRelated;

  return (
    <article>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="container-x py-10 md:py-14">
          <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-ink transition-smooth">
            <ArrowLeft className="h-4 w-4" /> Back to news
          </Link>
          <div className="mt-8 max-w-4xl">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">
              {article.category}
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-ink leading-[1.05] text-balance">
              {article.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
              {article.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-primary-foreground text-xs font-bold">
                  {author?.initials ?? "TM"}
                </span>
                <span className="font-semibold text-ink">{article.author}</span>
              </span>
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {article.date}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {article.readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div className="container-x mt-10 md:mt-14">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-ink shadow-elev">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Body + sidebar */}
      <section className="container-x py-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="space-y-6">
              {body.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-display text-2xl text-ink leading-relaxed first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-none"
                      : "text-lg text-foreground leading-relaxed"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="my-12 border-l-4 border-accent pl-6 py-2">
              <p className="font-display text-2xl md:text-3xl font-semibold text-ink leading-snug italic text-balance">
                "Engineering decisions that look conservative on paper become obvious strengths once the road opens up."
              </p>
              <footer className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">— {article.author}</footer>
            </blockquote>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <ShareButtons title={article.title} />
            </div>

            {/* Author bio card */}
            {author && (
              <div className="mt-12 rounded-3xl bg-surface p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-ink text-primary-foreground font-display text-2xl font-bold">
                  {author.initials}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{author.role}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-ink">{author.name}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{author.bio}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-smooth"
                  >
                    <Twitter className="h-4 w-4" /> Follow on Twitter
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Sticky sidebar share */}
          <aside>
            <div className="sticky top-28 space-y-8">
              <div className="rounded-2xl bg-card border border-border p-6">
                <h3 className="font-display text-lg font-bold text-ink mb-4">Spread the word</h3>
                <ShareButtons title={article.title} />
              </div>
              <div className="rounded-2xl bg-ink p-6 text-primary-foreground">
                <h3 className="font-display text-xl font-bold leading-tight">More like this in your inbox</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">One curated email every Sunday.</p>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-4 w-full rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm placeholder:text-primary-foreground/40 outline-none focus:border-accent"
                />
                <Button variant="hero" size="sm" className="mt-3 w-full">Subscribe</Button>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Keep reading</p>
              <h2 className="font-display text-4xl font-bold text-ink">Related stories</h2>
            </div>
            <Link to="/news" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-smooth">
              All news
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
