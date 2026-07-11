import PortfolioCard from "../components/home/PortfolioCard";
import QuickActions from "../components/home/QuickActions";
import Watchlist from "../components/home/Watchlist";
import EarnBanner from "../components/home/EarnBanner";
import MarketNews from "../components/home/MarketNews";
import BottomNavigation from "../components/home/BottomNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white pb-28">

      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800">

        <div className="max-w-md mx-auto flex items-center justify-between px-5 py-4">

          <button className="text-2xl">
            ☰
          </button>

          <div className="text-center">

            <h1 className="text-xl font-bold tracking-wide">
              SafeTradex
            </h1>

            <p className="text-xs text-slate-400">
              Trade Global, Invest Safe
            </p>

          </div>

          <button className="text-xl">
            🔔
          </button>

        </div>

      </div>

      <div className="max-w-md mx-auto px-4 py-5 space-y-5">

        <PortfolioCard />

        <QuickActions />

        <Watchlist />

        <EarnBanner />

        <MarketNews />

      </div>

      <BottomNavigation />

    </div>
  );
}
