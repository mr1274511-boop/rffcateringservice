import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Lock, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { IslamicPattern } from "../components/IslamicPattern";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../translations";

const ADMIN_PASSWORD = "rff-admin-2026";

export default function AdminLoginPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem("rff-admin-auth", "1");
        navigate({ to: "/admin" });
      } else {
        setError("Invalid password. Please try again.");
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div
      className="min-h-[85vh] flex items-center justify-center px-4"
      data-ocid="admin_login.page"
    >
      <div className="relative w-full max-w-md">
        <IslamicPattern opacity={0.07} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 bg-card border border-border rounded-2xl p-8 shadow-elevated"
        >
          {/* Header badge */}
          <div className="text-center mb-8">
            <div className="flex justify-center gap-1 mb-4">
              {[0, 1, 2].map((i) => (
                <Star key={i} size={10} className="text-primary fill-primary" />
              ))}
            </div>
            <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
              <Lock className="text-primary" size={26} />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              {t(language, "adminLogin")}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              RFF Catering — Secure Admin Area
            </p>
            {/* Bismillah */}
            <p className="arabic-text text-primary/80 text-sm mt-3 font-display">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <Label
                htmlFor="admin-pw"
                className="text-foreground mb-1.5 block text-sm font-medium"
              >
                {t(language, "adminPassword")}
              </Label>
              <div className="relative">
                <Input
                  id="admin-pw"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t(language, "adminPasswordPlaceholder")}
                  required
                  className="pr-10 bg-background/60 border-border/80 focus:border-primary/60"
                  data-ocid="admin_login.password_input"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                  aria-label="Toggle password visibility"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-destructive text-sm bg-destructive/10 border border-destructive/20 px-3 py-2 rounded-lg"
                data-ocid="admin_login.error_state"
              >
                {error}
              </motion.p>
            )}

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold transition-smooth"
              disabled={loading}
              data-ocid="admin_login.submit_button"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  Authenticating…
                </span>
              ) : (
                t(language, "adminLoginBtn")
              )}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            خدمة تقديم الطعام RFF · Catering Admin Portal
          </p>
        </motion.div>
      </div>
    </div>
  );
}
