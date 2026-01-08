import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl border p-4 flex flex-col">
      <div className="h-40 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <h3 className="text-sm font-medium line-clamp-2">
        {product.title}
      </h3>

      <p className="text-sm text-slate-600 mb-3">
        ₹{Math.round(product.price * 83)}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
