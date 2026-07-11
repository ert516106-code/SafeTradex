import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
} from "lucide-react";

import {
  registerUser,
  loginUser,
} from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  // Registration Step
  const [step, setStep] = useState(1);

  // Step 1
  const [country, setCountry] = useState("");
  const [accepted, setAccepted] = useState(false);

  // Step 2
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [referralCode, setReferralCode] =
    useState("");

  // UI
  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // Countries
  const countries = [

    // Asia
    "Philippines",
    "Singapore",
    "Japan",
    "South Korea",
    "Hong Kong SAR",
    "Taiwan",
    "Thailand",
    "Malaysia",
    "Indonesia",
    "Vietnam",
    "India",
    "Pakistan",
    "Bangladesh",
    "Sri Lanka",
    "Nepal",
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",

    // Europe
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Portugal",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Austria",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Ireland",
    "Poland",
    "Czech Republic",
    "Romania",
    "Hungary",
    "Greece",

    // North America
    "United States",
    "Canada",
    "Mexico",

    // South America
    "Brazil",
    "Argentina",
    "Chile",
    "Colombia",
    "Peru",
    "Uruguay",

    // Africa
    "South Africa",
    "Egypt",
    "Nigeria",
    "Kenya",
    "Morocco",
    "Ghana",

    // Oceania
    "Australia",
    "New Zealand",
  ];

  async function handleRegister() {
    setError("");

    if (!country) {
      setError("Please select your country.");
      return;
    }

    if (!accepted) {
      setError(
        "You must agree to the Terms of Service."
      );
      return;
    }

    if (!fullName.trim()) {
      setError("Full name is required.");
      return;
    }

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

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

      await registerUser({
        fullName,
        email,
        password,
      });

      await loginUser(
        email,
        password
      );

      navigate("/home", {
        replace: true,
      });

    } catch (err) {

      console.error(err);

      setError(
        err.message ||
        "Unable to create account."
      );

    } finally {

      setLoading(false);

    }
  }
    return (
    <div className="min-h-screen bg-[#07111F] text-white flex justify-center px-6 py-10">

      <div className="w-full max-w-md">

        {/* Progress */}
        <div className="mb-8">

          <div className="flex items-center justify-between text-sm text-slate-400">

            <span>
              Step {step} of 2
            </span>

            <span>
              Create Account
            </span>

          </div>

          <div className="mt-3 h-2 rounded-full bg-slate-800 overflow-hidden">

            <div
              className={`h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-500 ${
                step === 1 ? "w-1/2" : "w-full"
              }`}
            />

          </div>

        </div>

        {step === 1 && (
          <>

            <div className="text-center mb-8">

              <h1 className="text-4xl font-bold">
                Welcome to
              </h1>

              <h2 className="text-cyan-400 text-4xl font-black mt-2">
                SafeTradex
              </h2>

              <p className="text-slate-400 mt-4">
                Select your Country / Region
              </p>

            </div>

            <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-6">

              <label className="font-medium">
                Country / Region
              </label>

              <div className="relative mt-3">

                <Globe
                  size={18}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <select
                  value={country}
                  onChange={(e) =>
                    setCountry(e.target.value)
                  }
                  className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12 pr-4"
                >

                  <option value="">
                    Select Country
                  </option>

                  {countries.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}

                </select>

              </div>

              <label className="flex items-start gap-3 mt-6">

                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={() =>
                    setAccepted(!accepted)
                  }
                  className="mt-1"
                />

                <span className="text-sm text-slate-400">

                  I agree to the
                  Terms of Service
                  and Privacy Policy.

                </span>

              </label>

              {error && (

                <div className="mt-5 rounded-xl border border-red-500 bg-red-500/10 p-3 text-red-300 text-sm">

                  {error}

                </div>

              )}

              <button
                onClick={() => {
                  setError("");

                  if (!country) {
                    setError(
                      "Please select your country."
                    );
                    return;
                  }

                  if (!accepted) {
                    setError(
                      "Please accept the Terms."
                    );
                    return;
                  }

                  setStep(2);
                }}
                className="mt-8 w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold text-lg shadow-xl shadow-cyan-500/20"
              >

                Continue

              </button>

            </div>

          </>
        )}

        {step === 2 && (
          <>

            <button
              onClick={() => {
                setError("");
                setStep(1);
              }}
              className="text-cyan-400 mb-6"
            >
              ← Back
            </button>

            <div className="rounded-3xl bg-[#0C1828] border border-slate-800 p-6 space-y-5">

              <h2 className="text-2xl font-bold">
                Create Account
              </h2>

              {/* Full Name */}

              <div>

                <label>
                  Full Name
                </label>

                <div className="relative mt-2">

                  <User
                    size={18}
                    className="absolute left-4 top-4 text-slate-400"
                  />

                  <input
                    value={fullName}
                    onChange={(e) =>
                      setFullName(
                        e.target.value
                      )
                    }
                    placeholder="John Doe"
                    className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12"
                  />

                </div>

              </div>

              {/* Email */}

              <div>

                <label>Email</label>

                <div className="relative mt-2">

                  <Mail
                    size={18}
                    className="absolute left-4 top-4 text-slate-400"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                    placeholder="you@example.com"
                    className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label>Password</label>

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
                      setPassword(
                        e.target.value
                      )
                    }
                    className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12 pr-12"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-3"
                  >
                    {showPassword
                      ? <EyeOff size={18}/>
                      : <Eye size={18}/>}
                  </button>

                </div>

              </div>

              {/* Confirm Password */}

              <div>

                <label>
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
                    className="w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 pl-12 pr-12"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-3"
                  >
                    {showConfirmPassword
                      ? <EyeOff size={18}/>
                      : <Eye size={18}/>}
                  </button>

                </div>

              </div>

              {/* Referral */}

              <div>

                <label>
                  Referral Code
                  <span className="text-slate-500 text-sm ml-2">
                    Optional
                  </span>
                </label>

                <input
                  value={referralCode}
                  onChange={(e) =>
                    setReferralCode(
                      e.target.value
                    )
                  }
                  placeholder="Referral Code"
                  className="mt-2 w-full h-12 rounded-xl bg-[#101E31] border border-slate-700 px-4"
                />

              </div>

              {error && (

                <div className="rounded-xl border border-red-500 bg-red-500/10 p-3 text-red-300 text-sm">

                  {error}

                </div>

              )}

              <button
                onClick={handleRegister}
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold text-lg disabled:opacity-50"
              >

                {loading
                  ? "Creating Account..."
                  : "Create Account"}

              </button>

            </div>

            <div className="mt-8 text-center text-slate-400">

              Already have an account?

              <Link
                to="/login"
                className="ml-2 text-cyan-400 font-semibold"
              >
                Log In
              </Link>

            </div>

          </>
        )}

      </div>

    </div>
  );
}
