import { about, aboutHighlights, hero, contact } from "../content";
import { CYAN, MINT, NAVY } from "../boldPalette";

export function Bio() {
  return (
    <section id="bio" style={{ background: NAVY, color: "#ffffff", padding: "112px 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: MINT, margin: "0 0 16px" }}>
            04 — Bio
          </p>
          <h2 style={{ fontSize: "clamp(2.25rem,4.4vw,3.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.02, margin: "0 0 28px" }}>
            Twelve years in one building, on purpose.
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "#d9e6ee", margin: "0 0 20px", maxWidth: "64ch" }}>
            I joined Verizon as a front-end consultant in 2013 and never left. Developer, then manager, then Senior Director owning the design system that roughly 86% of the
            company's product surfaces build on. Staying in one place that long is unfashionable. It is also the only way I know to watch an idea survive its own second and
            third order effects.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "#d9e6ee", margin: "0 0 32px", maxWidth: "64ch" }}>{about.bio}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/resume.html" style={{ padding: "14px 28px", borderRadius: 16, background: CYAN, color: NAVY, fontWeight: 600, textDecoration: "none" }}>
              Full CV
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "14px 28px", borderRadius: 16, border: "1px solid #8aabc2", color: "#ffffff", fontWeight: 600, textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div style={{ display: "grid", gap: 20 }}>
          <img
            src="/img/2023-profile.webp"
            alt={hero.name}
            style={{ width: "100%", maxWidth: 280, aspectRatio: "1", objectFit: "cover", objectPosition: "top center", borderRadius: 16, display: "block" }}
          />
          {aboutHighlights.map((h) => (
            <article key={h.title} style={{ background: "#1f2e3d", borderRadius: 16, padding: 24, borderLeft: `6px solid ${h.rule}` }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 8px", color: "#ffffff" }}>{h.title}</h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#d9e6ee", margin: 0 }}>{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
