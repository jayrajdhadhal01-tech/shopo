import {
  Mail,
  ArrowRight,
  Globe,
  MessageCircle,
  Play,
  Camera,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    console.log("Newsletter Form Values:", values);
  };

  return (
    <footer className="border-t border-blue-100 bg-white">
      {/* Newsletter */}
      <div className="bg-blue-600">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              Stay Updated
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Get the latest from Shopo.
            </h2>

            <p className="mt-2 text-sm text-blue-100">
              New products, exclusive deals and special offers.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex w-full max-w-md gap-2"
          >
            <div className="relative flex-1">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl bg-white pl-11 pr-4 text-sm text-blue-950 outline-none placeholder:text-blue-300 focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            <button
              type="submit"
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 text-sm font-bold text-blue-950 transition-all hover:bg-cyan-300 active:scale-95"
            >
              Subscribe
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-6 text-blue-400">
              Shopo makes online shopping simple, modern and enjoyable.
              Discover products you'll love at prices you'll appreciate.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Website"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
              >
                <Globe size={17} />
              </a>

              <a
                href="#"
                aria-label="Messages"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
              >
                <MessageCircle size={17} />
              </a>

              <a
                href="#"
                aria-label="Videos"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
              >
                <Play size={17} />
              </a>

              <a
                href="#"
                aria-label="Photos"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
              >
                <Camera size={17} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-bold text-blue-950">
              Shop
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/shop"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  All Products
                </a>
              </li>

              <li>
                <a
                  href="/categories"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="/deals"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  Deals
                </a>
              </li>

              <li>
                <a
                  href="/new-arrivals"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-bold text-blue-950">
              Account
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/account"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  My Account
                </a>
              </li>

              <li>
                <a
                  href="/orders"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  Orders
                </a>
              </li>

              <li>
                <a
                  href="/wishlist"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  Wishlist
                </a>
              </li>

              <li>
                <a
                  href="/cart"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold text-blue-950">
              Support
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/contact"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="/shipping"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  Shipping
                </a>
              </li>

              <li>
                <a
                  href="/returns"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  Returns
                </a>
              </li>

              <li>
                <a
                  href="/faq"
                  className="text-sm text-blue-400 transition-colors hover:text-blue-600"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-blue-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-blue-400">
            © 2026 Shopo. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="text-xs text-blue-400 transition-colors hover:text-blue-600"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-xs text-blue-400 transition-colors hover:text-blue-600"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;