import { useEffect, useState } from "react";
import { i18n, type Lang } from "@/data/i18n";

const STORAGE_KEY = "lang";
const EVENT_NAME = "langchange";
const DEFAULT_LANG: Lang = "es";

function readStoredLanguage(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : DEFAULT_LANG;
}

function writeStoredLanguage(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  window.dispatchEvent(new CustomEvent<Lang>(EVENT_NAME, { detail: lang }));
}

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    setLang(readStoredLanguage());

    const handleLangChange = (event: Event) => {
      const custom = event as CustomEvent<Lang>;
      setLang(custom.detail);
    };

    window.addEventListener(EVENT_NAME, handleLangChange);
    return () => window.removeEventListener(EVENT_NAME, handleLangChange);
  }, []);

  const toggleLanguage = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    writeStoredLanguage(next);
    setLang(next);
  };

  return { lang, toggleLanguage, t: i18n[lang] };
}
