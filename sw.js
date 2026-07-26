// UCN Portal service worker.
//
// The portal is one page whose CSS, script, and logo are all inlined, so the
// entire offline shell is index.html itself. Everything the cards link to is
// cross-origin and is deliberately left alone: those requests go straight to
// the network and simply fail when offline, which is the honest outcome for a
// portal whose job is to link elsewhere.

const CACHE = 'ucn-portal-v1';
const SHELL = './index.html';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.add(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if(request.method !== 'GET') return;
  if(new URL(request.url).origin !== self.location.origin) return;

  // Network first, so a redeployed portal is picked up on the next online
  // visit rather than being pinned to whatever was cached at install time.
  event.respondWith(
    fetch(request)
      .then(response => {
        if(response.ok){
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request).then(hit => hit || caches.match(SHELL)))
  );
});
