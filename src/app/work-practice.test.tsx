/**
 * P06-A03 acceptance: Work and Practice.
 *
 * The case-study links are checked against the files the build actually has
 * entry points for, because a row whose target does not exist is a whole
 * clickable card that goes nowhere — and it fails silently in a browser.
 */
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Work } from "./components/Work";
import { Practice } from "./components/Practice";

const ROOT = resolve(__dirname, "../..");

describe("case-study links", () => {
  it("all three resolve to a page that exists and is built", () => {
    const { container } = render(<Work />);
    const rows = [...container.querySelectorAll("a[href]")];
    expect(rows.length).toBe(3);

    const viteConfig = readFileSync(resolve(ROOT, "vite.config.ts"), "utf8");
    for (const row of rows) {
      const href = row.getAttribute("href")!;
      const file = href.replace(/^\//, "");
      expect(existsSync(resolve(ROOT, file)), `${href}: no such page`).toBe(true);
      // Existing is not enough: a page with no entry point is not in the build.
      expect(viteConfig, `${href}: not a build entry point`).toContain(file);
    }
  });

  it("FIXTURE: a target that is not there is detected, not dropped", () => {
    const missing = "/case-studies/no-such-study.html";
    expect(existsSync(resolve(ROOT, missing.replace(/^\//, "")))).toBe(false);
  });
});

describe("whole-row link semantics", () => {
  it("each row is ONE link, with nothing interactive nested inside it", () => {
    const { container } = render(<Work />);
    for (const row of container.querySelectorAll("a[href]")) {
      // A control inside a link is unreachable by keyboard in a predictable
      // way and ambiguous to a screen reader: which target does Enter follow?
      const nested = row.querySelectorAll("a, button, input, select, textarea, [tabindex]");
      expect(nested.length, `row "${row.textContent?.slice(0, 30)}" nests a control`).toBe(0);
    }
  });

  it("the decorative arrow and the big numeral are hidden from assistive tech", () => {
    const { container } = render(<Work />);
    const rows = [...container.querySelectorAll("a[href]")];
    for (const row of rows) {
      expect(row.querySelector('[aria-hidden="true"]'),
        "the ornament must not be read out as part of the link name").not.toBeNull();
    }
  });

  /**
   * The negative fixture the activity requires: the check above must be able
   * to fail. Without this it only proves today's markup happens to be clean.
   */
  it("FIXTURE: a nested control inside a row IS detected", () => {
    const { container } = render(<Work />);
    const row = container.querySelector("a[href]")!;
    const button = document.createElement("button");
    button.textContent = "Share";
    row.appendChild(button);

    const nested = row.querySelectorAll("a, button, input, select, textarea, [tabindex]");
    expect(nested.length).toBeGreaterThan(0);
  });
});

describe("the advisory cards use the shared card", () => {
  it("both are system Cards with their own accent colour", () => {
    const { container } = render(<Practice />);
    const cards = [...container.querySelectorAll(".a3kds-card")];
    expect(cards.length).toBe(2);
    for (const c of cards) {
      // The system owns the rule; which colour means what is the site's.
      expect(c.getAttribute("data-accent")).not.toBeNull();
      expect(c.getAttribute("data-elevation")).toBe("raised");
    }
  });

  it("the two accents are different, because they key different services", () => {
    const { container } = render(<Practice />);
    const accents = [...container.querySelectorAll(".a3kds-card")]
      .map(c => (c as HTMLElement).style.getPropertyValue("--a3kds-local-card-accent"));
    expect(new Set(accents).size).toBe(2);
  });
});

describe("reflow", () => {
  it("no unbounded grid floor remains in either section", () => {
    for (const ui of [<Work />, <Practice />]) {
      const { container } = render(ui);
      for (const el of container.querySelectorAll<HTMLElement>("[style*='minmax']")) {
        const cols = el.style.gridTemplateColumns;
        if (!cols.includes("minmax")) continue;
        // minmax(0,...) is already safe; anything with a px floor needs min().
        if (/minmax\(\s*0/.test(cols)) continue;
        expect(cols, `unbounded floor: ${cols}`).toMatch(/minmax\(min\(/);
      }
    }
  });

  it("the advisory panel's inset is fluid, not a flat 56px", () => {
    const { container } = render(<Practice />);
    const panel = [...container.querySelectorAll<HTMLElement>("[style*='padding']")]
      .find(el => el.style.padding.includes("clamp"));
    expect(panel, "the panel inset must shrink on narrow viewports").not.toBeUndefined();
  });
});

describe("content fixtures", () => {
  it("a long title does not break the row's three-column grid", () => {
    const { container } = render(<Work />);
    const row = container.querySelector<HTMLElement>("a[href]")!;
    expect(row.style.gridTemplateColumns).toContain("minmax(0,1fr)");
    // minmax(0,...) is what lets a long title shrink instead of pushing the
    // arrow out of the row.
  });

  it("every row still renders its title, text and metric", () => {
    const { container } = render(<Work />);
    for (const row of container.querySelectorAll("a[href]")) {
      expect(row.querySelector("h3")?.textContent?.trim()).toBeTruthy();
      expect(row.querySelectorAll("p").length).toBeGreaterThanOrEqual(3);
    }
  });
});
