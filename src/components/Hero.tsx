"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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

const CHART_HEIGHTS = [40, 55, 45, 60, 70, 65, 80, 75, 90, 85, 95, 100];

const INDICATORS = [
  { label: "Margem EBITDA", value: "28.4%", up: true },
  { label: "Margem Líquida", value: "12.1%", up: true },
  { label: "ROI", value: "8.3%", up: true },
  { label: "Liquidez Corrente", value: "1.82", up: false },
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

// ── Chart with animated bars ──────────────────────────────────────────────────
function AnimatedChart() {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          // slight delay so the card is fully visible first
          setTimeout(() => setReady(true), 120);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-muted rounded-xl p-4 border border-border">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">DRE Gerencial — Últimos 12 meses</span>
        <span className="text-xs text-muted-foreground">2024</span>
      </div>
      <div className="flex items-end gap-2 h-32">
        {CHART_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: ready ? `${h}%` : "2px",
              transition: `height 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 45}ms`,
              background: `linear-gradient(to top, var(--primary), var(--primary-light))`,
              opacity: 0.55 + (i / CHART_HEIGHTS.length) * 0.45,
            }}
          />
        ))}
      </div>
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

          {/* Product mockup */}
          <div className="animate-on-scroll stagger-5 relative mx-auto max-w-5xl">
            <div className="glow-primary-strong rounded-2xl overflow-hidden border border-border bg-card">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 ml-4 h-6 bg-background rounded-md flex items-center px-3">
                  <span className="text-xs text-muted-foreground">app.controlladoria.com.br</span>
                </div>
              </div>

              {/* Mock dashboard */}
              <div className="p-6 lg:p-8 bg-card">
                {/* KPI cards */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[
                    { label: "Receita Bruta", value: "R$ 1.284.500", change: "+12.3%" },
                    { label: "Lucro Líquido", value: "R$ 342.100", change: "+8.7%" },
                    { label: "Margem EBITDA", value: "28.4%", change: "+2.1pp" },
                  ].map((card) => (
                    <div key={card.label} className="bg-muted rounded-xl p-4 border border-border">
                      <div className="text-xs font-medium mb-1" style={{ color: "var(--primary)" }}>
                        {card.label}
                      </div>
                      <div className="text-lg font-bold text-foreground">{card.value}</div>
                      <div className="text-xs text-green-600 mt-1">{card.change}</div>
                    </div>
                  ))}
                </div>

                {/* Animated DRE chart */}
                <div className="mb-4">
                  <AnimatedChart />
                </div>

                {/* Indicadores Gerenciais row */}
                <div className="bg-muted rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                      Indicadores Gerenciais
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                      Automático
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {INDICATORS.map((ind) => (
                      <div key={ind.label} className="bg-background rounded-lg p-3 border border-border text-center">
                        <div className="text-xs text-muted-foreground mb-1 truncate">{ind.label}</div>
                        <div className="text-base font-bold text-foreground">{ind.value}</div>
                        <div className={`text-xs mt-0.5 ${ind.up ? "text-green-600" : "text-blue-500"}`}>
                          {ind.up ? "▲" : "●"} ok
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
