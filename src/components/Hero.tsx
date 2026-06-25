"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import InteractiveDemo from "@/components/InteractiveDemo";

// ── Animated counter ──────────────────────────────────────────────────────────
function useCountUp(target: number, suffix: string = "", duration = 1400) {
  const [display, setDisplay] = useState("0" + suffix);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let startTs: number | null = null;
        const tick = (ts: number) => {
          if (startTs === null) startTs = ts;
          const progress = Math.min((ts - startTs) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          setDisplay(Math.round(eased * target) + suffix);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return { display, ref };
}

const STATS = [
  { target: 10, suffix: "x", label: "Mais rápido" },
  { target: 99, suffix: "%", label: "Precisão" },
  { target: 15, suffix: "", label: "Dias grátis" },
];

// ── Stat counter widget ───────────────────────────────────────────────────────
function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { display, ref } = useCountUp(target, suffix);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold gradient-text-accent">{display}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-clip">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary/[0.04] -top-40 -left-40" />
      <div className="orb w-[500px] h-[500px] bg-secondary/[0.03] top-20 -right-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="animate-on-scroll text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            {t("hero.headline1")}
            <br />
            <span className="gradient-text">{t("hero.headline2")}</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-on-scroll stagger-1 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="animate-on-scroll stagger-2 flex flex-col sm:flex-row gap-4 justify-center mb-5">
            <a
              href="https://app.controlladoria.com.br/register"
              className="btn-press inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary-light transition-colors glow-primary"
            >
              {t("hero.ctaPrimary")}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </a>
            <a
              href="#como-funciona"
              className="btn-press inline-flex items-center justify-center px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>

          {/* Micro-trust line */}
          <p className="animate-on-scroll stagger-3 text-sm text-muted-foreground mb-12">
            {t("hero.trustLine")}
          </p>

          {/* Animated stats */}
          <div className="animate-on-scroll stagger-4 flex justify-center gap-12 sm:gap-20 mb-20">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} target={stat.target} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>

          {/* Interactive product demo inside a monitor mockup */}
          <div className="animate-on-scroll stagger-5 relative mx-auto max-w-5xl">
            {/* Monitor body / bezel */}
            <div className="rounded-2xl sm:rounded-[20px] bg-gradient-to-b from-zinc-700 to-zinc-900 p-2 sm:p-3 shadow-2xl ring-1 ring-white/10">
              <InteractiveDemo />
            </div>
            {/* Stand neck + base */}
            <div className="flex flex-col items-center" aria-hidden="true">
              <div className="h-5 sm:h-6 w-20 sm:w-28 bg-gradient-to-b from-zinc-700 to-zinc-800" />
              <div className="h-2.5 w-36 sm:w-48 rounded-b-xl bg-zinc-800 shadow-md" />
            </div>

            {/* Phone mockup overlapping the bottom-right corner */}
            <div className="hidden sm:block absolute -bottom-4 -right-2 lg:-right-6 w-[118px] lg:w-[150px] z-10">
              <div className="rounded-[1.7rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1.5 shadow-2xl ring-1 ring-white/10">
                <div className="relative rounded-[1.3rem] overflow-hidden bg-black">
                  {/* Notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-black/70 z-10" />
                  <Image
                    src="/mobilecontrolladoria.png"
                    alt="ControlladorIA no celular"
                    width={429}
                    height={927}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
