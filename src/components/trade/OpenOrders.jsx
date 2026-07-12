import { Clock } from "lucide-react";

export default function OpenOrders() {
  return (
    <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-5">

      <div className="flex items-center gap-2 mb-5">

        <Clock
          size={20}
          className="text-cyan-400"
        />

        <h2 className="text-lg font-bold text-white">
          Open Orders
        </h2>

      </div>

      <div className="space-y-3">

        <div className="rounded-2xl bg-[#101E31] border border-slate-700 p-4">

          <div className="flex justify-between">

            <div>

              <h3 className="font-semibold text-white">
                Buy BTC
              </h3>

              <p className="text-slate-400 text-sm">
                Limit Order
              </p>

            </div>

            <span className="text-green-400 font-semibold">
              Open
            </span>

          </div>

          <div className="mt-4 flex justify-between text-sm">

            <span className="text-slate-400">
              Price
            </span>

            <span className="text-white">
              $118,400
            </span>

          </div>

          <div className="mt-2 flex justify-between text-sm">

            <span className="text-slate-400">
              Amount
            </span>

            <span className="text-white">
              0.025 BTC
            </span>

          </div>

        </div>

        <div className="rounded-2xl border border-dashed border-slate-700 p-8 text-center">

          <p className="text-slate-500">
            No additional open orders
          </p>

        </div>

      </div>

    </div>
  );
}
