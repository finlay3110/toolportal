# UCN Portal

A landing page for the United Confederation Navy (UCN) fan-made digital tool suite — a single hub linking out to each tool, plus quick access to Bridge Command's official channels.

> **This is a fan-made project.** It is not affiliated with, endorsed by, or approved by Bridge Command / The London Space Elevator Limited.

## What's in the suite

Five tools sit behind the **Mission Tools** dropdown — the reference tools meant for use during an active mission:

| Tool | Description |
|---|---|
| **Mission Companion** | An in-bridge reference companion for active missions — quick access to procedures, guides, and operational tools. |
| **Engineering Reference** | Power, thermal, warp, and damage control reference tools for engineering watch. |
| **Nav Reference** | Navigation and radar reference tool for plotting and interpreting bridge instruments. |
| **Comms Log** | Log and reference bridge communications during a mission. |
| **General Log** | Keep your own mission log from any station you're assigned to. |

The remaining four sit on their own cards:

| Tool | Description |
|---|---|
| **ID Card Generator** | Build and print a fleet-standard crew ID card — rank, division, clearance level, photo, and barcode/QR, formatted to true CR-80 card size. |
| **Shanty Songbook** | The full digital songbook — searchable lyrics, favourites, chorus highlighting, and offline-ready access. |
| **Ship Search** | Looks up which ship (UCS Havock or UCS Takanami) is running at a given date/time, or shows the full day's schedule. |
| **Mission Stats** | Import a CSV of your deployments from the Bridge Command portal and track your mission history. |

The portal also links out to Bridge Command's official website and Discord server for anyone looking for the source community.

## Features

- No build step and no dependencies to install — `index.html` carries all of its own CSS, JavaScript, and imagery, with `sw.js` alongside it for offline support
- UCN dark navy theme with orange/red accent colours, Exo 2 + Orbitron typography, and an animated starfield background
- Reachability indicators on each tool card. These sites send no CORS headers, so the probe can only confirm that the host answered — not that it answered with a working page — and the wording ("Reachable", "No response", "Unreachable") reflects that
- Add to Home Screen support (iOS Safari meta tags + inline web app manifest for Android/Chrome), backed by a service worker so the installed app still opens offline
- Staggered entrance animation on load, and a starfield that both honour `prefers-reduced-motion`
- Fully responsive card grid

## Tech

Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no external JS dependencies beyond Google Fonts (Exo 2, Orbitron).

Two files ship: `index.html` and `sw.js`. The service worker has to be a separate file because a browser will not register one from an inline or blob script, so the portal is not strictly single-file any more — but it is still copy-and-deploy, with nothing to compile.

## Disclaimer

All tools listed above are unofficial, fan-made projects created for the UCN community and are not affiliated with, endorsed by, or approved by Bridge Command / The London Space Elevator Limited. The Official Links section points to Bridge Command's own website and Discord server.
