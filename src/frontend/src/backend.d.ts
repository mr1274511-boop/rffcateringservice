import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    id: MenuItemId;
    name: I18nText;
    isAvailable: boolean;
    description: I18nText;
    imageUrl: string;
    category: MenuCategory;
    price?: bigint;
}
export type Timestamp = bigint;
export type MenuItemId = bigint;
export interface PlaceOrderInput {
    customerName: string;
    paymentMethod: PaymentMethod;
    notes: string;
    contactNumber: string;
    items: Array<{
        quantity: bigint;
        menuItemId: MenuItemId;
    }>;
}
export interface OrderItem {
    name: string;
    quantity: bigint;
    unitPrice: bigint;
    menuItemId: MenuItemId;
}
export interface NewMenuItemInput {
    name: I18nText;
    isAvailable: boolean;
    description: I18nText;
    imageUrl: string;
    category: MenuCategory;
    price?: bigint;
}
export interface Order {
    customerName: string;
    status: OrderStatus;
    paymentMethod: PaymentMethod;
    createdAt: Timestamp;
    orderId: OrderId;
    notes: string;
    contactNumber: string;
    items: Array<OrderItem>;
    totalPrice: bigint;
}
export type OrderId = bigint;
export interface I18nText {
    ar: string;
    en: string;
    ta: string;
}
export enum MenuCategory {
    other = "other",
    rice = "rice",
    sides = "sides",
    sweets = "sweets",
    biryani = "biryani"
}
export enum OrderStatus {
    placed = "placed",
    beingPrepared = "beingPrepared",
    delivered = "delivered",
    ready = "ready"
}
export enum PaymentMethod {
    qr = "qr",
    cod = "cod"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addMenuItem(input: NewMenuItemInput): Promise<MenuItem>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllOrders(): Promise<Array<Order>>;
    getCallerUserRole(): Promise<UserRole>;
    getMenuItem(id: MenuItemId): Promise<MenuItem | null>;
    getMenuItems(): Promise<Array<MenuItem>>;
    getOrderStatus(orderId: OrderId): Promise<OrderStatus | null>;
    isCallerAdmin(): Promise<boolean>;
    placeOrder(input: PlaceOrderInput): Promise<Order>;
    removeMenuItem(id: MenuItemId): Promise<boolean>;
    updateMenuItem(id: MenuItemId, input: NewMenuItemInput): Promise<MenuItem | null>;
    updateOrderStatus(orderId: OrderId, status: OrderStatus): Promise<Order | null>;
}
