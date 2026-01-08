import { NavLink } from "react-router-dom";
import { Store, ShieldCheck, Zap, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">

      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Store className="text-slate-800" />
          DUKANPAL
        </div>

        <NavLink
          to="/applayout"
          className="text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          Enter Store
        </NavLink>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 pt-28 pb-32 text-center">

          {/* Single H1 for SEO */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Modern Online Shopping <br /> Built for Simplicity
          </h1>

          <p className="text-lg text-slate-600 mb-10">
            Dukan delivers a clean, fast, and trustworthy shopping experience —
            no clutter, no distractions, just quality.
          </p>

          <NavLink
            to="/applayout"
            className="inline-block bg-slate-900 text-white px-10 py-4 rounded-lg
            text-lg font-semibold hover:bg-slate-800 transition"
          >
            Enter Store
          </NavLink>
        </section>

        {/* Value Proposition */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

            <div>
              <ShieldCheck className="mx-auto mb-4 text-slate-800" size={36} />
              <h2 className="font-semibold text-xl mb-2">
                Trusted Products
              </h2>
              <p className="text-slate-600">
                Every product is carefully verified for quality and reliability.
              </p>
            </div>

            <div>
              <Zap className="mx-auto mb-4 text-slate-800" size={36} />
              <h2 className="font-semibold text-xl mb-2">
                Fast & Clean Experience
              </h2>
              <p className="text-slate-600">
                Optimized for speed, clarity, and ease of use on all devices.
              </p>
            </div>

            <div>
              <Users className="mx-auto mb-4 text-slate-800" size={36} />
              <h2 className="font-semibold text-xl mb-2">
                Customer First
              </h2>
              <p className="text-slate-600">
                Built around transparency, trust, and real user needs.
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-500">
        © 2026 Dukan. All rights reserved.
      </footer>

    </div>
  );
}
