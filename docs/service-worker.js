importScripts("/vuepwa2/precache-manifest.434128d4626795655e44a743b2cb061f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: "vuepwa" });
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
self.addEventListener('message', ((event) => {
    console.log('message in sw', event);
    if (event.data && event.data.action === 'SKIP_WAITING') {
        self.skipWaiting();
    }
}));

