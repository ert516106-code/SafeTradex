import PageHeader from "../components/common/PageHeader";

import TradingChart from "../components/trade/TradingChart";
import TradingPair from "../components/trade/TradingPair";
import BuySellPanel from "../components/trade/BuySellPanel";
import OpenOrders from "../components/trade/OpenOrders";

export default function Trade() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white pb-28">

      <PageHeader
        title="Trade"
        subtitle="Spot Trading"
      />

      <div className="max-w-md mx-auto px-4 py-5 space-y-5">

        <TradingPair />

        <TradingChart />

        <BuySellPanel />

        <OpenOrders />

      </div>

    </div>
  );
}
