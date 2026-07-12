import {
  ChevronRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const assets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    balance: "0.245 BTC",
    value: "$28,942.10",
    change: "+2.45%",
    up: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "4.583 ETH",
    value: "$19,843.55",
    change: "+1.82%",
    up: true,
  },
  {
    symbol: "SOL",
    name: "Solana",
    balance: "58.42 SOL",
    value: "$12,514.33",
    change: "-0.62%",
    up: false,
  },
  {
    symbol: "XRP",
    name: "XRP",
    balance: "3,250 XRP",
    value: "$9,785.44",
    change: "+4.11%",
    up: true,
  },
];

export default function AssetList() {
  return (
    <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-5">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-lg font-bold text-white">
          My Assets
        </h2>

        <button className="text-cyan-400 text-sm">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {assets.map((asset) => (

          <button
            key={asset.symbol}
            className="w-full rounded-2xl bg-[#101E31] border border-slate-700 p-4 flex items-center justify-between hover:border-cyan-400 transition"
          >

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold">

                {asset.symbol[0]}

              </div>

              <div className="text-left">

                <h3 className="font-semibold text-white">
                  {asset.symbol}
                </h3>

                <p className="text-sm text-slate-400">
                  {asset.name}
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  {asset.balance}
                </p>

              </div>

            </div>

            <div className="text-right">

              <h3 className="font-semibold text-white">
                {asset.value}
              </h3>

              <div
                className={`flex items-center justify-end gap-1 mt-1 ${
                  asset.up
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >

                {asset.up ? (
                  <TrendingUp size={15} />
                ) : (
                  <TrendingDown size={15} />
                )}

                <span className="text-sm">
                  {asset.change}
                </span>

              </div>

            </div>

            <ChevronRight
              size={18}
              className="text-slate-500 ml-3"
            />

          </button>

        ))}

      </div>

    </div>
  );
}
