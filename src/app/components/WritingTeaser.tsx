import { LinkButton, Card } from "@a3kds/design-system";
import { posts } from "../content";
// Only CYAN remains: it colours the decorative word, which W-2 keeps local.
// The featured surface and badge now take their colours from the package.
import { CYAN } from "../boldPalette";

/**
 * Deliberate behaviour for an empty list (P04-A02 acceptance).
 *
 * This destructure used to sit at MODULE level, so an empty `posts` threw
 * while the module was still evaluating and took the WHOLE PAGE down — not
 * just this section — with "Cannot read properties of undefined (reading
 * 'slug')" and an empty #root. Verified by building and loading the site with
 * an empty array before changing anything.
 *
 * With nothing to tease, the section renders NOTHING. A heading and an
 * "All writing" button above an empty grid advertises a library that does not
 * exist yet; the honest empty state for a teaser is absence. The All-writing
 * page remains reachable from the site nav.
 */

/**
 * Writing teaser — migrated to A3KDS foundations (P04-A02).
 *
 * WHAT MOVED AND WHAT DID NOT, per the accepted W-1..W-9 decisions:
 *
 * Shared, from the package: the fluid editorial display roles, the tracking
 * steps, the two elevation steps, Card's accent rule, and LinkButton.
 *
 * Local, deliberately: this composition, the post data, the per-post rule
 * COLOUR (content-derived — the system owns the rule, not what a colour
 * means), the stub-versus-real distinction, and the decorative word.
 *
 * Every literal below is either a token reference or a named local exception.
 */
export function WritingTeaser({ posts: items = posts }: { posts?: typeof posts } = {}) {
  if (items.length === 0) return null;
  const [latest, ...rest] = items;

  return (
    <section
      id="writing"
      style={{
        background: "var(--a3kds-color-neutral-0)",
        /* W-3 (amended 2026-09-13): 112 -> 96. The scale had no 96px step, so
           the first pass snapped to 64 — a bigger reduction than was approved.
           The owner chose to add the step rather than accept the larger change. */
        padding: "var(--a3kds-space-24) 0",
      }}
    >
      {/* A SIZE CONTAINER, so the display type below can respond to this
          element's width instead of the viewport's. Viewport-sized fluid type
          is container-blind: in a narrow column on a wide screen it stays at
          its 5vw size and overflows. Nothing here changes at any supported
          width — see the heading's cap. */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--a3kds-space-8)", containerType: "inline-size" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "var(--a3kds-space-8)",
            flexWrap: "wrap",
            marginBottom: "var(--a3kds-space-12)",
          }}
        >
          {/* min(34ch, 100%), not a bare 34ch. FLUID TYPE IS SIZED BY THE
              VIEWPORT, NOT THE CONTAINER: in a narrow column on a wide screen
              the display face stays at its 5vw size, so a 34ch measure becomes
              far wider than the column and overflows it. A bare ch measure is
              safe with fixed type and is not safe with fluid type — this is a
              consequence of adopting the editorial display roles (W-1). */}
          <div style={{ maxWidth: "min(34ch, 100%)" }}>
            <p
              style={{
                fontFamily: "var(--ap-font-mono)",
                fontSize: "var(--a3kds-font-size-2xs)",
                /* W-7: the eyebrow's 0.18em is now a shared step. */
                letterSpacing: "var(--a3kds-letter-spacing-widest)",
                textTransform: "uppercase",
                color: "var(--a3kds-accent)",
                margin: "0 0 var(--a3kds-space-4)",
              }}
            >
              01 — Writing
            </p>
            {/* W-1: the fluid display role the scale did not have. */}
            <h2
              style={{
                /* The token, capped by the CONTAINER. 12cqi exceeds the
                   token's own maximum until the container is under ~533px, so
                   at every supported width this resolves to exactly the token
                   and the cap is inert; below that the heading tracks its
                   column instead of overflowing it. */
                fontSize: "min(var(--a3kds-typography-editorial-display-size), 12cqi)",
                fontWeight: "var(--a3kds-typography-editorial-display-weight)",
                letterSpacing: "var(--a3kds-typography-editorial-display-letter-spacing)",
                lineHeight: "var(--a3kds-typography-editorial-display-line-height)",
                margin: 0,
              }}
            >
              The argument, in essays.
            </h2>
          </div>
          {/* W-4 (amended 2026-09-13): LinkButton gives the pill, the single
              action size, the tested focus ring and real anchor semantics. The
              FILL stays navy — a named local exception, because adopting
              LinkButton also meant adopting action-primary blue, which was a
              colour change I failed to flag when it was approved. Only the
              colour is local; everything else is the system's. */}
          <LinkButton href="/writing.html" className="ap-writing-cta">
            All writing
          </LinkButton>
        </div>

        <a
          href={`/writing/${latest.slug}.html`}
          className="lift"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "var(--a3kds-space-10)",
            alignItems: "center",
            background: "var(--a3kds-color-neutral-950)",
            color: "var(--a3kds-color-neutral-0)",
            textDecoration: "none",
            borderRadius: "var(--a3kds-radius-md)",
            /* W-3: was 56px. */
            padding: "var(--a3kds-space-12)",
            marginBottom: "var(--a3kds-space-8)",
            /* W-6: the library had no elevation token before this section. */
            boxShadow: "var(--a3kds-elevation-floating)",
            /* The featured card is this site's own composition, not a shared
               Card, so it needs the same protection the shared Card got: one
               unbreakable title otherwise sets its min-content width and
               scrolls the page sideways. Found by the long-title fixture. */
            overflowWrap: "anywhere",
          }}
        >
          <div>
            <span className="a3-badge" style={{
                background: "var(--a3kds-color-brand-mint-300)",
                color: "var(--a3kds-color-neutral-950)",
                marginBottom: "var(--a3kds-space-5)",
                display: "inline-block",
              }}>
              Latest essay
            </span>
            {/* W-1: the second fluid role. */}
            <h3
              style={{
                fontSize: "var(--a3kds-typography-editorial-title-size)",
                fontWeight: "var(--a3kds-typography-editorial-title-weight)",
                letterSpacing: "var(--a3kds-typography-editorial-title-letter-spacing)",
                lineHeight: "var(--a3kds-typography-editorial-title-line-height)",
                margin: "0 0 var(--a3kds-space-5)",
              }}
            >
              {latest.title}
            </h3>
            <p
              style={{
                /* W-5: was 1.0625rem. */
                fontSize: "var(--a3kds-typography-body-size)",
                lineHeight: "var(--a3kds-line-height-relaxed)",
                color: "var(--a3kds-color-neutral-200)",
                margin: "0 0 var(--a3kds-space-6)",
                maxWidth: "56ch",
              }}
            >
              {latest.excerpt}
            </p>
            <p
              style={{
                fontFamily: "var(--ap-font-mono)",
                fontSize: "var(--a3kds-font-size-xs)",
                /* W-7: metadata tracking, now a shared step. */
                letterSpacing: "var(--a3kds-letter-spacing-wider)",
                color: "var(--a3kds-color-neutral-400)",
                margin: 0,
              }}
            >
              {latest.date} · {latest.words} · read →
            </p>
          </div>
          {/* W-2: editorial art, deliberately local. Its line-height and
              tracking stay local with it — they exist for this one word. */}
          <p
            aria-hidden="true"
            style={{
              margin: 0,
              fontSize: "clamp(4rem,10vw,9rem)",
              fontWeight: "var(--a3kds-font-weight-bold)",
              letterSpacing: "-0.05em",
              lineHeight: 0.85,
              color: CYAN,
              justifySelf: "end",
              textAlign: "right",
              opacity: 0.9,
            }}
          >
            Judg&shy;ment.
          </p>
        </a>

        {/* min(300px, 100%) rather than a bare 300px floor. A bare floor cannot
            shrink below 300px, so the track — not the content — forced the
            section 40px wider than a 320px container and broke reflow at 400%
            zoom (WCAG 1.4.10). The floor still applies whenever there is room
            for it, so nothing changes at any supported width. */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "var(--a3kds-space-6)" }}>
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
      <p
        style={{
          fontFamily: "var(--ap-font-mono)",
          fontSize: "var(--a3kds-font-size-2xs)",
          letterSpacing: "var(--a3kds-letter-spacing-wider)",
          color: "var(--a3kds-color-neutral-600)",
          margin: 0,
        }}
      >
        {post.date} · {post.words}
      </p>
      <h3
        className="lift-t"
        style={{
          fontSize: "var(--a3kds-font-size-xl)",
          /* W-8: was 1.2. */
          lineHeight: "var(--a3kds-line-height-snug)",
          fontWeight: "var(--a3kds-font-weight-bold)",
          letterSpacing: "var(--a3kds-letter-spacing-tight)",
          margin: 0,
        }}
      >
        {post.title}
      </h3>
      <p
        style={{
          /* W-5: was 0.9375rem. */
          fontSize: "var(--a3kds-typography-body-sm-size)",
          lineHeight: "var(--a3kds-line-height-relaxed)",
          color: "var(--a3kds-color-neutral-700)",
          margin: 0,
        }}
      >
        {post.excerpt}
      </p>
      {!post.hasFullPost && (
        <p
          style={{
            fontFamily: "var(--ap-font-mono)",
            fontSize: "var(--a3kds-font-size-2xs)",
            /* W-7: was 0.1em, snapped to the shared step. */
            letterSpacing: "var(--a3kds-letter-spacing-wider)",
            textTransform: "uppercase",
            /* A RAMP STEP IS NOT A TEXT ROLE. neutral-400 is #8aabc2, which is
               2.42:1 on this white card - below WCAG AA for 11px text, and
               invisible to token validation because the token itself is fine.
               The muted TEXT role is 5.66:1 here and flips with the mode. */
            color: "var(--a3kds-text-muted)",
            margin: "auto 0 0",
          }}
        >
          Full essay coming soon
        </p>
      )}
    </>
  );

  // W-6/W-9: the card, its accent rule and its elevation are the system's.
  // The accent COLOUR is the post's, because which colour means which essay is
  // content, not a system role.
  const card = (
    <Card
      accent={post.rule}
      elevation="raised"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--a3kds-space-4)" /* W-3: was 14px, off the 4px grid */,
        /* W-3: was 28px. */
        padding: "var(--a3kds-space-6)",
        background: "var(--a3kds-color-neutral-0)",
        color: "inherit",
        textDecoration: "none",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {inner}
    </Card>
  );

  // Destination and stub semantics preserved exactly: a real essay is a link,
  // a stub is not interactive.
  if (post.hasFullPost) {
    return (
      <a href={`/writing/${post.slug}.html`} className="lift" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
        {card}
      </a>
    );
  }
  return card;
}
