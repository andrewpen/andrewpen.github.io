import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { chrome, hrefFor, destination } from "./destinations";
import { hero, roles, education, skills, projects, cvStats} from "./content";
import { BLUE, PINK, CYAN, MINT, NAVY, ink } from "./boldPalette";

const navLinks = chrome(
  ["home", "writing-index", "speaking", "resume"], "resume", "resume");

const footerLinks = chrome(
  ["home", "writing-index", "linkedin", "email"], "resume");

export function Resume() {
  return (
    <div className="apb" style={{ background: "#ffffff", color: "#1f2e3d", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="apb-noprint">
        <Navbar links={navLinks} cta={{ label: "Print / PDF", onClick: () => window.print() }} />
      </div>

      <main id="top" style={{ flex: 1 }}>
        <section style={{ position: "relative", background: NAVY, color: "#ffffff", overflow: "hidden" }}>
          <div
            aria-hidden="true"
            className="apb-rail"
            style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 56, borderRight: "1px solid #2b3f51", display: "flex", alignItems: "center", justifyContent: "center" }}
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
              Curriculum vitae · 2013 — present
            </span>
          </div>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "72px 32px",
              paddingLeft: "clamp(32px,8vw,88px)",
              display: "grid",
              // A bare 300px floor cannot shrink below 300px. At 400% zoom
              // (320px effective) it resolved to a 300px track inside a 256px
              // content box and painted 12px past the section's clip edge, so
              // the name block and the portrait were CUT OFF. The section's
              // overflow:hidden hid that from the page's scrollWidth, which is
              // why the zoom check reported a pass.
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <span className="a3-badge" style={{ background: "#BE3372", color: "#ffffff", marginBottom: 24, display: "inline-block" }}>
                Curriculum vitae
              </span>
              <h1 style={{ margin: "0 0 18px", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.9, fontSize: "clamp(3rem,8vw,7rem)" }}>
                Andrew
                <span style={{ display: "block", color: CYAN }}>Pendleton.</span>
              </h1>
              <p style={{ fontSize: "clamp(1.0625rem,2vw,1.375rem)", lineHeight: 1.35, color: "#d9e6ee", margin: "0 0 32px", maxWidth: "34ch" }}>
                Senior Director, Experience Design — design infrastructure and agent-native systems.
              </p>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", fontFamily: "var(--ap-font-mono)", fontSize: "0.8125rem" }}>
                <a href={`mailto:${hero.email}`} style={{ color: CYAN }}>
                  {hero.email}
                </a>
                <span style={{ color: "#b8cddc" }}>{hero.location}</span>
                <a href={hero.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ color: CYAN }}>
                  linkedin.com/in/andrewpendleton
                </a>
              </div>
            </div>
            <img
              src="/img/2023-profile.webp"
              alt={hero.name}
              style={{ justifySelf: "end", display: "block", width: "100%", maxWidth: 260, aspectRatio: "1", objectFit: "cover", objectPosition: "top center", borderRadius: 16 }}
            />
          </div>
          <div aria-hidden="true" style={{ display: "flex", height: 10 }}>
            <span style={{ flex: 1, background: BLUE }} />
            <span style={{ flex: 1, background: PINK }} />
            <span style={{ flex: 1, background: CYAN }} />
            <span style={{ flex: 1, background: MINT }} />
          </div>
        </section>

        <section style={{ background: "#eef4f8", padding: "48px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
            <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 24, margin: 0 }}>
              {cvStats.map((s) => (
                <div key={s.label} className="apb-cv-card" style={{ background: "#ffffff", borderRadius: 16, padding: 24, boxShadow: "var(--a3kds-elevation-raised)", borderBottom: `6px solid ${s.color}` }}>
                  <dt style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, fontVariantNumeric: "tabular-nums", color: "#1f2e3d" }}>{s.value}</dt>
                  <dd style={{ margin: "10px 0 0", fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#476b85", lineHeight: 1.5 }}>
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div
            className="apb-cvbody"
            style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "minmax(min(260px, 100%),300px) minmax(0,1fr)", gap: 56, alignItems: "start" }}
          >
            <div style={{ order: 2 }}>
              <div style={{ marginBottom: 48 }}>
                <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#BE3372", margin: "0 0 16px" }}>Summary</p>
                <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "#38546a", margin: 0, maxWidth: "68ch" }}>
                  Twelve years at Verizon, starting as a front-end consultant and growing into a Senior Director owning enterprise design infrastructure. I transform fragmented
                  component libraries into opinionated, agent-native platforms — reducing accumulated complexity, enforcing quality and accessibility at scale, and driving
                  alignment across design, engineering and product.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 32 }}>
                <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 700, letterSpacing: "-0.025em", margin: 0 }}>Experience</h2>
                <span style={{ flex: 1, height: 1, background: "#d9e6ee" }} />
                <span style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#476b85" }}>2013 — present</span>
              </div>

              <div style={{ display: "grid", gap: 24 }}>
                {roles.map((r) => (
                  <article key={r.title} className="apb-cv-role" style={{ background: "#f7fafc", borderRadius: 16, padding: 36, boxShadow: "0 8px 32px rgb(20 31 41 / 0.09)", borderLeft: `8px solid ${r.rule}` }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 10 }}>
                      <h3 style={{ fontSize: "clamp(1.25rem,2.4vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, margin: 0 }}>{r.title}</h3>
                      <span style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.8125rem", color: ink(r.rule), fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{r.period}</span>
                    </div>
                    <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#476b85", margin: "0 0 16px" }}>{r.company}</p>
                    <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#38546a", margin: "0 0 20px", maxWidth: "70ch" }}>{r.summary}</p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
                      {r.achievements.map((a, i) => (
                        <li key={i} style={{ display: "flex", gap: 14, fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a" }}>
                          <span aria-hidden="true" style={{ flex: "none", width: 8, height: 8, borderRadius: 9999, background: r.rule, marginTop: 8 }} />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <aside style={{ order: 1, display: "grid", gap: 24, alignContent: "start" }}>
              <section className="apb-cv-card" style={{ background: NAVY, color: "#ffffff", borderRadius: 16, padding: 32, boxShadow: "0 16px 40px rgb(20 31 41 / 0.20)" }}>
                <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: MINT, margin: "0 0 20px" }}>Education</p>
                <div style={{ display: "grid", gap: 18 }}>
                  {education.map((e) => (
                    <div key={e.degree} className="apb-cv-entry" style={{ paddingLeft: 16, borderLeft: `3px solid ${e.rule}` }}>
                      <p style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.3, margin: "0 0 4px" }}>{e.degree}</p>
                      <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.75rem", color: "#b8cddc", margin: 0 }}>
                        {e.school}
                        {e.expectedYear ? ` · Est. ${e.expectedYear}` : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="apb-cv-card" style={{ background: "#f7fafc", borderRadius: 16, padding: 32, boxShadow: "0 8px 32px rgb(20 31 41 / 0.09)", borderTop: `6px solid ${BLUE}` }}>
                <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#BE3372", margin: "0 0 20px" }}>Capabilities</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skills.map((s) => (
                    <li key={s.name}>
                      <span className="a3-badge" style={{ background: "#eef4f8", color: "#38546a" }}>
                        {s.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="apb-cv-card" style={{ background: "#f7fafc", borderRadius: 16, padding: 32, boxShadow: "0 8px 32px rgb(20 31 41 / 0.09)", borderTop: `6px solid ${PINK}` }}>
                <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#BE3372", margin: "0 0 20px" }}>Selected work</p>
                <div style={{ display: "grid", gap: 18 }}>
                  {projects.map((p) => (
                    <a key={p.title} href={p.caseStudyHref} style={{ display: "block", paddingLeft: 16, borderLeft: `3px solid ${p.rule}`, textDecoration: "none", color: "inherit" }}>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 600, lineHeight: 1.35, margin: "0 0 6px" }}>{p.title}</p>
                      <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.75rem", color: ink(p.rule), margin: 0, fontVariantNumeric: "tabular-nums" }}>{p.metric}</p>
                    </a>
                  ))}
                </div>
              </section>

              <section className="apb-noprint" style={{ background: BLUE, color: "#ffffff", borderRadius: 16, padding: 32, boxShadow: "0 8px 32px rgb(20 31 41 / 0.12)" }}>
                <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 12px" }}>Also</p>
                <p style={{ fontSize: "1rem", lineHeight: 1.5, margin: "0 0 16px" }}>Four signature talks and six published essays sit alongside this CV.</p>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap", fontSize: "0.9375rem", fontWeight: 600 }}>
                  <a href={hrefFor(destination("speaking"), "resume")} style={{ color: "#ffffff", textDecoration: "underline" }}>
                    Speaking →
                  </a>
                  <a href="/writing.html" style={{ color: "#ffffff", textDecoration: "underline" }}>
                    Writing →
                  </a>
                </div>
              </section>
            </aside>
          </div>
        </section>
      </main>

      <div className="apb-noprint">
        <Footer links={footerLinks} />
      </div>
    </div>
  );
}
