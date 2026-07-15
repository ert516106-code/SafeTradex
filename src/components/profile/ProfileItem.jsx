import { ChevronRight } from "lucide-react";

export default function ProfileItem({
  icon: Icon,
  title,
  subtitle,
  color = "#7C5CFF",
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
        background: "#101933",
        border: "1px solid #24304D",
        borderRadius: 18,
        padding: 16,
        marginBottom: 12,
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 14,
          background: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            style={{
              color: "#8EA2D8",
              fontSize: 12,
              marginTop: 4,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      <ChevronRight
        size={20}
        color="#6B84B8"
      />
    </button>
  );
}
