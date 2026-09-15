import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { readFileSync, readdirSync } from "node:fs";
import { resolve, join } from "node:path";
import { CaseStudy } from "./CaseStudy";
import { caseStudies } from "./caseStudies";

/** P07-A01 batch G: the three case studies, rendered from one component. */

const first = caseStudies[0];

describe("the closing actions are the system's", () => {
  it("both render as system actions rather than hand-styled anchors", () => {
    const { container } = render(<CaseStudy id={first.id} />);
    const actions = container.querySelectorAll("a.a3kds-btn");
    expect(actions.length, "get in touch, and back to portfolio").toBe(2);
  });

  it("they are anchors, not buttons — middle-click and open-in-new-tab still work", () => {
    const { container } = render(<CaseStudy id={first.id} />);
    for (const a of container.querySelectorAll("a.a3kds-btn")) {
      expect(a.tagName).toBe("A");
      expect(a.getAttribute("href")).toBeTruthy();
    }
  });

  it("the blue ground declares its mode, so the system supplies dark action colours", () => {
    const { container } = render(<CaseStudy id={first.id} />);
    const dark = container.querySelector('section[data-mode="dark"]');
    expect(dark, "the closing section declares dark").not.toBeNull();
    expect(dark!.querySelectorAll("a.a3kds-btn").length).toBe(2);
  });

  it("the named local colour exception is applied, because the ground is neither system canvas", () => {
    const { container } = render(<CaseStudy id={first.id} />);
    expect(container.querySelector("a.ap-casestudy-cta")).not.toBeNull();
    expect(container.querySelector("a.ap-casestudy-cta-secondary")).not.toBeNull();
  });

  it("the exception's rules exist, including the hover the system would otherwise contradict", () => {
    // A className that styles nothing is the quietest kind of dead code, and
    // WITHOUT the hover rule the system's own hover applies underneath and
    // undoes the decision. Both halves are asserted.
    const css = readFileSync(resolve(__dirname, "../styles/theme.css"), "utf8");
    expect(css).toMatch(/\.a3kds-btn\.ap-casestudy-cta\s*\{[^}]*background-color/);
    expect(css).toMatch(/\.a3kds-btn\.ap-casestudy-cta:hover[^{]*\{[^}]*background-color/);
    expect(css).toMatch(/\.a3kds-btn\.ap-casestudy-cta-secondary:hover[^{]*\{/);
    // Every custom property these rules use must actually be defined somewhere,
    // or the button renders a default colour and nothing says so.
    const used = [...css.matchAll(/\.a3kds-btn\.ap-casestudy-cta[^{]*\{([^}]*)\}/g)]
      .flatMap(m => [...m[1].matchAll(/var\((--[a-z0-9-]+)\)/g)].map(v => v[1]));
    expect(used.length).toBeGreaterThan(0);
    for (const v of used) {
      const pkg = readFileSync(resolve(__dirname, "../../node_modules/@a3kds/design-system/dist/tokens.css"), "utf8");
      expect(pkg.includes(`${v}:`), `${v} must be a real token`).toBe(true);
    }
  });

  it("all three studies render and each resolves its own content", () => {
    const seen = new Set<string>();
    for (const s of caseStudies) {
      const { container } = render(<CaseStudy id={s.id} />);
      const h1 = container.querySelector("h1");
      expect(h1, `${s.id} renders a heading`).not.toBeNull();
      seen.add(h1!.textContent || "");
    }
    expect(seen.size, "three distinct studies, not one repeated").toBe(caseStudies.length);
  });
});

describe("reflow, swept across every page component", () => {
  /**
   * ONE sweep rather than a per-batch list. The earlier per-batch version kept
   * a hand-maintained set of "not yet covered" files, which is a claim that
   * rots; this reads the directory instead, so a new page is covered the day
   * it is added.
   *
   * The narrowest container this site supports is 256px — a 320px viewport,
   * which is WCAG 1.4.10's 400% zoom reference, less 32px of padding each side.
   * A floor at or below that cannot overflow it.
   */
  const NARROWEST = 256;
  const unbounded = (src: string) =>
    [...src.matchAll(/minmax\(\s*(\d+)px/g)]
      .map(m => Number(m[1]))
      .filter(px => px > NARROWEST);

  it("the detector actually detects — a broken regex must not pass vacuously", () => {
    expect(unbounded('gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"')).toEqual([300]);
    expect(unbounded('gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))"')).toEqual([]);
    expect(unbounded('gridTemplateColumns: "minmax(0, 1fr)"')).toEqual([]);
    // The second value is the MAX, not a floor: this track still shrinks to
    // 240px, so it cannot overflow a 256px container. Asserting [320] here was
    // my own misreading, and this self-test is what caught it.
    expect(unbounded('gridTemplateColumns: "minmax(240px, 320px)"')).toEqual([]);
    expect(unbounded('gridTemplateColumns: "minmax(260px, 300px) minmax(0,1fr)"')).toEqual([260]);
  });

  it("no page component leaves a grid floor wider than the narrowest container", () => {
    const dir = resolve(__dirname);
    const files = [
      ...readdirSync(dir).filter(f => f.endsWith(".tsx") && !f.includes(".test.")).map(f => join(dir, f)),
      ...readdirSync(join(dir, "components")).filter(f => f.endsWith(".tsx") && !f.includes(".test.")).map(f => join(dir, "components", f)),
    ];
    expect(files.length, "the sweep must actually find page files").toBeGreaterThan(8);
    const offenders: string[] = [];
    for (const f of files) {
      const found = unbounded(readFileSync(f, "utf8"));
      if (found.length) offenders.push(`${f.split("/src/")[1]}: ${found.join(", ")}px`);
    }
    expect(offenders).toEqual([]);
  });
});
