import { projects } from "../content";
import { ink } from "../boldPalette";

export function Work() {
  return (
    <section id="work" style={{ background: "#ffffff", padding: "112px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: "40ch", marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#BE3372", margin: "0 0 16px" }}>
            03 — Work
          </p>
          <h2 style={{ fontSize: "clamp(2.25rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, margin: "0 0 20px" }}>Where the ideas came from.</h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "#38546a", margin: 0 }}>Three case studies behind most of what I say on stage.</p>
        </div>
        <div style={{ display: "grid", gap: 24 }}>
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.caseStudyHref}
              className="lift"
              style={{
                display: "grid",
                gridTemplateColumns: "auto minmax(0,1fr) auto",
                gap: 40,
                alignItems: "center",
                background: "#f7fafc",
                borderRadius: 16,
                padding: 40,
                boxShadow: "0 8px 32px rgb(20 31 41 / 0.09)",
                borderLeft: `8px solid ${p.rule}`,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <p aria-hidden="true" style={{ margin: 0, fontFamily: "var(--ap-font-mono)", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 700, lineHeight: 1, color: ink(p.rule), fontVariantNumeric: "tabular-nums" }}>
                {p.num}
              </p>
              <div>
                <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#476b85", margin: "0 0 12px" }}>{p.tag}</p>
                <h3 className="lift-t" style={{ fontSize: "clamp(1.5rem,2.8vw,2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 14px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#38546a", margin: "0 0 16px", maxWidth: "70ch" }}>{p.text}</p>
                <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.8125rem", color: "#0A6EC2", margin: 0 }}>{p.metric}</p>
              </div>
              <span aria-hidden="true" style={{ fontSize: "2rem", color: "#476b85", lineHeight: 1 }}>
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
