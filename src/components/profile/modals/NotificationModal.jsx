import { useState } from "react";

const settings = [
  "Price Alerts",
  "Market News",
  "Deposit Notifications",
  "Withdrawal Notifications",
  "Trading Notifications",
  "Security Alerts",
  "Promotions",
];

export default function NotificationModal({
  open,
  onClose,
}) {
  const [enabled, setEnabled] = useState({
    "Price Alerts": true,
    "Market News": true,
    "Deposit Notifications": true,
    "Withdrawal Notifications": true,
    "Trading Notifications": true,
    "Security Alerts": true,
    Promotions: false,
  });

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.65)",
          zIndex: 9998,
        }}
      />

      <div
        style={{
          position: "fixed",
          left: 16,
          right: 16,
          bottom: 16,
          background: "#101933",
          borderRadius: 24,
          padding: 20,
          border: "1px solid #24304D",
          zIndex: 9999,
        }}
      >
        <h2
          style={{
            color: "#fff",
            marginBottom: 18,
          }}
        >
          Notification Settings
        </h2>

        {settings.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                color: "#fff",
              }}
            >
              {item}
            </span>

            <input
              type="checkbox"
              checked={enabled[item]}
              onChange={() =>
                setEnabled({
                  ...enabled,
                  [item]: !enabled[item],
                })
              }
            />
          </div>
        ))}

        <button
          onClick={onClose}
          style={{
            width: "100%",
            marginTop: 12,
            height: 52,
            border: "none",
            borderRadius: 16,
            background:
              "linear-gradient(135deg,#4F8CFF,#7C5CFF)",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </div>
    </>
  );
}
