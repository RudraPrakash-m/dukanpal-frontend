export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-slate-600">

        <div>
          <h4 className="font-semibold text-slate-900 mb-2">DUKANPAL</h4>
          <p>
            A modern marketplace connecting buyers and sellers with transparency
            and trust.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-2">Shop</h4>
          <ul className="space-y-1">
            <li>All Products</li>
            <li>Trending</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-2">Sell</h4>
          <ul className="space-y-1">
            <li>Become a Seller</li>
            <li>Seller Dashboard</li>
            <li>Seller Policies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center py-4 text-xs text-slate-500">
        © 2026 DukanPal. All rights reserved.
      </div>
    </footer>
  );
}
