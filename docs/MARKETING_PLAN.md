# yamin.dev — personal marketing plan

_Prepared August 2026. Based on a multi-agent audit of the live site, repo, GitHub presence, LinkedIn profile, and the 2026 personal-site landscape for senior AI engineers._

## The one-line diagnosis

Your LinkedIn already says **"Senior AI Engineer & Data Scientist | LLMs & Agentic Systems | Always Building"** — but until this update, the site said "Senior Software Engineer," mentioned LLMs exactly once, linked its Google Scholar icon to _Albert Einstein's demo profile_, pointed every canonical URL at the wrong domain, and served a CV PDF that was ~18 months stale. The site marketed the 2021–2024 Daniel, not the 2026 one.

## Positioning (decided)

- **Public headline (everywhere):** `Senior AI Engineer & Data Scientist | Always Building`
- **Formal role title (inside CV entries):** `Expert Data Scientist, Franklin by QIAGEN`
- **The differentiator to own:** _"I studied how brains remember; now I build memory for AI agents."_ Agent memory is a hot, funded 2026 category — and you are a published episodic-memory researcher. No one else in the hiring pool has that bridge.
- **Name-collision defense:** Daniel Yamin**s** (Stanford NeuroAI) and Prof. Dan Yamin (TAU) sit near your name in search. Defense = consistent headline + JSON-LD `Person` with `sameAs` (now live: LinkedIn, GitHub, Scholar, OSF) + same photo everywhere + (recommended) an ORCID.

## What shipped in this update

**Foundation**

- Merged upstream al-folio v1.2 (theme now versioned gems; fixes dead repo-stats widgets, theme-switch flicker; build went 195s → ~3s)
- Canonical domain fixed: `url: https://yamin.dev` + `CNAME` — canonical tags, og:url, sitemap, robots.txt, RSS all now on yamin.dev
- Open Graph on + branded 1200×630 `og.png` (link shares now unfurl on LinkedIn/Slack/X); schema.org JSON-LD Person with `sameAs` graph; apple-touch-icon
- Meta description/keywords rewritten around AI engineering (was: "poker player, crossfit, jekyll")

**Content**

- About page rebuilt: LinkedIn-aligned headline, AI-first narrative, memory→agent-memory bridge section, experience timeline, honest open-source claims, clear CTAs (CV / email / LinkedIn)
- CV page: single source of truth (`assets/json/resume.json`), Expert Data Scientist role with six LLM/agentic bullets, GenAI skills group, Sipple added, all dates aligned with LinkedIn
- **New CV PDF** generated from the same data (A4, 2 pages, ATS-parseable text)
- Projects: 1 thesis card → 5 real pages (LLM/agentic clinical genomics, MEGA, DeFi risk, IoT security, DDoS detection) in 3 categories
- Media → "Talks & Media" with a speaking CTA; publications page fixed (broken thumbnail → custom MEGA illustration)
- Flagship essay drafted at `_drafts/brains-remember-agents-forget.md` — **review, edit, publish**

**Hygiene**

- Einstein-demo Scholar/InspireHEP links replaced with your real Scholar profile (`RnTYp-oAAAAJ`) / removed
- ~35 MB of theme demo assets deleted; profile photo 4.1 MB → 200 KB; all demo pages/posts/books/teachings removed
- Repo list curated to MEGA, MEGA-Experiment, dyamin.github.io (dropped the unmodified `go-okx` fork and 2-commit repos that undermined the "LLM tools" claim)
- README rewritten (was the upstream theme README); X icon removed until the account is revived (see decisions)

**Follow-up rounds (same day)**

- CI aligned with personal-site reality: prettier now green; upstream theme-maintainer workflows (style contract, template integration tests, rendercv, star history, README screenshots, Docker, releases) removed; `AGENTS.md`/`CLAUDE.md` rewritten so future agent sessions inherit these decisions
- Homepage news timeline with verified dates: paper published Aug 11 2025 (Crossref + PubMed PMID 40790348), QIAGEN acquisition of Genoox announced May 12 2025, bioRxiv preprint Aug 14 2024
- Custom indigo artwork on all five project cards
- Link shares upgraded to `summary_large_image` Twitter/X cards (one-line `_includes/metadata.liquid` override)
- Live production verified end-to-end: canonicals, og.png, cv.pdf, sitemap, robots, webp variants, repo-stats cards, news, artwork

**Polish round (Aug 16 2026) — "market without showing the need"**

- **Availability language removed everywhere:** the about page's "…or senior AI roles" and the site-wide footer's "…or interesting roles" are gone. The site now markets via proof-of-work only; recruiters don't need an invitation, and current colleagues get no tell. This is a standing decision (see log).
- Hero headline emphasized: the positioning line under the name is now large/semibold instead of the smallest text in the hero.
- **"Now" strip added to the homepage hero** (pulsing dot + "Building memprobe… / writing …" + "updated Aug 2026" stamp) — the freshness signal that backs the "Always Building" claim. Update it every 4–6 weeks; the stamp is the point.
- Projects page: single grid sorted by importance (genomics → MEGA → DeFi → IoT → DDoS); the three per-category rows looked sparse with one card alone per row. Re-categorize when each category has ≥2 entries (memprobe will help).
- CV page: "Download CV (PDF)" now also docked at the top next to the title — recruiters no longer scroll two pages to find it.
- Repositories page: the "Live stats from GitHub" section hides itself if none of the third-party widgets load (no more heading over blank space).
- Homepage theme headings sentence-cased ("News", "Selected publications") to match the custom sections.
- **Blog surfaces restored and staged:** `_pages/blog.md` is back with a publish checklist in its front matter; navbar slot 2 is reserved (`nav: false` until the first post ships); drafts now carry the same checklist pointer.

**Entity & distribution round (Aug 17 2026)**

- **Person entity graph enriched:** the JSON-LD is now a proper `@graph` — a rich `Person` node (`jobTitle`, `worksFor` Franklin by QIAGEN, `alumniOf` TAU + Open University, an 11-topic `knowsAbout` list, and `sameAs` moved onto the Person where disambiguation actually happens), a site-level `WebSite` node, and a `BlogPosting` node (with `datePublished` and author/publisher `@id` references) that activates automatically for posts. This is the "schema" half of the schema-over-llms.txt decision, and it feeds the answer engines recruiters now ask first.
- **Per-post OG cards:** `scripts/generate-og-cards.mjs` (Playwright, same visual family as `og.png`) generated branded 1200×630 cards for all three drafted essays; each draft now carries `og_image` front matter, so essay shares unfurl with the essay's own title, not the generic site card. Regenerating after a title change is step 4 of the publish checklist in `_pages/blog.md`.
- **Monthly freshness audit:** a scheduled Claude session (1st of each month) audits the live site + repo — Now-strip stamp age, news age, unpublished drafts, pending plumbing items (HTTPS, Search Console, analytics), GitHub profile/memprobe status — and reports only what's stale or pending. Read-only; it never commits. This exists because the news section once sat untouched for twelve months.

**Publishing round (Sep 6 2026) — first essay live**

- **Flagship essay published:** `_drafts/brains-remember-agents-forget.md` → `_posts/2026-09-06-brains-remember-agents-forget.md` (`/blog/2026/brains-remember-agents-forget/`). Light edits only: draft warnings removed, MEGA repo linked, employer named; title unchanged so the existing OG card still matches.
- **Blog surfaces switched on:** `_pages/blog.md` now `nav: true` (navbar slot 2); homepage `latest_posts` enabled; publish checklist rewritten for post #2 onward.
- **Freshness restored:** new `_news/` item for the essay (the timeline had sat at Aug 2025 for 13 months); "Now" strip text + stamp → Sep 2026.
- Still Daniel-only from the monthly audit: Enforce HTTPS (#1), Search Console (#2), GitHub profile README (#3), analytics ID (#5), memprobe repo (#16), and the LinkedIn summary for the essay (#10, copy in `docs/DISTRIBUTION_KIT.md` §2) within 24h of this going live.

## Your action list (things only you can do)

**This week (~2 hours total)**

1. **GitHub Pages settings:** confirm custom domain = yamin.dev and tick **Enforce HTTPS** (http://yamin.dev currently serves unredirected and is what Google indexed).
2. **Google Search Console:** verify yamin.dev (paste the meta ID into `google_site_verification` in `_config.yml`), submit the sitemap, and use _URL inspection → Request indexing_ for `/`, `/cv/`, `/projects/`.
3. **GitHub profile:** create `dyamin/dyamin` with the ready-made README in `docs/github-profile-README.md`; pin MEGA, MEGA-Experiment, dyamin.github.io; add bio + yamin.dev link; enable "include private contributions."
4. **LinkedIn back-links:** set website field → yamin.dev; add the Nature paper + Times of Israel piece + site to _Featured_ (cards will now unfurl with the new og:image).
5. **Analytics:** create a GA4 property (or Cloudflare/Pirsch if you prefer privacy-light) and drop the ID into `analytics:` in `_config.yml` — without it the plan can't be measured.
6. **Answer-engine audit (5 min, then quarterly):** ask ChatGPT, Claude, and Perplexity "Daniel Yamin AI engineer"; save the answers as the baseline. The schema/entity work should visibly change them — this is the modern "google yourself" metric.
7. **Google Scholar homepage (2 min):** set the profile's Homepage field to yamin.dev and make sure the photo matches the site's — Scholar ranks near the top for your name and should funnel here.
8. **Proof-strip numbers:** send 2–3 true, employer-safe quantities (teams advised, evals per release, the Chaos Labs "$Xb protected" figure…) to replace adjective claims in the homepage tiles — numbers survive recruiter skims better than adjectives.

**This month** 9. **Wikidata item (~20 min, after the ORCID):** you're a published Nature Portfolio author with national press coverage — create a Wikidata item with neutral, sourced facts linking your ORCID, Scholar ID, and yamin.dev. Strongest single move for knowledge-graph disambiguation vs. the Stanford Yamins. 10. **Publish the flagship essay** — _done Sep 6 2026_ (post, blog nav, news item, Now strip). Remaining: post the LinkedIn summary (`docs/DISTRIBUTION_KIT.md` §2) linking to it within 24h of the deploy. 11. **MEGA repo polish (15 min):** fill the BibTeX TODO with the published citation, link the paper in the About field, add topics. Give MEGA-Experiment a README + license. 12. **Decide on X/@YaminEtAl:** revive as an English AI-engineering feed (then re-enable `x_username` in `_data/socials.yml`) — or leave it retired. Don't point the funnel at a dormant personal account. 13. **Create an ORCID** (free, 10 min) and add it to `_data/socials.yml` — strengthens the entity graph vs. the name collisions (do this before the Wikidata item).

**This quarter — the compounding loop** 14. **Write monthly.** The reference class (simonwillison.net, eugeneyan.com, hamel.dev) is blog-centric. All three essays are now drafted in `_drafts/` (brains-remember, clinical-genomics lessons, no-report evals) — a quarter of publishing runway; LinkedIn/HN copy for each is in `docs/DISTRIBUTION_KIT.md`. 15. **Distribution loop per post:** yamin.dev first (canonical) → LinkedIn summary next day → the strongest 2–3 per year to Hacker News → a week later, republish on dev.to with `rel=canonical` back to yamin.dev (reach without SEO cannibalization). 16. **Publish `memprobe`** — the showcase repo is BUILT and delivered as a tarball (working no-report memory-eval harness, 6 passing tests, CI, MIT, README linking your paper). Create `github.com/dyamin/memprobe`, extract, push, pin it first. Launch it as a **Show HN** (repos with a working demo outperform essay links; the companion essay goes in your first comment). Then add it to `_data/repositories.yml` and the static cards on `_pages/repositories.md`, and publish the companion essay (draft #3). Repo + essay + site all reinforce the same agent-memory positioning. 17. **One talk:** the MEGA→agent-memory story is a natural meetup/podcast pitch; the Talks & Media page now has a speaking CTA.

## 90-day success metrics

- `daniel yamin ai engineer` and `daniel yamin` → yamin.dev in top 3 (Search Console: track weekly)
- LinkedIn/Slack shares of yamin.dev unfurl with the branded card (works as of this update)
- CV PDF downloads ≥ dozens/month once analytics is live (recruiter interest proxy)
- 1 published flagship essay + ≥ 2 more in the pipeline; first HN submission
- GitHub profile no longer surfaces 2019 forks; pinned row tells the AI story

## Standing decisions log

| Decision                  | Choice                                                                      |
| ------------------------- | --------------------------------------------------------------------------- |
| Canonical public headline | "Senior AI Engineer & Data Scientist \| Always Building" (per LinkedIn)     |
| Formal role title in CV   | Expert Data Scientist, Franklin by QIAGEN                                   |
| CV data source            | `assets/json/resume.json` only (`_data/cv.yml` deleted)                     |
| Accent / brand color      | Indigo (#4f46e5 light / #818cf8 dark)                                       |
| X icon                    | Hidden until account is revived professionally                              |
| Blog                      | Infrastructure ready; publish only human-reviewed posts                     |
| llms.txt                  | Skipped deliberately — effort goes to schema + content instead              |
| Availability language     | None, anywhere — no "roles", "open to", or hiring hints; proof-of-work only |
| Freshness signal          | Homepage "Now" strip — update text + stamp every 4–6 weeks                  |
