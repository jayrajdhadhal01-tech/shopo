
import { useState } from "react";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

const AdminCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Smartphones", products: 42 },
    { id: 2, name: "Audio", products: 35 },
    { id: 3, name: "Accessories", products: 68 },
    { id: 4, name: "Wearables", products: 41 },
  ]);

  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    if (editId) {
      setCategories((current) =>
        current.map((category) =>
          category.id === editId
            ? { ...category, name: name.trim() }
            : category
        )
      );

      console.log("Category Updated:", name.trim());
      setEditId(null);
    } else {
      const newCategory = {
        id: Date.now(),
        name: name.trim(),
        products: 0,
      };

      setCategories((current) => [...current, newCategory]);
      console.log("Category Added:", newCategory);
    }

    setName("");
  };

  const handleEdit = (category) => {
    setEditId(category.id);
    setName(category.name);
  };

  const handleDelete = (id) => {
    setCategories((current) =>
      current.filter((category) => category.id !== id)
    );

    console.log("Category Deleted:", id);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-900">
          Categories
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your store categories.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        {/* Add Category */}
        <section className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-black text-slate-900">
            {editId ? "Edit Category" : "Add Category"}
          </h2>

          <form onSubmit={handleSubmit} className="mt-5">
            <label className="text-sm font-bold text-slate-700">
              Category Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Smartphones"
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
            >
              <Plus size={17} />
              {editId ? "Update Category" : "Add Category"}
            </button>

            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setName("");
                }}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
            )}
          </form>
        </section>

        {/* Categories List */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search categories..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <h3 className="font-bold text-slate-900">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {category.products} products
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(category)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                    title="Edit"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => handleDelete(category.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="p-10 text-center text-sm text-slate-500">
                No categories found.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminCategories;

