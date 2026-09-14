import { useState, type FormEvent } from "react";
import { contact } from "../content";
import { BLUE, NAVY } from "../boldPalette";

// There's no newsletter/ESP backend behind this yet (nothing was specified),
// so submitting opens a pre-filled email to Andrew instead of faking a
// "subscribed" state that wouldn't actually add anyone to a list.
export function Subscribe() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const body = encodeURIComponent(`Please add me to the essay list: ${email}`);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Subscribe to the essays")}&body=${body}`;
    setMessage("Opening your email client to send the request.");
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
            <div style={{ flex: "1 1 260px" }}>
              <label htmlFor="subscribe-email" style={{ display: "block", fontFamily: "var(--ap-font-mono)", fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10, color: "#ffffff" }}>
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                style={{ width: "100%", boxSizing: "border-box", padding: "14px 18px", borderRadius: 16, border: "1px solid #ffffff", background: "#ffffff", color: "#1f2e3d", fontFamily: "inherit", fontSize: "1rem" }}
              />
            </div>
            <button type="submit" style={{ padding: "15px 30px", borderRadius: 16, border: "none", background: NAVY, color: "#ffffff", fontFamily: "inherit", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}>
              Subscribe
            </button>
          </form>
          <p aria-live="polite" style={{ fontSize: "0.9375rem", margin: "14px 0 0", minHeight: "1.5em", color: "#ffffff" }}>{message}</p>
        </div>
      </div>
    </section>
  );
}
