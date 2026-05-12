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

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-20" />
        <div className="container-x py-20 md:py-32 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">{t('about.tagline')}</p>
          <h1 
            className="font-display text-6xl md:text-8xl font-bold text-ink leading-[0.95] text-balance max-w-5xl"
            dangerouslySetInnerHTML={{ __html: t('about.heroTitle') }}
          />
          <p className="mt-10 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl text-pretty font-light">
            {t('about.heroDesc')}
          </p>
        </div>
      </section>

      {/* Cinematic Vision */}
      <section className="bg-ink py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink z-10" />
          <img src={aboutTeam} alt="The iRide Morocco journey" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container-x relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8 leading-tight italic">
              "We're here to fuel the MENA biking community with a fresh, authentic look at the machines and the lifestyle we love."
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto" />
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Our Journey</p>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-ink mb-8 leading-tight">
              {t('about.missionTitle')}
            </h3>
            <div className="space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              <p>{t('about.missionDesc1')}</p>
              <p>{t('about.missionDesc2')}</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-smooth duration-700">
              <img src={aboutTeam} alt="Team story" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl hidden md:block">
              <p className="font-display text-4xl font-bold italic">12+</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Years on the road</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Grid style */}
      <section className="bg-surface border-y border-border py-20">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <p className="font-display text-5xl md:text-6xl font-bold text-ink group-hover:text-accent transition-colors duration-300">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24 md:py-32">
        <div className="rounded-[3rem] bg-ink p-12 md:p-24 text-primary-foreground relative overflow-hidden text-center">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-primary-foreground/60 text-xl md:text-2xl mb-12 font-light">
              {t('about.ctaDesc')}
            </p>
            <Button asChild variant="hero" size="xl" className="h-16 px-10 text-lg rounded-full">
              <Link to="/contact" className="flex items-center gap-3">
                {t('about.getInTouch')} <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
