'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "42aa336308ec9023520d7f9c6b6851ac",
"index.html": "58784b663c984da8fb957a6459ae7102",
"/": "58784b663c984da8fb957a6459ae7102",
"main.dart.js": "9230b26c56b5dd94192b786eb453d831",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"kFav.png": "82bfb12935e3536a0ff9a928c626b03e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-chrome-192x192.png": "82bfb12935e3536a0ff9a928c626b03e",
"icons/apple-touch-icon.png": "6c055e3669b88ef8fc10858b496ea46d",
"icons/android-chrome-512x512.png": "90b24686fe036aeeab0a07a91fbbb09b",
"manifest.json": "9eab22a902cbf8b397dd5c138b0972a5",
".git/config": "9c5ef81d9d6e5d67ddfcaef32b02ec25",
".git/objects/0c/1fcda83239b5c640744911995a947daca052ca": "882c5d72882b7682b90701df971541cf",
".git/objects/66/394f4296db6a1ca60fb25c0525e2fc40d3678e": "8d3226da8c71d7027a6370b2f6fbe588",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/24d5b4ddcc6c6c0af888db222bd08807748955": "cb76f28b7fb03587c352111387feef5b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/2f2539592a7ac007e8120a3181093abdf86a2d": "5f5ddd0462fbb116d1843f8e86441cc1",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/96693a25f7735c5bbe33956bf5363626a5dd20": "a7b28dc7151beeb16405c633a724c722",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/33/d16703a9845b33fb26d90993b29f9a85c832f8": "69e4ba8c5991b024bc06097f6b75b5cc",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/da/0c91a2a52e1d76a91fbebcf27d872611ddb20b": "25f19e523d57fb6e02db0fe3db66c385",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/d6/bb158e2eb10230cf808d85dbb8d352f45fa254": "d65e4835bfe5e68473c5b46e7e9731e2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/f866bc5b3fc5347bb24122bc48d9250b1dda3e": "e70785b29519f85055073ac5bd146d4a",
".git/objects/c0/6b83f604c50583be6861eddc9c375bcb8e2ac7": "82b38a9ea867ba38017d03c5d7da1783",
".git/objects/fd/cb09ad0a65c3e1e52658e1bf4552d11152eb62": "612973b6e4f4ca469708201adf746a5e",
".git/objects/fb/d00a66a4dbb84e3b0420b4c5a075b162c5a57c": "4c8204cec9d25a65cd834fc29c47af69",
".git/objects/c1/c436cdc4b6b681231fbbc34ae2e2da0a4832fc": "c6be51016f75534b8b47b8bae429913f",
".git/objects/4b/c90dd858c2bf4e9fcb30fb21d98e90099bf97d": "f2fb1c7fa8862bf0866902b95b5926e2",
".git/objects/7d/b8c815c82f2dacc87243440a4d88a953f9c08c": "3fc36853dda000ed31c88c919d4d442a",
".git/objects/45/44be56f3d9352af74ed6b60dcbe0c77753b6ea": "ee5d59843d84f5dbb9b934d5b87b9ec9",
".git/objects/80/be5eeb056ce9ba2f38d5af8eed6c0366e23869": "45fad1d31104d37925153d511714345a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/72/2f869143834533d46b047ca56753af910f0343": "f47c5ca6f684b6e6618c27d51608af25",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "a9fb51cae679171f05785b992660ebdf",
".git/objects/6b/5b44f7fa3a5ca799fc50a33bee767dcb043193": "3bfc7a1fddb131262121628de86f3630",
".git/objects/07/8afe6e10753f3a5213afe18fb69e789653e992": "77b1dc91581f760be10b48a676b3b9e0",
".git/objects/31/b80ddaeb2b77dd024e385ca2b871173e04ce40": "5a6c8c36de2ae5a581a92b7e34109f2b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/98/90867f31d6ef058c3bcb67929ad3c61b788d60": "97b94d57bbcbc6b421a0d64ccd70df09",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/227dc3e57fba5febd0519eaa2fa81ed168362c": "5ee746668f83ae094019008c53e46fb6",
".git/objects/01/b84d4d1497b94cf9d3d656fe0a3fca3904acab": "7a8fdf9168f193ba3b3709bb31c41c7a",
".git/objects/06/fe3f3f669af76ef11a3c88e0fba6398b01f6f5": "8b44a647d08e66c56230b080749bdb5d",
".git/objects/6c/32bbe62926a3f543fd8337a148468037c5724e": "297864f6662140f4cc4c9f79fee3147e",
".git/objects/39/c84db88ebcc98ae10c72fe846171511c80daf6": "68d936f1a75c40e66fcd04ae79e13bed",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "b71077bd51a169873a980f671ac3b8e0",
".git/objects/0f/2700ead38d70d4625d5dbc3eabb4668ae239de": "e0f681554bfe6cfaf4a90feb0331b494",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/db/7cab406c420608c78a72405f9aa72f80e7111f": "90312308e74dd00d7d5d420357367423",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "7b995019412294d024b82f3c623c5831",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/7cf9d1f7ab7a251bbff3f8bc08cfc0b1bd6a8f": "52d36a991a12b8771173fe1fbb96af20",
".git/objects/cd/5ff261fd667a72e6385a43b462c9ac689f03ae": "e2c4a317778e4a996fb83a717acd2926",
".git/objects/e6/ef951286cd63e65d757ec6f33aacd71081fca3": "30d9d94b641b125fc67f0fcec724eb24",
".git/objects/f9/740919e77074210cec72487412644ca831b6d5": "8c291c3fe0274edb5935e28ba77a4881",
".git/objects/e8/f4c3116a4e11a29a94cc3407c6e0420f35af15": "612c28af75215cad20114acac1483655",
".git/objects/e7/a11254c70d461080fac1dd5a58b0de9080bb42": "2263679a62020dc80592b1d6719d0236",
".git/objects/cb/6fbe159992cd67e69dc5e9992ffe82f7d2ff0e": "801dcb94794deadc44ddcb71a2fc6536",
".git/objects/2c/5bed033e3392576412a8887a75c561f9728433": "70fef0c9b17d38e004fe83f85a5a6c60",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "79f0b48b85bd72bec5b9b27fc604f106",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/4772471e173d78c1f89eca0b0cc5b599ed4059": "da235478939e13f2afc5350237042d69",
".git/objects/49/8c5fc3d94e6b05d0b69dff8a9c9d96928d6af3": "cafcd3844a70f435d90dcc2fe2302901",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/47/a5f1df817c2ad9c679e297932ffd870bfde409": "e8ed1a76f48cb50948e8559120d1ba74",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf9ae0fa8675de9fa4d95e6f7735f3ae",
".git/logs/refs/heads/main": "600f43c314b60e11c68eb47938380be1",
".git/logs/refs/remotes/origin/main": "19fc24894c075248b9df89d50e56f08c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "35440913c1887b92a39a03bb09197750",
".git/refs/remotes/origin/main": "35440913c1887b92a39a03bb09197750",
".git/index": "20b955eb0dca6d1e681b268355d86ede",
".git/COMMIT_EDITMSG": "8de43e043f6d7b012fcf760a884abc0a",
"assets/AssetManifest.json": "65d7f7192992ff8d8f157d80e910362d",
"assets/NOTICES": "289ab96a305fb105c651f58f70f4aebd",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/AssetManifest.bin.json": "465bffe6ecec3028cc409129027fd5c8",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "0f42f3ce43f37a2d759479c37c7518f7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/news.png": "c6edca363b13432c4c65d44e6a1234d8",
"assets/assets/images/bmi.png": "f8ac3768c3284035efed4e44811a0951",
"assets/assets/images/design.png": "24eee02db9ffd7d17baf673727aef8c1",
"assets/assets/images/sophia.png": "7a3d6af2ee6bb228fed9cbeb2f1cb2d4",
"assets/assets/images/Appwrite-logo.png": "35528e08751fc99dbe6e49c2d9d6bd24",
"assets/assets/images/flutter.png": "e038d7f55d1c679d7b74a87b6787b6ea",
"assets/assets/images/github.png": "f97760aa21327cb7cc4372a150bea1e9",
"assets/assets/images/express.png": "aa91072ecf5bac92e99c2854bca07c64",
"assets/assets/images/kafipic1.png": "c2a1d7f4d1ee6ba02fd4b44dcd581374",
"assets/assets/images/javascript.png": "46de5318386c730f3a38a33b11cf8f7c",
"assets/assets/images/fitjerk.png": "71c6dff0815883aac9730016d1573663",
"assets/assets/images/figma.png": "ac00fa7b6768286ad44283e4595dd07e",
"assets/assets/images/weather.png": "686326eead999c6b77b08c42add031a9",
"assets/assets/images/android_studio.png": "dedd949944495c85fb1d576de85b00f7",
"assets/assets/images/node-js.png": "5b9554e63b0436822fac7f80757fbb8b",
"assets/assets/images/graphql.png": "66f0a725ad59176f53b603997826430f",
"assets/assets/images/html.png": "09800c5ea7e0b16837231f754496db60",
"assets/assets/images/Wifi_QR_Code.png": "95c94d9c2825d24095bafc26cff087c6",
"assets/assets/images/web_back.png": "ab8333b18ecc5c329a51ca1e5a8a7fa6",
"assets/assets/images/card_bg.jpg": "a3b5d9b64c0310a5cee3c8fb0a7c7f8a",
"assets/assets/images/c++.png": "9a8cab1ad802c5bf12287d09d01b6bc2",
"assets/assets/images/vs_code.png": "a78dfa30bc7f1e6e652284bdd386d0d6",
"assets/assets/images/c.png": "d9d7fbb6e581564bc1fba82f2fda2c5f",
"assets/assets/images/firebse.png": "b1a9fcb59a6647f8db3966582274a6fd",
"assets/assets/images/css.png": "19a8c513ed1abf359d4f46b965ed1b24",
"assets/assets/images/dart.png": "46ad04c0027a82e0b177aa66308ca9d1",
"assets/assets/images/mongoDB.png": "35fc7f2bfb93f30f561f0ecf165939b6",
"assets/assets/images/flutterflow.png": "a68e86a2f8032298c9974a0a3d59c28c",
"assets/assets/images/batch_icon.png": "e4691e31e4a7b6fe1b94d210fcf9b394",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
