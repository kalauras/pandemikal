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
    "revision": "247c8ec703ff10afdc9f5bd82786fc92"
  },
  {
    "url": "places/index.html",
    "revision": "ab63b657a10e6d276ec2bfa869a1588d"
  },
  {
    "url": "signin/index.html",
    "revision": "61ab59ae8a85aaaff88d69e554460a43"
  },
  {
    "url": "/static/js/app.3e4b6b82e029c550504a.js",
    "revision": "e4d925daf5b7899fe783c9765d65f6ea"
  },
  {
    "url": "/static/js/manifest.2ae2e69a05c33dfc65f8.js",
    "revision": "4b63edaf2b684db252e004a67c66dcef"
  },
  {
    "url": "/static/js/vendor.02703ed0375f212729cf.js",
    "revision": "a01fbcfa3b7afc883403f40f39ff4d4c"
  },
  {
    "url": "sw.js",
    "revision": "dfc85f6690eff323829940ade81e02bc"
  }
]);
