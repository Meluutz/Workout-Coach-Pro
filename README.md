# Adaptive Workout Coach — v7.4.7

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


## v7.3.5 — Mobile Interaction, Settings & Program Overview

### Onboarding
- Every step transition automatically scrolls the onboarding content to the top.
- The Continue / Build my plan action dock is moved outside the onboarding scroll container so it stays visible.
- Visual Viewport measurements are used to keep the action dock inside the visible iOS Safari viewport.

### Dialogs / sheets
- Exercise Details, Exercise Swap, Session Notes and other sheets now sit above the app bottom navigation.
- Each sheet owns its scrolling and uses the visible browser viewport height.
- Sheet header/close controls remain sticky while scrolling.
- Sheets always open scrolled to the top.

### Settings cleanup
- Removed duplicate Undo & Change History from Settings.
- Removed visual coverage / available-image status cards.
- Removed avatar pack coverage status.
- Exercise Library remains available as a simple Plan & Schedule action.
- Consolidated Profile, Program controls, Workout preferences, Personalization, Backup & Transfer, and App & Privacy.
- Backup & Transfer now clearly explains that browser/device data is local and does not automatically sync.

### Program page
- Added a full weekly workout-plan overview with Exercise / Sets / Reps.
- Each day has an Open in Train shortcut.
- Replaced the oversized Plan Safety block with a compact Recent Plan Change + Undo/Redo row.
- User-facing Training Block language on the Program page is simplified to Program.


## v7.3.6 — Compact Coach, Warm-up Simplification & Desktop Rendering Fix

- Fixed a Standard coaching-detail recursion bug that could stop `renderAll()` and prevent the Program page from appearing on another browser/device.
- Coach recommendations are now compact one-line strips with an optional Why?/Logic action.
- Removed the large per-exercise Warm-up Sets section from workout cards.
- Retained the workout-level Warm-up Guide as the single warm-up reference.
- Warm-up Guide now opens as a full-height, independently scrollable mobile reference.
- Removed the Warm-up Rest setting because per-exercise warm-up logging is no longer surfaced.
- Browsers with a profile but a missing/malformed plan attempt to repair/regenerate the plan automatically.
- If no plan exists in a browser, Train/Program show explicit Build a plan / Import backup actions.
- Phone and desktop data remain local-first; they do not automatically sync.


## v7.3.7 — Compact Coach & Coach Logic Mobile Fix

- Coach recommendation is now a minimal inline row.
- The Logic action is a compact info icon rather than a large button.
- Coach Logic opens as a full-height independently scrollable mobile panel.
- Removed low-value filler/disclaimer text from Coach Logic.
- Coach Logic shows only the recommendation and its actual reasons.
- Mobile safe-area spacing and sticky close/header controls are retained.
- Desktop Coach Logic remains a centered modal.
- Visible version text is synchronized to v7.3.7.


## v7.3.8 — Plan Builder Mobile Auto-Scroll

- Choosing **Muscle Priority** in onboarding now automatically scrolls to the muscle-priority controls that were just revealed.
- Choosing **Build Your Own** automatically scrolls to the exercise-selection area.
- Choosing **Fully manual** inside Build Your Own scrolls to the manual day/sets/reps/RPE controls.
- Coach Suggested does not force a scroll.
- The scroll targets the onboarding container itself for better iOS Safari reliability.


## v7.3.9 — Percentage-First Muscle Priority

Muscle Priority was rebuilt so the user's percentages are the primary programming signal.

- Removed the old hidden 3%-per-muscle floor.
- Direct weekly set allocation follows the requested percentages first.
- Exercise selection is drawn from the requested muscle categories rather than being dominated by generic Upper/Lower/Full templates.
- High and extreme specialization requests are visibly labeled.
- Completely unselected major movement areas receive only a small maintenance dose:
  - upper push if entirely absent
  - back if absent
  - quad/glute movement if absent
  - hamstring/glute movement if absent
- Direct weekly volume is capped by experience level. When a user's percentage would exceed that cap, the app shortens the program rather than filling the remaining time with unrelated exercises.
- Preview now shows **Requested %**, **Programmed % of direct sets**, and direct working sets.
- Generated priority workouts display the top requested focus in the workout title/context.
- Equipment, protected areas, schedule, exercise avoidance and the user's original onboarding answers remain hard constraints.


## v7.4.0 — Long-Term Coaching Intelligence

The coach now evaluates multiple sessions rather than treating each workout as an isolated event.

### Exercise progression
- Uses completed working sets, reps, load and RPE.
- Detects progressing, stable, plateau-watch and regression trends over comparable recent exposures.
- Recommends load increases only when the top of the rep range is completed within the target effort.
- Keeps load and builds reps when appropriate.
- Bodyweight exercises prioritize harder variations, tempo/pauses and ROM when no external load is being used.
- Repeated performance decline plus high effort can produce a temporary one-set reduction recommendation.

### User-controlled plan changes
- Recommendations are shown before changing the program.
- The user can apply one recommendation or apply all actionable changes.
- Applied changes use the existing Undo system.
- Recommendations that only require execution intent (hold load, add reps, progress bodyweight variation) do not silently modify targets.

### Fatigue and deload intelligence
- Final program week is no longer an automatic deload.
- The coach looks for accumulated evidence from recent readiness, completion, high-RPE exposure, joint/tendon discomfort and multi-exercise regression.
- A deload is suggested only after enough accumulated data support it.
- A user-applied deload reduces effective working sets to about 60% and target effort to RPE 6–7 for that week.
- The deload ends automatically when the week advances.

### Weekly Coach Review
- Program page includes a compact Long-Term Coach card.
- Review panel shows progression, plateau and fatigue signals.
- Weekly summaries retain coach status and trend counts.
- Muscle Priority allocations remain locked to the user's requested percentages; coaching does not rebalance the plan back toward a generic template.

### Local-first
All coaching data remains inside the existing local app state and is included in Export/Import backups.


## v7.4.1 — Theme Persistence

- Dark/light theme choice is now saved locally in the browser.
- Refreshing or reopening the app keeps the selected theme.
- Saved theme is applied in the document head before the main interface renders to reduce light/dark flashing during startup.
- The browser theme-color metadata and native control color scheme update with the selected theme.
- Theme remains a device/browser-local UI preference, consistent with the app's local-first architecture.


## v7.4.2 — Experience Progressions + Bodyweight Visual Completion

Library: **167 exercises**.

New unique exercises:
- Scapular Push-Up — Beginner
- Sphinx Push-Up / Bodyweight Triceps Extension — Intermediate
- Assisted Pistol Squat — Intermediate
- Pistol Squat — Advanced
- Shrimp Squat — Advanced
- Glute Bridge March — Intermediate
- Side Plank Hip Abduction — Advanced
- Reverse Plank — Intermediate
- Plank-to-Push-Up — Intermediate
- Burpee — Intermediate / Conditioning
- Bear Walk — Intermediate / Conditioning

Cross-reference corrections:
- Diamond Push-Up was already present under Close-Grip Push-Up; the existing entry is now named **Diamond / Close-Grip Push-Up**.
- Dead Bug and Side Plank were already present.
- Decline pressing is already represented by Feet-Elevated Push-Up.
- Sliding hamstring work is already represented by Slider Hamstring Curl.

Experience-level automatic programming:
- Beginner: no Advanced movements; scalable Intermediate bridge movements are allowed, except high-fatigue Intermediate movements.
- Intermediate: Beginner + Intermediate movements only.
- Advanced: full exercise library available.
- Exercise Swap uses the same guardrails.
- Build Your Own remains user-controlled and labels above-level choices.

Difficulty audit:
- Self-Resisted Biceps Curl → Beginner.
- Bodyweight Standing Calf Raise → Beginner.
- Bodyweight Single-Leg Romanian Deadlift → Intermediate, moderate fatigue.
- Bodyweight Squat fatigue → moderate.

Equipment audit:
- Minimal Equipment no longer requests a lateral-raise slot when no lateral-raise resistance is available. That slot becomes another vertical-press/shoulder pattern.

Visual coverage:
- All 36 previously missing bodyweight visuals are now wired into the app.
- Bear Walk has an exact visual.
- The ten newly added progression exercises show **Exact Visual Pending** until their dedicated images are created.


## v7.4.3 — Complete Visual Library

- All 167 exercise entries now have mapped exact exercise visuals.
- Added the final 10 progression visuals:
  - Scapular Push-Up
  - Sphinx Push-Up / Bodyweight Triceps Extension
  - Assisted Pistol Squat
  - Pistol Squat
  - Shrimp Squat
  - Glute Bridge March
  - Side Plank Hip Abduction
  - Reverse Plank
  - Plank-to-Push-Up
  - Burpee
- Corrected the automatic-plan experience guard so the primary `pickBest` path
  now applies the same Beginner / Intermediate / Advanced eligibility rules as
  exercise swaps and the simpler picker path.

Visual coverage: **167 / 167**.


## v7.4.4 — Full Experience-Level Exercise Audit

The complete 167-exercise library was reviewed using a consistent movement-complexity model:

- **Beginner:** low skill/coordination barrier, stable setup, and easily scalable resistance.
- **Intermediate:** greater stabilization, unilateral control, technique, or relative-strength demand.
- **Advanced:** genuinely high relative-strength, mobility, coordination, or technical demand.

Final library distribution:
- Beginner: **84**
- Intermediate: **72**
- Advanced: **11**

### Important programming change

Difficulty is now treated primarily as an **eligibility / movement-complexity tier**, not as a rule that an Advanced user should receive only Advanced-labeled movements.

For gym, dumbbell, and minimal-equipment plans:
- Beginner users strongly favor Beginner movements and cannot receive Advanced movements automatically.
- Intermediate users can receive Beginner or Intermediate movements and cannot receive Advanced movements automatically.
- Advanced users can use the entire library, but simple machine/cable/dumbbell/barbell exercises remain highly competitive when they are the best stimulus-to-fatigue choice.

For Bodyweight plans:
- Difficulty matching receives a stronger selection bonus because harder exercise variations are often the practical way to create progressive overload.

### Notable reclassifications

Examples moved to Beginner because they are stable and readily scalable:
- Goblet Squat
- Leg Press
- Hack Squat
- Pendulum Squat
- Belt Squat
- Dumbbell Bench Press
- Dumbbell Floor Press
- Pec Deck
- Lat Pulldown
- Neutral-Grip Lat Pulldown
- Seated Cable Row
- Chest-Supported Row
- Dumbbell Lateral Raise
- Cable Lateral Raise
- Face Pull
- Dumbbell Curl
- Hammer Curl
- Pallof Press
- Farmer's Carry
- Hip Thrust
- Back Extension

Examples corrected downward from Advanced:
- Dumbbell Single-Leg Romanian Deadlift → Intermediate
- Meadows Row → Intermediate
- Side Plank Hip Abduction → Intermediate
- Pendulum Squat → Beginner

Example corrected upward:
- Chest Dip → Advanced

All **167 / 167 exercise visuals** remain mapped.


## v7.4.5 — Equipment / Personalization Fix

Fixed a profile-editing issue where an old **Prefer bodyweight movements** Exercise Style preference could remain active after the user changed the training environment to **Full gym** or **Dumbbells + bench**.

Changes:
- Changing equipment through Edit Profile resets Exercise Style to **Balanced** before regenerating the plan.
- Existing v7.4.x saved profiles with the known unmarked Full Gym/Dumbbells + Bodyweight-bias combination are repaired automatically once.
- Exercise Style now records whether the user explicitly applied it.
- Settings now labels **Visual** and **Exercise style** separately.
- The Settings explanation now clarifies that visual avatar does not affect exercise selection.
- Exercise Style remains a user-selectable preference, but only after an explicit **Apply & regenerate plan** action.
- Full visual coverage remains **167 / 167**.


## v7.4.6 — Loaded-Only Automatic Plans

### Full Gym
Automatic Coach Suggested and Muscle Priority plans exclude all exercises tagged as bodyweight.

### Dumbbells + Bench
Automatic Coach Suggested and Muscle Priority plans also exclude all exercises tagged as bodyweight.

Bodyweight exercises are still available through:
- Exercise Swap
- Build Your Own

### Dumbbell template correction
The database has no true dumbbell knee-flexion hamstring-curl movement. Rather than reintroducing bodyweight work:
- Dumbbell Romanian Deadlift is treated as a scalable Beginner loaded hinge.
- Dumbbells + Bench templates replace unavailable `hamstring` slots with a loaded `hip` slot.

### Personalization
`Prefer bodyweight movements` is disabled for Full Gym and Dumbbells + Bench profiles.
Minimal Equipment and Bodyweight Only behavior is unchanged.

Visual coverage remains **167 / 167**.


## v7.4.7 — Full Resistance / Equipment Classification Audit

All **167 exercises** were reviewed and assigned a dedicated `resistanceClass`.

- External load: **99**
- Bodyweight resistance: **64**
- Minimal-tool resistance: **4**

The existing `equipment` field remains a compatibility list for Exercise Swap and Build Your Own.
Automatic programming now uses the separate `resistanceClass`, eliminating ambiguity.

### Full Gym automatic plans
Only `External load` exercises are eligible.

This excludes bodyweight/calisthenic gym movements such as:
- Pull-Up / Assisted Pull-Up
- Chin-Up
- Chest Dip
- Inverted Row
- Nordic Hamstring Curl
- Hanging Leg Raise
- Back Extension
- Push-Up / Plank families

It also excludes minimal-tool movements such as:
- Slider Hamstring Curl
- Band Pull-Apart
- Band Curl
- Ab Wheel Rollout

### Dumbbells + Bench automatic plans
Exercises must:
1. Be classified `External load`, and
2. Be genuinely dumbbell-compatible.

### Ambiguous duplicate-family names corrected
The loaded variants are now explicitly named:
- Dumbbell Step-Up
- Dumbbell Bulgarian Split Squat
- Dumbbell Reverse Lunge
- Dumbbell Walking Lunge
- Dumbbell Standing Calf Raise

Their separate bodyweight records remain unchanged.

### Important clarification
`Step-Up` and `Bulgarian Split Squat` were not the bodyweight records in v7.4.6.
They were the loaded dumbbell variants, but their generic names made that unclear.
The actual classification bug in the reported examples was `Slider Hamstring Curl`, which was Minimal Equipment and could leak into Full Gym because compatibility and resistance type had previously been conflated.

Bodyweight and minimal-tool exercises remain available through Exercise Swap and Build Your Own.

Visual mappings remain **167 / 167**.
