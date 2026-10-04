import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Pencil,
  Package,
  Heart,
  ShieldCheck,
  LogOut,
  ChevronRight,
  Save,
  X,
  Clock3,
  CheckCircle2,
  Truck,
  Home,
  Settings,
  Lock,
} from "lucide-react";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Jayraj Dhadhal",
    email: "jayraj@example.com",
    phone: "9876543210",
  });

  const [errors, setErrors] = useState({});

  const orders = [
    {
      id: "#SHOPO-10245",
      date: "28 Sep 2026",
      item: "iPhone 15 Pro",
      amount: 129999,
      status: "Delivered",
    },
    {
      id: "#SHOPO-10198",
      date: "21 Sep 2026",
      item: "AirPods Pro 2",
      amount: 24999,
      status: "Delivered",
    },
    {
      id: "#SHOPO-10142",
      date: "15 Sep 2026",
      item: "65W GaN Fast Charger",
      amount: 2499,
      status: "Shipped",
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Jayraj Dhadhal",
      address: "Ahmedabad, Gujarat",
      phone: "+91 9876543210",
      default: true,
    },
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Samsung Galaxy S24 Ultra",
      price: 124999,
      image:
        "https://images.unsplash.com/photo-1707479126044-9c6e5e2b5d0f?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      price: 29999,
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=85",
    },
  ];

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
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    console.log("Updated User Profile:", formData);

    setIsEditing(false);
  };

  const handleCancel = () => {
    setErrors({});
    setIsEditing(false);
  };

  const menuItems = [
    {
      id: "profile",
      label: "Personal Information",
      icon: User,
    },
    {
      id: "orders",
      label: "My Orders",
      icon: Package,
      count: 12,
    },
    {
      id: "wishlist",
      label: "My Wishlist",
      icon: Heart,
      count: 8,
    },
    {
      id: "addresses",
      label: "Saved Addresses",
      icon: MapPin,
      count: 1,
    },
    {
      id: "security",
      label: "Account Security",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
            My Account
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 max-w-xl text-sm text-slate-500">
            Manage your personal information, orders, wishlist and
            account preferences.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* Customer Card */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/70 bg-white text-xl font-black text-blue-600 shadow-lg">
                    {formData.fullName.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h2 className="truncate text-base font-black">
                      {formData.fullName}
                    </h2>

                    <p className="mt-1 truncate text-xs text-blue-50">
                      {formData.email}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur-sm">
                  <CheckCircle2 size={16} />

                  <span className="text-xs font-bold">
                    Verified Customer
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <div className="p-3">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const active = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveSection(item.id)}
                      className={`mb-1 flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-sm font-bold transition ${
                        active
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={18} />
                        {item.label}
                      </span>

                      {item.count && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                            active
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}

                <div className="my-3 border-t border-slate-100" />

                <button
                  type="button"
                  onClick={() => console.log("Logout clicked")}
                  className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-bold text-red-500 transition hover:bg-red-50"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>

            {/* Help Card */}
            <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <ShieldCheck
                size={22}
                className="text-blue-600"
              />

              <h3 className="mt-3 text-sm font-black text-slate-900">
                Your account is secure
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Keep your account information updated for a
                smoother shopping experience.
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Profile Section */}
            {activeSection === "profile" && (
              <>
                {/* Welcome Card */}
                <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 p-6 sm:p-8">
                    <div className="relative z-10 max-w-xl text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
                        Welcome back
                      </p>

                      <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                        Hello,{" "}
                        {formData.fullName.split(" ")[0]} 👋
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-blue-50">
                        Everything you need to manage your Shopo
                        account is right here.
                      </p>
                    </div>

                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
                    <div className="absolute -bottom-20 right-20 h-48 w-48 rounded-full bg-white/10" />
                  </div>
                </section>

                {/* Personal Information */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-black text-slate-900">
                        Personal Information
                      </h2>

                      <p className="mt-1 text-xs text-slate-500">
                        Update your basic account details
                      </p>
                    </div>

                    {!isEditing && (
                      <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Pencil size={15} />
                        Edit
                      </button>
                    )}
                  </div>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Full Name
                      </label>

                      {isEditing ? (
                        <>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:ring-4 ${
                              errors.fullName
                                ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                            }`}
                          />

                          {errors.fullName && (
                            <p className="mt-1.5 text-xs font-medium text-red-500">
                              {errors.fullName}
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="mt-3 flex items-center gap-3">
                          <User
                            size={18}
                            className="text-blue-600"
                          />

                          <span className="text-sm font-bold text-slate-900">
                            {formData.fullName}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Email Address
                      </label>

                      {isEditing ? (
                        <>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:ring-4 ${
                              errors.email
                                ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                            }`}
                          />

                          {errors.email && (
                            <p className="mt-1.5 text-xs font-medium text-red-500">
                              {errors.email}
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="mt-3 flex items-center gap-3">
                          <Mail
                            size={18}
                            className="text-blue-600"
                          />

                          <span className="break-all text-sm font-bold text-slate-900">
                            {formData.email}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Phone Number
                      </label>

                      {isEditing ? (
                        <>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={10}
                            className={`mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:ring-4 ${
                              errors.phone
                                ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                            }`}
                          />

                          {errors.phone && (
                            <p className="mt-1.5 text-xs font-medium text-red-500">
                              {errors.phone}
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="mt-3 flex items-center gap-3">
                          <Phone
                            size={18}
                            className="text-blue-600"
                          />

                          <span className="text-sm font-bold text-slate-900">
                            +91 {formData.phone}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Member Since */}
                    <div>
                      <label className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Member Since
                      </label>

                      <div className="mt-3 flex items-center gap-3">
                        <Clock3
                          size={18}
                          className="text-blue-600"
                        />

                        <span className="text-sm font-bold text-slate-900">
                          January 2026
                        </span>
                      </div>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-7 flex justify-end gap-3 border-t border-slate-100 pt-5">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                      >
                        <X size={16} />
                        Cancel
                      </button>

                      <button
                        type="button"
                        onClick={handleSave}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                      >
                        <Save size={16} />
                        Save Changes
                      </button>
                    </div>
                  )}
                </section>

                {/* Account Overview */}
                <section>
                  <h2 className="mb-4 text-lg font-black text-slate-900">
                    Account Overview
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => setActiveSection("orders")}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Package size={20} />
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                        />
                      </div>

                      <p className="mt-5 text-2xl font-black text-slate-900">
                        12
                      </p>

                      <p className="mt-1 text-xs font-bold text-slate-500">
                        Total Orders
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSection("wishlist")}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
                          <Heart size={20} />
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-pink-500"
                        />
                      </div>

                      <p className="mt-5 text-2xl font-black text-slate-900">
                        8
                      </p>

                      <p className="mt-1 text-xs font-bold text-slate-500">
                        Wishlist Items
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSection("addresses")}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                          <MapPin size={20} />
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-cyan-600"
                        />
                      </div>

                      <p className="mt-5 text-2xl font-black text-slate-900">
                        1
                      </p>

                      <p className="mt-1 text-xs font-bold text-slate-500">
                        Saved Address
                      </p>
                    </button>
                  </div>
                </section>
              </>
            )}

            {/* Orders */}
            {activeSection === "orders" && (
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 p-5 sm:p-7">
                  <h2 className="text-xl font-black text-slate-900">
                    My Orders
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Track and manage your recent purchases.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Package size={20} />
                        </div>

                        <div>
                          <p className="text-sm font-black text-slate-900">
                            {order.id}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {order.item} · {order.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-5 sm:justify-end">
                        <div>
                          <p className="text-sm font-black text-slate-900">
                            {formatPrice(order.amount)}
                          </p>

                          <span
                            className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-black ${
                              order.status === "Delivered"
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-blue-50 text-blue-600"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-slate-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Wishlist */}
            {activeSection === "wishlist" && (
              <section>
                <div className="mb-5">
                  <h2 className="text-xl font-black text-slate-900">
                    My Wishlist
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Products you've saved for later.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                    >
                      <div className="relative h-52 bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />

                        <button
                          type="button"
                          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-pink-500 shadow-md"
                        >
                          <Heart
                            size={17}
                            fill="currentColor"
                          />
                        </button>
                      </div>

                      <div className="p-5">
                        <h3 className="text-base font-black text-slate-900">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-lg font-black text-blue-600">
                          {formatPrice(item.price)}
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            console.log(
                              "Add Wishlist Item to Cart:",
                              item
                            )
                          }
                          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                          <ShoppingBagIcon />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Addresses */}
            {activeSection === "addresses" && (
              <section>
                <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">
                      Saved Addresses
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Manage your delivery addresses.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      console.log("Add New Address clicked")
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    <MapPin size={16} />
                    Add Address
                  </button>
                </div>

                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Home size={20} />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-black text-slate-900">
                              {address.type}
                            </h3>

                            {address.default && (
                              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black text-emerald-600">
                                Default
                              </span>
                            )}
                          </div>

                          <p className="mt-2 text-sm font-bold text-slate-800">
                            {address.name}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {address.address}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {address.phone}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          console.log(
                            "Edit Address:",
                            address
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Pencil size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* Security */}
            {activeSection === "security" && (
              <section>
                <div className="mb-5">
                  <h2 className="text-xl font-black text-slate-900">
                    Account Security
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Manage your password and account security.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Lock size={20} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-sm font-black text-slate-900">
                          Password
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          Last changed 30 days ago
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          console.log(
                            "Change Password clicked"
                          )
                        }
                        className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                        <ShieldCheck size={20} />
                      </div>

                      <div>
                        <h3 className="text-sm font-black text-slate-900">
                          Account Protected
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-600">
                          Your Shopo account is currently protected
                          and your information is secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

const ShoppingBagIcon = () => {
  return <ShoppingBag size={17} />;
};

export default Profile;