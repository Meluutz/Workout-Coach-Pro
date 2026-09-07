# Adaptive Workout Coach — v7.3.4

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


## v7.3 — Personalization
v7.3 adds a persistent personalization layer without weakening the existing safety/equipment/schedule constraints.

### Visual avatar architecture
- Auto / Male / Female / Neutral preference.
- Auto uses the optional profile sex field only to select an illustration avatar.
- Sex/avatar selection does **not** alter training prescription.
- Current asset availability is shown transparently: Male 120/120, Female 0/120, Neutral 0/120.
- Users can either allow the current exact-exercise male pack as a temporary avatar fallback or hide visuals until their preferred pack exists.
- The app still never substitutes a different exercise image.

### Exercise personalization
- Balanced
- Prefer free weights
- Prefer machines & cables
- Prefer dumbbells
- Prefer bodyweight/minimal

These are soft ranking preferences. Equipment availability, protected areas, exercise avoidance, Plan Builder mode, schedule and goals remain higher-priority constraints.

### Plan variety
- Keep familiar exercises when sensible
- Balanced
- Favor different exercises when sensible

Variety preference affects coach-generated and Muscle Priority regeneration. Build Your Own remains user-directed.

### Coaching detail
- Concise
- Standard
- Detailed

### Additional safeguard
Prefill Last now asks for confirmation before overwriting any working-set data already entered today. Warm-up sets and notes remain untouched.


## v7.3.1 — Equipment & Bodyweight Expansion

This release fixes the equipment-model weakness discovered during v7.3 testing.

### Equipment is now a hard constraint
The onboarding equipment choices are now:
- Full gym
- Dumbbells + bench
- Minimal equipment
- Bodyweight only

Capability logic:
- **Bodyweight only** receives only exercises explicitly tagged as requiring no dedicated training implement.
- **Minimal equipment** can use bodyweight movements plus minimal-tool exercises.
- **Dumbbells + bench** can use dumbbell and bodyweight movements.
- **Full gym** can use the complete exercise database.

### Bodyweight expansion
The database expands from **120 to 150 exercises**, including **30 new bodyweight-focused movements** across pressing, shoulders, back/scapular work, hinge, unilateral legs, quads, hamstrings, glutes, rear delts, arms, calves and core.

Bodyweight-only programming uses its own workout templates. It does not attempt to prescribe cable/machine exercises or bar-dependent pull-ups/rows.

A transparent limitation remains: with truly no equipment or anchor point, high-quality loaded pulling is difficult. The app therefore labels floor-based back/scapular movements accurately instead of pretending they are mechanically equivalent to loaded rows or pulldowns.

### Bodyweight progression
When no external load is recorded, the coach now prioritizes:
- harder exercise variations
- added reps within the target
- slower eccentrics / pauses
- larger range of motion

It no longer makes a kg/lb increase the default progression recommendation for unloaded bodyweight work.

### Visuals
The original **120 exact exercise visuals remain untouched**. The 30 newly added exercises are explicitly marked **Exact visual pending**. The app does not substitute a different exercise image.

### v7.3 preservation
Personalization, avatar architecture and the Prefill Last overwrite safeguard remain intact.


## v7.3.2 — Variant Separation & Visual Consistency

This release fixes the case where **Single-Leg Romanian Deadlift** could appear in a Bodyweight Only plan while displaying the existing dumbbell visual.

### Resistance variants are now separate exercise records
The following movement families now have distinct bodyweight records:
- Bodyweight Single-Leg Romanian Deadlift
- Bodyweight Step-Up
- Bodyweight Bulgarian Split Squat
- Bodyweight Reverse Lunge
- Bodyweight Walking Lunge
- Bodyweight Standing Calf Raise

The existing legacy records retain their existing visual mappings and are treated as externally loaded / gym-compatible variants. The existing Single-Leg RDL record is now explicitly named **Dumbbell Single-Leg Romanian Deadlift**.

### Strict visual rule
A bodyweight variant never inherits the exact visual from its loaded counterpart. If its own exact visual has not been created, it displays **Exact visual pending** instead.

### Database / visual status
- Exercise records: **156**
- Existing exact visual mappings retained: **120**
- Exact visuals pending: **36**
- Broken existing visual paths: **0**

The 30 exercises introduced in v7.3.1 remain pending visually, and these 6 newly separated bodyweight variants are added to that pending queue.


## v7.3.3 — Onboarding & Mobile Usability Patch

- Renamed the onboarding label **Training block length** to **Program length (weeks)**.
- The internal training-block/cycle logic is unchanged; only user-facing wording is simplified.
- Finishing onboarding with **Build my plan** now returns the user directly to the **Train** screen rather than Settings.
- Added a mobile-first cleanup pass:
  - persistent bottom navigation on phones
  - safer bottom spacing for phone home indicators
  - larger touch targets
  - simpler two-column action controls
  - horizontally scrollable day tabs/chips where needed
  - bottom-sheet behavior for dialogs
  - single-column visual/library layouts
  - tighter cards and typography for small screens
  - improved set-entry overflow handling
  - improved session/rest controls

A broader full mobile UI review remains pinned before the interface is considered finished.


## v7.3.4 — Mobile UI Polish & Navigation Fix

### Critical onboarding navigation fix
The previous v7.3.3 patch called `setView("today")`, but the application navigation function is `switchView("today")`. This caused a JavaScript error after onboarding closed and left the previously active Settings view visible. v7.3.4 calls the correct navigation function before removing the onboarding overlay.

### Mobile UI redesign
- compact professional app header
- icon + label bottom navigation
- user-facing **Program** wording in navigation instead of Cycle
- stronger Train-page visual hierarchy
- cleaner program/day/session cards
- compact horizontally scrollable target controls
- larger, better-spaced working-set inputs
- cleaner exercise action grid
- improved warm-up controls
- bottom-sheet dialogs tuned for phones
- onboarding progress bar with named steps
- fixed mobile onboarding action bar
- improved equipment/radio card layout
- improved small-screen safe-area behavior
- dark-mode-compatible surfaces and hierarchy

The internal programming/cycle engine, 156-exercise database, bodyweight hard constraints, variant separation and existing visual mappings remain unchanged.
