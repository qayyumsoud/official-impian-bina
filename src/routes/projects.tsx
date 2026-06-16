// src/routes/projects.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { ImageGallery, ProjectGalleryItem } from "@/components/ui/image-gallery";

// Phase Gallery Image Imports
import p01 from "@/assets/gallery/p01.webp";
import p02 from "@/assets/gallery/p02.webp";
import p03 from "@/assets/gallery/p03.webp";
import p04 from "@/assets/gallery/p04.webp";
import p05 from "@/assets/gallery/p05.webp";
import p06 from "@/assets/gallery/p06.webp";
import p07 from "@/assets/gallery/p07.webp";
import p08 from "@/assets/gallery/p08.webp";
import p09 from "@/assets/gallery/p09.webp";
import p10 from "@/assets/gallery/p10.webp";
import p11 from "@/assets/gallery/p11.webp";
import p12 from "@/assets/gallery/p12.webp";
import p13 from "@/assets/gallery/p13.webp";
import p14 from "@/assets/gallery/p14.webp";
import p15 from "@/assets/gallery/p15.webp";
import p16 from "@/assets/gallery/p16.webp";
import p17 from "@/assets/gallery/p17.webp";
import p18 from "@/assets/gallery/p18.webp";
import p19 from "@/assets/gallery/p19.webp";
import p20 from "@/assets/gallery/p20.webp";
import p21 from "@/assets/gallery/p21.webp";
import p22 from "@/assets/gallery/p22.webp";
import p23 from "@/assets/gallery/p23.webp";
import p24 from "@/assets/gallery/p24.webp";
import p25 from "@/assets/gallery/p25.webp";
import p26 from "@/assets/gallery/p26.webp";

// Homepage feature project imports (Reusing assets for the masonry grid)
import g1 from "@/assets/gallery2/g1.webp";
import g2 from "@/assets/gallery2/g2.webp";
import g3 from "@/assets/gallery2/g3.webp";
import g4 from "@/assets/gallery2/g4.webp";
import g5 from "@/assets/gallery2/g5.webp";
import g6 from "@/assets/gallery2/g6.webp";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Build Sequence — Impian Bina" },
      { name: "description", content: "A step-by-step visual showcase of our construction execution and completed architectural projects." },
      { property: "og:title", content: "Projects — Impian Bina" },
      { property: "og:description", content: "Construction execution from earthworks to handover, plus our completed portfolio." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: GalleryPage,
});

// Structural definition for chronological phases
type BuildPhase = {
  id: string;
  titleKey: string;
  descKey: string;
  images: string[];
};

const constructionPhases: BuildPhase[] = [
  { id: "phase-01", titleKey: "proj.phase.1.title", descKey: "proj.phase.1.desc", images: [p18] },
  { id: "phase-02", titleKey: "proj.phase.2.title", descKey: "proj.phase.2.desc", images: [p21, p15] },
  { id: "phase-03", titleKey: "proj.phase.3.title", descKey: "proj.phase.3.desc", images: [] },
  { id: "phase-04", titleKey: "proj.phase.4.title", descKey: "proj.phase.4.desc", images: [p20, p24, p26, p25] },
  { id: "phase-05", titleKey: "proj.phase.5.title", descKey: "proj.phase.5.desc", images: [p02, p04, p06, p07] }
];

function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const { t } = useLang();

  // Define completed projects inside the component so we can use `t()` for localization
  const completedProjects: ProjectGalleryItem[] = [
    { id: "cp-1", src: g1, alt: t("proj.completed.1.cat"), ratio: 16 / 9, title: t("proj.completed.1.title"), category: t("proj.completed.1.cat") },
    { id: "cp-2", src: g2, alt: t("proj.completed.2.cat"), ratio: 4 / 3, title: t("proj.completed.2.title"), category: t("proj.completed.2.cat") },
    { id: "cp-3", src: g3, alt: t("proj.completed.3.cat"), ratio: 1, title: t("proj.completed.3.title"), category: t("proj.completed.3.cat") },
    { id: "cp-4", src: g4, alt: t("proj.completed.4.cat"), ratio: 9 / 16, title: t("proj.completed.4.title"), category: t("proj.completed.4.cat") },
    { id: "cp-5", src: g5, alt: t("proj.completed.5.cat"), ratio: 16 / 9, title: t("proj.completed.5.title"), category: t("proj.completed.5.cat") },
    { id: "cp-6", src: g6, alt: t("proj.completed.6.cat"), ratio: 4 / 3, title: t("proj.completed.6.title"), category: t("proj.completed.6.cat") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("projects.hero.eyebrow")}
        title={t("projects.hero.title")}
        intro={t("projects.hero.intro")}
      />

      <div className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          
          {/* Section 1: Chronological Build Phases */}
          <div className="border-b border-foreground/10 pb-12">
             <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-foreground">
               {t("proj.sequence.title")}
             </h2>
             <p className="text-muted-foreground max-w-2xl">
               {t("proj.sequence.desc")}
             </p>
          </div>

          {constructionPhases.map((phase) => (
            <section key={phase.id} className="scroll-mt-24">
              <div className="mb-8 md:mb-12 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-3 text-foreground">
                  {t(phase.titleKey)}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t(phase.descKey)}
                </p>
              </div>

              {phase.images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
                  {phase.images.map((src, idx) => (
                    <button
                      key={`${phase.id}-img-${idx}`}
                      type="button"
                      onClick={() => setActiveImage(src)}
                      className="group relative aspect-square w-full overflow-hidden bg-muted"
                      aria-label={`${t("proj.modal.view")} ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${t("proj.modal.progress")} ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 border border-dashed border-foreground/20 text-center text-sm text-muted-foreground mono uppercase">
                  {t("proj.status.pending")}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Section 2: Completed Projects Masonry Grid */}
      <section className="py-24 bg-accent/30 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
            {t("proj.portfolio.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground">
            {t("proj.portfolio.title")}
          </h2>
        </div>
        <ImageGallery items={completedProjects} />
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("proj.modal.fullscreen")}
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label={t("proj.modal.close")}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10"
          >
            <X className="size-8" />
          </button>
          
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage} 
              alt={t("proj.modal.detail")} 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl" 
            />
          </div>
        </div>
      )}
    </>
  );
}