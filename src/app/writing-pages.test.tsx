import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Writing } from "./Writing";
import { WritingPost } from "./WritingPost";

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
    const { container } = render(<Writing />);
    const cards = container.querySelectorAll(".a3kds-card");
    expect(cards.length, "every earlier-essay card should be a system Card").toBeGreaterThan(0);
  });

  it("each card carries the post's own accent colour, which is content and not a system role", () => {
    const { container } = render(<Writing />);
    const accents = [...container.querySelectorAll<HTMLElement>(".a3kds-card[data-accent]")]
      .map(c => c.style.getPropertyValue("--a3kds-local-card-accent"))
      .filter(Boolean);
    expect(accents.length).toBeGreaterThan(0);
    // Distinct colours, not one repeated: which colour means which essay is content.
    expect(new Set(accents).size).toBeGreaterThan(1);
  });

  it("a stub essay stays non-interactive and a real one is a link", () => {
    const { container } = render(<Writing />);
    const links = [...container.querySelectorAll("a")].filter(a => a.getAttribute("href")?.startsWith("/writing/"));
    expect(links.length, "at least one real essay links out").toBeGreaterThan(0);
    // The stub's label must not be wrapped in an anchor.
    const stub = [...container.querySelectorAll("p")].find(p => /coming soon/i.test(p.textContent || ""));
    expect(stub, "the stub label should still render").not.toBeUndefined();
    expect(stub!.closest("a"), "a stub must not become a link").toBeNull();
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
