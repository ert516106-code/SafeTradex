import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Home from "./pages/Home";
import Markets from "./pages/Markets";
import Trade from "./pages/Trade";
import Assets from "./pages/Assets";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          {/* Welcome */}
          <Route
            path="/"
            element={<Welcome />}
          />

          {/* Authentication */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />

          {/* Main App */}

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/markets"
            element={<Markets />}
          />

          <Route
            path="/trade"
            element={<Trade />}
          />

          <Route
            path="/assets"
            element={<Assets />}
          />

          {/* Redirect */}

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}
