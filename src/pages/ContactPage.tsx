import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Send, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/iride_morocco?igsh=MTZtaGV5bDY0YndkMQ==", label: "Instagram" },
    { Icon: Youtube, href: "https://youtube.com/@iridemorocco?si=FEmwtskipf4mM9wI", label: "YouTube" },
    { Icon: Facebook, href: "https://www.facebook.com/share/14ZRDPTwFGL/?mibextid=wwXIfr", label: "Facebook" },
    { Icon: Music2, href: "https://www.tiktok.com/@iride.morocco?_r=1&_t=ZS-95SNnrKrwQf", label: "TikTok" },
  ];

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-x py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Get in touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-none">Contact</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Tips, press releases, advertising — we read every message and reply within one business day.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} className="bg-card rounded-3xl p-8 md:p-12 shadow-elev">
            <h2 className="font-display text-3xl font-bold text-ink mb-8">Send us a message</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-accent transition-smooth"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-accent transition-smooth"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-accent transition-smooth resize-none"
                  placeholder="Tell us about it..."
                />
              </div>
              <Button type="submit" variant="ink" size="lg" className="w-full sm:w-auto">
                Send message <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">Reach us directly</h3>
              <div className="space-y-4">
                <a href="mailto:iridemorocco@gmail.com" className="flex items-start gap-4 group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-highlight-soft text-accent flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                    <p className="font-display text-lg font-semibold text-ink group-hover:text-accent transition-smooth">iridemorocco@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+212661796563" className="flex items-start gap-4 group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-highlight-soft text-accent flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                    <p className="font-display text-lg font-semibold text-ink group-hover:text-accent transition-smooth">+212 661 79 65 63</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-highlight-soft text-accent flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                    <p className="font-display text-lg font-semibold text-ink">Morocco</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-ink p-8 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold">Follow the ride</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">Daily content across every platform.</p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map(({ Icon, href, label }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-smooth" aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
