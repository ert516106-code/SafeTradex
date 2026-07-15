import { ChevronRight } from "lucide-react";

export default function ProfileItem({
  icon: Icon,
  title,
  subtitle,
  badge,
  color = "#4F8CFF",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: 16,
        marginBottom: 14,
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,.06)",
        background:
          "linear-gradient(180deg,#111B37,#0D162F)",
        cursor: "pointer",
        transition: ".25s",
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 16,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 18px ${color}55`,
          flexShrink: 0,
        }}
      >
        <Icon
          size={22}
          color="#FFFFFF"
        />
      </div>

      <div
        style={{
          flex: 1,
          textAlign: "left",
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "#8EA2D8",
            fontSize: 12,
            marginTop: 4,
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {badge && (
          <div
            style={{
              minWidth: 28,
              padding: "5px 10px",
              borderRadius: 999,
              background:
                "rgba(79,140,255,.15)",
              color: "#7CC7FF",
              fontWeight: 700,
              fontSize: 11,
              textAlign: "center",
            }}
          >
            {badge}
          </div>
        )}

        <ChevronRight
          size={18}
          color="#7B92C7"
        />
      </div>
    </button>
  );
}
