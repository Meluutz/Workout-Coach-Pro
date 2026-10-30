/* Workout Coach universal Masculine QA v4 — offline shell with explicit readiness diagnostics.
   This is a service-worker-only reliability change. App data and exercise cards are unchanged. */
const SHELL_CACHE = 'adaptive-workout-coach-v8-0-5-universal-qa4-shell';
const ASSET_CACHE = 'adaptive-workout-coach-universal-qa4-viewed-assets';
const SHELL_URL = new URL('./index.html', self.registration.scope).href;
const OPTIONAL_SHELL = [
  './offline-check.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './assets/branding/workout-coach-app-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    // One critical operation: an actual cached app shell is required to activate.
    // Optional icons/diagnostics are allowed to fail without blocking offline reload.
    const result = await fetch(new Request(SHELL_URL, { cache: 'reload' }));
    if (!result.ok) throw new Error('Cannot cache Workout Coach app shell: HTTP ' + result.status);
    await cache.put(SHELL_URL, result);
    await Promise.allSettled(OPTIONAL_SHELL.map(url => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    // Keep the prior QA cache for already-viewed guides during this test migration.
    // Avoid deleting previously cached images and avoid touching application data.
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const shellCache = await caches.open(SHELL_CACHE);
      try {
        const response = await fetch(request);
        if (!response.ok) throw new Error('Navigation HTTP ' + response.status);
        const isAppShell = url.pathname === new URL(self.registration.scope).pathname || url.pathname.endsWith('/index.html');
        if (isAppShell && (response.headers.get('content-type') || '').includes('text/html')) {
          event.waitUntil(shellCache.put(SHELL_URL, response.clone()).catch(() => {}));
        }
        return response;
      } catch (error) {
        // When offline, return the last working application HTML for app URLs.
        const requestedDiagnostic = url.pathname.endsWith('/offline-check.html');
        if (requestedDiagnostic) {
          const diag = await shellCache.match(new URL('./offline-check.html', self.registration.scope).href);
          if (diag) return diag;
        }
        const saved = await shellCache.match(SHELL_URL);
        if (saved) return saved;
        return new Response('Workout Coach is not cached for offline use. Reconnect and open the app once.',
          { status: 503, headers: {'Content-Type':'text/plain; charset=utf-8'} });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    // Existing images are kept after the old cache version: allow cache-first
    // only for /assets/ and icons. HTML/service worker updates stay network-first.
    const isAsset = url.pathname.includes('/assets/') || /\.(?:png|jpg|jpeg|webp|svg|ico)$/i.test(url.pathname);
    if (isAsset) {
      const old = await caches.match(request);
      if (old) return old;
    }
    try {
      const response = await fetch(request);
      if (isAsset && response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(ASSET_CACHE).then(c => c.put(request, copy)).catch(() => {}));
      }
      return response;
    } catch(error) {
      const fallback = await caches.match(request);
      return fallback || new Response('Offline resource not previously viewed', {status: 503});
    }
  })());
});
