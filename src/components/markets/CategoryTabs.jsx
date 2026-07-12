import { useState } from "react";

const tabs = [
  "All",
  "Trending",
  "Favorites",
  "Gainers",
  "Losers",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`whitespace-nowrap px-5 py-2 rounded-full transition-all duration-300 ${
            active === tab
              ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
              : "bg-[#0C1828] border border-slate-800 text-slate-400"
          }`}
        >
          {tab}
        </button>

      ))}

    </div>
  );
}
