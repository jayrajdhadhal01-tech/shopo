import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Package, User, MapPin } from "lucide-react";

const AdminOrderDetails = () => {
const { id } = useParams();

const order = {
id: id || "ORD-1001",
customer: "Rahul Sharma",
email: "[rahul@example.com](mailto:rahul@example.com)",
phone: "+91 98765 43210",
address: "Ahmedabad, Gujarat, India",
status: "Processing",
date: "04 Oct 2026",
items: [
{
name: "iPhone 15 Pro",
price: 129999,
quantity: 1,
},
{
name: "AirPods Pro 2",
price: 24999,
quantity: 1,
},
],
};

const subtotal = order.items.reduce(
(total, item) => total + item.price * item.quantity,
0
);

const shipping = 0;
const tax = subtotal * 0.18;
const total = subtotal + shipping + tax;

const handleStatus = (e) => {
console.log("Order Status:", e.target.value);
};

return ( <div className="p-4 sm:p-6 lg:p-8"> <Link
     to="/admin/orders"
     className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600"
   > <ArrowLeft size={16} />
Back to Orders </Link>

```
  <div className="mb-6 mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
    <div>
      <h1 className="text-2xl font-black text-slate-900">
        Order {order.id}
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Placed on {order.date}
      </p>
    </div>

    <select
      defaultValue={order.status}
      onChange={handleStatus}
      className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold outline-none focus:border-blue-500"
    >
      <option>Pending</option>
      <option>Processing</option>
      <option>Shipped</option>
      <option>Delivered</option>
      <option>Cancelled</option>
    </select>
  </div>

  <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <Package className="text-blue-600" size={20} />
          <h2 className="font-black text-slate-900">
            Order Items
          </h2>
        </div>

        <div className="mt-5 divide-y divide-slate-100">
          {order.items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div>
                <p className="font-bold text-slate-900">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  ₹{item.price.toLocaleString("en-IN")} ×{" "}
                  {item.quantity}
                </p>
              </div>

              <p className="font-black text-slate-900">
                ₹
                {(item.price * item.quantity).toLocaleString(
                  "en-IN"
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <User className="text-blue-600" size={20} />
          <h2 className="font-black text-slate-900">
            Customer Information
          </h2>
        </div>

        <div className="mt-5 space-y-2 text-sm">
          <p className="font-bold text-slate-900">
            {order.customer}
          </p>
          <p className="text-slate-500">{order.email}</p>
          <p className="text-slate-500">{order.phone}</p>
        </div>
      </section>
    </div>

    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <MapPin className="text-blue-600" size={20} />
          <h2 className="font-black text-slate-900">
            Delivery Address
          </h2>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          {order.address}
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-black text-slate-900">
          Order Summary
        </h2>

        <div className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Subtotal</span>
            <span className="font-bold">
              ₹{subtotal.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Shipping</span>
            <span className="font-bold">Free</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">GST (18%)</span>
            <span className="font-bold">
              ₹{tax.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <div className="flex justify-between">
              <span className="font-black text-slate-900">
                Total
              </span>
              <span className="text-lg font-black text-blue-600">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>


);
};

export default AdminOrderDetails;
