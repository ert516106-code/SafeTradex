import {
  ShieldCheck,
  Gem,
  ChevronRight,
} from "lucide-react";

import CopyUIDButton from "./CopyUIDButton";

export default function ProfileHeader({
  avatar = "🤖",
  username,
  email,
  uid,
  vip = 0,
  kycVerified = false,
  online = true,
  onAvatarClick,
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,#162D63,#0D1B3D)",
        border: "1px solid #2C4A8A",
        borderRadius: 24,
        padding: 22,
        boxShadow:
          "0 10px 30px rgba(0,0,0,.30)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        {/* Avatar */}

        <button
          onClick={onAvatarClick}
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "2px solid #4F8CFF",
            background:
              "linear-gradient(135deg,#4F8CFF,#7C5CFF)",
            color: "#fff",
            fontSize: 34,
            cursor: "pointer",
            transition: ".2s",
          }}
        >
          {avatar}
        </button>

        <div style={{ flex: 1 }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {username || "SafeTrade User"}
          </div>

          <div
            style={{
              color: "#9FB4E8",
              fontSize: 14,
              marginTop: 4,
            }}
          >
            {email || "No email"}
          </div>

          <div
            style={{
              marginTop: 12,
            }}
          >
            <CopyUIDButton uid={uid || "600001"} />
          </div>
        </div>

        <ChevronRight
          size={22}
          color="#7EA5FF"
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 22,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 12px",
            borderRadius: 999,
            background: kycVerified
              ? "#123A26"
              : "#3A2A12",
            color: kycVerified
              ? "#4ADE80"
              : "#FB923C",
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          <ShieldCheck size={15} />

          {kycVerified
            ? "🟢 KYC Verified"
            : "🟠 KYC Pending"}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 12px",
            borderRadius: 999,
            background: "#251F55",
            color: "#C4B5FD",
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          <Gem size={15} />

          VIP {vip}
        </div>
      </div>
    </div>
  );
}
