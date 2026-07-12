import PageHeader from "../components/common/PageHeader";

import AssetsSummary from "../components/assets/AssetsSummary";
import WalletActions from "../components/assets/WalletActions";
import AssetList from "../components/assets/AssetList";
import TransactionHistory from "../components/assets/TransactionHistory";

export default function Assets() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white pb-28">

      <PageHeader
        title="Assets"
        subtitle="Manage Your Portfolio"
      />

      <div className="max-w-md mx-auto px-4 py-5 space-y-5">

        <AssetsSummary />

        <WalletActions />

        <AssetList />

        <TransactionHistory />

      </div>

    </div>
  );
}
