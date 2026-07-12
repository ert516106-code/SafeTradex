import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3">

      <div className="flex-1 relative">

        <Search
          size={20}
          className="absolute left-4 top-4 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search cryptocurrencies..."
          className="w-full h-14 rounded-2xl bg-[#0C1828] border border-slate-800 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition"
        />

      </div>

      <button className="w-14 h-14 rounded-2xl bg-[#0C1828] border border-slate-800 flex items-center justify-center hover:border-cyan-400 transition">

        <SlidersHorizontal
          size={20}
          className="text-cyan-400"
        />

      </button>

    </div>
  );
}
