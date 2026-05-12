import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import { CheckCircle, Clock, MapPin, Phone, User } from "lucide-react";
import { motion } from "motion/react";
import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";
import { IslamicPattern } from "../components/IslamicPattern";
import { useLanguage } from "../contexts/LanguageContext";
import { useGetOrder } from "../hooks/useOrders";
import { t } from "../translations";
import { OrderStatus, PaymentMethod } from "../types";

const STATUS_STEPS = [
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

const STATUS_COLORS = {
  [OrderStatus.placed]:
    "bg-secondary/30 text-secondary-foreground border-secondary/30",
  [OrderStatus.beingPrepared]:
    "bg-accent/30 text-accent-foreground border-accent/30",
  [OrderStatus.ready]: "bg-primary/20 text-primary border-primary/40",
  [OrderStatus.delivered]: "bg-primary/30 text-primary border-primary/50",
} as const;

function QRPaymentBlock({
  orderId,
  total,
  customerName,
}: {
  orderId: string;
  total: bigint;
  customerName: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [generated, setGenerated] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const paymentData = `RFF Catering Payment\nOrder: #${orderId}\nCustomer: ${customerName}\nAmount: INR ${Number(total)}\nUPI: rffcatering@upi\nThiru Vi Ka Nagar, Perambur, Chennai 600011`;
    QRCode.toCanvas(canvasRef.current, paymentData, {
      width: 220,
      margin: 2,
      color: { dark: "#1a2e1a", light: "#fffef5" },
    })
      .then(() => setGenerated(true))
      .catch(console.error);
  }, [orderId, total, customerName]);

  return (
    <div className="bg-muted/20 rounded-2xl p-6 border border-border text-center space-y-4">
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary text-base">⬜</span>
        </div>
        <h3 className="font-display font-semibold text-foreground">
          Scan QR to Pay
        </h3>
      </div>

      <div className="relative inline-block">
        {!generated && (
          <div className="w-[220px] h-[220px] flex items-center justify-center bg-muted rounded-xl">
            <Skeleton className="w-[200px] h-[200px] rounded" />
          </div>
        )}
        <canvas
          ref={canvasRef}
          className={`rounded-xl shadow-lg mx-auto ${
            generated ? "block" : "hidden"
          }`}
          data-ocid="invoice.qr_canvas"
        />
      </div>

      <div className="space-y-1">
        <p className="text-sm font-semibold text-foreground">
          UPI: rffcatering@upi
        </p>
        <p className="text-xs text-muted-foreground">
          Scan with any UPI app — GPay, PhonePe, Paytm, or BHIM
        </p>
        <p className="text-xs text-muted-foreground arabic-text">
          ادفع باستخدام رمز QR
        </p>
      </div>

      <div className="bg-primary/10 rounded-xl px-4 py-2 border border-primary/20">
        <p className="text-primary font-display font-bold text-xl">
          ₹{Number(total).toLocaleString("en-IN")}
        </p>
        <p className="text-xs text-muted-foreground">Total amount to pay</p>
      </div>
    </div>
  );
}

function CodBlock() {
  return (
    <div className="bg-muted/20 rounded-2xl p-6 border border-border text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto">
        <span className="text-3xl">💵</span>
      </div>
      <div className="space-y-1">
        <h3 className="font-display font-semibold text-foreground text-lg">
          Cash on Delivery
        </h3>
        <p className="text-muted-foreground text-sm">
          Pay at the time of delivery. Keep the exact change ready.
        </p>
        <p className="text-xs text-muted-foreground arabic-text">
          الدفع عند الاستلام
        </p>
        <p className="text-xs text-muted-foreground">
          பணமாக டெலிவரி நேரத்தில் செலுத்துங்கள்
        </p>
      </div>
    </div>
  );
}

export default function InvoicePage() {
  const { orderId } = useParams({ from: "/order/$orderId" });
  const { language } = useLanguage();
  const orderIdBigInt = BigInt(orderId);
  const { data: order, isLoading, isError } = useGetOrder(orderIdBigInt);

  const currentStatus = order?.status ?? OrderStatus.placed;
  const currentStep = STATUS_STEPS.indexOf(currentStatus);
  const isQR = order?.paymentMethod === PaymentMethod.qr;

  const formattedDate = order
    ? new Date(Number(order.createdAt) / 1_000_000).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        },
      )
    : new Date().toLocaleDateString();

  return (
    <div data-ocid="invoice.page">
      {/* Header */}
      <section className="bg-card border-b border-border py-8 relative overflow-hidden">
        <IslamicPattern opacity={0.07} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="text-primary" size={36} />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-1">
              {t(language, "invoiceTitle")}
            </h1>
            <p className="text-muted-foreground">
              {t(language, "orderNumber")}
              {orderId}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-2xl">
        {isLoading ? (
          <div className="space-y-4" data-ocid="invoice.loading_state">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-16 w-full rounded-xl" />
            ))}
          </div>
        ) : isError || !order ? (
          <div className="text-center py-16" data-ocid="invoice.error_state">
            <p className="text-muted-foreground mb-4">
              Order not found. Please check the order ID.
            </p>
            <Link to="/order">
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Place a New Order
              </Button>
            </Link>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Status badge */}
            <div className="flex justify-center">
              <Badge
                className={`text-sm px-4 py-1.5 border ${STATUS_COLORS[currentStatus]}`}
                data-ocid="invoice.status_badge"
              >
                {t(language, STATUS_KEYS[currentStatus])}
              </Badge>
            </div>

            {/* Main Invoice Card */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Green header strip */}
              <div className="bg-primary/15 border-b border-border px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {t(language, "orderNumber")}
                    </p>
                    <p className="font-display font-bold text-foreground text-xl">
                      #{orderId}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {t(language, "orderDate")}
                    </p>
                    <p className="text-sm text-foreground font-semibold">
                      {formattedDate}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Customer details */}
                <div className="space-y-2">
                  <h3 className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground">
                    {t(language, "customerName")}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-muted/20 rounded-lg px-3 py-2 border border-border">
                      <User size={14} className="text-primary shrink-0" />
                      <span className="text-sm text-foreground font-semibold truncate">
                        {order.customerName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/20 rounded-lg px-3 py-2 border border-border">
                      <Phone size={14} className="text-primary shrink-0" />
                      <span className="text-sm text-foreground font-semibold truncate">
                        {order.contactNumber}
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Items */}
                <div>
                  <h3 className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    {t(language, "orderItems")}
                  </h3>
                  <div className="space-y-2">
                    {order.items.map((item, i) => (
                      <div
                        key={`${item.menuItemId.toString()}-${i}`}
                        className="flex items-center justify-between gap-3 py-2"
                        data-ocid={`invoice.item.${i + 1}`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground font-medium truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.quantity.toString()} × ₹
                            {Number(item.unitPrice).toLocaleString("en-IN")}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-primary shrink-0">
                          ₹
                          {(
                            Number(item.unitPrice) * Number(item.quantity)
                          ).toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">
                      ₹{Number(order.totalPrice).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="text-primary font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="font-display font-bold text-foreground text-base">
                      {t(language, "totalAmount")}
                    </span>
                    <span className="font-display font-bold text-primary text-2xl">
                      ₹{Number(order.totalPrice).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {order.notes && (
                  <div className="bg-muted/20 rounded-lg p-3 border border-border text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {t(language, "notes")}:
                    </span>{" "}
                    {order.notes}
                  </div>
                )}
              </div>
            </div>

            {/* Payment Section */}
            {isQR ? (
              <QRPaymentBlock
                orderId={orderId}
                total={order.totalPrice}
                customerName={order.customerName}
              />
            ) : (
              <CodBlock />
            )}

            {/* Status Tracker */}
            <div
              className="bg-card border border-border rounded-2xl p-5"
              data-ocid="invoice.status_tracker"
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-primary" />
                <h2 className="font-display text-base font-semibold text-foreground">
                  {t(language, "orderStatus")}
                </h2>
              </div>
              <div className="flex items-start justify-between gap-1">
                {STATUS_STEPS.map((step, i) => {
                  const isPast = i <= currentStep;
                  const isCurrent = i === currentStep;
                  return (
                    <div
                      key={step}
                      className="flex flex-col items-center flex-1 relative"
                    >
                      {i < STATUS_STEPS.length - 1 && (
                        <div
                          className={`absolute top-4 left-1/2 w-full h-0.5 transition-smooth ${
                            isPast && i < currentStep
                              ? "bg-primary"
                              : "bg-border"
                          }`}
                          style={{ left: "50%", width: "100%" }}
                        />
                      )}
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 relative transition-smooth ${
                          isPast
                            ? "bg-primary border-primary text-primary-foreground"
                            : "bg-muted border-border text-muted-foreground"
                        }`}
                      >
                        {isPast ? "✓" : i + 1}
                      </div>
                      <p
                        className={`text-[10px] text-center mt-1.5 max-w-[60px] leading-tight ${
                          isCurrent
                            ? "text-primary font-semibold"
                            : isPast
                              ? "text-foreground"
                              : "text-muted-foreground"
                        }`}
                      >
                        {t(language, STATUS_KEYS[step])}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 bg-muted/20 rounded-xl p-4 border border-border">
              <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground">
                  RFF Catering Service
                </p>
                <p className="text-muted-foreground">
                  {t(language, "locationAddress")}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <Link to="/status" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10"
                  data-ocid="invoice.track_button"
                >
                  {t(language, "trackYourOrder")}
                </Button>
              </Link>
              <Link to="/" className="flex-1">
                <Button
                  variant="secondary"
                  className="w-full"
                  data-ocid="invoice.home_button"
                >
                  {t(language, "home")}
                </Button>
              </Link>
            </div>

            {/* Islamic footer quote */}
            <div className="text-center py-2">
              <p className="arabic-text text-primary/70 text-sm font-display">
                بَارَكَ اللهُ فِيكُم
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                May Allah bless you · அல்லாஹ் உங்களை ஆசீர்வதிக்கட்டும்
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
