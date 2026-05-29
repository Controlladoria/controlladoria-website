"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function WhyUs() {
  const { t, lang } = useLanguage();

  const oldItems = translations[lang].whyUs.oldItems as readonly string[];
  const newItems = translations[lang].whyUs.newItems as readonly string[];

  return (
    <section id="por-que" className="py-24 lg:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("whyUs.title")}
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-muted-foreground">
            {t("whyUs.subtitle")}
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left card — Old way */}
          <div className="animate-on-scroll stagger-1 bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-lg font-bold text-red-900">{t("whyUs.oldWay")}</span>
            </div>
            <ul className="space-y-4">
              {oldItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm text-red-800 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right card — New way */}
          <div className="animate-on-scroll stagger-2 bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-lg font-bold" style={{ color: "#0d767b" }}>{t("whyUs.newWay")}</span>
            </div>
            <ul className="space-y-4">
              {newItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "#134e4a" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll stagger-3 text-center mt-10">
          <a
            href="https://app.controlladoria.com.br/register"
            className="btn-press inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary-light transition-colors glow-primary"
          >
            {t("whyUs.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
