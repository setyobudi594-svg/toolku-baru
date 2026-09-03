const CACHE_NAME = "toolku-v1";

const FILES = [
    "./",
    "./index.html",
    "./kalkulator.html",
    "./qrcode.html",
    "./resize.html",
    "./password.html",
    "./catatan.html",
    "./manifest.json",
    "./icon.svg",
    "./icon-192.png",
    "./icon-512.png",
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached || fetch(event.request);
        })
    );
});
