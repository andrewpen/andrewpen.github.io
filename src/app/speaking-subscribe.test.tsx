/**
 * P06-A05 acceptance: Speaking's selection model and Subscribe's handoff.
 *
 * The guardrail is the interesting part: this must not send email, collect an
 * address, or claim a subscription happened. So the tests assert the ABSENCE
 * of a network call and of any success wording, which is harder to get right
 * than asserting a happy path.
 */
import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Speaking } from "./components/Speaking";
import { Subscribe } from "./components/Subscribe";
import { contact, speakingEvents } from "./content";

describe("Speaking selection", () => {
  const gallery = (c: HTMLElement) =>
    [...c.querySelectorAll('button[aria-pressed]')] as HTMLElement[];

  it("exactly one event is selected at a time, and it is announced", () => {
    const { container } = render(<Speaking />);
    const pressed = gallery(container).filter(b => b.getAttribute("aria-pressed") === "true");
    expect(pressed.length).toBe(1);
    // The detail panel is a live region so a change is spoken, not silent.
    expect(container.querySelector('[aria-live="polite"]')).not.toBeNull();
  });

  it("selection moves with the KEYBOARD, not only the mouse", async () => {
    const user = userEvent.setup();
    const { container } = render(<Speaking />);
    const items = gallery(container);
    expect(items.length).toBeGreaterThan(1);

    items[1].focus();
    expect(document.activeElement).toBe(items[1]);
    await user.keyboard("{Enter}");

    expect(items[1].getAttribute("aria-pressed")).toBe("true");
    expect(items[0].getAttribute("aria-pressed")).toBe("false");
  });

  it("Space activates too, because these are real buttons", async () => {
    const user = userEvent.setup();
    const { container } = render(<Speaking />);
    const items = gallery(container);
    items[2].focus();
    await user.keyboard(" ");
    expect(items[2].getAttribute("aria-pressed")).toBe("true");
  });

  it("the detail panel follows the selection", async () => {
    const user = userEvent.setup();
    const { container } = render(<Speaking />);
    const live = container.querySelector('[aria-live="polite"]') as HTMLElement;
    const before = live.textContent ?? "";
    await user.click(gallery(container)[1]);
    const after = live.textContent ?? "";

    // Plain containment: talk titles carry punctuation that a RegExp built
    // from them would interpret.
    expect(after).not.toBe(before);
    expect(after).toContain(speakingEvents[1].talk);
    expect(after).toContain(speakingEvents[1].label);
  });

  it("gallery images are decorative, so the button's name is its label and year", () => {
    const { container } = render(<Speaking />);
    for (const img of container.querySelectorAll("img")) {
      expect(img.getAttribute("alt")).toBe("");
    }
  });
});

describe("Speaking with no event data", () => {
  it("renders a statement instead of crashing", async () => {
    vi.resetModules();
    const real = await vi.importActual<typeof import("./content")>("./content");
    vi.doMock("./content", () => ({ ...real, speakingEvents: [] }));
    const { Speaking: Empty } = await import("./components/Speaking");

    // speakingEvents[0] was read for .year directly: an empty list threw and
    // took the whole homepage down, not just this section.
    const { container } = render(<Empty />);
    expect(screen.getByText(/No speaking events are listed yet/i)).toBeTruthy();
    expect(container.querySelectorAll('button[aria-pressed]').length).toBe(0);

    vi.doUnmock("./content"); vi.resetModules();
  });
});

describe("Subscribe does not pretend", () => {
  let assigned: string[];
  beforeEach(() => {
    assigned = [];
    vi.spyOn(window, "fetch" as never).mockImplementation((() => {
      throw new Error("Subscribe must not touch the network");
    }) as never);
    // mailto is a navigation, so it is captured rather than performed.
    Object.defineProperty(window, "location", {
      configurable: true,
      value: new Proxy({} as Location, {
        set(_t, prop, value) { if (prop === "href") assigned.push(String(value)); return true; },
        get(_t, prop) { return prop === "href" ? "" : undefined; },
      }),
    });
  });
  afterEach(() => { vi.restoreAllMocks(); });

  it("hands off to mailto with the address in the body, and makes no request", async () => {
    const user = userEvent.setup();
    render(<Subscribe />);

    await user.type(screen.getByLabelText(/email address/i), "reader@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(assigned.length).toBe(1);
    expect(assigned[0]).toContain(`mailto:${contact.email}`);
    expect(decodeURIComponent(assigned[0])).toContain("reader@example.com");
    expect(window.fetch).not.toHaveBeenCalled();
  });

  it("never claims a subscription happened", async () => {
    const user = userEvent.setup();
    const { container } = render(<Subscribe />);
    await user.type(screen.getByLabelText(/email address/i), "reader@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    const said = container.querySelector('[aria-live="polite"]')!.textContent!;
    // There is no list to be added to. Any of these would be a false success.
    expect(said).not.toMatch(/subscribed|you're on the list|thank you for subscribing|success/i);
    expect(said).toMatch(/email client/i);
  });

  it("names the fallback, because nothing here can know the handoff worked", async () => {
    const user = userEvent.setup();
    const { container } = render(<Subscribe />);
    await user.type(screen.getByLabelText(/email address/i), "reader@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    const said = container.querySelector('[aria-live="polite"]')!.textContent!;
    // A mailto navigation is silent when no handler is registered: there is no
    // event to observe. Saying "opening your email client" flatly would be a
    // claim the code cannot support.
    expect(said).toMatch(/if nothing happened/i);
    expect(said).toContain(contact.email);
  });

  it("an INVALID address is rejected by the field and stays recoverable", async () => {
    const user = userEvent.setup();
    render(<Subscribe />);
    const field = screen.getByLabelText(/email address/i) as HTMLInputElement;

    await user.type(field, "not-an-email");
    expect(field.checkValidity()).toBe(false);
    // The value is still there to correct — not cleared out from under them.
    expect(field.value).toBe("not-an-email");

    await user.clear(field);
    await user.type(field, "reader@example.com");
    expect(field.checkValidity()).toBe(true);
  });

  it("keeps the submit off the network by preventing the default", async () => {
    const user = userEvent.setup();
    const { container } = render(<Subscribe />);
    const form = container.querySelector("form")!;

    // jsdom does not navigate on submit, so "no request was made" is not
    // observable there — asserting the event was actually prevented is. A
    // native submit would send the address to the page's own URL in a query
    // string, which is both a network hit and an address leak into history.
    // The flag is read AFTER the event finishes, not inside a listener on the
    // form: React delegates to the root, so a form-level listener runs before
    // React's handler has had the chance to prevent anything.
    let submitEvent: Event | null = null;
    form.addEventListener("submit", e => { submitEvent = e; }, false);

    await user.type(screen.getByLabelText(/email address/i), "reader@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(submitEvent).not.toBeNull();
    expect((submitEvent as unknown as Event).defaultPrevented).toBe(true);
  });

  it("submitting empty does not hand off at all", async () => {
    const user = userEvent.setup();
    render(<Subscribe />);
    await user.click(screen.getByRole("button", { name: /subscribe/i }));
    expect(assigned.length).toBe(0);
  });
});
