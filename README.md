# Adaptive Workout Coach — v7.2

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


## v7.0.2 visual quality patch
- Replaced 25 user-reviewed problem visuals.
- Other 95 exercise visuals unchanged.
- 120/120 exact visual mappings retained.
- Image rendering explicitly prevents cropping with object-fit: contain.


## v7.0.3 standalone visual repair
- Replaced the 25 user-flagged visual assets with true standalone generated images.
- Removed the v7.0.2 review-sheet crop workaround.
- Other 95 exercise visuals unchanged.
- Retains 120/120 exact visual mappings.
- Exercise images render with object-fit: contain and no max-height clamp.

## v7.1 — Advanced Plan Builder
After the original five setup steps, users now choose one of three plan-building modes:

- **Coach Suggested** — the existing balanced automatic programming path.
- **Muscle Priority** — ten body-part percentage sliders that always rebalance to 100%. Percentages guide relative emphasis; the engine still protects minimum balance, respects schedule/equipment/limitations, accounts for exercise overlap, and adjusts exercise selection and working-set allocation.
- **Build Your Own** — exercise selection is grouped by body part and automatically filtered by equipment, protected areas, and avoided exercises. Users can either let the coach distribute/program their selections or assign each exercise to a workout day with manual sets, reps and RPE.

Additional v7.1 behavior:
- Live approximate weekly muscle-volume preview in Muscle Priority mode.
- High-specialization warning and maintenance-volume guardrail.
- Direct **Plan builder & priorities** control in Settings.
- Regenerate Plan uses the currently selected builder mode.
- Existing v6/v7 localStorage key is preserved for backward compatibility.
- Existing 120/120 exact visual library is preserved unchanged.


## v7.2 — Workout Execution & Usability
This release keeps the v7.1 Advanced Plan Builder and 120/120 exact visual library intact while improving the live training workflow.

- Persistent session timer with manual start/pause/resume/reset and optional auto-start on the first completed set.
- Automatic programmed rest timer after completed working sets, plus configurable warm-up rest and an always-visible compact rest status.
- Exercise-specific warm-up sets that are stored separately and excluded from working volume, completion, progression and PR calculations.
- Previous-performance reference beside each exercise, with one-tap prefill from the last completed session.
- Rich Exercise Details view: exact visual, muscles, movement family, equipment, difficulty, fatigue, protected-area considerations, last performance and same-family alternatives.
- Searchable/filterable 120-exercise library by body part, equipment and difficulty.
- Session-finish review screen before saving, duplicate-session protection, incomplete-set warning, session duration, volume load, warm-up count and PR summary.
- Safer exercise swaps when current-day entries already exist.
- Larger mobile touch targets and improved small-screen set-entry layout.
- Existing localStorage key remains unchanged for v6/v7 compatibility.
