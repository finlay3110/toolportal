# UCN Portal

A landing page for the United Confederation Navy (UCN) fan-made digital tool suite — a single hub linking out to each tool, plus quick access to Bridge Command's official channels.

> **This is a fan-made project.** It is not affiliated with, endorsed by, or approved by Bridge Command / The London Space Elevator Limited.

## What's in the suite

| Tool | Description |
|---|---|
| **ID Card Generator** | Build and print a fleet-standard crew ID card — rank, division, clearance level, photo, and barcode/QR, formatted to true CR-80 card size. |
| **Mission Companion** | An in-bridge reference companion for active missions — quick access to procedures, guides, and operational tools. |
| **Shanty Songbook** | The full digital songbook — searchable lyrics, favourites, chorus highlighting, and offline-ready access. |
| **Ship Search** | Looks up which ship (UCS Havock or UCS Takanami) is running at a given date/time, or shows the full day's schedule. |

The portal also links out to Bridge Command's official website and Discord server for anyone looking for the source community.

## Features

- Single-file `index.html` — no build step, no dependencies to install
- UCN dark navy theme with orange/red accent colours, Exo 2 + Orbitron typography, and an animated starfield background
- Live status indicators on each tool card (checks whether the linked site is reachable)
- Add to Home Screen support (iOS Safari meta tags + inline web app manifest for Android/Chrome)
- Staggered entrance animation on load, with a `prefers-reduced-motion` fallback
- Fully responsive card grid

## Tech

Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no external JS dependencies beyond Google Fonts (Exo 2, Orbitron).

## Disclaimer

All tools listed above are unofficial, fan-made projects created for the UCN community and are not affiliated with, endorsed by, or approved by Bridge Command / The London Space Elevator Limited. The Official Links section points to Bridge Command's own website and Discord server.
