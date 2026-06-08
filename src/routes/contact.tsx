import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "60176427285";
const WA_TEMPLATE = `Hi Impian Bina,

Saya ingin mendapatkan sebutan harga untuk projek berikut:

• Nama:
• Jenis projek: (Residential / Renovation / Commercial / Government / Infrastructure)
• Lokasi tapak:
• Anggaran keluasan / bilangan tingkat:
• Tarikh sasaran mula:
• Bajet:

Terima kasih.`;
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEMPLATE)}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Impian Bina — Phone, WhatsApp, Office in Seremban" },
      { name: "description", content: "Contact Impian Bina for quotations and consultations. Phone, WhatsApp, email and Seremban office address with Google Maps directions." },
      { property: "og:title", content: "Contact — Impian Bina" },
      { property: "og:description", content: "Get a quotation. Phone, WhatsApp, email or visit our Seremban office." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your build."
        intro="Phone, WhatsApp, email, or walk into our Seremban office. We respond to every inquiry within one working day."
      />

      {/* WhatsApp quick-quote */}
      <section className="border-b border-foreground/10 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="mono text-[10px] uppercase tracking-widest opacity-80 mb-2">Fastest channel</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">
              Get a quotation on WhatsApp in one tap.
            </h2>
            <p className="mt-2 text-sm opacity-90 max-w-xl">
              Click below — we'll open WhatsApp with a ready-to-send message template. Fill in your details and hit send.
            </p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap"
          >
            <MessageCircle className="size-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          {/* Contact details */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">Phone</p>
              <a href="tel:+6067600000" className="block text-2xl font-black tracking-tighter hover:text-primary">+60 6-760 0000</a>
              <p className="text-xs text-muted-foreground mt-1">Mon – Sat, 8:00 AM – 5:00 PM</p>
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">WhatsApp</p>
              <a href="https://wa.me/60176427285" target="_blank" rel="noreferrer" className="block text-2xl font-black tracking-tighter hover:text-primary">+60 17-642 7285</a>
              <p className="text-xs text-muted-foreground mt-1">Quickest response — site photos welcome</p>
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">Email</p>
              <a href="mailto:officialimpianbina@gmail.com" className="block text-xl font-black tracking-tighter hover:text-primary break-all">officialimpianbina@gmail.com</a>
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">Office</p>
              <address className="not-italic text-lg font-semibold leading-snug">
                E30 Jalan Melati, Felda Sendayan,<br />
                71950 Seremban,<br />
                Negeri Sembilan, Malaysia
              </address>
            </div>
          </div>

          {/* Form */}
            <form
            className="md:col-span-7 bg-card border border-foreground/10 p-8 md:p-10 space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              setSending(true);
              
              // 1. Capture the form data
              const formData = new FormData(e.target as HTMLFormElement);
              
              // 2. Append your access key (replace with your actual key)
              // formData.append("access_key", "161d131d-b26d-426b-8efe-79b45dfdcf92");
              formData.append("access_key", "f5ee752d-52ee-4e54-b6bf-cc3b7f2ff93a");
              
              // Optional: Add a custom subject line
              formData.append("subject", "New Quotation Request from Impian Bina Website");

              try {
                // 3. Send the data to the API
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData
                });

                const data = await response.json();

                if (data.success) {
                  toast.success("Thanks — we'll be in touch within one working day.");
                  (e.target as HTMLFormElement).reset();
                } else {
                  toast.error("Something went wrong. Please try WhatsApp instead.");
                  console.error("Form Error:", data);
                }
              } catch (error) {
                toast.error("Network error. Please check your connection.");
                console.error("Fetch Error:", error);
              } finally {
                setSending(false);
              }
            }}
          >
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2">Request a Quotation</h2>
            <p className="text-sm text-muted-foreground mb-6">Tell us about your project. We'll reply with next steps.</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Full name" required />
              <Field id="phone" label="Phone / WhatsApp" required type="tel" />
              <Field id="email" label="Email" required type="email" />
              <Field id="location" label="Project location" required />
            </div>

            <div>
              <label htmlFor="type" className="mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Project type</label>
              <select id="type" name="type" required className="w-full bg-background border border-foreground/15 p-3 text-sm focus:outline-none focus:border-primary">
                <option value="">Select…</option>
                <option>Residential — new build</option>
                <option>Renovation / extension</option>
                <option>Commercial</option>
                <option>Government / SPKK</option>
                <option>Infrastructure</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Project description</label>
              <textarea id="message" name="message" required rows={5} className="w-full bg-background border border-foreground/15 p-3 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Scope, square footage, target start date, budget range…" />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Inquiry"}
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-foreground/10">
        <div className="aspect-[21/9] w-full bg-accent">
          <iframe
            title="Impian Bina office location, Seremban"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=E30+Jalan+Melati,+Felda+Sendayan,+71950+Seremban,+Negeri+Sembilan,+Malaysia&output=embed"
          />
        </div>
      </section>
    </>
  );
}

function Field({ id, label, required, type = "text" }: { id: string; label: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full bg-background border border-foreground/15 p-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}
