import { c as createLucideIcon, u as useLanguage, d as useSearch, r as reactExports, j as jsxRuntimeExports, I as IslamicPattern, t } from "./index-DhBLjtS6.js";
import { B as Badge } from "./badge-BVogwwd4.js";
import { B as Button } from "./button-D9mkWWJk.js";
import { L as Label, I as Input } from "./label-OK4AqW0t.js";
import { S as Separator } from "./separator-BccYPYX0.js";
import { O as OrderStatus, S as Skeleton, P as PaymentMethod } from "./index-BnvbteiL.js";
import { b as useOrderStatus, a as useGetOrder } from "./useOrders-C-Bg32Im.js";
import { m as motion } from "./proxy-DF-rmAHk.js";
import { R as RefreshCw, P as Package } from "./refresh-cw-DBxK2ZTu.js";
import { C as Clock } from "./clock-CLGd3T26.js";
import { T as Truck } from "./truck-Co82f0of.js";
import "./index-DVd_r5ne.js";
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
      d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
      key: "1qvrer"
    }
  ],
  ["path", { d: "M6 17h12", key: "1jwigz" }]
];
const ChefHat = createLucideIcon("chef-hat", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
const STATUS_STEPS = [
  OrderStatus.placed,
  OrderStatus.beingPrepared,
  OrderStatus.ready,
  OrderStatus.delivered
];
const STATUS_KEYS = {
  [OrderStatus.placed]: "statusPlaced",
  [OrderStatus.beingPrepared]: "statusBeingPrepared",
  [OrderStatus.ready]: "statusReady",
  [OrderStatus.delivered]: "statusDelivered"
};
const STEP_ICONS = [Package, ChefHat, Clock, Truck];
const STEP_ARABIC = ["الطلب", "التحضير", "جاهز", "تسليم"];
function StatusPage() {
  const { language, isRTL } = useLanguage();
  const search = useSearch({ strict: false });
  const [inputId, setInputId] = reactExports.useState(search.orderId ?? "");
  const [searchId, setSearchId] = reactExports.useState(
    search.orderId ? BigInt(search.orderId) : null
  );
  const inputRef = reactExports.useRef(null);
  const {
    data: status,
    isLoading: statusLoading,
    isError: statusError,
    dataUpdatedAt
  } = useOrderStatus(searchId);
  const { data: order, isLoading: orderLoading } = useGetOrder(searchId);
  const isLoading = statusLoading || orderLoading;
  const currentStep = status ? STATUS_STEPS.indexOf(status) : -1;
  reactExports.useEffect(() => {
    if (search.orderId && !searchId) {
      setInputId(search.orderId);
      setSearchId(BigInt(search.orderId));
    }
  }, [search.orderId, searchId]);
  const handleTrack = () => {
    const trimmed = inputId.trim();
    if (!trimmed) return;
    try {
      setSearchId(BigInt(trimmed));
    } catch {
      setSearchId(null);
    }
  };
  const notFound = !isLoading && searchId !== null && (statusError || status === null);
  const hasResult = !isLoading && status !== null && status !== void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "status.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border-b border-border py-10 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IslamicPattern, { opacity: 0.07 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "arabic-text text-primary text-2xl font-display mb-1 tracking-wide", children: "تتبع طلبك" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold text-foreground mb-2", children: t(language, "trackYourOrder") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: language === "ta" ? "உங்கள் ஆர்டர் நிலையை இங்கே கண்காணிக்கவும்" : language === "ar" ? "تابع حالة طلبك هنا" : "Check your order status in real-time" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "bg-card border border-border rounded-2xl p-6 mb-6 shadow-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "order-id",
                className: "text-foreground mb-3 block font-semibold",
                children: t(language, "enterOrderId")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "order-id",
                  ref: inputRef,
                  type: "number",
                  min: "1",
                  value: inputId,
                  onChange: (e) => setInputId(e.target.value),
                  placeholder: "e.g. 1001",
                  className: "flex-1",
                  "data-ocid": "status.order_id_input",
                  onKeyDown: (e) => e.key === "Enter" && handleTrack()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: handleTrack,
                  className: "bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth",
                  "data-ocid": "status.track_button",
                  children: t(language, "trackBtn")
                }
              )
            ] })
          ]
        }
      ),
      isLoading && searchId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "bg-card border border-border rounded-2xl p-8 text-center",
          "data-ocid": "status.loading_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: language === "ta" ? "நிலையை சரிபார்க்கிறது..." : language === "ar" ? "جارٍ التحقق من الحالة..." : "Checking status..." })
          ]
        }
      ),
      notFound && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.97 },
          animate: { opacity: 1, scale: 1 },
          className: "bg-destructive/10 border border-destructive/30 rounded-2xl p-6 text-center",
          "data-ocid": "status.error_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive font-semibold mb-1", children: t(language, "orderNotFound") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: language === "ta" ? "ஆர்டர் ஐடி சரியாக உள்ளிடவும்." : language === "ar" ? "تأكد من إدخال رقم الطلب بشكل صحيح." : "Make sure you entered the correct Order ID." })
          ]
        }
      ),
      hasResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.05 },
          className: "space-y-5",
          "data-ocid": "status.result",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-bold text-foreground", children: t(language, "orderStatus") }),
                dataUpdatedAt > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-1 text-xs text-muted-foreground",
                    "data-ocid": "status.auto_refresh",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 11, className: "text-primary" }),
                      t(language, "autoRefreshing")
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-5 left-0 right-0 h-0.5 bg-border z-0 mx-8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-5 left-0 h-0.5 bg-primary z-0 mx-8 transition-all duration-700",
                    style: {
                      width: `calc(${currentStep / (STATUS_STEPS.length - 1) * 100}% - 4rem)`
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex justify-between", children: STATUS_STEPS.map((step, i) => {
                  const isPast = i <= currentStep;
                  const isCurrent = i === currentStep;
                  const Icon = STEP_ICONS[i];
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-col items-center gap-2",
                      "data-ocid": `status.step.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { scale: 0.8 },
                            animate: { scale: isCurrent ? 1.15 : 1 },
                            transition: { type: "spring", stiffness: 300 },
                            className: `w-10 h-10 rounded-full border-2 flex items-center justify-center transition-smooth ${isPast ? "bg-primary border-primary text-primary-foreground shadow-md" : "bg-muted border-border text-muted-foreground"}`,
                            children: isPast && i < currentStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: `text-[10px] leading-tight max-w-[60px] font-medium ${isCurrent ? "text-primary font-bold" : isPast ? "text-foreground" : "text-muted-foreground"}`,
                              children: t(language, STATUS_KEYS[step])
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground arabic-text mt-0.5", children: STEP_ARABIC[i] })
                        ] })
                      ]
                    },
                    step
                  );
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/20 text-primary border border-primary/40 text-sm px-5 py-1.5 font-semibold", children: t(language, STATUS_KEYS[status]) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
                  t(language, "orderNumber"),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-foreground ml-1", children: searchId == null ? void 0 : searchId.toString() })
                ] })
              ] })
            ] }),
            orderLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-1/3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" })
            ] }),
            order && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1 },
                className: "bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4",
                "data-ocid": "status.order_details",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: t(language, "orderItemsTitle") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: order.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex justify-between items-center text-sm",
                      "data-ocid": `status.order_item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                          item.name,
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground ml-1", children: [
                            "× ",
                            item.quantity.toString()
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold text-foreground", children: [
                          "₹",
                          (item.unitPrice * item.quantity).toString()
                        ] })
                      ]
                    },
                    `${item.menuItemId}-${i}`
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: t(language, "totalLabel") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-lg text-primary", children: [
                        "₹",
                        order.totalPrice.toString()
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t(language, "paymentMethodLabel") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "border-primary/40 text-primary text-xs",
                          children: order.paymentMethod === PaymentMethod.qr ? t(language, "qrPaymentLabel") : t(language, "codPaymentLabel")
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t(language, "customerName") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: order.customerName })
                    ] })
                  ] }),
                  order.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: order.notes })
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  StatusPage as default
};
