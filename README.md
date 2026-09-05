# Workout Coach Pro — Clean build v4.1

This is a complete clean rebuild for GitHub Pages.

## IMPORTANT: replace the old repository completely

For the cleanest install:

1. In your GitHub repository, delete the old app files.
2. Upload ONLY these 6 files from this package:
   - index.html
   - manifest.webmanifest
   - sw.js
   - icon-192.png
   - icon-512.png
   - README.md
3. Commit the changes.
4. In Settings → Pages, keep:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /(root)
5. Wait for GitHub Pages to finish deploying.
6. Open the site in a Private/Incognito window first.
7. Confirm the Settings page says: "Workout Coach Pro — Clean build v4.1".

## Why this build should be more reliable

- All app CSS is inside index.html.
- All app JavaScript is inside index.html.
- All exercise illustrations are embedded directly inside index.html.
- There is no app.js, styles.css, or img folder.
- The service worker uses network-first navigation so future updates are less likely to get stuck behind an old cached page.
- The service worker deletes older caches when activated.

## Privacy

The app has:
- no analytics
- no ads
- no tracking scripts
- no login
- no cloud database
- no external exercise image requests

Workout logs are stored in the browser's local storage on the device.


## v4.1 fix
v4.1 fixes a JavaScript parsing bug in the HTML escaping helper that prevented the app from initializing.
Symptoms of the old bug included:
- blank session title
- no exercise cards
- buttons/tabs not responding

The service-worker cache version was also changed so browsers will fetch the corrected build.
