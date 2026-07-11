import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-[#07111F] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30">

            <span className="text-white text-5xl font-black">
              S
            </span>

          </div>
        </div>

        {/* Title */}
        <div className="text-center">

          <h1 className="text-white text-4xl font-bold">
            Welcome to
          </h1>

          <h2 className="text-cyan-400 text-5xl font-extrabold mt-2">
            SafeTradex
          </h2>

          <p className="text-slate-400 mt-5 leading-7">
            Log in or sign up to start your
            trading journey.
          </p>

        </div>

        {/* Buttons */}
        <div className="mt-12 space-y-5">

          <Link
            to="/login"
            className="block w-full"
          >
            <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-lg shadow-xl shadow-cyan-500/25 active:scale-95 transition">

              Log In

            </button>
          </Link>

          <Link
            to="/register"
            className="block w-full"
          >
            <button className="w-full h-14 rounded-2xl border border-cyan-400 text-cyan-400 bg-transparent font-bold text-lg active:scale-95 transition">

              Create Account

            </button>
          </Link>

        </div>

        {/* Footer */}
        <div className="mt-10 text-center">

          <p className="text-xs text-slate-500 leading-6">
            By continuing you agree to our
            <br />
            Terms of Service & Privacy Policy.
          </p>

        </div>

      </div>

    </div>
  );
}
