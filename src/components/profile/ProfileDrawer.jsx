import { useState } from "react";
import { X, LogOut } from "lucide-react";

import ProfileHeader from "./ProfileHeader";
import ProfileMenu from "./ProfileMenu";

import KYCModal from "./modals/KYCModal";
import LanguageModal from "./modals/LanguageModal";
import AvatarModal from "./modals/AvatarModal";
import NotificationModal from "./modals/NotificationModal";

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

  const [showNotifications, setShowNotifications] =
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
            onClick={onClose}
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              border: "1px solid #293B66",
              background: "#111A35",
              color: "#FFFFFF",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* User Header */}
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <ProfileHeader
            avatar={avatar}
            onAvatarClick={() =>
              setShowAvatar(true)
            }
          />
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "#22304E",
            margin: "22px 20px",
          }}
        />

        {/* Menu */}
        <div
          style={{
            padding: "0 14px",
            flex: 1,
          }}
        >
          <ProfileMenu
            onOpenKYC={() =>
              setShowKYC(true)
            }
            onOpenLanguage={() =>
              setShowLanguage(true)
            }
            onOpenNotifications={() =>
              setShowNotifications(true)
            }
          />
        </div>

        {/* Logout */}
        <div
          style={{
            padding: 20,
          }}
        >
          <button
            onClick={onLogout}
            style={{
              width: "100%",
              height: 56,
              borderRadius: 16,
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              fontSize: 16,
              fontWeight: 700,
              color: "#FFFFFF",
              background:
                "linear-gradient(135deg,#EF4444,#DC2626)",
              boxShadow:
                "0 8px 20px rgba(239,68,68,.30)",
            }}
          >
            <LogOut size={20} />
            Logout
          </button>

          <div
            style={{
              marginTop: 18,
              textAlign: "center",
              color: "#6B84B8",
              fontSize: 12,
            }}
          >
            SafeTrade V2
            <br />
            Secure Digital Asset Platform
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slideDrawer {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>

      <AvatarModal
        open={showAvatar}
        onClose={() =>
          setShowAvatar(false)
        }
        onSelect={setAvatar}
      />

      <KYCModal
        open={showKYC}
        onClose={() =>
          setShowKYC(false)
        }
      />

      <LanguageModal
        open={showLanguage}
        selected={language}
        onSelect={setLanguage}
        onClose={() =>
          setShowLanguage(false)
        }
      />

      <NotificationModal
        open={showNotifications}
        onClose={() =>
          setShowNotifications(false)
        }
      />
    </>
  );
}
