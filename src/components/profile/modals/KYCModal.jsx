import { ShieldCheck } from "lucide-react";

export default function KYCModal({
  open,
  onClose,
}) {
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
          bottom: 18,
          background: "#101933",
          borderRadius: 24,
          padding: 22,
          border: "1px solid #24304D",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 18,
          }}
        >
          <ShieldCheck
            size={24}
            color="#4F8CFF"
          />

          <div
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Identity Verification
          </div>
        </div>

        <div
          style={{
            color: "#9FB4E8",
            lineHeight: 1.8,
            fontSize: 14,
          }}
        >
          Complete your identity verification to
          unlock deposits, withdrawals, increased
          limits and enhanced account security.
        </div>

        <div
          style={{
            marginTop: 22,
            background: "#17264A",
            borderRadius: 18,
            padding: 16,
          }}
        >
          <div
            style={{
              color: "#FACC15",
              fontWeight: 700,
            }}
          >
            Current Status
          </div>

          <div
            style={{
              color: "#FFFFFF",
              marginTop: 6,
            }}
          >
            Unverified
          </div>
        </div>

        <button
          style={{
            marginTop: 22,
            width: "100%",
            height: 52,
            border: "none",
            borderRadius: 16,
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 16,
            color: "#FFFFFF",
            background:
              "linear-gradient(135deg,#4F8CFF,#7C5CFF)",
          }}
        >
          Start Verification
        </button>

        <button
          onClick={onClose}
          style={{
            marginTop: 12,
            width: "100%",
            height: 48,
            border: "1px solid #2C437C",
            borderRadius: 16,
            background: "transparent",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </>
  );
}
