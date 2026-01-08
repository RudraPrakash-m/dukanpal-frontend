import { NavLink, useNavigate } from "react-router-dom";
import {
  Store,
  Search,
  User,
  ShoppingCart,
  LogIn,
  Heart,
  Package,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import { useState, useRef } from "react";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const isLoggedIn = false; // replace later with auth context
  const navigate = useNavigate();

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);

  // Desktop dropdown
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  // Mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------------- SELLER ---------------- */
  const handleBecomeSeller = () => {
    if (!isLoggedIn) {
      navigate("/applayout/login", { state: { from: "/seller" } });
    } else {
      navigate("/seller");
    }
    setMobileOpen(false);
  };

  /* ---------------- DESKTOP HOVER ---------------- */
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 h-16">
        {/* ===== TOP BAR ===== */}
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <NavLink
            to="/applayout"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <Store /> DUKANPAL
          </NavLink>

          {/* SEARCH (DESKTOP) */}
          <div className="hidden md:flex flex-1 justify-center px-6">
            <div className="w-full max-w-xl flex items-center bg-slate-100 rounded-lg px-4 py-2">
              <Search size={18} className="text-slate-500 mr-2" />
              <input
                type="search"
                placeholder="Search for products"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-5">
            {/* BECOME SELLER (DESKTOP) */}
            <button
              onClick={handleBecomeSeller}
              className="hidden md:block text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              Become a Seller
            </button>

            {/* CART */}
            <NavLink to="/applayout/cart" className="relative">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] px-1.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </NavLink>

            {/* ACCOUNT (DESKTOP) */}
            <div
              className="relative hidden md:block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-slate-700">
                <User size={22} />
                <span className="text-sm font-medium">
                  {isLoggedIn ? "Account" : "Login"}
                </span>
              </button>

              {open && (
                <div
                  className="absolute right-0 top-full mt-2 w-56 bg-white border rounded-lg shadow-lg py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {!isLoggedIn ? (
                    <>
                      <NavLink
                        to="/applayout/login"
                        className="flex gap-3 px-4 py-2 hover:bg-slate-50"
                      >
                        <LogIn size={16} /> Login
                      </NavLink>
                      <NavLink
                        to="/applayout/register"
                        className="flex gap-3 px-4 py-2 hover:bg-slate-50"
                      >
                        <UserPlus size={16} /> Register
                      </NavLink>
                      <NavLink
                        to="/orders"
                        className="flex gap-3 px-4 py-2 hover:bg-slate-50"
                      >
                        <Package size={16} /> Orders
                      </NavLink>
                      <NavLink
                        to="/wishlist"
                        className="flex gap-3 px-4 py-2 hover:bg-slate-50"
                      >
                        <Heart size={16} /> Wishlist
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/account"
                        className="flex gap-3 px-4 py-2 hover:bg-slate-50"
                      >
                        <User size={16} /> My Account
                      </NavLink>
                      <NavLink
                        to="/orders"
                        className="flex gap-3 px-4 py-2 hover:bg-slate-50"
                      >
                        <Package size={16} /> Orders
                      </NavLink>
                      <NavLink
                        to="/wishlist"
                        className="flex gap-3 px-4 py-2 hover:bg-slate-50"
                      >
                        <Heart size={16} /> Wishlist
                      </NavLink>
                      <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-slate-50">
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* HAMBURGER (MOBILE) */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* ===== SEARCH (MOBILE) ===== */}
        <div className="md:hidden mt-3">
          <div className="flex items-center bg-slate-100 rounded-lg px-4 py-2">
            <Search size={18} className="text-slate-500 mr-2" />
            <input
              type="search"
              placeholder="Search for products"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {mobileOpen && (
          <div className="md:hidden mt-4 border-t bg-white">
            <div className="flex flex-col text-sm">
              {/* Become Seller */}
              <button
                onClick={handleBecomeSeller}
                className="px-4 py-3 text-left font-semibold border-b"
              >
                Become a Seller
              </button>

              {!isLoggedIn ? (
                <>
                  <NavLink
                    to="/applayout/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 border-b"
                  >
                    <LogIn size={16} /> Login
                  </NavLink>

                  <NavLink
                    to="/applayout/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 border-b"
                  >
                    <UserPlus size={16} /> Register
                  </NavLink>

                  <NavLink
                    to="/orders"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 border-b"
                  >
                    <Package size={16} /> Orders
                  </NavLink>

                  <NavLink
                    to="/wishlist"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3"
                  >
                    <Heart size={16} /> Wishlist
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/account"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 border-b"
                  >
                    <User size={16} /> My Account
                  </NavLink>

                  <NavLink
                    to="/orders"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 border-b"
                  >
                    <Package size={16} /> Orders
                  </NavLink>

                  <NavLink
                    to="/wishlist"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 border-b"
                  >
                    <Heart size={16} /> Wishlist
                  </NavLink>

                  <button className="flex items-center gap-3 px-4 py-3 text-left text-red-600">
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
