const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'sw.js'
  // Bạn có thể thêm các file CSS, JS hoặc hình ảnh khác cần cache
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
