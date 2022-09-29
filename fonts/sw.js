importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
	  console.log(`Yay! Workbox is loaded 🎉`);

	  workbox.precaching.precacheAndRoute([
  {
    "url": "Inter-italic.var.woff2",
    "revision": "719d055cd008e4cbd419efd787ff80ef"
  },
  {
    "url": "Inter.var.woff2",
    "revision": "219c5ba061f7f718d70e4f6e2f63ae4e"
  }
]);

} else {
	  console.log(`Boo! Workbox didn't load 😬`);
}
