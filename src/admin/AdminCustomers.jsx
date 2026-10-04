import { useState } from "react";
import { Search, Eye } from "lucide-react";

const AdminCustomers = () => {
const [search, setSearch] = useState("");

const customers = [
{
id: 1,
name: "Rahul Sharma",
email: "[rahul@example.com](mailto:rahul@example.com)",
orders: 12,
spent: 145000,
status: "Active",
},
{
id: 2,
name: "Amit Patel",
email: "[amit@example.com](mailto:amit@example.com)",
orders: 8,
spent: 92000,
status: "Active",
},
{
id: 3,
name: "Priya Shah",
email: "[priya@example.com](mailto:priya@example.com)",
orders: 5,
spent: 48000,
status: "Active",
},
{
id: 4,
name: "Vivek Mehta",
email: "[vivek@example.com](mailto:vivek@example.com)",
orders: 3,
spent: 27000,
status: "Inactive",
},
{
id: 5,
name: "Neha Joshi",
email: "[neha@example.com](mailto:neha@example.com)",
orders: 15,
spent: 198000,
status: "Active",
},
];

const filteredCustomers = customers.filter(
(customer) =>
customer.name.toLowerCase().includes(search.toLowerCase()) ||
customer.email.toLowerCase().includes(search.toLowerCase())
);

return ( <div className="p-4 sm:p-6 lg:p-8"> <div className="mb-6"> <h1 className="text-2xl font-black text-slate-900">
Customers </h1>

```
    <p className="mt-1 text-sm text-slate-500">
      Manage your store customers.
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="border-b border-slate-100 p-5">
      <div className="relative max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search customers..."
          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white"
        />
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left">
        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
          <tr>
            <th className="px-5 py-4">Customer</th>
            <th className="px-5 py-4">Orders</th>
            <th className="px-5 py-4">Total Spent</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {filteredCustomers.map((customer) => (
            <tr
              key={customer.id}
              className="hover:bg-slate-50"
            >
              <td className="px-5 py-4">
                <p className="font-bold text-slate-900">
                  {customer.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {customer.email}
                </p>
              </td>

              <td className="px-5 py-4 font-semibold text-slate-700">
                {customer.orders}
              </td>

              <td className="px-5 py-4 font-bold text-slate-900">
                ₹{customer.spent.toLocaleString("en-IN")}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    customer.status === "Active"
                      ? "bg-green-50 text-green-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {customer.status}
                </span>
              </td>

              <td className="px-5 py-4">
                <button
                  onClick={() =>
                    console.log("Customer:", customer)
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Eye size={17} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredCustomers.length === 0 && (
        <div className="p-10 text-center text-sm text-slate-500">
          No customers found.
        </div>
      )}
    </div>
  </div>
</div>


);
};

export default AdminCustomers;
