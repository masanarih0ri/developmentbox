'use strict';

var cacheVersion = 1;
var currentCache = {
  offiline: 'offiline-cache' + cacheVersion
};

const offilineUrl = 'offiline-page.html';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offiline)
    .then(function(cache){
      return cache.addAll([
        './img/offiline.svg',
        offilineUrl
      ]);
    })
  );
});
