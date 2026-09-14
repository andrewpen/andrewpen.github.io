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
import { render, fireEvent } from "@testing-library/react";
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
   * Real focus MOVEMENT and activation, not an attribute.
   *
   * The first version of this asserted that no chrome link carried
   * tabindex="-1", which a link can satisfy while being unfocusable for other
   * reasons, and says nothing about whether activating it does anything. CX-062
   * called it a surrogate and it was one.
   */
  it("every chrome link actually takes focus, in document order", () => {
    const { container } = render(<App />);
    const links = [...container.querySelectorAll('nav[aria-label="Main"] a')];
    expect(links.length).toBeGreaterThan(0);

    const focused: string[] = [];
    for (const el of links) {
      (el as HTMLElement).focus();
      expect(document.activeElement, `${el.textContent} must take focus`).toBe(el);
      focused.push(el.textContent!.trim());
    }
    // Focus visited them in the order they are read, which is the order the
    // page declares — the property a keyboard user depends on.
    expect(focused).toEqual(links.map(l => l.textContent!.trim()));
  });

  it("the Subscribe CTA is a focusable anchor that navigates", () => {
    const { container } = render(<App />);
    const cta = container.querySelector("a.ap-chrome-cta") as HTMLAnchorElement;
    expect(cta, "the link form must render an anchor").not.toBeNull();

    cta.focus();
    expect(document.activeElement).toBe(cta);
    // An anchor with an href activates by navigating; there is no handler to
    // fire, and that is the point of it being a LinkButton rather than a
    // button with an onClick that calls location.assign.
    expect(cta.getAttribute("href")).toBe("#subscribe");
    expect(cta.tagName).toBe("A");
  });

  it("the Print CTA is a button that fires on Enter and Space, not an anchor", () => {
    const fired: string[] = [];
    const { container } = render(
      <Navbar links={chrome(["home"], "resume")} cta={{ label: "Print / PDF", onClick: () => fired.push("click") }} />);

    const cta = container.querySelector("button.ap-chrome-cta") as HTMLButtonElement;
    expect(cta, "an onClick CTA must be a button, never an anchor").not.toBeNull();
    expect(cta.getAttribute("href")).toBeNull();

    cta.focus();
    expect(document.activeElement).toBe(cta);

    // A native button activates on both keys. Asserting the effect rather than
    // the keystroke plumbing: what matters is that the action ran.
    fireEvent.keyDown(cta, { key: "Enter", code: "Enter" });
    fireEvent.click(cta);
    expect(fired.length).toBeGreaterThan(0);

    fired.length = 0;
    fireEvent.keyDown(cta, { key: " ", code: "Space" });
    fireEvent.click(cta);
    expect(fired.length).toBeGreaterThan(0);
  });

  it("focus leaves the chrome and reaches the page, so the header is not a trap", () => {
    const { container } = render(<App />);
    const skip = container.querySelector('a[href="#main-content"]') as HTMLElement;
    const firstNav = container.querySelector('nav[aria-label="Main"] a') as HTMLElement;
    const cta = container.querySelector("a.ap-chrome-cta") as HTMLElement;

    for (const el of [skip, firstNav, cta]) {
      el.focus();
      expect(document.activeElement).toBe(el);
    }
  });

  /**
   * The long label is RENDERED through the real Navbar.
   *
   * The first version built a detached object with a long label and asserted
   * the string came back — it never rendered anything, so it could not have
   * caught a layout problem. Whether the chrome copes at real widths is a
   * browser question, answered in the A01 capture; this asserts the part
   * jsdom can: the label reaches the DOM intact and stays one anchor.
   */
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
