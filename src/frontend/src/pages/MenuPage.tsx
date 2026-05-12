import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "@tanstack/react-router";
import { ChevronRight, ShoppingCart, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FoodCard } from "../components/FoodCard";
import { IslamicPattern } from "../components/IslamicPattern";
import { useLanguage } from "../contexts/LanguageContext";
import { useMenuItems } from "../hooks/useMenu";
import { t } from "../translations";
import { MenuCategory } from "../types";
import type { MenuItem } from "../types";

// ─── Static seed data shown while backend loads ───────────────────────────
const SEED_ITEMS: MenuItem[] = [
  {
    id: BigInt(1),
    name: {
      en: "Chicken Dum Biryani",
      ar: "برياني دجاج دم",
      ta: "சிக்கன் தம் பிரியாணி",
    },
    description: {
      en: "Slow-cooked aromatic basmati rice layered with tender chicken, saffron, and whole spices — 1 kg serves 2–3",
      ar: "أرز بسمتي معطر مطبوخ ببطء مع دجاج طري وزعفران وبهارات كاملة",
      ta: "மெல்லிய மேசம் கொண்ட பாஸ்மதி சாதம், சாஃப்ரான் மற்றும் மசாலா",
    },
    price: BigInt(1400),
    imageUrl: "/assets/images/chicken-dum-biryani.jpg",
    category: MenuCategory.biryani,
    isAvailable: true,
  },
  {
    id: BigInt(2),
    name: { en: "Mutton Biryani", ar: "برياني لحم الضأن", ta: "மட்டன் பிரியாணி" },
    description: {
      en: "Rich, slow-cooked mutton pieces on a bed of fragrant long-grain rice, marinated overnight in spices — 1 kg",
      ar: "قطع لحم ضأن غنية مطبوخة ببطء على قاعدة من الأرز المعطر",
      ta: "மிகவும் சுவையான மட்டன் பிரியாணி, இரவு ஊறவைத்த மசாலாவுடன்",
    },
    price: BigInt(2200),
    imageUrl: "/assets/images/mutton-biryani.jpg",
    category: MenuCategory.biryani,
    isAvailable: true,
  },
  {
    id: BigInt(3),
    name: { en: "Chicken Biryani", ar: "برياني الدجاج", ta: "சிக்கன் பிரியாணி" },
    description: {
      en: "Classic Hyderabadi-style chicken biryani with caramelised onions, mint, and fried cashews — 1 kg",
      ar: "برياني دجاج كلاسيكي على الطريقة الحيدرآبادية مع البصل والنعناع",
      ta: "கிளாசிக் ஹைதராபாதி-ஸ்டைல் சிக்கன் பிரியாணி",
    },
    price: BigInt(1200),
    imageUrl: "/assets/images/chicken-biryani.jpg",
    category: MenuCategory.biryani,
    isAvailable: true,
  },
  {
    id: BigInt(4),
    name: { en: "Veg Birinji", ar: "بيرنجي نباتي", ta: "வெஜ் பிரிஞ்சி" },
    description: {
      en: "Traditional South Indian rice dish cooked in coconut milk, ghee, and aromatic whole spices with garden vegetables",
      ar: "طبق أرز جنوب هندي تقليدي مطبوخ في حليب جوز الهند مع الخضار",
      ta: "தென்னிந்திய பாரம்பரிய தேங்காய் பால் பிரிஞ்சி, காய்கறிகளுடன்",
    },
    price: undefined,
    imageUrl: "/assets/images/veg-birinji.jpeg",
    category: MenuCategory.rice,
    isAvailable: true,
  },
  {
    id: BigInt(5),
    name: { en: "Kesari (Orange)", ar: "كيساري برتقالي", ta: "கேசரி (ஆரஞ்சு)" },
    description: {
      en: "Semolina sweet pudding in deep saffron orange, enriched with ghee, cardamom, and golden raisins — festive favourite",
      ar: "حلوى سميد برتقالية عميقة مع الزعفران والهيل والزبيب الذهبي",
      ta: "கேசரி ஆரஞ்சு நிறத்தில், நெய், ஏலக்காய் மற்றும் திராட்சையுடன்",
    },
    price: undefined,
    imageUrl: "/assets/images/kesari-orange.jpeg",
    category: MenuCategory.sweets,
    isAvailable: true,
  },
  {
    id: BigInt(6),
    name: { en: "Kesari (Yellow)", ar: "كيساري أصفر", ta: "கேசரி (மஞ்சள்)" },
    description: {
      en: "Classic golden yellow semolina halwa with pure desi ghee, turmeric, and cashews — melts in the mouth",
      ar: "حلوى سميد صفراء كلاسيكية مع السمن الخالص والكاجو",
      ta: "மஞ்சள் கேசரி, தூய நெய், மஞ்சள் மற்றும் முந்திரியுடன்",
    },
    price: undefined,
    imageUrl: "/assets/images/kesari-yellow.jpeg",
    category: MenuCategory.sweets,
    isAvailable: true,
  },
  {
    id: BigInt(7),
    name: { en: "Bread Halwa", ar: "حلوى الخبز", ta: "பிரெட் அல்வா" },
    description: {
      en: "Indulgent bread pudding fried in ghee until caramelised, studded with nuts and flavoured with rose water and cardamom",
      ar: "حلوى خبز فاخرة مقلية في السمن مع المكسرات وماء الورد والهيل",
      ta: "நெய்யில் வறுத்த பிரெட் அல்வா, கொட்டைகள் மற்றும் ரோஸ்வாட்டர் சுவையில்",
    },
    price: undefined,
    imageUrl: "/assets/images/bread-halwa.jpg",
    category: MenuCategory.sweets,
    isAvailable: true,
  },
  {
    id: BigInt(8),
    name: { en: "Onion Raita", ar: "رايتا البصل", ta: "வெங்காய ரைட்டா" },
    description: {
      en: "Cool yoghurt dip with thinly sliced onions, fresh coriander, green chilli, and a pinch of roasted cumin",
      ar: "زبادي بارد مع بصل مقطع رفيع وكزبرة طازجة وكمون محمص",
      ta: "குளிர்ந்த தயிர் டிப், வெங்காயம், கொத்தமல்லி மற்றும் சீரகம்",
    },
    price: undefined,
    imageUrl: "/assets/images/onion-raita.jpg",
    category: MenuCategory.sides,
    isAvailable: true,
  },
  {
    id: BigInt(9),
    name: { en: "Thair Pachadi", ar: "تاير باتشادي", ta: "தயிர் பச்சடி" },
    description: {
      en: "Creamy South Indian yoghurt relish with cucumber, mustard seeds, curry leaves, and a touch of coconut",
      ar: "توابل زبادي كريمي جنوب هندي مع الخيار وبذور الخردل وأوراق الكاري",
      ta: "தென்னிந்திய தயிர் பச்சடி, வெள்ளரிக்காய் மற்றும் தேங்காயுடன்",
    },
    price: undefined,
    imageUrl: "/assets/generated/thair-pachadi.dim_600x450.jpg",
    category: MenuCategory.sides,
    isAvailable: true,
  },
];

// ─── Types ────────────────────────────────────────────────────────────────
type CartMap = Record<string, { item: MenuItem; quantity: number }>;

const CATEGORIES: {
  key: MenuCategory | "all";
  labelKey: "allCategories" | "biryani" | "rice" | "sides" | "sweets" | "other";
  emoji: string;
}[] = [
  { key: "all", labelKey: "allCategories", emoji: "🍽️" },
  { key: MenuCategory.biryani, labelKey: "biryani", emoji: "🍛" },
  { key: MenuCategory.rice, labelKey: "rice", emoji: "🌾" },
  { key: MenuCategory.sweets, labelKey: "sweets", emoji: "🍮" },
  { key: MenuCategory.sides, labelKey: "sides", emoji: "🥗" },
  { key: MenuCategory.other, labelKey: "other", emoji: "🌿" },
];

export default function MenuPage() {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const { data: backendItems, isLoading } = useMenuItems();
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "all">(
    "all",
  );
  const [cart, setCart] = useState<CartMap>({});

  // Use backend data if available, otherwise show seed items
  const items: MenuItem[] =
    backendItems && backendItems.length > 0 ? backendItems : SEED_ITEMS;

  const filtered = items.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );

  const cartCount = Object.values(cart).reduce((a, v) => a + v.quantity, 0);
  const cartTotal = Object.values(cart).reduce(
    (sum, { item, quantity }) =>
      sum + (item.price !== undefined ? Number(item.price) * quantity : 0),
    0,
  );

  const addToCart = (item: MenuItem) => {
    const key = item.id.toString();
    setCart((prev) => ({
      ...prev,
      [key]: { item, quantity: (prev[key]?.quantity ?? 0) + 1 },
    }));
  };

  const handleProceed = () => {
    navigate({ to: "/order" });
  };

  return (
    <div data-ocid="menu.page" dir={isRTL ? "rtl" : "ltr"}>
      {/* ── Hero Banner ──────────────────────────────────────── */}
      <section className="bg-card border-b border-border py-12 relative overflow-hidden">
        <IslamicPattern opacity={0.08} />
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Arabic food phrase */}
            <p className="arabic-text text-primary text-3xl font-display mb-2 tracking-wide">
              طَعَامُنَا الحَلَال
            </p>
            <p className="text-muted-foreground text-xs mb-4 italic">
              Our Halal Food
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              {t(language, "menuTitle")}
            </h1>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              {t(language, "menuSubtitle")}
            </p>

            {/* Divider ornament */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <span className="text-primary text-lg">✦</span>
              <span className="h-px w-20 bg-primary/40" />
              <span className="text-primary text-xs font-display uppercase tracking-widest">
                RFF Catering
              </span>
              <span className="h-px w-20 bg-primary/40" />
              <span className="text-primary text-lg">✦</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter Tabs ──────────────────────────────── */}
      <div className="bg-muted/30 border-b border-border sticky top-[105px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div
            className="flex gap-2 overflow-x-auto py-3"
            role="tablist"
            aria-label="Menu categories"
            data-ocid="menu.category_tabs"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.key}
                onClick={() => setActiveCategory(cat.key)}
                data-ocid={`menu.category_${cat.key}_tab`}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-body transition-smooth border ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 bg-card"
                }`}
              >
                <span>{cat.emoji}</span>
                {t(language, cat.labelKey)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Menu Grid ─────────────────────────────────────────── */}
      <section className="py-10 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              data-ocid="menu.loading_state"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton
                <div key={i} className="rounded-xl overflow-hidden">
                  <Skeleton className="h-44 w-full" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-8 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
              data-ocid="menu.empty_state"
            >
              <p className="text-5xl mb-4">🍽️</p>
              <p className="text-foreground font-display text-xl font-semibold mb-2">
                {t(language, "notAvailable")}
              </p>
              <p className="text-muted-foreground text-sm">
                Try another category or check back soon.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id.toString()}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.07 }}
                >
                  <FoodCard
                    item={item}
                    index={i + 1}
                    onAddToCart={addToCart}
                    inCart={!!cart[item.id.toString()]}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Islamic footer strip ─────────────────────────────── */}
      <div className="bg-card border-t border-border py-4">
        <p className="arabic-text text-center text-primary/70 text-sm font-display tracking-widest">
          طعام • بركة • نعمة • حلال
        </p>
      </div>

      {/* ── Floating Cart Bar ─────────────────────────────────── */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-card border border-primary/40 rounded-2xl shadow-elevated px-5 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ShoppingCart size={18} className="text-primary" />
                <div>
                  <p className="text-foreground font-body font-semibold text-sm">
                    {cartCount} {cartCount === 1 ? "item" : "items"} added
                  </p>
                  {cartTotal > 0 && (
                    <p className="text-primary text-xs font-display font-bold">
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </p>
                  )}
                </div>
              </div>
              <Button
                type="button"
                size="sm"
                onClick={handleProceed}
                data-ocid="menu.proceed_to_order_button"
                className="rounded-xl font-body font-semibold flex items-center gap-1.5 shrink-0"
              >
                <Sparkles size={14} />
                {t(language, "orderNow")}
                <ChevronRight size={14} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
