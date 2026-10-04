import {
  Smartphone,
  Headphones,
  Cable,
  BatteryCharging,
  Watch,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Smartphones",
      description: "Flagship, mid-range and budget smartphones.",
      icon: Smartphone,
      count: "120+ Products",
    },
    {
      name: "Earbuds",
      description: "Wireless earbuds for music and everyday calls.",
      icon: Headphones,
      count: "45+ Products",
    },
    {
      name: "Chargers & Cables",
      description: "Fast chargers and durable charging cables.",
      icon: Cable,
      count: "80+ Products",
    },
    {
      name: "Power Banks",
      description: "Portable power for your everyday adventures.",
      icon: BatteryCharging,
      count: "30+ Products",
    },
    {
      name: "Smart Wearables",
      description: "Smart watches and modern wearable technology.",
      icon: Watch,
      count: "35+ Products",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="mx-auto max-w-7xl px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
            Categories
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Everything you need. One place.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-blue-50 sm:text-base">
            Explore Shopo's collection of smartphones and accessories through
            simple, focused categories.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                to="/shop"
                className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600"
                  />
                </div>

                <h2 className="mt-7 text-xl font-black text-gray-900">
                  {category.name}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {category.description}
                </p>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-600">
                  {category.count}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Categories;