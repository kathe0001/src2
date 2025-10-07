self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-GMK-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icone-192.png",
        "icone-512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});