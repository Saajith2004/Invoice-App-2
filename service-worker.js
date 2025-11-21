const CACHE_NAME = "invoice-cache-v3";

const ASSETS = [
  "/Invoice-App-2/invoice_app.html",
  "/Invoice-App-2/manifest.json",
  "/Invoice-App-2/service-worker.js",
  "/Invoice-App-2/invoice-icon-192.png",
  "/Invoice-App-2/invoice-icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});