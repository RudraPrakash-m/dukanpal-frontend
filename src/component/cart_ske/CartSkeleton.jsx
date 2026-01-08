export default function CartSkeleton() {
  return (
    <div className="bg-white border rounded-xl p-4 animate-pulse flex gap-4">
      <div className="h-24 w-24 bg-slate-200 rounded-lg" />

      <div className="flex-1">
        <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-slate-200 rounded w-1/2 mb-4" />
        <div className="h-8 bg-slate-200 rounded w-32" />
      </div>

      <div className="h-6 bg-slate-200 rounded w-16" />
    </div>
  );
}
