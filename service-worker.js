const CACHE_NAME = 'site-cache-v4';
const STATIC_EXTENSIONS = /\.(?:css|js|svg|png|jpg|jpeg|gif|webp|ico|woff2?)$/i;

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isStaticAsset = STATIC_EXTENSIONS.test(url.pathname);

  event.respondWith(
    fetch(request)
      .then(networkResponse => {
        if (networkResponse.ok && isStaticAsset) {
          const cloned = networkResponse.clone();
          event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(request, cloned)));
        }
        return networkResponse;
      })
      .catch(() => caches.match(request))
  );
});
