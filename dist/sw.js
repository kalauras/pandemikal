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
    "revision": "4c8eed1651a89fe0a13347b1c1d607e9"
  },
  {
    "url": "/static/js/app.e228561bdcd88d9265a5.js",
    "revision": "72e5b1e4c264d936d66959e998283cc8"
  },
  {
    "url": "/static/js/manifest.2ae2e69a05c33dfc65f8.js",
    "revision": "4b63edaf2b684db252e004a67c66dcef"
  },
  {
    "url": "/static/js/vendor.248bfeb07a6bd4838d10.js",
    "revision": "9b433c9b33199106e033c42166fe4cec"
  },
  {
    "url": "sw.js",
    "revision": "f350364d2f2c688683843b8163bf71c2"
  }
]);
