const CACHE='adaptive-workout-coach-v7-6-4-build-your-own-reorder';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./assets/branding/workout-coach-app-icon.png'];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  if(e.request.mode==='navigate'){
    e.respondWith(
      fetch(e.request).then(r=>{
        const cp=r.clone();
        caches.open(CACHE).then(c=>c.put('./index.html',cp));
        return r;
      }).catch(()=>caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
      if(r && r.ok && new URL(e.request.url).origin===self.location.origin){
        const cp=r.clone();
        caches.open(CACHE).then(c=>c.put(e.request,cp));
      }
      return r;
    }))
  );
});
