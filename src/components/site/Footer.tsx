import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.webp";
import { useLang } from "@/lib/i18n";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  ChevronRight, 
  HardHat, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Users, 
  Award 
} from "lucide-react";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative bg-[#111111] text-white/70 overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Address */}
          <div className="flex flex-col">
            <Link to="/" className="inline-block mb-6" aria-label="Impian Bina home">
              <img src={logo} alt="Impian Bina" className="h-16 w-auto" width={200} height={64} />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            <hr className="w-10 border-primary mb-6 border-t-2" />
            <address className="not-italic flex gap-4 text-sm">
              <MapPin className="text-primary size-5 shrink-0" />
              <div className="space-y-1">
                <p>E30 Jalan Melati, Felda Sendayan</p>
                <p>71950 Seremban, Negeri Sembilan</p>
              </div>
            </address>
          </div>

          {/* Column 2: Contact, Hours & Socials */}
          <div className="flex flex-col gap-10">
            {/* Contact */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-6">{t("footer.contact")}</p>
              <ul className="space-y-5">
                <li>
                  <a className="flex items-center gap-4 hover:text-white transition-colors group" href="tel:+6067600000">
                    <div className="p-2 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Phone className="size-4 text-primary" />
                    </div>
                    <span className="text-sm">+60 6-760 0000</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 hover:text-white transition-colors group" href="https://wa.me/60176427285" target="_blank" rel="noreferrer">
                    <div className="p-2 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                      <MessageCircle className="size-4 text-primary" />
                    </div>
                    <span className="text-sm">WhatsApp +60 17-642 7285</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 hover:text-white transition-colors group break-all" href="mailto:officialimpianbina@gmail.com">
                    <div className="p-2 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Mail className="size-4 text-primary" />
                    </div>
                    <span className="text-sm">officialimpianbina@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-6">{t("footer.hours.title")}</p>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full border border-white/10">
                  <Clock className="size-4 text-primary" />
                </div>
                <div className="text-sm space-y-1 mt-1">
                  <p>{t("footer.hours.time")}</p>
                  <p className="text-xs text-white/40">{t("footer.hours.closed")}</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-6">{t("footer.social.title")}</p>
              <ul className="flex gap-3">
                <li>
                  <a 
                    className="p-3 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-colors inline-flex" 
                    href="https://www.facebook.com/officialimpianbina" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    className="p-3 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-colors inline-flex" 
                    href="https://www.instagram.com/officialimpianbina?igsh=azdvd244ZjkxZTV3" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    className="p-3 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-colors inline-flex" 
                    href="https://www.tiktok.com/@officialimpianbina?_r=1&_t=ZS-96dc7oDoKSy" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="TikTok"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Explore List */}
          <div className="flex flex-col">
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-6">{t("footer.explore")}</p>
            <ul className="flex flex-col">
              {[
                { to: "/services", key: "nav.services" },
                { to: "/certifications", key: "nav.certifications" },
                { to: "/projects", key: "nav.projects" },
                { to: "/portfolio", key: "nav.portfolio" },
                { to: "/process", key: "nav.process" },
                { to: "/coverage", key: "nav.coverage" },
                { to: "/faq", key: "nav.faq" },
                { to: "/contact", key: "cta.contactUs" },
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.to} 
                    className="flex items-center justify-between py-3 border-b border-white/5 hover:text-white group transition-colors text-sm"
                  >
                    {t(link.key)}
                    <ChevronRight className="size-4 text-white/20 group-hover:text-primary transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CTA Card */}
          <div className="flex flex-col">
            <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl">
              <HardHat className="size-12 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white leading-tight mb-4">
                {t("footer.card.title1")}<br />{t("footer.card.title2")}
              </h3>
              <hr className="w-8 border-primary border-t-2 mb-5" />
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                {t("footer.card.desc")}
              </p>
              <Link 
                to="/contact" 
                className="w-full bg-[#CC5500] text-white hover:bg-[#E65C00] transition-colors py-4 px-6 rounded text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group"
              >
                {t("cta.getQuotation")}
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Middle Section: Certifications Bar */}
        <div className="border-t border-b border-white/10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <ShieldCheck className="size-8 text-primary shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-bold text-white text-sm">{t("footer.bar.cidb.title")}</p>
              <p className="text-xs text-white/50">{t("footer.bar.cidb.desc")}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FileText className="size-8 text-primary shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-bold text-white text-sm">{t("footer.bar.ssm.title")}</p>
              <p className="text-xs text-white/50">1020000-X</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Users className="size-8 text-primary shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-bold text-white text-sm">{t("footer.bar.team.title")}</p>
              <p className="text-xs text-white/50">{t("footer.bar.team.desc")}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Award className="size-8 text-primary shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-bold text-white text-sm">{t("footer.bar.quality.title")}</p>
              <p className="text-xs text-white/50">{t("footer.bar.quality.desc")}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Impian Bina Sdn Bhd. {t("footer.rights")}</p>
          <p className="mono tracking-widest uppercase">
            {t("cert.cidb")} &middot; {t("cert.ssm")} &middot; {t("cert.spkk")} &middot; {t("cert.stb")}
          </p>
        </div>

      </div>
    </footer>
  );
}