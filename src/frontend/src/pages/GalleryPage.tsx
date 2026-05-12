import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IslamicPattern } from "../components/IslamicPattern";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../translations";

const GALLERY_ITEMS = [
  {
    id: "rff-banner",
    src: "/assets/generated/rff-catering-hero.dim_1200x600.jpg",
    en: "RFF Catering – Signature Spread",
    ar: "RFF خدمة تقديم الطعام – طبق مميز",
    ta: "RFF கேட்டரிங் – சிறப்பு பரிமாறல்",
    wide: true,
  },
  {
    id: "chicken-dum",
    src: "/assets/generated/chicken-dum-biryani.dim_600x450.jpg",
    en: "Chicken Dum Biryani",
    ar: "برياني دم الدجاج",
    ta: "சிகன் டம் பிரியாணி",
    wide: false,
  },
  {
    id: "mutton-biryani",
    src: "/assets/generated/mutton-biryani.dim_600x450.jpg",
    en: "Mutton Biryani",
    ar: "برياني لحم الغنم",
    ta: "மட்டன் பிரியாணி",
    wide: false,
  },
  {
    id: "chicken-biryani",
    src: "/assets/generated/chicken-biryani.dim_600x450.jpg",
    en: "Chicken Biryani",
    ar: "برياني الدجاج",
    ta: "சிகன் பிரியாணி",
    wide: false,
  },
  {
    id: "veg-birinji",
    src: "/assets/generated/veg-birinji.dim_600x450.jpg",
    en: "Vegetarian Birinji",
    ar: "بيرينجي نباتي",
    ta: "சைவ பிரிஞ்சி",
    wide: false,
  },
  {
    id: "kesari-orange",
    src: "/assets/generated/kesari-orange.dim_600x450.jpg",
    en: "Kesari (Orange)",
    ar: "كيساري برتقالي",
    ta: "கேசரி (ஆரஞ்சு)",
    wide: false,
  },
  {
    id: "kesari-yellow",
    src: "/assets/generated/kesari-yellow.dim_600x450.jpg",
    en: "Kesari (Golden Yellow)",
    ar: "كيساري أصفر ذهبي",
    ta: "கேசரி (தங்க மஞ்சள்)",
    wide: false,
  },
  {
    id: "bread-halwa",
    src: "/assets/generated/bread-halwa.dim_600x450.jpg",
    en: "Bread Halwa",
    ar: "حلوى الخبز",
    ta: "ப்ரெட் கல்வா",
    wide: false,
  },
  {
    id: "thair-pachadi",
    src: "/assets/generated/thair-pachadi.dim_600x450.jpg",
    en: "Thair Pachadi",
    ar: "تاير باتشادي",
    ta: "தயிர் பச்சடி",
    wide: false,
  },
  {
    id: "onion-raita",
    src: "/assets/generated/onion-raita.dim_600x450.jpg",
    en: "Onion Raita",
    ar: "رايتا بصل",
    ta: "வெங்காய ராய்டா",
    wide: false,
  },
];

type GalleryItem = (typeof GALLERY_ITEMS)[number];

function getCaption(item: GalleryItem, lang: string) {
  if (lang === "ar") return item.ar;
  if (lang === "ta") return item.ta;
  return item.en;
}

function LightboxModal({
  item,
  lang,
  onClose,
}: {
  item: GalleryItem;
  lang: string;
  onClose: () => void;
}) {
  const caption = getCaption(item, lang);
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      data-ocid="gallery.dialog"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />

      {/* Modal content */}
      <motion.div
        className="relative z-10 max-w-3xl w-full rounded-2xl overflow-hidden border-2 border-primary/40 shadow-elevated bg-card"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Islamic border */}
        <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />

        <img
          src={item.src}
          alt={caption}
          className="w-full max-h-[70vh] object-cover"
        />

        {/* Caption bar */}
        <div className="px-6 py-4 flex items-center justify-between gap-3 border-t border-border">
          <div className={lang === "ar" ? "text-right" : ""}>
            <p className="font-display text-lg font-semibold text-foreground">
              {caption}
            </p>
            {lang !== "ar" && (
              <p className="arabic-text text-primary text-sm mt-0.5">
                {item.ar}
              </p>
            )}
            {lang !== "ta" && (
              <p className="text-muted-foreground text-sm">{item.ta}</p>
            )}
          </div>
          <button
            type="button"
            aria-label="Close"
            className="ml-auto shrink-0 w-10 h-10 rounded-full bg-muted hover:bg-primary/20 transition-smooth flex items-center justify-center text-foreground text-lg font-bold"
            onClick={onClose}
            data-ocid="gallery.close_button"
          >
            ✕
          </button>
        </div>

        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const { language, isRTL } = useLanguage();
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const galleryTitle =
    language === "ar"
      ? "معرض الصور"
      : language === "ta"
        ? "எங்கள் கேலரி"
        : "Our Gallery";

  const gallerySubtitle =
    language === "ar"
      ? "تصفح أطباقنا اللذيذة الأصيلة"
      : language === "ta"
        ? "எங்கள் சுவையான உணவுகளை உலாவுங்கள்"
        : "Browse our delicious authentic dishes";

  return (
    <div data-ocid="gallery.page">
      {/* ─── Hero Header ─── */}
      <section className="relative bg-card border-b border-border overflow-hidden">
        <IslamicPattern opacity={0.08} />

        {/* Top Bismillah Banner */}
        <div className="relative z-10 py-2 border-b border-primary/30 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <p className="arabic-text text-primary font-display text-xl leading-relaxed">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
            </p>
            <p className="text-muted-foreground text-xs mt-0.5">
              {t(language, "bismillahEn")}
            </p>
          </div>
        </div>

        {/* Page Title */}
        <div
          className={`relative z-10 py-12 text-center ${isRTL ? "rtl" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative top ornament */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <span className="text-primary text-2xl">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>

            <p className="arabic-text text-primary/80 text-lg font-display mb-1">
              معرضنا
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              {galleryTitle}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
              {gallerySubtitle}
            </p>

            {/* Decorative bottom ornament */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-primary text-sm">❖</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Islamic Decorative Border ─── */}
      <div className="h-3 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

      {/* ─── Gallery Grid ─── */}
      <section className="py-12 bg-background relative">
        {/* Subtle corner decorations */}
        <div className="absolute top-0 left-0 w-24 h-24 opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <title>Corner decoration</title>
            <path d="M0 0 L100 0 L0 100" fill="oklch(0.65 0.18 85)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none rotate-90">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <title>Corner decoration</title>
            <path d="M0 0 L100 0 L0 100" fill="oklch(0.65 0.18 85)" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          {/* Grid count badge */}
          <p className="text-center text-muted-foreground text-sm mb-8">
            {language === "ar"
              ? `${GALLERY_ITEMS.length} صور من مطبخنا`
              : language === "ta"
                ? `எங்கள் சமையலரங்கிலிருந்து ${GALLERY_ITEMS.length} படங்கள்`
                : `${GALLERY_ITEMS.length} photos from our kitchen`}
          </p>

          {/* Masonry-style grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="gallery.list"
          >
            {GALLERY_ITEMS.map((item, i) => {
              const caption = getCaption(item, language);
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  aria-label={`View ${caption} full size`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className={`group relative rounded-2xl overflow-hidden border-2 border-primary/20
                    hover:border-primary/60 shadow-md hover:shadow-elevated
                    transition-smooth text-left w-full cursor-pointer bg-card
                    ${item.wide ? "sm:col-span-2 lg:col-span-3" : ""}`}
                  onClick={() => setSelected(item)}
                  data-ocid={`gallery.item.${i + 1}`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      item.wide ? "h-60 md:h-80" : "h-52"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={caption}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-smooth flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-smooth text-primary-foreground text-4xl drop-shadow-lg">
                        🔍
                      </span>
                    </div>
                    {/* Gold corner badge */}
                    <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center text-primary-foreground text-xs font-bold shadow">
                      {i + 1}
                    </div>
                  </div>

                  {/* Caption */}
                  <div
                    className={`px-4 py-3 border-t border-primary/20 ${isRTL ? "text-right" : ""}`}
                  >
                    <p className="font-display text-sm font-semibold text-foreground truncate">
                      {caption}
                    </p>
                    <div className="flex items-center justify-between mt-1 gap-2">
                      {language !== "ar" && (
                        <span className="arabic-text text-primary/80 text-xs truncate">
                          {item.ar}
                        </span>
                      )}
                      {language !== "ta" && (
                        <span className="text-muted-foreground text-xs truncate">
                          {item.ta}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bottom Islamic Border ─── */}
      <div className="h-3 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

      {/* ─── CTA Section ─── */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <IslamicPattern opacity={0.05} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Arabic calligraphic accent */}
            <p className="arabic-text text-primary font-display text-2xl mb-3">
              اطلب طعامك الآن
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              {language === "ar"
                ? "هل أنت جاهز للطلب؟"
                : language === "ta"
                  ? "ஆர்டர் செய்ய தயாரா?"
                  : "Ready to Order?"}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {language === "ar"
                ? "اختر من قائمتنا واستمتع بأشهى الأطباق الحلال"
                : language === "ta"
                  ? "எங்கள் மெனுவிலிருந்து தேர்வு செய்து சிறந்த ஹலால் உணவை அனுபவியுங்கள்"
                  : "Choose from our menu and enjoy the finest halal cuisine"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/order"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-base shadow-md hover:shadow-elevated hover:bg-primary/90 transition-smooth"
                data-ocid="gallery.order_now_button"
              >
                <span>🛒</span>
                {t(language, "orderNow")}
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-primary text-primary font-display font-semibold text-base hover:bg-primary/10 transition-smooth"
                data-ocid="gallery.view_menu_button"
              >
                <span>🍽️</span>
                {t(language, "viewMenu")}
              </Link>
            </div>

            {/* Arabic food words footer */}
            <div className="mt-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-16 bg-primary/30" />
                <span className="text-primary/50 text-xs">❖</span>
                <div className="h-px w-16 bg-primary/30" />
              </div>
              <p className="arabic-text text-primary/60 text-sm font-display">
                طعام • بركة • نعمة • حلال • خير • رزق
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {selected && (
          <LightboxModal
            item={selected}
            lang={language}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
