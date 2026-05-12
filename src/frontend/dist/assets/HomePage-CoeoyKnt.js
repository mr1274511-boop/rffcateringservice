import { c as createLucideIcon, u as useLanguage, j as jsxRuntimeExports, I as IslamicPattern, t, L as Link, M as MapPin, P as Phone } from "./index-DhBLjtS6.js";
import { B as Badge } from "./badge-BVogwwd4.js";
import { B as Button } from "./button-D9mkWWJk.js";
import { m as motion } from "./proxy-DF-rmAHk.js";
import { S as Star } from "./star-BWNaSEkz.js";
import { C as Clock } from "./clock-CLGd3T26.js";
import { T as Truck } from "./truck-Co82f0of.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
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
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode);
const FOUNDERS = [
  {
    nameKey: "founderGulam",
    roleKey: "founderGulamRole",
    initial: "GR",
    isMain: true
  },
  {
    nameKey: "founderFazila",
    roleKey: "founderFazilaRole",
    initial: "FA",
    isMain: false
  },
  {
    nameKey: "founderFaiz",
    roleKey: "founderFaizRole",
    initial: "FZ",
    isMain: false
  }
];
const CO_FOUNDERS = ["Lazeema", "Khaleel", "Asif"];
const STATS = [
  { iconEl: Star, valueKey: "serves" },
  { iconEl: Clock, valueKey: "experience" },
  { iconEl: Award, valueKey: "newBrand" }
];
const WHY_ITEMS = [
  { icon: Leaf, key: "halalCertified" },
  { icon: Heart, key: "freshIngredients" },
  { icon: Truck, key: "onTimeDelivery" },
  { icon: Star, key: "richFlavors" }
];
const ABOUT_IMAGES = [
  { src: "/assets/images/rff-banner.jpg", alt: "RFF Catering setup" },
  { src: "/assets/images/chicken-biryani.jpg", alt: "Chicken Biryani" },
  { src: "/assets/images/mutton-biryani.jpg", alt: "Mutton Biryani" }
];
const SPECIALTIES = [
  {
    id: "chicken-biryani",
    img: "/assets/images/chicken-biryani.jpg",
    nameEn: "Chicken Dum Biryani",
    nameAr: "برياني الدجاج",
    nameTa: "சிக்கன் தம் பிரியாணி",
    descEn: "Slow-cooked aromatic chicken biryani, 1 kg serving.",
    descAr: "برياني دجاج عطري مطهو ببطء، حصة 1 كجم.",
    descTa: "மெதுவாக சமைக்கப்பட்ட மணம் நிறைந்த சிக்கன் பிரியாணி, 1 கிலோ.",
    price: "₹1400 / kg",
    badge: "Popular"
  },
  {
    id: "mutton-biryani",
    img: "/assets/images/mutton-biryani.jpg",
    nameEn: "Mutton Biryani",
    nameAr: "برياني اللحم",
    nameTa: "மட்டன் பிரியாணி",
    descEn: "Tender mutton layered with fragrant basmati rice.",
    descAr: "لحم طري مع أرز بسمتي عطر.",
    descTa: "மென்மையான மட்டன் வாசனையுடன் கூடிய பாஸ்மதி சாதம்.",
    price: "₹2200 / kg",
    badge: "Premium"
  },
  {
    id: "birinji",
    img: "/assets/images/birinji.jpg",
    nameEn: "Birinji Rice",
    nameAr: "أرز البريني",
    nameTa: "பிரிஞ்சி சாதம்",
    descEn: "South Indian style birinji with ghee and spices.",
    descAr: "بريني على الطريقة الهندية الجنوبية مع السمن والتوابل.",
    descTa: "நெய் மற்றும் மசாலாவுடன் தென்னிந்திய பிரிஞ்சி சாதம்.",
    price: void 0,
    badge: "Signature"
  },
  {
    id: "kesari",
    img: "/assets/images/kesari.jpg",
    nameEn: "Kesari",
    nameAr: "كيساري",
    nameTa: "கேசரி",
    descEn: "Golden saffron semolina sweet, soft and aromatic.",
    descAr: "حلوى السميد بالزعفران الذهبي، طرية وعطرية.",
    descTa: "பொன்னிற குங்குமப்பூ ரவை இனிப்பு, மென்மையான மற்றும் மணம் நிறைந்த.",
    price: void 0,
    badge: "Sweet"
  },
  {
    id: "bread-halwa",
    img: "/assets/images/bread-halwa.jpg",
    nameEn: "Bread Halwa",
    nameAr: "حلوى الخبز",
    nameTa: "பிரட் ஹல்வா",
    descEn: "Rich bread halwa with ghee, sugar and cardamom.",
    descAr: "حلوى الخبز الغنية بالسمن والسكر والهيل.",
    descTa: "நெய், சர்க்கரை மற்றும் ஏலக்காயுடன் நிறைந்த பிரட் ஹல்வா.",
    price: void 0,
    badge: "Sweet"
  },
  {
    id: "onion-raita",
    img: "/assets/images/onion-raita.jpg",
    nameEn: "Onion Raita",
    nameAr: "رايتا البصل",
    nameTa: "வெங்காய ரைத்தா",
    descEn: "Cool yogurt with crispy onions and spices.",
    descAr: "زبادي بارد مع البصل المقرمش والتوابل.",
    descTa: "நறுக்கிய வெங்காயம் மற்றும் மசாலாவுடன் குளிர்ந்த தயிர்.",
    price: void 0,
    badge: "Side"
  }
];
const CATERING_FEATURES = [
  {
    id: "weddings",
    icon: "✦",
    en: "Weddings & Engagements",
    ar: "الأعراس والخطوبات",
    ta: "திருமணங்கள் & நிச்சயதார்த்தங்கள்"
  },
  {
    id: "banquets",
    icon: "✦",
    en: "Banquets & Feasts",
    ar: "المآدب والولائم",
    ta: "விருந்துகள் & பெரு விழாக்கள்"
  },
  {
    id: "corporate",
    icon: "✦",
    en: "Corporate Events",
    ar: "الفعاليات المؤسسية",
    ta: "கார்ப்பரேட் நிகழ்வுகள்"
  },
  {
    id: "housewarming",
    icon: "✦",
    en: "Gruhapravesam / Housewarming",
    ar: "حفلات الانتقال للمنازل",
    ta: "இல்ல விழா / குடிவரவு"
  }
];
function HomePage() {
  const { language, isRTL } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", dir: isRTL ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: { backgroundImage: "url('/assets/images/rff-banner.jpg')" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IslamicPattern, { opacity: 0.08 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative z-10 py-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "arabic-text text-primary font-display text-2xl md:text-3xl font-bold tracking-wide", children: t(language, "brandAr") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.75 },
                className: isRTL ? "text-right" : "text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/20 text-primary border border-primary/40 mb-5 font-body text-xs px-3 py-1", children: "بِسْمِ اللهِ — Halal Certified" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-4 drop-shadow-lg", children: t(language, "heroTitle") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg md:text-xl mb-2 max-w-2xl", children: t(language, "heroSubtitle") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-body text-sm tracking-wider mb-8 font-semibold", children: t(language, "heroTagline") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/order", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        className: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm font-body font-semibold",
                        "data-ocid": "home.order_now_button",
                        children: t(language, "orderNow")
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        variant: "outline",
                        className: "border-primary/50 text-primary hover:bg-primary/10 font-body",
                        "data-ocid": "home.view_menu_button",
                        children: t(language, "viewMenu")
                      }
                    ) })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-10 bg-primary animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: "scroll" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-hidden h-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "/assets/generated/islamic-divider.dim_1200x120.png",
        alt: "Islamic geometric border",
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary/10 border-y border-primary/25 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 text-center", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.12 },
        className: "flex flex-col items-center gap-1.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(stat.iconEl, { size: 22, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-display font-bold text-sm md:text-base leading-snug", children: t(language, stat.valueKey) })
        ]
      },
      stat.valueKey
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "data-ocid": "home.about_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-secondary/30 text-primary border-primary/30 mb-4 font-body text-xs", children: language === "ar" ? "من نحن" : language === "ta" ? "எங்களைப் பற்றி" : "About Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight", children: language === "ar" ? "خدمة تقديم الطعام RFF" : language === "ta" ? "RFF கேட்டரிங் சர்வீஸ்" : "RFF Catering Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base md:text-lg mb-4 leading-relaxed", children: language === "ar" ? "نقدم خدمات تقديم الطعام الحلال الأصيلة بأكثر من 15 عامًا من الخبرة في الطهي الجنوبي الهندي. نلتزم بمبادئ الضيافة الإسلامية ونستخدم أجود المكونات الطازجة." : language === "ta" ? "15+ ஆண்டுகளுக்கும் மேலான அனுபவத்துடன் உண்மையான ஹலால் கேட்டரிங் சேவைகளை வழங்குகிறோம். இஸ்லாமிய விருந்தோம்பல் மதிப்புகள் மற்றும் சிறந்த தாஜா பொருட்களை பயன்படுத்துகிறோம்." : "We deliver authentic halal catering services with over 15 years of expertise in South Indian cuisine. Rooted in Islamic hospitality values, we use only the finest fresh ingredients, prepared with love and devotion." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-6", children: language === "ar" ? "100+ خدمة ناجحة منذ التأسيس. نحن علامة تجارية جديدة تفتح أبوابها عام 2026 مع سنوات من الخبرة." : language === "ta" ? "நிறுவப்பட்டதிலிருந்து 100+ வெற்றிகரமான சேவைகள். 2026ல் புதிய பிராண்டாக தொடங்கியுள்ளோம், ஆண்டுகளின் அனுபவத்துடன்." : "Over 100+ successful serves since inception. A new brand opening in 2026, backed by years of culinary experience and a passion for authentic flavors." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ["halalCertified", "freshIngredients", "onTimeDelivery"].map(
              (k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "bg-primary/10 border border-primary/25 text-primary text-xs px-3 py-1.5 rounded-full font-body",
                  children: t(language, k)
                },
                k
              )
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.15 },
          className: "grid grid-cols-2 gap-3",
          children: ABOUT_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `rounded-2xl overflow-hidden border border-border ${i === 0 ? "col-span-2 h-52" : "h-40"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img.src,
                  alt: img.alt,
                  className: "w-full h-full object-cover hover:scale-105 transition-smooth"
                }
              )
            },
            img.src
          ))
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-16 bg-muted/30 relative overflow-hidden",
        "data-ocid": "home.why_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IslamicPattern, { opacity: 0.05 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "text-center mb-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-2", children: t(language, "whyChoose") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 bg-primary mx-auto rounded-full" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: WHY_ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1 },
                className: "bg-card border border-border rounded-2xl p-6 text-center hover:shadow-elevated hover:border-primary/40 transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 34, className: "text-primary mx-auto mb-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-body font-semibold text-sm", children: t(language, item.key) })
                ]
              },
              item.key
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "home.specialties_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-2", children: language === "ar" ? "تخصصاتنا" : language === "ta" ? "எங்கள் சிறப்புகள்" : "Our Specialties" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base", children: language === "ar" ? "أشهى المأكولات الجنوبية الهندية الحلال" : language === "ta" ? "சிறந்த தென்னிந்திய ஹலால் உணவுகள்" : "Finest South Indian halal delicacies crafted with tradition" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 bg-primary mx-auto mt-3 rounded-full" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: SPECIALTIES.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated hover:border-primary/30 transition-smooth group",
              "data-ocid": `home.specialty_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-52 overflow-hidden relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: item.img,
                      alt: item.nameEn,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    }
                  ),
                  item.price && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 bg-background/90 text-primary font-display font-bold text-sm px-3 py-1 rounded-full border border-primary/30", children: item.price })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-start justify-between gap-2 ${isRTL ? "flex-row-reverse" : ""}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground", children: language === "ar" ? item.nameAr : language === "ta" ? item.nameTa : item.nameEn }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1 leading-relaxed", children: language === "ar" ? item.descAr : language === "ta" ? item.descTa : item.descEn })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/15 text-primary border-primary/30 text-xs shrink-0", children: item.badge })
                    ]
                  }
                ) })
              ]
            },
            item.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mt-10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "border-primary/50 text-primary hover:bg-primary/10 font-body",
                  "data-ocid": "home.view_full_menu_button",
                  children: t(language, "viewMenu")
                }
              ) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-20 bg-muted/30 relative overflow-hidden",
        "data-ocid": "home.founders_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IslamicPattern, { opacity: 0.06 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "text-center mb-12",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-2", children: t(language, "foundersTitle") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 bg-primary mx-auto rounded-full" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: FOUNDERS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.93 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: i * 0.12 },
                className: `bg-card border rounded-2xl p-7 text-center shadow-warm hover:shadow-elevated transition-smooth ${f.isMain ? "border-primary/50 ring-1 ring-primary/25" : "border-border"}`,
                "data-ocid": `home.founder_card.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-display font-bold text-2xl", children: f.initial }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground", children: t(language, f.nameKey) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-body mt-1", children: t(language, f.roleKey) }),
                  f.isMain && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mt-3 bg-primary/20 text-primary border-primary/40 text-xs", children: [
                    "✦",
                    " ",
                    language === "ar" ? "المؤسس الرئيسي" : language === "ta" ? "முதன்மை நிறுவனர்" : "Lead Founder"
                  ] })
                ]
              },
              f.nameKey
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "bg-card border border-border rounded-2xl p-7 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs uppercase tracking-widest mb-4 font-body", children: t(language, "coFounderRole") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4", children: CO_FOUNDERS.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-display font-bold text-sm", children: name[0] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-sm font-body font-medium", children: name })
                  ] }, name)) })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background relative overflow-hidden",
        "data-ocid": "home.catering_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: language === "ar" ? "خدمات المأدبة الكبرى" : language === "ta" ? "பெரிய விருந்து சேவைகள்" : "Big Dabra Catering" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-6", children: language === "ar" ? "نقدم خدمات ضيافة فاخرة للمناسبات الكبرى، بما في ذلك الأعراس، والمآدب، والتجمعات، بأشهى المأكولات الحلال." : language === "ta" ? "திருமணங்கள், விருந்துகள் மற்றும் கூட்டங்கள் உட்பட பெரிய நிகழ்வுகளுக்கு சிறந்த ஹலால் உணவுகளுடன் உன்னத விருந்தோம்பல் சேவைகளை வழங்குகிறோம்." : "We offer luxurious hospitality services for grand events including weddings, banquets, and gatherings with authentic halal delicacies." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6", children: CATERING_FEATURES.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-lg mt-0.5", children: feat.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-body font-semibold text-sm", children: language === "ar" ? feat.ar : language === "ta" ? feat.ta : feat.en }) })
                ] }, feat.id)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/order", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    className: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm",
                    "data-ocid": "home.catering_order_button",
                    children: t(language, "orderNow")
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: 0.15 },
              className: "rounded-2xl overflow-hidden border border-border h-80",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/images/big-dabra.jpg",
                  alt: "Big Dabra Catering spread",
                  className: "w-full h-full object-cover hover:scale-105 transition-smooth"
                }
              )
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-20 bg-muted/30 relative overflow-hidden",
        "data-ocid": "home.location_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IslamicPattern, { opacity: 0.06 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "text-center mb-12",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-2", children: t(language, "locationTitle") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 bg-primary mx-auto rounded-full" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-smooth",
                  "data-ocid": "home.address_card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 28, className: "text-primary mx-auto mb-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-2", children: language === "ar" ? "العنوان" : language === "ta" ? "முகவரி" : "Address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: t(language, "locationAddress") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.1 },
                  className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-smooth",
                  "data-ocid": "home.contact_khaleel_card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 28, className: "text-primary mx-auto mb-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-2", children: "Mohammed Khaleel" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "tel:+918189872327",
                        className: "text-primary text-lg font-body font-bold hover:text-primary/80 transition-colors",
                        "data-ocid": "home.phone_khaleel_link",
                        children: "+91 81898 72327"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.2 },
                  className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-smooth",
                  "data-ocid": "home.contact_gulam_card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 28, className: "text-primary mx-auto mb-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-2", children: "Gulam Rasool" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "tel:+919790945698",
                        className: "text-primary text-lg font-body font-bold hover:text-primary/80 transition-colors",
                        "data-ocid": "home.phone_gulam_link",
                        children: "+91 97909 45698"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "text-center mt-10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/order", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    className: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm font-body",
                    "data-ocid": "home.location_order_button",
                    children: t(language, "orderNow")
                  }
                ) })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-12 bg-card border-t border-border relative overflow-hidden",
        "data-ocid": "home.endcard_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IslamicPattern, { opacity: 0.07 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative z-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "arabic-text text-primary font-display text-3xl md:text-4xl font-bold tracking-widest mb-3", children: "طعام • بركة • نعمة • حلال • ضيافة • شكر" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm font-body italic", children: language === "ta" ? "உணவு • ஆசீர்வாதம் • அருள் • ஹலால் • விருந்தோம்பல் • நன்றி" : "Food • Blessing • Grace • Halal • Hospitality • Gratitude" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-px bg-primary/40 mx-auto mt-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-3 font-body", children: t(language, "footerTagline") })
          ] })
        ]
      }
    )
  ] });
}
export {
  HomePage as default
};
