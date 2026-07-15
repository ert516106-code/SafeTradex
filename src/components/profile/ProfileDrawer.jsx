import { useState } from "react";
import { X, LogOut } from "lucide-react";

import ProfileHeader from "./ProfileHeader";
import ProfileMenu from "./ProfileMenu";

import KYCModal from "./modals/KYCModal";
import LanguageModal from "./modals/LanguageModal";
import AvatarModal from "./modals/AvatarModal";

export default function ProfileDrawer({
  open,
  onClose,
  onLogout,
}) {
  const [showAvatar, setShowAvatar] =
    useState(false);

  const [showKYC, setShowKYC] =
    useState(false);

  const [showLanguage, setShowLanguage] =
    useState(false);

  const [avatar, setAvatar] =
    useState("🤖");

  const [language, setLanguage] =
    useState("English");

  if (!open) return null;

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.55)",
          backdropFilter: "blur(4px)",
          zIndex: 999,
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: 390,
          height: "100vh",
          background:
            "linear-gradient(180deg,#0B1430 0%,#091120 100%)",
          borderLeft: "1px solid #25365F",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          animation: "slideDrawer .25s ease",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "22px 22px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Profile
          </div>

          <button
            onClick=          @keyframes slideDrawer {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
}
