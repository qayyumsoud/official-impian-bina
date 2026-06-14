import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.webp";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-accent text-accent-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="inline-block mb-6 bg-white p-3" aria-label="Impian Bina home">
            <img src={logo} alt="Impian Bina — Building Dream" className="h-20 w-auto" width={200} height={80} />
          </Link>
          <p className="text-white/50 max-w-sm mb-6 leading-relaxed">{t("footer.tagline")}</p>
          <address className="not-italic space-y-1 mono text-xs text-white/60">
            <p>E30 Jalan Melati, Felda Sendayan</p>
            <p>71950 Seremban, Negeri Sembilan</p>
          </address>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <p className="mono text-[10px] text-white/30 uppercase tracking-widest mb-4">{t("footer.contact")}</p>
            <ul className="space-y-3">
              <li><a className="text-sm font-semibold hover:text-primary transition-colors" href="tel:+6067600000">+60 6-760 0000</a></li>
              <li><a className="text-sm font-semibold hover:text-primary transition-colors" href="https://wa.me/60176427285" target="_blank" rel="noreferrer">WhatsApp +60 17-642 7285</a></li>
              <li><a className="text-sm font-semibold hover:text-primary break-all transition-colors" href="mailto:officialimpianbina@gmail.com">officialimpianbina@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <p className="mono text-[10px] text-white/30 uppercase tracking-widest mb-4">Working Hours</p>
            <p className="text-sm text-white/80">Mon &ndash; Sat: 8:00 AM &ndash; 5:00 PM</p>
          </div>

          <div>
            <p className="mono text-[10px] text-white/30 uppercase tracking-widest mb-4">Follow Us</p>
            <ul className="flex gap-4">
              <li>
                <a 
                  className="text-white/70 hover:text-primary transition-colors inline-block" 
                  href="https://www.facebook.com/share/1ENSvw8cFQ/" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  className="text-white/70 hover:text-primary transition-colors inline-block" 
                  href="https://www.instagram.com/officialimpianbina?igsh=azdvd244ZjkxZTV3" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  className="text-white/70 hover:text-primary transition-colors inline-block" 
                  href="https://www.tiktok.com/@officialimpianbina?_r=1&_t=ZS-96dc7oDoKSy" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Follow us on TikTok"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="mono text-[10px] text-white/30 uppercase tracking-widest mb-4">{t("footer.explore")}</p>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-primary transition-colors" to="/services">{t("nav.services")}</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/certifications">{t("nav.certifications")}</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/projects">{t("nav.projects")}</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/portfolio">{t("nav.portfolio")}</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/process">{t("nav.process")}</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/coverage">{t("nav.coverage")}</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/contact">{t("cta.contactUs")}</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Impian Bina Sdn Bhd. {t("footer.rights")}</p>
        <p className="mono">CIDB &middot; SSM Registered &middot; SPKK &middot; STB</p>
      </div>
    </footer>
  );
}