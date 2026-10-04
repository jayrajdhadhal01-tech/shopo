
import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const AdminOrders = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const orders = [
    {
      id: "ORD-1001",
      customer: "Rahul Sharma",
      date: "04 Oct 2026",
      total: 132498,
      status: "Delivered",
    },
    {
      id: "ORD-1002",
      customer: "Amit Patel",
      date: "04 Oct 2026",
      total: 24999,
      status: "Processing",
    },
    {
      id: "ORD-1003",
      customer: "Priya Shah",
      date: "03 Oct 2026",
      total: 4998,
      status: "Pending",
    },
    {
      id: "ORD-1004",
      customer: "Vivek Mehta",
      date: "03 Oct 2026",
      total: 89999,
      status: "Shipped",
    },
    {
      id: "ORD-1005",
      customer: "Neha Joshi",
      date: "02 Oct 2026",
      total: 129999,
      status: "Cancelled",
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  const statusClass = {
    Delivered: "bg-green-50 text-green-600",
    Processing: "bg-blue-50 text-blue-600",
    Pending: "bg-yellow-50 text-yellow-600",
    Shipped: "bg-cyan-50 text-cyan-600",
    Cancelled: "bg-red-50 text-red-600",
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-900">
          Orders
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage customer orders and their status.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search order or customer..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none focus:border-blue-500"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-5 py-4">Order</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Total</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50">
                  <td className="px-5 py-4 font-bold text-blue-600">
                    {order.id}
                  </td>

                  <td className="px-5 py-4 font-semibold text-slate-800">
                    {order.customer}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {order.date}
                  </td>

                  <td className="px-5 py-4 font-bold text-slate-900">
                    ₹{order.total.toLocaleString("en-IN")}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <Link
                      to={`/admin/orders/${order.id}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Eye size={17} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <div className="p-10 text-center text-sm text-slate-500">
              No orders found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
