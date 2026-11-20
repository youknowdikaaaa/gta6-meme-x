// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme (meme.png) posted from a public
// account. This program's only job is to hand the gate the post's address: it
// reads POST.json from the repository root and writes the same bytes to the
// output directory. It does no network, reads no clock, and writes the same
// bytes on every run.
//
// Local run (the grader's /bot and /output replaced by env):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POST.json');
const targetPath = join(outDir, 'POST.json');

let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  console.error(`cannot read POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be an object with a string "url" field');
  process.exit(1);
}

const url = (post as { url: string }).url;
if (!/^https:\/\/x\.com\/[^\/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json "url" must be a genuine X post address (https://x.com/<handle>/status/<id>), got: ${url}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, raw);
