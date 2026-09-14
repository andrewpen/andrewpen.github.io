import type { CSSProperties } from "react";
import { Button, LinkButton } from "@a3kds/design-system";
import { CYAN, NAVY } from "../boldPalette";

type NavLink = { label: string; href: string; current?: boolean };

type NavbarProps = {
  links: NavLink[];
  cta?: { label: string; href?: string; onClick?: () => void };
  logoHref?: string;
};

export function Navbar({ links, cta, logoHref = "/" }: NavbarProps) {
  // The CTA is an ACTION, so it takes the system's action: the pill shape,
  // the single size, the focus ring and — for the link form — real anchor
  // semantics. As a hand-styled element it had none of those, which is the
  // whole reason the action contract exists.
  //
  // Its cyan-on-navy fill is this header's colour, not a system role, so it
  // stays local — through the class pattern W-4 established, NOT an inline
  // background. An inline fill leaves the system's hover underneath it, so
  // the cyan would jump to action-primary on hover; the class carries its own
  // hover rule. (My first attempt invented two --a3kds-local-* properties the
  // package does not define, which would have silently rendered the default
  // colour and changed the header.)
  const ctaSpacing: CSSProperties = { marginLeft: "var(--a3kds-space-3)" };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 200, background: NAVY, color: "#eef4f8" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          // 14px has no step on the system scale; 32 is space-8.
          padding: "14px var(--a3kds-space-8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--a3kds-space-6)",
          flexWrap: "wrap",
        }}
      >
        <a href={logoHref} style={{ display: "flex", alignItems: "center", gap: "var(--a3kds-space-3)", color: "#ffffff", textDecoration: "none" }}>
          <img src="/img/logo.svg" alt="" width={30} height={30} style={{ display: "block", borderRadius: 9999 }} />
          <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>Andrew Pendleton</span>
        </a>
        <nav aria-label="Main" style={{ display: "flex", alignItems: "center", gap: "var(--a3kds-space-1)", flexWrap: "wrap" }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-current={l.current ? "page" : undefined}
              style={{
                padding: "var(--a3kds-space-2) var(--a3kds-space-3)",
                borderRadius: "var(--a3kds-radius-md)",
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
            // onClick means it DOES something here (Print/PDF); href means it
            // navigates. They are different elements, and the package refuses
            // to let one pretend to be the other.
            (cta.onClick ? (
              <Button onClick={cta.onClick} className="ap-chrome-cta" style={ctaSpacing}>
                {cta.label}
              </Button>
            ) : (
              <LinkButton href={cta.href!} className="ap-chrome-cta" style={ctaSpacing}>
                {cta.label}
              </LinkButton>
            ))}
        </nav>
      </div>
    </header>
  );
}
