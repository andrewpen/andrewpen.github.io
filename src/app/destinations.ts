/**
 * Every destination this site links to, declared once (P06-A01).
 *
 * Five pages each kept their own nav and footer arrays — ten hand-maintained
 * lists of the same handful of places. The duplication was not only repetition:
 * the SAME destination was written differently depending on the page, so the
 * homepage said "#speaking" and every other page said "/#speaking", and getting
 * that wrong produced a link that silently went nowhere.
 *
 * A destination is declared once here. How it is written from a given page is
 * COMPUTED, because that is a fact about the two pages rather than something a
 * person should retype. What each page links to, and in what order, stays with
 * the page: route order is website-owned (P05-D3), so it is not decided here.
 */
import { contact } from "./content";

export type PageId = "home" | "writing" | "resume" | "case-study" | "writing-post";

/** Where each page lives. An anchor's absolute form is built from this. */
export const PAGE_PATH: Record<PageId, string> = {
  home: "/",
  writing: "/writing.html",
  resume: "/resume.html",
  // Case studies and posts are several pages sharing one component. They are
  // never a link TARGET in the chrome, so they need no path of their own; the
  // empty string would be a lie, so they are absent and hrefFor says so.
  "case-study": "",
  "writing-post": "",
};

export type Destination =
  | { id: string; label: string; kind: "page"; page: PageId }
  | { id: string; label: string; kind: "anchor"; onPage: PageId; anchor: string }
  | { id: string; label: string; kind: "external"; url: string }
  | { id: string; label: string; kind: "mailto"; address: string };

export const DESTINATIONS: Destination[] = [
  { id: "home", label: "Portfolio", kind: "page", page: "home" },
  { id: "writing-index", label: "Writing", kind: "page", page: "writing" },
  { id: "resume", label: "CV", kind: "page", page: "resume" },

  { id: "writing-section", label: "Writing", kind: "anchor", onPage: "home", anchor: "writing" },
  { id: "speaking", label: "Speaking", kind: "anchor", onPage: "home", anchor: "speaking" },
  { id: "work", label: "Work", kind: "anchor", onPage: "home", anchor: "work" },
  { id: "practice", label: "Practice", kind: "anchor", onPage: "home", anchor: "practice" },
  { id: "bio", label: "Bio", kind: "anchor", onPage: "home", anchor: "bio" },
  { id: "subscribe-home", label: "Subscribe", kind: "anchor", onPage: "home", anchor: "subscribe" },
  { id: "subscribe-writing", label: "Subscribe", kind: "anchor", onPage: "writing", anchor: "subscribe" },

  { id: "linkedin", label: "LinkedIn", kind: "external", url: contact.linkedinUrl },
  { id: "email", label: "Email", kind: "mailto", address: contact.email },
];

const byId = new Map(DESTINATIONS.map(d => [d.id, d]));

export function destination(id: string): Destination {
  const d = byId.get(id);
  // Throwing beats returning a placeholder: an unknown id is a typo in the
  // chrome, and a page that renders a dead link is worse than one that fails
  // the build. The validator turns this into a readable report.
  if (!d) throw new Error(`Unknown destination "${id}"`);
  return d;
}

/** How a destination is written FROM a given page. */
export function hrefFor(d: Destination, from: PageId): string {
  switch (d.kind) {
    case "page": return PAGE_PATH[d.page];
    case "external": return d.url;
    case "mailto": return `mailto:${d.address}`;
    case "anchor": {
      if (d.onPage === from) return `#${d.anchor}`;
      const path = PAGE_PATH[d.onPage];
      if (!path) throw new Error(`Destination "${d.id}" is on a page with no path`);
      return `${path}#${d.anchor}`;
    }
  }
}

export type ChromeLink = { id: string; label: string; href: string; current?: boolean };

/**
 * Build one page's chrome from destination ids.
 *
 * `current` is the nav item for where you are in the SITE, not strictly the
 * page's own URL — a case study marks Work, a post marks Writing. That was the
 * existing behaviour and it is the useful one, so it is carried over as data
 * rather than inferred.
 */
export function chrome(ids: string[], from: PageId, current?: string): ChromeLink[] {
  return ids.map(id => {
    const d = destination(id);
    return { id, label: d.label, href: hrefFor(d, from), ...(id === current ? { current: true } : {}) };
  });
}
