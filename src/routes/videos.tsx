import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageHero } from "@/components/site/PageHero";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Project Videos — Walkthroughs, Drone Shots & Site Progress | Impian Bina" },
      { name: "description", content: "Watch project walkthroughs, drone footage, and site-progress videos from Impian Bina's residential, commercial and infrastructure builds." },
      { property: "og:title", content: "Project Videos — Impian Bina" },
      { property: "og:description", content: "Walkthroughs, drone shots and site progress." },
      { property: "og:url", content: "/videos" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: VideosPage,
});

// IMPORTANT: Replace the 'vt.tiktok.com' placeholder URLs with the FULL, resolved URLs.
const videos = [
  { titleKey: "vid.item.1", categoryKey: "vid.cat.1", url: "https://www.tiktok.com/@officialimpianbina/video/7653849868527553810?_r=1&_t=ZS-97PS4R3BNDQ" }, 
  { titleKey: "vid.item.2", categoryKey: "vid.cat.2", url: "https://www.tiktok.com/@officialimpianbina/video/7653843837453913351?_r=1&_t=ZS-97PS62y1q9V" },
  { titleKey: "vid.item.3", categoryKey: "vid.cat.3", url: "https://www.tiktok.com/@officialimpianbina/video/7653842521407180053?_r=1&_t=ZS-97PS4DKnYhA" },
  { titleKey: "vid.item.4", categoryKey: "vid.cat.4", url: "https://www.tiktok.com/@officialimpianbina/video/7652742679922724104?_r=1&_t=ZS-97PS4Tse9pN" },
  { titleKey: "vid.item.5", categoryKey: "vid.cat.5", url: "https://www.tiktok.com/@officialimpianbina/video/7652733783866658055?_r=1&_t=ZS-97PS7Sl8id2" },
  { titleKey: "vid.item.6", categoryKey: "vid.cat.6", url: "https://www.tiktok.com/@officialimpianbina/video/7652375217905421589?_r=1&_t=ZS-97PS8UhQm0q" },
  { titleKey: "vid.item.7", categoryKey: "vid.cat.7", url: "https://www.tiktok.com/@officialimpianbina/video/7652373111756623124?_r=1&_t=ZS-97PS8PYfimC" },
  { titleKey: "vid.item.8", categoryKey: "vid.cat.8", url: "https://www.tiktok.com/@officialimpianbina/video/7652342046958685460?_r=1&_t=ZS-97PS8x6CVCH" },
  { titleKey: "vid.item.9", categoryKey: "vid.cat.9", url: "https://www.tiktok.com/@officialimpianbina/video/7651964369949052181?_r=1&_t=ZS-97PS8zFsCDV" },
  { titleKey: "vid.item.10", categoryKey: "vid.cat.10", url: "https://www.tiktok.com/@officialimpianbina/video/7651964113559489813?_r=1&_t=ZS-97PS94XkXkD" },
  { titleKey: "vid.item.11", categoryKey: "vid.cat.11", url: "https://www.tiktok.com/@officialimpianbina/video/7651616041147059474?_r=1&_t=ZS-97PS9r1A1i8" },
  { titleKey: "vid.item.12", categoryKey: "vid.cat.12", url: "https://www.tiktok.com/@officialimpianbina/video/7651611352129146132?_r=1&_t=ZS-97PSBRE4bkz" },
  { titleKey: "vid.item.13", categoryKey: "vid.cat.13", url: "https://www.tiktok.com/@officialimpianbina/video/7651604323629141268?_r=1&_t=ZS-97PSBeFjRtF" },
];

function getTikTokVideoId(url: string): string {
  if (url.includes("vt.tiktok.com")) {
    console.error(`Unresolved TikTok short link detected: ${url}. You must use the full URL.`);
    return "";
  }
  return url.match(/\/video\/(\d+)/)?.[1] ?? "";
}

function VideosPage() {
  const { t } = useLang();

  useEffect(() => {
    document.getElementById("tiktok-embed-js")?.remove();

    const script = document.createElement("script");
    script.id = "tiktok-embed-js";
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <PageHero
        eyebrow={t("vid.hero.eyebrow")}
        title={t("vid.hero.title")}
        intro={t("vid.hero.intro")}
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {videos.map((v, i) => (
            <article key={v.url} className="group flex flex-col items-center">
              <div className="flex items-center justify-between w-full max-w-[325px] sm:max-w-[450px] mb-3 px-2">
                <span className="mono text-[10px] uppercase tracking-widest text-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mono text-[10px] uppercase tracking-widest text-primary">
                  {t(v.categoryKey)}
                </p>
              </div>

              <div className="relative w-full max-w-[325px] sm:max-w-[450px] min-h-[580px] sm:min-h-[780px] bg-accent/30 border border-foreground/10 flex items-center justify-center overflow-hidden">
                <blockquote
                  className="tiktok-embed"
                  cite={v.url}
                  data-video-id={getTikTokVideoId(v.url)}
                  style={{ maxWidth: 450, minWidth: 325, margin: 0 }}
                >
                  <section>
                    <a target="_blank" rel="noreferrer" href={v.url}>
                      {t(v.titleKey)}
                    </a>
                  </section>
                </blockquote>
              </div>

              <h3 className="w-full max-w-[325px] sm:max-w-[450px] font-bold uppercase tracking-tight mt-4 pt-4 border-t border-foreground/10 text-base md:text-lg transition-colors duration-300 group-hover:text-primary">
                {t(v.titleKey)}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}