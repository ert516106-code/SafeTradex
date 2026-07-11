import {
  Star,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function Watchlist() {

  const coins = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$118,452.23",
      change: "+2.45%",
      up: true,
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "$4,285.40",
      change: "+1.87%",
      up: true,
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: "$214.38",
      change: "-0.92%",
      up: false,
    },
    {
      symbol: "XRP",
      name: "XRP",
      price: "$2.94",
      change: "+4.12%",
      up: true,
    },
  ];

  return (
    <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-5">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-lg font-bold text-white">
          Watchlist
        </h2>

        <button className="text-cyan-400 text-sm">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {coins.map((coin) => (

          <div
            key={coin.symbol}
            className="flex items-center justify-between rounded-2xl bg-[#101E31] px-4 py-3 hover:bg-[#13233A] transition"
          >

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold">

                {coin.symbol[0]}

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  {coin.symbol}
                </h3>

                <p className="text-xs text-slate-400">
                  {coin.name}
                </p>

              </div>

            </div>

            <div className="text-right">

              <h3 className="font-semibold text-white">
                {coin.price}
              </h3>

              <div
                className={`flex items-center justify-end gap-1 text-sm ${
                  coin.up
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >

                {coin.up ? (
                  <TrendingUp size={15} />
                ) : (
                  <TrendingDown size={15} />
                )}

                {coin.change}

              </div>

            </div>

            <button className="ml-4">

              <Star
                size={18}
                className="text-yellow-400"
              />

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}
