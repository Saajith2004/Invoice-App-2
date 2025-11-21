const CACHE_NAME = "invoice-cache-v2";

const ASSETS = [
  "invoice_app.html",
  "manifest.json",
  "service-worker.js",
  "logo.png"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});