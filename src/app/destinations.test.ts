/**
 * P06-A01: centralizing destinations must not MOVE one.
 *
 * The expected values below were read off the five pages before the change —
 * they are the site as it shipped, not as this record computes it. That is the
 * point: a test derived from the new code would agree with any refactor,
 * including one that quietly sent a link somewhere else.
 */
import { describe, it, expect } from "vitest";
import { chrome, hrefFor, destination, DESTINATIONS, PAGE_PATH } from "./destinations";
import { contact } from "./content";

const LINKEDIN = contact.linkedinUrl;
const EMAIL = `mailto:${contact.email}`;

describe("the site links exactly where it did before", () => {
  it("homepage nav", () => {
    expect(chrome(["writing-section", "speaking", "work", "practice", "bio"], "home")
      .map(l => [l.label, l.href])).toEqual([
      ["Writing", "#writing"], ["Speaking", "#speaking"], ["Work", "#work"],
      ["Practice", "#practice"], ["Bio", "#bio"],
    ]);
  });

  it("homepage footer", () => {
    expect(chrome(["writing-index", "linkedin", "email", "resume"], "home")
      .map(l => [l.label, l.href])).toEqual([
      ["Writing", "/writing.html"], ["LinkedIn", LINKEDIN],
      ["Email", EMAIL], ["CV", "/resume.html"],
    ]);
  });

  it("writing index nav, with itself marked current", () => {
    const nav = chrome(["home", "writing-index", "speaking", "resume"], "writing", "writing-index");
    expect(nav.map(l => [l.label, l.href])).toEqual([
      ["Portfolio", "/"], ["Writing", "/writing.html"],
      ["Speaking", "/#speaking"], ["CV", "/resume.html"],
    ]);
    expect(nav.filter(l => l.current).map(l => l.label)).toEqual(["Writing"]);
  });

  it("resume nav and footer", () => {
    expect(chrome(["home", "writing-index", "speaking", "resume"], "resume", "resume")
      .map(l => l.href)).toEqual(["/", "/writing.html", "/#speaking", "/resume.html"]);
    expect(chrome(["home", "writing-index", "linkedin", "email"], "resume")
      .map(l => l.href)).toEqual(["/", "/writing.html", LINKEDIN, EMAIL]);
  });

  it("case study nav marks Work, the section it belongs to", () => {
    const nav = chrome(["home", "writing-index", "work", "resume"], "case-study", "work");
    expect(nav.map(l => l.href)).toEqual(["/", "/writing.html", "/#work", "/resume.html"]);
    expect(nav.find(l => l.current)?.label).toBe("Work");
  });

  it("writing post nav marks Writing, and its subscribe reaches the index", () => {
    const nav = chrome(["home", "writing-index", "speaking", "resume"], "writing-post", "writing-index");
    expect(nav.find(l => l.current)?.label).toBe("Writing");
    expect(hrefFor(destination("subscribe-writing"), "writing-post")).toBe("/writing.html#subscribe");
  });
});

describe("an anchor is written correctly for where you are", () => {
  it("is a bare fragment on its own page", () => {
    expect(hrefFor(destination("speaking"), "home")).toBe("#speaking");
  });

  it("is absolute from anywhere else — the bug this record removes", () => {
    for (const from of ["writing", "resume", "case-study", "writing-post"] as const) {
      expect(hrefFor(destination("speaking"), from)).toBe("/#speaking");
    }
  });

  it("subscribe is two different destinations, not one written twice", () => {
    expect(hrefFor(destination("subscribe-home"), "home")).toBe("#subscribe");
    expect(hrefFor(destination("subscribe-writing"), "writing")).toBe("#subscribe");
    expect(hrefFor(destination("subscribe-home"), "writing")).toBe("/#subscribe");
  });
});

describe("the record refuses what it cannot answer", () => {
  it("an unknown id throws rather than rendering a dead link", () => {
    expect(() => destination("no-such-place")).toThrow(/Unknown destination/);
    expect(() => chrome(["home", "typo"], "home")).toThrow(/Unknown destination/);
  });

  it("an anchor on a page with no path throws rather than guessing", () => {
    expect(() => hrefFor(
      { id: "x", label: "X", kind: "anchor", onPage: "case-study", anchor: "y" }, "home"))
      .toThrow(/no path/);
  });

  it("every declared destination resolves from every page", () => {
    const pages = Object.keys(PAGE_PATH) as (keyof typeof PAGE_PATH)[];
    for (const d of DESTINATIONS) {
      for (const from of pages) {
        expect(hrefFor(d, from), `${d.id} from ${from}`).toBeTruthy();
      }
    }
  });
});
