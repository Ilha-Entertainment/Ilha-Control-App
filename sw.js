const CACHE_NAME = "ilha-control-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch("/p/painel.html").catch(() => caches.match("/p/painel.html"))
    );
  }
});
