import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/home/BottomNavigation";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white">

      <main className="pb-28">
        <Outlet />
      </main>

      <BottomNavigation />

    </div>
  );
}
