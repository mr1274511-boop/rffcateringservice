export type Language = "en" | "ar" | "ta";

export interface I18nText {
  en: string;
  ar: string;
  ta: string;
}

export enum MenuCategory {
  other = "other",
  rice = "rice",
  sides = "sides",
  sweets = "sweets",
  biryani = "biryani",
}

export enum OrderStatus {
  placed = "placed",
  beingPrepared = "beingPrepared",
  delivered = "delivered",
  ready = "ready",
}

export enum PaymentMethod {
  qr = "qr",
  cod = "cod",
}

export interface MenuItem {
  id: bigint;
  name: I18nText;
  description: I18nText;
  price?: bigint;
  imageUrl: string;
  category: MenuCategory;
  isAvailable: boolean;
}

export interface OrderItem {
  menuItemId: bigint;
  name: string;
  quantity: bigint;
  unitPrice: bigint;
}

export interface Order {
  orderId: bigint;
  customerName: string;
  contactNumber: string;
  items: OrderItem[];
  totalPrice: bigint;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  createdAt: bigint;
  notes: string;
}

export interface PlaceOrderInput {
  customerName: string;
  contactNumber: string;
  paymentMethod: PaymentMethod;
  items: Array<{ menuItemId: bigint; quantity: bigint }>;
  notes: string;
}

export interface NewMenuItemInput {
  name: I18nText;
  description: I18nText;
  price?: bigint;
  imageUrl: string;
  category: MenuCategory;
  isAvailable: boolean;
}
