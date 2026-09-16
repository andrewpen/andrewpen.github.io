import { LinkButton } from "@a3kds/design-system";
import { about, aboutHighlights, hero, contact } from "../content";
import { chrome } from "../destinations";

// Destinations from the record; the wording stays this section's.
const [cv, linkedin] = chrome(["resume", "linkedin"], "home");
import { CYAN, MINT, NAVY } from "../boldPalette";

export function Bio() {
  return (
    // data-mode="dark": this surface is dark, and the system's dark palette is
    // this site's palette. See Hero for the measurement.
    <section id="bio" data-mode="dark" style={{ background: NAVY, color: "#ffffff", padding: "112px 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 var(--a3kds-space-8)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
          gap: "var(--a3kds-space-16)",
          alignItems: "start",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: MINT, margin: "0 0 var(--a3kds-space-4)" }}>
            04 — Bio
          </p>
          <h2 style={{ fontSize: "clamp(2.25rem,4.4vw,3.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.02, margin: "0 0 28px" }}>
            Twelve years in one building, on purpose.
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "#d9e6ee", margin: "0 0 var(--a3kds-space-5)", maxWidth: "64ch" }}>
            I joined Verizon as a front-end consultant in 2013 and never left. Developer, then manager, then Senior Director owning the design system that roughly 86% of the
            company's product surfaces build on. Staying in one place that long is unfashionable. It is also the only way I know to watch an idea survive its own second and
            third order effects.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "#d9e6ee", margin: "0 0 var(--a3kds-space-8)", maxWidth: "64ch" }}>{about.bio}</p>
          <div style={{ display: "flex", gap: "var(--a3kds-space-3)", flexWrap: "wrap" }}>
            <LinkButton href={cv.href} className="ap-hero-cta">Full CV</LinkButton>
            {/* target/rel survive the migration: LinkButton is a real anchor and
                passes anchor attributes through, which is the reason it exists
                rather than a button that calls location.assign. */}
            <LinkButton
              href={linkedin.href}
              variant="secondary"
              className="ap-hero-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </LinkButton>
          </div>
        </div>
        <div style={{ display: "grid", gap: "var(--a3kds-space-5)" }}>
          <img
            src="/img/2023-profile.webp"
            alt={hero.name}
            style={{ width: "100%", maxWidth: 280, aspectRatio: "1", objectFit: "cover", objectPosition: "top center", borderRadius: "var(--a3kds-radius-md)", display: "block" }}
          />
          {aboutHighlights.map((h) => (
            <article key={h.title} style={{ background: "#1f2e3d", borderRadius: "var(--a3kds-radius-md)", padding: "var(--a3kds-space-6)", borderLeft: `6px solid ${h.rule}` }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 var(--a3kds-space-2)", color: "#ffffff" }}>{h.title}</h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#d9e6ee", margin: 0 }}>{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
