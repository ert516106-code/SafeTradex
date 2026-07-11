import { ArrowRight } from "lucide-react";

export default function MarketNews() {

  const news = [
    {
      category: "Bitcoin",
      title: "Bitcoin continues strong momentum as institutional demand increases.",
      time: "12 min ago",
    },
    {
      category: "Ethereum",
      title: "Ethereum ecosystem expands with new staking opportunities.",
      time: "45 min ago",
    },
    {
      category: "Market",
      title: "Crypto market capitalization climbs as major altcoins rally.",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-5">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-lg font-bold text-white">
          Latest Crypto News
        </h2>

        <button className="text-cyan-400 text-sm">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {news.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-[#101E31] border border-slate-700 overflow-hidden hover:border-cyan-500 transition"
          >

            <div className="h-36 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center">

              <span className="text-5xl">
                📰
              </span>

            </div>

            <div className="p-4">

              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold">

                {item.category}

              </span>

              <h3 className="mt-3 text-white font-semibold leading-6">

                {item.title}

              </h3>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-slate-400 text-sm">

                  {item.time}

                </span>

                <button className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">

                  Read More

                  <ArrowRight size={16} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
