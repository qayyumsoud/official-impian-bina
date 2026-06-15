import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";
import { useLang } from "@/lib/i18n";

const navItems = [
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/certifications", key: "nav.certifications" },
  { to: "/projects", key: "nav.projects" },
  { to: "/portfolio", key: "nav.portfolio" },
  { to: "/videos", key: "nav.videos" },
  { to: "/process", key: "nav.process" },
  { to: "/coverage", key: "nav.coverage" },
  { to: "/faq", key: "nav.faq" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  
  // 1. Initialize the router location hook
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleLang = () => setLang(lang === "en" ? "ms" : "en");

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Impian Bina home">
          {/* 2. Apply conditional styling and remove hardcoded width/height */}
          <img 
            src={logo} 
            alt="Impian Bina — Building Dream" 
            className={`w-auto transition-all duration-300 ease-in-out ${isHome ? "h-16" : "h-12"}`} 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[12px] font-semibold uppercase tracking-wider" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={`Switch language to ${lang === "en" ? "Bahasa Malaysia" : "English"}`}
            className="mono text-[11px] font-bold uppercase tracking-widest px-3 py-2 border border-foreground/15 hover:bg-foreground hover:text-background transition-colors"
          >
            {t("lang.toggle")}
          </button>
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-accent text-accent-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-300"
          >
            {t("cta.getQuotation")}
          </Link>
          <button
            type="button"
            className="lg:hidden p-2"
            aria-label={open ? t("menu.close") : t("menu.open")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-foreground/5 bg-background" aria-label="Mobile">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold uppercase tracking-wider hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block mt-2 bg-accent text-accent-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest text-center"
              >
                {t("cta.getQuotation")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}