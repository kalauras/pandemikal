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
    "revision": "0ea415968b2b8681814108e864af1c8e"
  },
  {
    "url": "/static/js/app.0d3b1e8bbdde703934cf.js",
    "revision": "3cc11e4306d68f8d8d6d5f1b7a98ba42"
  },
  {
    "url": "/static/js/manifest.c2cc0b77eac10636d341.js",
    "revision": "a37641d422779b7921a2a46c0dfd461b"
  },
  {
    "url": "/static/js/vendor.3d4896a5a692a9bf8a4a.js",
    "revision": "934cae66f8adbbc16529f28cd2ef3a8e"
  },
  {
    "url": "sw.js",
    "revision": "cd2376d78e139e91c79c4e180386664d"
  }
]);
