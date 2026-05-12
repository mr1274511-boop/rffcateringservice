import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FoodCard } from "../components/FoodCard";
import { IslamicPattern } from "../components/IslamicPattern";
import { useLanguage } from "../contexts/LanguageContext";
import { useMenuItems } from "../hooks/useMenu";
import { usePlaceOrder } from "../hooks/useOrders";
import { t } from "../translations";
import { MenuCategory, PaymentMethod } from "../types";
import type { MenuItem } from "../types";

type CartItem = { item: MenuItem; quantity: number };
type Step = 1 | 2 | 3;

const STEP_LABELS_EN = ["Select Items", "Your Details", "Review & Pay"];
const STEP_LABELS_AR = ["اختر الأصناف", "بياناتك", "مراجعة ودفع"];
const STEP_LABELS_TA = ["பொருட்கள் தேர்வு", "உங்கள் விவரங்கள்", "மதிப்பாய்வு & கட்டணம்"];

export default function OrderPage() {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const { data: menuItems, isLoading } = useMenuItems();
  const placeOrderMutation = usePlaceOrder();

  const [step, setStep] = useState<Step>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.cod,
  );
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const stepLabels =
    language === "ar"
      ? STEP_LABELS_AR
      : language === "ta"
        ? STEP_LABELS_TA
        : STEP_LABELS_EN;

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing)
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c,
        );
      return [...prev, { item, quantity: 1 }];
    });
  };

  const updateQty = (id: bigint, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.item.id === id ? { ...c, quantity: c.quantity + delta } : c,
        )
        .filter((c) => c.quantity > 0),
    );
  };

  const total = cart.reduce((sum, c) => {
    const price = c.item.price !== undefined ? Number(c.item.price) : 0;
    return sum + price * c.quantity;
  }, 0);

  const goNext = () => {
    setError("");
    if (step === 1) {
      if (cart.length === 0) {
        setError("Please add at least one item.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!customerName.trim()) {
        setError("Please enter your name.");
        return;
      }
      if (!contactNumber.trim()) {
        setError("Please enter your contact number.");
        return;
      }
      setStep(3);
    }
  };

  const goPrev = () => {
    setError("");
    if (step > 1) setStep((s) => (s - 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const order = await placeOrderMutation.mutateAsync({
        customerName,
        contactNumber,
        paymentMethod,
        notes,
        items: cart.map((c) => ({
          menuItemId: c.item.id,
          quantity: BigInt(c.quantity),
        })),
      });
      navigate({
        to: "/order/$orderId",
        params: { orderId: order.orderId.toString() },
      });
    } catch {
      setError(t(language, "orderError"));
    }
  };

  const SEED_ITEMS: MenuItem[] = [
    {
      id: BigInt(1),
      name: {
        en: "Chicken Dum Biryani",
        ar: "برياني دجاج دم",
        ta: "சிக்கன் தம் பிரியாணி",
      },
      description: {
        en: "Slow-cooked aromatic basmati rice with tender chicken — 1 kg",
        ar: "أرز بسمتي مطبوخ ببطء مع دجاج طري",
        ta: "மெல்லிய பாஸ்மதி சாதம், மசாலாவுடன்",
      },
      price: BigInt(1400),
      imageUrl: "/assets/images/chicken-dum-biryani.jpg",
      category: MenuCategory.biryani,
      isAvailable: true,
    },
    {
      id: BigInt(2),
      name: {
        en: "Mutton Biryani",
        ar: "برياني لحم الضأن",
        ta: "மட்டன் பிரியாணி",
      },
      description: {
        en: "Rich slow-cooked mutton on fragrant long-grain rice — 1 kg",
        ar: "لحم ضأن مطبوخ ببطء على أرز معطر",
        ta: "சுவையான மட்டன் பிரியாணி",
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
        en: "Classic Hyderabadi-style chicken biryani — 1 kg",
        ar: "برياني دجاج كلاسيكي",
        ta: "கிளாசிக் சிக்கன் பிரியாணி",
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
        en: "South Indian rice cooked in coconut milk with vegetables",
        ar: "أرز جنوب هندي مطبوخ في حليب جوز الهند",
        ta: "தென்னிந்திய தேங்காய் பால் பிரிஞ்சி",
      },
      price: undefined,
      imageUrl: "/assets/images/veg-birinji.jpeg",
      category: MenuCategory.rice,
      isAvailable: true,
    },
    {
      id: BigInt(5),
      name: {
        en: "Kesari (Orange)",
        ar: "كيساري برتقالي",
        ta: "கேசரி (ஆரஞ்சு)",
      },
      description: {
        en: "Semolina sweet in saffron orange with ghee and cardamom",
        ar: "حلوى سميد برتقالية مع الزعفران والهيل",
        ta: "ஆரஞ்சு கேசரி, நெய் மற்றும் ஏலக்காயுடன்",
      },
      price: undefined,
      imageUrl: "/assets/images/kesari-orange.jpeg",
      category: MenuCategory.sweets,
      isAvailable: true,
    },
    {
      id: BigInt(7),
      name: { en: "Bread Halwa", ar: "حلوى الخبز", ta: "பிரெட் அல்வா" },
      description: {
        en: "Bread pudding fried in ghee with nuts and rose water",
        ar: "حلوى خبز فاخرة مع المكسرات وماء الورد",
        ta: "நெய்யில் வறுத்த பிரெட் அல்வா",
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
        en: "Cool yoghurt dip with onions, coriander, and cumin",
        ar: "زبادي بارد مع بصل وكزبرة وكمون",
        ta: "குளிர்ந்த தயிர் டிப், வெங்காயம் மற்றும் சீரகம்",
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
        en: "Creamy yoghurt relish with cucumber, mustard seeds, and coconut",
        ar: "توابل زبادي كريمي مع الخيار وبذور الخردل",
        ta: "தேங்காயுடன் தயிர் பச்சடி",
      },
      price: undefined,
      imageUrl: "/assets/generated/thair-pachadi.dim_600x450.jpg",
      category: MenuCategory.sides,
      isAvailable: true,
    },
  ];
  const baseItems = menuItems && menuItems.length > 0 ? menuItems : SEED_ITEMS;
  const availableItems = baseItems.filter((item) => item.isAvailable);
  const cartIds = new Set(cart.map((c) => c.item.id.toString()));

  const categories = [
    MenuCategory.biryani,
    MenuCategory.rice,
    MenuCategory.sides,
    MenuCategory.sweets,
    MenuCategory.other,
  ];

  return (
    <div data-ocid="order.page">
      {/* Header */}
      <section className="bg-card border-b border-border py-10 relative overflow-hidden">
        <IslamicPattern opacity={0.07} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="arabic-text text-primary text-2xl font-display mb-1">
              أول بأول
            </p>
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">
              {t(language, "orderTitle")}
            </h1>
            <p className="text-muted-foreground">
              {t(language, "orderSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {stepLabels.map((label, i) => {
            const stepNum = (i + 1) as Step;
            const isActive = stepNum === step;
            const isDone = stepNum < step;
            return (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-smooth ${
                      isActive
                        ? "bg-primary border-primary text-primary-foreground"
                        : isDone
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-muted border-border text-muted-foreground"
                    }`}
                  >
                    {isDone ? "✓" : stepNum}
                  </div>
                  <p
                    className={`text-xs mt-1 max-w-[80px] text-center leading-tight hidden sm:block ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </p>
                </div>
                {i < 2 && (
                  <div
                    className={`w-16 h-0.5 mx-1 mb-4 sm:mb-0 ${
                      isDone ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: Select Items */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? -40 : 40 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Menu */}
                <div className="lg:col-span-2">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                    {language === "ar"
                      ? "اختر أصنافك"
                      : language === "ta"
                        ? "உணவுகளை தேர்வு செய்யுங்கள்"
                        : "Choose Your Items"}
                  </h2>
                  {isLoading ? (
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} className="h-24 w-full rounded-xl" />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-5">
                      {categories.map((cat) => {
                        const catItems = availableItems.filter(
                          (i) => i.category === cat,
                        );
                        if (catItems.length === 0) return null;
                        return (
                          <div key={cat}>
                            <p className="text-primary text-xs uppercase tracking-widest font-body font-semibold mb-2 border-b border-border pb-1">
                              {t(
                                language,
                                cat as
                                  | "biryani"
                                  | "rice"
                                  | "sides"
                                  | "sweets"
                                  | "other",
                              )}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {catItems.map((item, i) => (
                                <FoodCard
                                  key={item.id.toString()}
                                  item={item}
                                  index={i + 1}
                                  onAddToCart={addToCart}
                                  inCart={cartIds.has(item.id.toString())}
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Mini Cart Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-card border border-border rounded-2xl p-5 sticky top-28">
                    <div className="flex items-center gap-2 mb-4">
                      <ShoppingCart size={18} className="text-primary" />
                      <h3 className="font-display font-semibold text-foreground">
                        {t(language, "orderItems")}
                      </h3>
                      {cart.length > 0 && (
                        <Badge className="bg-primary text-primary-foreground ml-auto">
                          {cart.reduce((s, c) => s + c.quantity, 0)}
                        </Badge>
                      )}
                    </div>
                    {cart.length === 0 ? (
                      <p
                        className="text-muted-foreground text-sm text-center py-6"
                        data-ocid="order.empty_state"
                      >
                        {t(language, "emptyCart")}
                      </p>
                    ) : (
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {cart.map((c, i) => (
                          <div
                            key={c.item.id.toString()}
                            className="flex items-center gap-2"
                            data-ocid={`order.cart_item.${i + 1}`}
                          >
                            <span className="text-sm text-foreground flex-1 truncate min-w-0">
                              {c.item.name[language] || c.item.name.en}
                            </span>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => updateQty(c.item.id, -1)}
                                className="w-6 h-6 rounded border border-border flex items-center justify-center hover:bg-muted transition-smooth"
                                aria-label="Decrease quantity"
                                data-ocid={`order.decrease_qty.${i + 1}`}
                              >
                                <Minus size={10} />
                              </button>
                              <span className="w-5 text-center text-sm font-mono">
                                {c.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQty(c.item.id, 1)}
                                className="w-6 h-6 rounded border border-border flex items-center justify-center hover:bg-muted transition-smooth"
                                aria-label="Increase quantity"
                                data-ocid={`order.increase_qty.${i + 1}`}
                              >
                                <Plus size={10} />
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQty(c.item.id, -c.quantity)
                                }
                                className="w-6 h-6 rounded text-destructive hover:bg-destructive/10 flex items-center justify-center transition-smooth"
                                aria-label="Remove item"
                                data-ocid={`order.remove_item.${i + 1}`}
                              >
                                <Trash2 size={10} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {cart.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-border">
                        <div className="flex justify-between">
                          <span className="font-body font-semibold text-foreground text-sm">
                            {t(language, "totalAmount")}
                          </span>
                          <span className="text-primary font-display font-bold">
                            ₹{total.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {error && (
                <p
                  className="text-destructive text-sm mt-4"
                  data-ocid="order.error_state"
                >
                  {error}
                </p>
              )}

              <div className="flex justify-end mt-8">
                <Button
                  type="button"
                  onClick={goNext}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  disabled={cart.length === 0}
                  data-ocid="order.next_step_button"
                >
                  {language === "ar"
                    ? "التالي"
                    : language === "ta"
                      ? "அடுத்து"
                      : "Next"}
                  <ChevronRight size={16} />
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Customer Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 40 : -40 }}
            >
              <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-8 space-y-6">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {language === "ar"
                    ? "بياناتك الشخصية"
                    : language === "ta"
                      ? "உங்கள் விவரங்கள்"
                      : "Your Details"}
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label
                      htmlFor="customer-name"
                      className="text-foreground mb-1.5 block"
                    >
                      {t(language, "atName")} *
                    </Label>
                    <Input
                      id="customer-name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Name"
                      required
                      data-ocid="order.name_input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contact"
                      className="text-foreground mb-1.5 block"
                    >
                      {t(language, "contactNumber")} *
                    </Label>
                    <Input
                      id="contact"
                      type="tel"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="Fill ur Contact Number"
                      required
                      data-ocid="order.contact_input"
                    />
                  </div>

                  {/* Payment */}
                  <div>
                    <Label className="text-foreground mb-2 block">
                      {t(language, "paymentMethod")}
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[PaymentMethod.cod, PaymentMethod.qr].map((pm) => (
                        <button
                          key={pm}
                          type="button"
                          onClick={() => setPaymentMethod(pm)}
                          data-ocid={`order.payment_${pm}_toggle`}
                          className={`py-3 px-4 rounded-xl border text-sm font-body transition-smooth ${
                            paymentMethod === pm
                              ? "border-primary bg-primary/10 text-primary shadow-sm"
                              : "border-border text-muted-foreground hover:border-primary/40"
                          }`}
                        >
                          {pm === PaymentMethod.cod
                            ? t(language, "codPayment")
                            : t(language, "qrPayment")}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="notes"
                      className="text-foreground mb-1.5 block"
                    >
                      {t(language, "notes")}
                    </Label>
                    <Textarea
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={t(language, "notesPlaceholder")}
                      rows={3}
                      data-ocid="order.notes_textarea"
                    />
                  </div>
                </div>

                {error && (
                  <p
                    className="text-destructive text-sm"
                    data-ocid="order.error_state"
                  >
                    {error}
                  </p>
                )}
              </div>

              <div className="flex justify-between mt-8 max-w-lg mx-auto">
                <Button
                  type="button"
                  variant="outline"
                  onClick={goPrev}
                  className="gap-2 border-border"
                  data-ocid="order.prev_step_button"
                >
                  <ChevronLeft size={16} />
                  {language === "ar"
                    ? "السابق"
                    : language === "ta"
                      ? "முந்தைய"
                      : "Back"}
                </Button>
                <Button
                  type="button"
                  onClick={goNext}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  data-ocid="order.next_step_button"
                >
                  {language === "ar"
                    ? "مراجعة الطلب"
                    : language === "ta"
                      ? "ஆர்டர் மதிப்பாய்"
                      : "Review Order"}
                  <ChevronRight size={16} />
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Review & Confirm */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 40 : -40 }}
            >
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="bg-card border border-border rounded-2xl p-8 space-y-5">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {language === "ar"
                      ? "مراجعة طلبك"
                      : language === "ta"
                        ? "உங்கள் ஆர்டரை மதிப்பாய்வு செய்யுங்கள்"
                        : "Review Your Order"}
                  </h2>

                  {/* Customer info */}
                  <div className="bg-muted/30 rounded-xl p-4 space-y-2 border border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {t(language, "atName")}
                      </span>
                      <span className="text-foreground font-semibold">
                        {customerName}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {t(language, "contactNumber")}
                      </span>
                      <span className="text-foreground font-semibold">
                        {contactNumber}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {t(language, "paymentMethod")}
                      </span>
                      <span className="text-foreground font-semibold">
                        {paymentMethod === PaymentMethod.cod
                          ? t(language, "codPayment")
                          : t(language, "qrPayment")}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  {/* Cart items */}
                  <div className="space-y-3">
                    <h3 className="font-body font-semibold text-foreground text-sm uppercase tracking-wide">
                      {t(language, "orderItems")}
                    </h3>
                    {cart.map((c, i) => {
                      const unitPrice =
                        c.item.price !== undefined ? Number(c.item.price) : 0;
                      return (
                        <div
                          key={c.item.id.toString()}
                          className="flex items-center justify-between gap-3"
                          data-ocid={`order.review_item.${i + 1}`}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-foreground truncate">
                              {c.item.name[language] || c.item.name.en}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {c.quantity} × ₹
                              {unitPrice.toLocaleString("en-IN")}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-primary shrink-0">
                            ₹{(unitPrice * c.quantity).toLocaleString("en-IN")}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-foreground text-lg">
                      {t(language, "totalAmount")}
                    </span>
                    <span className="font-display font-bold text-primary text-2xl">
                      ₹{total.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {notes && (
                    <div className="text-sm text-muted-foreground bg-muted/20 rounded-lg p-3 border border-border">
                      <span className="font-semibold text-foreground">
                        {t(language, "notes")}:
                      </span>{" "}
                      {notes}
                    </div>
                  )}

                  {error && (
                    <p
                      className="text-destructive text-sm"
                      data-ocid="order.error_state"
                    >
                      {error}
                    </p>
                  )}
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={goPrev}
                    className="gap-2 border-border"
                    data-ocid="order.prev_step_button"
                  >
                    <ChevronLeft size={16} />
                    {language === "ar"
                      ? "السابق"
                      : language === "ta"
                        ? "முந்தைய"
                        : "Back"}
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 min-w-[160px]"
                    disabled={placeOrderMutation.isPending}
                    data-ocid="order.submit_button"
                  >
                    {placeOrderMutation.isPending
                      ? language === "ar"
                        ? "جارٍ الإرسال..."
                        : language === "ta"
                          ? "சமர்பிக்கிறது..."
                          : "Placing..."
                      : t(language, "placeOrder")}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
