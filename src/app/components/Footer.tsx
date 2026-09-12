import { CYAN, NAVY } from "../boldPalette";
import { contact } from "../content";

type FooterLink = { label: string; href: string };

export function Footer({ links }: { links: FooterLink[] }) {
  return (
    <footer style={{ background: NAVY, color: "#b8cddc", padding: "40px 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.8125rem", margin: 0 }}>{contact.footerCopyright}</p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", fontSize: "0.9375rem" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ color: CYAN, textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
