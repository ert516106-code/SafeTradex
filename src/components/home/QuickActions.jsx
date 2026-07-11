import {
  Wallet,
  ArrowUpCircle,
  CandlestickChart,
  RefreshCw,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Deposit",
      icon: Wallet,
    },
    {
      title: "Withdraw",
      icon: ArrowUpCircle,
    },
    {
      title: "Trade",
      icon: CandlestickChart,
    },
    {
      title: "Convert",
      icon: RefreshCw,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">

      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            key={action.title}
            className="rounded-2xl bg-[#0C1828] border border-slate-800 p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
          >

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">

              <Icon
                size={22}
                className="text-white"
              />

            </div>

            <span className="text-xs text-slate-300 font-medium">
              {action.title}
            </span>

          </button>
        );
      })}

    </div>
  );
}
