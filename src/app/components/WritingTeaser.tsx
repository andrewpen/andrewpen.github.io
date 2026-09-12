import { posts } from "../content";
import { MINT, NAVY, CYAN } from "../boldPalette";

const [latest, ...rest] = posts;

export function WritingTeaser() {
  return (
    <section id="writing" style={{ background: "#ffffff", padding: "112px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap", marginBottom: 48 }}>
          <div style={{ maxWidth: "34ch" }}>
            <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#BE3372", margin: "0 0 16px" }}>
              01 — Writing
            </p>
            <h2 style={{ fontSize: "clamp(2.25rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>The argument, in essays.</h2>
          </div>
          <a href="/writing.html" style={{ padding: "14px 28px", borderRadius: 16, background: NAVY, color: "#ffffff", fontWeight: 600, textDecoration: "none" }}>
            All writing
          </a>
        </div>

        <a
          href={`/writing/${latest.slug}.html`}
          className="lift"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
            alignItems: "center",
            background: NAVY,
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: 16,
            padding: 56,
            marginBottom: 32,
            boxShadow: "0 24px 48px rgb(20 31 41 / 0.24)",
          }}
        >
          <div>
            <span className="a3-badge" style={{ background: MINT, color: NAVY, marginBottom: 20, display: "inline-block" }}>
              Latest essay
            </span>
            <h3 style={{ fontSize: "clamp(1.75rem,3.4vw,3rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>{latest.title}</h3>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "#d9e6ee", margin: "0 0 24px", maxWidth: "56ch" }}>{latest.excerpt}</p>
            <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.75rem", letterSpacing: "0.08em", color: "#8aabc2", margin: 0 }}>
              {latest.date} · {latest.words} · read →
            </p>
          </div>
          <p aria-hidden="true" style={{ margin: 0, fontSize: "clamp(4rem,10vw,9rem)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.85, color: CYAN, justifySelf: "end", textAlign: "right", opacity: 0.9 }}>
            Judg&shy;ment.
          </p>
        </a>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {rest.map((p) => (
            <PostCard key={p.title} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  const inner = (
    <>
      <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.08em", color: "#476b85", margin: 0 }}>{post.date} · {post.words}</p>
      <h3 className="lift-t" style={{ fontSize: "1.375rem", lineHeight: 1.2, fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>{post.title}</h3>
      <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#38546a", margin: 0 }}>{post.excerpt}</p>
      {!post.hasFullPost && (
        <p style={{ fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8aabc2", margin: "auto 0 0" }}>
          Full essay coming soon
        </p>
      )}
    </>
  );
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

  if (post.hasFullPost) {
    return (
      <a href={`/writing/${post.slug}.html`} className="lift" style={style}>
        {inner}
      </a>
    );
  }
  return <div style={style}>{inner}</div>;
}
