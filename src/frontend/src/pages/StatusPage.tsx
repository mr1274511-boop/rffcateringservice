import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearch } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChefHat,
  Clock,
  Package,
  RefreshCw,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { IslamicPattern } from "../components/IslamicPattern";
import { useLanguage } from "../contexts/LanguageContext";
import { useGetOrder, useOrderStatus } from "../hooks/useOrders";
import { t } from "../translations";
import { OrderStatus, PaymentMethod } from "../types";

const STATUS_STEPS: OrderStatus[] = [
  OrderStatus.placed,
  OrderStatus.beingPrepared,
  OrderStatus.ready,
  OrderStatus.delivered,
];

const STATUS_KEYS = {
  [OrderStatus.placed]: "statusPlaced",
  [OrderStatus.beingPrepared]: "statusBeingPrepared",
  [OrderStatus.ready]: "statusReady",
  [OrderStatus.delivered]: "statusDelivered",
} as const;

const STEP_ICONS = [Package, ChefHat, Clock, Truck];

const STEP_ARABIC = ["الطلب", "التحضير", "جاهز", "تسليم"];

export default function StatusPage() {
  const { language, isRTL } = useLanguage();
  const search = useSearch({ strict: false }) as { orderId?: string };

  const [inputId, setInputId] = useState(search.orderId ?? "");
  const [searchId, setSearchId] = useState<bigint | null>(
    search.orderId ? BigInt(search.orderId) : null,
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    data: status,
    isLoading: statusLoading,
    isError: statusError,
    dataUpdatedAt,
  } = useOrderStatus(searchId);

  const { data: order, isLoading: orderLoading } = useGetOrder(searchId);

  const isLoading = statusLoading || orderLoading;
  const currentStep = status ? STATUS_STEPS.indexOf(status) : -1;

  // Pre-fill from URL
  useEffect(() => {
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

  const notFound =
    !isLoading && searchId !== null && (statusError || status === null);
  const hasResult = !isLoading && status !== null && status !== undefined;

  return (
    <div data-ocid="status.page">
      {/* Header */}
      <section className="bg-card border-b border-border py-10 relative overflow-hidden">
        <IslamicPattern opacity={0.07} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="arabic-text text-primary text-2xl font-display mb-1 tracking-wide">
              تتبع طلبك
            </p>
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">
              {t(language, "trackYourOrder")}
            </h1>
            <p className="text-muted-foreground text-sm">
              {language === "ta"
                ? "உங்கள் ஆர்டர் நிலையை இங்கே கண்காணிக்கவும்"
                : language === "ar"
                  ? "تابع حالة طلبك هنا"
                  : "Check your order status in real-time"}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-2xl">
        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-sm"
        >
          <Label
            htmlFor="order-id"
            className="text-foreground mb-3 block font-semibold"
          >
            {t(language, "enterOrderId")}
          </Label>
          <div className={`flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Input
              id="order-id"
              ref={inputRef}
              type="number"
              min="1"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
              placeholder="e.g. 1001"
              className="flex-1"
              data-ocid="status.order_id_input"
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
            />
            <Button
              type="button"
              onClick={handleTrack}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              data-ocid="status.track_button"
            >
              {t(language, "trackBtn")}
            </Button>
          </div>
        </motion.div>

        {/* Loading state */}
        {isLoading && searchId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card border border-border rounded-2xl p-8 text-center"
            data-ocid="status.loading_state"
          >
            <div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">
              {language === "ta"
                ? "நிலையை சரிபார்க்கிறது..."
                : language === "ar"
                  ? "جارٍ التحقق من الحالة..."
                  : "Checking status..."}
            </p>
          </motion.div>
        )}

        {/* Error / Not found */}
        {notFound && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 text-center"
            data-ocid="status.error_state"
          >
            <p className="text-destructive font-semibold mb-1">
              {t(language, "orderNotFound")}
            </p>
            <p className="text-muted-foreground text-xs">
              {language === "ta"
                ? "ஆர்டர் ஐடி சரியாக உள்ளிடவும்."
                : language === "ar"
                  ? "تأكد من إدخال رقم الطلب بشكل صحيح."
                  : "Make sure you entered the correct Order ID."}
            </p>
          </motion.div>
        )}

        {/* Full result */}
        {hasResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="space-y-5"
            data-ocid="status.result"
          >
            {/* Visual stepper */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-base font-bold text-foreground">
                  {t(language, "orderStatus")}
                </h2>
                {dataUpdatedAt > 0 && (
                  <span
                    className="flex items-center gap-1 text-xs text-muted-foreground"
                    data-ocid="status.auto_refresh"
                  >
                    <RefreshCw size={11} className="text-primary" />
                    {t(language, "autoRefreshing")}
                  </span>
                )}
              </div>

              {/* Step indicators */}
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-border z-0 mx-8" />
                <div
                  className="absolute top-5 left-0 h-0.5 bg-primary z-0 mx-8 transition-all duration-700"
                  style={{
                    width: `calc(${(currentStep / (STATUS_STEPS.length - 1)) * 100}% - 4rem)`,
                  }}
                />
                <div className="relative z-10 flex justify-between">
                  {STATUS_STEPS.map((step, i) => {
                    const isPast = i <= currentStep;
                    const isCurrent = i === currentStep;
                    const Icon = STEP_ICONS[i];
                    return (
                      <div
                        key={step}
                        className="flex flex-col items-center gap-2"
                        data-ocid={`status.step.${i + 1}`}
                      >
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: isCurrent ? 1.15 : 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-smooth ${
                            isPast
                              ? "bg-primary border-primary text-primary-foreground shadow-md"
                              : "bg-muted border-border text-muted-foreground"
                          }`}
                        >
                          {isPast && i < currentStep ? (
                            <CheckCircle2 size={18} />
                          ) : (
                            <Icon size={16} />
                          )}
                        </motion.div>
                        <div className="text-center">
                          <p
                            className={`text-[10px] leading-tight max-w-[60px] font-medium ${
                              isCurrent
                                ? "text-primary font-bold"
                                : isPast
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                            }`}
                          >
                            {t(language, STATUS_KEYS[step])}
                          </p>
                          <p className="text-[9px] text-muted-foreground arabic-text mt-0.5">
                            {STEP_ARABIC[i]}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Current status badge */}
              <div className="mt-5 text-center">
                <Badge className="bg-primary/20 text-primary border border-primary/40 text-sm px-5 py-1.5 font-semibold">
                  {t(language, STATUS_KEYS[status])}
                </Badge>
                <p className="text-xs text-muted-foreground mt-2">
                  {t(language, "orderNumber")}
                  <span className="font-mono font-bold text-foreground ml-1">
                    {searchId?.toString()}
                  </span>
                </p>
              </div>
            </div>

            {/* Order details */}
            {orderLoading && (
              <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            )}

            {order && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4"
                data-ocid="status.order_details"
              >
                <h3 className="font-display font-bold text-foreground">
                  {t(language, "orderItemsTitle")}
                </h3>
                <Separator />

                {/* Items list */}
                <div className="space-y-2">
                  {order.items.map((item, i) => (
                    <div
                      key={`${item.menuItemId}-${i}`}
                      className="flex justify-between items-center text-sm"
                      data-ocid={`status.order_item.${i + 1}`}
                    >
                      <span className="text-foreground">
                        {item.name}
                        <span className="text-muted-foreground ml-1">
                          × {item.quantity.toString()}
                        </span>
                      </span>
                      <span className="font-mono font-semibold text-foreground">
                        ₹{(item.unitPrice * item.quantity).toString()}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Total + payment */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">
                      {t(language, "totalLabel")}
                    </span>
                    <span className="font-mono font-bold text-lg text-primary">
                      ₹{order.totalPrice.toString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">
                      {t(language, "paymentMethodLabel")}
                    </span>
                    <Badge
                      variant="outline"
                      className="border-primary/40 text-primary text-xs"
                    >
                      {order.paymentMethod === PaymentMethod.qr
                        ? t(language, "qrPaymentLabel")
                        : t(language, "codPaymentLabel")}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">
                      {t(language, "customerName")}
                    </span>
                    <span className="text-foreground font-medium">
                      {order.customerName}
                    </span>
                  </div>
                </div>

                {order.notes && (
                  <>
                    <Separator />
                    <p className="text-xs text-muted-foreground italic">
                      {order.notes}
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
