import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white border rounded-xl p-4 flex gap-4 items-center">

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        className="h-24 w-24 object-contain"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-sm font-medium mb-1 line-clamp-2">
          {item.title}
        </h3>

        <p className="text-sm text-slate-600 mb-3">
          ₹{Math.round(item.price * 83)}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">

          {/* DECREASE (correct) */}
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="border rounded p-1 hover:bg-slate-100"
          >
            <Minus size={16} />
          </button>

          <span className="w-6 text-center font-medium">
            {item.quantity}
          </span>

          {/* INCREASE */}
          <button
            onClick={() => addToCart(item)}
            className="border rounded p-1 hover:bg-slate-100"
          >
            <Plus size={16} />
          </button>

          {/* REMOVE (explicit remove) */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 text-red-600 hover:text-red-700"
          >
            <Trash2 size={16} />
          </button>

        </div>
      </div>

      {/* Item Total */}
      <div className="font-semibold min-w-[80px] text-right">
        ₹{Math.round(item.price * item.quantity * 83)}
      </div>
    </div>
  );
}
