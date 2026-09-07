---
layout: page
title: MEGA — reading memory from the eyes
description: A no-report paradigm that quantifies episodic memory from anticipatory eye gaze, published in Nature Communications Psychology.
img: /assets/img/publication_preview/mega-gaze.png
importance: 2
category: Research
related_publications: false
---

**MEGA (Memory Episode Gaze Anticipation)** is the research program behind my MSc at Tel Aviv University's [Yuval Nir Lab](https://www.yuvalnirlab.com/): a method to measure whether someone remembers an event **without asking them** — by tracking where their eyes go.

## The idea

When people re-watch a movie clip, their gaze starts drifting toward the location of a salient event _seconds before it appears_ — but only if they remember it. That anticipatory gaze is a readable memory trace:

> "Even when subjects said they didn't remember, their gaze direction showed they did. This means that sometimes people remember, but can't say that they remember."

<div class="photo-grid photo-grid-2">
  {% include figure.liquid path="assets/img/mega/talk-tau-mega-procedure.jpg" class="img-fluid" alt="Daniel Yamin presenting the MEGA paradigm procedure slide — two viewings of movie clips two hours apart, then a verbal memory report — in a Tel Aviv University lecture hall" caption="Presenting the MEGA procedure at Tel Aviv University, January 2024: watch the clips, wait two hours, watch again — the eyes give the memory away before the verbal report does." %}
  {% include figure.liquid path="assets/img/mega/poster-2022.jpg" class="img-fluid" alt="Daniel Yamin pointing at gaze-anticipation figures on the poster 'Episodic memory assessment using gaze patterns during repeated viewing of naturalistic movies'" caption="Poster at ISFN 2022, the Israel Society for Neuroscience annual meeting — the first public outing of the gaze-anticipation results, two years before the preprint." %}
</div>

## The machine-learning core

<div class="photo-inline">
  {% include figure.liquid path="assets/img/mega/lab-eeg.jpg" class="img-fluid" avoid_scaling=true alt="Daniel Yamin adjusting equipment beside a participant wearing an EEG electrode cap in the lab, a still from the Channel 13 News feature" caption="In the lab with a participant — from the Channel 13 News feature on the research." %}
</div>

The paradigm is as much an ML problem as a neuroscience one: raw eye-tracking streams go through signal processing and feature extraction, and a classifier identifies — from **single-trial gaze features** — whether a given viewing reflects memory for the event.

## Why it matters

Memory assessment today mostly requires verbal reports. MEGA opens the door to measuring memory in populations that can't provide them — patients with brain injuries, pre-verbal infants, even animals — with applications from early dementia screening to basic memory research.

## Outputs

- **Paper:** [Anticipatory eye gaze as a marker of memory](https://www.nature.com/articles/s44271-025-00305-7), _Communications Psychology_ (Nature Portfolio), 2025 · [bioRxiv preprint](https://www.biorxiv.org/content/10.1101/2024.08.14.607869v2)
- **Code:** [dyamin/MEGA](https://github.com/dyamin/MEGA) (analysis pipeline, MIT) · [dyamin/MEGA-Experiment](https://github.com/dyamin/MEGA-Experiment) (experiment presentation suite)
- **Thesis:** <a href="/assets/pdf/thesis.pdf" target="_blank">Download PDF</a>
- **Coverage:** Channel 13 News, The Times of Israel, Neuroscience News — see [Talks & media](/media/)
