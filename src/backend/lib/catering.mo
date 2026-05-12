import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Common "../types/common";
import Types "../types/catering";

module {
  public type State = {
    menuItems : Map.Map<Common.MenuItemId, Types.MenuItem>;
    orders : Map.Map<Common.OrderId, Types.Order>;
    counters : { var nextMenuItemId : Nat; var nextOrderId : Nat };
  };

  public func initState() : State {
    let menuItems = Map.empty<Common.MenuItemId, Types.MenuItem>();
    let counters = { var nextMenuItemId : Nat = 0; var nextOrderId : Nat = 0 };

    // Pre-populate 9 seed menu items
    let seeds : [(Text, Text, Text, ?Nat, Text, Types.MenuCategory)] = [
      ("Chicken Dum Biryani (1kg)", "دجاج دم بريياني", "சிக்கன் தம் பிரியாணி (1கிலோ)", ?1400, "/assets/chicken-dum-biryani.jpg", #biryani),
      ("Mutton Biryani",           "لحم خروف بريياني",   "மட்டன் பிரியாணி",           ?2200, "/assets/mutton-biryani.jpg",     #biryani),
      ("Veg Birinji",              "برياني نباتي",       "வெஜ் பிரிஞ்சி",              null,  "/assets/veg-birinji.jpg",        #rice),
      ("Thair Pachadi",            "ثيير باتشادي",       "தயிர் பச்சடி",               null,  "/assets/thair-pachadi.jpg",      #sides),
      ("Kesari (Orange)",          "كيساري برتقالي",     "கேசரி (ஆரஞ்சு)",            null,  "/assets/kesari-orange.jpg",      #sweets),
      ("Kesari (Yellow)",          "كيساري أصفر",        "கேசரி (மஞ்சள்)",            null,  "/assets/kesari-yellow.jpg",      #sweets),
      ("Bread Halwa",              "حلوى الخبز",         "பிரெட் ஹல்வா",               null,  "/assets/bread-halwa.jpg",        #sweets),
      ("Onion Raita",              "ريتا البصل",         "வெங்காய ரைத்தா",             null,  "/assets/onion-raita.jpg",        #sides),
      ("Big Dabra",                "بيج دابرا",          "பிக் டப்ரா",                 null,  "/assets/big-dabra.jpg",          #other),
    ];

    for ((en, ar, ta, price, imageUrl, category) in seeds.values()) {
      let id = counters.nextMenuItemId;
      counters.nextMenuItemId += 1;
      menuItems.add(
        id,
        {
          id;
          name        = { en; ar; ta };
          description = { en = ""; ar = ""; ta = "" };
          price;
          imageUrl;
          category;
          isAvailable = true;
        },
      );
    };

    { menuItems; orders = Map.empty<Common.OrderId, Types.Order>(); counters };
  };

  // Menu operations
  public func getMenuItems(state : State) : [Types.MenuItem] {
    state.menuItems.values() |> _.toArray();
  };

  public func getMenuItem(state : State, id : Common.MenuItemId) : ?Types.MenuItem {
    state.menuItems.get(id);
  };

  public func addMenuItem(state : State, input : Types.NewMenuItemInput) : Types.MenuItem {
    let id = state.counters.nextMenuItemId;
    state.counters.nextMenuItemId += 1;
    let item : Types.MenuItem = {
      id;
      name        = input.name;
      description = input.description;
      price       = input.price;
      imageUrl    = input.imageUrl;
      category    = input.category;
      isAvailable = input.isAvailable;
    };
    state.menuItems.add(id, item);
    item;
  };

  public func updateMenuItem(state : State, id : Common.MenuItemId, input : Types.NewMenuItemInput) : ?Types.MenuItem {
    switch (state.menuItems.get(id)) {
      case null null;
      case (?existing) {
        let updated : Types.MenuItem = {
          existing with
          name        = input.name;
          description = input.description;
          price       = input.price;
          imageUrl    = input.imageUrl;
          category    = input.category;
          isAvailable = input.isAvailable;
        };
        state.menuItems.add(id, updated);
        ?updated;
      };
    };
  };

  public func removeMenuItem(state : State, id : Common.MenuItemId) : Bool {
    switch (state.menuItems.get(id)) {
      case null false;
      case (?_) {
        state.menuItems.remove(id);
        true;
      };
    };
  };

  // Order operations
  public func placeOrder(state : State, input : Types.PlaceOrderInput) : Types.Order {
    // Build order items from input, snapshotting name + price at order time
    let orderItems = input.items.map(
      func(lineIn) {
        switch (state.menuItems.get(lineIn.menuItemId)) {
          case null Runtime.trap("Menu item not found: " # lineIn.menuItemId.toText());
          case (?menuItem) {
            let unitPrice = switch (menuItem.price) {
              case (?p) p;
              case null Runtime.trap("Price not set for item: " # lineIn.menuItemId.toText());
            };
            {
              menuItemId = lineIn.menuItemId;
              name       = menuItem.name.en;
              quantity   = lineIn.quantity;
              unitPrice;
            };
          };
        };
      }
    );

    let totalPrice = orderItems.foldLeft(
      0,
      func(acc, item) { acc + item.unitPrice * item.quantity },
    );

    let orderId = state.counters.nextOrderId;
    state.counters.nextOrderId += 1;

    let order : Types.Order = {
      orderId;
      customerName  = input.customerName;
      contactNumber = input.contactNumber;
      items         = orderItems;
      totalPrice;
      paymentMethod = input.paymentMethod;
      status        = #placed;
      createdAt     = Time.now();
      notes         = input.notes;
    };
    state.orders.add(orderId, order);
    order;
  };

  public func getOrderStatus(state : State, orderId : Common.OrderId) : ?Types.OrderStatus {
    switch (state.orders.get(orderId)) {
      case null null;
      case (?order) ?order.status;
    };
  };

  public func getOrder(state : State, orderId : Common.OrderId) : ?Types.Order {
    state.orders.get(orderId);
  };

  public func getAllOrders(state : State) : [Types.Order] {
    state.orders.values() |> _.toArray();
  };

  public func updateOrderStatus(state : State, orderId : Common.OrderId, status : Types.OrderStatus) : ?Types.Order {
    switch (state.orders.get(orderId)) {
      case null null;
      case (?existing) {
        let updated : Types.Order = { existing with status };
        state.orders.add(orderId, updated);
        ?updated;
      };
    };
  };
}
