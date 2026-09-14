import { CYAN, NAVY } from "../boldPalette";
import { contact } from "../content";

type FooterLink = { label: string; href: string };

/**
 * Spacing and type come from the SYSTEM's scale (P06-A01). Every value here
 * already sat on that scale — 40, 32, 24, 20 are space-10, -8, -6 and -5 — so
 * adopting the tokens moves who owns them without moving the footer a pixel.
 *
 * The layout stays local: this row must WRAP, and the package's Stack is
 * flex-direction column with no wrap rule, so a row Stack would not wrap here.
 * That is the open F21 question, and this is a concrete case for it rather
 * than a reason to take a primitive that does not fit yet.
 */
export function Footer({ links }: { links: FooterLink[] }) {
  return (
    <footer style={{ background: NAVY, color: "#b8cddc", padding: "var(--a3kds-space-10) 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 var(--a3kds-space-8)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--a3kds-space-5)",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.8125rem", margin: 0 }}>{contact.footerCopyright}</p>
        <div style={{ display: "flex", gap: "var(--a3kds-space-6)", flexWrap: "wrap", fontSize: "0.9375rem" }}>
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
