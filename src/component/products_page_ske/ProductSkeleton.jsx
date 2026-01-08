export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl border p-4 animate-pulse flex flex-col">
      
      {/* Image placeholder */}
      <div className="h-40 bg-slate-200 rounded-lg mb-4" />

      {/* Title */}
      <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-slate-200 rounded w-1/2 mb-4" />

      {/* Price */}
      <div className="h-4 bg-slate-200 rounded w-1/3 mb-4" />

      {/* Button */}
      <div className="mt-auto h-9 bg-slate-200 rounded-lg" />
    </div>
  );
}
