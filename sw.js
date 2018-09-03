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
//importScripts('/node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.2.js');


// Note: Ignore the error that Glitch raises about WorkboxSW being undefined.
 // const workbox = new WorkboxSW({
 //   skipWaiting: true,
 //   clientsClaim: true
 // });

// workbox.router.registerRoute(
//   new RegExp('^https://hacker-news.firebaseio.com'),
//   workbox.strategies.staleWhileRevalidate()
// );

/*self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open('kts-static-2').then(function(cache) {
        return cache.addAll(['/', '/app.js'])
      })
  )
});*/

// self.addEventListener('fetch', function(event) {

//  // if(event.request.url.endsWith('.jpg')){
//    //console.log(event.request)
//   event.respondWith(
//     caches.match(event.request).then(function(response){
//      // console.log(event.request)
//       if(response) return response
//         return fetch(event.request)
//     })
//   )
// });

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
    "revision": "3e0528d1a2f735ca46ca1c650cbd592e"
  },
  {
    "url": "static/js/app.8d66a6ec672a4dcca52e.js",
    "revision": "ee1634d2394678665edd9397c9cee5bd"
  },
  {
    "url": "static/js/manifest.2ae2e69a05c33dfc65f8.js",
    "revision": "4b63edaf2b684db252e004a67c66dcef"
  },
  {
    "url": "static/js/vendor.02703ed0375f212729cf.js",
    "revision": "a01fbcfa3b7afc883403f40f39ff4d4c"
  },
  {
    "url": "sw.js",
    "revision": "f5e03c1430fd38f31e7910c629918746"
  }
]);
