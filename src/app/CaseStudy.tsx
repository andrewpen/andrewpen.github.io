import { LinkButton } from "@a3kds/design-system";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { chrome, hrefFor, destination } from "./destinations";
import { caseStudies, studyById, RULES } from "./caseStudies";
import { BLUE, PINK, MINT, CYAN, NAVY, ink } from "./boldPalette";
import { contact } from "./content";

const navLinks = chrome(
  ["home", "writing-index", "work", "resume"], "case-study", "work");

const footerLinks = chrome(
  ["home", "writing-index", "resume", "email"], "case-study");

const MONO = "var(--ap-font-mono)";
const EYEBROW = {
  fontFamily: MONO,
  fontSize: "0.6875rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  margin: "0 0 16px",
};
const SHELL = { maxWidth: 1280, margin: "0 auto", padding: "0 32px" };
const H2 = {
  fontSize: "clamp(2rem,4.4vw,3.25rem)",
  fontWeight: 700,
  letterSpacing: "-0.03em",
  lineHeight: 1.02,
  textWrap: "balance" as const,
};

export function CaseStudy({ id }: { id: string }) {
  const s = studyById(id);
  const index = caseStudies.findIndex((x) => x.id === id) + 1;

  return (
    <div className="apb" style={{ minHeight: "100vh", background: "#ffffff", color: "#1f2e3d", display: "flex", flexDirection: "column" }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-slate-900 focus:rounded focus:shadow-lg focus:outline focus:outline-2 focus:outline-indigo-600"
      >
        Skip to main content
      </a>

      <div style={{ position: "sticky", top: 0, zIndex: 200 }}>
        <Navbar links={navLinks} />

        {/* Study switcher — in the design these are in-place tabs; here each is its
            own page, so they navigate and the current one is marked instead. */}
        <div style={{ background: "#1f2e3d", borderBottom: "1px solid #2b3f51" }}>
          <div style={{ ...SHELL, padding: "14px 32px", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <nav aria-label="Case studies" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {caseStudies.map((x) => {
                const isActive = x.id === s.id;
                return (
                  <a
                    key={x.id}
                    href={isActive ? undefined : x.href}
                    aria-current={isActive ? "page" : undefined}
                    style={{
                      padding: "8px 18px",
                      borderRadius: 16,
                      border: "1px solid #8aabc2",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      background: isActive ? CYAN : "transparent",
                      color: isActive ? NAVY : "#d9e6ee",
                      cursor: isActive ? "default" : "pointer",
                    }}
                  >
                    {x.label}
                  </a>
                );
              })}
            </nav>
            <span style={{ fontFamily: MONO, fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8aabc2", marginLeft: "auto" }}>
              Case study {index} of {caseStudies.length}
            </span>
          </div>
        </div>
      </div>

      <main id="main-content" style={{ flex: 1 }}>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section style={{ position: "relative", background: NAVY, color: "#ffffff", overflow: "hidden" }}>
          <div
            className="apb-rail"
            aria-hidden="true"
            style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 56, borderRight: "1px solid #2b3f51", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: MONO, fontSize: "0.6875rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "#8aabc2", whiteSpace: "nowrap" }}>
              {s.org} · {s.years}
            </span>
          </div>
          <div style={{ ...SHELL, padding: "72px 32px", paddingLeft: "clamp(32px,8vw,88px)" }}>
            <span className="a3-badge" style={{ background: PINK, color: "#ffffff", marginBottom: 24, display: "inline-block" }}>
              {s.tag}
            </span>
            <h1 style={{ margin: "0 0 24px", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.95, fontSize: "clamp(2.75rem,7vw,6rem)", maxWidth: "16ch" }}>
              {s.titleA}
              <span style={{ display: "block", color: CYAN }}>{s.titleB}</span>
            </h1>
            <p style={{ fontSize: "clamp(1.0625rem,2vw,1.375rem)", lineHeight: 1.5, color: "#d9e6ee", margin: "0 0 48px", maxWidth: "56ch", textWrap: "pretty" }}>
              {s.deck}
            </p>

            <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 24, margin: "0 0 48px", paddingTop: 32, borderTop: "1px solid #2b3f51" }}>
              {s.metrics.map((m) => (
                <div key={m.label}>
                  <dt style={{ fontSize: "clamp(1.75rem,3.4vw,2.75rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: m.color, fontVariantNumeric: "tabular-nums" }}>
                    {m.value}
                  </dt>
                  <dd style={{ margin: "10px 0 0", fontFamily: MONO, fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#b8cddc", lineHeight: 1.5 }}>
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 24, maxWidth: 900 }}>
              {s.meta.map((m) => (
                <div key={m.label}>
                  <p style={{ fontFamily: MONO, fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: MINT, margin: "0 0 8px" }}>{m.label}</p>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.5, color: "#eef4f8", margin: 0 }}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden="true" style={{ display: "flex", height: 10 }}>
            {[BLUE, PINK, CYAN, MINT].map((c) => (
              <span key={c} style={{ flex: 1, background: c }} />
            ))}
          </div>
        </section>

        {/* ── 01 Challenge ─────────────────────────────────────────────── */}
        <section id="challenge" style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={SHELL}>
            <div className="apb-split" style={{ display: "grid", gridTemplateColumns: "minmax(min(260px, 100%),380px) minmax(0,1fr)", gap: 56, alignItems: "start", marginBottom: 56 }}>
              <div>
                <p style={{ ...EYEBROW, color: PINK }}>01 — The challenge</p>
                <h2 style={{ ...H2, margin: 0 }}>{s.challengeTitle}</h2>
              </div>
              <div>
                {s.challengeBody.map((text, i) => (
                  <p key={i} style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#38546a", margin: "0 0 20px", maxWidth: "70ch" }}>
                    {text}
                  </p>
                ))}
                <blockquote style={{ margin: "32px 0 0", background: NAVY, color: "#ffffff", borderRadius: 16, padding: 36, boxShadow: "0 16px 40px rgb(20 31 41 / 0.20)", borderLeft: `8px solid ${MINT}` }}>
                  <p style={{ fontSize: "clamp(1.125rem,2.2vw,1.5rem)", lineHeight: 1.3, fontWeight: 700, letterSpacing: "-0.02em", margin: 0, textWrap: "pretty" }}>
                    {s.challengeQuote}
                  </p>
                </blockquote>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px, 100%),1fr))", gap: 24 }}>
              <div style={{ background: "#f7fafc", borderRadius: 16, padding: 36, boxShadow: "var(--a3kds-elevation-raised)", borderTop: "6px solid #8aabc2" }}>
                <p style={{ ...EYEBROW, color: "#476b85", margin: "0 0 20px" }}>Before</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
                  {s.before.map((text, i) => (
                    <li key={i} style={{ display: "flex", gap: 14, fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a" }}>
                      <span aria-hidden="true" style={{ flex: "none", width: 8, height: 8, borderRadius: 9999, background: "#8aabc2", marginTop: 8 }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: NAVY, color: "#ffffff", borderRadius: 16, padding: 36, boxShadow: "0 16px 40px rgb(20 31 41 / 0.20)", borderTop: `6px solid ${MINT}` }}>
                <p style={{ ...EYEBROW, color: MINT, margin: "0 0 20px" }}>After</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
                  {s.after.map((text, i) => (
                    <li key={i} style={{ display: "flex", gap: 14, fontSize: "0.9375rem", lineHeight: 1.6, color: "#d9e6ee" }}>
                      <span aria-hidden="true" style={{ flex: "none", width: 8, height: 8, borderRadius: 9999, background: MINT, marginTop: 8 }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 Approach ──────────────────────────────────────────────── */}
        <section id="approach" style={{ background: "#eef4f8", padding: "96px 0", borderTop: "1px solid #d9e6ee", borderBottom: "1px solid #d9e6ee" }}>
          <div style={SHELL}>
            <div style={{ maxWidth: "46ch", marginBottom: 48 }}>
              <p style={{ ...EYEBROW, color: PINK }}>02 — The approach</p>
              <h2 style={{ ...H2, margin: "0 0 20px" }}>{s.approachTitle}</h2>
              {s.approachBody.map((text, i) => (
                <p key={i} style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#38546a", margin: "0 0 16px" }}>
                  {text}
                </p>
              ))}
            </div>
            <ul style={{ listStyle: "none", margin: "0 0 56px", padding: 0, display: "flex", flexWrap: "wrap", gap: 10 }}>
              {s.principles.map((text) => (
                <li key={text}>
                  <span className="a3-badge" style={{ background: "#ffffff", color: "#1f2e3d", border: "1px solid #d9e6ee" }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ display: "grid", gap: 24 }}>
              {s.phases.map((ph, n) => {
                const rule = RULES[n % RULES.length];
                return (
                  <article
                    key={ph.num}
                    className="apb-split"
                    style={{ display: "grid", gridTemplateColumns: "minmax(240px,320px) minmax(0,1fr)", gap: 40, background: "#ffffff", borderRadius: 16, padding: 40, boxShadow: "0 8px 32px rgb(20 31 41 / 0.10)", borderLeft: `8px solid ${rule}` }}
                  >
                    <div>
                      <p aria-hidden="true" style={{ margin: "0 0 14px", fontFamily: MONO, fontSize: "clamp(2.25rem,4vw,3.5rem)", fontWeight: 700, lineHeight: 1, color: ink(rule), fontVariantNumeric: "tabular-nums" }}>
                        {ph.num}
                      </p>
                      <h3 style={{ fontSize: "clamp(1.375rem,2.6vw,2rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 12px", textWrap: "pretty" }}>{ph.title}</h3>
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#476b85", margin: 0 }}>{ph.sub}</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: MONO, fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#476b85", margin: "0 0 16px" }}>What we did</p>
                      <ul style={{ listStyle: "none", margin: "0 0 28px", padding: 0, display: "grid", gap: 12 }}>
                        {ph.did.map((text, i) => (
                          <li key={i} style={{ display: "flex", gap: 14, fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a" }}>
                            <span aria-hidden="true" style={{ flex: "none", width: 8, height: 8, borderRadius: 9999, background: rule, marginTop: 8 }} />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
                        {ph.signals.map((sig) => (
                          <div key={sig.label} style={{ background: "#f7fafc", borderRadius: 16, padding: 20, borderBottom: `5px solid ${rule}` }}>
                            <p style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1, margin: "0 0 8px", fontVariantNumeric: "tabular-nums" }}>{sig.value}</p>
                            <p style={{ fontSize: "0.8125rem", lineHeight: 1.5, color: "#476b85", margin: 0 }}>{sig.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 03 Results ───────────────────────────────────────────────── */}
        <section id="results" style={{ background: NAVY, color: "#ffffff", padding: "96px 0" }}>
          <div style={SHELL}>
            <div style={{ maxWidth: "46ch", marginBottom: 48 }}>
              <p style={{ ...EYEBROW, color: MINT }}>03 — Results</p>
              <h2 style={{ ...H2, margin: "0 0 20px" }}>{s.resultsTitle}</h2>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#d9e6ee", margin: 0 }}>{s.resultsBody}</p>
            </div>

            <div style={{ background: "#1f2e3d", borderRadius: 16, padding: 40, marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
                <div>
                  <p style={{ fontFamily: MONO, fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: MINT, margin: "0 0 10px" }}>{s.bar.label}</p>
                  <p style={{ fontSize: "clamp(2.75rem,6vw,4.5rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1, margin: 0, fontVariantNumeric: "tabular-nums" }}>{s.bar.value}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: MONO, fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#b8cddc", margin: "0 0 10px" }}>{s.bar.targetLabel}</p>
                  <p style={{ fontSize: "1.75rem", fontWeight: 700, color: "#d9e6ee", margin: 0, fontVariantNumeric: "tabular-nums" }}>{s.bar.target}</p>
                </div>
              </div>
              <div style={{ position: "relative", height: 14, borderRadius: 9999, background: "#2b3f51", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: s.bar.pct, background: CYAN, borderRadius: 9999 }} />
              </div>
              <p style={{ fontFamily: MONO, fontSize: "0.6875rem", letterSpacing: "0.1em", color: "#8aabc2", margin: "14px 0 0" }}>{s.bar.foot}</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, marginBottom: 48 }}>
              {s.results.map((r) => (
                <div key={r.label} style={{ background: "#1f2e3d", borderRadius: 16, padding: 28, borderBottom: `6px solid ${r.rule}` }}>
                  <p style={{ fontSize: "1.875rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, margin: "0 0 10px", fontVariantNumeric: "tabular-nums" }}>{r.value}</p>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "#d9e6ee", margin: 0 }}>{r.label}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gap: 24, maxWidth: "80ch" }}>
              {s.quotes.map((q) => (
                <blockquote key={q.source} style={{ margin: 0, paddingLeft: 28, borderLeft: `6px solid ${CYAN}` }}>
                  <p style={{ fontSize: "clamp(1.125rem,2.2vw,1.5rem)", lineHeight: 1.35, margin: "0 0 14px", textWrap: "pretty" }}>{q.text}</p>
                  <footer style={{ fontFamily: MONO, fontSize: "0.75rem", letterSpacing: "0.1em", color: "#8aabc2" }}>{q.source}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 Reflections ───────────────────────────────────────────── */}
        <section id="reflections" style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={SHELL}>
            <div style={{ maxWidth: "46ch", marginBottom: 48 }}>
              <p style={{ ...EYEBROW, color: PINK }}>04 — Reflections</p>
              <h2 style={{ ...H2, margin: "0 0 20px" }}>What I'd carry forward.</h2>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#38546a", margin: 0 }}>{s.reflectionsBody}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(280px, 100%),1fr))", gap: 24 }}>
              {s.lessons.map((l, n) => {
                const rule = RULES[n % RULES.length];
                return (
                  <article key={l.num} style={{ background: "#f7fafc", borderRadius: 16, padding: 32, boxShadow: "0 8px 32px rgb(20 31 41 / 0.09)", borderTop: `6px solid ${rule}`, display: "flex", flexDirection: "column", gap: 12 }}>
                    <p aria-hidden="true" style={{ margin: 0, fontFamily: MONO, fontSize: "2rem", fontWeight: 700, lineHeight: 1, color: ink(rule), fontVariantNumeric: "tabular-nums" }}>{l.num}</p>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, margin: 0, textWrap: "pretty" }}>{l.title}</h3>
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a", margin: 0 }}>{l.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Next ─────────────────────────────────────────────────────── */}
        {/* data-mode="dark": this surface is dark, so the system supplies dark
            action colours rather than its light-canvas ones. The BLUE ground is
            not the system's dark canvas either, which is why the two actions
            still carry a named local colour exception below - the same
            arrangement batch D accepted for Subscribe. */}
        <section data-mode="dark" style={{ background: BLUE, color: "#ffffff", padding: "80px 0" }}>
          <div style={{ ...SHELL, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px, 100%),1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <p style={{ ...EYEBROW, color: "#ffffff" }}>Next</p>
              <h2 style={{ fontSize: "clamp(1.75rem,3.6vw,2.75rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 16px", textWrap: "balance" }}>
                Want the longer version of this story?
              </h2>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, margin: 0, maxWidth: "52ch" }}>
                I'm happy to walk through the architecture, the decisions that did not work, and what I'd do differently now.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <LinkButton href={`mailto:${contact.email}`} className="ap-casestudy-cta">
                Get in touch
              </LinkButton>
              <LinkButton
                href={hrefFor(destination("work"), "case-study")}
                variant="secondary"
                className="ap-casestudy-cta-secondary"
              >
                Back to portfolio
              </LinkButton>
            </div>
          </div>
        </section>
      </main>

      <Footer links={footerLinks} />
    </div>
  );
}
