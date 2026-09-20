# Adaptive Workout Coach — v7.9.8

GitHub-ready PWA build. Current release: **v7.9.6 · 169 exercises and 169 exact visuals**. The chronological changelog below includes older counts for historical releases.

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

If an older version still appears after deployment, wait for GitHub Pages and reopen/reload the installed app. Do not clear Safari website data or remove the Home Screen app to force an update: those actions may delete local workout records. First save and independently verify a full JSON backup.

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


## v7.4.8 — Audited Progression Ladders

Every one of the **167 exercises** now has an explicit progression strategy.

Only exercises with a defensible next/previous movement were placed into a linear ladder.
**37 exercises** belong to **12 audited ladders**.

Examples:
- Wall Push-Up → Incline Push-Up → Push-Up → Tempo Push-Up → Archer Push-Up
- Pike Push-Up → Feet-Elevated Pike Push-Up → Wall Handstand Push-Up
- Wall Triceps Extension → Sphinx Push-Up → Diamond / Close-Grip Push-Up
- Bodyweight Split Squat → Bodyweight Reverse Lunge → Bodyweight Bulgarian Split Squat → Assisted Pistol Squat → Pistol Squat
- Lateral Lunge → Cossack Squat
- Glute Bridge → Glute Bridge March → Single-Leg Glute Bridge
- Bodyweight Good Morning → Bodyweight Single-Leg Romanian Deadlift
- Hamstring Walkout → Slider Hamstring Curl → Nordic Hamstring Curl
- Bird Dog → Dead Bug → Plank → Hollow Body Hold → Ab Wheel Rollout
- Side Plank → Side Plank Hip Abduction
- Reverse Crunch → Hanging Leg Raise
- Bodyweight Standing Calf Raise → Single-Leg Calf Raise

Loaded exercises are not forced through arbitrary exercise substitutions; their primary progression remains reps and load.

### Long-Term Coach integration

When a non-loaded exercise reaches the top of its rep target at an appropriate RPE:
- The coach names the next audited exercise when one is appropriate for the profile.
- The recommendation can be applied to the plan with Undo available.
- Otherwise the coach uses tempo, range, reps, assistance reduction, or resistance/tension.
- Minimal-tool exercises no longer receive arbitrary pound increases when no numerical load was logged.

Exercise Details now show the progression strategy and audited easier/next rung when available.

Visual coverage remains **167 / 167**.


## v7.5.0 — Production Reliability & Regression Suite

A new **Settings → Reliability & diagnostics → Run reliability test** tool exercises the app's real programming functions without replacing the user's current plan or workout history.

### Automated coverage

The browser-side suite runs **1,819 synthetic scenarios** plus database/DOM assertions covering:

- Beginner / Intermediate / Advanced
- Full Gym / Dumbbells + Bench / Minimal Equipment / Bodyweight Only
- Muscle / Strength / Muscle + Strength / Endurance / General Fitness
- 2–6 training days per week
- 45 / 60 / 75 / 90 minute sessions
- Coach Suggested plan generation
- 100% Muscle Priority specialization for every priority muscle
- Shoulder / knee / lower-back / wrist limitation filtering
- User exercise-name avoidance filters
- Profile/equipment changes with a previous plan still present
- The previously observed stale Bodyweight-preference → Full Gym/Dumbbells leakage case
- Exercise IDs, names, resistance classes and difficulty tiers
- Progression ladder links, reciprocity and cycle detection
- Muscle-map coverage
- 167 / 167 visual mappings
- Duplicate live DOM IDs
- Sets, reps, RPE and rest-target sanity checks

### State isolation

The self-test snapshots in-memory state and verifies the persisted workout-data record remains unchanged. If an unexpected write ever occurs, the previous local-storage value is restored.

Visual coverage remains **167 / 167**.


## v7.5.1 — Regression Test Correction

v7.5.0 could report **258 failures** on a healthy build. The exact root causes were reproduced and corrected:

- **244 false failures** came from assuming every nominal Coach Suggested template slot must always be filled. Minimal Equipment Beginner/Intermediate upper and push sessions can have one intentionally unavailable duplicate vertical-press slot after the lateral-raise fallback. v7.5.1 calculates the **maximum actually achievable unique exercise count** for each session and tests against that value.
- **14 false failures** came from an incomplete caution-tag validator. The exercise database legitimately uses `elbow`, `hip`, and `ankle` in addition to the four user-selectable limitation filters.

The corrected browser-side suite runs **1,819 synthetic scenarios**.

A new **Copy diagnostics** button produces a compact text report containing:
- PASS / FAIL
- profile and assertion counts
- failure count
- state-isolation status
- grouped failure categories
- a small number of example failures

This removes the need to send large screenshot batches if a future regression is detected.

No exercise-programming rules, equipment classifications, exercise levels, progression ladders, or visual mappings were changed in this patch.


## v7.6.0 — Mobile Progress Analytics

The Progress tab is rebuilt around mobile-first training analytics.

### Time ranges

Choose:
- 4 weeks
- 8 weeks
- 12 weeks
- All time

The selected range updates session metrics, exercise performance, weekly workload, PRs and recent-session history.

### Exercise performance

A mobile exercise selector automatically prioritizes exercises with the most usable logged exposures.

For externally loaded exercises:
- Displays estimated 1RM trend
- Shows range change percentage
- Best estimated 1RM
- Latest best set
- Exposure count
- The audited progression strategy

For non-loaded exercises:
- Uses best-set reps rather than inventing a fake weight-based strength score.

### Weekly workload

Tracks:
- Completed working sets
- Loaded volume (`weight × reps`)
- Training time
- Sessions/week versus the current weekly target
- Recent week-by-week set counts

Working sets are the primary trend so Bodyweight and Minimal Equipment users still receive useful analytics when loaded volume is zero.

### Muscle workload

Completed working sets are mapped to muscle groups using the same primary/secondary weighting used by the Program volume estimate.

This is clearly described as an exposure estimate rather than a direct measure of hypertrophic stimulus.

### Mobile UX

- 2×2 key-metric layout on phone
- Compact 4W / 8W / 12W / All control
- Responsive exercise selector
- Native SVG trend charts with no external chart library
- Horizontal-scroll weekly chips
- Muscle workload bars optimized for narrow screens
- Existing body measurements, PRs and recent sessions remain available

### Reliability

The v7.5 regression suite now also verifies:
- Exercise analytics aggregation
- Increasing loaded-performance trend detection
- Weekly set aggregation
- Muscle workload mapping

All analytics are calculated locally from saved workout history. No account or cloud service is required.

Visual coverage remains **167 / 167**.


## v7.6.1 — Workout Coach Branding & iPhone Home Screen

- Replaced both old `AW` marks with the approved glossy blue fitness-growth icon.
- Replaced the PWA 192×192 and 512×512 icons.
- Added a dedicated 180×180 Apple touch icon for iPhone/iPad home-screen shortcuts.
- Added the iOS home-screen title `Workout Coach`.
- Updated PWA manifest icon masking metadata.
- Cached the branding icon for offline use.
- Included the approved Workout Coach wordmark in `assets/branding/`.
- No workout programming, analytics, progression, exercise-classification, or saved-data logic changed.

### Existing iPhone shortcut
iOS normally keeps the icon captured when the shortcut was originally added. After deploying this version, remove the old Workout Coach home-screen shortcut and add the site to the home screen again from Safari to display the new icon.


## v7.6.2 — Upper-Trap Shrug Exercises

Added two requested loaded upper-trap accessories:

- **Dumbbell Shrug** — Beginner · Dumbbells / Full Gym
- **Machine / Cable Shrug** — Beginner · Full Gym

Both target the upper trapezius with levator scapulae involvement and use normal reps → load progression.

### Programming behavior

These are intentionally optional accessories:
- Available in the exercise library and **Build Your Own**.
- A manually programmed shrug can be swapped to the other compatible shrug variation.
- Existing Coach Suggested templates are unchanged, so shrugs do not unexpectedly displace rows, presses, lateral raises, or direct arm work.
- Existing Muscle Priority percentage logic is unchanged.
- Completed shrug sets contribute to Progress analytics as upper-back work with a smaller shoulder exposure contribution.

Library: **169 exercises**.  
Exact visual coverage: **169 / 169**.


## v7.6.3 — Approved Shrug Visuals
- Replaced the temporary Dumbbell Shrug visual with the approved standalone poster.
- Replaced the temporary Machine / Cable Shrug visual with the approved standalone poster.
- No programming, analytics, progression, or saved-data logic changed.
- Library remains 169 exercises with 169 / 169 mapped visuals.


## v7.6.4 — Build Your Own Exercise Reordering

Build Your Own now includes a dedicated **Selected exercise order** panel.

- Drag the dedicated `≡` handle to reposition an exercise.
- Use **↑ / ↓** as a dependable mobile fallback.
- Keyboard Arrow Up / Arrow Down works while the drag handle is focused.
- The whole exercise row is not draggable, reducing accidental moves while scrolling.
- The order is saved in the existing `customExercises` sequence.
- Fully manual plans use the chosen relative order directly within each assigned workout day.
- Coach-programmed Build Your Own still chooses the best day for each movement, then preserves the user's preferred order among exercises assigned to that day.
- Sets, reps, RPE and day assignments stay attached to the exercise while it moves.
- Existing Edit Profile Undo behavior remains unchanged.

The reliability suite now checks up/down reordering, drag-style reorder logic, manual-plan order preservation, and coach-programmed within-day order preservation.

Library: **169 exercises**.  
Exact visual coverage: **169 / 169**.


## v7.6.5 — Mobile Build Your Own Reorder Cleanup

Based on real iPhone use, the Build Your Own ordering layout was tightened for narrow screens.

### Mobile
- The large drag handle is hidden on screens up to 760px wide.
- Reordering uses the existing **↑ / ↓** buttons.
- Exercise names receive substantially more horizontal space.
- Exercise names may use up to two lines.
- Position numbers are narrower.
- Arrow buttons are slightly more compact.
- The secondary day/category line remains compact.

### Larger screens
- The drag handle remains available.
- ↑ / ↓ controls remain available as a fallback.

No ordering logic, workout programming, exercise data, analytics, or saved-data behavior changed.


## v7.7.0 — Saved Plan Library

Workout Coach now supports multiple named workout plans stored locally on the device.

### Plan Library
The Program page includes a new **Saved workout plans** card with:
- Save current
- Manage saved plans
- Active-plan indicator
- Unsaved-change indicator

Each saved plan can be:
- Previewed
- Activated
- Updated from the current plan
- Duplicated
- Renamed
- Deleted

### What a saved plan contains
A plan snapshot preserves:
- Training days and weekday schedule
- Exercise selection and order
- Sets, reps, RPE and rest targets
- User target overrides stored in the plan
- Goal and experience level
- Equipment mode
- Plan Builder mode
- Muscle Priority percentages
- Build Your Own selections, ordering and manual assignments
- Limitation / avoid settings relevant to programming
- Cycle length
- Saved cycle/week state when the plan is saved as the active plan

Identity and body-tracking information remain global rather than being duplicated into each plan.

### Switching plans
When another plan is activated:
- The current active plan is snapshotted automatically before switching.
- If the current plan has never been saved, an automatic `Previous Plan · <date>` entry is created first.
- Workout history, recovery history, body measurements and Progress analytics are preserved.
- **Start as new cycle** creates a new globally unique program-cycle number and begins at Week 1.
- **Continue saved cycle** restores the saved week, week logs and coaching state when that saved plan has a continuable cycle.
- Duplicated plans intentionally do not share a historical cycle; they activate as a new cycle.

### History isolation
New completed sessions and recovery check-ins store the active `planId`.
Cycle-specific duplicate detection, weekly reviews, fatigue aggregation and same-week recovery lookup now respect the active saved-plan ID when present. All-time Progress analytics still span workout history across every plan.

### Backup
Saved plans are part of the normal JSON backup because they live inside the app's existing local state. No account or cloud sync is required.

Library: **169 exercises**.  
Exact visual coverage: **169 / 169**.


## v7.8.0 — Create New Plan

The Saved Plan Library can now build a future workout program without modifying the active program.

### Create New Plan
- **Create from Scratch** keeps current constraints as convenient defaults, resets the Plan Builder to Coach Suggested, and generates without favoring the current exercise plan.
- **Create from Active Plan** starts from the active settings and Plan Builder. If nothing is changed, the resulting saved copy preserves the exact active workout structure.

### Isolated builder
Create New Plan reuses the established Plan Builder as a temporary draft:
- Body-profile entry is skipped because body/identity data is global.
- Goal/experience, schedule, equipment/protected areas, exercise-avoid preferences and Plan Builder remain editable.
- Build Your Own ordering remains available.
- Cancel discards the draft.
- Active plan, cycle, logs, workout history, recovery and body data remain untouched while building.

### Final review
- **Save Only** stores the named plan and leaves the current workout active.
- **Save & Make Active** stores the plan, preserves the current plan, activates the new one, and begins at Week 1.

### Clear terminology
- Create New Plan = build another workout program.
- Regenerate Plan = rebuild the current active plan.
- Start New Training Cycle = keep the current plan and restart it at Week 1.

Saved plans remain part of the normal local JSON backup. Workout history and Progress analytics stay global across plans.


## v7.8.1 — Mobile Onboarding Bottom Actions Fix

Fixed the Create New Plan / onboarding bottom action bar on iPhone-sized screens.

- Cancel / Back and Continue now remain fully inside the viewport.
- The action bar uses a responsive two-column grid instead of allowing the Continue button to overflow.
- Both buttons are allowed to shrink correctly with `min-width: 0`.
- Horizontal overflow is clipped inside the action container.
- iPhone left/right/bottom safe-area insets are respected.
- Extra-tight handling is included for screens down to 360 CSS px.
- No Plan Builder, Saved Plan, programming, analytics, or data behavior changed.


## v7.8.2 — Mobile Onboarding Footer Rebuild

The v7.8.1 footer issue was caused by an older `!important` centering rule that continued to force the action bar to `left: 50%` with a horizontal transform.

v7.8.2 replaces that behavior with one definitive mobile rule:

- The action bar is anchored directly to the full onboarding viewport.
- Left and right edges are explicitly constrained inside the phone screen.
- The old `left: 50%` / translate centering behavior is overridden.
- Width is derived from the viewport edges rather than shrink-to-fit sizing.
- iPhone safe-area insets are respected.
- Cancel, Back and Continue use flexible widths with no text clipping.
- On Step 1, the unavailable Back button is removed from layout rather than merely made invisible.
- Later steps can show Cancel + Back + Continue without horizontal overflow.
- The fix is tested down to 320 CSS px.

No workout programming, Saved Plan, Create New Plan, exercise, analytics or stored-data behavior changed.

## v7.9.0 — Data protection, coaching evidence, and long-term utilities

- JSON export now records the **time an export was initiated**, displays a reminder after 3 completed sessions and 14 days without a recorded export, and explicitly asks you to verify the file exists. It cannot verify browser file downloads.
- JSON backup validation checks the profile, current plan, cycles, supported exercise IDs, history arrays and saved-plan structure without changing data. Import validates and then asks for explicit confirmation before replacing local data. Validation-only upload does not import.
- Completed-session, completed-set, recovery and body-measurement CSV exports. CSV is **not** a restorable backup. Historic set weight units may not be stored in earlier releases.
- Coach evidence inspector shows supporting session counts, recorded RPE coverage, qualifying fatigue signals and per-exercise trend samples. This is a rule audit, **not scientific validation or proof of training effectiveness**.
- Next unfinished exercise action and repeat-prior-completed-set prefill streamline logging; neither marks sets complete automatically.
- Named plans can be assigned optional dates and show **in-app** reminders when the app opens. Dates **never** automatically activate a plan and are not push notifications.
- Side-by-side descriptive saved-plan comparisons: days, target time, exercise overlap, prescribed sets and estimated muscle workload.
- Cycle comparison and eight calendar-week session-consistency display, including zero-session weeks. Cycles are displayed descriptively and cannot be directly interpreted as equally long or causally comparable.
- Existing 169 exercise visuals, programming rules, PWA behavior and local history retained.

To deploy: extract this archive over the repository root; commit and push with GitHub Desktop. Keep a separate JSON backup and verify the resulting file in iPhone Files before installing a new build. 


### Release verification and device check

The v7.9.0 package was tested in Chromium before this v7.9.1 profile-edit update. Those earlier tests verified new-feature controls, JSON import safeguards and a v7.8.2-format import, preserved saved-plan data, CSV download content, 320–390 CSS-pixel layouts, and the existing on-device reliability suite. It does **not** constitute a real iPhone Safari / Home Screen acceptance test, verification of your own historical backup, or proof the download reached your iPhone Files. A network-restricted test environment also prevented a live service-worker offline navigation test; the service-worker JavaScript passed syntax checking.

**Before updating:** Use your currently installed version’s Settings → Export JSON backup and independently locate the file in Files or another safe place. Keep the old v7.8.2 ZIP. Replace only app files in the GitHub repository root; never delete the `.git` directory or clear iPhone Safari website data / Home Screen app data. Once published, check your real iPhone: plan library, workout history, footer, app refresh and offline behaviour. CSV exports are for analysis only; restore requires the full JSON backup.


## v7.9.1 — Safe profile editing (focused correction)

- Settings → Edit profile now opens a concise personal-details editor instead of restarting six-step onboarding. Name, age, sex, preferred weight units and height can be updated or cancelled without touching the current exercise plan, week/cycle, workout logs, completed history, saved-plan library, body data, or unrelated optional metadata. Existing recorded weights are never relabeled or converted. Invalid entries are rejected; failed local-storage writes cannot adopt a partial update. Undo is available for saved edits.
- Settings → Training setup & priorities remains a separate, deliberate program workflow. It now exposes Cancel, requires an explicit regeneration confirmation, and keeps the existing cycle number/week, saved plans, history and body entries. Regeneration does clear in-progress log entries, and Undo is available. Changing the training cycle duration to less than the current week is blocked.
- Settings shows the selected weight preference and the last body measurement with its *recorded* unit (or unknown), not an assumed current unit. Historical training entries with absent units remain unknown.
- This patch retains all approved v7.9.0 features and artwork. The service-worker cache and backup filename are bumped. Verify a fresh full JSON backup exists before deployment; do not clear Safari/PWA website data. Actual iPhone testing remains the user's acceptance step.


## v7.9.2 — Explicit confirmation of historical workout units

- In Settings → Backup & transfer, review completed sessions missing their original weight-unit metadata. The app does not relabel them automatically based on your current preference.
- After exporting and independently locating a full JSON backup, select pounds or kilograms, check the explicit confirmation and approve the final dialog. Only sessions with genuinely missing/unknown units are labeled; previously recorded lb/kg or unrecognized metadata are untouched, and no numeric weights are converted.
- Every corrected session records user-confirmation provenance and timestamp. Unknown legacy records from future imports can be reviewed separately. Existing plan, cycle, current workout entries, saved plans, recovery, body measurements and unrelated metadata remain unchanged.
- This operation is not part of plan Undo, because plan Undo does not restore completed history. A mistaken historical-unit choice requires restoring the pre-correction JSON backup, which replaces current data. Make this correction only if all missing-unit sessions used the chosen unit.
- The update changes only index.html, sw.js, README.md versus v7.9.1; 169 exercise visuals, approved branding, the v7.8.2 mobile footer correction and existing v7.9.0 features remain intact. Real iPhone Safari/Home Screen acceptance and offline testing require a device.

## v7.9.3 — Focused commercial reliability audit and import protection

This is an incremental patch to v7.9.2; it does not change training algorithms, user records, approved visuals, onboarding, branding or the stable mobile footer.

- JSON backup validation now inspects nested in-progress workout logs (including saved-plan log snapshots), rather than checking only the top-level shape. Bad exercise set arrays and malformed nested records block import before any replacement.
- Validated import now retains the prior persisted data, in-memory data, current workout selection and Undo history if writing or rendering the replacement fails. It clears the previous Undo history only after the new data renders successfully. If restoration itself fails, an explicit warning explains the risk rather than falsely reporting that nothing changed.
- A service-worker navigation response with an HTTP error no longer replaces the last successful cached page. The cache identifier was bumped for this update.
- Backup filenames and visible app version now show v7.9.3. No customer workout data is shipped in the release ZIP.

**Test scope:** Source-level syntax, 15 targeted browser checks for nested backup corruption and transactional failures, 129 existing feature/browser checks, 74 profile-edit checks, 120 historical-unit checks, 16 supplemental checks, and the existing synthetic reliability suite (1,819 scenarios / 423,293 assertions). A mocked service-worker test checked HTTP error/success cache decisions. Mobile viewports were simulated in Chromium; this is not Safari/device confirmation.

**Still required for a commercial launch:** Real Safari/Home Screen/offline testing, customer-scale data and storage-quota testing, accessibility review, customer support/privacy/terms review, and an independent release acceptance process. This patch does **not** certify the app for sale. Do not clear iPhone website data or uninstall the Home Screen app to troubleshoot a version: that may erase local training data. Export and locate a full JSON backup before upgrading.

## v7.9.4 — Coach evidence accuracy (targeted correction)
- Corrected Coach Evidence's misleading RPE change of 0.0 when earlier completed sets lacked actual RPE. Now reports that an RPE comparison is unavailable; no historic sets are rewritten.
- Load/repetition improvement without complete RPE at both comparison endpoints no longer earns an effort-supported "Progressing" classification. The descriptive measured performance change remains visible.
- Progression advice identifies exactly which measured fields are missing (load, RPE, or both), and the workout suggestion no longer proposes increasing external load if a top-range session lacks actual load or measured RPE. Programmed target RPE is not treated as a recorded value.
- The always-available explanation disclosure is relabeled "Why this recommendation?"; it is not a warning or a historical-unit reminder.
- Profile, active program, saved plans, history, exercise artwork, and existing historical-unit confirmations are not modified by this release. Keep a verified JSON backup before upgrading. Real-device Safari acceptance remains required.

## v7.9.5 — Weekly coaching review and read-only completed-week history
- Clarifies the difference: Review recommendations is for optional manual plan decisions; Inspect coaching evidence explains the input and reasoning.
- Adds a confirmable **Dismiss This Week** control in the current week's review, with **Show this week's recommendations** to restore visibility. Dismissal never deletes recommendations, saved history, evidence or applied plan changes. Other weeks are unaffected.
- Adds a **View** button on completed-week rows under Program → Weekly review. Displays that week's saved workout sessions (including expandable completed sets) and any coaching summary captured at the time, read-only. The app does not manufacture retrospective advice when an older release did not save a snapshot.
- Captures an immutable compact coaching snapshot when advancing or finishing a week; preserves it independently of training-cycle changes and saved-plan activation. Older sessions with sufficient cycle/week association remain accessible as history-only; unlinked sessions are not attributed to a specific saved plan.
- The added archive and dismissals are ordinary local app state included in JSON backups. No remote data collection or automatic plan changes.
- Keep a verified JSON backup before publishing. iPhone Safari/Home Screen/offline acceptance remains a real-device task; do not clear website data.


## v7.9.6 — Backup wording and completed-unit notice cleanup

- Settings now says **Export Backup**. Backup reminders, historical confirmation, CSV help, import failure messages, and profile/program confirmation text avoid unexplained file-format terminology. Export and restore are still the same compatible full-data `.json` format. CSV exports remain separate analysis-only files.
- The historical-unit notice appears only if the customer's workout history has sessions with genuinely unspecified units. Once the correction is completed, the Settings notice disappears; the confirmation audit and original training data stay stored. It returns only if an older backup or new legacy records reintroduce missing units. Existing explicit lb/kg records are never changed by this display update.
- No workout plan, training history, saved plans, coach recommendations, artwork, or existing customer storage is migrated by this release. Service-worker cache and visible release version are incremented. Check a saved backup file exists before updating; real iPhone Safari testing remains a device acceptance step.


## v7.9.7
- Weekly review polish update.
- Completed-week cards now use a clearer "Week # Session(s)" heading while keeping the cycle number in the metadata line.
- Completed workout exercise rows now show a visible chevron so customers can see that each exercise can be expanded.
- No data model changes; preserves workout history, saved plans, and prior coaching snapshots.


## v7.9.8 — Explicit plan-switch choices and same-week workout protection

- Saved-plan activation (and Save & Make Active from Create New Plan) now requires choosing between **Continue CURRENT cycle at the existing week** and **Start NEW cycle at Week 1**. Existing **Resume this plan’s OLD saved cycle** remains available when the saved plan has an earlier stored cycle. No option is chosen automatically. A cancellation leaves the active plan unchanged.
- Before confirming, the app shows how many workouts were completed in the current week and how many exercise entries contain recorded or unfinished work. The old plan and its current-week entries are snapshotted. In-progress entries never transfer into unrelated exercise slots; returning to the same plan in the same week restores its own entries.
- Previously completed sessions remain in global history, retaining exact recorded weights, reps, effort, dates, cycle/week and original plan IDs. The Program page displays **Completed in current week** across plan switches. When a mixed-plan week closes, it produces one weekly review, preserves original plan attribution inside each workout, and avoids double-counting the week. Coach suggestions still reflect the active plan, while mixed weekly session counts include all plans.
- Current-cycle continuation retains original cycle number, week and six-week duration even if the incoming saved plan has a different cycle length; starting fresh uses the incoming plan’s own cycle duration. The user's choice is visible in the activation dialog before the exercise preview, including 320px mobile screens.
- Saved-plan **Schedule** remains a local, date-only reminder. Future/due dates and Save/Clear actions were exercised in headless Chromium. Schedule neither sends push notifications nor automatically switches the active plan. The date is cleared only after activation.
- LocalStorage failures during activation restore the previous in-memory state and report failure; completed history is not rewritten. Full JSON backup validation accepts the mixed-plan week metadata.

**Pre-deployment precautions:** This release was tested with synthetic data in headless Chromium (including a localStorage test shim); this is not a real-user-data test or iPhone Safari/Home Screen acceptance. Before replacing any files in GitHub, export a complete JSON backup using Settings → Export Backup and check the downloaded file exists outside the browser. Keep the previous v7.9.7 ZIP as rollback. Deploy only after testing the real device and verifying history, plan scheduling, and offline updates. Do not uninstall the app or clear browser website data to refresh it. Exercise artwork, icons and branding have not been modified.
