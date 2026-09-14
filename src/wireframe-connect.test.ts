import { describe, it, expect, vi } from "vitest";
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
// @ts-expect-error — plain JS module shipped beside the static wireframe
import { renderConnected, connect, loadConnections } from "../wireframe/connect.js";

// P05-A02 / D1. These live HERE, in the repository that owns the wireframe,
// because the design system's gate cannot see this checkout — an earlier
// version of this test hard-coded an absolute path to it, which failed in CI
// for exactly that reason.
//
// LIMIT: jsdom has no layout and this is not a browser. It tests what the
// connection RENDERS and what it refuses to render. The real-browser
// verification is recorded as evidence in the convergence ledger.

const record = {
  id: "writing-teaser", identity: "CMP-11", packageExport: false, ownedBy: "website",
  dependsOn: [{ kind: "component", id: "LinkButton", role: "The action." }],
  localExceptions: [{ what: "The decorative word", why: "Editorial art." }],
};
const source = { package: "@a3kds/design-system", version: "0.1.0-alpha.4", integrity: "abc123" };

describe("the wireframe's connection to the shared record", () => {
  it("shows the identity, ownership and provenance", () => {
    const html = renderConnected(record, source);
    expect(html).toContain("CMP-11");
    expect(html).toContain("not installable");
    expect(html).toContain("owned by website");
    expect(html).toContain("@a3kds/design-system@0.1.0-alpha.4");
  });

  it("never renders a website-local composition as a package export", () => {
    expect(renderConnected(record, source)).not.toContain("package export");
    expect(renderConnected({ ...record, packageExport: true }, source)).toContain("package export");
  });

  it("escapes record content, since it is rendered as HTML", () => {
    const html = renderConnected({ ...record, ownedBy: '<img src=x onerror=alert(1)>' }, source);
    expect(html).not.toContain("<img");
    expect(html).toContain("&lt;img");
  });

  it("leaves the unavailable state standing when the composition is absent", () => {
    document.body.innerHTML = `<div class="anno-connected" data-composition="writing-teaser">
      <p class="anno-unavailable">Shared record unavailable — run node scripts/sync-connections.mjs</p></div>`;
    const result = connect(document, { compositions: [], source });
    expect(result.filled).toBe(0);
    expect(document.body.textContent).toMatch(/unavailable/i);
    expect(document.body.textContent).not.toMatch(/CMP-11/);
  });

  it("fills the slot when the record IS there", () => {
    document.body.innerHTML = `<div class="anno-connected" data-composition="writing-teaser">
      <p class="anno-unavailable">Shared record unavailable</p></div>`;
    const result = connect(document, { compositions: [record], source });
    expect(result.filled).toBe(1);
    expect(document.body.textContent).toMatch(/CMP-11/);
  });

  it("treats a failed or missing fetch as unavailable, not as an error to paper over", async () => {
    expect(await loadConnections(vi.fn().mockRejectedValue(new Error("offline")))).toBeNull();
    expect(await loadConnections(vi.fn().mockResolvedValue({ ok: false }))).toBeNull();
  });
});

/**
 * P05-A04: the generated record must not churn.
 *
 * syncedAt was a fresh timestamp on every run, so `npm run build` — which
 * syncs first — rewrote the file every time and left the working tree dirty.
 * A committed generated artifact whose diff is never empty cannot answer the
 * only question its diff exists to answer: did the record change?
 */
describe("sync-connections", () => {
  const root = resolve(__dirname, "..");
  const out = resolve(root, "wireframe/connections.json");
  const sync = () =>
    execFileSync("node", ["scripts/sync-connections.mjs"], { cwd: root, encoding: "utf8" });

  it("leaves the file byte-identical when the package has not changed", () => {
    sync();
    const first = readFileSync(out);
    sync();
    expect(readFileSync(out).equals(first)).toBe(true);
  });

  it("reports that it changed nothing, rather than implying a fresh sync", () => {
    sync();
    expect(sync()).toMatch(/unchanged/);
  });

  it("still rewrites when the installed record actually changes", () => {
    const src = resolve(root, "node_modules/@a3kds/design-system/docs/compositions.json");
    const backup = readFileSync(src);
    // connections.json is COMMITTED. A test that mutates the installed package
    // and re-syncs leaves a real file rewritten, so the suite dirtied the tree
    // it was testing. Restore the artifact itself, not just the input.
    const committed = readFileSync(out);
    try {
      sync();
      const before = readFileSync(out, "utf8");
      const doc = JSON.parse(backup.toString());
      doc.compositions[0].description = "A different description.";
      writeFileSync(src, JSON.stringify(doc, null, 2));

      const log = sync();
      const after = readFileSync(out, "utf8");
      expect(after).not.toBe(before);
      expect(log).not.toMatch(/unchanged/);
      expect(JSON.parse(after).syncedAt).not.toBe(JSON.parse(before).syncedAt);
    } finally {
      writeFileSync(src, backup);
      writeFileSync(out, committed);
    }
  });
});
