# Adaptive Workout Coach v5.1

A local-first adaptive workout app for multiple users.

## Major features
- First-run onboarding
- Automatic 2–6 day workout generation
- Equipment-aware exercise selection
- Basic limitation-aware filtering
- Dynamic exercise swapping
- Set / reps / weight / RPE logging
- Recovery check-ins
- Automatic progression recommendations based on prior performance + readiness
- Workout history
- Exercise library
- Embedded polished visual boards for Upper / Lower / Full Body reference days
- Export backup
- PWA install support
- No account, analytics, trackers, or cloud database

## GitHub Pages
Upload all 6 files to the repository root:
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png
- README.md

Then use Settings → Pages → Deploy from a branch → main → /(root).

Open in a Private/Incognito tab first after deployment and confirm Settings shows:
Adaptive Workout Coach — v5.1

## Important
The limitation filters are conservative exercise-selection rules, not medical advice or rehabilitation programming.


## v5.1
- Added backup import.
- Protection filters no longer fall back to exercises tagged for a protected area when no safe candidate exists.
