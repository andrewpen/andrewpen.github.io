import { useState, type FormEvent } from "react";
import { Button, FormField, TextField } from "@a3kds/design-system";
import { contact } from "../content";
import { BLUE, NAVY } from "../boldPalette";

// There's no newsletter/ESP backend behind this yet (nothing was specified),
// so submitting opens a pre-filled email to Andrew instead of faking a
// "subscribed" state that wouldn't actually add anyone to a list.
//
// The wording matters as much as the behaviour (P06-D3). Nothing here can know
// whether the handoff worked: window.location.href = mailto: is silent when no
// handler is registered, and there is no event to tell us. So the message says
// what was ATTEMPTED and names the fallback, rather than claiming an email
// client opened — which would be a false success by a quieter route.
export function Subscribe() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // preventDefault keeps this off the network: there is no endpoint, and a
    // native submit would navigate to the page's own URL with the address in
    // the query string.
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const body = encodeURIComponent(`Please add me to the essay list: ${email}`);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Subscribe to the essays")}&body=${body}`;
    setMessage(
      `Asked your email client to open a message to ${contact.email}. ` +
        "If nothing happened, your browser has no email app set up — write to that address directly."
    );
  }

  return (
    <section id="subscribe" style={{ background: BLUE, color: "#ffffff", padding: "112px 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontSize: "clamp(2rem,4.4vw,3.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.02, margin: "0 0 16px" }}>Get the essays by email.</h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, margin: 0, maxWidth: "48ch" }}>
            Roughly twice a month. No course, no cohort, no newsletter about the newsletter. Unsubscribe in one click.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
            <div style={{ flex: "1 1 260px" }} className="ap-subscribe-field">
              <FormField label="Email address" htmlFor="subscribe-email">
                <TextField
                  id="subscribe-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </FormField>
            </div>
            {/* An action that DOES something here, so a Button, not a link. */}
            <Button type="submit" className="ap-subscribe-cta">Subscribe</Button>
          </form>
          <p aria-live="polite" style={{ fontSize: "0.9375rem", margin: "14px 0 0", minHeight: "1.5em", color: "#ffffff" }}>{message}</p>
        </div>
      </div>
    </section>
  );
}
