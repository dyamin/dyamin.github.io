---
layout: page
permalink: /repositories/
title: Repositories
description: Open-source work — the MEGA research pipeline, its experiment suite, and this site.
nav: true
nav_order: 6
---

<div class="repo-static-grid">
  <a class="repo-static-card" href="https://github.com/dyamin/MEGA" target="_blank" rel="noopener noreferrer">
    <h3><i class="fa-brands fa-github"></i> MEGA</h3>
    <p>The analysis pipeline behind <em>Anticipatory eye gaze as a marker of memory</em> (Communications Psychology, Nature Portfolio 2025) — signal processing, gaze-feature extraction, and ML classification of single-trial memory. MIT licensed.</p>
    <span class="repo-static-lang">Python · eye tracking · machine learning</span>
  </a>
  <a class="repo-static-card" href="https://github.com/dyamin/MEGA-Experiment" target="_blank" rel="noopener noreferrer">
    <h3><i class="fa-brands fa-github"></i> MEGA-Experiment</h3>
    <p>The experiment presentation suite for the MEGA paradigm — stimulus presentation and eye-tracker integration used to run the study's five experiments (145 participants).</p>
    <span class="repo-static-lang">Python · PsychoPy · EyeLink</span>
  </a>
  <a class="repo-static-card" href="https://github.com/dyamin/dyamin.github.io" target="_blank" rel="noopener noreferrer">
    <h3><i class="fa-brands fa-github"></i> dyamin.github.io</h3>
    <p>This site — Jekyll on the al-folio v1 gem-based theme, with a single-source-of-truth CV (JSON Resume → page + generated PDF), custom design system, and CI deploys.</p>
    <span class="repo-static-lang">Jekyll · Ruby · SCSS</span>
  </a>
</div>

---

## Live stats from GitHub

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% endif %}

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
