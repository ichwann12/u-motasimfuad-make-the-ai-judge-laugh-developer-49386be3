// SPDX-License-Identifier: MIT
// Make the AI Judge Laugh: Developer Excuses
// Reads the single-line excuse from entry.txt (repo root) and writes it,
// exactly and nothing else, to <output dir>/entry.txt.
//
// Output dir: $MAKEFUN_OUTPUT_DIR, else $MAKEFUN_BOT_DIR/output, else /output.
// Stdlib only, no network, no wall clock.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(repoRoot, "entry.txt"), "utf8").replace(/\r?\n$/, "");

// The gate requires 1-200 characters of non-whitespace text; fail loudly
// rather than writing an invalid entry.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 characters, got ${line.length}`);
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  (process.env.MAKEFUN_BOT_DIR ? join(process.env.MAKEFUN_BOT_DIR, "output") : "/output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
