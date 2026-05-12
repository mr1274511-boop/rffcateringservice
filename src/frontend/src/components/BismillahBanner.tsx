import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../translations";

export function BismillahBanner() {
  const { language } = useLanguage();

  return (
    <div
      className="w-full bg-primary/10 border-b border-primary/30 py-2 px-4 text-center relative overflow-hidden"
      data-ocid="bismillah.banner"
    >
      {/* subtle shimmer line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <p className="arabic-text text-primary text-lg font-display leading-relaxed tracking-wide">
        {t(language, "bismillah")}
      </p>
      <p className="text-muted-foreground text-xs mt-0.5 italic">
        {t(language, "bismillahEn")}
      </p>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}
