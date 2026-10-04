import { useState } from "react";
import {
  Search,
  ShoppingCart,
  UserCircle,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import Footer from "./Footer";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-bold transition ${
      isActive
        ? "text-blue-600"
        : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>

            <NavLink to="/categories" className={navLinkClass}>
              Categories
            </NavLink>

            <NavLink to="/deals" className={navLinkClass}>
              Deals
            </NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex h-10 w-64 items-center rounded-xl border border-slate-200 bg-slate-50 px-3">
              <Search size={18} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent px-2 text-sm outline-none"
              />
            </div>

            <Link
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <ShoppingCart size={20} />

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-black text-white">
                4
              </span>
            </Link>

            <Link
              to="/profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <UserCircle size={21} />
            </Link>

            <Link
              to="/login"
              className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Sign Up
            </Link>

            <Link
              to="/admin"
              className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm font-black text-blue-600 transition hover:border-blue-300 hover:bg-blue-100"
            >
              <ShieldCheck size={17} />
              Admin
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            <Link
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-600"
            >
              <ShoppingCart size={20} />

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-black text-white">
                4
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
            <div className="flex h-11 items-center rounded-xl border border-slate-200 bg-slate-50 px-3">
              <Search size={18} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent px-2 text-sm outline-none"
                autoFocus
              />
            </div>
          </div>
        )}

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
            <div className="space-y-1">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                <div className="rounded-xl px-3 py-3 hover:bg-slate-50">
                  Home
                </div>
              </NavLink>

              <NavLink
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                <div className="rounded-xl px-3 py-3 hover:bg-slate-50">
                  Shop
                </div>
              </NavLink>

              <NavLink
                to="/categories"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                <div className="rounded-xl px-3 py-3 hover:bg-slate-50">
                  Categories
                </div>
              </NavLink>

              <NavLink
                to="/deals"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                <div className="rounded-xl px-3 py-3 hover:bg-slate-50">
                  Deals
                </div>
              </NavLink>

              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              >
                Profile
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50"
              >
                Sign Up
              </Link>

              <Link
                to="/admin"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-sm font-black text-white"
              >
                <ShieldCheck size={18} />
                Admin Panel
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;