import {
  Maximize2,
  CandlestickChart,
} from "lucide-react";

export default function TradingChart() {
  return (
    <div className="rounded-3xl bg-[#0C1828] border border-slate-800 overflow-hidden">

      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <CandlestickChart
            size={20}
            className="text-cyan-400"
          />

          <h2 className="font-bold text-white">
            Live Chart
          </h2>

        </div>

        <button className="text-slate-400 hover:text-cyan-400">

          <Maximize2 size={20} />

        </button>

      </div>

      <div className="h-[420px] flex items-center justify-center bg-gradient-to-br from-[#07111F] via-[#0C1828] to-[#101E31]">

        <div className="text-center">

          <CandlestickChart
            size={60}
            className="mx-auto text-cyan-400 mb-4"
          />

          <h3 className="text-xl font-bold text-white">
            TradingView Chart
          </h3>

          <p className="text-slate-400 mt-2">
            This area will display the
            official TradingView live chart.
          </p>

        </div>

      </div>

    </div>
  );
}
