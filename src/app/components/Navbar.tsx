import type { CSSProperties } from "react";
import { CYAN, NAVY } from "../boldPalette";

type NavLink = { label: string; href: string; current?: boolean };

type NavbarProps = {
  links: NavLink[];
  cta?: { label: string; href?: string; onClick?: () => void };
  logoHref?: string;
};

export function Navbar({ links, cta, logoHref = "/" }: NavbarProps) {
  const ctaStyle: CSSProperties = {
    marginLeft: 12,
    padding: "10px 20px",
    borderRadius: 16,
    background: CYAN,
    color: NAVY,
    fontWeight: 600,
    fontSize: "0.875rem",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    textDecoration: "none",
    display: "inline-block",
  };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 200, background: NAVY, color: "#eef4f8" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <a href={logoHref} style={{ display: "flex", alignItems: "center", gap: 12, color: "#ffffff", textDecoration: "none" }}>
          <img src="/img/logo.svg" alt="" width={30} height={30} style={{ display: "block", borderRadius: 9999 }} />
          <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>Andrew Pendleton</span>
        </a>
        <nav aria-label="Main" style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-current={l.current ? "page" : undefined}
              style={{
                padding: "8px 12px",
                borderRadius: 16,
                color: l.current ? CYAN : "#d9e6ee",
                fontWeight: l.current ? 600 : 400,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          {cta &&
            (cta.onClick ? (
              <button onClick={cta.onClick} style={ctaStyle}>
                {cta.label}
              </button>
            ) : (
              <a href={cta.href} style={ctaStyle}>
                {cta.label}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
}
