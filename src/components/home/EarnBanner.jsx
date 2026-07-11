import { ArrowRight, Sparkles } from "lucide-react";

export default function EarnBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] p-6 shadow-2xl shadow-cyan-500/30">

      <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative z-10">

        <div className="flex items-center gap-2 mb-3">

          <Sparkles
            size={18}
            className="text-yellow-300"
          />

          <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wider">
            SafeTradex Earn
          </span>

        </div>

        <h2 className="text-2xl font-bold text-white leading-tight">

          Grow your crypto while you sleep

        </h2>

        <p className="mt-3 text-cyan-100">

          Stake supported assets and earn
          competitive rewards with flexible
          and fixed earning products.

        </p>

        <button className="mt-6 flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-lg transition hover:scale-105">

          Explore Earn

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}
