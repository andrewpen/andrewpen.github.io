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
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Writing } from "./Writing";
import { chrome } from "./destinations";
import { Navbar } from "./components/Navbar";

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

  /**
   * REAL Tab traversal, driven by the keyboard.
   *
   * Two rewrites got here. The first asserted no link carried tabindex="-1",
   * which says nothing about focus. The second called .focus() in a loop —
   * which sets the order itself rather than exercising Tab, so it would have
   * passed with every link removed from the tab sequence (CX-063).
   */
  it("Tab walks the chrome in order and reaches page content beyond it", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    const seen: string[] = [];
    // Start from the document, not from an element focused by hand.
    await user.tab();
    for (let i = 0; i < 12; i += 1) {
      const el = document.activeElement as HTMLElement;
      if (!el || el === document.body) break;
      seen.push((el.textContent ?? "").trim().slice(0, 20));
      if (!el.closest("header") && !el.matches('a[href="#main-content"]')) break;
      await user.tab();
    }

    // The chrome is traversed in the order it is read...
    expect(seen[0]).toMatch(/Skip to main content/i);
    expect(seen).toEqual(expect.arrayContaining(["Writing", "Speaking", "Work", "Practice", "Bio"]));
    // The CTA is part of the chrome and must be IN the tab sequence. Asserting
    // it here rather than by calling focus() on it: focus() succeeds on a
    // tabindex="-1" element, so it cannot tell reachable from unreachable.
    expect(seen).toContain("Subscribe");

    // ...and Tab LEAVES it. The previous version claimed this while only ever
    // focusing chrome elements, so it could not have detected a focus trap.
    const last = document.activeElement as HTMLElement;
    expect(last.closest("header"), "Tab must reach content outside the header").toBeNull();
    expect(container.contains(last)).toBe(true);
  });

  it("REGRESSION: a link removed from the tab sequence is detected", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);
    const speaking = container.querySelector('nav[aria-label="Main"] a[href="#speaking"]') as HTMLElement;
    speaking.setAttribute("tabindex", "-1");

    const seen: string[] = [];
    await user.tab();
    for (let i = 0; i < 12; i += 1) {
      const el = document.activeElement as HTMLElement;
      if (!el || el === document.body) break;
      seen.push((el.textContent ?? "").trim());
      if (!el.closest("header") && !el.matches('a[href="#main-content"]')) break;
      await user.tab();
    }
    expect(seen).not.toContain("Speaking");
  });

  it("Enter on the Subscribe CTA activates it as a link", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);
    const cta = container.querySelector("a.ap-chrome-cta") as HTMLAnchorElement;

    let defaultPrevented: boolean | null = null;
    cta.addEventListener("click", e => { defaultPrevented = e.defaultPrevented; e.preventDefault(); });

    // Reached BY TAB, not by focus(). focus() works on an element that is out
    // of the tab sequence, so it would pass on a CTA no keyboard user can get
    // to — a mutation that survived until this was changed.
    await user.tab();
    for (let i = 0; i < 12 && document.activeElement !== cta; i += 1) await user.tab();
    expect(document.activeElement, "Tab must be able to reach the CTA").toBe(cta);

    await user.keyboard("{Enter}");

    // Enter on a focused anchor fires a click. jsdom does NOT then navigate —
    // it has no navigation — so the assertion is that activation reached the
    // element, and the href it would follow is the right one. Real navigation
    // is browser evidence, recorded in the A01 capture, not claimed here.
    expect(defaultPrevented, "Enter must activate the anchor").not.toBeNull();
    expect(cta.getAttribute("href")).toBe("#subscribe");
  });

  it("Enter and Space activate the Print CTA, with no injected click", async () => {
    const user = userEvent.setup();
    const fired: string[] = [];
    const { container } = render(
      <Navbar links={chrome(["home"], "resume")} cta={{ label: "Print / PDF", onClick: () => fired.push("run") }} />);

    const cta = container.querySelector("button.ap-chrome-cta") as HTMLButtonElement;
    expect(cta, "an onClick CTA must be a button").not.toBeNull();

    // The previous version sent a keyDown and then called fireEvent.click()
    // unconditionally, so a keyboard activation that never happened still
    // passed — the test clicked for it. Nothing is clicked here.
    cta.focus();
    await user.keyboard("{Enter}");
    expect(fired, "Enter must activate the button on its own").toEqual(["run"]);

    fired.length = 0;
    cta.focus();
    await user.keyboard(" ");
    expect(fired, "Space must activate the button on its own").toEqual(["run"]);
  });

  it("REGRESSION: blocked keyboard activation fails, so the test above means something", async () => {
    const user = userEvent.setup();
    const fired: string[] = [];
    const { container } = render(
      <Navbar links={chrome(["home"], "resume")} cta={{ label: "Print / PDF", onClick: () => fired.push("run") }} />);

    const cta = container.querySelector("button.ap-chrome-cta") as HTMLButtonElement;
    cta.addEventListener("keydown", e => e.preventDefault(), true);

    cta.focus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");
    expect(fired, "with activation blocked, nothing should have run").toEqual([]);
  });

  it("renders a long label through the real Navbar, unbroken", () => {
    const long = "Speaking, Advisory and Workshop Facilitation for Product Teams";
    const links = chrome(["speaking"], "resume").map(l => ({ ...l, label: long }));
    const { container } = render(<Navbar links={links} cta={{ label: "Subscribe", href: "#subscribe" }} />);

    const anchors = [...container.querySelectorAll('nav[aria-label="Main"] a')]
      .filter(a => a.textContent?.includes("Workshop"));
    expect(anchors.length).toBe(1);
    expect(anchors[0].textContent).toBe(long);
    expect(anchors[0].getAttribute("href")).toBe("/#speaking");
  });
});
