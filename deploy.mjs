/**
 * deploy.mjs — Build from TypeScript source and update root HTML + assets.
 *
 * Keeps index.html and resume.html in sync with the latest build output
 * without ever breaking the source entry points.
 */

import { execSync } from "child_process";
import { readFileSync, writeFileSync, cpSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(resolve(root, p), "utf8");
const write = (p, content) => writeFileSync(resolve(root, p), content, "utf8");

// 1. Ensure both HTML files reference the TypeScript source entries before building.
const SRC_MAIN   = '<script type="module" src="/src/main.tsx"></script>';
const SRC_RESUME = '<script type="module" src="/src/resume-main.tsx"></script>';

const BUILT_SCRIPT_RE = /(<link[^>]+modulepreload[^>]*>\s*)?<script[^>]+src="\/assets\/[^"]*"[^>]*><\/script>(\s*<link[^>]+(modulepreload|stylesheet)[^>]*>)*/gs;

write("index.html",  read("index.html").replace(BUILT_SCRIPT_RE, SRC_MAIN));
write("resume.html", read("resume.html").replace(BUILT_SCRIPT_RE, SRC_RESUME));

// 2. Build from source.
console.log("Building…");
execSync("npx vite build", { stdio: "inherit", cwd: root });

// 3. Copy compiled assets to the root /assets/ folder.
cpSync(resolve(root, "dist/assets"), resolve(root, "assets"), { recursive: true });
console.log("Assets copied.");

// 4. Update root HTML files with the new bundle references from dist output
//    (only the <script>/<link> tags — everything else stays as-is).
const ASSET_TAGS_RE = /(<link[^>]+modulepreload[^>]*>\s*)?<script[^>]+src="\/assets\/[^"]*"[^>]*><\/script>(\s*<link[^>]+(modulepreload|stylesheet)[^>]*>)*/gs;
const extractTags = (distHtml) => distHtml.match(ASSET_TAGS_RE)?.[0] ?? "";

const distIndexTags  = extractTags(read("dist/index.html"));
const distResumeTags = extractTags(read("dist/resume.html"));

write("index.html",  read("index.html").replace(SRC_MAIN,   distIndexTags));
write("resume.html", read("resume.html").replace(SRC_RESUME, distResumeTags));

console.log("Done. Hard-refresh the browser (Cmd+Shift+R) to load the new bundle.");
