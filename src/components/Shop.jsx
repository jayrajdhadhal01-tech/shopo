import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  Heart,
  ShoppingCart,
  Star,
  X,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Smartphones",
    price: 129999,
    oldPrice: 139999,
    rating: 4.8,
    reviews: 342,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=85",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphones",
    price: 119999,
    oldPrice: 129999,
    rating: 4.9,
    reviews: 287,
    image:
      "https://images.unsplash.com/photo-1707239442033-8f6b8e8e6e4f?auto=format&fit=crop&w=900&q=85",
    badge: "Top Rated",
  },
  {
    id: 3,
    name: "Google Pixel 9 Pro",
    category: "Smartphones",
    price: 99999,
    oldPrice: 109999,
    rating: 4.7,
    reviews: 196,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
    badge: "New",
  },
  {
    id: 4,
    name: "OnePlus 12",
    category: "Smartphones",
    price: 64999,
    oldPrice: 69999,
    rating: 4.6,
    reviews: 421,
    image:
      "https://images.unsplash.com/photo-1607936854279-55e8e8f5f3e7?auto=format&fit=crop&w=900&q=85",
    badge: "Popular",
  },
  {
    id: 5,
    name: "AirPods Pro 2",
    category: "Audio",
    price: 24999,
    oldPrice: 26999,
    rating: 4.8,
    reviews: 612,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85",
    badge: "Best Seller",
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 29999,
    oldPrice: 34999,
    rating: 4.9,
    reviews: 508,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=85",
    badge: "Top Rated",
  },
  {
    id: 7,
    name: "JBL Tune 770NC",
    category: "Audio",
    price: 6999,
    oldPrice: 8999,
    rating: 4.5,
    reviews: 334,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
    badge: "Deal",
  },
  {
    id: 8,
    name: "65W GaN Fast Charger",
    category: "Accessories",
    price: 2499,
    oldPrice: 3299,
    rating: 4.6,
    reviews: 218,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
    badge: "Hot Deal",
  },
  {
    id: 9,
    name: "Braided USB-C Cable",
    category: "Accessories",
    price: 799,
    oldPrice: 1199,
    rating: 4.4,
    reviews: 187,
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=85",
    badge: "Value Pick",
  },
  {
    id: 10,
    name: "20000mAh Power Bank",
    category: "Accessories",
    price: 2299,
    oldPrice: 2999,
    rating: 4.5,
    reviews: 265,
    image:
      "https://images.unsplash.com/photo-1609592424975-0c4b3f3b7b1a?auto=format&fit=crop&w=900&q=85",
    badge: "Popular",
  },
  {
    id: 11,
    name: "Apple Watch Series 9",
    category: "Wearables",
    price: 39999,
    oldPrice: 44999,
    rating: 4.8,
    reviews: 173,
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=85",
    badge: "Premium",
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch 6",
    category: "Wearables",
    price: 24999,
    oldPrice: 29999,
    rating: 4.6,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=85",
    badge: "New",
  },
];

const categories = [
  "All",
  "Smartphones",
  "Audio",
  "Accessories",
  "Wearables",
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [wishlist, setWishlist] = useState([]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "Price Low → High") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "Price High → Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "Top Rated") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      if (current.includes(product.id)) {
        return current.filter((id) => id !== product.id);
      }

      return [...current, product.id];
    });
  };

  const handleAddToCart = (product) => {
    const existingCart =
      JSON.parse(localStorage.getItem("shopoCart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "shopoCart",
      JSON.stringify(updatedCart)
    );

    console.log("Cart Updated:", updatedCart);
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              Shopo Store
            </span>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Technology you’ll
              <span className="text-blue-600"> love to use.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Discover smartphones, audio devices, wearables and
              everyday accessories selected for performance,
              design and value.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">

        {/* Search + Sort */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative w-full lg:max-w-xl">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search smartphones, earbuds, chargers..."
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal
              size={18}
              className="text-slate-500"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none focus:border-blue-500"
            >
              <option>Featured</option>
              <option>Price Low → High</option>
              <option>Price High → Low</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-bold transition ${
                category === item
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-950">
              All Products
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredProducts.length} products available
            </p>
          </div>

          <Link
            to="/categories"
            className="hidden items-center gap-2 text-sm font-bold text-blue-600 sm:flex"
          >
            Browse Categories
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-blue-600 shadow-sm">
                    {product.badge}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-500 shadow-sm transition hover:scale-105 hover:text-red-500"
                  >
                    <Heart
                      size={19}
                      fill={
                        wishlist.includes(product.id)
                          ? "currentColor"
                          : "none"
                      }
                      className={
                        wishlist.includes(product.id)
                          ? "text-red-500"
                          : ""
                      }
                    />
                  </button>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                    {product.category}
                  </p>

                  <h3 className="line-clamp-2 min-h-[48px] text-base font-black text-slate-900">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star
                        size={15}
                        fill="currentColor"
                        className="text-amber-400"
                      />

                      <span className="text-sm font-bold text-slate-700">
                        {product.rating}
                      </span>
                    </div>

                    <span className="text-xs text-slate-400">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-xl font-black text-slate-950">
                      {formatPrice(product.price)}
                    </span>

                    <span className="pb-0.5 text-sm text-slate-400 line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-700"
                  >
                    <ShoppingCart size={17} />
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}

          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <Search size={28} className="text-slate-400" />
            </div>

            <h3 className="mt-5 text-xl font-black text-slate-900">
              No products found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or selecting another category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Shop; 