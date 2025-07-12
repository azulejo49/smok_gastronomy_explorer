const CACHE_NAME = 'smok-gastronomy-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.jsx',
  // Add all asset URLs here
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
// This service worker caches the essential files for offline use
// and serves them when the network is unavailable or slow.