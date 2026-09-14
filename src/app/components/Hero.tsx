import { LinkButton } from "@a3kds/design-system";
import { hero, heroStats } from "../content";
import { chrome } from "../destinations";
import { BLUE, CYAN, NAVY } from "../boldPalette";

// Destinations, not literals — the same record the chrome uses (P06-A01).
// The RECORD owns where these go. The section owns what they say: "Read the
// writing" is this hero's copy, not the destination's name.
const [readWriting, talks] = chrome(["writing-section", "speaking"], "home");

export function Hero() {
  return (
    // data-mode="dark" because this surface IS dark. The system's dark action
    // resolves to #11C4D4 on #141f29 — byte-identical to the site's cyan on
    // navy — so the actions below take their colour from the system instead of
    // a local exception re-stating what the system already says.
    <section id="top" data-mode="dark" style={{ position: "relative", background: NAVY, color: "#ffffff", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        className="apb-rail"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 56,
          borderRight: "1px solid #2b3f51",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontFamily: "var(--ap-font-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#8aabc2",
            whiteSpace: "nowrap",
          }}
        >
          Design infrastructure · Agent-native systems
        </span>
      </div>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 32px 0",
          paddingLeft: "clamp(32px,8vw,88px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          gap: 24,
          alignItems: "end",
        }}
      >
        <div style={{ paddingBottom: 64 }}>
          <span className="a3-badge" style={{ background: "#BE3372", color: "#ffffff", marginBottom: 24, display: "inline-block" }}>
            Writing · Speaking · Advisory
          </span>
          <h1
            style={{
              margin: "0 0 20px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              fontSize: "clamp(3.5rem,9.5vw,8.5rem)",
            }}
          >
            Hello,
            <span style={{ display: "block", fontSize: "clamp(1.75rem,3.6vw,3.25rem)", letterSpacing: "-0.02em", lineHeight: 1.05, marginTop: 16, color: CYAN }}>
              I'm Andrew Pendleton.
            </span>
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "#d9e6ee", margin: "0 0 40px", maxWidth: "46ch" }}>
            {hero.intro}
          </p>
          <div style={{ display: "flex", gap: "var(--a3kds-space-3)", flexWrap: "wrap", marginBottom: "var(--a3kds-space-14, 56px)" }}>
            {/* Both are navigation, so both are LinkButton — real anchors with
                the tested focus ring, not anchors dressed as buttons. The pair
                keeps its hierarchy: the primary leads, the secondary supports. */}
            <LinkButton href={readWriting.href} className="ap-hero-cta">
              Read the writing
            </LinkButton>
            <LinkButton href={talks.href} variant="secondary" className="ap-hero-cta">
              Talks and topics
            </LinkButton>
          </div>
          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(120px, 100%), 1fr))",
              gap: 24,
              margin: 0,
              paddingTop: 32,
              borderTop: "1px solid #2b3f51",
            }}
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt
                  style={{
                    fontSize: "clamp(2rem,3.6vw,3rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: s.color,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {s.value}
                </dt>
                <dd style={{ margin: "10px 0 0", fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#b8cddc", lineHeight: 1.5 }}>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div style={{ position: "relative", alignSelf: "end", minHeight: 420 }}>
          <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "76%", background: BLUE, borderRadius: "16px 16px 0 0" }} />
          <img
            src={hero.profileImage}
            alt={hero.name}
            style={{ position: "relative", display: "block", width: "100%", height: "auto", maxHeight: 560, objectFit: "contain", objectPosition: "bottom center" }}
          />
        </div>
      </div>
    </section>
  );
}
