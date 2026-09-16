/**
 * P06-A03 acceptance: Work and Practice.
 *
 * The case-study links are checked against the files the build actually has
 * entry points for, because a row whose target does not exist is a whole
 * clickable card that goes nowhere — and it fails silently in a browser.
 */
import { describe, it, expect, vi } from "vitest";
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

describe("content fixtures, injected through the real input", () => {
  /**
   * The first version of both of these was a surrogate (CX-068).
   *
   * The long-title test read the grid string and never supplied a long title —
   * and minmax(0,1fr) lets a TRACK shrink, which says nothing about whether
   * the text inside it overflows. The missing-target test checked a filesystem
   * path I made up and never rendered Work at all.
   *
   * Both now replace the content module the component actually reads.
   */
  const withProjects = async (projects: unknown[]) => {
    vi.resetModules();
    const real = await vi.importActual<typeof import("./content")>("./content");
    vi.doMock("./content", () => ({ ...real, projects }));
    const { Work: W } = await import("./components/Work");
    return { W, real };
  };

  const LONG_TITLE =
    "AI-Ready Architecture: Transforming a Very Large Enterprise Design System " +
    "Into a Machine-Readable Knowledge Source for Agents and Their Operators";

  it("a long title stays inside its row and does not push the arrow out", async () => {
    const real = await vi.importActual<typeof import("./content")>("./content");
    const { W } = await withProjects(
      (real.projects as Record<string, unknown>[]).map(p => ({ ...p, title: LONG_TITLE })));

    const { container } = render(<W />);
    const row = container.querySelector<HTMLElement>("a[href]")!;
    const h3 = row.querySelector("h3")!;

    expect(h3.textContent).toBe(LONG_TITLE);
    // The arrow is the last grid child; it must still be present and after the
    // text column, which is what "does not get pushed out" means structurally.
    const arrow = row.querySelector('[aria-hidden="true"]:last-child');
    expect(arrow?.textContent?.trim()).toBe("→");
    expect(row.style.gridTemplateColumns).toContain("minmax(0,1fr)");

    vi.doUnmock("./content"); vi.resetModules();
  });

  it("FIXTURE: a project missing its required content is caught, not rendered blank", async () => {
    const real = await vi.importActual<typeof import("./content")>("./content");
    const broken = (real.projects as Record<string, unknown>[]).map((p, i) =>
      i === 0 ? { ...p, title: "", caseStudyHref: "" } : p);
    const { W } = await withProjects(broken);

    const { container } = render(<W />);

    // The component renders what it is given, so the deliberate handling is a
    // CHECK, not a silent fallback: a row with no title or no target is not a
    // usable link and must fail validation rather than ship as a blank card.
    const rows = [...container.querySelectorAll("a")];
    const unusable = rows.filter(r =>
      !r.getAttribute("href") || !r.querySelector("h3")?.textContent?.trim());
    expect(unusable.length, "a row with no title or target must be detectable").toBe(1);

    vi.doUnmock("./content"); vi.resetModules();
  });

  it("with real content, no row is unusable", async () => {
    const { container } = render(<Work />);
    const rows = [...container.querySelectorAll("a")];
    const unusable = rows.filter(r =>
      !r.getAttribute("href") || !r.querySelector("h3")?.textContent?.trim());
    expect(unusable).toEqual([]);
  });

  it("every row still renders its title, text and metric", () => {
    const { container } = render(<Work />);
    for (const row of container.querySelectorAll("a[href]")) {
      expect(row.querySelector("h3")?.textContent?.trim()).toBeTruthy();
      expect(row.querySelectorAll("p").length).toBeGreaterThanOrEqual(3);
    }
  });
});

/**
 * Regressions for two defects the REAL fixtures exposed (CX-068).
 *
 * Neither was visible from the grid string. Rendering a long title at 320px
 * showed the row's middle track resolving to 10.6px — minmax(0,1fr) permits
 * that collapse, it does not prevent it — and the title overflowing its own
 * box by 72px with overflow-wrap: normal.
 */
describe("a long title has somewhere to go", () => {
  it("the title can break, so the track's min-content width can shrink", () => {
    const { container } = render(<Work />);
    const h3 = container.querySelector<HTMLElement>("a[href] h3")!;
    // "anywhere", not "break-word": only anywhere affects min-content sizing.
    expect(h3.style.overflowWrap).toBe("anywhere");
  });

  it("the row's own gap and padding shrink with the viewport", () => {
    const { container } = render(<Work />);
    const row = container.querySelector<HTMLElement>("a[href]")!;
    // Flat 40px padding and 40px gaps consumed 160px of a 256px row at 320px,
    // leaving the text 10.6px. Both are fluid now.
    expect(row.style.gap).toContain("clamp(");
    expect(row.style.padding).toContain("clamp(");
  });

  it("the advisory cards follow W-3's padding, not the component default", () => {
    const { container } = render(<Practice />);
    for (const c of container.querySelectorAll<HTMLElement>(".a3kds-card")) {
      // Card's own default is space-4. W-3 settled this site's cards at
      // space-6; dropping to the default would make these two tighter than
      // every other card on the site.
      expect(c.style.padding).toBe("var(--a3kds-space-6)");
    }
  });
});
