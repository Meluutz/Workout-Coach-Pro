# Adaptive Workout Coach — v6.3.1

## New in v6
- 4 / 6 / 8 week training-block engine
- Week and phase tracking
- Automatic final-week deload prescription
- Manual +1 / -1 rep controls
- Manual + / - set controls
- Full target editing for sets, rep range, RPE, and optional load
- Original program target remains separate from user-adjusted target
- Actual performance remains separate from both
- "Why?" explanations for coaching recommendations
- PR detection using estimated 1RM
- Bodyweight and optional waist/chest/arm/thigh tracking
- Bodyweight trend sparkline
- Approximate muscle-group weekly volume dashboard
- Weekly summaries and cycle progression
- Smarter progression using performance + RPE + recovery
- Exercise swapping
- Backup export/import
- v5 local data migration where possible
- Local-first PWA; no accounts, analytics, trackers, or cloud database

## Deploy on GitHub Pages
Upload/overwrite these six files in the repository root:
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png
- README.md

After deployment, open in a Private/Incognito tab once and confirm Settings says:
Adaptive Workout Coach — v6.3

## Notes
The protected-area filters and recovery logic are conservative training rules, not medical diagnosis or rehabilitation programming.
The visual workout boards are reference graphics and may not exactly match a personalized or swapped exercise list.


## v6.0.1
- User-facing term 'mesocycle' replaced with 'training block'.
- All other behavior and terminology remain unchanged.


## v6.1 — Plan safety
- Undo last plan-changing action
- Redo an undone action
- Keeps up to 12 recent local plan snapshots
- Confirmation before advancing to the next week
- Advance-week actions are undoable
- Plan regeneration is undoable
- Starting a new training block is undoable
- Exercise swaps are undoable
- Manual rep/set/target changes are undoable
- Profile edits that regenerate the plan are undoable
- Undo history is stored locally on the device


## v6.2 — Better onboarding, scheduling and exact visuals
- Fixed desktop dark-mode native dropdown readability
- Users choose the exact weekdays they want to train
- Added Change workout days without regenerating exercises
- Added age (optional)
- Added sex (optional)
- Added height with cm or feet/inches
- Added bodyweight entry during onboarding
- Added optional starting waist, chest, arm and thigh measurements
- Starting body data is automatically added to Progress
- Bodyweight can now be used for relative-strength display
- Profile summary shows selected workout days and basic body profile
- Generated plans use the user's selected weekdays instead of fixed defaults
- Dynamic exercise visuals are tied to the exact exercise ID
- Exercise swaps immediately change the visual
- If an exact image is unavailable, the app explicitly says so instead of showing the wrong exercise
- Retains v6.1 undo/redo protections


## v6.3 — Uniform visual library expansion
- Integrated the new uniform exercise-card visual system
- Added exact visuals for Push-Up, Pike Push-Up, Bodyweight Squat, Reverse Lunge, Glute Bridge, Plank, and Dead Bug
- Replaced Bulgarian Split Squat and Standing Calf Raise with the new uniform visual style
- Existing exact gym visuals remain available while the library transitions to the new uniform style
- Added a visual-library coverage meter in Settings
- Added a visual browser showing every exercise that currently has an exact match
- Removed the obsolete full-day poster blobs from the app because generated plans now use exact exercise visuals
- Exact-match rule remains: the app never shows another exercise's image as a substitute
- Female and neutral avatar variants are planned for a later visual expansion once the exercise coverage is broader
