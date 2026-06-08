import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Download, X } from "lucide-react";

import rk01 from "@/assets/portfolio/rk01.webp";
import rk01p from "@/assets/portfolio/rk01-plan.webp";
import rk02 from "@/assets/portfolio/rk02.webp";
import rk02p from "@/assets/portfolio/rk02-plan.webp";
import rk03 from "@/assets/portfolio/rk03.webp";
import rk03p from "@/assets/portfolio/rk03-plan.webp";
import rk04 from "@/assets/portfolio/rk04.webp";
import rk04p from "@/assets/portfolio/rk04-plan.webp";
import rk05 from "@/assets/portfolio/rk05.webp";
import rk05p from "@/assets/portfolio/rk05-plan.webp";
import rk06 from "@/assets/portfolio/rk06.webp";
import rk06p from "@/assets/portfolio/rk06-plan.webp";
import rk07 from "@/assets/portfolio/rk07.webp";
import rk07p from "@/assets/portfolio/rk07-plan.webp";
import rk08 from "@/assets/portfolio/rk08.webp";
import rk08p from "@/assets/portfolio/rk08-plan.webp";
import rk09 from "@/assets/portfolio/rk09.webp";
import rk09p from "@/assets/portfolio/rk09-plan.webp";
import rk10 from "@/assets/portfolio/rk10.jpg";
import rk10p from "@/assets/portfolio/rk10-plan.webp";
import rk11 from "@/assets/portfolio/rk11.webp";
import rk11p from "@/assets/portfolio/rk11-plan.webp";
import rk12 from "@/assets/portfolio/rk12.jpg";
import rk12p from "@/assets/portfolio/rk12-plan.jpg";
import rk13 from "@/assets/portfolio/rk13.jpg";
import rk13p from "@/assets/portfolio/rk13-plan.jpg";
import rk14 from "@/assets/portfolio/rk14.jpg";
import rk14p from "@/assets/portfolio/rk14-plan.jpg";
import rk15 from "@/assets/portfolio/rk15.jpg";
import rk15p from "@/assets/portfolio/rk15-plan.jpg";
import rk16 from "@/assets/portfolio/rk16.jpg";
import rk16p from "@/assets/portfolio/rk16-plan.jpg";
import rk17 from "@/assets/portfolio/rk17.jpg";
import rk17p from "@/assets/portfolio/rk17-plan.jpg";
import rk18 from "@/assets/portfolio/rk18.jpg";
import rk18p from "@/assets/portfolio/rk18-plan.jpg";
import rk19 from "@/assets/portfolio/rk19.jpg";
import rk19p from "@/assets/portfolio/rk19-plan.jpg";
import rk20 from "@/assets/portfolio/rk20.jpg";
import rk20p from "@/assets/portfolio/rk20-plan.jpg";

type Design = {
  code: string;
  rooms: string;
  sqft: number;
  render: string;
  plan: string;
};

const designs: Design[] = [
  { code: "RK01", rooms: "1 Bedroom / 1 Bathroom", sqft: 388, render: rk01, plan: rk01p },
  { code: "RK02", rooms: "1 Bedroom / 1 Bathroom", sqft: 425, render: rk02, plan: rk02p },
  { code: "RK03", rooms: "1 Bedroom / 1 Bathroom", sqft: 434, render: rk03, plan: rk03p },
  { code: "RK04", rooms: "1 Bedroom / 1 Bathroom", sqft: 463, render: rk04, plan: rk04p },
  { code: "RK05", rooms: "1 Bedroom / 1 Bathroom", sqft: 463, render: rk05, plan: rk05p },
  { code: "RK06", rooms: "1 Bedroom / 1 Bathroom", sqft: 490, render: rk06, plan: rk06p },
  { code: "RK07", rooms: "2 Bedrooms / 1 Bathroom", sqft: 571, render: rk07, plan: rk07p },
  { code: "RK08", rooms: "2 Bedrooms / 1 Bathroom", sqft: 669, render: rk08, plan: rk08p },
  { code: "RK09", rooms: "3 Bedrooms / 1 Bathroom", sqft: 680, render: rk09, plan: rk09p },
  { code: "RK10", rooms: "1 Bedroom / 1 Bathroom", sqft: 425, render: rk10, plan: rk10p },
  { code: "RK11", rooms: "2 Bedrooms / 1 Bathroom", sqft: 668, render: rk11, plan: rk11p },
  { code: "RK12", rooms: "1 Bedroom / 1 Bathroom", sqft: 490, render: rk12, plan: rk12p },
  { code: "RK13", rooms: "2 Bedrooms / 1 Bathroom", sqft: 571, render: rk13, plan: rk13p },
  { code: "RK14", rooms: "2 Bedrooms / 1 Bathroom", sqft: 570, render: rk14, plan: rk14p },
  { code: "RK15", rooms: "2 Bedrooms / 1 Bathroom", sqft: 570, render: rk15, plan: rk15p },
  { code: "RK16", rooms: "2 Bedrooms / 1 Bathroom", sqft: 668, render: rk16, plan: rk16p },
  { code: "RK17", rooms: "2 Bedrooms / 1 Bathroom", sqft: 669, render: rk17, plan: rk17p },
  { code: "RK18", rooms: "2 Bedrooms / 1 Bathroom", sqft: 658, render: rk18, plan: rk18p },
  { code: "RK19", rooms: "2 Bedrooms / 1 Bathroom", sqft: 668, render: rk19, plan: rk19p },
  { code: "RK20", rooms: "2 Bedrooms / 1 Bathroom", sqft: 570, render: rk20, plan: rk20p },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Design Portfolio — Impian Bina (Volume 1)" },
      { name: "description", content: "20 ready-to-build single-storey bungalow designs by Impian Bina — 388 to 680 sq ft, one to three bedrooms. Browse 3D renders and floor plans." },
      { property: "og:title", content: "Design Portfolio — Impian Bina" },
      { property: "og:description", content: "20 single-storey bungalow designs by Impian Bina. 3D renders and floor plans." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState<Design | null>(null);
  const waMessage = encodeURIComponent(
    "Hi Impian Bina, I'm interested in getting a quotation for a house based on your design portfolio. Could you share more information?",
  );

  return (
    <>
      <PageHero
        eyebrow="Design Portfolio · Volume 1"
        title="Ready-to-build home designs."
        intro="20 single-storey bungalow designs — from 388 to 680 square feet. Each one can be tailored to your site and family needs."
      />

      <section className="py-12 md:py-16 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <p className="mono text-xs uppercase tracking-widest text-muted-foreground">
            {designs.length} designs · Volume 1
          </p>
          <div className="flex gap-3">
            <a
              href="/portfolio-design-rumah-vol1.pdf"
              download
              className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Download className="size-4" /> Download PDF
            </a>
            <a
              href={`https://wa.me/60176427285?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
            {designs.map((d, idx) => (
                <button
                key={d.code}
                type="button"
                onClick={() => setActive(d)}
                className="group bg-card text-left p-6 hover:bg-background transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="mono text-[10px] uppercase tracking-widest text-primary">
                    {d.sqft} sqft
                  </span>
                </div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted mb-5">
                  <img
                    src={d.render}
                    alt={`Design ${d.code} — single-storey bungalow, ${d.rooms}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h2 className="text-2xl font-black tracking-tighter uppercase">Design {d.code}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{d.rooms}</p>
                <p className="mt-1 text-sm font-semibold">{d.sqft} sq ft</p>
                <span className="mt-5 mono text-[10px] uppercase tracking-widest text-primary group-hover:underline">
                  View floor plan →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-foreground/10 bg-accent text-accent-foreground py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-5">Like any of these designs?</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
            We can tailor it to your site.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href={`https://wa.me/60176427285?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors"
            >
              Request Quotation
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Design ${active.code} floor plan`}
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 md:p-8"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-background max-w-5xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-foreground/10 p-5">
              <div>
                <p className="mono text-[10px] uppercase tracking-widest text-primary">Floor Plan</p>
              <h3 className="text-2xl font-black tracking-tighter uppercase">
                Design {active.code} · {active.sqft} sq ft
              </h3>
                <p className="text-xs text-muted-foreground mt-1">{active.rooms}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="p-2 hover:bg-accent hover:text-accent-foreground"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
              <img src={active.render} alt={`Design ${active.code} 3D render`} className="w-full h-full object-cover bg-background" />
              <img src={active.plan} alt={`Design ${active.code} floor plan`} className="w-full h-full object-contain bg-background p-4" />
            </div>
            <div className="p-5 flex flex-wrap gap-3 justify-end border-t border-foreground/10">
              <a
                href={`https://wa.me/60176427285?text=${encodeURIComponent(
                  `Hi Impian Bina, I'm interested in Design ${active.code} (${active.sqft} sq ft, ${active.rooms}). Could I get a quotation?`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}