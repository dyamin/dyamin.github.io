---
layout: page
permalink: /repositories/
title: Repositories
description: Open-source work — the MEGA research pipeline, its experiment suite, and this site.
nav: true
nav_order: 7
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

<!-- The widgets below come from third-party stats services; the whole section hides itself
     if none of them load, so visitors never see a heading over blank space. -->
<div id="gh-live-stats">
  <hr />
  <h2>Live stats from GitHub</h2>

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

  <hr />
  {% endif %}

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

</div>

<script>
  // Hide the live-stats section only when every widget image has confirmed failure.
  (function () {
    var section = document.getElementById("gh-live-stats");
    if (!section) return;
    function check() {
      var imgs = Array.prototype.slice.call(section.querySelectorAll("img"));
      if (!imgs.length) {
        section.hidden = true;
        return;
      }
      var allDead = imgs.every(function (img) {
        return img.complete && img.naturalWidth === 0;
      });
      if (allDead) section.hidden = true;
    }
    if (document.readyState === "complete") {
      setTimeout(check, 3000);
    } else {
      window.addEventListener("load", function () {
        setTimeout(check, 3000);
      });
    }
  })();
</script>
