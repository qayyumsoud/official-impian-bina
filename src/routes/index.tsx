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

// Update year / location with real project data
const featuredProjects = [
  { idx: "01", titleKey: "home.proj.1.title", categoryKey: "home.proj.1.cat", img: project1, year: "2023", location: "Seremban" },
  { idx: "02", titleKey: "home.proj.2.title", categoryKey: "home.proj.2.cat", img: project2, year: "2022", location: "Port Dickson" },
  { idx: "03", titleKey: "home.proj.3.title", categoryKey: "home.proj.3.cat", img: project6, year: "2024", location: "Melaka" },
];

function HomePage() {
  const { t } = useLang();

  return (
    <div className="w-full">
      {/* ── Hero ── */}
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

        {/* ── Services ── */}
        <section className="py-24 md:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 border-b border-foreground/10 pb-8 gap-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                {t("home.services.title")}
              </h2>
              <span className="mono text-xs text-muted-foreground">{t("home.services.meta")}</span>
            </div>

            {/*
              Bento layout:
              ┌────────────────────┬───────────┐
              │                    │  Svc 02   │
              │  Service 01        │           │
              │  (full-bleed img)  ├───────────┤
              │                    │  Svc 03   │
              └────────────────────┴───────────┘
            */}
            <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">

              {/* Featured service — spans 2 cols, image fills card */}
              <article
                className="group relative md:col-span-2 overflow-hidden bg-card min-h-[480px] md:min-h-[560px]"
              >
                {/* Full-bleed image */}
                <img
                  src={services[0].img}
                  alt={t(services[0].nameKey)}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[10%] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom-to-top gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />

                {/* Index badge — top left */}
                <div className="absolute top-8 left-8">
                  <span className="mono text-[10px] uppercase tracking-widest text-foreground/40">
                    {services[0].idx} / 03
                  </span>
                </div>

                {/* Content anchored to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-foreground mb-3">
                    {t(services[0].nameKey)}
                  </h3>
                  {/* Blurb slides up on hover */}
                  <p
                    className="text-sm text-foreground/70 max-w-lg leading-relaxed translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    {t(services[0].blurbKey)}
                  </p>
                  <div className="mt-5">
                    <Link
                      to="/services"
                      className="mono text-[10px] uppercase tracking-widest text-primary hover:text-foreground transition-colors"
                    >
                      {t("home.services.seeAll")} →
                    </Link>
                  </div>
                </div>
              </article>

              {/* Right column: services 02 & 03 stacked */}
              <div className="flex flex-col gap-px">
                {services.slice(1).map((s) => (
                  <article
                    key={s.idx}
                    className="group bg-card p-8 md:p-10 flex-1 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground flex flex-col"
                  >
                    {/* Index */}
                    <span className="mono text-[10px] opacity-40 mb-5 block">{s.idx} / 03</span>

                    {/* Image */}
                    <div className="overflow-hidden mb-6">
                      <img
                        src={s.img}
                        alt={t(s.nameKey)}
                        loading="lazy"
                        className="w-full aspect-video object-cover grayscale-[10%] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 tracking-tight uppercase">{t(s.nameKey)}</h3>

                    {/* Blurb — always visible here, not hidden */}
                    <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100 flex-1 transition-opacity duration-300">
                      {t(s.blurbKey)}
                    </p>

                    {/* Footer link */}
                    <div className="mt-6 pt-4 border-t border-current/10">
                      <Link
                        to="/services"
                        className="mono text-[9px] uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity"
                      >
                        {t("home.services.seeAll")} →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* See all link below grid */}
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex mono text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors"
              >
                {t("home.services.seeAll")}
              </Link>
            </div>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 border-b border-foreground/10 pb-8 gap-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                {t("home.featured.title")}
              </h2>
              <Link
                to="/projects"
                className="mono text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors"
              >
                {t("home.featured.viewAll")}
              </Link>
            </div>

            {/*
              Magazine layout:
              ┌───────────────────┬──────────────┐
              │                   │  Project 02  │
              │   Project 01      │              │
              │   (tall, 3/5)     ├──────────────┤
              │                   │  Project 03  │
              │                   │              │
              └───────────────────┴──────────────┘
            */}
            <div className="grid md:grid-cols-5 gap-px bg-foreground/10 border border-foreground/10">

              {/* Main featured project — 3 of 5 cols, portrait */}
              <article className="group relative md:col-span-3 overflow-hidden bg-background">
                <div className="relative overflow-hidden aspect-[3/4] md:aspect-auto md:h-full" style={{ minHeight: "420px" }}>
                  <img
                    src={featuredProjects[0].img}
                    alt={t(featuredProjects[0].titleKey)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover scrim */}
                  <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category badge */}
                  <div className="absolute top-5 left-5">
                    <span className="mono text-[9px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1.5">
                      {t(featuredProjects[0].categoryKey)}
                    </span>
                  </div>

                  {/* Ghost index watermark — construction-drawing signature */}
                  <div
                    className="absolute bottom-0 right-0 leading-none select-none pointer-events-none opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-500"
                    aria-hidden="true"
                  >
                    <span className="text-[14rem] font-black text-foreground">
                      {featuredProjects[0].idx}
                    </span>
                  </div>

                  {/* Centred hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      to="/projects"
                      className="px-6 py-3 bg-primary text-primary-foreground mono text-[10px] uppercase tracking-widest font-bold hover:bg-accent transition-colors shadow-lg"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-6 flex items-start justify-between gap-4 border-t border-foreground/10">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight">
                      {t(featuredProjects[0].titleKey)}
                    </h3>
                    <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                      {featuredProjects[0].location} · {featuredProjects[0].year}
                    </p>
                  </div>
                  <Link
                    to="/projects"
                    aria-label="View project"
                    className="mono text-sm text-primary hover:text-foreground transition-colors shrink-0 mt-0.5"
                  >
                    →
                  </Link>
                </div>
              </article>

              {/* Right column: projects 02 & 03 stacked */}
              <div className="md:col-span-2 flex flex-col gap-px">
                {featuredProjects.slice(1).map((p) => (
                  <article
                    key={p.titleKey}
                    className="group relative overflow-hidden bg-background flex flex-col flex-1"
                  >
                    <div className="relative overflow-hidden flex-1" style={{ minHeight: "200px" }}>
                      <img
                        src={p.img}
                        alt={t(p.titleKey)}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Hover scrim */}
                      <div className="absolute inset-0 bg-background/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="mono text-[8px] uppercase tracking-widest bg-primary text-primary-foreground px-2 py-1">
                          {t(p.categoryKey)}
                        </span>
                      </div>

                      {/* Ghost index watermark */}
                      <div
                        className="absolute bottom-0 right-0 leading-none select-none pointer-events-none opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500"
                        aria-hidden="true"
                      >
                        <span className="text-[7rem] font-black text-foreground">
                          {p.idx}
                        </span>
                      </div>

                      {/* Centred hover CTA */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          to="/projects"
                          className="px-4 py-2 bg-primary text-primary-foreground mono text-[9px] uppercase tracking-widest font-bold hover:bg-accent transition-colors shadow-md"
                        >
                          View →
                        </Link>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="p-5 flex items-start justify-between gap-2 border-t border-foreground/10">
                      <div>
                        <h3 className="font-black uppercase tracking-tight text-sm">
                          {t(p.titleKey)}
                        </h3>
                        <p className="mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">
                          {p.location} · {p.year}
                        </p>
                      </div>
                      <Link
                        to="/projects"
                        aria-label="View project"
                        className="mono text-sm text-primary hover:text-foreground transition-colors shrink-0"
                      >
                        →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Count + view-all footer */}
            <div className="mt-8 flex items-center gap-6">
              <span className="mono text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                Showing 3 of 12
              </span>
              <div className="flex-1 h-px bg-foreground/10" />
              <Link
                to="/projects"
                className="mono text-[10px] uppercase tracking-widest text-primary hover:text-foreground transition-colors whitespace-nowrap"
              >
                {t("home.featured.viewAll")} →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Coverage ── */}
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

        {/* ── Final CTA ── */}
        <section className="py-24 md:py-32 bg-accent text-accent-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">{t("home.cta.eyebrow")}</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none mb-8">
              {t("home.cta.title")}
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest hover:bg-background hover:text-foreground transition-colors"
              >
                {t("cta.contactUs")}
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-accent transition-colors"
              >
                {t("cta.requestQuotation")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}