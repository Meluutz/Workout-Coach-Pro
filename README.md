# Adaptive Workout Coach — v6.1.1

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
Adaptive Workout Coach — v6.1

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
