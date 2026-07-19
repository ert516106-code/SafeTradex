import {
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Wallet,
} from "lucide-react";

const assets = [];

const visibleAssets = assets.filter(
  (asset) => Number(asset.balance || 0) > 0
);

export default function AssetList() {
  return (
    <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold text-white">
          My Assets
        </h2>

        <button className="text-cyan-400 text-sm hover:text-cyan-300 transition">
          View All
        </button>
      </div>

      {visibleAssets.length === 0 ? (
        <div className="py-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-5">
            <Wallet
              size={38}
              className="text-cyan-400"
            />
          </div>

          <h3 className="text-white text-lg font-semibold">
            No Assets Yet
          </h3>

          <p className="text-slate-400 text-sm mt-2 max-w-[260px]">
            Your assets will appear here once funds have been added to your account.
          </p>

          <button
            className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
          >
            Deposit Funds
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {visibleAssets.map((asset) => (
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
      )}
    </div>
  );
}                  <TrendingDown size={15} />
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
