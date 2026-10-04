import {
  ArrowRight,
  Smartphone,
  Headphones,
  ShieldCheck,
  Truck,
  CreditCard,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      name: "Smartphones",
      icon: Smartphone,
      description: "Latest smartphones",
    },
    {
      name: "Audio",
      icon: Headphones,
      description: "Earbuds & headphones",
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery",
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description: "Safe & protected payments",
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Multiple payment options",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="text-white">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur">
              Welcome to Shopo
            </span>

            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Technology that fits your lifestyle.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">
              Discover smartphones, accessories, audio devices and more —
              carefully selected for your everyday needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 shadow-xl transition-all hover:-translate-y-1"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/deals"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Explore Deals
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="flex h-96 w-96 items-center justify-center rounded-[3rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
              <Smartphone
                size={190}
                strokeWidth={1}
                className="text-white/90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 rounded-2xl p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Explore
            </p>
            <h2 className="mt-2 text-3xl font-black text-gray-900">
              Shop by Category
            </h2>
          </div>

          <Link
            to="/categories"
            className="hidden items-center gap-2 text-sm font-bold text-blue-600 sm:flex"
          >
            View All
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                to="/categories"
                className="group rounded-3xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-100/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-black text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Rating Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gray-950 p-8 text-center sm:flex-row sm:text-left lg:p-10">
          <div>
            <div className="flex justify-center gap-1 sm:justify-start">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  fill="currentColor"
                  className="text-cyan-400"
                />
              ))}
            </div>

            <h2 className="mt-3 text-2xl font-black text-white">
              Your next favorite device is waiting.
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Browse our collection and find something made for you.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-500"
          >
            Start Shopping
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;