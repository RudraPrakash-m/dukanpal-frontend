export default function CategoryBar({ categories, selected, onSelect }) {
  return (
    <div className="bg-white border-b sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-auto">
        <div className="flex gap-6 whitespace-nowrap">

          {/* All */}
          <button
            onClick={() => onSelect("all")}
            className={`text-sm font-medium pb-1 ${
              selected === "all"
                ? "text-slate-900 border-b-2 border-slate-900"
                : "text-slate-600"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`text-sm capitalize font-medium pb-1 ${
                selected === cat
                  ? "text-slate-900 border-b-2 border-slate-900"
                  : "text-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}
