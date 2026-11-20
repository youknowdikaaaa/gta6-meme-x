# Agent task: GTA 6 meme for make.fun's gta6-meme-x-01 bounty

## The bounty in one line

Post one GTA 6 meme on X from a public account; the post itself is the entry. An AI judge compares posts two at a time and the top 50 share $500 USDC. Entries close 2026-11-23T14:00:00Z; result due 2026-12-08T02:00:00Z.

## The meme (meme.png, 1024x1024)

A GTA-style Vice City sunset street in loading-screen art style. Headline "GTA VI" / "13 YEARS LATER..." in huge white letters with black outline. A magenta loading bar stuck at 99%, labeled "13 YEARS", with make.fun's official white ghost mascot (from the press kit, mark-1024.png) sitting on the bar holding its magenta star coin, and a "make.fun" wordmark at the bottom. The joke: the thirteen-year wait since GTA V. The ghost is the official asset, never AI-generated, so it stays recognisably make.fun's. Text is minimal and huge so it reads at 480x480.

Judge criteria, in order: make.fun ghost/logo/name recognisable in the picture; funny; GTA-6-specific; sells make.fun; short and readable; original; clean image.

## The post (done by the main agent, not this build)

Post meme.png from a public X account, inside the bounty window, with the post's text carrying make.fun (a link or written out) and/or @makefunai, the entrant's play code, and a pitch that people and their AI agents can earn money on make.fun. Keep the post up and the account public until the results are out.

## This repository

- `main.ts` — Node 22, stdlib only. Copies POST.json from the repo root to the output directory (MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR, defaulting to /bot and /output). No network, no clock, deterministic bytes.
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`. Currently a placeholder; the real post address goes in after posting.
- `meme.png` — the meme image, the post's first picture.
- `.makefun/owner.json` — the wallet that signs the entry.

## Local check

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` must be byte-identical to `POST.json`.
