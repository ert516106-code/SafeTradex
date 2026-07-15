import { Check } from "lucide-react";

const languages = [
  "English",
  "中文",
  "日本語",
  "한국어",
  "Español",
  "Français",
  "Deutsch",
  "Italiano",
  "Português",
  "Filipino",
];

export default function LanguageModal({
  open,
  onClose,
  selected = "English",
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
          border: "1px solid #24304D",
          padding: 20,
          maxHeight: "75vh",
          overflowY: "auto",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          Select Language
        </div>

        {languages.map((language) => (
          <button
            key={language}
            onClick={() => {
              onSelect(language);
              onClose();
            }}
            style={{
              width: "100%",
              height: 56,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 18px",
              marginBottom: 10,
              borderRadius: 16,
              border: "1px solid #24304D",
              background:
                selected === language
                  ? "#17305F"
                  : "#111A35",
              color: "#FFFFFF",
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {language}

            {selected === language && (
              <Check
                size={20}
                color="#4ADE80"
              />
            )}
          </button>
        ))}
      </div>
    </>
  );
}
