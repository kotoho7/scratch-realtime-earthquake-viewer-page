const CACHE_KEY = "srev 1.6.2.0";

const cacheFiles = [
  "./",
  "./script.js",
]

const BASE_URL = self.origin + "/scratch-realtime-earthquake-viewer-page";

self.addEventListener("install", (event) => {
  console.log("[SW] Installing service worker");
  event.waitUntil(
    caches.open(CACHE_KEY).then((cache) => {
      console.log("[SW] Caching static resources");
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (!(event.request.url === BASE_URL + "/" || ["/assets/", "/images/", ...cacheFiles].some((path) => event.request.url.startsWith(BASE_URL + path)))) {
    console.debug(`[SW] Not caching ${event.request.url}`);
    return;
  }

  event.respondWith(
    caches.open(CACHE_KEY).then(async (cache) => {

      const fetchAndCache = async (req) => {
        const res = await fetch(req, { redirect: "follow" });
        if (res.ok) {
          cache.put(req, res.clone());
          return res;
        }
      }

      if (event.request.url === BASE_URL + "/hash") {
        try {
          const cachedResponse = await cache.match(event.request);
          const fetchedResponse = await fetchAndCache(event.request);
          if (cachedResponse && fetchedResponse.ok) {
            const cachedHash = await cachedResponse.text();
            const fetchedHash = await fetchedResponse.clone().text();
            if (cachedHash !== fetchedHash) {
              console.log(`[SW] Hash changed: ${cachedHash}(old) -> ${fetchedHash}(new)`);
              caches.delete(CACHE_KEY);
              console.debug(`[SW] Cleared cache for ${event.request.url}`);
            }
          }
          return fetchedResponse;
        } catch (e) {
          console.warn(e);
          console.debug(`[SW] Fetch failed for ${event.request.url}`);
        }
      }

      if (event.request.url === BASE_URL + "/" || event.request.url === BASE_URL + "/index.html") {
        try {
          const fetchedResponse = await fetchAndCache(event.request);
          if (fetchedResponse.ok) {
            console.debug(`[SW] Returning new response for ${event.request.url}`);
          }
          return fetchedResponse;
        } catch (e) {
          console.warn(e);
          console.debug(`[SW] Fetch failed for ${event.request.url}`);
        }
      }

      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        console.debug(`[SW] Returning cached response for ${event.request.url}`);
        return cachedResponse;
      }

      const fetchedResponse = await fetchAndCache(event.request);
      console.debug(`[SW] Caching new response for ${event.request.url}`);

      return fetchedResponse;
    }));
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activating");
  event.waitUntil(caches.keys().then((keys) => {
    return Promise.all(keys.map((key) => {
      if (key !== CACHE_KEY) {
        console.log(`[SW] Deleting cache ${key}`);
        return caches.delete(key);
      }
    }));
  }));
});
