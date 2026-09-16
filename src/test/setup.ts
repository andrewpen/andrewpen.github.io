// jest-dom matchers (toBeInTheDocument, toHaveAttribute, …).
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Testing Library registers its own afterEach cleanup ONLY when vitest runs
// with globals enabled. This config keeps globals off — an explicit import is
// easier to follow than an injected global — so cleanup has to be wired here.
//
// Without it, every render stays in document.body and leaks into the next
// test: queries start finding several matches, and any assertion that counts
// elements silently measures the sum of every test that ran before it.
afterEach(cleanup);
