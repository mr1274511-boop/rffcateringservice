import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import CateringLib "../lib/catering";
import Common "../types/common";
import Types "../types/catering";

mixin (
  accessControlState : AccessControl.AccessControlState,
  cateringState : CateringLib.State,
) {
  // ── Public: Menu Read ────────────────────────────────────────────────────────

  public query func getMenuItems() : async [Types.MenuItem] {
    CateringLib.getMenuItems(cateringState);
  };

  public query func getMenuItem(id : Common.MenuItemId) : async ?Types.MenuItem {
    CateringLib.getMenuItem(cateringState, id);
  };

  // ── Public: Orders ──────────────────────────────────────────────────────────

  public shared func placeOrder(input : Types.PlaceOrderInput) : async Types.Order {
    CateringLib.placeOrder(cateringState, input);
  };

  public query func getOrderStatus(orderId : Common.OrderId) : async ?Types.OrderStatus {
    CateringLib.getOrderStatus(cateringState, orderId);
  };

  // ── Admin: Menu CRUD ─────────────────────────────────────────────────────────

  public shared ({ caller }) func addMenuItem(input : Types.NewMenuItemInput) : async Types.MenuItem {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add menu items");
    };
    CateringLib.addMenuItem(cateringState, input);
  };

  public shared ({ caller }) func updateMenuItem(id : Common.MenuItemId, input : Types.NewMenuItemInput) : async ?Types.MenuItem {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update menu items");
    };
    CateringLib.updateMenuItem(cateringState, id, input);
  };

  public shared ({ caller }) func removeMenuItem(id : Common.MenuItemId) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can remove menu items");
    };
    CateringLib.removeMenuItem(cateringState, id);
  };

  // ── Admin: Orders ────────────────────────────────────────────────────────────

  public shared query ({ caller }) func getAllOrders() : async [Types.Order] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all orders");
    };
    CateringLib.getAllOrders(cateringState);
  };

  public shared ({ caller }) func updateOrderStatus(orderId : Common.OrderId, status : Types.OrderStatus) : async ?Types.Order {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update order status");
    };
    CateringLib.updateOrderStatus(cateringState, orderId, status);
  };
}
