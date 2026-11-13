import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Writing } from "./Writing";
import { WritingPost } from "./WritingPost";
import { posts, writingStats } from "./content";

// The live content has one published essay and so renders no cards at all.
// The card tests below need cards, so they render a fixture that has two real
// essays after the featured one, and one stub.
const post = (over: Partial<(typeof posts)[number]>) =>
  ({
    slug: "a-slug",
    title: "A Title",
    date: "Sep 1, 2026",
    words: "100 words",
    rule: "#11C4D4",
    excerpt: "An excerpt.",
    hasFullPost: true,
    ...over,
  }) as (typeof posts)[number];
const fixture = [
  post({ title: "Featured", slug: "featured" }),
  post({ title: "Real one", slug: "real-one", rule: "#0A6EC2" }),
  post({ title: "Real two", slug: "real-two", rule: "#BE3372" }),
  post({ title: "Stub", slug: null as unknown as string, rule: "#4FE7AF", hasFullPost: false }),
];

/**
 * P07-A01 batch E: the writing index and the essay.
 *
 * These pages were entirely local — no design-system component, no token — and
 * the index carried a SECOND hand-built copy of the card WritingTeaser had
 * already migrated in P04. Two hand-built copies of one card is the divergence
 * this project exists to remove.
 */

describe("batch E adopts the shared card rather than re-drawing it", () => {
  it("the index's post cards are the system's Card", () => {
    const { container } = render(<Writing posts={fixture} />);
    const cards = container.querySelectorAll(".a3kds-card");
    expect(cards.length, "every earlier-essay card should be a system Card").toBeGreaterThan(0);
  });

  it("each card carries the post's own accent colour, which is content and not a system role", () => {
    const { container } = render(<Writing posts={fixture} />);
    const accents = [...container.querySelectorAll<HTMLElement>(".a3kds-card[data-accent]")]
      .map(c => c.style.getPropertyValue("--a3kds-local-card-accent"))
      .filter(Boolean);
    expect(accents.length).toBeGreaterThan(0);
    // Distinct colours, not one repeated: which colour means which essay is content.
    expect(new Set(accents).size).toBeGreaterThan(1);
  });

  it("a stub essay stays non-interactive and a real one is a link", () => {
    const { container } = render(<Writing posts={fixture} />);
    const links = [...container.querySelectorAll("a")].filter(a => a.getAttribute("href")?.startsWith("/writing/"));
    expect(links.length, "at least one real essay links out").toBeGreaterThan(0);
    // The stub's label must not be wrapped in an anchor.
    const stub = [...container.querySelectorAll("p")].find(p => /coming soon/i.test(p.textContent || ""));
    expect(stub, "the stub label should still render").not.toBeUndefined();
    expect(stub!.closest("a"), "a stub must not become a link").toBeNull();
  });
});

describe("the writing page claims only what a visitor can read (ticket 004)", () => {
  it("renders no draft: every listed essay has a page", () => {
    expect(posts.length).toBeGreaterThan(0);
    for (const p of posts) expect(p.hasFullPost, `${p.title} is listed without an essay`).toBe(true);
    const { container } = render(<Writing />);
    expect(container.textContent).not.toMatch(/coming soon/i);
  });

  it("the essay count is the number of essays listed", () => {
    const count = writingStats.find(s => /essays? published/i.test(s.label));
    expect(count?.value).toBe(String(posts.length));
  });

  it("makes no publishing-frequency claim", () => {
    const { container } = render(<Writing />);
    for (const dd of container.querySelectorAll("dl dd")) {
      expect(dd.textContent, "a stat promising a cadence").not.toMatch(/per month|twice|weekly/i);
    }
  });

  it("leaves out the Earlier section when there is nothing earlier", () => {
    const { container } = render(<Writing posts={[fixture[0]]} />);
    const headings = [...container.querySelectorAll("h2")].map(h => h.textContent);
    expect(headings).not.toContain("Earlier");
  });
});

describe("reflow", () => {
  /**
   * The essay page failed WCAG 1.4.10 at 400% zoom: a bare minmax(300px, 1fr)
   * cannot shrink below 300px, so at a 320px effective viewport the track ran
   * 12px past it. Measured, then fixed with min(); the browser gate carries the
   * rendered proof and this guards the source it came from.
   */
  it("neither writing page leaves an unbounded grid floor", () => {
    for (const ui of [<Writing />, <WritingPost />]) {
      const { container } = render(ui);
      for (const el of container.querySelectorAll<HTMLElement>("[style*='minmax']")) {
        const cols = el.style.gridTemplateColumns;
        if (!cols.includes("minmax")) continue;
        if (/minmax\(\s*0/.test(cols)) continue;      // already safe
        expect(cols, `unbounded floor: ${cols}`).toMatch(/minmax\(min\(/);
      }
    }
  });

  /**
   * The guard above only sees what these two pages render. Résumé and the case
   * studies STILL carry unbounded floors and are batches F and G; naming them
   * here keeps that visible, so a passing suite is never read as "the site has
   * no unbounded floors left".
   */
  // The "not yet covered" list that stood here is replaced by the single sweep
  // in case-studies.test.tsx, which reads the page directory rather than a
  // hand-kept list. Two records of one fact is how one of them goes stale.
});
