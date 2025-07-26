const CACHE_NAME = 'smok-gastronomy-v1'; // Increment version for updates

const urlsToCache = [
  '/', // root
  '/index.html',
  '/manifest.json',
  '/vite.svg',
  '/styles.css',
  '/src/main.jsx',
  // Components (if served separately)
  '/src/components/CategorySelection.jsx',
  '/src/components/CookingStage.jsx',
  '/src/components/IngredientCard.jsx',
  '/src/components/PlayerSelection.jsx',
  // Data
  '/src/data/ingredients.js',
  // Images
  '/images/amiramcar.jpg',
  '/images/blacktruff.jpg',
  '/images/blacktruff1.jpg',
  '/images/hilacar.jpg',
  '/images/kitchen.jpg',
  '/images/kitchen1.jpg',
  '/images/lavicar.jpg',
  '/images/marley.jpg',
  '/images/oricar.jpg',
  '/images/placeholder.jpg',
  '/images/shcar.jpg',
  '/images/smok.jpg',
  '/images/whitetruff.jpg',
  '/images/whitetruff2.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (!cacheWhitelist.includes(name)) {
            return caches.delete(name);
          }
        })
      )
    )
  );
});

// Fetch handler with special handling for images
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Handle images with runtime caching
  if (url.pathname.startsWith('/images/')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          if (cachedResponse) return cachedResponse;

          // Fetch from network and cache response
          return fetch(event.request).then(networkResponse => {
            if (networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Optional: return fallback image if offline
            // return caches.match('/images/placeholder.jpg');
          });
        });
      })
    );
    return;
  }

  // For other requests, serve from cache if available
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;

      // If not in cache, fetch from network
      return fetch(event.request).then(networkResponse => {
        // Cache other assets dynamically if needed
        // For example, cache fetched HTML pages or JSON data
        // But be cautious with cache size
        return networkResponse;
      }).catch(() => {
        // Optional: fallback responses for offline
        // if (event.request.destination === 'document') {
        //   return caches.match('/index.html');
        // }
      });
    })
  );
});