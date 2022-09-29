var staticCacheName = "pwa"; 

self.addEventListener("install", function (e) { 
  e.waitUntil( 
    caches.open(staticCacheName).then(function (cache) { 
      return cache.addAll(["/"]); 
    }) 
  ); 
}); 
  
self.addEventListener("fetch", function (event) { 
  console.log(event.request.url); 
  
  event.respondWith( 
    caches.match(event.request).then(function (response) { 
      return response || fetch(event.request); 
    }) 
  ); 
});

caches.open("pwa-assets")
.then(cache => {
  cache.add("styles.css"); // it stores only one resource
  cache.addAll(["styles.css", "app.js"]); // it stores two resources
});