import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Mail, Music2 } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/iride_morocco?igsh=MTZtaGV5bDY0YndkMQ==", label: "Instagram" },
    { Icon: Youtube, href: "https://youtube.com/@iridemorocco?si=FEmwtskipf4mM9wI", label: "YouTube" },
    { Icon: Facebook, href: "https://www.facebook.com/share/14ZRDPTwFGL/?mibextid=wwXIfr", label: "Facebook" },
    { Icon: Music2, href: "https://www.tiktok.com/@iride.morocco?_r=1&_t=ZS-95SNnrKrwQf", label: "TikTok" },
    { Icon: Mail, href: "mailto:iridemorocco@gmail.com", label: "Email" },
  ];

  return (
    <footer className="mt-32 border-t border-border bg-ink text-primary-foreground">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-display text-lg font-bold">
              iR
            </div>
            <span className="font-display text-2xl font-bold">iRide Morocco</span>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Leading the ride through Morocco. News, reviews, and motorcycle adventures since 2014.
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
            © {new Date().getFullYear()} iRide Morocco. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label={label}
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
