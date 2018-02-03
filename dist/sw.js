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

workbox.precache([
  {
    "url": "/index.html",
    "revision": "705ef3a4e8d5e93c109971b2c96e90c3"
  },
  {
    "url": "/static/js/app.e7e0ff7d207f566492b0.js",
    "revision": "a298c9825d9ddc75bd6eb53bdb1da70a"
  },
  {
    "url": "/static/js/manifest.d46a9fe00244453fd3cf.js",
    "revision": "01f7a02566af2130493360f1389dfbc4"
  },
  {
    "url": "/static/js/vendor.3d4896a5a692a9bf8a4a.js",
    "revision": "934cae66f8adbbc16529f28cd2ef3a8e"
  },
  {
    "url": "sw.js",
    "revision": "441e9d763256f9866cc17000ed0d0a60"
  }
]);
