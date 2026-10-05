# WAVY — Society Teaser Site

Prelaunch teaser site for **$WAVY**, the community utility token (undiluted private marketplace access + consent-based life-operations).

- **Live:** https://wavysociety.pages.dev
- **Theme:** nautical Society — white linen, navy text, salmon accents, deep-navy charters; Cormorant Garamond + Jost
- **Stack:** static HTML/CSS/vanilla JS. No build step, no backend.

## Deploy

Cloudflare Pages via wrangler from this directory:

```bash
export PATH=~/workspace/.npm-global/bin:$PATH
python3 ~/workspace/skills/cloudflare/bin/pages_wrangler_deploy.py --project wavysociety --dir .
```

## Structure

- `index.html` — the whole page: hero, prelaunch journey, harbor pass, ship's store, founder's wall, checklist, footer
- `status.js` — single config: component status chips, links
- `flow.html` / `token.html` / `trust.html` — Capital Flow, Token Status, Trust Center
- `coin.webp` — the permanent launch icon (ivory sculpted wave-sphere)

## Notes

- Presale/checkout config (`PRESALE_CONFIG`, `CHECKOUT`, `CRYPTO`) lives in `index.html` — empty endpoints render as reserve-only; paste real links to go live.
- Token is not launched yet. Nothing here promises dollar values — pending recognition is framed in token amounts only.
