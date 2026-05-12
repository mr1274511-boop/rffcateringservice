import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../translations";
import { IslamicPattern } from "./IslamicPattern";

export function Footer() {
  const { language, isRTL } = useLanguage();
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="bg-card border-t border-border relative overflow-hidden"
      data-ocid="footer"
    >
      <IslamicPattern opacity={0.05} />

      {/* Arabic food words banner */}
      <div className="bg-primary/10 border-b border-primary/20 py-3 text-center">
        <p className="arabic-text text-primary font-display text-2xl tracking-widest">
          {t(language, "footerArabicWords")}
        </p>
        <p className="text-muted-foreground text-xs mt-1 italic">
          Food • Blessings • Grace • Halal
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? "text-right" : ""}`}
        >
          {/* Brand column */}
          <div>
            <p className="arabic-text text-primary font-display text-xl mb-1">
              {t(language, "brandAr")}
            </p>
            <p className="text-foreground font-body font-semibold mb-2">
              RFF Catering Service
            </p>
            <p className="text-muted-foreground text-sm">
              {t(language, "footerTagline")}
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-foreground font-body font-semibold mb-3">
              {t(language, "footerLocation")}
            </h3>
            <div
              className={`flex items-start gap-2 text-muted-foreground text-sm ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
              <span>{t(language, "locationAddress")}</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-body font-semibold mb-3">
              {t(language, "footerContact")}
            </h3>
            <div className="space-y-2">
              <div
                className={`flex items-center gap-2 text-muted-foreground text-sm ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <Phone size={16} className="text-primary shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:+918189872327"
                    className="hover:text-primary transition-smooth"
                    data-ocid="footer.phone_link.1"
                  >
                    Mohammed Khaleel: +91 81898 72327
                  </a>
                  <a
                    href="tel:+919790945698"
                    className="hover:text-primary transition-smooth"
                    data-ocid="footer.phone_link.2"
                  >
                    Gulam Rasool: +91 97909 45698
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 pt-4 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>
            © {year} RFF Catering Service. {t(language, "footerRights")}.
          </p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
