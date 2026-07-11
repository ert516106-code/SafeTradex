import { ArrowUpRight } from "lucide-react";

export default function PortfolioCard() {
  return (
    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#132B7A] via-[#0B49D8] to-[#07111F] p-[1px] shadow-2xl shadow-blue-600/30">

      <div className="rounded-3xl bg-[#0C1828] p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-400 text-sm">
              Total Portfolio Value
            </p>

            <h2 className="text-4xl font-bold mt-2">
              $24,892.45
            </h2>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-500/15 px-3 py-1">

              <ArrowUpRight
                size={16}
                className="text-green-400"
              />

              <span className="text-green-400 text-sm font-semibold">
                +2.45% (24h)
              </span>

            </div>

          </div>

          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/20 blur-xl" />

        </div>

        <div className="mt-8">

          <div className="h-24 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/20 to-cyan-500/10 flex items-end justify-between px-2 pb-3">

            <div className="w-2 h-8 rounded-full bg-cyan-400" />

            <div className="w-2 h-12 rounded-full bg-cyan-400" />

            <div className="w-2 h-10 rounded-full bg-cyan-400" />

            <div className="w-2 h-16 rounded-full bg-cyan-400" />

            <div className="w-2 h-14 rounded-full bg-cyan-400" />

            <div className="w-2 h-20 rounded-full bg-cyan-400" />

            <div className="w-2 h-16 rounded-full bg-cyan-400" />

            <div className="w-2 h-24 rounded-full bg-cyan-400" />

          </div>

        </div>

      </div>

    </div>
  );
}
