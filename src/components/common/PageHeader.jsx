import { Bell, User } from "lucide-react";

export default function PageHeader({
  title,
  subtitle,
  onProfileClick,
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#07111F]/90 backdrop-blur-xl border-b border-slate-800">

      <div className="max-w-md mx-auto px-5 py-4 flex items-center justify-between">

        <div>

          <h1 className="text-xl font-bold text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm text-slate-400 mt-1">
              {subtitle}
            </p>
          )}

        </div>

        <div className="flex items-center gap-3">

          <button className="w-11 h-11 rounded-2xl bg-[#101E31] border border-slate-700 flex items-center justify-center">

            <Bell
              size={20}
              className="text-white"
            />

          </button>

          <button
            onClick={onProfileClick}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center"
          >
            <User
              size={20}
              className="text-white"
            />
          </button>

        </div>

      </div>

    </header>
  );
}
