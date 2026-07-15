import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyUIDButton({ uid }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(String(uid));

      setCopied(true);

      if (navigator.vibrate) {
        navigator.vibrate(40);
      }

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px",
        borderRadius: 14,
        border: "1px solid rgba(79,140,255,.35)",
        background:
          copied
            ? "linear-gradient(135deg,#16A34A,#22C55E)"
            : "linear-gradient(135deg,#102A58,#173C77)",
        color: "#FFFFFF",
        cursor: "pointer",
        transition: ".25s",
        fontWeight: 700,
        fontSize: 13,
        boxShadow: copied
          ? "0 0 18px rgba(34,197,94,.35)"
          : "0 0 14px rgba(79,140,255,.18)",
      }}
    >
      {copied ? (
        <>
          <Check
            size={16}
            color="#FFFFFF"
          />

          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy
            size={16}
            color="#8CC8FF"
          />

          <span>UID {uid}</span>
        </>
      )}
    </button>
  );
}
