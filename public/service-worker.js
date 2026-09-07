const CACHE_NAME = "toolku-v4";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./splash.css",
    "./bottom-nav.css",
    "./service-worker.js",
    "./kalkulator.html",
    "./qrcode.html",
    "./catatan.html",
    "./password.html",
    "./resize.html",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
