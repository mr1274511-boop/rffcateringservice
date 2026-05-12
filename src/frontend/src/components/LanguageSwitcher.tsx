import { useLanguage } from "../contexts/LanguageContext";
import type { Language } from "../types";

const LANGS: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "EN" },
  { code: "ar", label: "العربية", native: "AR" },
  { code: "ta", label: "தமிழ்", native: "TA" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <fieldset className="flex items-center gap-1 border-0 p-0 m-0">
      <legend className="sr-only">Language selector</legend>
      {LANGS.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => setLanguage(lang.code)}
          aria-label={lang.label}
          aria-pressed={language === lang.code}
          data-ocid={`language.${lang.code}_toggle`}
          className={`px-2.5 py-1 text-xs font-body rounded-md transition-smooth ${
            language === lang.code
              ? "bg-primary text-primary-foreground font-medium shadow-warm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          {lang.native}
        </button>
      ))}
    </fieldset>
  );
}
