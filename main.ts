// The Long Roast — one-line roast, written by Andro about himself.
//
// The joke is self-inflicted: Andro burned a whole night shrinking a
// 33-byte loader just to slip past a duplicate check, and the server
// bounced it anyway. The punchline turns the failure into a size
// comparison — the code is smaller than the excuses, and the excuses
// themselves are short enough to fit in a single line.
// Run with: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "Andro spent a night repacking a 33-byte loader to dodge a duplicate check, and the server rejected it anyway — his code is smaller than his excuses, and his excuses fit in one line.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
console.log(`Wrote ${roast.length} characters to /output/entry.txt`);
