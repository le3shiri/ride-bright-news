import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/site/ArticleCard";
import { articles } from "@/data/content";
import { cn } from "@/lib/utils";

const categories = ["All", "Racing", "New Bikes", "Electric", "Safety"] as const;

const NewsPage = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = filter === "All" ? articles : articles.filter((a) => a.category === filter);
  // duplicate to demonstrate pagination
  const all = [...filtered, ...filtered].slice(0, 12);
  const totalPages = Math.max(1, Math.ceil(all.length / perPage));
  const paginated = all.slice((page - 1) * perPage, page * perPage);

  const trending = articles.slice(0, 4);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-x py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">The pulse of motorcycling</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-none text-balance">
            Motorcycle News
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Daily reporting on launches, races, and the people moving the industry forward.
          </p>
        </div>
      </section>

      <section className="container-x py-12 md:py-16">
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => { setFilter(c); setPage(1); }}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-smooth",
                filter === c ? "bg-ink text-primary-foreground" : "bg-secondary text-foreground hover:bg-ink/10"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="grid gap-10 md:grid-cols-2">
              {paginated.map((a, i) => (
                <ArticleCard key={`${a.id}-${i}`} article={a} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
              <Button variant="soft" size="lg" disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
                <ChevronLeft className="h-4 w-4" /> Previous
              </Button>
              <p className="text-sm text-muted-foreground">Page {page} of {totalPages}</p>
              <Button variant="ink" size="lg" disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div className="rounded-2xl bg-surface p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-accent" />
                <h3 className="font-display text-xl font-bold text-ink">Trending Posts</h3>
              </div>
              <ol className="space-y-5">
                {trending.map((a) => (
                  <li key={a.id}>
                    <ArticleCard article={a} variant="compact" />
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl bg-ink p-6 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold leading-tight">Never miss a story</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">Weekly digest. No ads.</p>
              <input type="email" placeholder="Email address" className="mt-4 w-full rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm placeholder:text-primary-foreground/40 outline-none focus:border-accent" />
              <Button variant="hero" size="sm" className="mt-3 w-full">Subscribe</Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
