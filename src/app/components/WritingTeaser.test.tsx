import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { WritingTeaser } from "./WritingTeaser";
import { posts } from "../content";

// P04-A02 acceptance: the empty / one / many and long-title cases must behave
// DELIBERATELY, and real-link versus stub fixtures must differ correctly.
//
// These existed only as one-off browser measurements until now. The empty case
// was a real defect — the whole page went blank — and nothing would have caught
// its return.
//
// LIMIT OF THIS FILE: jsdom has no layout. Nothing here says anything about
// overflow, pill shape or wrapping; those are measured in real Chrome by the
// browser gate. A green run here is not evidence about appearance.

const post = (over: Partial<(typeof posts)[number]> = {}) =>
  ({
    slug: "a-slug",
    title: "A Title",
    date: "Sep 1, 2026",
    words: "100 words",
    rule: "#BE3372",
    excerpt: "An excerpt.",
    hasFullPost: true,
    ...over,
  }) as (typeof posts)[number];

describe("WritingTeaser: how many posts there are", () => {
  it("renders NOTHING when there are no posts", () => {
    // This used to throw during module evaluation and take the whole page with
    // it: "Cannot read properties of undefined (reading 'slug')", empty #root.
    // A heading and an All-writing button above an empty grid would advertise
    // a library that does not exist yet, so absence is the deliberate choice.
    const { container } = render(<WritingTeaser posts={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the featured essay and no cards when there is exactly one", () => {
    render(<WritingTeaser posts={[post({ title: "Only One" })]} />);
    expect(screen.getByText("Only One")).toBeInTheDocument();
    expect(screen.getByText("Latest essay")).toBeInTheDocument();
    expect(document.querySelectorAll(".a3kds-card")).toHaveLength(0);
  });

  it("renders one card per remaining post when there are many", () => {
    const many = [post({ title: "Featured" }), ...Array.from({ length: 4 }, (_, i) => post({ title: `Post ${i}`, slug: `p${i}` }))];
    render(<WritingTeaser posts={many} />);
    expect(document.querySelectorAll(".a3kds-card")).toHaveLength(4);
  });

  it("keeps content in the order it was given", () => {
    // Ordering is content, not presentation. A migration must not resort it.
    const given = [post({ title: "First" }), post({ title: "Second", slug: "s" }), post({ title: "Third", slug: "t" })];
    render(<WritingTeaser posts={given} />);
    const headings = [...document.querySelectorAll("h3")].map((h) => h.textContent);
    expect(headings).toEqual(["First", "Second", "Third"]);
  });
});

describe("WritingTeaser: real links versus stubs", () => {
  it("makes a post with a full essay a real link to its slug", () => {
    render(<WritingTeaser posts={[post({ title: "Featured" }), post({ title: "Real", slug: "real-one", hasFullPost: true })]} />);
    const link = screen.getByRole("link", { name: /Real/ });
    expect(link).toHaveAttribute("href", "/writing/real-one.html");
  });

  it("leaves a stub NON-INTERACTIVE and says so in words", () => {
    // The distinction is the point: a stub that looks clickable is a broken
    // promise, and one with no label is a mystery.
    render(<WritingTeaser posts={[post({ title: "Featured" }), post({ title: "Stub", slug: "stub", hasFullPost: false })]} />);
    expect(screen.queryByRole("link", { name: /Stub/ })).toBeNull();
    expect(screen.getByText(/Full essay coming soon/i)).toBeInTheDocument();
  });

  it("points the featured card at the first post's essay", () => {
    render(<WritingTeaser posts={[post({ title: "Featured", slug: "the-featured-one" })]} />);
    expect(screen.getByRole("link", { name: /Featured/ })).toHaveAttribute("href", "/writing/the-featured-one.html");
  });

  it("always offers All writing, whatever the content", () => {
    render(<WritingTeaser posts={[post()]} />);
    expect(screen.getByRole("link", { name: "All writing" })).toHaveAttribute("href", "/writing.html");
  });
});

describe("WritingTeaser: what the system owns here", () => {
  it("uses the shared action for All writing rather than a hand-styled anchor", () => {
    render(<WritingTeaser posts={[post()]} />);
    expect(screen.getByRole("link", { name: "All writing" })).toHaveClass("a3kds-btn");
  });

  it("gives each card the post's own accent colour", () => {
    // Content-derived: the system owns the rule, not what a colour means.
    render(<WritingTeaser posts={[post({ title: "F" }), post({ title: "C", slug: "c", rule: "#4FE7AF" })]} />);
    const card = document.querySelector(".a3kds-card") as HTMLElement;
    expect(card.style.getPropertyValue("--a3kds-local-card-accent")).toBe("#4FE7AF");
  });

  it("hides the decorative word from assistive technology", () => {
    render(<WritingTeaser posts={[post()]} />);
    const decorative = document.querySelector('[aria-hidden="true"]');
    expect(decorative?.textContent).toMatch(/Judg/);
  });

  it("renders the real content without throwing", () => {
    // The default export path, which every page actually uses.
    render(<WritingTeaser />);
    expect(within(document.body).getByRole("link", { name: "All writing" })).toBeInTheDocument();
  });
});
