// src/routes/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { CertStrip } from "@/components/site/CertStrip";
import { useLang } from "@/lib/i18n";
import { Typewriter } from "@/components/ui/typewriter-text";
import { ParallaxHero } from "@/components/ui/parallax-scrolling";

import heroImg from "@/assets/hero-construction.webp";
import concreteImg from "@/assets/hero-concrete.webp";
import residentialImg from "@/assets/service-residential.webp";
import commercialImg from "@/assets/service-commercial.webp";
import infraImg from "@/assets/service-infrastructure.webp";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project6 from "@/assets/project-6.webp";

import buildingForegroundImg from "@/assets/hero-building-fg.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Impian Bina — CIDB-Registered Contractor in Negeri Sembilan & Melaka" },
      {
        name: "description",
        content:
          "CIDB-registered construction company in Negeri Sembilan and Melaka. Residential, commercial, government, and infrastructure projects since 2000.",
      },
      { name: "keywords", content: "construction Negeri Sembilan, kontraktor Melaka, CIDB, SPKK contractor, renovation Seremban, government projects Malaysia" },
      { property: "og:title", content: "Impian Bina — Building the Future with Local Precision" },
      { property: "og:description", content: "CIDB-registered contractor serving Negeri Sembilan and Melaka." },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

const services = [
  { idx: "01", nameKey: "home.svc.res.name", blurbKey: "home.svc.res.blurb", img: residentialImg },
  { idx: "02", nameKey: "home.svc.com.name", blurbKey: "home.svc.com.blurb", img: commercialImg },
  { idx: "03", nameKey: "home.svc.inf.name", blurbKey: "home.svc.inf.blurb", img: infraImg },
];

const featuredProjects = [
  { titleKey: "home.proj.1.title", categoryKey: "home.proj.1.cat", img: project1 },
  { titleKey: "home.proj.2.title", categoryKey: "home.proj.2.cat", img: project2 },
  { titleKey: "home.proj.3.title", categoryKey: "home.proj.3.cat", img: project6 },
];

function HomePage() {
  const { t } = useLang();

  return (
    <div className="w-full">
      <ParallaxHero bgImage={heroImg} fgImage={buildingForegroundImg}>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6 min-h-6">
              <Typewriter 
                key={t("home.eyebrow")}
                text={t("home.eyebrow")} 
                speed={40} 
                loop={false}
                cursor="|"
              />
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-balance mb-8 uppercase text-foreground">
              {t("home.h1.a")}{" "}
              <span 
                className="text-transparent" 
                style={{ WebkitTextStroke: "2px var(--color-primary)" }}
              >
                {t("home.h1.b")}
              </span>{" "}
              {t("home.h1.c")}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed text-pretty">
              {t("home.intro")}
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest hover:bg-accent transition-colors shadow-lg"
              >
                {t("cta.getQuotation")}
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 bg-background/30 backdrop-blur-md border border-foreground/15 font-bold uppercase text-xs tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                {t("cta.viewProjects")}
              </Link>
            </div>
          </div>
        </div>
      </ParallaxHero>

      <div className="relative z-30 bg-background">
        <CertStrip />

        {/* Services Section */}
        <section className="py-24 md:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 border-b border-foreground/10 pb-8 gap-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">{t("home.services.title")}</h2>
              <span className="mono text-xs text-muted-foreground">{t("home.services.meta")}</span>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
              {services.map((s) => (
                <article
                  key={s.idx}
                  className="group bg-card p-10 md:p-12 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="mono text-xs mb-8 block opacity-50">{s.idx}</span>
                  <img
                    src={s.img}
                    alt={t(s.nameKey)}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full aspect-[4/3] object-cover mb-8 grayscale-[15%]"
                  />
                  <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase">{t(s.nameKey)}</h3>
                  <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100">{t(s.blurbKey)}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex mono text-xs uppercase tracking-widest text-primary hover:text-foreground"
              >
                {t("home.services.seeAll")}
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 border-b border-foreground/10 pb-8 gap-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">{t("home.featured.title")}</h2>
              <Link to="/projects" className="mono text-xs uppercase tracking-widest text-primary hover:text-foreground">
                {t("home.featured.viewAll")}
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((p) => (
                <article key={t(p.titleKey)} className="group">
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={t(p.titleKey)}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mono text-[10px] uppercase tracking-widest text-primary mt-4">{t(p.categoryKey)}</p>
                  <h3 className="font-bold uppercase tracking-tight mt-1">{t(p.titleKey)}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="bg-background border-y border-foreground/10 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">{t("home.coverage.eyebrow")}</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-6 whitespace-pre-line">
                {t("home.coverage.title")}
              </h2>
              <p className="text-muted-foreground max-w-md leading-relaxed mb-6">{t("home.coverage.body")}</p>
              <Link to="/coverage" className="mono text-xs uppercase tracking-widest text-primary hover:text-foreground">
                {t("home.coverage.link")}
              </Link>
            </div>
            <div className="relative">
              <img
                src={concreteImg}
                alt="Concrete texture"
                loading="lazy"
                width={900}
                height={1200}
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 md:p-10 max-w-xs">
                <p className="mono text-[10px] uppercase tracking-widest opacity-70 mb-2">{t("home.coverage.minProject")}</p>
                <p className="text-3xl font-black tracking-tighter">RM 250,000</p>
                <p className="text-[10px] mt-3 opacity-70 uppercase tracking-widest">{t("home.coverage.minNote")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-accent text-accent-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">{t("home.cta.eyebrow")}</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] mb-8">
              {t("home.cta.title")}
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest hover:bg-background hover:text-foreground transition-colors">
                {t("cta.contactUs")}
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-white/20 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-accent transition-colors">
                {t("cta.requestQuotation")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}