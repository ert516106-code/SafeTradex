import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff } from "lucide-react";
import { updatePassword } from "../services/authService";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    try {
      setLoading(true);

      await updatePassword(password);

      setSuccess(
        "Password updated successfully."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {

      setError(
        err.message ||
        "Unable to update password."
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="min-h-screen bg-[#07111F] flex justify-center items-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-white">
            Reset Password
          </h1>

          <p className="text-slate-400 mt-3">
            Enter your new password.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-[#0C1828] border border-slate-800 p-6 space-y-5"
        >

          <div>

            <label className="text-white">
              New Password
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
                className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12 pr-12 text-white"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-3 text-slate-400"
              >
                {showPassword
                  ? <EyeOff size={18}/>
                  : <Eye size={18}/>}
              </button>

            </div>

          </div>

          <div>

            <label className="text-white">
              Confirm Password
            </label>

            <div className="relative mt-2">

              <Lock
                size={18}
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12 pr-12 text-white"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-3 text-slate-400"
              >
                {showConfirmPassword
                  ? <EyeOff size={18}/>
                  : <Eye size={18}/>}
              </button>

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
            className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold text-white disabled:opacity-50"
          >
            {loading
              ? "Updating..."
              : "Update Password"}
          </button>

        </form>

      </div>

    </div>
  );
}
