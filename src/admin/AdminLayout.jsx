import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Tags,
  ShoppingCart,
  Users,
  Boxes,
  TicketPercent,
  BarChart3,
  Settings,
  UserCircle,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Bell,
  Search,
  Store,
} from "lucide-react";
import { NavLink, Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      title: "Overview",
      items: [
        {
          name: "Dashboard",
          path: "/admin",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Catalog",
      items: [
        {
          name: "Products",
          path: "/admin/products",
          icon: Package,
        },
        {
          name: "Categories",
          path: "/admin/categories",
          icon: Tags,
        },
        {
          name: "Inventory",
          path: "/admin/inventory",
          icon: Boxes,
        },
      ],
    },
    {
      title: "Sales",
      items: [
        {
          name: "Orders",
          path: "/admin/orders",
          icon: ShoppingCart,
        },
        {
          name: "Coupons",
          path: "/admin/coupons",
          icon: TicketPercent,
        },
      ],
    },
    {
      title: "Customers",
      items: [
        {
          name: "Customers",
          path: "/admin/customers",
          icon: Users,
        },
      ],
    },
    {
      title: "Reports",
      items: [
        {
          name: "Analytics",
          path: "/admin/analytics",
          icon: BarChart3,
        },
      ],
    },
  ];

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col bg-slate-950 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-[76px] items-center justify-between border-b border-white/10 px-5">
          <Link
            to="/admin"
            onClick={closeSidebar}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
              <Store size={21} strokeWidth={2.2} />
            </div>

            <div>
              <p className="text-xl font-black tracking-tight">
                Shop<span className="text-cyan-400">o</span>
              </p>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Admin Panel
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeSidebar}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-5">
          {navigation.map((section) => (
            <div key={section.title} className="mb-6">
              <p className="mb-2 px-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === "/admin"}
                      onClick={closeSidebar}
                      className={({ isActive }) =>
                        `group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      <Icon
                        size={18}
                        strokeWidth={2}
                      />

                      <span>{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-white/10 p-3">
          <NavLink
            to="/admin/profile"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `mb-1 flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <UserCircle size={18} />
            Admin Profile
          </NavLink>

          <NavLink
            to="/admin/settings"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `mb-1 flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>

          <button
            type="button"
            onClick={() => console.log("Admin Logout clicked")}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() =>
                setSidebarOpen(true)
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu size={22} />
            </button>

            {/* Desktop Search */}
            <div className="hidden lg:block">
              <div className="relative w-[300px] xl:w-[380px]">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search anything..."
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Mobile Title */}
            <div className="lg:hidden">
              <p className="text-base font-black tracking-tight text-slate-900">
                Shop<span className="text-blue-600">o</span>
              </p>

              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Admin
              </p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Store Link */}
            <Link
              to="/"
              target="_blank"
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 sm:flex"
            >
              <Store size={17} />
              View Store
            </Link>

            {/* Notifications */}
            <button
              type="button"
              onClick={() =>
                console.log("Notifications clicked")
              }
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
              aria-label="Notifications"
            >
              <Bell size={19} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
            </button>

            {/* Admin Profile */}
            <Link
              to="/admin/profile"
              className="group flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-black text-white">
                A
              </div>

              <div className="hidden text-left md:block">
                <p className="text-xs font-black text-slate-900">
                  Admin
                </p>

                <p className="text-[10px] font-medium text-slate-400">
                  Administrator
                </p>
              </div>

              <ChevronDown
                size={15}
                className="hidden text-slate-400 md:block"
              />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;