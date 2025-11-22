const CACHE_NAME = "invoice-cache-v12";

const ASSETS = [
  "index.html",
  "manifest.json",
  "service-worker.js",
  "icon-192x192.png",
  "icon-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});