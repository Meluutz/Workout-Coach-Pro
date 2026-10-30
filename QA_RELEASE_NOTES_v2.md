# Workout Coach — Universal Masculine QA Candidate v2 (11 October 2026)

**This ZIP is for QA only. Do not overwrite the working app or publish to GitHub Pages yet.**

### Confirmed
- Built from the accepted v8.0.5 PWA source, retaining the flat GitHub Pages ZIP root.
- 169 exercise IDs mapped one-to-one to 169 individual approved/recovered image files. File SHA-256 values match the manifest; all PNGs decode.
- 129 previously verified approved cards unchanged. 40 recovered candidate cards (#071–110) retained with explicit provenance uncertainty.
- All users, regardless of gender/profile preferences, get the universal Masculine exercise guide.
- Both Exercise Details and quick Exercise Visual open the full guide; list thumbnails stay light for navigation/performance.
- Guide image uses natural height and no cover cropping. #148 clean derivative replaces the obsolete footer only.
- No changes to exercise IDs, storage APIs, profile, saved-plan, logging, backup or timer function interfaces. Original source data files remain byte-identical except intended HTML/JS and SW cache version.
- Isolated-browser QA at 360, 390, 430 and 1200 CSS pixels: 13 targeted cards per viewport, decoded images and no horizontal page overflow or JS errors. Browser uses mocked storage; this is not a true device PWA test.

### HOLD / Release gates
1. 40 recovered card files from Batches 8–11 are not demonstrated bit-for-bit identical to the final user-visible approvals. #096, #097, #099, #105 need the strongest provenance attention. Do not silently call final version proven.
2. 66 low-resolution original cards need human legibility validation at phone size; scripted image loading cannot guarantee text legibility. #116 last Key Point requires scroll; no destructive image crop is allowed.
3. Actual on-device installed PWA tests: offline refresh after first online visit, update, image load, 360–430px scroll, keyboard/navigation, Android/iPhone, and real profile choices.
4. Before any approved real deployment: use **Export Backup**, verify saved backup, test import/restore on an isolated copy, preserve GitHub `.git` and flat ZIP structure.

### Install status
Not installed, not published, not production-ready. Your current app and workouts remain unchanged.
