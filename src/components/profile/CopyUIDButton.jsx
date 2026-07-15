import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyUIDButton({
  uid,
}) {
  const [copied, setCopied] =
    useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(uid);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
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
        border: "none",
        cursor: "pointer",
        borderRadius: 12,
        padding: "8px 12px",
        background: "#0D234A",
        color: "#FFFFFF",
        fontWeight: 700,
        fontSize: 13,
      }}
    >
      UID {uid}

      {copied ? (
        <>
          <Check
            size={16}
            color="#4ADE80"
          />

          <span
            style={{
              color: "#4ADE80",
            }}
          >
            Copied
          </span>
        </>
      ) : (
        <>
          <Copy
            size={16}
            color="#7EA5FF"
          />

          <span>Copy</span>
        </>
      )}
    </button>
  );
}
