---
layout: post
title: "Lessons from shipping LLM agents where wrong answers matter"
description: "What building LLM applications and agentic workflows for clinical genomics taught me about evals, trust, and knowing when not to use a model."
tags: [llm, agents, evals, genomics]
categories: [ai-engineering]
og_image: /assets/img/og/llm-agents-clinical-genomics.png
# DRAFT — review, edit to taste, then move to _posts/ with a dated filename to publish.
# Deliberately written from public facts about the role; add or remove specifics
# according to what Franklin/QIAGEN is comfortable sharing.
# After moving: follow the PUBLISH CHECKLIST in _pages/blog.md (enable blog nav,
# homepage latest_posts, news item). LinkedIn/HN copy: docs/DISTRIBUTION_KIT.md.
---

**Draft for Daniel's review — edit voice and specifics before publishing.**

I build LLM applications and agentic workflows for clinical genomics. It is a wonderful and unforgiving place to do AI engineering: the source material is dense scientific prose, the ontology is enormous, and a hallucination isn't a bad demo — it's a wrong signal about a patient's variant. Here is what shipping in that environment has taught me, none of which I learned from a framework tutorial.

## 1. The eval suite is the product

In a domain with clinical consequences, the model is a component; the **evaluation harness is the asset**. Prompts change, models get swapped, retrieval corpora grow — the only thing that persists is the battery of expert-curated cases that decides whether any of those changes ship. We treat evals the way other teams treat schema migrations: versioned, reviewed, and blocking.

The corollary: build the eval suite _before_ the feature is good. The first version of any LLM feature is a hypothesis; the eval suite is the experiment design. If you can't state what "correct" looks like against ground truth, you're not ready to prototype — you're ready to go collect ground truth.

## 2. Structure beats eloquence

Most of the value we extract from LLMs isn't prose generation — it's **turning unstructured scientific text into structured, checkable claims**. A model that outputs "this paper reports a pathogenic classification for variant X in gene Y, based on functional evidence" as typed fields is auditable; the same content as a fluent paragraph is not. Constrained outputs, enumerated vocabularies, and explicit "not found" states convert an eloquence machine into a data pipeline you can test.

## 3. Agentic workflows earn their complexity only at the seams

The wins from multi-step agents haven't come from letting a model "think longer." They come at the _seams_ — where a task genuinely needs to consult a tool, cross-reference a database, or decide that the literature is silent on a question. If a workflow can be a deterministic pipeline with one LLM step, it should be. The agentic version has to buy you something specific: dynamic tool choice, recovery from dead ends, or triage that would otherwise need a human.

## 4. Design the abstention path first

The most important output class in a clinical setting is **"I don't know."** Models don't abstain naturally; they need engineered off-ramps — confidence thresholds, retrieval-empty detection, disagreement between independent passes — and the product needs UX for uncertainty that doesn't erode trust. We spend real design effort on the abstention path, because a system that gracefully declines earns the right to answer.

## 5. Advising teams is a technical skill

Half my role is advising teams across the organization on what's feasible, which technology to pick, and where AI _shouldn't_ be used. The most useful sentence in that job is "this doesn't need an LLM." The second most useful is "this needs an LLM and a domain expert in the loop, and here's exactly where the loop goes." Feasibility judgment — calibrated by having shipped and been burned — turns out to be the scarcest resource in an AI org, scarcer than GPU budget.

## The meta-lesson

Production AI in a high-stakes domain is mostly _not_ about the model. It's about the scaffolding that makes a probabilistic component behave like an engineering component: typed outputs, versioned evals, abstention paths, observability, and the organizational judgment to deploy it only where it belongs. That scaffolding is unglamorous, and it is the job.

_— Daniel_
