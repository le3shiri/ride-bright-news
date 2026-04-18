import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authors } from "@/data/content";
import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { value: "12+", label: "Years on the road" },
  { value: "180", label: "Countries reached" },
  { value: "2.4M", label: "Monthly readers" },
  { value: "4,200+", label: "Reviews published" },
];

const values = [
  {
    icon: Award,
    title: "Honest reviews",
    text: "We buy or borrow — never accept paid placements. If a bike disappoints, we say so.",
  },
  {
    icon: Globe,
    title: "Global perspective",
    text: "Correspondents in eight countries cover racing, culture, and launches firsthand.",
  },
  {
    icon: Users,
    title: "Reader first",
    text: "Every story answers a question a real rider has. No fluff, no filler.",
  },
  {
    icon: Zap,
    title: "Future curious",
    text: "From electric powertrains to AI-assisted safety, we cover what's next without hype.",
  },
];

const AboutPage = () => {
  const team = Object.values(authors);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="container-x py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Our story</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[1.05] text-balance max-w-4xl">
            Built by riders, <span className="italic text-accent">for riders.</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty">
            iRide Morocco started in 2014 as a passion project for the Moroccan motorcycle community. Twelve years later, we're a global team of editors, photographers, and racers who share a single belief: the motorcycle is the most honest machine ever built.
          </p>
        </div>
      </section>

      {/* Cover image */}
      <section className="container-x py-16">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-ink shadow-elev">
          <img src={aboutTeam} alt="The iRide Morocco editorial team" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Stats */}
      <section className="container-x pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-surface p-8 text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-ink">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Mission</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
              Tell the truth about<br />two-wheeled machines.
            </h2>
          </div>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Mainstream motoring media often treats motorcycles as a footnote. We treat them as the main event. Every bike we cover is ridden — usually for weeks, sometimes for months — before we write a word.
            </p>
            <p>
              We believe great journalism is independent journalism. iRide Morocco is reader-funded through subscriptions and a small number of carefully chosen partners. Editorial decisions are made by editors, not advertisers. That separation is non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">What we stand for</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-12">Our values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-elev transition-smooth">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-highlight-soft text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">The team</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-12">Faces behind the bylines</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((a) => (
              <div key={a.name} className="rounded-2xl bg-card p-6 flex gap-5 items-start shadow-soft">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-ink text-primary-foreground font-display text-xl font-bold">
                  {a.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{a.role}</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-ink">{a.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <div className="rounded-3xl bg-ink p-10 md:p-16 text-primary-foreground relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Got a story for us?
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg">
              Tips, press releases, partnerships — we read every email and reply within one business day.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/contact">Get in touch <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
