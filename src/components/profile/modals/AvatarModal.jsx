const avatars = [
  "🐼",
  "🦁",
  "🐯",
  "🐺",
  "🦊",
  "🐧",
  "🐨",
  "🐸",
  "🐼",
  "🐵",
  "🤖",
  "👨‍🚀",
  "🥷",
  "🐉",
  "🦅",
  "🦉",
];

export default function AvatarModal({
  open,
  onClose,
  onSelect,
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
          zIndex: 9999,
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
          padding: 20,
          border: "1px solid #24304D",
          zIndex: 10000,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 18,
          }}
        >
          Choose Avatar
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4,1fr)",
            gap: 14,
          }}
        >
          {avatars.map((avatar) => (
            <button
              key={avatar}
              onClick={() => {
                onSelect(avatar);
                onClose();
              }}
              style={{
                height: 70,
                border: "none",
                borderRadius: 18,
                background: "#18264A",
                cursor: "pointer",
                fontSize: 34,
              }}
            >
              {avatar}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
