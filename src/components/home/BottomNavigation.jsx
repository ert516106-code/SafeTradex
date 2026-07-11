import {
  House,
  ChartCandlestick,
  CandlestickChart,
  Wallet,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Home",
    icon: House,
    path: "/home",
  },
  {
    name: "Markets",
    icon: ChartCandlestick,
    path: "/markets",
  },
  {
    name: "Trade",
    icon: CandlestickChart,
    path: "/trade",
  },
  {
    name: "Assets",
    icon: Wallet,
    path: "/assets",
  },
  {
    name: "Profile",
    icon: User,
    path: "/profile",
  },
];

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">

      <div className="max-w-md mx-auto px-4 pb-4">

        <div className="rounded-3xl bg-[#0C1828]/95 backdrop-blur-xl border border-slate-700 shadow-2xl">

          <div className="grid grid-cols-5 py-3">

            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <NavLink
                  key={menu.name}
                  to={menu.path}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1 transition ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-400"
                    }`
                  }
                >
                  <Icon size={22} />

                  <span className="text-xs font-medium">
                    {menu.name}
                  </span>
                </NavLink>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}
