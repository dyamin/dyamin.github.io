# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

`AGENTS.md` (imported above) is the authoritative entry point: this is **Daniel Yamin's personal site** on the al-folio v1.x gem-based starter — starter-repo rules (style contract, "no local `_layouts`/`_sass`") do not apply here. The self-marketing strategy, decisions log, and Daniel's action list live in [`docs/MARKETING_PLAN.md`](docs/MARKETING_PLAN.md); a ready-to-paste GitHub profile README is in [`docs/github-profile-README.md`](docs/github-profile-README.md).

## Quick facts

- Ruby is under rbenv here: `export PATH="/opt/rbenv/versions/3.3.6/bin:$PATH"` and a UTF-8 locale (`LANG=C.UTF-8 LC_ALL=C.UTF-8`) are required for `bundle exec jekyll build` in sandboxes.
- The CV PDF (`assets/pdf/cv.pdf`) is generated from `assets/json/resume.json` via a Chromium print script — keep both in sync when the resume changes.
- The OG card is `assets/img/og.png` (1200×630); regenerate it if the headline changes.
- Upstream al-folio docs live in `docs/` (CUSTOMIZE, FAQ, INSTALL) — useful reference, but where they describe the _template repo's_ CI gates, they don't apply here.
