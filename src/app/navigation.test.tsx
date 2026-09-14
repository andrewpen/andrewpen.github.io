/**
 * P06-A01: every in-page destination must actually land somewhere.
 *
 * The record guarantees a link is written correctly for the page it is on. It
 * cannot know whether the TARGET exists — an anchor to a section nobody
 * rendered is a well-formed link to nothing, and it fails silently in a
 * browser. So the page itself is rendered and every fragment is resolved
 * against it.
 */
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";
import { Writing } from "./Writing";
import { DESTINATIONS, hrefFor, chrome } from "./destinations";

/** Every fragment the rendered page links to, and whether it lands. */
function danglingAnchors(container: HTMLElement) {
  const dangling: string[] = [];
  for (const a of container.querySelectorAll("a[href^='#']")) {
    const id = a.getAttribute("href")!.slice(1);
    if (!id) continue;
    if (!container.querySelector(`#${CSS.escape(id)}`)) dangling.push(id);
  }
  return dangling;
}

describe("homepage anchors", () => {
  it("every in-page link lands on a section that exists", () => {
    const { container } = render(<App />);
    expect(danglingAnchors(container)).toEqual([]);
  });

  it("the nav reaches all five sections", () => {
    const { container } = render(<App />);
    for (const id of ["writing", "speaking", "work", "practice", "bio"]) {
      expect(container.querySelector(`#${id}`), `#${id} must exist`).not.toBeNull();
      expect(container.querySelector(`a[href="#${id}"]`), `nav must link #${id}`).not.toBeNull();
    }
  });

  it("the skip link and the subscribe action land", () => {
    const { container } = render(<App />);
    expect(container.querySelector("#main-content")).not.toBeNull();
    expect(container.querySelector("#subscribe")).not.toBeNull();
  });

  /**
   * The injected failure the acceptance asks for. Without it, the check above
   * proves only that today's page happens to be consistent — not that a broken
   * anchor would be caught.
   */
  it("INJECTED: a missing target is detected, not passed over", () => {
    const { container } = render(<App />);
    container.querySelector("#speaking")!.removeAttribute("id");
    expect(danglingAnchors(container)).toContain("speaking");
  });
});

describe("secondary pages return to the homepage correctly", () => {
  it("the writing index links back with absolute anchors, not bare fragments", () => {
    const { container } = render(<Writing />);
    // A bare "#speaking" here would scroll nowhere: the section is on the home
    // page. Every cross-page anchor must carry its path.
    const speaking = container.querySelector('a[href="/#speaking"]');
    expect(speaking, "must link /#speaking, not #speaking").not.toBeNull();
    expect(container.querySelector('a[href="#speaking"]')).toBeNull();
  });

  it("its own in-page anchors still land", () => {
    const { container } = render(<Writing />);
    expect(danglingAnchors(container)).toEqual([]);
  });
});

describe("chrome behaviour the migration must preserve", () => {
  it("marks the current page for assistive technology, once", () => {
    const { container } = render(<Writing />);
    const current = container.querySelectorAll('nav[aria-label="Main"] [aria-current="page"]');
    expect(current.length).toBe(1);
  });

  it("nav items are anchors, never buttons", () => {
    const { container } = render(<App />);
    const nav = container.querySelector('nav[aria-label="Main"]')!;
    expect(nav.querySelectorAll("button").length).toBe(0);
    expect(nav.querySelectorAll("a").length).toBeGreaterThan(0);
  });

  it("every chrome link is reachable by keyboard", () => {
    const { container } = render(<App />);
    for (const a of container.querySelectorAll("a[href]")) {
      expect(a.getAttribute("tabindex")).not.toBe("-1");
    }
  });

  it("a long label does not break the record", () => {
    const long = "Speaking, Advisory and Workshop Facilitation for Product Teams";
    const d = { ...DESTINATIONS.find(x => x.id === "speaking")!, label: long };
    expect(d.label).toBe(long);
    expect(hrefFor(d, "resume")).toBe("/#speaking");
    expect(chrome(["speaking"], "resume")[0].href).toBe("/#speaking");
  });
});
