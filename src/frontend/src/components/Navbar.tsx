import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../translations";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavLink {
  to: string;
  labelKey: "home" | "menu" | "gallery" | "order" | "trackOrder";
}

const NAV_LINKS: NavLink[] = [
  { to: "/", labelKey: "home" },
  { to: "/menu", labelKey: "menu" },
  { to: "/gallery", labelKey: "gallery" },
  { to: "/order", labelKey: "order" },
  { to: "/status", labelKey: "trackOrder" },
];

export function Navbar() {
  const { language, isRTL } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header
      className="bg-card border-b border-border shadow-elevated sticky top-0 z-50"
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4 py-3">
        <div
          className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}
        >
          {/* Brand */}
          <Link to="/" data-ocid="navbar.logo_link">
            <div className={isRTL ? "text-right" : "text-left"}>
              <p className="arabic-text text-primary font-display text-xl leading-tight">
                {t(language, "brandAr")}
              </p>
              <p className="text-foreground/80 font-body text-xs tracking-widest uppercase">
                RFF Catering Service
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className={`hidden md:flex items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`navbar.${link.labelKey}_link`}
                  className={`text-sm font-body transition-smooth relative ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(language, link.labelKey)}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side: language switcher + mobile toggle */}
          <div
            className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <LanguageSwitcher />
            <button
              type="button"
              className="md:hidden text-muted-foreground hover:text-foreground transition-smooth"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="navbar.mobile_menu_toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            className="md:hidden pt-3 pb-1 border-t border-border mt-3 flex flex-col gap-2"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`navbar.mobile_${link.labelKey}_link`}
                onClick={() => setMobileOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm font-body transition-smooth ${
                  currentPath === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t(language, link.labelKey)}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
