import {
  Star,
  ChevronDown,
  TrendingUp,
} from "lucide-react";

export default function TradingPair() {
  return (
    <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
            ₿
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-xl font-bold text-white">
                BTC / USDT
              </h2>

              <ChevronDown
                size={18}
                className="text-slate-400"
              />

            </div>

            <p className="text-slate-400 text-sm">
              Bitcoin
            </p>

          </div>

        </div>

        <button>

          <Star
            size={22}
            className="text-yellow-400"
          />

        </button>

      </div>

      <div className="mt-5">

        <h1 className="text-4xl font-bold text-white">
          $118,452.32
        </h1>

        <div className="mt-2 flex items-center gap-2 text-green-400">

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
