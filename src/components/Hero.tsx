"use client";

import { useEffect, useRef, useState } from "react";
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

          {/* Interactive product demo */}
          <div className="animate-on-scroll stagger-5 relative mx-auto max-w-5xl">
            <InteractiveDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
