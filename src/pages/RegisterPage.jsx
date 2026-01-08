import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6">
      <div
        className="w-full max-w-md sm:max-w-lg bg-white border rounded-2xl shadow-sm
                   p-6 sm:p-8 md:p-10"
      >
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">
          Create your DukanPal account
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mb-6">
          Register using your email to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border rounded-lg px-4 py-2.5
                         text-sm sm:text-base
                         outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border rounded-lg px-4 py-2.5
                         text-sm sm:text-base
                         outline-none focus:ring-2 focus:ring-slate-900"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              We’ll send a verification code to this email
            </p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone number{" "}
              <span className="text-slate-500 font-normal">
                (for order updates)
              </span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-4 py-2.5
                         text-sm sm:text-base
                         outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
              className="mt-1.5"
            />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              I agree to the{" "}
              <span className="underline cursor-pointer font-medium">
                Terms & Privacy Policy
              </span>
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2.5 sm:py-3
                       rounded-lg font-medium
                       hover:bg-slate-800 transition"
          >
            Continue
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm sm:text-base text-slate-600">
          Already have an account?{" "}
          <NavLink
            to="/applayout/login"
            className="font-medium text-slate-900 hover:underline"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}
