import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Default Route */}
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
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

          {/* Dashboard */}
          <Route
            path="/home"
            element={<Home />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <div className="text-center">
                  <h1 className="text-5xl font-bold">
                    404
                  </h1>

                  <p className="mt-4 text-slate-400">
                    Page Not Found
                  </p>
                </div>
              </div>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
