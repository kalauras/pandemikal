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

/*self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open('kts-static-2').then(function(cache) {
        return cache.addAll(['/', '/app.js'])
      })
  )
});*/

self.addEventListener('fetch', function(event) {

 // if(event.request.url.endsWith('.jpg')){
   //console.log(event.request)
  event.respondWith(
    caches.match(event.request).then(function(response){
     // console.log(event.request)
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
    "revision": "396f9da0669e2d253cc2f12039905466"
  },
  {
    "url": "static/js/app.b83f1dc7f66dad49b28e.js",
    "revision": "9ea12aa0b6fa51d09cb3fb736aa7ec10"
  },
  {
    "url": "static/js/manifest.2ae2e69a05c33dfc65f8.js",
    "revision": "4b63edaf2b684db252e004a67c66dcef"
  },
  {
    "url": "static/js/vendor.bdac4eb99dd503322fb4.js",
    "revision": "0093bf6270edd2f9e34cfcf494a7a005"
  },
  {
    "url": "sw.js",
    "revision": "9e030616b317d14375d874b14f1315e5"
  }
]);
