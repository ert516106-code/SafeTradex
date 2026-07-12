import { useState } from "react";

export default function BuySellPanel() {
  const [side, setSide] = useState("buy");

  return (
    <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-5">

      <div className="grid grid-cols-2 gap-3 mb-5">

        <button
          onClick={() => setSide("buy")}
          className={`h-12 rounded-2xl font-semibold transition ${
            side === "buy"
              ? "bg-green-500 text-white"
              : "bg-[#101E31] text-slate-400"
          }`}
        >
          Buy
        </button>

        <button
          onClick={() => setSide("sell")}
          className={`h-12 rounded-2xl font-semibold transition ${
            side === "sell"
              ? "bg-red-500 text-white"
              : "bg-[#101E31] text-slate-400"
          }`}
        >
          Sell
        </button>

      </div>

      <div className="space-y-4">

        <input
          type="number"
          placeholder="Price (USDT)"
          className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 px-4 text-white"
        />

        <input
          type="number"
          placeholder="Amount (BTC)"
          className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 px-4 text-white"
        />

        <input
          type="number"
          placeholder="Total (USDT)"
          className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 px-4 text-white"
        />

      </div>

      <button
        className={`w-full h-14 rounded-2xl mt-6 font-bold text-lg transition ${
          side === "buy"
            ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
            : "bg-gradient-to-r from-red-400 to-red-600 text-white"
        }`}
      >
        {side === "buy"
          ? "Buy BTC"
          : "Sell BTC"}
      </button>

    </div>
  );
}
