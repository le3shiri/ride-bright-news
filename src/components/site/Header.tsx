import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/news", label: "News" },
  { to: "/reviews", label: "Reviews" },
  { to: "/videos", label: "Videos" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-primary-foreground font-display text-lg font-bold transition-smooth group-hover:bg-accent">
            T
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl font-bold tracking-tight text-ink">Throttle</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Magazine</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-smooth",
                  active ? "text-ink" : "text-muted-foreground hover:text-ink"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen((s) => !s)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button asChild variant="ink" size="sm" className="hidden sm:inline-flex rounded-full px-5">
            <Link to="/contact">Subscribe</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border/60 bg-background animate-fade-in">
          <div className="container-x py-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                autoFocus
                placeholder="Search bikes, brands, races…"
                className="w-full rounded-full border border-border bg-secondary/40 py-3 pl-12 pr-4 text-sm outline-none focus:border-accent focus:bg-background transition-smooth"
              />
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-wide text-foreground hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
