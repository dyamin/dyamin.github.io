// Generate 1200×630 Open Graph cards for blog posts, in the same visual family
// as the site card (assets/img/og.png): dark indigo gradient, caps kicker,
// large title, gaze-trajectory motif, yamin.dev footer.
//
// Usage:
//   npm i -D playwright        # once (Chromium must be available; in sandboxes
//                              # set PLAYWRIGHT_BROWSERS_PATH or executablePath)
//   node scripts/generate-og-cards.mjs            # all cards defined below
//   node scripts/generate-og-cards.mjs <slug>...  # just the named ones
//
// Output: assets/img/og/<slug>.png — reference it from the post's front matter
// as `og_image: /assets/img/og/<slug>.png`. If a post's title changes during
// review, update it here and regenerate before publishing.

import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// slug must match the post's filename (without the date prefix).
const CARDS = [
  {
    slug: "brains-remember-agents-forget",
    kicker: "Essay · AI Engineering",
    title: "I measured memories people couldn't report. Now I build memory for AI agents.",
  },
  {
    slug: "llm-agents-clinical-genomics",
    kicker: "Essay · AI Engineering",
    title: "Lessons from shipping LLM agents where wrong answers matter",
  },
  {
    slug: "no-report-evals",
    kicker: "Essay · Evals",
    title: "No-report evals: testing agent memory without asking the model",
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const html = ({ kicker, title }) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    font-family: "DejaVu Sans", -apple-system, "Segoe UI", Roboto, sans-serif;
    background: linear-gradient(135deg, #17173f 0%, #1e1a4e 55%, #262060 100%);
    color: #ffffff; display: flex; flex-direction: column; justify-content: center;
    padding: 0 88px;
  }
  .kicker {
    color: #a5b4fc; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
    font-size: 26px; margin-bottom: 34px;
  }
  .title {
    font-weight: 800; line-height: 1.16; letter-spacing: -0.015em; max-width: 880px;
    font-size: ${title.length > 60 ? "58px" : "68px"};
  }
  .footer {
    position: absolute; left: 88px; bottom: 62px; display: flex; align-items: center;
    gap: 14px; font-size: 27px; color: #c7d2fe;
  }
  .footer .dot { width: 10px; height: 10px; border-radius: 50%; background: #818cf8; }
  .footer strong { color: #e0e7ff; font-weight: 700; }
  .bar { position: absolute; left: 0; right: 0; bottom: 0; height: 14px; background: #4f46e5; }
  svg.motif { position: absolute; right: -40px; top: 40px; opacity: 0.5; }
</style></head><body>
  <svg class="motif" width="560" height="560" viewBox="0 0 560 560" fill="none">
    <g stroke="#818cf8" stroke-width="2">
      <circle cx="80" cy="470" r="26" fill="none"/>
      <circle cx="80" cy="470" r="9" fill="#818cf8"/>
      ${[
        [140, 430],
        [195, 385],
        [255, 345],
        [310, 290],
        [360, 250],
        [415, 195],
        [462, 150],
      ]
        .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${5 + i * 0.6}" fill="#818cf8" stroke="none" opacity="${0.45 + i * 0.07}"/>`)
        .join("")}
      <rect x="440" y="90" width="120" height="96" rx="10" stroke-dasharray="7 7" fill="none"/>
    </g>
  </svg>
  <div class="kicker">${esc(kicker)}</div>
  <div class="title">${esc(title)}</div>
  <div class="footer"><span class="dot"></span> yamin.dev <span class="dot"></span> <strong>Daniel Yamin</strong></div>
  <div class="bar"></div>
</body></html>`;

const wanted = process.argv.slice(2);
const cards = wanted.length ? CARDS.filter((c) => wanted.includes(c.slug)) : CARDS;
if (!cards.length) {
  console.error(`No matching cards. Known slugs: ${CARDS.map((c) => c.slug).join(", ")}`);
  process.exit(1);
}

const browser = await chromium.launch(process.env.OG_CHROMIUM ? { executablePath: process.env.OG_CHROMIUM } : {});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const card of cards) {
  await page.setContent(html(card), { waitUntil: "load" });
  const out = path.join(repoRoot, "assets", "img", "og", `${card.slug}.png`);
  await page.screenshot({ path: out });
  console.log(`wrote ${path.relative(repoRoot, out)}`);
}
await browser.close();
