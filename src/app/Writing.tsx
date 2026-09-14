import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Ticker } from "./components/Ticker";
import { Subscribe } from "./components/Subscribe";
import { posts, writingStats, writingTicker } from "./content";
import { chrome, hrefFor, destination } from "./destinations";
import { CYAN, MINT, NAVY } from "./boldPalette";

const navLinks = chrome(
  ["home", "writing-index", "speaking", "resume"], "writing", "writing-index");
const footerLinks = chrome(
  ["home", "linkedin", "email", "resume"], "writing");

const [latest, ...earlier] = posts;

export function Writing() {
  return (
    <div className="apb" style={{ background: "#ffffff", color: "#1f2e3d", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar links={navLinks} cta={{ label: "Subscribe", href: hrefFor(destination("subscribe-writing"), "writing") }} />

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
              Design systems · AI · the shape of work
            </span>
          </div>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "88px 32px 72px", paddingLeft: "clamp(32px,8vw,88px)" }}>
            <span className="a3-badge" style={{ background: "#BE3372", color: "#ffffff", marginBottom: 24, display: "inline-block" }}>
              Twice a month
            </span>
            <h1 style={{ margin: "0 0 20px", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.88, fontSize: "clamp(3.5rem,11vw,9rem)" }}>
              Essays.
              <span style={{ display: "block", fontSize: "clamp(1.5rem,3.2vw,2.75rem)", letterSpacing: "-0.02em", lineHeight: 1.08, marginTop: 18, color: CYAN, maxWidth: "22ch" }}>
                Written in one sitting, edited in another.
              </span>
            </h1>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "#d9e6ee", margin: "0 0 48px", maxWidth: "52ch" }}>
              On design systems, AI, and what happens to a craft when the cost of producing the artifact falls to nothing.
            </p>
            <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))", gap: 24, margin: 0, paddingTop: 32, borderTop: "1px solid #2b3f51", maxWidth: 760 }}>
              {writingStats.map((s) => (
                <div key={s.label}>
                  <dt style={{ fontSize: "clamp(1.75rem,3.2vw,2.75rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: s.color, fontVariantNumeric: "tabular-nums" }}>{s.value}</dt>
                  <dd style={{ margin: "10px 0 0", fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#b8cddc", lineHeight: 1.5 }}>
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Ticker items={writingTicker} />

        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
            <a
              href={`/writing/${latest.slug}.html`}
              className="lift"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
                gap: 40,
                alignItems: "center",
                background: NAVY,
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: 16,
                padding: 56,
                marginBottom: 40,
                boxShadow: "0 24px 48px rgb(20 31 41 / 0.24)",
              }}
            >
              <div>
                <span className="a3-badge" style={{ background: MINT, color: NAVY, marginBottom: 20, display: "inline-block" }}>
                  Latest essay
                </span>
                <h2 style={{ fontSize: "clamp(1.75rem,3.4vw,3rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>{latest.title}</h2>
                <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "#d9e6ee", margin: "0 0 24px", maxWidth: "56ch" }}>{latest.excerpt}</p>
                <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.75rem", letterSpacing: "0.08em", color: "#8aabc2", margin: 0 }}>
                  {latest.date} · {latest.words} · read →
                </p>
              </div>
              <p aria-hidden="true" style={{ margin: 0, fontSize: "clamp(4rem,10vw,9rem)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.85, color: CYAN, justifySelf: "end", textAlign: "right" }}>
                Judg&shy;ment.
              </p>
            </a>

            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 28 }}>
              <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>Earlier</h2>
              <span style={{ flex: 1, height: 1, background: "#d9e6ee" }} />
              <span style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#476b85" }}>{earlier.length} essays</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 24 }}>
              {earlier.map((p) => (
                <PostCard key={p.title} post={p} />
              ))}
            </div>
          </div>
        </section>

        <Subscribe />
      </main>

      <Footer links={footerLinks} />
    </div>
  );
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  const style = {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: 14,
    background: "#ffffff",
    border: "1px solid #d9e6ee",
    borderTop: `6px solid ${post.rule}`,
    borderRadius: 16,
    padding: 28,
    boxShadow: "0 4px 16px rgb(20 31 41 / 0.08)",
    textDecoration: "none",
    color: "inherit",
  };
  const inner = (
    <>
      <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.08em", color: "#476b85", margin: 0 }}>{post.date} · {post.words}</p>
      <h3 className="lift-t" style={{ fontSize: "1.375rem", lineHeight: 1.2, fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>{post.title}</h3>
      <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a", margin: 0 }}>{post.excerpt}</p>
      <p
        style={{
          fontFamily: "var(--ap-font-mono)",
          fontSize: "0.6875rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: post.hasFullPost ? post.rule : "#8aabc2",
          margin: "auto 0 0",
          paddingTop: 16,
          borderTop: "1px solid #d9e6ee",
        }}
      >
        {post.hasFullPost ? "Read →" : "Full essay coming soon"}
      </p>
    </>
  );
  if (post.hasFullPost) {
    return (
      <a href={`/writing/${post.slug}.html`} className="lift" style={style}>
        {inner}
      </a>
    );
  }
  return <div style={style}>{inner}</div>;
}
