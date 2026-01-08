import { useEffect, useState } from "react";
import CategoryBar from "../component/CategoryBar";
import ProductCard from "../component/ProductCard";
import ProductSkeleton from "../component/products_page_ske/ProductSkeleton";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setVisibleCount((prev) => prev + 4);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">

      <CategoryBar
        categories={categories}
        selected={selectedCategory}
        onSelect={(cat) => {
          setSelectedCategory(cat);
          setVisibleCount(8);
        }}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {/* Skeletons */}
          {loading &&
            Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}

          {/* Products */}
          {!loading &&
            filteredProducts
              .slice(0, visibleCount)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </main>
    </div>
  );
}
