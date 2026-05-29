"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";

type NestedValue = string | string[] | Record<string, unknown>;

function getNestedValue(obj: Record<string, NestedValue>, key: string): string {
  const parts = key.split(".");
  let current: NestedValue = obj;
  for (const part of parts) {
    if (current === null || typeof current !== "object" || Array.isArray(current)) {
      return key;
    }
    current = (current as Record<string, NestedValue>)[part];
    if (current === undefined) return key;
  }
  return typeof current === "string" ? current : key;
}

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("controlladoria-lang") as Language | null;
    if (stored && (stored === "pt" || stored === "en" || stored === "es")) {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("controlladoria-lang", newLang);
  };

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, NestedValue>;
    return getNestedValue(dict, key);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
