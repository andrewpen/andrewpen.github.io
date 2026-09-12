import { useState } from "react";
import { speakingEvents, speakingTopics } from "../content";
import { ink, NAVY, CYAN } from "../boldPalette";

export function Speaking() {
  const [active, setActive] = useState(0);
  const activeEvent = speakingEvents[active];

  return (
    <section id="speaking" style={{ background: "#eef4f8", padding: "112px 0", borderTop: "1px solid #d9e6ee" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: "44ch", marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#BE3372", margin: "0 0 16px" }}>
            02 — Speaking
          </p>
          <h2 style={{ fontSize: "clamp(2.25rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, margin: "0 0 20px" }}>Four talks I can give tomorrow.</h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "#38546a", margin: 0 }}>
            Each one built from work that actually shipped, with the numbers attached. Twenty to forty-five minutes, plus panel and workshop versions.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 96 }}>
          {speakingTopics.map((t) => (
            <article
              key={t.num}
              style={{ background: "#ffffff", borderRadius: 16, padding: 32, display: "flex", flexDirection: "column", gap: 16, boxShadow: "0 8px 32px rgb(20 31 41 / 0.10)", borderBottom: `8px solid ${t.rule}` }}
            >
              <p aria-hidden="true" style={{ margin: 0, fontFamily: "var(--ap-font-mono)", fontSize: "2.25rem", fontWeight: 700, lineHeight: 1, color: ink(t.rule), fontVariantNumeric: "tabular-nums" }}>
                {t.num}
              </p>
              <h3 style={{ fontSize: "1.375rem", lineHeight: 1.2, fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>{t.title}</h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a", margin: 0 }}>{t.abstract}</p>
              <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.06em", color: "#476b85", margin: "auto 0 0", paddingTop: 16, borderTop: "1px solid #d9e6ee" }}>
                {t.proof}
              </p>
              <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#476b85", margin: 0 }}>{t.kind}</p>
            </article>
          ))}
        </div>

        <h3 style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 28px" }}>Where I've spoken</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 20, marginBottom: 32 }}>
          {speakingEvents.map((e, i) => {
            const isActive = active === i;
            return (
              <button
                key={`${e.label}-${e.year}`}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                style={{
                  padding: 0,
                  border: "none",
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: isActive ? `0 0 0 3px ${e.rule}, 0 12px 32px rgb(20 31 41 / 0.18)` : "0 4px 16px rgb(20 31 41 / 0.10)",
                }}
              >
                <span style={{ display: "block", position: "relative" }}>
                  <img src={e.src} alt="" loading="lazy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
                  <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 6, background: e.rule }} />
                </span>
                <span style={{ padding: "14px 18px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#1f2e3d" }}>{e.label}</span>
                  <span style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.75rem", color: "#476b85", fontVariantNumeric: "tabular-nums" }}>{e.year}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div aria-live="polite" style={{ background: NAVY, color: "#ffffff", borderRadius: 16, padding: 40, boxShadow: "0 16px 40px rgb(20 31 41 / 0.20)" }}>
          <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: CYAN, margin: "0 0 12px" }}>
            {activeEvent.year} · {activeEvent.label}
          </p>
          <h4 style={{ fontSize: "clamp(1.375rem,2.6vw,2rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 16px" }}>{activeEvent.talk}</h4>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#d9e6ee", margin: 0, maxWidth: "80ch" }}>{activeEvent.summary}</p>
        </div>
      </div>
    </section>
  );
}
