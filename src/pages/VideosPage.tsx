import { useState } from "react";
import { Play } from "lucide-react";
import { videos } from "@/data/content";
import { cn } from "@/lib/utils";

const cats = ["All", "Reviews", "Rides", "Shorts"] as const;

const VideosPage = () => {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const filtered = cat === "All" ? videos : videos.filter((v) => v.category === cat);
  const featured = videos[0];

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-x py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Watch</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-none">Videos</h1>
        </div>
      </section>

      {/* Featured */}
      <section className="container-x py-12 md:py-16">
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl bg-ink shadow-elev group cursor-pointer">
          <img src={featured.thumb} alt={featured.title} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-smooth" />
          <div className="absolute inset-0 gradient-fade" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow group-hover:scale-110 transition-smooth">
              <Play className="h-9 w-9 ml-1 fill-current" />
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-primary-foreground">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">Featured</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl">{featured.title}</h2>
            <p className="mt-2 text-primary-foreground/80">{featured.duration} · {featured.views} views</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-smooth",
                cat === c ? "bg-ink text-primary-foreground" : "bg-secondary hover:bg-ink/10"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <div key={v.id} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink shadow-soft">
                <img src={v.thumb} alt={v.title} loading="lazy" className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-smooth" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/95 text-ink group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                    <Play className="h-5 w-5 ml-0.5 fill-current" />
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 rounded-md bg-ink/90 px-2 py-1 text-xs font-semibold text-primary-foreground">
                  {v.duration}
                </span>
                <span className="absolute top-3 left-3 rounded-full bg-background/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                  {v.category}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink leading-snug line-clamp-2 group-hover:text-accent transition-smooth">{v.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{v.views} views</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default VideosPage;
