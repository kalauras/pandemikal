/*importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([{
  url: '/',
  revision: '43011922c2aef5ed5ee3731b11d3c2cb',
},
{
  url: 'app.js',
  revision: '43011922c2aef5ed5ee3755b11d3c2cb',
}]);
*/
/*



  */
    /*event.respondWith(
      fetch(event.request).then(function(response) {
        if(response.status == 404){
          return new Response("Pagina non trovata! SW")
        }
        return response;

      }).catch(function() {
        return new Response("Qualcosa non va")
      })
)*/
 // }
    //console.log(event.request);
//});


// TODO: Replace Xs.
importScripts('/node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.2.js');


// Note: Ignore the error that Glitch raises about WorkboxSW being undefined.
 const workbox = new WorkboxSW({
   skipWaiting: true,
   clientsClaim: true
 });

// workbox.router.registerRoute(
//   new RegExp('^https://hacker-news.firebaseio.com'),
//   workbox.strategies.staleWhileRevalidate()
// );

self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open('kts-static-2').then(function(cache) {
        return cache.addAll(['/', '/app.js'])
      })
  )
});

self.addEventListener('fetch', function(event) {

 // if(event.request.url.endsWith('.jpg')){
   console.log(event.request)
  event.respondWith(
    caches.match(event.request).then(function(response){
      console.log(event.request)
      if(response) return response
        return fetch(event.request)
    })
  )
});

// self.addEventListener('push', (event) => {
//   const title = 'Get Started With Workbox';
//   const options = {
//     body: event.data.text()
//   };
//   event.waitUntil(self.registration.showNotification(title, options));
// });

//workbox.precache([
  {
    "url": "/index.html",
    "revision": "d3bde81eedf0830ab0f09b1e2e8da69c"
  },
  {
    "url": "static/js/app.53c165de673be7ddc570.js",
    "revision": "c375e959eb711b591a26388b66cfa8f2"
  },
  {
    "url": "static/js/manifest.7028b36a4e376edcaf1c.js",
    "revision": "aec4cbe04ce4fddedfa297370515cbb8"
  },
  {
    "url": "static/js/vendor.3d4896a5a692a9bf8a4a.js",
    "revision": "934cae66f8adbbc16529f28cd2ef3a8e"
  },
  {
    "url": "sw.js",
    "revision": "6b60fce467c5395952653c20df7f0135"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
