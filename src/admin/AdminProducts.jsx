import { useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Smartphones",
      price: 129999,
      stock: 24,
      status: "Active",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      category: "Smartphones",
      price: 124999,
      stock: 12,
      status: "Active",
    },
    {
      id: 3,
      name: "AirPods Pro 2",
      category: "Audio",
      price: 24999,
      stock: 6,
      status: "Active",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      category: "Audio",
      price: 29999,
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 5,
      name: "65W GaN Fast Charger",
      category: "Accessories",
      price: 2499,
      stock: 18,
      status: "Active",
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      category: "Wearables",
      price: 42999,
      stock: 8,
      status: "Active",
    },
  ]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const deleteProduct = (id) => {
    const product = products.find((item) => item.id === id);

    if (!product) return;

    console.log("Delete Product:", product);

    setProducts((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-bold text-blue-600">
            Catalog
          </p>

          <h1 className="mt-1 text-2xl font-black text-slate-900">
            Products
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your store products.
          </p>
        </div>

        <Link
          to="/admin/products/add"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none focus:border-blue-500"
        >
          <option>All</option>
          <option>Smartphones</option>
          <option>Audio</option>
          <option>Accessories</option>
          <option>Wearables</option>
        </select>
      </div>

      {/* Product Table */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-100 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Package size={19} />
          </div>

          <div>
            <h2 className="font-black text-slate-900">
              All Products
            </h2>

            <p className="text-xs text-slate-500">
              {filteredProducts.length} products found
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-slate-50">
              <tr>
                {[
                  "Product",
                  "Category",
                  "Price",
                  "Stock",
                  "Status",
                  "Action",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-400"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="transition hover:bg-slate-50/70"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-blue-600">
                        <Package size={18} />
                      </div>

                      <span className="text-sm font-bold text-slate-900">
                        {product.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {product.category}
                  </td>

                  <td className="px-5 py-4 text-sm font-black text-slate-900">
                    {formatPrice(product.price)}
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-slate-700">
                    {product.stock}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black ${
                        product.status === "Active"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/admin/products/edit/${product.id}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Pencil size={16} />
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          deleteProduct(product.id)
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="p-12 text-center">
            <Package
              size={32}
              className="mx-auto text-slate-300"
            />

            <p className="mt-3 text-sm font-bold text-slate-500">
              No products found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;