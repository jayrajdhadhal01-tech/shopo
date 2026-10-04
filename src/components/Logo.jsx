import { ShoppingCart } from "lucide-react";

const Logo = () => {
  return (
    <a
      href="/"
      aria-label="Shopo Home"
      className="group inline-flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-700">
        <ShoppingCart
          size={20}
          strokeWidth={2.2}
        />
      </div>

      <span className="text-[26px] font-black leading-none tracking-[-0.06em] text-blue-600">
        Shop<span className="text-cyan-500">o</span>
      </span>
    </a>
  );
};

export default Logo;