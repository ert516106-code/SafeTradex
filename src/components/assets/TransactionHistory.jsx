import {
  ArrowDownLeft,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "Deposit",
    icon: ArrowDownLeft,
    amount: "+0.250 BTC",
    value: "$29,500",
    status: "Completed",
  },
  {
    id: 2,
    type: "Withdraw",
    icon: ArrowUpRight,
    amount: "-500 USDT",
    value: "$500",
    status: "Pending",
  },
  {
    id: 3,
    type: "Convert",
    icon: RefreshCw,
    amount: "ETH → BTC",
    value: "$1,250",
    status: "Completed",
  },
];

export default function TransactionHistory() {
  return (
    <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-5">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-lg font-bold text-white">
          Recent Transactions
        </h2>

        <button className="text-cyan-400 text-sm">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {transactions.map((tx) => {
          const Icon = tx.icon;

          return (
            <div
              key={tx.id}
              className="rounded-2xl bg-[#101E31] border border-slate-700 p-4 flex items-center justify-between"
            >

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">

                  <Icon
                    size={20}
                    className="text-white"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {tx.type}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {tx.amount}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <h3 className="font-semibold text-white">
                  {tx.value}
                </h3>

                <span
                  className={`text-sm ${
                    tx.status === "Completed"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {tx.status}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}
