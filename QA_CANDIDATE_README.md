# Workout Coach v8.0.5 — Universal Masculine Cards QA Candidate

**NOT APPROVED FOR DEPLOYMENT. DO NOT INSTALL OR PUBLISH THIS ZIP.**

This is a code-integration/preflight candidate based on the protected v8.0.5 PWA source. It does not change any real user data or existing production app.

## Decisions applied
- One universal approved Masculine guide for each of the 169 exercise IDs, shown to every profile irrespective of gender.
- The old gender-avatar selection controls are hidden but saved profile values are neither deleted nor rewritten. This permits a future optional Feminine expansion. Neutral and Original are not active styles.
- Legacy exercise thumbnails remain lightweight and male; tapping Exercise Details opens the full approved guide card.
- Each guide image is shown with `width:100%;height:auto;object-fit:contain`, avoiding container-induced cropping of anatomy, Start/Finish and five Key Points.
- Exercise IDs, plan algorithm, workouts, rest-timer code, progress, history, backup/export and storage keys are unchanged.
- Flat PWA root preserved: index.html, sw.js, manifest.webmanifest and app assets.
- Service-worker cache version incremented, with **on-demand** guide asset caching only. For first offline use, a guide must have been opened successfully online; guide assets are not forcibly precached en masse.

## Open release gates
1. 40 recovered cards from Batches 8–11 still require exact-final-revision verification. Especially #096 Cable Woodchop, #097 Farmer's Carry, #099 Dumbbell Pullover, #105 Decline Bench Press.
2. 66 cards have narrow source resolution; mobile readability must be tested on an actual phone, not inferred from image integrity.
3. Browser smoke tests here are not a substitute for real iPhone Safari / PWA / Android tests.
4. This PWA ZIP is a **QA candidate**, not an authorized replacement for the user's production build. Export Backup before any later explicitly approved deployment.
5. Existing app state remains local to the installed browser/PWA and must not be replaced or reset. Do not edit storage keys.

## Files
- `assets/approved-masculine-guides/` has 169 complete per-exercise PNG cards.
- `MASCULINE_GUIDE_ASSET_MAP.csv` provides exact ID-to-file mapping, hashes and recovery provenance.
- `index.html` / `app_inline.js` include integration changes; `sw.js` has a new cache version.

### Safe deployment (after user validation)
Export Backup, confirm the file saved, extract to a separate folder, keep original GitHub repo / .git intact, review the changed files, and only then publish an approved flat-root ZIP; test the app in GitHub Pages before a real workout.
