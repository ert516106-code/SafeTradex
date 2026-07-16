import { useState } from "react";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileMenu from "../components/profile/ProfileMenu";

import AvatarModal from "../components/profile/modals/AvatarModal";
import KYCModal from "../components/profile/modals/KYCModal";
import LanguageModal from "../components/profile/modals/LanguageModal";
import NotificationModal from "../components/profile/modals/NotificationModal";

export default function Profile() {
  const [avatar, setAvatar] = useState("🤖");

  const [language, setLanguage] =
    useState("English");

  const [showAvatar, setShowAvatar] =
    useState(false);

  const [showKYC, setShowKYC] =
    useState(false);

  const [showLanguage, setShowLanguage] =
    useState(false);

  const [showNotifications, setShowNotifications] =
    useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#07111F] text-white">

        {/* Header */}

        <div className="sticky top-0 z-30 bg-[#07111F]/90 backdrop-blur-xl border-b border-slate-800">

          <div className="max-w-md mx-auto px-5 py-5">

            <h1 className="text-2xl font-bold">
              Profile
            </h1>

            <p className="text-sm text-slate-400 mt-1">
              Account & Security
            </p>

          </div>

        </div>

        <div className="max-w-md mx-auto p-5 space-y-5">

          <ProfileHeader
            avatar={avatar}
            onAvatarClick={() =>
              setShowAvatar(true)
            }
          />

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

      </div>

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
