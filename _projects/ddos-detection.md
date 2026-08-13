---
layout: page
title: Real-time DDoS anomaly detection
description: Six years on DDoS Secure at Allot — network behavior anomaly detection and mitigation on live traffic.
importance: 4
category: Engineering
related_publications: false
---

At **Allot** (2014–2020) — which I joined via a startup tiger team that Allot acquired — I spent six years as a software and algorithm engineer on **DDoS Secure**, a real-time **network behavior anomaly detection (NBAD)** and mitigation system.

## Highlights

- **Full re-architecture** — designed and rebuilt the product backend from Ruby to Java, including the PostgreSQL layer and parts of the GUI, while the product stayed live.
- **BGP-based mitigation** — built a REST API for the [BIRD](https://bird.network.cz/) routing daemon so the system could divert malicious traffic during an attack using BGP.
- **Adaptive detection algorithms** — extended pattern-extraction algorithms to track evolving attacks, and applied multiple linear regression to predict a signal's clean baseline *while under attack*, so long-duration floods couldn't poison the detector's notion of "normal".
- Won **first prize** in the Allot hackathon along the way.

This was my algorithmic apprenticeship: statistics and detection theory applied to hostile, high-volume, real-time data — long before "anomaly detection" had an ML-platform aisle.
