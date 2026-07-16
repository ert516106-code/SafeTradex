import { useState } from "react";
import { Bell, User, Menu } from "lucide-react";

import PortfolioCard from "../components/home/PortfolioCard";
import QuickActions from "../components/home/QuickActions";
import Watchlist from "../components/home/Watchlist";
import EarnBanner from "../components/home/EarnBanner";
import MarketNews from "../components/home/MarketNews";

import ProfileDrawer from "../components/profile/ProfileDrawer";

export default function Home() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#07111F] text-white">

        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#07111F]/90 backdrop-blur-xl border-b border-slate-800">
          <div className="max-w-md mx-auto px-5 py-4 flex items-center justify-between">

            <button className="w-11 h-11 rounded-2xl bg-[#101E31] border border-slate-700 flex items-center justify-center">
              <Menu size={20} />
            </button>

            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wide">
                SafeTrade
              </h1>

              <p className="text-xs text-slate-400">
                Secure Crypto Exchange
              </p>
            </div>

            <div className="flex items-center gap-3">

              <button className="w-11 h-11 rounded-2xl bg-[#101E31] border border-slate-700 flex items-center justify-center">
                <Bell size={20} />
              </button>

              <button
                onClick={() => {
                  alert("Profile button works!");
                  setProfileOpen(true);
                }}
                className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30"
              >
                <User size={20} />
              </button>

            </div>

          </div>
        </header>

        {/* Content */}
        <div className="max-w-md mx-auto px-4 py-5 space-y-5">

          <PortfolioCard />

          <QuickActions />

          <Watchlist />

          <EarnBanner />

          <MarketNews />

        </div>

      </div>

      <ProfileDrawer
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
        onLogout={() => {
          setProfileOpen(false);
          alert("Logout coming soon");
        }}
      />
    </>
  );
}
