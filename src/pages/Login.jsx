import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

import { loginUser } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      await loginUser(email, password);

      navigate("/home", {
        replace: true,
      });
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#07111F] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-white text-4xl font-bold">
            SafeTradex
          </h1>

          <p className="text-slate-400 mt-3">
            Sign in to your account
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="bg-[#0C1828] border border-slate-800 rounded-3xl p-6 space-y-5"
        >

          <div>

            <label className="text-white">
              Email
            </label>

            <div className="relative mt-2">

              <Mail
                size={18}
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
                className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12 pr-4 text-white outline-none"
              />

            </div>

          </div>

          <div>

            <label className="text-white">
              Password
            </label>

            <div className="relative mt-2">

              <Lock
                size={18}
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12 pr-12 text-white outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-3 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          {error && (
            <div className="rounded-xl border border-red-500 bg-red-500/10 p-3 text-red-300 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold disabled:opacity-50"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>

          <div className="text-center">

            <Link
              to="/forgot-password"
              className="text-sky-400 text-sm"
            >
              Forgot Password?
            </Link>

          </div>

        </form>

        <div className="text-center mt-8 text-slate-400">

          Don't have an account?

          <Link
            to="/register"
            className="text-sky-400 ml-2"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}
