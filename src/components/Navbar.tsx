"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

const LANG_OPTIONS: { code: Language; label: string; flag: string }[] = [
  { code: "pt", label: "PT-BR", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const NAV_LINKS = [
    { labelKey: "nav.features", href: "#recursos" },
    { labelKey: "nav.useCases", href: "#casos-de-uso" },
    { labelKey: "nav.howItWorks", href: "#como-funciona" },
    { labelKey: "nav.pricing", href: "#planos" },
    { labelKey: "nav.faq", href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "navbar-blur bg-white/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-horizontal.svg"
              alt="ControlladorIA"
              width={246}
              height={80}
              className="h-14 lg:h-20 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.labelKey)}
              </a>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-1">
              {LANG_OPTIONS.map((option) => (
                <button
                  key={option.code}
                  onClick={() => setLang(option.code)}
                  className={`text-xs px-2 py-1 rounded font-medium transition-colors ${
                    lang === option.code
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Switch to ${option.label}`}
                >
                  {option.flag} {option.label}
                </button>
              ))}
            </div>

            <a
              href="https://app.controlladoria.com.br/register"
              className="btn-press inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-light transition-colors shadow-sm"
            >
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden navbar-blur bg-white/95 border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {/* Language switcher row */}
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              {LANG_OPTIONS.map((option) => (
                <button
                  key={option.code}
                  onClick={() => setLang(option.code)}
                  className={`text-xs px-2 py-1 rounded font-medium transition-colors ${
                    lang === option.code
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Switch to ${option.label}`}
                >
                  {option.flag} {option.label}
                </button>
              ))}
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {t(link.labelKey)}
              </a>
            ))}
            <a
              href="https://app.controlladoria.com.br/register"
              onClick={() => setMobileOpen(false)}
              className="btn-press block text-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-light transition-colors"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
