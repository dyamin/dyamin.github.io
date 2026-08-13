---
layout: post
title: "I measured memories people couldn't report. Now I build memory for AI agents."
description: "What eye-tracking research on human episodic memory taught me about building — and evaluating — memory for agentic systems."
tags: [llm, agents, memory, neuroscience]
categories: [ai-engineering]
# DRAFT — review, edit to taste, then move to _posts/ with a dated filename
# (e.g. _posts/2026-09-01-brains-remember-agents-forget.md) to publish.
---

**Draft for Daniel's review — edit voice and specifics before publishing.**

In my MSc at Tel Aviv University I spent two and a half years on a strange problem: how do you detect a memory the person can't tell you about?

Our answer — published in [*Communications Psychology*](https://www.nature.com/articles/s44271-025-00305-7) — was to read it from the eyes. When people re-watch a movie clip, their gaze drifts toward the location of a salient event *seconds before it appears*, but only if they remember it. We called the paradigm MEGA (Memory Episode Gaze Anticipation), and a classifier over single-trial gaze features could tell whether a given viewing carried a memory of the event. The eeriest result: anticipatory gaze sometimes revealed memory **even when the person said they didn't remember**.

Today I build LLM applications and agentic workflows in clinical genomics. And I keep noticing that the questions my day job asks about agent memory are the questions my research asked about human memory.

## 1. Recall is not recognition, and both are not reports

Cognitive science has spent a century carving memory into kinds — recall vs. recognition, episodic vs. semantic vs. procedural — because each kind fails differently and is measured differently.

Agent-memory design keeps re-discovering this taxonomy. A vector store over past conversations is *recognition* memory: it can tell "have I seen something like this?" but not "what happened last Tuesday, in order?" An append-only event log is *episodic*; distilled facts in a system prompt are *semantic*; a fine-tune is closer to *procedural*. When an agent "forgets," the first diagnostic question should be the neuropsychologist's: **which memory system failed?** Retrieval? Encoding? Consolidation? Each has a different fix — better embeddings won't help if the information was never written down.

## 2. The report problem: your agent's self-assessment is a verbal report

The reason MEGA matters clinically is that verbal reports are unreliable — patients with brain injuries, infants, and sometimes ordinary adults can't accurately report what they remember.

LLMs have exactly this pathology. Ask a model whether it remembers something from its context and you get a *verbal report* — fluent, confident, and only loosely coupled to whether the information actually influenced its behavior. The lesson from no-report paradigms transfers directly: **don't evaluate memory by asking; evaluate it by observing behavior**. In our lab that meant gaze position over time. In an agent harness it means behavioral probes: does the agent's *choice* change when the remembered fact should change it? That's an eval you can run per release — a memory eval suite that never asks the model "do you remember?"

## 3. Anticipation is the signature of memory

The deepest idea in MEGA is that memory shows up as *anticipation*: the eyes go where the event will be. Memory isn't a lookup table — it's a predictive resource that shapes behavior before the moment of need.

Good agent memory should earn its storage the same way. The test of a memory system isn't retrieval benchmarks; it's whether the agent *acts earlier and better* because of what it knows — pre-fetching the right context, flagging the anomaly before the user does, not re-asking the question it asked last week. If a memory never changes downstream behavior, it's not memory; it's a log.

## What I'd steal from the lab, as an engineering checklist

1. **Name the memory system** you're building (episodic log, semantic store, procedural skill) and evaluate each one separately.
2. **No-report evals**: measure memory by behavioral change, not by the model's claims about itself.
3. **Score anticipation**: reward the system for using memory *before* being asked.
4. **Expect (and design for) forgetting**: consolidation — deciding what *not* to keep — is a feature the brain spends a third of your life on.

I studied how brains remember. The more agents I ship, the more convinced I am that the field's memory problems were solved once already — in wetware — and that the eval methods cognitive science invented for subjects who can't be trusted to self-report are exactly the right tools for models that can't either.

*— Daniel*
