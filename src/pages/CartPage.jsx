import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../component/CartItem";
import CartSkeleton from "../component/cart_ske/CartSkeleton";

export default function CartPage() {
  const { cartItems } = useCart();
  const [loading, setLoading] = useState(true);

  // Simulated loading (UX polish)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Total quantity (Flipkart-style)
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Total amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity * 83,
    0
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">

        {/* CART ITEMS */}
        <section className="md:col-span-2 space-y-4">
          <h1 className="text-xl font-semibold mb-2">
            My Cart ({totalItems})
          </h1>

          {/* Skeleton */}
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <CartSkeleton key={i} />
            ))}

          {/* Empty State */}
          {!loading && cartItems.length === 0 && (
            <div className="bg-white border rounded-xl p-8 text-center text-slate-600">
              Your cart is empty.
            </div>
          )}

          {/* Cart Items */}
          {!loading &&
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
        </section>

        {/* PRICE SUMMARY */}
        <aside className="bg-white border rounded-xl p-6 h-fit">
          <h2 className="font-semibold mb-4">Price Details</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Total Amount</span>
            <span>₹{Math.round(totalAmount)}</span>
          </div>

          <div className="border-t my-4" />

          <button
            className="w-full bg-slate-900 text-white py-3 rounded-lg
                       hover:bg-slate-800 disabled:opacity-50"
            disabled={totalItems === 0}
          >
            Place Order
          </button>
        </aside>

      </main>
    </div>
  );
}
