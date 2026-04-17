import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-32 border-t border-border bg-ink text-primary-foreground">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-display text-lg font-bold">
              T
            </div>
            <span className="font-display text-2xl font-bold">Throttle</span>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            The world's most read motorcycle magazine. News, reviews, and rides since 2014.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-accent mb-4">Sections</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/news" className="text-primary-foreground/70 hover:text-accent transition-smooth">Latest News</Link></li>
            <li><Link to="/reviews" className="text-primary-foreground/70 hover:text-accent transition-smooth">Reviews</Link></li>
            <li><Link to="/videos" className="text-primary-foreground/70 hover:text-accent transition-smooth">Videos</Link></li>
            <li><Link to="/news" className="text-primary-foreground/70 hover:text-accent transition-smooth">Racing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-accent mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-smooth">About Us</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-smooth">Contact</Link></li>
            <li><Link to="/compare" className="text-primary-foreground/70 hover:text-accent transition-smooth">Compare Bikes</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-smooth">Advertise</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-accent mb-4">Newsletter</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">Weekly drops. No spam.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm placeholder:text-primary-foreground/40 outline-none focus:border-accent"
            />
            <button type="submit" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-smooth">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Throttle Magazine. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Instagram, Youtube, Twitter, Facebook, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
