import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const nav = [
    { to: "/", label: t('nav.home') },
    { to: "/news", label: t('nav.news') },
    { to: "/reviews", label: t('nav.reviews') },
    { to: "/compare", label: t('nav.compare') },
    { to: "/about", label: t('nav.about') },
    { to: "/contact", label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logoblack.svg" alt="Logo" className="w-100 h-10" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
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
          {/* Language Switcher */}
          <div className="relative mr-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 px-3 rounded-full hover:bg-secondary"
              onClick={() => setLangOpen(!langOpen)}
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-bold uppercase">{i18n.language.slice(0, 2)}</span>
            </Button>
            
            {langOpen && (
              <div className="absolute right-0 mt-2 w-20 overflow-hidden rounded-2xl border border-border bg-background shadow-elev animate-in fade-in zoom-in duration-200">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      i18n.changeLanguage(l.code);
                      setLangOpen(false);
                    }}
                    className={cn(
                      "w-full px-4 py-2 text-left text-xs font-bold hover:bg-secondary transition-colors",
                      i18n.language.startsWith(l.code) ? "text-accent bg-accent/5" : "text-muted-foreground"
                    )}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen((s) => !s)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
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
                placeholder={t('common.search')}
                className="w-full rounded-full border border-border bg-secondary/40 py-3 pl-12 pr-4 text-sm outline-none focus:border-accent focus:bg-background transition-smooth"
              />
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
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
