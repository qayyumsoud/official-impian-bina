import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — SSM, CIDB, SPKK, STB | Impian Bina" },
      { name: "description", content: "Impian Bina is registered and certified: SSM company registration, CIDB Grade G1 contractor licence, SPKK certification, and STB Bumiputera status." },
      { property: "og:title", content: "Certifications & Licences — Impian Bina" },
      { property: "og:description", content: "SSM, CIDB G1, SPKK, and STB certified contractor." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertificationsPage,
});

const certs = [
  {
    code: "SSM",
    issuer: "Suruhanjaya Syarikat Malaysia",
    reg: "Reg. No. 201201040000 (1020000-X)",
    body: "Companies Commission of Malaysia registration. Confirms Impian Bina Sdn Bhd as a legally incorporated Sendirian Berhad entity authorised to trade and enter contracts in Malaysia.",
    imgPath: "/certs/ssm-cert.webp", 
    pdfPath: "/certs/ssm-cert.pdf",   
  },
  {
    code: "CIDB",
    issuer: "Construction Industry Development Board",
    reg: "Grade G1 · Category B, CE, ME",
    body: "Grade G1 contractor licence. Authorises the execution of construction and civil engineering projects up to RM200,000. Essential for local government and private sector micro-projects.",
    imgPath: "/certs/cidb-cert.webp", 
    pdfPath: "/certs/cidb-cert.pdf",   
  },
  {
    code: "SPKK",
    issuer: "Sijil Perolehan Kerja Kerajaan",
    reg: "SPKK No. 0120000000-000",
    body: "Government works procurement certificate. Allows direct bidding on JKR, state, and federal construction tenders. Renewed annually with full financial and capability audit.",
    imgPath: "/certs/spkk-cert.webp", 
    pdfPath: "/certs/spkk-cert.pdf",   
  },
  {
    code: "STB",
    issuer: "Sijil Taraf Bumiputera",
    reg: "Bumiputera Status Certified",
    body: "Bumiputera ownership certification from the Ministry of Finance. Enables participation in Bumiputera-reserved government and GLC tender categories.",
    imgPath: "/certs/stb-cert.webp", 
    pdfPath: "/certs/stb-cert.pdf",   
  },
];

function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Licences & Certifications"
        title="Verified Authority."
        intro="Every certification is current, every audit is clean. Review our official documentation below."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12">
          {certs.map((c) => (
            // Applied orange border to the main container
            <article key={c.code} className="bg-card border-2 border-orange-500 flex flex-col group">
              
              {/* Certificate Image Container - Placeholders Removed */}
              <div className="relative w-full aspect-[1/1.4] bg-white border-b-2 border-orange-500 overflow-hidden flex items-center justify-center p-6">
                <img 
                  src={c.imgPath} 
                  alt={`${c.issuer} Certificate`} 
                  className="w-full h-full object-contain shadow-sm mix-blend-multiply"
                  loading="lazy"
                />
              </div>

              {/* Text Context & Download Action */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase mb-1">{c.issuer}</h2>
                    {/* Shifted registration number color to match brand outlining */}
                    <p className="mono text-xs uppercase tracking-widest text-orange-600">{c.reg}</p>
                  </div>
                  {/* Applied orange bordering to the verification badge */}
                  <div className="size-10 shrink-0 border-2 border-orange-500 text-orange-600 flex items-center justify-center mono text-xs bg-orange-50">
                    ✓
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {c.body}
                </p>
                
                {/* Official PDF Download Button */}
                <a
                  href={c.pdfPath}
                  download={`${c.code}_Certificate_ImpianBina.pdf`}
                  className="mt-auto inline-flex w-fit items-center justify-center border border-foreground/20 px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
                >
                  Download Official PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}