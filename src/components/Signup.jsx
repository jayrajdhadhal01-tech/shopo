import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Signup Form Values:", formData);

    setErrors({});
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
        : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
    }`;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 py-10 sm:py-14">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-blue-900/10 lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden bg-gradient-to-br from-blue-600 to-cyan-500 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <UserPlus size={28} />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Welcome to Shopo
            </p>

            <h1 className="max-w-md text-4xl font-black leading-tight">
              Create your account and start shopping smarter.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-blue-50">
              Discover products you love, save your favorites, manage your
              orders, and enjoy a seamless shopping experience.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Personalized shopping experience",
              "Save products to your wishlist",
              "Track your orders easily",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={19} className="shrink-0" />
                <span className="text-sm font-medium text-blue-50">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-black tracking-tight text-gray-900">
                Create Account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Join Shopo and start your shopping journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass("name")}
                  />
                </div>

                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass("email")}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className={`${inputClass("password")} pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-blue-600"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className={`${inputClass("confirmPassword")} pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-blue-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-blue-600"
                />

                <span className="text-xs leading-5 text-gray-500">
                  I agree to Shopo's{" "}
                  <Link
                    to="/terms"
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30 active:translate-y-0"
              >
                <UserPlus size={19} />
                Create Account
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-blue-600 transition-colors hover:text-blue-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;