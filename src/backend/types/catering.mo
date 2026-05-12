import Common "common";

module {
  public type MenuCategory = {
    #biryani;
    #rice;
    #sides;
    #sweets;
    #other;
  };

  public type MenuItem = {
    id : Common.MenuItemId;
    name : Common.I18nText;
    description : Common.I18nText;
    price : ?Nat;  // null means TBD
    imageUrl : Text;
    category : MenuCategory;
    isAvailable : Bool;
  };

  public type PaymentMethod = {
    #qr;
    #cod;
  };

  public type OrderStatus = {
    #placed;
    #beingPrepared;
    #ready;
    #delivered;
  };

  public type OrderItem = {
    menuItemId : Common.MenuItemId;
    name : Text;  // snapshot of name at order time
    quantity : Nat;
    unitPrice : Nat;
  };

  public type Order = {
    orderId : Common.OrderId;
    customerName : Text;
    contactNumber : Text;
    items : [OrderItem];
    totalPrice : Nat;
    paymentMethod : PaymentMethod;
    status : OrderStatus;
    createdAt : Common.Timestamp;
    notes : Text;
  };

  // API input types (shared-safe, no mutable fields)
  public type NewMenuItemInput = {
    name : Common.I18nText;
    description : Common.I18nText;
    price : ?Nat;
    imageUrl : Text;
    category : MenuCategory;
    isAvailable : Bool;
  };

  public type PlaceOrderInput = {
    customerName : Text;
    contactNumber : Text;
    items : [{ menuItemId : Common.MenuItemId; quantity : Nat }];
    paymentMethod : PaymentMethod;
    notes : Text;
  };
}
