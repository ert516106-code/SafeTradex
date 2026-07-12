import PageHeader from "../components/common/PageHeader";

import SearchBar from "../components/markets/SearchBar";
import CategoryTabs from "../components/markets/CategoryTabs";
import TrendingCoins from "../components/markets/TrendingCoins";
import MarketList from "../components/markets/MarketList";

export default function Markets() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white pb-28">

      <PageHeader
        title="Markets"
        subtitle="Live Cryptocurrency Market"
      />

      <div className="max-w-md mx-auto px-4 py-5 space-y-5">

        <SearchBar />

        <CategoryTabs />

        <TrendingCoins />

        <MarketList />

      </div>

    </div>
  );
}
