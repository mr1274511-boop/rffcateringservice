import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import {
  Edit,
  LogOut,
  Package,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Trash2,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { IslamicPattern } from "../components/IslamicPattern";
import { useLanguage } from "../contexts/LanguageContext";
import {
  useAddMenuItem,
  useMenuItems,
  useRemoveMenuItem,
  useUpdateMenuItem,
} from "../hooks/useMenu";
import { useAllOrders, useUpdateOrderStatus } from "../hooks/useOrders";
import { t } from "../translations";
import { MenuCategory, OrderStatus, PaymentMethod } from "../types";
import type { MenuItem, NewMenuItemInput, Order } from "../types";

const STATUS_LABELS: Record<OrderStatus, string> = {
  [OrderStatus.placed]: "Placed",
  [OrderStatus.beingPrepared]: "Preparing",
  [OrderStatus.ready]: "Ready",
  [OrderStatus.delivered]: "Delivered",
};

const STATUS_BADGE: Record<OrderStatus, string> = {
  [OrderStatus.placed]: "bg-primary/20 text-primary border-primary/40",
  [OrderStatus.beingPrepared]:
    "bg-secondary/30 text-foreground border-secondary/40",
  [OrderStatus.ready]: "bg-accent/20 text-foreground border-accent/30",
  [OrderStatus.delivered]: "bg-muted text-muted-foreground border-border",
};

const CATEGORY_LABELS: Record<MenuCategory, string> = {
  [MenuCategory.biryani]: "Biryani",
  [MenuCategory.rice]: "Rice",
  [MenuCategory.sides]: "Sides",
  [MenuCategory.sweets]: "Sweets",
  [MenuCategory.other]: "Other",
};

const emptyItemForm = (): NewMenuItemInput => ({
  name: { en: "", ar: "", ta: "" },
  description: { en: "", ar: "", ta: "" },
  price: undefined,
  imageUrl: "",
  category: MenuCategory.biryani,
  isAvailable: true,
});

// ─── Orders Tab ───────────────────────────────────────────────────────────────

function OrderRow({ order, index }: { order: Order; index: number }) {
  const updateStatus = useUpdateOrderStatus();
  const payLabel = order.paymentMethod === PaymentMethod.qr ? "QR" : "COD";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-card border border-border rounded-xl p-4 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
      data-ocid={`admin.order_row.${index}`}
    >
      {/* Left */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-display font-bold text-foreground">
            #{order.orderId.toString()}
          </span>
          <span className="text-foreground font-medium">
            {order.customerName}
          </span>
          <Badge variant="outline" className="text-[10px] font-mono">
            {payLabel}
          </Badge>
          <Badge className={`text-[10px] ${STATUS_BADGE[order.status]}`}>
            {STATUS_LABELS[order.status]}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs">{order.contactNumber}</p>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {order.items
            .map((item) => `${item.name} \u00d7${item.quantity}`)
            .join(" \u00b7 ")}
        </p>
        {order.notes && (
          <p className="text-muted-foreground text-xs italic">
            " {order.notes} "
          </p>
        )}
      </div>
      {/* Right */}
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
        <span className="text-primary font-bold font-display text-lg">
          ₹{Number(order.totalPrice).toLocaleString("en-IN")}
        </span>
        <Select
          value={order.status}
          onValueChange={(v) =>
            updateStatus.mutate({
              orderId: order.orderId,
              status: v as OrderStatus,
            })
          }
        >
          <SelectTrigger
            className="w-36 h-8 text-xs border-border/60"
            data-ocid={`admin.order_status_select.${index}`}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.values(OrderStatus).map((s) => (
              <SelectItem key={s} value={s}>
                {STATUS_LABELS[s]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
}

function OrdersTab({
  orders,
  loading,
  refetch,
}: {
  orders: Order[] | undefined;
  loading: boolean;
  refetch: () => void;
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (!orders) return [];
    return orders.filter((o) => {
      const matchSearch =
        !search ||
        o.customerName.toLowerCase().includes(search.toLowerCase()) ||
        o.orderId.toString().includes(search);
      const matchStatus = statusFilter === "all" || o.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [orders, search, statusFilter]);

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or order ID…"
            className="pl-8 h-9 text-sm"
            data-ocid="admin.orders_search_input"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger
            className="w-full sm:w-40 h-9 text-sm"
            data-ocid="admin.orders_status_filter"
          >
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {Object.values(OrderStatus).map((s) => (
              <SelectItem key={s} value={s}>
                {STATUS_LABELS[s]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => refetch()}
          className="h-9 gap-1.5 shrink-0"
          data-ocid="admin.refresh_orders_button"
        >
          <RefreshCw size={14} />
          Refresh
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">
          {filtered.length} order{filtered.length !== 1 ? "s" : ""}
        </span>
        {statusFilter !== "all" && (
          <Badge variant="outline" className="text-xs">
            {STATUS_LABELS[statusFilter as OrderStatus]}
          </Badge>
        )}
      </div>

      {loading ? (
        <div className="space-y-3" data-ocid="admin.orders_loading_state">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-28 w-full rounded-xl" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div
          className="text-center py-16 bg-card/50 border border-dashed border-border rounded-xl"
          data-ocid="admin.orders_empty_state"
        >
          <Package
            size={36}
            className="mx-auto text-muted-foreground/40 mb-3"
          />
          <p className="text-muted-foreground">
            {orders?.length === 0
              ? "No orders yet"
              : "No orders match your filter"}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((order, i) => (
            <OrderRow
              key={order.orderId.toString()}
              order={order}
              index={i + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Menu Item Form ───────────────────────────────────────────────────────────

function MenuItemForm({
  initial,
  onSave,
  onClose,
  saving,
}: {
  initial: NewMenuItemInput;
  onSave: (data: NewMenuItemInput) => void;
  onClose: () => void;
  saving: boolean;
}) {
  const [form, setForm] = useState<NewMenuItemInput>(initial);
  const [priceStr, setPriceStr] = useState(
    initial.price !== undefined ? Number(initial.price).toString() : "",
  );

  const set = <K extends keyof NewMenuItemInput>(
    key: K,
    val: NewMenuItemInput[K],
  ) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const price = priceStr
      ? BigInt(Math.round(Number.parseFloat(priceStr)))
      : undefined;
    onSave({ ...form, price });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 max-h-[70vh] overflow-y-auto pr-1"
    >
      {/* Name fields */}
      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          Item Name
        </legend>
        <div>
          <Label className="text-xs mb-1 block">English</Label>
          <Input
            value={form.name.en}
            onChange={(e) => set("name", { ...form.name, en: e.target.value })}
            placeholder="e.g. Chicken Dum Biryani"
            required
            className="text-sm"
            data-ocid="admin.edit_item.name_en_input"
          />
        </div>
        <div>
          <Label className="text-xs mb-1 block">عربي (Arabic)</Label>
          <Input
            value={form.name.ar}
            onChange={(e) => set("name", { ...form.name, ar: e.target.value })}
            placeholder="برياني الدجاج بالبخار"
            className="text-sm arabic-text"
            data-ocid="admin.edit_item.name_ar_input"
          />
        </div>
        <div>
          <Label className="text-xs mb-1 block">தமிழ் (Tamil)</Label>
          <Input
            value={form.name.ta}
            onChange={(e) => set("name", { ...form.name, ta: e.target.value })}
            placeholder="சிகன் தம் பிரியாணி"
            className="text-sm"
            data-ocid="admin.edit_item.name_ta_input"
          />
        </div>
      </fieldset>

      {/* Description fields */}
      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          Description
        </legend>
        <div>
          <Label className="text-xs mb-1 block">English</Label>
          <Textarea
            value={form.description.en}
            onChange={(e) =>
              set("description", { ...form.description, en: e.target.value })
            }
            placeholder="Short description…"
            rows={2}
            className="text-sm resize-none"
            data-ocid="admin.edit_item.desc_en_input"
          />
        </div>
        <div>
          <Label className="text-xs mb-1 block">عربي (Arabic)</Label>
          <Textarea
            value={form.description.ar}
            onChange={(e) =>
              set("description", { ...form.description, ar: e.target.value })
            }
            placeholder="وصف قصير…"
            rows={2}
            className="text-sm resize-none arabic-text"
            data-ocid="admin.edit_item.desc_ar_input"
          />
        </div>
        <div>
          <Label className="text-xs mb-1 block">தமிழ் (Tamil)</Label>
          <Textarea
            value={form.description.ta}
            onChange={(e) =>
              set("description", { ...form.description, ta: e.target.value })
            }
            placeholder="சுருக்கமான விளக்கம்…"
            rows={2}
            className="text-sm resize-none"
            data-ocid="admin.edit_item.desc_ta_input"
          />
        </div>
      </fieldset>

      {/* Price, category */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-xs mb-1.5 block">Price (₹)</Label>
          <Input
            type="number"
            value={priceStr}
            onChange={(e) => setPriceStr(e.target.value)}
            placeholder="e.g. 1400"
            min="0"
            className="text-sm"
            data-ocid="admin.edit_item.price_input"
          />
        </div>
        <div>
          <Label className="text-xs mb-1.5 block">Category</Label>
          <Select
            value={form.category}
            onValueChange={(v) => set("category", v as MenuCategory)}
          >
            <SelectTrigger
              className="text-sm h-9"
              data-ocid="admin.edit_item.category_select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.values(MenuCategory).map((c) => (
                <SelectItem key={c} value={c}>
                  {CATEGORY_LABELS[c]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Image URL */}
      <div>
        <Label className="text-xs mb-1.5 block">Image URL</Label>
        <Input
          value={form.imageUrl}
          onChange={(e) => set("imageUrl", e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="text-sm"
          data-ocid="admin.edit_item.image_url_input"
        />
      </div>

      {/* Availability */}
      <div className="flex items-center gap-3 py-1">
        <Switch
          id="item-available"
          checked={form.isAvailable}
          onCheckedChange={(checked) => set("isAvailable", checked)}
          data-ocid="admin.edit_item.availability_switch"
        />
        <Label htmlFor="item-available" className="text-sm cursor-pointer">
          Available for ordering
        </Label>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2 sticky bottom-0 bg-popover pb-1">
        <Button
          type="submit"
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold"
          disabled={saving}
          data-ocid="admin.edit_item.save_button"
        >
          {saving ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
              Saving…
            </span>
          ) : (
            "Save Changes"
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="flex-1"
          data-ocid="admin.edit_item.cancel_button"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

// ─── Menu Tab ─────────────────────────────────────────────────────────────────

function MenuTab({
  items,
  loading,
}: {
  items: MenuItem[] | undefined;
  loading: boolean;
}) {
  const addItem = useAddMenuItem();
  const updateItem = useUpdateMenuItem();
  const removeItem = useRemoveMenuItem();

  const [addOpen, setAddOpen] = useState(false);
  const [editItem, setEditItem] = useState<MenuItem | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<MenuItem | null>(null);

  const handleAdd = (data: NewMenuItemInput) => {
    addItem.mutate(data, {
      onSuccess: () => setAddOpen(false),
    });
  };

  const handleEdit = (data: NewMenuItemInput) => {
    if (!editItem) return;
    updateItem.mutate(
      { id: editItem.id, input: data },
      { onSuccess: () => setEditItem(null) },
    );
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    removeItem.mutate(deleteTarget.id, {
      onSuccess: () => setDeleteTarget(null),
    });
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          {items?.length ?? 0} item{(items?.length ?? 0) !== 1 ? "s" : ""}
        </span>
        <Button
          type="button"
          size="sm"
          className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 font-display"
          onClick={() => setAddOpen(true)}
          data-ocid="admin.add_menu_item_button"
        >
          <Plus size={14} />
          Add New Item
        </Button>
      </div>

      {loading ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          data-ocid="admin.menu_loading_state"
        >
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-xl" />
          ))}
        </div>
      ) : !items || items.length === 0 ? (
        <div
          className="text-center py-16 bg-card/50 border border-dashed border-border rounded-xl"
          data-ocid="admin.menu_empty_state"
        >
          <UtensilsCrossed
            size={36}
            className="mx-auto text-muted-foreground/40 mb-3"
          />
          <p className="text-muted-foreground">No menu items yet</p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-3"
            onClick={() => setAddOpen(true)}
            data-ocid="admin.menu_empty_add_button"
          >
            <Plus size={13} className="mr-1.5" /> Add First Item
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <MenuItemCard
              key={item.id.toString()}
              item={item}
              index={i + 1}
              onEdit={() => setEditItem(item)}
              onDelete={() => setDeleteTarget(item)}
            />
          ))}
        </div>
      )}

      {/* Add dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-lg" data-ocid="admin.add_item_dialog">
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              Add New Menu Item
            </DialogTitle>
          </DialogHeader>
          <MenuItemForm
            initial={emptyItemForm()}
            onSave={handleAdd}
            onClose={() => setAddOpen(false)}
            saving={addItem.isPending}
          />
        </DialogContent>
      </Dialog>

      {/* Edit dialog */}
      <Dialog open={!!editItem} onOpenChange={(o) => !o && setEditItem(null)}>
        <DialogContent className="max-w-lg" data-ocid="admin.edit_item_dialog">
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              Edit: {editItem?.name.en}
            </DialogTitle>
          </DialogHeader>
          {editItem && (
            <MenuItemForm
              initial={{
                name: editItem.name,
                description: editItem.description,
                price: editItem.price,
                imageUrl: editItem.imageUrl,
                category: editItem.category,
                isAvailable: editItem.isAvailable,
              }}
              onSave={handleEdit}
              onClose={() => setEditItem(null)}
              saving={updateItem.isPending}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <AlertDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
      >
        <AlertDialogContent data-ocid="admin.delete_confirm_dialog">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Menu Item?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete 
              <strong>{deleteTarget?.name.en}</strong>? This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="admin.delete_cancel_button">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              data-ocid="admin.delete_confirm_button"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function MenuItemCard({
  item,
  index,
  onEdit,
  onDelete,
}: {
  item: MenuItem;
  index: number;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-card border border-border rounded-xl p-4 flex items-center gap-3"
      data-ocid={`admin.menu_item_row.${index}`}
    >
      <img
        src={item.imageUrl || "/assets/images/placeholder.svg"}
        alt={item.name.en}
        className="w-14 h-14 rounded-lg object-cover shrink-0"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "/assets/images/placeholder.svg";
        }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-foreground font-medium text-sm truncate">
          {item.name.en}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <Badge variant="outline" className="text-[10px]">
            {CATEGORY_LABELS[item.category]}
          </Badge>
          {!item.isAvailable && (
            <Badge
              variant="outline"
              className="text-[10px] text-muted-foreground"
            >
              Unavailable
            </Badge>
          )}
        </div>
        <p className="text-primary text-xs font-display mt-1">
          {item.price !== undefined
            ? `₹${Number(item.price).toLocaleString("en-IN")}`
            : "Price not set"}
        </p>
      </div>
      <div className="flex gap-1 shrink-0">
        <button
          type="button"
          onClick={onEdit}
          className="p-2 rounded-lg hover:bg-muted transition-smooth text-muted-foreground hover:text-foreground"
          aria-label={`Edit ${item.name.en}`}
          data-ocid={`admin.edit_item_button.${index}`}
        >
          <Edit size={14} />
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="p-2 rounded-lg hover:bg-destructive/10 transition-smooth text-muted-foreground hover:text-destructive"
          aria-label={`Delete ${item.name.en}`}
          data-ocid={`admin.delete_item_button.${index}`}
        >
          <Trash2 size={14} />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Settings Tab ─────────────────────────────────────────────────────────────

function SettingsTab() {
  return (
    <div className="max-w-lg space-y-6" data-ocid="admin.settings_panel">
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h3 className="font-display text-base font-semibold text-foreground">
          Business Details
        </h3>
        <dl className="space-y-3 text-sm">
          {[
            ["Business Name", "RFF Catering Service"],
            ["Location", "Thiru Vi Ka Nagar, Perambur, Chennai – 600011"],
            ["Founder", "Gulam Rasool"],
            ["Co-Founders", "Fazila · Faiz · Lazeema · Khaleel · Asif"],
            ["Established", "2026 (15+ Years Experience)"],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-3">
              <dt className="text-muted-foreground w-32 shrink-0">{label}</dt>
              <dd className="text-foreground font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-display text-base font-semibold text-foreground mb-3">
          Admin Password
        </h3>
        <p className="text-sm text-muted-foreground">
          To change the admin password, update the{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
            ADMIN_PASSWORD
          </code>{" "}
          constant in{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
            AdminLoginPage.tsx
          </code>
          .
        </p>
      </div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export default function AdminDashboardPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const {
    data: orders,
    isLoading: ordersLoading,
    refetch: refetchOrders,
  } = useAllOrders();
  const { data: menuItems, isLoading: menuLoading } = useMenuItems();

  useEffect(() => {
    const auth = sessionStorage.getItem("rff-admin-auth");
    if (!auth) navigate({ to: "/admin/login" });
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("rff-admin-auth");
    navigate({ to: "/admin/login" });
  };

  const pendingCount =
    orders?.filter((o) => o.status !== OrderStatus.delivered).length ?? 0;

  return (
    <div className="min-h-screen bg-background" data-ocid="admin.page">
      {/* Top header */}
      <section className="bg-card border-b border-border py-5 sticky top-0 z-30 relative overflow-hidden">
        <IslamicPattern opacity={0.05} />
        <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
              <UtensilsCrossed size={16} className="text-primary" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground leading-tight">
                {t(language, "adminWelcome")}
              </h1>
              <p className="text-muted-foreground text-xs">
                RFF Catering Service
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-destructive/30 text-destructive hover:bg-destructive/10 gap-1.5"
            data-ocid="admin.logout_button"
          >
            <LogOut size={13} />
            {t(language, "logout")}
          </Button>
        </div>
      </section>

      {/* Stat strip */}
      <section className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-3 flex gap-6">
          {[
            ["Total Orders", String(orders?.length ?? 0)],
            ["Active", String(pendingCount)],
            ["Menu Items", String(menuItems?.length ?? 0)],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="text-xl font-display font-bold text-primary">
                {value}
              </p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="orders" data-ocid="admin.tabs">
          <TabsList className="mb-6 bg-card border border-border">
            <TabsTrigger
              value="orders"
              className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-display"
              data-ocid="admin.orders_tab"
            >
              <Package size={14} />
              {t(language, "orders")}
              {pendingCount > 0 && (
                <Badge className="ml-1 bg-primary/20 text-primary border-primary/30 text-[10px] px-1.5 py-0">
                  {pendingCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="menu"
              className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-display"
              data-ocid="admin.menu_tab"
            >
              <UtensilsCrossed size={14} />
              {t(language, "manageMenu")}
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-display"
              data-ocid="admin.settings_tab"
            >
              <Settings size={14} />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <OrdersTab
              orders={orders}
              loading={ordersLoading}
              refetch={refetchOrders}
            />
          </TabsContent>

          <TabsContent value="menu">
            <MenuTab items={menuItems} loading={menuLoading} />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
