import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { sendPasswordReset } from "../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      await sendPasswordReset(email);

      setSuccess(
        "If an account exists with this email, a password reset link has been sent."
      );

    } catch (err) {
      setError(err.message || "Unable to send reset email.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#07111F] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-white">
            Forgot Password
          </h1>

          <p className="text-slate-400 mt-3">
            Enter your email to receive a password reset link.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
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
                placeholder="you@example.com"
                className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12 pr-4 text-white outline-none"
              />

            </div>

          </div>

          {error && (
            <div className="rounded-xl border border-red-500 bg-red-500/10 p-3 text-red-300 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-xl border border-green-500 bg-green-500/10 p-3 text-green-300 text-sm">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

        </form>

        <div className="text-center mt-8">

          <Link
            to="/login"
            className="text-cyan-400"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}
