import { useState } from "react";
import {
  CreditCard,
  MapPin,
  User,
  Mail,
  Phone,
  Lock,
  CheckCircle2,
  Truck,
  ShieldCheck,
  ArrowLeft,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const cartItems = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Smartphone",
      price: 129999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=300&q=85",
    },
    {
      id: 2,
      name: "AirPods Pro 2",
      category: "Wireless Earbuds",
      price: 24999,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=300&q=85",
    },
    {
      id: 3,
      name: "65W GaN Fast Charger",
      category: "Accessories",
      price: 2499,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1609592424378-9b4b0d8f7f3f?auto=format&fit=crop&w=300&q=85",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 50000 ? 0 : 99;

  const gst = Math.round(subtotal * 0.18);

  const total = subtotal + shipping + gst;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const orderDetails = {
      customer: formData,
      paymentMethod,
      items: cartItems,
      subtotal,
      shipping,
      gst,
      total,
    };

    console.log("Order Details:", orderDetails);

    alert("Order placed successfully!");
  };

  const inputClass = (field) =>
    `mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
        : "border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
    }`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/cart"
            className="flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </Link>

          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <Lock size={16} className="text-emerald-600" />
            Secure Checkout
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <ShoppingBag size={21} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Checkout
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Complete your order securely
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-[1fr_390px]">
            {/* Left */}
            <div className="space-y-6">
              {/* Contact Information */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <User size={19} />
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Contact Information
                    </h2>

                    <p className="text-xs text-slate-500">
                      We'll use this information for your order
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-bold text-slate-700">
                      Full Name
                    </label>

                    <div className="relative">
                      <User
                        size={17}
                        className="absolute left-4 top-1/2 mt-1 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`${inputClass(
                          "fullName"
                        )} pl-11`}
                      />
                    </div>

                    {errors.fullName && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-700">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="absolute left-4 top-1/2 mt-1 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`${inputClass(
                          "email"
                        )} pl-11`}
                      />
                    </div>

                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-bold text-slate-700">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={17}
                        className="absolute left-4 top-1/2 mt-1 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className={`${inputClass(
                          "phone"
                        )} pl-11`}
                      />
                    </div>

                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Delivery Address */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Delivery Address
                    </h2>

                    <p className="text-xs text-slate-500">
                      Where should we deliver your order?
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-bold text-slate-700">
                      Complete Address
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House number, street, area..."
                      rows={3}
                      className={`${inputClass(
                        "address"
                      )} h-auto resize-none py-3`}
                    />

                    {errors.address && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <label className="text-sm font-bold text-slate-700">
                        City
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Ahmedabad"
                        className={inputClass("city")}
                      />

                      {errors.city && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-bold text-slate-700">
                        State
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Gujarat"
                        className={inputClass("state")}
                      />

                      {errors.state && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                          {errors.state}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-bold text-slate-700">
                        Pincode
                      </label>

                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="380001"
                        maxLength={6}
                        className={inputClass("pincode")}
                      />

                      {errors.pincode && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                          {errors.pincode}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <CreditCard size={19} />
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Payment Method
                    </h2>

                    <p className="text-xs text-slate-500">
                      Choose how you'd like to pay
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                      paymentMethod === "card"
                        ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                      <CreditCard size={19} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-black text-slate-900">
                        Credit / Debit Card
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Visa, Mastercard, RuPay
                      </p>
                    </div>

                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                        paymentMethod === "card"
                          ? "border-blue-600 bg-blue-600"
                          : "border-slate-300"
                      }`}
                    >
                      {paymentMethod === "card" && (
                        <CheckCircle2
                          size={13}
                          className="text-white"
                        />
                      )}
                    </div>
                  </button>

                  {/* UPI */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                      paymentMethod === "upi"
                        ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                      <span className="text-xs font-black">
                        UPI
                      </span>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-black text-slate-900">
                        UPI
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Google Pay, PhonePe, Paytm & more
                      </p>
                    </div>

                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                        paymentMethod === "upi"
                          ? "border-blue-600 bg-blue-600"
                          : "border-slate-300"
                      }`}
                    >
                      {paymentMethod === "upi" && (
                        <CheckCircle2
                          size={13}
                          className="text-white"
                        />
                      )}
                    </div>
                  </button>

                  {/* COD */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                      paymentMethod === "cod"
                        ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                      <Truck size={19} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-black text-slate-900">
                        Cash on Delivery
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Pay when your order arrives
                      </p>
                    </div>

                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                        paymentMethod === "cod"
                          ? "border-blue-600 bg-blue-600"
                          : "border-slate-300"
                      }`}
                    >
                      {paymentMethod === "cod" && (
                        <CheckCircle2
                          size={13}
                          className="text-white"
                        />
                      )}
                    </div>
                  </button>
                </div>
              </section>
            </div>

            {/* Right - Order Summary */}
            <aside>
              <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-900">
                  Your Order
                </h2>

                {/* Products */}
                <div className="mt-5 space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />

                        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-black text-white">
                          {item.quantity}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-slate-900">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {item.category}
                        </p>
                      </div>

                      <p className="text-sm font-black text-slate-900">
                        {formatPrice(
                          item.price * item.quantity
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Subtotal
                    </span>

                    <span className="font-bold text-slate-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
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

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      GST (18%)
                    </span>

                    <span className="font-bold text-slate-900">
                      {formatPrice(gst)}
                    </span>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-500">
                      Total
                    </span>

                    <span className="text-2xl font-black tracking-tight text-slate-900">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30"
                >
                  Place Order
                  <CheckCircle2 size={18} />
                </button>

                <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                  <ShieldCheck
                    size={15}
                    className="text-emerald-500"
                  />
                  Secure & protected checkout
                </div>
              </div>
            </aside>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;