import { c as createLucideIcon, u as useLanguage, a as useNavigate, r as reactExports, j as jsxRuntimeExports, I as IslamicPattern, t } from "./index-DhBLjtS6.js";
import { B as Badge } from "./badge-BVogwwd4.js";
import { B as Button } from "./button-D9mkWWJk.js";
import { L as Label, I as Input } from "./label-OK4AqW0t.js";
import { S as Separator } from "./separator-BccYPYX0.js";
import { P as PaymentMethod, M as MenuCategory, S as Skeleton } from "./index-BnvbteiL.js";
import { P as Plus, T as Trash2, a as Textarea } from "./textarea-0vUaDYff.js";
import { F as FoodCard, S as ShoppingCart, C as ChevronRight } from "./FoodCard-QqtJ-Yrg.js";
import { u as useMenuItems } from "./useMenu-DK9vAEK0.js";
import { u as usePlaceOrder } from "./useOrders-C-Bg32Im.js";
import { m as motion } from "./proxy-DF-rmAHk.js";
import { A as AnimatePresence } from "./index-P1hyeBak.js";
import "./index-DVd_r5ne.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode);
const STEP_LABELS_EN = ["Select Items", "Your Details", "Review & Pay"];
const STEP_LABELS_AR = ["اختر الأصناف", "بياناتك", "مراجعة ودفع"];
const STEP_LABELS_TA = ["பொருட்கள் தேர்வு", "உங்கள் விவரங்கள்", "மதிப்பாய்வு & கட்டணம்"];
function OrderPage() {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const { data: menuItems, isLoading } = useMenuItems();
  const placeOrderMutation = usePlaceOrder();
  const [step, setStep] = reactExports.useState(1);
  const [cart, setCart] = reactExports.useState([]);
  const [customerName, setCustomerName] = reactExports.useState("");
  const [contactNumber, setContactNumber] = reactExports.useState("");
  const [paymentMethod, setPaymentMethod] = reactExports.useState(
    PaymentMethod.cod
  );
  const [notes, setNotes] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const stepLabels = language === "ar" ? STEP_LABELS_AR : language === "ta" ? STEP_LABELS_TA : STEP_LABELS_EN;
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing)
        return prev.map(
          (c) => c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      return [...prev, { item, quantity: 1 }];
    });
  };
  const updateQty = (id, delta) => {
    setCart(
      (prev) => prev.map(
        (c) => c.item.id === id ? { ...c, quantity: c.quantity + delta } : c
      ).filter((c) => c.quantity > 0)
    );
  };
  const total = cart.reduce((sum, c) => {
    const price = c.item.price !== void 0 ? Number(c.item.price) : 0;
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
    if (step > 1) setStep((s) => s - 1);
  };
  const handleSubmit = async (e) => {
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
          quantity: BigInt(c.quantity)
        }))
      });
      navigate({
        to: "/order/$orderId",
        params: { orderId: order.orderId.toString() }
      });
    } catch {
      setError(t(language, "orderError"));
    }
  };
  const SEED_ITEMS = [
    {
      id: BigInt(1),
      name: {
        en: "Chicken Dum Biryani",
        ar: "برياني دجاج دم",
        ta: "சிக்கன் தம் பிரியாணி"
      },
      description: {
        en: "Slow-cooked aromatic basmati rice with tender chicken — 1 kg",
        ar: "أرز بسمتي مطبوخ ببطء مع دجاج طري",
        ta: "மெல்லிய பாஸ்மதி சாதம், மசாலாவுடன்"
      },
      price: BigInt(1400),
      imageUrl: "/assets/images/chicken-dum-biryani.jpg",
      category: MenuCategory.biryani,
      isAvailable: true
    },
    {
      id: BigInt(2),
      name: {
        en: "Mutton Biryani",
        ar: "برياني لحم الضأن",
        ta: "மட்டன் பிரியாணி"
      },
      description: {
        en: "Rich slow-cooked mutton on fragrant long-grain rice — 1 kg",
        ar: "لحم ضأن مطبوخ ببطء على أرز معطر",
        ta: "சுவையான மட்டன் பிரியாணி"
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
        en: "Classic Hyderabadi-style chicken biryani — 1 kg",
        ar: "برياني دجاج كلاسيكي",
        ta: "கிளாசிக் சிக்கன் பிரியாணி"
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
        en: "South Indian rice cooked in coconut milk with vegetables",
        ar: "أرز جنوب هندي مطبوخ في حليب جوز الهند",
        ta: "தென்னிந்திய தேங்காய் பால் பிரிஞ்சி"
      },
      price: void 0,
      imageUrl: "/assets/images/veg-birinji.jpeg",
      category: MenuCategory.rice,
      isAvailable: true
    },
    {
      id: BigInt(5),
      name: {
        en: "Kesari (Orange)",
        ar: "كيساري برتقالي",
        ta: "கேசரி (ஆரஞ்சு)"
      },
      description: {
        en: "Semolina sweet in saffron orange with ghee and cardamom",
        ar: "حلوى سميد برتقالية مع الزعفران والهيل",
        ta: "ஆரஞ்சு கேசரி, நெய் மற்றும் ஏலக்காயுடன்"
      },
      price: void 0,
      imageUrl: "/assets/images/kesari-orange.jpeg",
      category: MenuCategory.sweets,
      isAvailable: true
    },
    {
      id: BigInt(7),
      name: { en: "Bread Halwa", ar: "حلوى الخبز", ta: "பிரெட் அல்வா" },
      description: {
        en: "Bread pudding fried in ghee with nuts and rose water",
        ar: "حلوى خبز فاخرة مع المكسرات وماء الورد",
        ta: "நெய்யில் வறுத்த பிரெட் அல்வா"
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
        en: "Cool yoghurt dip with onions, coriander, and cumin",
        ar: "زبادي بارد مع بصل وكزبرة وكمون",
        ta: "குளிர்ந்த தயிர் டிப், வெங்காயம் மற்றும் சீரகம்"
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
        en: "Creamy yoghurt relish with cucumber, mustard seeds, and coconut",
        ar: "توابل زبادي كريمي مع الخيار وبذور الخردل",
        ta: "தேங்காயுடன் தயிர் பச்சடி"
      },
      price: void 0,
      imageUrl: "/assets/generated/thair-pachadi.dim_600x450.jpg",
      category: MenuCategory.sides,
      isAvailable: true
    }
  ];
  const baseItems = menuItems && menuItems.length > 0 ? menuItems : SEED_ITEMS;
  const availableItems = baseItems.filter((item) => item.isAvailable);
  const cartIds = new Set(cart.map((c) => c.item.id.toString()));
  const categories = [
    MenuCategory.biryani,
    MenuCategory.rice,
    MenuCategory.sides,
    MenuCategory.sweets,
    MenuCategory.other
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "order.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border-b border-border py-10 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IslamicPattern, { opacity: 0.07 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "arabic-text text-primary text-2xl font-display mb-1", children: "أول بأول" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold text-foreground mb-2", children: t(language, "orderTitle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: t(language, "orderSubtitle") })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-0 mb-10", children: stepLabels.map((label, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === step;
        const isDone = stepNum < step;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-smooth ${isActive ? "bg-primary border-primary text-primary-foreground" : isDone ? "bg-primary/20 border-primary text-primary" : "bg-muted border-border text-muted-foreground"}`,
                children: isDone ? "✓" : stepNum
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-xs mt-1 max-w-[80px] text-center leading-tight hidden sm:block ${isActive ? "text-primary font-semibold" : "text-muted-foreground"}`,
                children: label
              }
            )
          ] }),
          i < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-16 h-0.5 mx-1 mb-4 sm:mb-0 ${isDone ? "bg-primary" : "bg-border"}`
            }
          )
        ] }, label);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: isRTL ? 40 : -40 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: isRTL ? -40 : 40 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground mb-4", children: language === "ar" ? "اختر أصنافك" : language === "ta" ? "உணவுகளை தேர்வு செய்யுங்கள்" : "Choose Your Items" }),
                  isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-xl" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: categories.map((cat) => {
                    const catItems = availableItems.filter(
                      (i) => i.category === cat
                    );
                    if (catItems.length === 0) return null;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs uppercase tracking-widest font-body font-semibold mb-2 border-b border-border pb-1", children: t(
                        language,
                        cat
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: catItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FoodCard,
                        {
                          item,
                          index: i + 1,
                          onAddToCart: addToCart,
                          inCart: cartIds.has(item.id.toString())
                        },
                        item.id.toString()
                      )) })
                    ] }, cat);
                  }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 sticky top-28", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18, className: "text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: t(language, "orderItems") }),
                    cart.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary text-primary-foreground ml-auto", children: cart.reduce((s, c) => s + c.quantity, 0) })
                  ] }),
                  cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-muted-foreground text-sm text-center py-6",
                      "data-ocid": "order.empty_state",
                      children: t(language, "emptyCart")
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-64 overflow-y-auto", children: cart.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2",
                      "data-ocid": `order.cart_item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground flex-1 truncate min-w-0", children: c.item.name[language] || c.item.name.en }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => updateQty(c.item.id, -1),
                              className: "w-6 h-6 rounded border border-border flex items-center justify-center hover:bg-muted transition-smooth",
                              "aria-label": "Decrease quantity",
                              "data-ocid": `order.decrease_qty.${i + 1}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 10 })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 text-center text-sm font-mono", children: c.quantity }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => updateQty(c.item.id, 1),
                              className: "w-6 h-6 rounded border border-border flex items-center justify-center hover:bg-muted transition-smooth",
                              "aria-label": "Increase quantity",
                              "data-ocid": `order.increase_qty.${i + 1}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 10 })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => updateQty(c.item.id, -c.quantity),
                              className: "w-6 h-6 rounded text-destructive hover:bg-destructive/10 flex items-center justify-center transition-smooth",
                              "aria-label": "Remove item",
                              "data-ocid": `order.remove_item.${i + 1}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 10 })
                            }
                          )
                        ] })
                      ]
                    },
                    c.item.id.toString()
                  )) }),
                  cart.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body font-semibold text-foreground text-sm", children: t(language, "totalAmount") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-display font-bold", children: [
                      "₹",
                      total.toLocaleString("en-IN")
                    ] })
                  ] }) })
                ] }) })
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-destructive text-sm mt-4",
                  "data-ocid": "order.error_state",
                  children: error
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  onClick: goNext,
                  className: "bg-primary text-primary-foreground hover:bg-primary/90 gap-2",
                  disabled: cart.length === 0,
                  "data-ocid": "order.next_step_button",
                  children: [
                    language === "ar" ? "التالي" : language === "ta" ? "அடுத்து" : "Next",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                  ]
                }
              ) })
            ]
          },
          "step1"
        ),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: isRTL ? -40 : 40 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: isRTL ? 40 : -40 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto bg-card border border-border rounded-2xl p-8 space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground", children: language === "ar" ? "بياناتك الشخصية" : language === "ta" ? "உங்கள் விவரங்கள்" : "Your Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Label,
                      {
                        htmlFor: "customer-name",
                        className: "text-foreground mb-1.5 block",
                        children: [
                          t(language, "atName"),
                          " *"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "customer-name",
                        value: customerName,
                        onChange: (e) => setCustomerName(e.target.value),
                        placeholder: "Name",
                        required: true,
                        "data-ocid": "order.name_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Label,
                      {
                        htmlFor: "contact",
                        className: "text-foreground mb-1.5 block",
                        children: [
                          t(language, "contactNumber"),
                          " *"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "contact",
                        type: "tel",
                        value: contactNumber,
                        onChange: (e) => setContactNumber(e.target.value),
                        placeholder: "Fill ur Contact Number",
                        required: true,
                        "data-ocid": "order.contact_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground mb-2 block", children: t(language, "paymentMethod") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [PaymentMethod.cod, PaymentMethod.qr].map((pm) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setPaymentMethod(pm),
                        "data-ocid": `order.payment_${pm}_toggle`,
                        className: `py-3 px-4 rounded-xl border text-sm font-body transition-smooth ${paymentMethod === pm ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border text-muted-foreground hover:border-primary/40"}`,
                        children: pm === PaymentMethod.cod ? t(language, "codPayment") : t(language, "qrPayment")
                      },
                      pm
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "notes",
                        className: "text-foreground mb-1.5 block",
                        children: t(language, "notes")
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "notes",
                        value: notes,
                        onChange: (e) => setNotes(e.target.value),
                        placeholder: t(language, "notesPlaceholder"),
                        rows: 3,
                        "data-ocid": "order.notes_textarea"
                      }
                    )
                  ] })
                ] }),
                error && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-destructive text-sm",
                    "data-ocid": "order.error_state",
                    children: error
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-8 max-w-lg mx-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: goPrev,
                    className: "gap-2 border-border",
                    "data-ocid": "order.prev_step_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }),
                      language === "ar" ? "السابق" : language === "ta" ? "முந்தைய" : "Back"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    onClick: goNext,
                    className: "bg-primary text-primary-foreground hover:bg-primary/90 gap-2",
                    "data-ocid": "order.next_step_button",
                    children: [
                      language === "ar" ? "مراجعة الطلب" : language === "ta" ? "ஆர்டர் மதிப்பாய்" : "Review Order",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                    ]
                  }
                )
              ] })
            ]
          },
          "step2"
        ),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: isRTL ? -40 : 40 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: isRTL ? 40 : -40 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "max-w-lg mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground", children: language === "ar" ? "مراجعة طلبك" : language === "ta" ? "உங்கள் ஆர்டரை மதிப்பாய்வு செய்யுங்கள்" : "Review Your Order" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl p-4 space-y-2 border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t(language, "atName") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: customerName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t(language, "contactNumber") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: contactNumber })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t(language, "paymentMethod") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: paymentMethod === PaymentMethod.cod ? t(language, "codPayment") : t(language, "qrPayment") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-body font-semibold text-foreground text-sm uppercase tracking-wide", children: t(language, "orderItems") }),
                  cart.map((c, i) => {
                    const unitPrice = c.item.price !== void 0 ? Number(c.item.price) : 0;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center justify-between gap-3",
                        "data-ocid": `order.review_item.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground truncate", children: c.item.name[language] || c.item.name.en }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                              c.quantity,
                              " × ₹",
                              unitPrice.toLocaleString("en-IN")
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-primary shrink-0", children: [
                            "₹",
                            (unitPrice * c.quantity).toLocaleString("en-IN")
                          ] })
                        ]
                      },
                      c.item.id.toString()
                    );
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-lg", children: t(language, "totalAmount") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-primary text-2xl", children: [
                    "₹",
                    total.toLocaleString("en-IN")
                  ] })
                ] }),
                notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground bg-muted/20 rounded-lg p-3 border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                    t(language, "notes"),
                    ":"
                  ] }),
                  " ",
                  notes
                ] }),
                error && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-destructive text-sm",
                    "data-ocid": "order.error_state",
                    children: error
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: goPrev,
                    className: "gap-2 border-border",
                    "data-ocid": "order.prev_step_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }),
                      language === "ar" ? "السابق" : language === "ta" ? "முந்தைய" : "Back"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    className: "bg-primary text-primary-foreground hover:bg-primary/90 gap-2 min-w-[160px]",
                    disabled: placeOrderMutation.isPending,
                    "data-ocid": "order.submit_button",
                    children: placeOrderMutation.isPending ? language === "ar" ? "جارٍ الإرسال..." : language === "ta" ? "சமர்பிக்கிறது..." : "Placing..." : t(language, "placeOrder")
                  }
                )
              ] })
            ] })
          },
          "step3"
        )
      ] })
    ] })
  ] });
}
export {
  OrderPage as default
};
