'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "42aa336308ec9023520d7f9c6b6851ac",
"index.html": "9bd99ac06481023f731633651ccb82bf",
"/": "9bd99ac06481023f731633651ccb82bf",
"main.dart.js": "d14f8e5f06b3ba1436defb1e0b1409e0",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"kFav.png": "82bfb12935e3536a0ff9a928c626b03e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-chrome-192x192.png": "82bfb12935e3536a0ff9a928c626b03e",
"icons/apple-touch-icon.png": "6c055e3669b88ef8fc10858b496ea46d",
"icons/android-chrome-512x512.png": "90b24686fe036aeeab0a07a91fbbb09b",
"manifest.json": "9eab22a902cbf8b397dd5c138b0972a5",
"assets/AssetManifest.json": "e812050779ce3818be926e75c2a4f26e",
"assets/NOTICES": "116d1de8b31ffcc577c78d6f1c15eddf",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d5dec09a73f6d15744d59ae780e35dda",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/news.png": "c6edca363b13432c4c65d44e6a1234d8",
"assets/assets/images/bmi.png": "f8ac3768c3284035efed4e44811a0951",
"assets/assets/images/sophia.png": "7a3d6af2ee6bb228fed9cbeb2f1cb2d4",
"assets/assets/images/flutter.png": "e038d7f55d1c679d7b74a87b6787b6ea",
"assets/assets/images/github.png": "f97760aa21327cb7cc4372a150bea1e9",
"assets/assets/images/kafipic1.png": "c2a1d7f4d1ee6ba02fd4b44dcd581374",
"assets/assets/images/javascript.png": "46de5318386c730f3a38a33b11cf8f7c",
"assets/assets/images/fitjerk.png": "71c6dff0815883aac9730016d1573663",
"assets/assets/images/figma.png": "ac00fa7b6768286ad44283e4595dd07e",
"assets/assets/images/weather.png": "686326eead999c6b77b08c42add031a9",
"assets/assets/images/android_studio.png": "dedd949944495c85fb1d576de85b00f7",
"assets/assets/images/html.png": "09800c5ea7e0b16837231f754496db60",
"assets/assets/images/web_back.png": "ab8333b18ecc5c329a51ca1e5a8a7fa6",
"assets/assets/images/c++.png": "9a8cab1ad802c5bf12287d09d01b6bc2",
"assets/assets/images/vs_code.png": "a78dfa30bc7f1e6e652284bdd386d0d6",
"assets/assets/images/c.png": "d9d7fbb6e581564bc1fba82f2fda2c5f",
"assets/assets/images/firebse.png": "b1a9fcb59a6647f8db3966582274a6fd",
"assets/assets/images/css.png": "19a8c513ed1abf359d4f46b965ed1b24",
"assets/assets/images/dart.png": "46ad04c0027a82e0b177aa66308ca9d1",
"assets/assets/images/flutterflow.png": "a68e86a2f8032298c9974a0a3d59c28c",
"assets/assets/images/batch_icon.png": "e4691e31e4a7b6fe1b94d210fcf9b394",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
