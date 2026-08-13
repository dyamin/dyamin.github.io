# Agent Guidelines for yamin.dev

**This is Daniel Yamin's personal website** — a site built on the al-folio v1.x starter (theme runtime lives in versioned `al_*` gems), _not_ the al-folio template repo itself. Rules written for the upstream starter (thin-starter style contract, "no `_layouts`/`_sass` here") do **not** apply: a user site may legally shadow gem-owned files.

## Ground rules

- **Positioning is decided** (see [`docs/MARKETING_PLAN.md`](docs/MARKETING_PLAN.md)): public headline "Senior AI Engineer & Data Scientist | Always Building"; formal role title "Expert Data Scientist, Franklin by QIAGEN" inside CV entries. Keep every surface (about, CV, meta tags, OG image, PDF) consistent with it.
- **CV single source of truth:** `assets/json/resume.json`. The `/cv/` page renders it (`cv_format: jsonresume`); regenerate `assets/pdf/cv.pdf` from the same data when it changes. There is no `_data/cv.yml` — do not reintroduce it.
- **Local theme overrides are intentional** and tracked in `.al-folio-overrides.yml`: `_layouts/cv.liquid` (accessible CV download button), `_sass/_variables.scss` + `_sass/_themes.scss` (indigo brand accent + contrast fixes), `_sass/_components.scss` (loads `_sass/_site-custom.scss`). After editing any of these, run `bundle exec al-folio upgrade overrides accept <path>`.
- **Blog policy:** publish only human-reviewed posts. Drafts live in `_drafts/` and must be moved to `_posts/` by Daniel (or with his explicit approval), never auto-published.
- **Never** re-add the al-folio demo content (Einstein pages, demo posts/books/teachings, `inspirehep_id: 1010907`, `scholar_userid: qc6CJjYAAAAJ` — those are the template's Albert Einstein IDs; Daniel's real Scholar ID is `RnTYp-oAAAAJ`).

## Validated local commands

```bash
bundle install
JEKYLL_ENV=production bundle exec jekyll build   # ~3s; needs a UTF-8 locale (LANG=C.UTF-8)
bundle exec jekyll serve                          # http://localhost:4000/
npm ci && npm run lint:prettier                   # npx prettier . --write to fix
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
```

## CI (`.github/workflows/`)

`deploy.yml` builds and publishes to GitHub Pages on every push to `master` (live within ~2 minutes at https://yamin.dev). `prettier.yml` gates formatting. `update-tocs.yml` auto-commits TOC updates to Markdown on master. `broken-links-site.yml` checks the live site after deploy. Upstream _theme-maintainer_ workflows (style contract, template integration tests, rendercv, star history, README screenshots, Docker images, releases) were deliberately removed — don't restore them.

## Deploy

Merging/pushing to `master` deploys to production. Verify with a local production build first; the site serves at the repo root (no baseurl).
