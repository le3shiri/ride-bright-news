import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "12+", label: t('about.stats.years') },
    { value: "180", label: t('about.stats.countries') },
    { value: "2.4M", label: t('about.stats.readers') },
    { value: "4,200+", label: t('about.stats.reviews') },
  ];

  const values = [
    {
      icon: Award,
      title: t('about.values.honest'),
      text: t('about.values.honestText'),
    },
    {
      icon: Globe,
      title: t('about.values.global'),
      text: t('about.values.globalText'),
    },
    {
      icon: Users,
      title: t('about.values.reader'),
      text: t('about.values.readerText'),
    },
    {
      icon: Zap,
      title: t('about.values.future'),
      text: t('about.values.futureText'),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="container-x py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t('about.tagline')}</p>
          <h1 
            className="font-display text-5xl md:text-7xl font-bold text-ink leading-[1.05] text-balance max-w-4xl"
            dangerouslySetInnerHTML={{ __html: t('about.heroTitle') }}
          />
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty">
            {t('about.heroDesc')}
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
              {t('about.missionTitle')}
            </h2>
          </div>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>{t('about.missionDesc1')}</p>
            <p>{t('about.missionDesc2')}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t('about.valuesTagline')}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-12">{t('about.valuesTitle')}</h2>
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

      {/* CTA */}
      <section className="container-x py-20">
        <div className="rounded-3xl bg-ink p-10 md:p-16 text-primary-foreground relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              {t('about.ctaTitle')}
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg">
              {t('about.ctaDesc')}
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/contact">{t('about.getInTouch')} <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
