export { };

interface ICacheEntry {
    "revision": string;
    "url": string;
}

declare global {
    interface WorkerGlobalScope {
        __precacheManifest: ICacheEntry[];
    }
}

workbox.core.setCacheNameDetails({ prefix: "vuepwa2" });

self.__precacheManifest = [].concat((self.__precacheManifest as never) || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', ((event: ExtendableMessageEvent) => {
    console.log('message in sw', event);
    if (event.data && event.data.action === 'SKIP_WAITING') {
        (self as (ServiceWorkerGlobalScope & typeof globalThis)).skipWaiting();
    }
}) as EventListener);
