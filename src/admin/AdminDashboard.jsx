import {
  IndianRupee,
  ShoppingCart,
  Users,
  Package,
  ArrowUpRight,
  Clock,
  AlertTriangle,
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹8,45,250",
      change: "+12.5%",
      icon: IndianRupee,
    },
    {
      title: "Total Orders",
      value: "1,248",
      change: "+8.2%",
      icon: ShoppingCart,
    },
    {
      title: "Customers",
      value: "5,842",
      change: "+15.4%",
      icon: Users,
    },
    {
      title: "Products",
      value: "186",
      change: "+4.8%",
      icon: Package,
    },
  ];

  const recentOrders = [
    ["#SHOPO-10245", "Jayraj Dhadhal", "₹1,29,999", "Delivered"],
    ["#SHOPO-10244", "Rahul Patel", "₹24,999", "Shipped"],
    ["#SHOPO-10243", "Amit Shah", "₹4,998", "Processing"],
    ["#SHOPO-10242", "Dev Mehta", "₹12,499", "Delivered"],
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-7">
        <p className="text-sm font-bold text-blue-600">
          Overview
        </p>

        <h1 className="mt-1 text-2xl font-black text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={19} />
                </div>

                <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                  <ArrowUpRight size={14} />
                  {item.change}
                </span>
              </div>

              <p className="mt-5 text-2xl font-black text-slate-900">
                {item.value}
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-500">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_330px]">
        {/* Sales */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-black text-slate-900">
                Sales Overview
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Revenue for the last 7 days
              </p>
            </div>

            <select className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>

          {/* Simple Chart */}
          <div className="mt-8 flex h-56 items-end gap-3 sm:gap-5">
            {[45, 70, 55, 85, 65, 95, 78].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full max-w-12 rounded-t-lg bg-blue-500 transition hover:bg-blue-600"
                  />

                  <span className="text-[10px] font-bold text-slate-400">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][
                      index
                    ]}
                  </span>
                </div>
              )
            )}
          </div>
        </section>

        {/* Alerts */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle
              size={19}
              className="text-orange-500"
            />

            <h2 className="font-black text-slate-900">
              Low Stock
            </h2>
          </div>

          <div className="mt-5 space-y-3">
            {[
              ["iPhone 15 Pro", "4 left"],
              ["AirPods Pro 2", "6 left"],
              ["65W GaN Charger", "3 left"],
              ["Galaxy Watch 6", "5 left"],
            ].map(([name, stock]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
              >
                <div className="flex items-center gap-3">
                  <Package
                    size={17}
                    className="text-blue-600"
                  />

                  <span className="text-xs font-bold text-slate-700">
                    {name}
                  </span>
                </div>

                <span className="text-xs font-black text-orange-500">
                  {stock}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Recent Orders */}
      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <div>
            <h2 className="font-black text-slate-900">
              Recent Orders
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Latest customer orders
            </p>
          </div>

          <button className="text-xs font-bold text-blue-600 hover:text-blue-700">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left">
            <thead className="bg-slate-50">
              <tr>
                {["Order", "Customer", "Amount", "Status"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className="px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-400"
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => (
                <tr key={order[0]}>
                  <td className="px-5 py-4 text-sm font-bold text-blue-600">
                    {order[0]}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                    {order[1]}
                  </td>

                  <td className="px-5 py-4 text-sm font-black text-slate-900">
                    {order[2]}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-600">
                      {order[3]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Today's Summary */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <Clock size={19} className="text-blue-600" />
          <p className="mt-4 text-xl font-black text-slate-900">
            24
          </p>
          <p className="text-xs font-semibold text-slate-500">
            Pending Orders
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <ShoppingCart
            size={19}
            className="text-cyan-600"
          />
          <p className="mt-4 text-xl font-black text-slate-900">
            86
          </p>
          <p className="text-xs font-semibold text-slate-500">
            Orders Today
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <Users size={19} className="text-emerald-600" />
          <p className="mt-4 text-xl font-black text-slate-900">
            42
          </p>
          <p className="text-xs font-semibold text-slate-500">
            New Customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;