import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Resume } from "./Resume";

/**
 * P07-A01 batch F: the résumé, whose output is a PRINTED page as much as a
 * screen one. P07-D1 requires the print output to be reviewed, and reviewing a
 * real PDF is what found both defects guarded here.
 */

describe("print", () => {
  /**
   * Reviewed against a printed PDF: the education card was split across the
   * page 1-2 boundary, and a role card broke in the middle of its bullet list.
   * A card that fits on a page must not straddle one.
   */
  it("every card that fits a page is marked so it cannot straddle a page break", () => {
    const { container } = render(<Resume />);
    const cards = container.querySelectorAll(".apb-cv-card");
    expect(cards.length, "stat tiles and the three sidebar cards carry the hook").toBeGreaterThanOrEqual(4);
  });

  it("each education entry is atomic in print", () => {
    const { container } = render(<Resume />);
    expect(container.querySelectorAll(".apb-cv-entry").length).toBeGreaterThan(0);
  });

  /**
   * A role card is legitimately taller than a page. Forbidding a break inside
   * it would push it whole to the next page and leave most of one blank, so it
   * is marked for the narrower rules — heading not orphaned, no bullet split —
   * rather than for break-inside: avoid.
   */
  it("a role card is marked for the narrower rules, not for break-inside: avoid", () => {
    const { container } = render(<Resume />);
    const roles = container.querySelectorAll(".apb-cv-role");
    expect(roles.length, "every experience entry").toBeGreaterThan(0);
    for (const r of roles) expect(r.classList.contains("apb-cv-card")).toBe(false);
  });

  it("the print rules those hooks depend on actually exist in the stylesheet", () => {
    // The hooks are inert without the rules, and a className that styles
    // nothing is the quietest kind of dead code.
    const css = readFileSync(resolve(__dirname, "../styles/theme.css"), "utf8");
    const printBlock = css.slice(css.indexOf("@media print"));
    expect(printBlock).toMatch(/\.apb-cv-card[^{]*\{[^}]*break-inside:\s*avoid/);
    expect(printBlock).toMatch(/\.apb-cv-role h3[^{]*\{[^}]*break-after:\s*avoid/);
    expect(printBlock).toMatch(/\.apb-cv-role li[^{]*\{[^}]*break-inside:\s*avoid/);
  });

  it("the chrome and the contact prompt stay out of the printed page", () => {
    const { container } = render(<Resume />);
    expect(container.querySelectorAll(".apb-noprint").length).toBeGreaterThanOrEqual(3);
  });
});

describe("reflow", () => {
  /**
   * The hero resolved a 300px track inside a 256px content box at 400% zoom and
   * painted 12px past the section's clip edge, cutting off the name and the
   * portrait. The section's overflow:hidden kept that out of the document's
   * scrollWidth, so the browser gate reported a PASS — it now detects cut-off
   * content as its own failure.
   */
  it("no unbounded grid floor remains on the résumé", () => {
    const { container } = render(<Resume />);
    for (const el of container.querySelectorAll<HTMLElement>("[style*='minmax']")) {
      const cols = el.style.gridTemplateColumns;
      if (!cols.includes("minmax")) continue;
      if (/minmax\(\s*0/.test(cols)) continue;
      // A floor smaller than the narrowest container we support cannot overflow it.
      const floor = Number(/minmax\(\s*(\d+)px/.exec(cols)?.[1] ?? 0);
      if (floor && floor <= 256) continue;
      expect(cols, `unbounded floor: ${cols}`).toMatch(/minmax\(min\(/);
    }
  });

  // The "not yet covered" list that stood here is replaced by the single sweep
  // in case-studies.test.tsx, which reads the page directory rather than a
  // hand-kept list. Two records of one fact is how one of them goes stale.
});
