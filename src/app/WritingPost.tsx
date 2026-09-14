import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { chrome, hrefFor, destination } from "./destinations";
import { Subscribe } from "./components/Subscribe";
import { hero} from "./content";
import { BLUE, PINK, CYAN, MINT, NAVY } from "./boldPalette";

const navLinks = chrome(
  ["home", "writing-index", "speaking", "resume"], "writing-post", "writing-index");

const footerLinks = chrome(
  ["home", "linkedin", "email", "resume"], "writing-post");

export function WritingPost() {
  return (
    <div className="apb" style={{ background: "#ffffff", color: "#1f2e3d", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar links={navLinks} cta={{ label: "Subscribe", href: hrefFor(destination("subscribe-writing"), "writing-post") }} />

      <main style={{ flex: 1 }}>
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
              Essay · September 2026
            </span>
          </div>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 32px 72px", paddingLeft: "clamp(32px,8vw,88px)" }}>
            <a href="/writing.html" style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", color: CYAN, textDecoration: "none" }}>
              ← All essays
            </a>
            <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8aabc2", margin: "48px 0 20px" }}>Sep 8, 2026 · 620 words</p>
            <h1 style={{ margin: "0 0 28px", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.95, fontSize: "clamp(2.5rem,6.5vw,5.25rem)", maxWidth: "18ch" }}>
              The Compound Professional Is Not Coming. It Is Already Here.
            </h1>
            <p style={{ fontSize: "clamp(1.125rem,2vw,1.5rem)", lineHeight: 1.4, color: CYAN, margin: 0, maxWidth: "44ch" }}>
              When the cost of producing the artifact collapses, the scarce skill is judgment across the whole arc.
            </p>
          </div>
          <div aria-hidden="true" style={{ display: "flex", height: 10 }}>
            <span style={{ flex: 1, background: BLUE }} />
            <span style={{ flex: 1, background: PINK }} />
            <span style={{ flex: 1, background: CYAN }} />
            <span style={{ flex: 1, background: MINT }} />
          </div>
        </section>

        <article style={{ background: "#ffffff", padding: "80px 0 96px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start" }}>
            <div style={{ maxWidth: "68ch" }}>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 24px" }}>
                For most of my career the org chart was a map of scarcity. Design was expensive, so we hired designers. Front-end was expensive, so we hired engineers. Research
                was expensive, so we rationed it. Every discipline existed as a boundary around a cost, and the boundaries were load-bearing — you could not reasonably ask one
                person to do two of them well.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 40px" }}>
                That is no longer true, and it stopped being true faster than the org charts did. The production cost of a competent artifact — a screen, a prototype, a
                working page — has fallen toward zero. What has not fallen is the cost of knowing which artifact was worth making.
              </p>

              <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 20px", paddingLeft: 20, borderLeft: `6px solid ${BLUE}` }}>
                The boundary was the cost, not the craft
              </h2>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 32px" }}>
                I watched this happen inside a design system. For years the hard part of shipping a component was the making: the states, the tokens, the three platforms, the
                accessibility review. We optimized all of it, and the cycle went from eighteen months to four. Then something stranger happened. With the making cheap, the
                bottleneck moved to a question nobody owned — <em>should this component exist at all?</em>
              </p>

              <blockquote style={{ margin: "0 0 32px", background: NAVY, color: "#ffffff", borderRadius: 16, padding: 40, boxShadow: "0 16px 40px rgb(20 31 41 / 0.20)", borderLeft: `8px solid ${MINT}` }}>
                <p style={{ fontSize: "clamp(1.25rem,2.6vw,1.875rem)", lineHeight: 1.25, fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>
                  A team that can build anything in an afternoon does not have a velocity problem. It has a taste problem.
                </p>
              </blockquote>

              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 40px" }}>
                The compound professional is the person who can hold that whole arc: what the user actually needs, what the system can bear, what the business will fund, and
                what the thing should look like when it lands. Not a generalist in the dilettante sense — someone with one deep discipline and enough fluency in three others
                to make a call without a meeting.
              </p>

              <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 20px", paddingLeft: 20, borderLeft: `6px solid ${PINK}` }}>
                What this does to hiring
              </h2>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 24px" }}>
                Portfolios full of output are about to mean very little. Anyone can produce output. What is worth reading is the reasoning: what you considered, what you cut,
                and why. I have started asking candidates to walk me through a decision they got wrong, because the recovery tells me more about judgment than a finished
                screen ever did.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 24px" }}>
                The uncomfortable corollary: if your value was the production step, the next two years will be hard, and pretending otherwise helps nobody. The move is not to
                produce faster. It is to move upstream, toward the part of the work where being right is still expensive.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, margin: 0 }}>
                The compound professional is not a prediction. It is a description of the people who are already the most useful in every room I sit in.
              </p>
            </div>

            <aside style={{ display: "grid", gap: 24 }}>
              <div style={{ background: "#f7fafc", borderRadius: 16, padding: 28, boxShadow: "0 8px 32px rgb(20 31 41 / 0.09)", borderTop: `6px solid ${CYAN}`, display: "flex", gap: 18, alignItems: "flex-start", flexWrap: "wrap" }}>
                <img src="/img/2023-profile.webp" alt="" width={72} height={72} style={{ width: 72, height: 72, objectFit: "cover", objectPosition: "top center", borderRadius: 9999, display: "block" }} />
                <div style={{ flex: "1 1 180px" }}>
                  <p style={{ fontWeight: 700, margin: "0 0 8px" }}>{hero.name}</p>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a", margin: "0 0 12px" }}>
                    Senior Director of design infrastructure at Verizon. Speaks at CES, the Accessibility Summit, and UX India.
                  </p>
                  <p style={{ fontSize: "0.9375rem", margin: 0 }}>
                    <a href="/" style={{ color: BLUE }}>
                      More about Andrew →
                    </a>
                  </p>
                </div>
              </div>
              <div style={{ background: BLUE, color: "#ffffff", borderRadius: 16, padding: 28, boxShadow: "0 8px 32px rgb(20 31 41 / 0.12)" }}>
                <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 12px" }}>Next essay</p>
                <p style={{ fontSize: "1.125rem", fontWeight: 700, lineHeight: 1.25, margin: "0 0 12px" }}>What intent.md Taught Me About Using AI</p>
                <p style={{ fontSize: "0.9375rem", margin: 0 }}>
                  <a href="/writing.html" style={{ color: "#ffffff", textDecoration: "underline" }}>
                    Back to the index →
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </article>

        <Subscribe />
      </main>

      <Footer links={footerLinks} />
    </div>
  );
}
