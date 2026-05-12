import { c as createLucideIcon, u as useLanguage, a as useNavigate, r as reactExports, j as jsxRuntimeExports, I as IslamicPattern, t } from "./index-DhBLjtS6.js";
import { B as Button } from "./button-D9mkWWJk.js";
import { M as MenuCategory, S as Skeleton } from "./index-BnvbteiL.js";
import { F as FoodCard, S as ShoppingCart, C as ChevronRight } from "./FoodCard-QqtJ-Yrg.js";
import { u as useMenuItems } from "./useMenu-DK9vAEK0.js";
import { m as motion } from "./proxy-DF-rmAHk.js";
import { A as AnimatePresence } from "./index-P1hyeBak.js";
import "./badge-BVogwwd4.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const SEED_ITEMS = [
  {
    id: BigInt(1),
    name: {
      en: "Chicken Dum Biryani",
      ar: "برياني دجاج دم",
      ta: "சிக்கன் தம் பிரியாணி"
    },
    description: {
      en: "Slow-cooked aromatic basmati rice layered with tender chicken, saffron, and whole spices — 1 kg serves 2–3",
      ar: "أرز بسمتي معطر مطبوخ ببطء مع دجاج طري وزعفران وبهارات كاملة",
      ta: "மெல்லிய மேசம் கொண்ட பாஸ்மதி சாதம், சாஃப்ரான் மற்றும் மசாலா"
    },
    price: BigInt(1400),
    imageUrl: "/assets/images/chicken-dum-biryani.jpg",
    category: MenuCategory.biryani,
    isAvailable: true
  },
  {
    id: BigInt(2),
    name: { en: "Mutton Biryani", ar: "برياني لحم الضأن", ta: "மட்டன் பிரியாணி" },
    description: {
      en: "Rich, slow-cooked mutton pieces on a bed of fragrant long-grain rice, marinated overnight in spices — 1 kg",
      ar: "قطع لحم ضأن غنية مطبوخة ببطء على قاعدة من الأرز المعطر",
      ta: "மிகவும் சுவையான மட்டன் பிரியாணி, இரவு ஊறவைத்த மசாலாவுடன்"
    },
    price: BigInt(2200),
    imageUrl: "/assets/images/mutton-biryani.jpg",
    category: MenuCategory.biryani,
    isAvailable: true
  },
  {
    id: BigInt(3),
    name: { en: "Chicken Biryani", ar: "برياني الدجاج", ta: "சிக்கன் பிரியாணி" },
    description: {
      en: "Classic Hyderabadi-style chicken biryani with caramelised onions, mint, and fried cashews — 1 kg",
      ar: "برياني دجاج كلاسيكي على الطريقة الحيدرآبادية مع البصل والنعناع",
      ta: "கிளாசிக் ஹைதராபாதி-ஸ்டைல் சிக்கன் பிரியாணி"
    },
    price: BigInt(1200),
    imageUrl: "/assets/images/chicken-biryani.jpg",
    category: MenuCategory.biryani,
    isAvailable: true
  },
  {
    id: BigInt(4),
    name: { en: "Veg Birinji", ar: "بيرنجي نباتي", ta: "வெஜ் பிரிஞ்சி" },
    description: {
      en: "Traditional South Indian rice dish cooked in coconut milk, ghee, and aromatic whole spices with garden vegetables",
      ar: "طبق أرز جنوب هندي تقليدي مطبوخ في حليب جوز الهند مع الخضار",
      ta: "தென்னிந்திய பாரம்பரிய தேங்காய் பால் பிரிஞ்சி, காய்கறிகளுடன்"
    },
    price: void 0,
    imageUrl: "/assets/images/veg-birinji.jpeg",
    category: MenuCategory.rice,
    isAvailable: true
  },
  {
    id: BigInt(5),
    name: { en: "Kesari (Orange)", ar: "كيساري برتقالي", ta: "கேசரி (ஆரஞ்சு)" },
    description: {
      en: "Semolina sweet pudding in deep saffron orange, enriched with ghee, cardamom, and golden raisins — festive favourite",
      ar: "حلوى سميد برتقالية عميقة مع الزعفران والهيل والزبيب الذهبي",
      ta: "கேசரி ஆரஞ்சு நிறத்தில், நெய், ஏலக்காய் மற்றும் திராட்சையுடன்"
    },
    price: void 0,
    imageUrl: "/assets/images/kesari-orange.jpeg",
    category: MenuCategory.sweets,
    isAvailable: true
  },
  {
    id: BigInt(6),
    name: { en: "Kesari (Yellow)", ar: "كيساري أصفر", ta: "கேசரி (மஞ்சள்)" },
    description: {
      en: "Classic golden yellow semolina halwa with pure desi ghee, turmeric, and cashews — melts in the mouth",
      ar: "حلوى سميد صفراء كلاسيكية مع السمن الخالص والكاجو",
      ta: "மஞ்சள் கேசரி, தூய நெய், மஞ்சள் மற்றும் முந்திரியுடன்"
    },
    price: void 0,
    imageUrl: "/assets/images/kesari-yellow.jpeg",
    category: MenuCategory.sweets,
    isAvailable: true
  },
  {
    id: BigInt(7),
    name: { en: "Bread Halwa", ar: "حلوى الخبز", ta: "பிரெட் அல்வா" },
    description: {
      en: "Indulgent bread pudding fried in ghee until caramelised, studded with nuts and flavoured with rose water and cardamom",
      ar: "حلوى خبز فاخرة مقلية في السمن مع المكسرات وماء الورد والهيل",
      ta: "நெய்யில் வறுத்த பிரெட் அல்வா, கொட்டைகள் மற்றும் ரோஸ்வாட்டர் சுவையில்"
    },
    price: void 0,
    imageUrl: "/assets/images/bread-halwa.jpg",
    category: MenuCategory.sweets,
    isAvailable: true
  },
  {
    id: BigInt(8),
    name: { en: "Onion Raita", ar: "رايتا البصل", ta: "வெங்காய ரைட்டா" },
    description: {
      en: "Cool yoghurt dip with thinly sliced onions, fresh coriander, green chilli, and a pinch of roasted cumin",
      ar: "زبادي بارد مع بصل مقطع رفيع وكزبرة طازجة وكمون محمص",
      ta: "குளிர்ந்த தயிர் டிப், வெங்காயம், கொத்தமல்லி மற்றும் சீரகம்"
    },
    price: void 0,
    imageUrl: "/assets/images/onion-raita.jpg",
    category: MenuCategory.sides,
    isAvailable: true
  },
  {
    id: BigInt(9),
    name: { en: "Thair Pachadi", ar: "تاير باتشادي", ta: "தயிர் பச்சடி" },
    description: {
      en: "Creamy South Indian yoghurt relish with cucumber, mustard seeds, curry leaves, and a touch of coconut",
      ar: "توابل زبادي كريمي جنوب هندي مع الخيار وبذور الخردل وأوراق الكاري",
      ta: "தென்னிந்திய தயிர் பச்சடி, வெள்ளரிக்காய் மற்றும் தேங்காயுடன்"
    },
    price: void 0,
    imageUrl: "/assets/generated/thair-pachadi.dim_600x450.jpg",
    category: MenuCategory.sides,
    isAvailable: true
  }
];
const CATEGORIES = [
  { key: "all", labelKey: "allCategories", emoji: "🍽️" },
  { key: MenuCategory.biryani, labelKey: "biryani", emoji: "🍛" },
  { key: MenuCategory.rice, labelKey: "rice", emoji: "🌾" },
  { key: MenuCategory.sweets, labelKey: "sweets", emoji: "🍮" },
  { key: MenuCategory.sides, labelKey: "sides", emoji: "🥗" },
  { key: MenuCategory.other, labelKey: "other", emoji: "🌿" }
];
function MenuPage() {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const { data: backendItems, isLoading } = useMenuItems();
  const [activeCategory, setActiveCategory] = reactExports.useState(
    "all"
  );
  const [cart, setCart] = reactExports.useState({});
  const items = backendItems && backendItems.length > 0 ? backendItems : SEED_ITEMS;
  const filtered = items.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );
  const cartCount = Object.values(cart).reduce((a, v) => a + v.quantity, 0);
  const cartTotal = Object.values(cart).reduce(
    (sum, { item, quantity }) => sum + (item.price !== void 0 ? Number(item.price) * quantity : 0),
    0
  );
  const addToCart = (item) => {
    const key = item.id.toString();
    setCart((prev) => {
      var _a;
      return {
        ...prev,
        [key]: { item, quantity: (((_a = prev[key]) == null ? void 0 : _a.quantity) ?? 0) + 1 }
      };
    });
  };
  const handleProceed = () => {
    navigate({ to: "/order" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "menu.page", dir: isRTL ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border-b border-border py-12 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IslamicPattern, { opacity: 0.08 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "arabic-text text-primary text-3xl font-display mb-2 tracking-wide", children: "طَعَامُنَا الحَلَال" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mb-4 italic", children: "Our Halal Food" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-3", children: t(language, "menuTitle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base max-w-md mx-auto", children: t(language, "menuSubtitle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-lg", children: "✦" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-20 bg-primary/40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-display uppercase tracking-widest", children: "RFF Catering" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-20 bg-primary/40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-lg", children: "✦" })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 border-b border-border sticky top-[105px] z-40 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-2 overflow-x-auto py-3",
        role: "tablist",
        "aria-label": "Menu categories",
        "data-ocid": "menu.category_tabs",
        children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": activeCategory === cat.key,
            onClick: () => setActiveCategory(cat.key),
            "data-ocid": `menu.category_${cat.key}_tab`,
            className: `shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-body transition-smooth border ${activeCategory === cat.key ? "bg-primary text-primary-foreground border-primary shadow-sm" : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 bg-card"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.emoji }),
              t(language, cat.labelKey)
            ]
          },
          cat.key
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-background min-h-[50vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
        "data-ocid": "menu.loading_state",
        children: Array.from({ length: 8 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-44 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-1/2" })
            ] })
          ] }, i)
        ))
      }
    ) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "text-center py-24",
        "data-ocid": "menu.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-4", children: "🍽️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-display text-xl font-semibold mb-2", children: t(language, "notAvailable") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Try another category or check back soon." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: filtered.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i % 4 * 0.07 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          FoodCard,
          {
            item,
            index: i + 1,
            onAddToCart: addToCart,
            inCart: !!cart[item.id.toString()]
          }
        )
      },
      item.id.toString()
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-t border-border py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "arabic-text text-center text-primary/70 text-sm font-display tracking-widest", children: "طعام • بركة • نعمة • حلال" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 100, opacity: 0 },
        transition: { type: "spring", stiffness: 300, damping: 30 },
        className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-primary/40 rounded-2xl shadow-elevated px-5 py-3 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground font-body font-semibold text-sm", children: [
                cartCount,
                " ",
                cartCount === 1 ? "item" : "items",
                " added"
              ] }),
              cartTotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary text-xs font-display font-bold", children: [
                "₹",
                cartTotal.toLocaleString("en-IN")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              size: "sm",
              onClick: handleProceed,
              "data-ocid": "menu.proceed_to_order_button",
              className: "rounded-xl font-body font-semibold flex items-center gap-1.5 shrink-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14 }),
                t(language, "orderNow"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
              ]
            }
          )
        ] })
      }
    ) })
  ] });
}
export {
  MenuPage as default
};
