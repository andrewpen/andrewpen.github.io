/**
 * P06-A02 acceptance: Hero and Bio.
 *
 * Asset references are checked against the files that actually ship, because
 * an <img> with a wrong src renders as nothing and says nothing — the failure
 * this batch is required to detect rather than capture.
 */
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { Hero } from "./components/Hero";
import { Bio } from "./components/Bio";
import { chrome } from "./destinations";

const PUBLIC = resolve(__dirname, "../../public");
const onDisk = (src: string) => existsSync(resolve(PUBLIC, src.replace(/^\//, "")));

/** Every image the rendered component asks the browser for. */
function images(container: HTMLElement) {
  return [...container.querySelectorAll("img")].map(img => ({
    src: img.getAttribute("src") ?? "",
    alt: img.getAttribute("alt"),
  }));
}

describe("portraits and assets", () => {
  it("every image Hero and Bio reference exists in public/", () => {
    for (const [name, ui] of [["Hero", <Hero />], ["Bio", <Bio />]] as const) {
      const { container } = render(ui);
      const imgs = images(container);
      expect(imgs.length, `${name} must render at least one image`).toBeGreaterThan(0);
      for (const { src } of imgs) {
        expect(onDisk(src), `${name}: ${src} is referenced but not in public/`).toBe(true);
      }
    }
  });

  it("every image carries alt text, so it is not silent when it fails", () => {
    for (const ui of [<Hero />, <Bio />]) {
      const { container } = render(ui);
      for (const { src, alt } of images(container)) {
        // Decorative images are allowed alt="", but must still declare it.
        expect(alt, `${src} has no alt attribute at all`).not.toBeNull();
      }
    }
  });

  /**
   * The missing-asset fixture, injected through the REAL path.
   *
   * The first version called onDisk() twice with a good and a bad string,
   * which exercised my helper and not the check — it would have passed with
   * the component rendering no images at all (CX-065). This replaces the
   * content module the component actually reads, renders it, and runs the
   * same assertion the passing test runs.
   */
  it("FIXTURE: a portrait the component asks for but that is not there FAILS", async () => {
    vi.resetModules();
    const real = await vi.importActual<typeof import("./content")>("./content");
    vi.doMock("./content", () => ({
      ...real,
      hero: { ...real.hero, profileImage: "/img/no-such-portrait.webp" },
    }));

    const { Hero: BrokenHero } = await import("./components/Hero");
    const { container } = render(<BrokenHero />);
    const srcs = images(container).map(i => i.src);

    expect(srcs, "the component must still ask for an image").toContain("/img/no-such-portrait.webp");
    // The same assertion as the passing test above — and here it must fail.
    expect(srcs.every(onDisk)).toBe(false);

    vi.doUnmock("./content");
    vi.resetModules();
  });
});

describe("stat semantics", () => {
  it("stats are a description list, not a grid of loose text", () => {
    const { container } = render(<Hero />);
    const dl = container.querySelector("dl");
    expect(dl, "stats must be a <dl>").not.toBeNull();

    const terms = dl!.querySelectorAll("dt");
    const defs = dl!.querySelectorAll("dd");
    expect(terms.length).toBeGreaterThan(0);
    // One label per figure: a dl with mismatched counts reads as nonsense to a
    // screen reader even though it looks right.
    expect(defs.length).toBe(terms.length);
  });

  it("figures are tabular, so they line up rather than dance", () => {
    const { container } = render(<Hero />);
    const dt = container.querySelector("dt") as HTMLElement;
    expect(dt.style.fontVariantNumeric).toContain("tabular-nums");
  });
});

describe("actions in the dark sections", () => {
  it("are LinkButtons pointing where the record says", () => {
    const { container } = render(<Hero />);
    const ctas = [...container.querySelectorAll("a.a3kds-btn")];
    expect(ctas.length).toBe(2);
    const [w, s] = chrome(["writing-section", "speaking"], "home");
    expect(ctas.map(a => a.getAttribute("href"))).toEqual([w.href, s.href]);
  });

  it("Bio keeps target and rel on the external link", () => {
    const { container } = render(<Bio />);
    const ext = container.querySelector('a.a3kds-btn[target="_blank"]');
    expect(ext, "the LinkedIn action must still open in a new tab").not.toBeNull();
    expect(ext!.getAttribute("rel")).toContain("noopener");
  });

  it("the dark sections declare the mode whose palette they are using", () => {
    // Without this the system resolves its LIGHT action inside a navy section,
    // which is what forced a hand-written colour exception in batch A.
    for (const [ui, id] of [[<Hero />, "top"], [<Bio />, "bio"]] as const) {
      const { container } = render(ui);
      expect(container.querySelector(`#${id}`)?.getAttribute("data-mode")).toBe("dark");
    }
  });
});

describe("reflow", () => {
  it("no grid floor is wider than its container can become", () => {
    for (const ui of [<Hero />, <Bio />]) {
      const { container } = render(ui);
      for (const el of container.querySelectorAll<HTMLElement>("[style*='minmax']")) {
        const cols = el.style.gridTemplateColumns;
        if (!cols.includes("minmax")) continue;
        // A bare minmax(320px, 1fr) cannot shrink below 320px, so it overflows
        // a narrower viewport. min() is what lets it.
        expect(cols, `unbounded floor: ${cols}`).toMatch(/minmax\(min\(/);
      }
    }
  });
});
