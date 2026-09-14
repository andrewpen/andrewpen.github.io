import { Card } from "@a3kds/design-system";
import { contact } from "../content";
import { BLUE, PINK } from "../boldPalette";

export function Practice() {
  return (
    <section id="practice" style={{ background: "#ffffff", padding: "112px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            background: "#f7fafc",
            borderRadius: 16,
            // Was a flat 56px. At 320px the panel's own inset left 144px for a
            // 280px grid floor, which is where the homepage's sideways scroll
            // came from. Fluid now, and the floor below is bounded.
            padding: "clamp(var(--a3kds-space-6), 5vw, 56px)",
            boxShadow: "0 16px 40px rgb(20 31 41 / 0.10)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#BE3372", margin: "0 0 16px" }}>
              05 — Practice
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem,3.4vw,2.75rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>Advisory work, quietly.</h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#38546a", margin: "0 0 24px", maxWidth: "56ch" }}>
              I take a small number of advisory engagements a year, in two areas. I am not actively looking for more. If the problem is one of these and you think I would be
              useful, write to me.
            </p>
            <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.9375rem", margin: 0 }}>
              <a href={`mailto:${contact.email}`} style={{ color: BLUE }}>
                {contact.email}
              </a>
            </p>
          </div>
          <div style={{ display: "grid", gap: 20 }}>
            <Card accent={BLUE} elevation="raised" className="ap-advisory-card">
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 var(--a3kds-space-2)" }}>Design system strategy and audits</h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a", margin: 0 }}>Where the system is, where adoption actually stalls, and what to stop building.</p>
            </Card>
            <Card accent={PINK} elevation="raised" className="ap-advisory-card">
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 var(--a3kds-space-2)" }}>Agent-native platform architecture</h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a", margin: 0 }}>
                Making a system legible to agents: schemas, MCP surfaces, and the validation layer underneath.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
