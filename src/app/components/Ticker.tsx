import { PINK } from "../boldPalette";

export function Ticker({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div aria-hidden="true" style={{ background: PINK, color: "#ffffff", overflow: "hidden", padding: "18px 0" }}>
      <div className="apb-ticker">
        {doubled.map((label, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--ap-font-mono)",
              fontSize: "0.8125rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0 28px",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
