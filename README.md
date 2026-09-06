# Adaptive Workout Coach — v7.0.1

GitHub-ready PWA build.

## What changed
- Expanded the core exercise database from 54 to **120 exercises**.
- Bundled **120 exact-match exercise visuals**.
- Added structured exercise metadata: movement/substitution group, equipment, target muscles, difficulty, fatigue cost, and joint-consideration tags.
- Expanded swap choices across chest, back, shoulders, arms, legs, glutes, calves, and core.
- Preserved local-first data storage, training blocks, progression logic, recovery check-ins, body tracking, exact weekday scheduling, and undo/redo.
- Visuals are now external files under `assets/exercises/` instead of being embedded in `index.html`, making the app much easier to maintain.
- Updated the service worker to cache viewed exercise visuals for offline reuse.

## Exact visual coverage
This build uses a strict exact-match rule: it never shows a different exercise image as a substitute.

Exact visuals bundled: **120/120**.

All exercises in the 120-exercise database now have an exact mapped visual.

## GitHub Pages upload
Upload the **contents of this folder** to the repository root, preserving the `assets/exercises/` folder structure.

Main files:
- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `icon-192.png`
- `icon-512.png`
- `assets/exercises/`

If an older version still appears after deployment, open the site once in a private/incognito window or clear the old site's service worker/cache.

## Privacy
Workout, recovery, profile, and body data remain stored locally in the browser using localStorage. This build adds no account system, analytics, or cloud sync.
