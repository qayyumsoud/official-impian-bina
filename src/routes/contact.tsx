"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { PageHero } from "@/components/site/PageHero";
import { useLang } from "@/lib/i18n";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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

// --- Character Primitives ---

interface PupilProps {
  size?: number;
  maxDistance?: number;
  pupilColor?: string;
  forceLookX?: number;
  forceLookY?: number;
}

const Pupil = ({ size = 12, maxDistance = 5, pupilColor = "black", forceLookX, forceLookY }: PupilProps) => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const pupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculatePupilPosition = () => {
    if (!pupilRef.current) return { x: 0, y: 0 };
    if (forceLookX !== undefined && forceLookY !== undefined) return { x: forceLookX, y: forceLookY };

    const pupil = pupilRef.current.getBoundingClientRect();
    const pupilCenterX = pupil.left + pupil.width / 2;
    const pupilCenterY = pupil.top + pupil.height / 2;

    const deltaX = mouseX - pupilCenterX;
    const deltaY = mouseY - pupilCenterY;
    const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance);

    const angle = Math.atan2(deltaY, deltaX);
    return { x: Math.cos(angle) * distance, y: Math.sin(angle) * distance };
  };

  const pupilPosition = calculatePupilPosition();

  return (
    <div
      ref={pupilRef}
      className="rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: pupilColor,
        transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
};

interface EyeBallProps {
  size?: number;
  pupilSize?: number;
  maxDistance?: number;
  eyeColor?: string;
  pupilColor?: string;
  isBlinking?: boolean;
  forceLookX?: number;
  forceLookY?: number;
}

const EyeBall = ({ size = 48, pupilSize = 16, maxDistance = 10, eyeColor = "white", pupilColor = "black", isBlinking = false, forceLookX, forceLookY }: EyeBallProps) => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculatePupilPosition = () => {
    if (!eyeRef.current) return { x: 0, y: 0 };
    if (forceLookX !== undefined && forceLookY !== undefined) return { x: forceLookX, y: forceLookY };

    const eye = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = eye.left + eye.width / 2;
    const eyeCenterY = eye.top + eye.height / 2;

    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;
    const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance);

    const angle = Math.atan2(deltaY, deltaX);
    return { x: Math.cos(angle) * distance, y: Math.sin(angle) * distance };
  };

  const pupilPosition = calculatePupilPosition();

  return (
    <div
      ref={eyeRef}
      className="rounded-full flex items-center justify-center transition-all duration-150"
      style={{
        width: `${size}px`,
        height: isBlinking ? '2px' : `${size}px`,
        backgroundColor: eyeColor,
        overflow: 'hidden',
      }}
    >
      {!isBlinking && (
        <div
          className="rounded-full"
          style={{
            width: `${pupilSize}px`,
            height: `${pupilSize}px`,
            backgroundColor: pupilColor,
            transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      )}
    </div>
  );
};

// --- Main Page Component ---

function ContactPage() {
  const [sending, setSending] = useState(false);
  const { t } = useLang();
  
  // Character States
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const [isPurpleBlinking, setIsPurpleBlinking] = useState(false);
  const [isBlackBlinking, setIsBlackBlinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isLookingAtEachOther, setIsLookingAtEachOther] = useState(false);
  
  const purpleRef = useRef<HTMLDivElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);
  const yellowRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const scheduleBlink = () => {
      return setTimeout(() => {
        setIsPurpleBlinking(true);
        setTimeout(() => {
          setIsPurpleBlinking(false);
          scheduleBlink();
        }, 150);
      }, Math.random() * 4000 + 3000);
    };
    const timeout = scheduleBlink();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const scheduleBlink = () => {
      return setTimeout(() => {
        setIsBlackBlinking(true);
        setTimeout(() => {
          setIsBlackBlinking(false);
          scheduleBlink();
        }, 150);
      }, Math.random() * 4000 + 3000);
    };
    const timeout = scheduleBlink();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isTyping) {
      setIsLookingAtEachOther(true);
      const timer = setTimeout(() => setIsLookingAtEachOther(false), 800);
      return () => clearTimeout(timer);
    } else {
      setIsLookingAtEachOther(false);
    }
  }, [isTyping]);

  const calculatePosition = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return { faceX: 0, faceY: 0, bodySkew: 0 };
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 3;
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const faceX = Math.max(-15, Math.min(15, deltaX / 20));
    const faceY = Math.max(-10, Math.min(10, deltaY / 30));
    const bodySkew = Math.max(-6, Math.min(6, -deltaX / 120));
    return { faceX, faceY, bodySkew };
  };

  const purplePos = calculatePosition(purpleRef);
  const blackPos = calculatePosition(blackRef);
  const yellowPos = calculatePosition(yellowRef);
  const orangePos = calculatePosition(orangeRef);

  return (
    <>
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        intro={t("contact.hero.intro")}
      />

      <section className="border-b border-foreground/10 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="mono text-[10px] uppercase tracking-widest opacity-80 mb-2">{t("contact.wa.channel")}</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">{t("contact.wa.title")}</h2>
            <p className="mt-2 text-sm opacity-90 max-w-xl">{t("contact.wa.desc")}</p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap"
          >
            <MessageCircle className="size-5" />
            {t("contact.wa.btn")}
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          
          {/* Left Column - Unified Info & Characters Box */}
          <div className="md:col-span-5">
            <div className="relative w-full h-full min-h-[650px] overflow-hidden rounded-2xl bg-primary/5 flex flex-col border border-foreground/10">
              
              {/* Top: Contact Information */}
              <div className="relative z-10 p-8 space-y-8">
                <div>
                  <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{t("contact.info.phone")}</p>
                  <a href="tel:+6067600000" className="block text-2xl font-black tracking-tighter hover:text-primary">+60 6-760 0000</a>
                  <p className="text-xs text-muted-foreground mt-1">{t("contact.info.phone_hours")}</p>
                </div>
                <div>
                  <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{t("contact.info.wa")}</p>
                  <a href="https://wa.me/60176427285" target="_blank" rel="noreferrer" className="block text-2xl font-black tracking-tighter hover:text-primary">+60 17-642 7285</a>
                  <p className="text-xs text-muted-foreground mt-1">{t("contact.info.wa_note")}</p>
                </div>
                <div>
                  <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{t("contact.info.email")}</p>
                  <a href="mailto:officialimpianbina@gmail.com" className="block text-xl font-black tracking-tighter hover:text-primary break-all">officialimpianbina@gmail.com</a>
                </div>
                <div>
                  <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{t("contact.info.office")}</p>
                  <address className="not-italic text-lg font-semibold leading-snug">
                    E30 Jalan Melati, Felda Sendayan,<br />
                    71950 Seremban,<br />
                    Negeri Sembilan, Malaysia
                  </address>
                </div>
              </div>

              {/* Bottom: Animated Characters */}
              <div className="relative mt-auto h-[250px] w-full flex items-end justify-center pointer-events-none">
                <div className="relative scale-[0.6] origin-bottom" style={{ width: '550px', height: '400px' }}>
                  {/* Purple tall rectangle character */}
                  <div 
                    ref={purpleRef}
                    className="absolute bottom-0 transition-all duration-700 ease-in-out"
                    style={{
                      left: '70px', width: '180px', height: isTyping ? '440px' : '400px',
                      backgroundColor: '#6C3FF5', borderRadius: '10px 10px 0 0', zIndex: 1,
                      transform: isTyping ? `skewX(${(purplePos.bodySkew || 0) - 12}deg) translateX(40px)` : `skewX(${purplePos.bodySkew || 0}deg)`,
                      transformOrigin: 'bottom center',
                    }}
                  >
                    <div 
                      className="absolute flex gap-8 transition-all duration-700 ease-in-out"
                      style={{
                        left: isLookingAtEachOther ? `${55}px` : `${45 + purplePos.faceX}px`,
                        top: isLookingAtEachOther ? `${65}px` : `${40 + purplePos.faceY}px`,
                      }}
                    >
                      <EyeBall size={18} pupilSize={7} maxDistance={5} isBlinking={isPurpleBlinking} forceLookX={isLookingAtEachOther ? 3 : undefined} forceLookY={isLookingAtEachOther ? 4 : undefined} />
                      <EyeBall size={18} pupilSize={7} maxDistance={5} isBlinking={isPurpleBlinking} forceLookX={isLookingAtEachOther ? 3 : undefined} forceLookY={isLookingAtEachOther ? 4 : undefined} />
                    </div>
                  </div>

                  {/* Black character */}
                  <div 
                    ref={blackRef}
                    className="absolute bottom-0 transition-all duration-700 ease-in-out"
                    style={{
                      left: '240px', width: '120px', height: '310px',
                      backgroundColor: '#2D2D2D', borderRadius: '8px 8px 0 0', zIndex: 2,
                      transform: isLookingAtEachOther ? `skewX(${(blackPos.bodySkew || 0) * 1.5 + 10}deg) translateX(20px)` : isTyping ? `skewX(${(blackPos.bodySkew || 0) * 1.5}deg)` : `skewX(${blackPos.bodySkew || 0}deg)`,
                      transformOrigin: 'bottom center',
                    }}
                  >
                    <div 
                      className="absolute flex gap-6 transition-all duration-700 ease-in-out"
                      style={{
                        left: isLookingAtEachOther ? `${32}px` : `${26 + blackPos.faceX}px`,
                        top: isLookingAtEachOther ? `${12}px` : `${32 + blackPos.faceY}px`,
                      }}
                    >
                      <EyeBall size={16} pupilSize={6} maxDistance={4} isBlinking={isBlackBlinking} forceLookX={isLookingAtEachOther ? 0 : undefined} forceLookY={isLookingAtEachOther ? -4 : undefined} />
                      <EyeBall size={16} pupilSize={6} maxDistance={4} isBlinking={isBlackBlinking} forceLookX={isLookingAtEachOther ? 0 : undefined} forceLookY={isLookingAtEachOther ? -4 : undefined} />
                    </div>
                  </div>

                  {/* Orange character */}
                  <div 
                    ref={orangeRef}
                    className="absolute bottom-0 transition-all duration-700 ease-in-out"
                    style={{
                      left: '0px', width: '240px', height: '200px', zIndex: 3,
                      backgroundColor: '#FF9B6B', borderRadius: '120px 120px 0 0',
                      transform: `skewX(${orangePos.bodySkew || 0}deg)`, transformOrigin: 'bottom center',
                    }}
                  >
                    <div 
                      className="absolute flex gap-8 transition-all duration-200 ease-out"
                      style={{ left: `${82 + (orangePos.faceX || 0)}px`, top: `${90 + (orangePos.faceY || 0)}px` }}
                    >
                      <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" />
                      <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" />
                    </div>
                  </div>

                  {/* Yellow character */}
                  <div 
                    ref={yellowRef}
                    className="absolute bottom-0 transition-all duration-700 ease-in-out"
                    style={{
                      left: '310px', width: '140px', height: '230px', backgroundColor: '#E8D754', borderRadius: '70px 70px 0 0', zIndex: 4,
                      transform: `skewX(${yellowPos.bodySkew || 0}deg)`, transformOrigin: 'bottom center',
                    }}
                  >
                    <div 
                      className="absolute flex gap-6 transition-all duration-200 ease-out"
                      style={{ left: `${52 + (yellowPos.faceX || 0)}px`, top: `${40 + (yellowPos.faceY || 0)}px` }}
                    >
                      <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" />
                      <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" />
                    </div>
                    <div 
                      className="absolute w-20 h-[4px] bg-[#2D2D2D] rounded-full transition-all duration-200 ease-out"
                      style={{ left: `${40 + (yellowPos.faceX || 0)}px`, top: `${88 + (yellowPos.faceY || 0)}px` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form
            className="md:col-span-7 bg-card border border-foreground/10 p-8 md:p-10 space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              setSending(true);
              
              const formData = new FormData(e.target as HTMLFormElement);
              formData.append("access_key", "f5ee752d-52ee-4e54-b6bf-cc3b7f2ff93a");
              formData.append("subject", "New Quotation Request from Impian Bina Website");

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData
                });
                const data = await response.json();
                if (data.success) {
                  toast.success(t("contact.form.success"));
                  (e.target as HTMLFormElement).reset();
                } else {
                  toast.error(t("contact.form.error"));
                }
              } catch (error) {
                toast.error(t("contact.form.network_error"));
              } finally {
                setSending(false);
              }
            }}
          >
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2">{t("contact.form.title")}</h2>
            <p className="text-sm text-muted-foreground mb-6">{t("contact.form.desc")}</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label={t("contact.form.name")} required onFocus={() => setIsTyping(true)} onBlur={() => setIsTyping(false)} />
              <Field id="phone" label={t("contact.form.phone")} required type="tel" onFocus={() => setIsTyping(true)} onBlur={() => setIsTyping(false)} />
              <Field id="email" label={t("contact.form.email")} required type="email" onFocus={() => setIsTyping(true)} onBlur={() => setIsTyping(false)} />
              <Field id="location" label={t("contact.form.location")} required onFocus={() => setIsTyping(true)} onBlur={() => setIsTyping(false)} />
            </div>

            <div>
              <label className="mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-3">
                {t("contact.form.type")} <span className="text-primary">*</span>
              </label>
              <RadioGroup 
                name="type" 
                required 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                onValueChange={() => {
                  // Trigger character animation when a selection is made
                  setIsTyping(true);
                  setTimeout(() => setIsTyping(false), 800);
                }}
              >
                {[
                  { value: "Residential — new build", label: t("contact.type.res") },
                  { value: "Renovation / extension", label: t("contact.type.ren") },
                  { value: "Commercial", label: t("contact.type.com") },
                  { value: "Government / SPKK", label: t("contact.type.gov") },
                  { value: "Infrastructure", label: t("contact.type.inf") },
                  { value: "Other", label: t("contact.type.oth") }
                ].map((option) => (
                  <div 
                    key={option.value} 
                    className="relative flex items-center space-x-3 border border-foreground/15 bg-background p-3 hover:border-primary focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200"
                  >
                    <RadioGroupItem value={option.value} id={`type-${option.value}`} />
                    <Label 
                      htmlFor={`type-${option.value}`} 
                      className="font-medium text-sm cursor-pointer w-full leading-none"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <label htmlFor="message" className="mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">{t("contact.form.desc_label")}</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={5} 
                onFocus={() => setIsTyping(true)} 
                onBlur={() => setIsTyping(false)}
                className="w-full bg-background border border-foreground/15 p-3 text-sm focus:outline-none focus:border-primary resize-none" 
                placeholder={t("contact.form.placeholder")} 
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-60"
            >
              {sending ? t("contact.form.sending") : t("contact.form.send")}
            </button>
          </form>
        </div>
      </section>

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

// Updated Field component to accept focus events
function Field({ 
  id, 
  label, 
  required, 
  type = "text",
  onFocus,
  onBlur
}: { 
  id: string; 
  label: string; 
  required?: boolean; 
  type?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}) {
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
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full bg-background border border-foreground/15 p-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}