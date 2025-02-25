'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4ce57b0edb9a4eaef656c0c2ef4ae7da",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "e4b02d7d450394c8218672f52cf1f75d",
"/": "e4b02d7d450394c8218672f52cf1f75d",
"main.dart.js": "a0d80c7d0fa76aea59e7fc34e4e640b6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"manifest.json": "9a9d4ef94eafb921515f85f66cabe0eb",
".git/config": "3adbe28eb270189000e192dedf5faa69",
".git/objects/59/7a75ec9c0494f52c7d977bec25f6b4f93f946a": "d8f9b8857087c11f0b418910c38757d0",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/a69cb1850861f675e7ae3e8a650aca116a62a1": "8d3a836560d6c5a15c1662e6c90680ac",
".git/objects/69/c31fc5d462286102af408cc9ee0d9b40eae356": "d4f8f2735da8694f4fec1a3906aaeb85",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/02/d09bd8f26faff4e44bc8a3c5555101d7c3d0b8": "d23ce41f4084227cf6ab69dad1cbb3ec",
".git/objects/02/d3f60e52316c90517c847642f7a4e72d202539": "1f69683685b7e9a1e0f97bfb534f8982",
".git/objects/d9/20815d38d2392bda953fb2c019604b20b12ce9": "75f7b444046e4c5e48895e4b8d836ef1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/da/6f517793257e297f1a6175c5564fcd438cd5a5": "7119bf7b0bfdf8468108fab6c0d2e968",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/ce0203ce9e29a3bf824e13ff71e0605132d29b": "2b1e7b9101e9f7def17177e9ef9c68e0",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/ae/40b56d2d36b5c0490c860e0b088c72086a4bc1": "0dc51534b2c0eb4a83c8fb5b7e18cee9",
".git/objects/f4/329408200a19ec22cd63160aad1bf016c8f0d4": "621580d7f5f4199042b198b4fadf37a6",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9b1874222b90011fc18cceb093462226b74b90": "b162bef95e4ae67a1201070fbbc211a5",
".git/objects/cf/16481de3e0e75eabda5ad82bd3c249e588d220": "3091dcdd0b0e456f6d2a9ec7d9670794",
".git/objects/ca/7132b38ce78e6174ff961c40b1a175059e4fbc": "bc84fac7086dad1abae6a00c490ce14d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/7339700534e7018fae64305f28fc230b58115e": "8d50fb297a876ce207ca1086980f1491",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/7910dfdb191a5a81aecf06744e67324626f807": "149c557dc945dac667e4cde3801c082d",
".git/objects/19/390614d4dcf7400cd3f1a21e20e1d7bad3fc18": "1b02e722c35d5c4f383998b8871da100",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/07/519df34692927711f1b2bafdd379590a7f89aa": "3cbf81db6529e537348ef0fcd4485fe4",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/6e/a0d22355d74069088cdc37c31e85811459b1f0": "0460887d5cc10b0807f1f7f8090a519d",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/65/4889ec31a4fdbf748f2fc64962805aa050f2e9": "9a43ef435e8ac57a9aa0f37d68546391",
".git/objects/96/925b0faa2332e354ef51fdca76fe941366c70f": "507685cb9670b4b94afef88252a43dd2",
".git/objects/53/499a39b253084f18c2ff743322c6899b9e1ae1": "d818b0be4ec5a2865ed52783a15a6197",
".git/objects/3f/a4734cd582239c017a56c3b5b0cd518c186003": "d234cfa90a0817ae764f4fbd5ad740f3",
".git/objects/3f/3eda6e24e1d997cfdc83bd9fcf1451b0bf4f94": "c240198d1d259537779bf394c674bcd4",
".git/objects/06/6b89a0642be09ae6688167b368975bcbac843d": "bd90bdc9a227e8e48559441b49a04de5",
".git/objects/0a/855a80dea91df7a7e12c68000db57e058d195f": "be7f657db532053fe8aedfe6b7385448",
".git/objects/0a/1dbb8837443b75c8a8dbc903c0d3fc57480e47": "f029ad59b5624ee84e85ab553ec043ca",
".git/objects/0a/fd09df030cbc9a3baf598bb2f917338e691634": "eb4f23902594290b307d2aff369673ab",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9205d59eed9df01be0a42a57ae7bb53de9e31c": "e6d1d4adcaa1dcc58547b5981928a731",
".git/objects/a0/88e96312ba08d7edd2da42db86fac5445c2e0d": "7103a0d0f9b4ec7da46d48c7d97ea370",
".git/objects/b1/c0b1c3d385e250127fe3fbd2b551d1624b8395": "715d8db1fd2151a4062e10dc4479b42a",
".git/objects/e6/dcc4dcabe21048908b6951f0fa2adb8ea99346": "a04b62e49f82fb06b28561bfbbdeec8b",
".git/objects/c2/1be45cc4df2511252fbbd12b793d992e39fef9": "ff32d0369e80e2789cb52f4de63513ae",
".git/objects/ce/d96e350a8c6b27d271bcd2752bc6b5bee4f7d7": "6779eada89871069064f7006b1590a9d",
".git/objects/46/13f5666f3c059a0da920c4a27a3c918b43df5b": "d2dfcfd07746311a0e39832e49ef1270",
".git/objects/41/098022b9e0d8dd1db23b4b643e2676bf043a40": "06691fc1f47045e0449adb1be221b829",
".git/objects/83/111a276224e3319db814d974043cf50f65b493": "d6c19e5168b5f964990e84bebf9d0b50",
".git/objects/4a/ec4aaf481e0167a20fc761e99bcfb900ef66fc": "45a01cc2ab519dcde1fd62bd1a7deb95",
".git/objects/4a/0ddde1361fe3bf7f5f44a9c76c2e0e0c59d70c": "ee996360ded67d22cfca22324363bef8",
".git/objects/4f/d05d7d95adb159baa3b2be573b029cfa0eea45": "7933a441e9b1f37dc701d72709eaa4b7",
".git/objects/8d/02f62298591afd3233100eb3f67e4025aadc2b": "ec87d380497b80a756d8f8f49c1868a9",
".git/objects/1d/292e25072a50f1cda21d19d06345628ad0ab54": "e9a54f47834744569681fffc818e2a2d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/22/f0f872884af4b3ef2c101fe5a0725159f497f6": "cb054c788f9ce229e9a13dff3e38895c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed4777d0b59b4b1796355927092a5fee",
".git/logs/refs/heads/main": "0b9005d0d2ea41e264f712cb37c4fdce",
".git/logs/refs/remotes/origin/main": "28e485f2e0266442322a127b2bc6b74a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/main": "3a400ff423d5dbd07de1679266eca1c1",
".git/refs/remotes/origin/main": "3a400ff423d5dbd07de1679266eca1c1",
".git/index": "4ca2ec97dd30684019f8f6691fb85086",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
"assets/AssetManifest.json": "6043d4e43ca5c84a61651b927706377e",
"assets/NOTICES": "f067aa5fdfaec713394adc5420af007d",
"assets/FontManifest.json": "8d6b5e389103cfc17f0697937e3558f7",
"assets/AssetManifest.bin.json": "f4195513fd39c081ac6395e8c5e42062",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "72faa6a6f223d38920e8f44ee1227f99",
"assets/fonts/MaterialIcons-Regular.otf": "6bb7d65923a93d366e2e5aebd4cca46f",
"assets/assets/images/figma.svg": "bb5a63f89698f21948f4d402234e6532",
"assets/assets/images/card.png": "c59465cf2964b15728e3c3de30251bfa",
"assets/assets/images/top-bg.svg": "ea086978ac99c653e6c8228bcf6fd399",
"assets/assets/images/section.svg": "1118180cd02e6fd6a9804f27e92a5baf",
"assets/assets/images/supabase.svg": "feb7af7ce26af1402abc16f11e71b3b3",
"assets/assets/images/firebase.svg": "12c51693d5a8b2e0043edbbabba2b13a",
"assets/assets/images/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/images/hero.svg": "d33b61b8bd3f0dcce3b67c27f1273467",
"assets/assets/images/docker.svg": "078f7db92388f26ee25a0f1b4c4da8d8",
"assets/assets/images/git.svg": "5eed2c8cb62e1adfae09b0129a25a1a7",
"assets/assets/images/project_2.png": "ce76e251bc4d24e2f4f2ca0200145ae2",
"assets/assets/images/project_1.png": "8294419d300df17e9795796bf7861ede",
"assets/assets/images/kotlin.svg": "94e0a77ea6158d72c09683facdc057f5",
"assets/assets/images/avatar.png": "efd504addef535d8336da9984fa4f1c4",
"assets/assets/images/play_app.png": "0ffbf9184fc96e7856a7c4b2f19fc636",
"assets/assets/images/mysql.svg": "62e60e2dc16f54bcdeb17f9bc96bb393",
"assets/assets/images/springboot.svg": "c85731828ae759e22048d3b936843b5a",
"assets/assets/images/nginx.svg": "e8b99f99a9c5757b946bc2217f1fdc27",
"assets/assets/images/avatar.svg": "f2ecb8bfa69b592f3ac4a6358d950573",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
