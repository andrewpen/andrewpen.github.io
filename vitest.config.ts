import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Test config for the site, kept separate from vite.config.ts so the dev and
// build pipeline is untouched by test tooling.
//
// WHAT THIS CAN AND CANNOT SEE. jsdom does not do layout: it has no real box
// model, so it cannot tell you that a card overflows its track or that a
// button renders as a pill. Those questions belong to the browser gate in the
// design-system repo, which drives real Chrome. These tests cover behaviour
// and structure — what renders, what links where, what is interactive — and
// the two are complements, not substitutes. A green test run here is not
// evidence about appearance.
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": resolve(__dirname, "src") } },
  test: {
    environment: "jsdom",
    globals: false,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
