import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Clock,
  Heart,
  Leaf,
  MapPin,
  Phone,
  Star,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { IslamicPattern } from "../components/IslamicPattern";
import { useLanguage } from "../contexts/LanguageContext";
import { type TranslationKey, t } from "../translations";

const FOUNDERS = [
  {
    nameKey: "founderGulam" as const,
    roleKey: "founderGulamRole" as const,
    initial: "GR",
    isMain: true,
  },
  {
    nameKey: "founderFazila" as const,
    roleKey: "founderFazilaRole" as const,
    initial: "FA",
    isMain: false,
  },
  {
    nameKey: "founderFaiz" as const,
    roleKey: "founderFaizRole" as const,
    initial: "FZ",
    isMain: false,
  },
];

const CO_FOUNDERS = ["Lazeema", "Khaleel", "Asif"];

const STATS = [
  { iconEl: Star, valueKey: "serves" as const },
  { iconEl: Clock, valueKey: "experience" as const },
  { iconEl: Award, valueKey: "newBrand" as const },
];

const WHY_ITEMS = [
  { icon: Leaf, key: "halalCertified" as const },
  { icon: Heart, key: "freshIngredients" as const },
  { icon: Truck, key: "onTimeDelivery" as const },
  { icon: Star, key: "richFlavors" as const },
];

const ABOUT_IMAGES = [
  { src: "/assets/images/rff-banner.jpg", alt: "RFF Catering setup" },
  { src: "/assets/images/chicken-biryani.jpg", alt: "Chicken Biryani" },
  { src: "/assets/images/mutton-biryani.jpg", alt: "Mutton Biryani" },
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
    badge: "Popular",
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
    badge: "Premium",
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
    price: undefined,
    badge: "Signature",
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
    price: undefined,
    badge: "Sweet",
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
    price: undefined,
    badge: "Sweet",
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
    price: undefined,
    badge: "Side",
  },
];

const CATERING_FEATURES = [
  {
    id: "weddings",
    icon: "✦",
    en: "Weddings & Engagements",
    ar: "الأعراس والخطوبات",
    ta: "திருமணங்கள் & நிச்சயதார்த்தங்கள்",
  },
  {
    id: "banquets",
    icon: "✦",
    en: "Banquets & Feasts",
    ar: "المآدب والولائم",
    ta: "விருந்துகள் & பெரு விழாக்கள்",
  },
  {
    id: "corporate",
    icon: "✦",
    en: "Corporate Events",
    ar: "الفعاليات المؤسسية",
    ta: "கார்ப்பரேட் நிகழ்வுகள்",
  },
  {
    id: "housewarming",
    icon: "✦",
    en: "Gruhapravesam / Housewarming",
    ar: "حفلات الانتقال للمنازل",
    ta: "இல்ல விழா / குடிவரவு",
  },
];

export default function HomePage() {
  const { language, isRTL } = useLanguage();

  return (
    <div data-ocid="home.page" dir={isRTL ? "rtl" : "ltr"}>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden"
        data-ocid="home.hero_section"
      >
        {/* Full-width background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/rff-banner.jpg')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90" />
        <IslamicPattern opacity={0.08} />

        <div className="container mx-auto px-4 relative z-10 py-20">
          {/* Arabic brand name - always right-aligned */}
          <div className="text-right mb-2">
            <p className="arabic-text text-primary font-display text-2xl md:text-3xl font-bold tracking-wide">
              {t(language, "brandAr")}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className={isRTL ? "text-right" : "text-left"}
          >
            <Badge className="bg-primary/20 text-primary border border-primary/40 mb-5 font-body text-xs px-3 py-1">
              بِسْمِ اللهِ — Halal Certified
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-4 drop-shadow-lg">
              {t(language, "heroTitle")}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-2 max-w-2xl">
              {t(language, "heroSubtitle")}
            </p>
            <p className="text-primary font-body text-sm tracking-wider mb-8 font-semibold">
              {t(language, "heroTagline")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/order">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm font-body font-semibold"
                  data-ocid="home.order_now_button"
                >
                  {t(language, "orderNow")}
                </Button>
              </Link>
              <Link to="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 font-body"
                  data-ocid="home.view_menu_button"
                >
                  {t(language, "viewMenu")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <div className="w-px h-10 bg-primary animate-pulse" />
          <p className="text-xs text-muted-foreground font-body">scroll</p>
        </div>
      </section>

      {/* ── Islamic Divider ── */}
      <div className="w-full overflow-hidden h-20">
        <img
          src="/assets/generated/islamic-divider.dim_1200x120.png"
          alt="Islamic geometric border"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Stats bar ── */}
      <section className="bg-primary/10 border-y border-primary/25 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.valueKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center gap-1.5"
              >
                <stat.iconEl size={22} className="text-primary" />
                <p className="text-foreground font-display font-bold text-sm md:text-base leading-snug">
                  {t(language, stat.valueKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About RFF ── */}
      <section className="py-20 bg-background" data-ocid="home.about_section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-secondary/30 text-primary border-primary/30 mb-4 font-body text-xs">
                {language === "ar"
                  ? "من نحن"
                  : language === "ta"
                    ? "எங்களைப் பற்றி"
                    : "About Us"}
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {language === "ar"
                  ? "خدمة تقديم الطعام RFF"
                  : language === "ta"
                    ? "RFF கேட்டரிங் சர்வீஸ்"
                    : "RFF Catering Service"}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
                {language === "ar"
                  ? "نقدم خدمات تقديم الطعام الحلال الأصيلة بأكثر من 15 عامًا من الخبرة في الطهي الجنوبي الهندي. نلتزم بمبادئ الضيافة الإسلامية ونستخدم أجود المكونات الطازجة."
                  : language === "ta"
                    ? "15+ ஆண்டுகளுக்கும் மேலான அனுபவத்துடன் உண்மையான ஹலால் கேட்டரிங் சேவைகளை வழங்குகிறோம். இஸ்லாமிய விருந்தோம்பல் மதிப்புகள் மற்றும் சிறந்த தாஜா பொருட்களை பயன்படுத்துகிறோம்."
                    : "We deliver authentic halal catering services with over 15 years of expertise in South Indian cuisine. Rooted in Islamic hospitality values, we use only the finest fresh ingredients, prepared with love and devotion."}
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {language === "ar"
                  ? "100+ خدمة ناجحة منذ التأسيس. نحن علامة تجارية جديدة تفتح أبوابها عام 2026 مع سنوات من الخبرة."
                  : language === "ta"
                    ? "நிறுவப்பட்டதிலிருந்து 100+ வெற்றிகரமான சேவைகள். 2026ல் புதிய பிராண்டாக தொடங்கியுள்ளோம், ஆண்டுகளின் அனுபவத்துடன்."
                    : "Over 100+ successful serves since inception. A new brand opening in 2026, backed by years of culinary experience and a passion for authentic flavors."}
              </p>
              <div className="flex flex-wrap gap-3">
                {["halalCertified", "freshIngredients", "onTimeDelivery"].map(
                  (k) => (
                    <span
                      key={k}
                      className="bg-primary/10 border border-primary/25 text-primary text-xs px-3 py-1.5 rounded-full font-body"
                    >
                      {t(language, k as TranslationKey)}
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {ABOUT_IMAGES.map((img, i) => (
                <div
                  key={img.src}
                  className={`rounded-2xl overflow-hidden border border-border ${
                    i === 0 ? "col-span-2 h-52" : "h-40"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose RFF ── */}
      <section
        className="py-16 bg-muted/30 relative overflow-hidden"
        data-ocid="home.why_section"
      >
        <IslamicPattern opacity={0.05} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t(language, "whyChoose")}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-elevated hover:border-primary/40 transition-smooth"
              >
                <item.icon size={34} className="text-primary mx-auto mb-3" />
                <p className="text-foreground font-body font-semibold text-sm">
                  {t(language, item.key)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialties ── */}
      <section
        className="py-20 bg-background"
        data-ocid="home.specialties_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              {language === "ar"
                ? "تخصصاتنا"
                : language === "ta"
                  ? "எங்கள் சிறப்புகள்"
                  : "Our Specialties"}
            </h2>
            <p className="text-muted-foreground text-base">
              {language === "ar"
                ? "أشهى المأكولات الجنوبية الهندية الحلال"
                : language === "ta"
                  ? "சிறந்த தென்னிந்திய ஹலால் உணவுகள்"
                  : "Finest South Indian halal delicacies crafted with tradition"}
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALTIES.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated hover:border-primary/30 transition-smooth group"
                data-ocid={`home.specialty_card.${i + 1}`}
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  {item.price && (
                    <div className="absolute bottom-3 right-3 bg-background/90 text-primary font-display font-bold text-sm px-3 py-1 rounded-full border border-primary/30">
                      {item.price}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div
                    className={`flex items-start justify-between gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {language === "ar"
                          ? item.nameAr
                          : language === "ta"
                            ? item.nameTa
                            : item.nameEn}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                        {language === "ar"
                          ? item.descAr
                          : language === "ta"
                            ? item.descTa
                            : item.descEn}
                      </p>
                    </div>
                    <Badge className="bg-primary/15 text-primary border-primary/30 text-xs shrink-0">
                      {item.badge}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/menu">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-body"
                data-ocid="home.view_full_menu_button"
              >
                {t(language, "viewMenu")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section
        className="py-20 bg-muted/30 relative overflow-hidden"
        data-ocid="home.founders_section"
      >
        <IslamicPattern opacity={0.06} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t(language, "foundersTitle")}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Main founders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.nameKey}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`bg-card border rounded-2xl p-7 text-center shadow-warm hover:shadow-elevated transition-smooth ${
                  f.isMain
                    ? "border-primary/50 ring-1 ring-primary/25"
                    : "border-border"
                }`}
                data-ocid={`home.founder_card.${i + 1}`}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-display font-bold text-2xl">
                    {f.initial}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t(language, f.nameKey)}
                </h3>
                <p className="text-primary text-sm font-body mt-1">
                  {t(language, f.roleKey)}
                </p>
                {f.isMain && (
                  <Badge className="mt-3 bg-primary/20 text-primary border-primary/40 text-xs">
                    ✦{" "}
                    {language === "ar"
                      ? "المؤسس الرئيسي"
                      : language === "ta"
                        ? "முதன்மை நிறுவனர்"
                        : "Lead Founder"}
                  </Badge>
                )}
              </motion.div>
            ))}
          </div>

          {/* Co-founders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-7 text-center"
          >
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4 font-body">
              {t(language, "coFounderRole")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {CO_FOUNDERS.map((name) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-sm">
                      {name[0]}
                    </span>
                  </div>
                  <span className="text-foreground text-sm font-body font-medium">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Big Dabra Catering Banner ── */}
      <section
        className="py-20 bg-background relative overflow-hidden"
        data-ocid="home.catering_section"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {language === "ar"
                  ? "خدمات المأدبة الكبرى"
                  : language === "ta"
                    ? "பெரிய விருந்து சேவைகள்"
                    : "Big Dabra Catering"}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {language === "ar"
                  ? "نقدم خدمات ضيافة فاخرة للمناسبات الكبرى، بما في ذلك الأعراس، والمآدب، والتجمعات، بأشهى المأكولات الحلال."
                  : language === "ta"
                    ? "திருமணங்கள், விருந்துகள் மற்றும் கூட்டங்கள் உட்பட பெரிய நிகழ்வுகளுக்கு சிறந்த ஹலால் உணவுகளுடன் உன்னத விருந்தோம்பல் சேவைகளை வழங்குகிறோம்."
                    : "We offer luxurious hospitality services for grand events including weddings, banquets, and gatherings with authentic halal delicacies."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {CATERING_FEATURES.map((feat) => (
                  <div key={feat.id} className="flex items-start gap-3">
                    <span className="text-primary text-lg mt-0.5">
                      {feat.icon}
                    </span>
                    <div>
                      <p className="text-foreground font-body font-semibold text-sm">
                        {language === "ar"
                          ? feat.ar
                          : language === "ta"
                            ? feat.ta
                            : feat.en}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/order">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm"
                  data-ocid="home.catering_order_button"
                >
                  {t(language, "orderNow")}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl overflow-hidden border border-border h-80"
            >
              <img
                src="/assets/images/big-dabra.jpg"
                alt="Big Dabra Catering spread"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact & Location ── */}
      <section
        className="py-20 bg-muted/30 relative overflow-hidden"
        data-ocid="home.location_section"
      >
        <IslamicPattern opacity={0.06} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t(language, "locationTitle")}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-smooth"
              data-ocid="home.address_card"
            >
              <MapPin size={28} className="text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-foreground mb-2">
                {language === "ar"
                  ? "العنوان"
                  : language === "ta"
                    ? "முகவரி"
                    : "Address"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(language, "locationAddress")}
              </p>
            </motion.div>

            {/* Phone 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-smooth"
              data-ocid="home.contact_khaleel_card"
            >
              <Phone size={28} className="text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-foreground mb-2">
                Mohammed Khaleel
              </h3>
              <a
                href="tel:+918189872327"
                className="text-primary text-lg font-body font-bold hover:text-primary/80 transition-colors"
                data-ocid="home.phone_khaleel_link"
              >
                +91 81898 72327
              </a>
            </motion.div>

            {/* Phone 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-smooth"
              data-ocid="home.contact_gulam_card"
            >
              <Phone size={28} className="text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-foreground mb-2">
                Gulam Rasool
              </h3>
              <a
                href="tel:+919790945698"
                className="text-primary text-lg font-body font-bold hover:text-primary/80 transition-colors"
                data-ocid="home.phone_gulam_link"
              >
                +91 97909 45698
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/order">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm font-body"
                data-ocid="home.location_order_button"
              >
                {t(language, "orderNow")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Arabic Food Words End Card ── */}
      <section
        className="py-12 bg-card border-t border-border relative overflow-hidden"
        data-ocid="home.endcard_section"
      >
        <IslamicPattern opacity={0.07} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="arabic-text text-primary font-display text-3xl md:text-4xl font-bold tracking-widest mb-3">
            طعام • بركة • نعمة • حلال • ضيافة • شكر
          </p>
          <p className="text-muted-foreground text-sm font-body italic">
            {language === "ta"
              ? "உணவு • ஆசீர்வாதம் • அருள் • ஹலால் • விருந்தோம்பல் • நன்றி"
              : "Food • Blessing • Grace • Halal • Hospitality • Gratitude"}
          </p>
          <div className="w-24 h-px bg-primary/40 mx-auto mt-4" />
          <p className="text-muted-foreground text-xs mt-3 font-body">
            {t(language, "footerTagline")}
          </p>
        </div>
      </section>
    </div>
  );
}
