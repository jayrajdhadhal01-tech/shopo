import { useState } from "react";
import {
  Clock,
  ArrowRight,
  ShoppingCart,
  Zap,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

const Deals = () => {
  const [email, setEmail] = useState("");

  const deals = [
    {
      id: 1,
      name: "Premium Smartphone X",
      originalPrice: 79999,
      price: 69999,
      discount: "12% OFF",
    },
    {
      id: 2,
      name: "Wireless Pro Buds",
      originalPrice: 10999,
      price: 7999,
      discount: "27% OFF",
    },
    {
      id: 3,
      name: "Fast Charger 65W",
      originalPrice: 2999,
      price: 1999,
      discount: "33% OFF",
    },
    {
      id: 4,
      name: "Premium Headphones",
      originalPrice: 15999,
      price: 11999,
      discount: "25% OFF",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }

    console.log("Deals Newsletter Form Values:", {
      email,
    });

    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="overflow-hidden bg-gray-950">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Zap size={15} />
              Limited Time Offers
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl">
              Great products.
              <span className="block text-cyan-400">Better prices.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              Grab selected Shopo products at special prices before the deals
              disappear.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-gray-300">
              <Clock size={19} className="text-cyan-400" />
              Deals change regularly
            </div>
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="text-6xl">📦</div>

                <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-black text-white">
                  <Tag size={13} />
                  {deal.discount}
                </div>
              </div>

              <div className="p-5">
                <h2 className="font-black text-gray-900">{deal.name}</h2>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-xl font-black text-blue-600">
                    ₹{deal.price.toLocaleString("en-IN")}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₹{deal.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => console.log("Deal added to cart:", deal)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  <ShoppingCart size={17} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Never miss a deal
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Get Shopo deals in your inbox.
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-50">
                Subscribe for new deals, product launches and special offers.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="min-w-0 flex-1 rounded-xl border-0 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-white/20"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-900"
              >
                Subscribe
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="pb-16 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
        >
          Browse All Products
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
};

export default Deals;