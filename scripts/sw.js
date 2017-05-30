self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('kdct').then(function (cache) {
            return cache.addAll([
                '/',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
console.log(event.request.url);
});