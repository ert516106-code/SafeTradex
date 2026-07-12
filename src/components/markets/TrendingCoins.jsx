import {
  TrendingUp,
  Bitcoin,
} from "lucide-react";

const trendingCoins = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$118,452",
    change: "+2.45%",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$4,285",
    change: "+1.82%",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$214.35",
    change: "+4.18%",
  },
  {
    symbol: "XRP",
    name: "XRP",
    price: "$2.94",
    change: "+3.11%",
  },
];

export default function TrendingCoins() {
  return (
    <div>

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-lg font-bold text-white">
          🔥 Trending Coins
        </h2>

        <button className="text-cyan-400 text-sm">
          View All
        </button>

      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">

        {trendingCoins.map((coin) => (

          <div
            key={coin.symbol}
            className="min-w-[180px] rounded-3xl bg-[#0C1828] border border-slate-800 p-5 hover:border-cyan-400 transition-all"
          >

            <div className="flex justify-between items-center">

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">

                <Bitcoin
                  size={22}
                  className="text-white"
                />

              </div>

              <TrendingUp
                size={18}
                className="text-green-400"
              />

            </div>

            <h3 className="mt-5 text-xl font-bold text-white">

              {coin.symbol}

            </h3>

            <p className="text-slate-400 text-sm">

              {coin.name}

            </p>

            <h4 className="mt-4 text-lg font-semibold text-white">

              {coin.price}

            </h4>

            <p className="text-green-400 font-semibold mt-1">

              {coin.change}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}
