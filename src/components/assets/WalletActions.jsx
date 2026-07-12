import {
  Wallet,
  ArrowUpCircle,
  RefreshCw,
  ArrowRightLeft,
} from "lucide-react";

export default function WalletActions() {
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
      title: "Convert",
      icon: RefreshCw,
    },
    {
      title: "Transfer",
      icon: ArrowRightLeft,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">

      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            key={action.title}
            className="rounded-2xl bg-[#0C1828] border border-slate-800 p-4 flex flex-col items-center justify-center gap-3 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition active:scale-95"
          >

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">

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
