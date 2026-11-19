/* UXK service worker — offline shell for the installable app */
var CACHE = 'uxk-v4';
var CORE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/img/icon-192.png',
  '/assets/img/icon-512.png',
  '/assets/img/logo-uxk-mapleleaf-white.jpg'
];
self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(CORE); }).then(function(){ return self.skipWaiting(); })
  );
});
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});
function isPageRequest(req){
  if(req.mode === 'navigate') return true;
  try {
    var p = new URL(req.url).pathname;
    return p === '/' || p.endsWith('/index.html');
  } catch(err){ return false; }
}
self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  if(isPageRequest(e.request)){
    // network-first for pages: visitors always see the latest site
    e.respondWith(
      fetch(e.request).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return res;
      }).catch(function(){
        return caches.match(e.request).then(function(hit){ return hit || caches.match('/index.html'); });
      })
    );
    return;
  }
  // cache-first for assets (images, css, js)
  e.respondWith(
    caches.match(e.request).then(function(hit){
      return hit || fetch(e.request).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return res;
      }).catch(function(){ return caches.match('/index.html'); });
    })
  );
});
