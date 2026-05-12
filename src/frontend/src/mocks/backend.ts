import type { backendInterface } from "../backend";
import { MenuCategory, OrderStatus, PaymentMethod, UserRole } from "../backend";

const sampleMenuItems = [
  {
    id: BigInt(1),
    name: { ar: "برياني الدجاج", en: "Chicken Dum Biryani", ta: "சிக்கன் தம் பிரியாணி" },
    description: { ar: "برياني دجاج لذيذ", en: "Aromatic chicken biryani cooked dum style", ta: "சுவையான சிக்கன் பிரியாணி" },
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
    category: MenuCategory.biryani,
    isAvailable: true,
    price: BigInt(1400),
  },
  {
    id: BigInt(2),
    name: { ar: "برياني لحم الضأن", en: "Mutton Biryani", ta: "மட்டன் பிரியாணி" },
    description: { ar: "برياني لحم الضأن الشهي", en: "Rich and flavorful mutton biryani", ta: "சுவையான மட்டன் பிரியாணி" },
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
    category: MenuCategory.biryani,
    isAvailable: true,
    price: BigInt(2200),
  },
  {
    id: BigInt(3),
    name: { ar: "كيساري", en: "Kesari", ta: "கேசரி" },
    description: { ar: "حلوى كيساري البرتقالية", en: "Sweet semolina dessert with saffron", ta: "இனிப்பான கேசரி" },
    imageUrl: "https://images.unsplash.com/photo-1571167366136-b57e3c45b7e7?w=400",
    category: MenuCategory.sweets,
    isAvailable: true,
    price: BigInt(300),
  },
  {
    id: BigInt(4),
    name: { ar: "حلوى الخبز", en: "Bread Halwa", ta: "பிரட் அல்வா" },
    description: { ar: "حلوى الخبز الشهية", en: "Delicious bread halwa dessert", ta: "சுவையான பிரட் அல்வா" },
    imageUrl: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=400",
    category: MenuCategory.sweets,
    isAvailable: true,
    price: BigInt(350),
  },
];

const sampleOrder = {
  orderId: BigInt(1),
  customerName: "Ahmed Ali",
  contactNumber: "+91 9876543210",
  items: [
    {
      menuItemId: BigInt(1),
      name: "Chicken Dum Biryani",
      quantity: BigInt(2),
      unitPrice: BigInt(1400),
    },
  ],
  totalPrice: BigInt(2800),
  paymentMethod: PaymentMethod.cod,
  status: OrderStatus.placed,
  notes: "",
  createdAt: BigInt(Date.now()),
};

export const mockBackend: backendInterface = {
  addMenuItem: async (input) => ({
    id: BigInt(99),
    ...input,
    price: input.price ?? BigInt(0),
    isAvailable: true,
  }),
  assignCallerUserRole: async () => undefined,
  getAllOrders: async () => [sampleOrder],
  getCallerUserRole: async () => UserRole.guest,
  getMenuItem: async (id) => sampleMenuItems.find((m) => m.id === id) ?? null,
  getMenuItems: async () => sampleMenuItems,
  getOrderStatus: async () => OrderStatus.placed,
  isCallerAdmin: async () => false,
  placeOrder: async (input) => ({
    orderId: BigInt(2),
    customerName: input.customerName,
    contactNumber: input.contactNumber,
    items: input.items.map((i) => ({
      menuItemId: i.menuItemId,
      name: "Menu Item",
      quantity: i.quantity,
      unitPrice: BigInt(1400),
    })),
    totalPrice: BigInt(1400),
    paymentMethod: input.paymentMethod,
    status: OrderStatus.placed,
    notes: input.notes,
    createdAt: BigInt(Date.now()),
  }),
  removeMenuItem: async () => true,
  updateMenuItem: async (id, input) => ({
    id,
    ...input,
    price: input.price ?? BigInt(0),
    isAvailable: true,
  }),
  updateOrderStatus: async (orderId, status) => ({
    ...sampleOrder,
    orderId,
    status,
  }),
  _initializeAccessControl: async () => undefined,
};
