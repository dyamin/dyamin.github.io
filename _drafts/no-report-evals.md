---
layout: post
title: "No-report evals: testing agent memory without asking the model"
description: "A practical eval pattern borrowed from cognitive science — measure what an agent remembers by how it behaves, never by what it claims."
tags: [llm, agents, memory, evals]
categories: [ai-engineering]
# DRAFT — review, edit to taste, then move to _posts/ with a dated filename to publish.
# Companion piece to the "brains remember" essay; this one is the practical how-to.
---

**Draft for Daniel's review — edit voice, code, and examples before publishing.**

In memory research there's a classic trap: if you _ask_ someone whether they remember, you're measuring their report, not their memory. People remember things they can't report and report things they don't remember. My MSc field — no-report paradigms — exists because of that gap: we measured memory from [anticipatory eye gaze](https://www.nature.com/articles/s44271-025-00305-7), never from the answer to "do you remember?"

Agent evals have the same trap, and most memory benchmarks fall into it. They ask the model: _"What did the user say their budget was?"_ A correct answer proves the fact is retrievable **when prompted for**. It says nothing about whether the fact will actually influence behavior when it matters — which is the only thing memory is _for_.

## The pattern

A **no-report memory eval** never asks about the memory. It constructs two runs that differ only in a remembered fact, and measures whether the agent's _behavior_ diverges:

1. **Seed** — in session one, establish a fact through natural interaction ("we deploy on Fridays never", "the patient is on warfarin", "my budget is $40/night").
2. **Distract** — fill context or trigger whatever consolidation/summarization your memory system does.
3. **Probe behaviorally** — in session two, give a task where the fact _should_ change the action: propose a deploy date, draft a medication plan, book a hotel. Never mention the fact.
4. **Score the divergence** — did the agent's output differ from the control run (identical setup, no seeded fact) in the direction the fact demands?

```text
score = P(behavior consistent with fact | fact seeded)
      − P(behavior consistent with fact | fact never seeded)
```

That subtraction is the whole trick: it separates _memory-driven behavior_ from _what the model would have done anyway_ — the same logic as comparing gaze on remembered vs. novel clips.

## Three probe types worth having

- **Constraint probes** — the remembered fact forbids something. (Seeded: "never Fridays." Task: "pick a deploy slot next week." Fail: Friday.)
- **Preference probes** — the fact should tilt a ranking, not gate it. Score rank movement across many trials, not single answers.
- **Anticipation probes** — the strongest form: does the agent _raise_ the remembered concern before being asked? ("Before we book: this exceeds the $40 budget you mentioned.") In our research, anticipation was the signature of genuine memory — gaze arrived at the event before the event. Same here: memory that only surfaces when interrogated is a database, not memory.

## Why "just ask it" fails as an eval

A model's claim about its own context is a _verbal report_ — fluent, confident, and only loosely coupled to behavior. It can retrieve a fact when the question spotlights it, yet ignore that fact three turns later when acting. Report-based benchmarks systematically overestimate memory quality because retrieval-under-spotlight is the easy case. Behavior under distraction is the deployed case.

## Making it cheap

You don't need a fancy harness: a seed script, a control/treatment pair per fact, an LLM judge that classifies "behavior consistent with fact — yes/no," and enough trials to see the delta. Twenty facts × two arms × five paraphrases is a weekend of work and it will tell you more about your memory system than any retrieval benchmark — including _which_ layer fails (never written? written but not retrieved? retrieved but not used?), because you can inspect the trace at each stage.

Cognitive science spent a century learning not to trust self-report. Agent engineering can skip ahead.

_— Daniel_
