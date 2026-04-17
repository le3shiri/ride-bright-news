import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import type { Article } from "@/data/content";
import { cn } from "@/lib/utils";

export const ArticleCard = ({ article, variant = "default" }: { article: Article; variant?: "default" | "compact" | "wide" }) => {
  if (variant === "compact") {
    return (
      <Link to={`/news/${article.id}`} className="group flex gap-4 items-start">
        <div className="relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl">
          <img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">{article.category}</span>
          <h4 className="font-display text-base font-semibold leading-snug text-ink line-clamp-2 group-hover:text-accent transition-smooth">
            {article.title}
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">{article.date}</p>
        </div>
      </Link>
    );
  }

  if (variant === "wide") {
    return (
      <Link to={`/news/${article.id}`} className="group grid md:grid-cols-2 gap-6 items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
          <img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
          <span className="absolute top-4 left-4 rounded-full bg-background/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
            {article.category}
          </span>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">{article.category} · {article.date}</p>
          <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight text-ink group-hover:text-accent transition-smooth text-balance">
            {article.title}
          </h3>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed text-pretty">{article.excerpt}</p>
          <p className="mt-4 text-sm text-muted-foreground">By {article.author} · {article.readTime} read</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/news/${article.id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-soft">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
          {article.category}
        </span>
      </div>
      <div className="pt-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
          <span>{article.date}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime}</span>
        </div>
        <h3 className={cn("font-display font-bold leading-tight text-ink group-hover:text-accent transition-smooth text-balance", "text-xl")}>
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
      </div>
    </Link>
  );
};
