import { NavLink } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6">
      
      <div className="w-full max-w-md sm:max-w-lg bg-white border rounded-2xl shadow-sm 
                      p-6 sm:p-8 md:p-10">
        
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">
          Login to DukanPal
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mb-6">
          Access your account to continue shopping
        </p>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2.5
                         text-sm sm:text-base
                         outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2.5
                         text-sm sm:text-base
                         outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2.5 sm:py-3
                       rounded-lg font-medium
                       hover:bg-slate-800 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-sm text-slate-500">
          Don’t have an account?
        </div>

        {/* Register Link */}
        <NavLink
          to="/applayout/register"
          className="block text-center border border-slate-300
                     py-2.5 sm:py-3 rounded-lg font-medium
                     hover:bg-slate-100 transition"
        >
          Create a new account
        </NavLink>

      </div>
    </div>
  );
}
