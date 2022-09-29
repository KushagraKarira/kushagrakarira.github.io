if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceworker.js',{scope: '.'}).then(function(registration) {
      // Registration
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Listen for request events
self.addEventListener('fetch', function (event) {

  // Get the request
  let request = event.request;

  // Bug fix
  // https://stackoverflow.com/a/49719964
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

  // HTML files
  // Network-first
  if (request.headers.get('Accept').includes('text/html')) {
    // Handle HTML files...
    return;
  }

  // CSS & JavaScript
  // Offline-first
  if (request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript')) {
    // Handle CSS and JavaScript files...
    	event.respondWith(
    	fetch(request).then(function (response) {
    	return response;
    	}).catch(function (error) {
    	return caches.match(request).then(function (response) {
    	return response;
    });
  })
);
    return;
  }

  // Images
  // Offline-first
  if (request.headers.get('Accept').includes('image')) {
    // Handle images...
  }

});

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open('app'));
});