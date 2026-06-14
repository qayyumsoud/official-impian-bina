// src/components/ui/parallax-scrolling.tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export interface ParallaxHeroProps {
  bgImage: string;
  fgImage?: string; // Restored prop
  children: React.ReactNode;
}

export function ParallaxHero({ bgImage, fgImage, children }: ParallaxHeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerElement = parallaxRef.current;

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Background pushes down
      tl.to(
        triggerElement.querySelector('[data-parallax-bg]'),
        { yPercent: 50, ease: "none" },
        0
      );

      // Foreground asset pulls up slightly for 3D separation
      if (fgImage) {
        tl.to(
          triggerElement.querySelector('[data-parallax-fg]'),
          { yPercent: 20, ease: "none" }, // <-- INVERT THIS VALUE TO POSITIVE 20
          0
        );
      }

      // Content moves slightly
      tl.to(
        triggerElement.querySelector('[data-parallax-content]'),
        { yPercent: 15, ease: "none" },
        0
      );
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    requestAnimationFrame(() => {
      lenis.scrollTo(window.scrollY, { immediate: true });
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    const handleLoad = () => lenis.resize();
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      lenis.destroy();
    };
  }, [fgImage]);

  return (
    <section 
      ref={parallaxRef} 
      className="relative w-full min-h-[90vh] flex flex-col justify-end pt-40 pb-24 md:pb-32 overflow-hidden bg-accent"
    >
      {/* 1. Deepest Layer: Background Plate */}
      <div 
        data-parallax-bg 
        className="absolute inset-0 z-0 origin-top h-[120%] top-[-10%] will-change-transform"
      >
        <img
          src={bgImage}
          alt="Construction Site Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* 2. Middle Layer: Contrast Gradient */}
      <div className="absolute inset-0 bg-background/80 md:bg-gradient-to-r md:from-background/95 md:via-background/40 md:to-transparent z-10" />

      {/* 3. Mid-Foreground Layer: 3D Asset */}
      {fgImage && (
        <div 
          data-parallax-fg
          className="absolute -bottom-10 -right-8 md:-right-16 z-20 pointer-events-none will-change-transform"
        >
          <img 
            src={fgImage} 
            alt="Foreground structure" 
            // PREVIOUS: className="w-auto h-[45vh] md:h-[65vh] object-contain object-bottom..."
            // NEW:
            className="w-auto h-[60vh] md:h-[90vh] object-contain object-bottom drop-shadow-2xl brightness-75 opacity-95"
          />
        </div>
      )}

      {/* 4. Top Layer: Typography & Interactive Elements */}
      <div data-parallax-content className="relative z-30 w-full fade-in-up will-change-transform">
        {children}
      </div>
    </section>
  );
}