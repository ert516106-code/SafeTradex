import {
  Eye,
  TrendingUp,
} from "lucide-react";

export default function AssetsSummary() {
  return (
    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#132B7A] via-[#0B49D8] to-[#07111F] p-[1px] shadow-2xl shadow-cyan-500/20">

      <div className="rounded-3xl bg-[#0C1828] p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-400">
              Total Assets
            </p>

            <h1 className="text-4xl font-bold mt-2">
              $24,892.45
            </h1>

          </div>

          <button className="w-11 h-11 rounded-2xl bg-[#101E31] flex items-center justify-center">

            <Eye
              size={20}
              className="text-cyan-400"
            />

          </button>

        </div>

        <div className="mt-6 flex items-center gap-2 text-green-400">

          <TrendingUp size={18} />

          <span className="font-semibold">
            +2.45%
          </span>

          <span className="text-slate-400">
            Today
          </span>

        </div>

      </div>

    </div>
  );
}
