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

## Your action list (things only you can do)

**This week (~2 hours total)**

1. **GitHub Pages settings:** confirm custom domain = yamin.dev and tick **Enforce HTTPS** (http://yamin.dev currently serves unredirected and is what Google indexed).
2. **Google Search Console:** verify yamin.dev (paste the meta ID into `google_site_verification` in `_config.yml`), submit the sitemap, and use _URL inspection → Request indexing_ for `/`, `/cv/`, `/projects/`.
3. **GitHub profile:** create `dyamin/dyamin` with the ready-made README in `docs/github-profile-README.md`; pin MEGA, MEGA-Experiment, dyamin.github.io; add bio + yamin.dev link; enable "include private contributions."
4. **LinkedIn back-links:** set website field → yamin.dev; add the Nature paper + Times of Israel piece + site to _Featured_ (cards will now unfurl with the new og:image).
5. **Analytics:** create a GA4 property (or Cloudflare/Pirsch if you prefer privacy-light) and drop the ID into `analytics:` in `_config.yml` — without it the plan can't be measured.

**This month** 6. **Publish the flagship essay** (draft ready in `_drafts/`): edit to your voice, move to `_posts/` with a date, re-enable the blog nav page, then post a LinkedIn summary linking to it within 24h. 7. **MEGA repo polish (15 min):** fill the BibTeX TODO with the published citation, link the paper in the About field, add topics. Give MEGA-Experiment a README + license. 8. **Decide on X/@YaminEtAl:** revive as an English AI-engineering feed (then re-enable `x_username` in `_data/socials.yml`) — or leave it retired. Don't point the funnel at a dormant personal account. 9. **Create an ORCID** (free, 10 min) and add it to `_data/socials.yml` — strengthens the entity graph vs. the name collisions.

**This quarter — the compounding loop** 10. **Write monthly.** The reference class (simonwillison.net, eugeneyan.com, hamel.dev) is blog-centric. All three essays are now drafted in `_drafts/` (brains-remember, clinical-genomics lessons, no-report evals) — a quarter of publishing runway; LinkedIn/HN copy for each is in `docs/DISTRIBUTION_KIT.md`. 11. **Distribution loop per post:** yamin.dev first (canonical) → LinkedIn summary next day → the strongest 2–3 per year to Hacker News. 12. **Publish `memprobe`** — the showcase repo is BUILT and delivered as a tarball (working no-report memory-eval harness, 6 passing tests, CI, MIT, README linking your paper). Create `github.com/dyamin/memprobe`, extract, push, pin it first. Then add it to `_data/repositories.yml` and the static cards on `_pages/repositories.md`, and publish the companion essay (draft #3). Repo + essay + site all reinforce the same agent-memory positioning. 13. **One talk:** the MEGA→agent-memory story is a natural meetup/podcast pitch; the Talks & Media page now has a speaking CTA.

## 90-day success metrics

- `daniel yamin ai engineer` and `daniel yamin` → yamin.dev in top 3 (Search Console: track weekly)
- LinkedIn/Slack shares of yamin.dev unfurl with the branded card (works as of this update)
- CV PDF downloads ≥ dozens/month once analytics is live (recruiter interest proxy)
- 1 published flagship essay + ≥ 2 more in the pipeline; first HN submission
- GitHub profile no longer surfaces 2019 forks; pinned row tells the AI story

## Standing decisions log

| Decision                  | Choice                                                                  |
| ------------------------- | ----------------------------------------------------------------------- |
| Canonical public headline | "Senior AI Engineer & Data Scientist \| Always Building" (per LinkedIn) |
| Formal role title in CV   | Expert Data Scientist, Franklin by QIAGEN                               |
| CV data source            | `assets/json/resume.json` only (`_data/cv.yml` deleted)                 |
| Accent / brand color      | Indigo (#4f46e5 light / #818cf8 dark)                                   |
| X icon                    | Hidden until account is revived professionally                          |
| Blog                      | Infrastructure ready; publish only human-reviewed posts                 |
| llms.txt                  | Skipped deliberately — effort goes to schema + content instead          |
