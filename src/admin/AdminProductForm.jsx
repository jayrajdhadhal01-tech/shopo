import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, ImagePlus } from "lucide-react";

const AdminProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    name: isEdit ? "iPhone 15 Pro" : "",
    category: isEdit ? "Smartphones" : "",
    price: isEdit ? "129999" : "",
    stock: isEdit ? "24" : "",
    discount: isEdit ? "10" : "",
    description: isEdit
      ? "Premium smartphone with powerful performance."
      : "",
    image: "",
  });

  const [errors, setErrors] = useState({});

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

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Product name is required";

    if (!formData.category)
      newErrors.category = "Select a category";

    if (!formData.price || Number(formData.price) <= 0)
      newErrors.price = "Enter a valid price";

    if (!formData.stock || Number(formData.stock) < 0)
      newErrors.stock = "Enter valid stock";

    if (!formData.description.trim())
      newErrors.description = "Description is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log(
      isEdit ? "Updated Product:" : "New Product:",
      formData
    );

    navigate("/admin/products");
  };

  const inputClass = (field) =>
    `mt-2 h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition focus:ring-4 ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
        : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
    }`;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          to="/admin/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <h1 className="mt-4 text-2xl font-black text-slate-900">
          {isEdit ? "Edit Product" : "Add Product"}
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          {isEdit
            ? "Update your product information."
            : "Add a new product to your store."}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 lg:grid-cols-[1fr_300px]"
      >
        {/* Product Information */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="font-black text-slate-900">
            Product Information
          </h2>

          <div className="mt-6 space-y-5">
            {/* Name */}
            <div>
              <label className="text-sm font-bold text-slate-700">
                Product Name
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. iPhone 15 Pro"
                className={inputClass("name")}
              />

              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-bold text-slate-700">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={inputClass("category")}
              >
                <option value="">Select category</option>
                <option>Smartphones</option>
                <option>Audio</option>
                <option>Accessories</option>
                <option>Wearables</option>
              </select>

              {errors.category && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.category}
                </p>
              )}
            </div>

            {/* Price / Stock / Discount */}
            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label className="text-sm font-bold text-slate-700">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="₹0"
                  className={inputClass("price")}
                />

                {errors.price && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.price}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700">
                  Stock
                </label>

                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="0"
                  className={inputClass("stock")}
                />

                {errors.stock && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.stock}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700">
                  Discount %
                </label>

                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  max="100"
                  className={inputClass("discount")}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-bold text-slate-700">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="Write product description..."
                className={`${inputClass(
                  "description"
                )} h-auto resize-none py-3`}
              />

              {errors.description && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.description}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Image + Actions */}
        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-black text-slate-900">
              Product Image
            </h2>

            <div className="mt-5 flex h-52 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50">
              <ImagePlus
                size={32}
                className="text-slate-300"
              />

              <p className="mt-3 text-xs font-bold text-slate-500">
                Product image
              </p>

              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Paste image URL"
                className="mx-4 mt-4 h-10 w-[calc(100%-2rem)] rounded-lg border border-slate-200 bg-white px-3 text-xs outline-none focus:border-blue-500"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <Save size={17} />
              {isEdit ? "Update Product" : "Save Product"}
            </button>

            <Link
              to="/admin/products"
              className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-bold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </Link>
          </section>
        </aside>
      </form>
    </div>
  );
};

export default AdminProductForm;