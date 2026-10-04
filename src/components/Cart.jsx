import { useState } from "react";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Smartphone",
      price: 129999,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=85",
      quantity: 1,
    },
    {
      id: 2,
      name: "AirPods Pro 2",
      category: "Wireless Earbuds",
      price: 24999,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=85",
      quantity: 2,
    },
    {
      id: 3,
      name: "65W GaN Fast Charger",
      category: "Accessories",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1609592424378-9b4b0d8f7f3f?auto=format&fit=crop&w=600&q=85",
      quantity: 1,
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal === 0 || subtotal >= 50000 ? 0 : 99;

  const gst = Math.round(subtotal * 0.18);

  const total = subtotal + shipping + gst;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <ShoppingBag size={22} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Shopping Cart
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Review your items before checkout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
        {cartItems.length === 0 ? (
          <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 text-center shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <ShoppingBag size={36} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-900">
              Your cart is empty
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              Looks like you haven't added anything to your cart
              yet. Explore our products and find something you
              love.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Continue Shopping
              <ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_390px]">
            {/* Cart Items */}
            <section>
              <div className="mb-4">
                <h2 className="text-lg font-black text-slate-900">
                  Your Items
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {totalQuantity} items in your cart
                </p>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
                  >
                    <div className="flex gap-4">
                      {/* Image */}
                      <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:h-32 sm:w-32">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex min-w-0 flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                {item.category}
                              </p>

                              <h3 className="mt-1 text-base font-black text-slate-900 sm:text-lg">
                                {item.name}
                              </h3>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.name}`}
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                          {/* Quantity */}
                          <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50">
                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="flex h-9 w-9 items-center justify-center rounded-l-xl text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                            >
                              <Minus size={15} />
                            </button>

                            <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 bg-white px-2 text-sm font-bold text-slate-900">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="flex h-9 w-9 items-center justify-center rounded-r-xl text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                            >
                              <Plus size={15} />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-lg font-black text-slate-900">
                              {formatPrice(
                                item.price * item.quantity
                              )}
                            </p>

                            {item.quantity > 1 && (
                              <p className="mt-0.5 text-xs text-slate-400">
                                {formatPrice(item.price)} each
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/shop"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
              >
                ← Continue Shopping
              </Link>
            </section>

            {/* Order Summary */}
            <aside>
              <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-900">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">
                      Subtotal
                    </span>

                    <span className="font-bold text-slate-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">
                      Shipping
                    </span>

                    <span className="font-bold">
                      {shipping === 0 ? (
                        <span className="text-emerald-600">
                          FREE
                        </span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">
                      GST (18%)
                    </span>

                    <span className="font-bold text-slate-900">
                      {formatPrice(gst)}
                    </span>
                  </div>

                  <div className="border-t border-slate-200 pt-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          Total
                        </p>

                        <p className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                          {formatPrice(total)}
                        </p>
                      </div>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                        INR
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout Link */}
                <Link
                  to="/checkout"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </Link>

                <p className="mt-3 text-center text-xs leading-5 text-slate-400">
                  You will be redirected to secure payment after
                  checkout.
                </p>
              </div>

              {/* Trust Cards */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                  <Truck
                    size={19}
                    className="mx-auto text-blue-600"
                  />

                  <p className="mt-2 text-[10px] font-bold text-slate-600">
                    Fast Delivery
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                  <ShieldCheck
                    size={19}
                    className="mx-auto text-blue-600"
                  />

                  <p className="mt-2 text-[10px] font-bold text-slate-600">
                    Secure
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                  <CreditCard
                    size={19}
                    className="mx-auto text-blue-600"
                  />

                  <p className="mt-2 text-[10px] font-bold text-slate-600">
                    Safe Payment
                  </p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;