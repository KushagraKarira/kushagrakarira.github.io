const CACHE_NAME = 'site-cache-v2';
const STATIC_EXTENSIONS = /\.(?:css|js|svg|png|jpg|jpeg|gif|webp|ico|woff2?)$/i;

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isStaticAsset = STATIC_EXTENSIONS.test(url.pathname);

  event.respondWith(
    caches.match(request).then(cachedResponse => {
      const networkFetch = fetch(request)
        .then(networkResponse => {
          if (networkResponse.ok && isStaticAsset) {
            const cloned = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, cloned));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || networkFetch;
    })
  );
});
