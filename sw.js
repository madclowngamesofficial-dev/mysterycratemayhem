// Mystery Crate Mayhem service worker: caches the whole game so it starts offline.
const CACHE='mcm-2.8.4';
const FILES=["./", "index.html", "manifest.webmanifest", "lib/three.min.js", "lib/peerjs.min.js", "fonts/fonts.css", "fonts/lilita-one-latin-400-normal.woff2", "fonts/baloo-2-latin-500-normal.woff2", "fonts/baloo-2-latin-700-normal.woff2", "fonts/baloo-2-latin-800-normal.woff2", "icons/apple-touch-icon.png", "icons/icon-128.png", "icons/icon-144.png", "icons/icon-192.png", "icons/icon-256.png", "icons/icon-384.png", "icons/icon-48.png", "icons/icon-512.png", "icons/icon-72.png", "icons/icon-96.png", "icons/maskable-192.png", "icons/maskable-512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return; // online play talks to other servers directly
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put('index.html',cp));return res}).catch(()=>caches.match('index.html')));return}
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res})));
});
