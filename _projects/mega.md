---
layout: page
title: MEGA — reading memory from the eyes
description: A no-report paradigm that quantifies episodic memory from anticipatory eye gaze, published in Nature Communications Psychology.
importance: 1
category: Research
related_publications: false
---

**MEGA (Memory Episode Gaze Anticipation)** is the research program behind my MSc at Tel Aviv University's [Yuval Nir Lab](https://www.yuvalnirlab.com/): a method to measure whether someone remembers an event **without asking them** — by tracking where their eyes go.

## The idea

When people re-watch a movie clip, their gaze starts drifting toward the location of a salient event _seconds before it appears_ — but only if they remember it. That anticipatory gaze is a readable memory trace:

> "Even when subjects said they didn't remember, their gaze direction showed they did. This means that sometimes people remember, but can't say that they remember."

## The machine-learning core

The paradigm is as much an ML problem as a neuroscience one: raw eye-tracking streams go through signal processing and feature extraction, and a classifier identifies — from **single-trial gaze features** — whether a given viewing reflects memory for the event.

## Why it matters

Memory assessment today mostly requires verbal reports. MEGA opens the door to measuring memory in populations that can't provide them — patients with brain injuries, pre-verbal infants, even animals — with applications from early dementia screening to basic memory research.

## Outputs

- **Paper:** [Anticipatory eye gaze as a marker of memory](https://www.nature.com/articles/s44271-025-00305-7), _Communications Psychology_ (Nature Portfolio), 2025 · [bioRxiv preprint](https://www.biorxiv.org/content/10.1101/2024.08.14.607869v2)
- **Code:** [dyamin/MEGA](https://github.com/dyamin/MEGA) (analysis pipeline, MIT) · [dyamin/MEGA-Experiment](https://github.com/dyamin/MEGA-Experiment) (experiment presentation suite)
- **Thesis:** <a href="/assets/pdf/thesis.pdf" target="_blank">Download PDF</a>
- **Coverage:** Channel 13 News, The Times of Israel, Neuroscience News — see [Talks & media](/media/)
