import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { X } from "lucide-react";
import { useLang } from "@/lib/i18n";

// Gallery Image Imports
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

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Build Sequence — Impian Bina" },
      { name: "description", content: "A step-by-step visual showcase of our construction execution from earthworks to handover." },
      { property: "og:title", content: "Build Sequence — Impian Bina" },
      { property: "og:description", content: "A step-by-step visual showcase of our construction execution from earthworks to handover." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: GalleryPage,
});

// Structural definition mapped to dictionary keys
type BuildPhase = {
  id: string;
  titleKey: string;
  descKey: string;
  images: string[];
};

const constructionPhases: BuildPhase[] = [
  {
    id: "phase-01",
    titleKey: "proj.phase.1.title",
    descKey: "proj.phase.1.desc",
    images: [p18],
  },
  {
    id: "phase-02",
    titleKey: "proj.phase.2.title",
    descKey: "proj.phase.2.desc",
    images: [p21, p15],
  },
  {
    id: "phase-03",
    titleKey: "proj.phase.3.title",
    descKey: "proj.phase.3.desc",
    images: [],
  },
  {
    id: "phase-04",
    titleKey: "proj.phase.4.title",
    descKey: "proj.phase.4.desc",
    images: [p20, p24, p26, p25],
  },
  {
    id: "phase-05",
    titleKey: "proj.phase.5.title",
    descKey: "proj.phase.5.desc",
    images: [p02, p04, p06, p07],
  }
];

function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("projects.hero.eyebrow")}
        title={t("projects.hero.title")}
        intro={t("projects.hero.intro")}
      />

      <div className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {constructionPhases.map((phase) => (
            <section key={phase.id} className="scroll-mt-24">
              {/* Phase Header */}
              <div className="mb-8 md:mb-12 max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-3 text-foreground">
                  {t(phase.titleKey)}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t(phase.descKey)}
                </p>
              </div>

              {/* Phase Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
                {phase.images.map((src, idx) => (
                  <button
                    key={`${phase.id}-img-${idx}`}
                    type="button"
                    onClick={() => setActiveImage(src)}
                    className="group relative aspect-square w-full overflow-hidden bg-muted"
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Progress shot ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image view"
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close fullscreen"
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
              alt="Detailed construction view" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl" 
            />
          </div>
        </div>
      )}
    </>
  );
}