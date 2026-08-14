# Distribution kit

Ready-to-edit copy for the distribution loop (site → LinkedIn → HN). Everything here is a **draft in your voice — edit before posting**. Convention: always link yamin.dev with UTM tags so analytics (once wired) can attribute traffic, e.g. `https://yamin.dev/?utm_source=linkedin&utm_medium=social&utm_campaign=relaunch`.

---

## 1. Site relaunch — LinkedIn post (use this week, after the GitHub profile + Featured section are set)

> I rebuilt my personal site: **yamin.dev**
>
> It now says clearly what I do: I build LLM-powered applications and agentic workflows for clinical genomics at Franklin by QIAGEN — on top of a decade of production engineering (Microsoft, Chaos Labs, Allot) and an MSc in computational neuroscience.
>
> The part I care most about: the bridge between the two. My research measured human memory from anticipatory eye gaze — no verbal report needed (Communications Psychology, Nature Portfolio, 2025). Building AI agents raises the same question in production form: what should a system remember, and how do you _prove_ it remembered?
>
> CV, projects, and the research story are all there. If you're working on LLM systems, agent memory, or AI in genomics — my inbox is open.
>
> https://yamin.dev/?utm_source=linkedin&utm_medium=social&utm_campaign=relaunch

## 2. Essay #1 ("brains remember") — LinkedIn summary (post within 24h of publishing)

> Strange fact from my MSc: people's eyes reveal memories they can't verbally report. Their gaze drifts to where the remembered event will appear — seconds early — even while they say "I don't remember."
>
> I spent 2.5 years measuring that (published in Communications Psychology). Now I build memory for AI agents, and the parallel keeps hitting me: an LLM's claim about what it remembers is a _verbal report_ — fluent, confident, and loosely coupled to behavior.
>
> So I wrote up what agent-memory engineering can steal from cognitive science: memory taxonomies as debugging tools, no-report evals, and anticipation as the true signature of memory.
>
> [link with ?utm_source=linkedin&utm_medium=social&utm_campaign=essay-1]

**HN submission** (only if you feel the essay is genuinely strong; plain first-person title): `I measured memories people couldn't report. Now I build memory for AI agents`

## 3. Essay #2 ("lessons from clinical genomics") — LinkedIn summary

> In clinical genomics, a hallucination isn't a bad demo — it's a wrong signal about a patient's variant.
>
> Shipping LLM applications in that environment taught me lessons no framework tutorial covers: the eval suite is the product, structure beats eloquence, agents earn their complexity only at the seams, and the abstention path ("I don't know") deserves as much design as the happy path.
>
> [link with ?utm_source=linkedin&utm_medium=social&utm_campaign=essay-2]

## 4. Essay #3 ("no-report evals") — LinkedIn summary

> Cognitive science spent a century learning not to trust self-report. Most agent-memory benchmarks haven't learned it yet — they _ask the model_ what it remembers.
>
> A no-report eval never asks. Seed a fact, distract, then give a task where the fact should change behavior — and score the divergence against a control run. Same logic as measuring memory from eye movements instead of questionnaires (which is what my MSc did).
>
> Wrote up the pattern with three probe types you can build in a weekend: [link with ?utm_source=linkedin&utm_medium=social&utm_campaign=essay-3]

---

## Publishing a post (mechanics)

1. Edit the draft in `_drafts/`, then move it to `_posts/` with a dated filename, e.g. `_posts/2026-09-01-brains-remember-agents-forget.md`, and delete the draft-warning lines.
2. Re-enable the blog page — create `_pages/blog.md`:

   ```markdown
   ---
   layout: default
   permalink: /blog/
   title: Writing
   nav: true
   nav_order: 3
   pagination:
     enabled: true
     collection: posts
     permalink: /page/:num/
     per_page: 10
     sort_field: date
     sort_reverse: true
   ---
   ```

   (Then shift `nav_order` of the later pages by one, or keep Writing at another position you prefer.)

3. Push to `master` → live in ~2 minutes. Verify the post's OG card with LinkedIn's Post Inspector before sharing.
4. LinkedIn summary within 24h (copy above); HN only for the strongest pieces, morning US time, no editorializing in the title.

## Cadence

One substantive post per month is enough — the reference class (simonwillison.net, eugeneyan.com, hamel.dev) wins on consistency, not frequency. Three drafts are already in `_drafts/`; that's a quarter of runway.
