// Keeps the app and its engine on the device so it works offline after the first visit.
// Everything is served from this repo (no CDN), so a fresh install never depends on a third-party site.
const V='knightnmare-v8';
const FILES=['./','./index.html','./puzzles.js','./coach.js','./explorer.js','./learn.js','./manifest.webmanifest','./icon-192.png','./icon-512.png',
'./logo-wide.png','./lib/stockfish.asm.js','./lib/chess.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(V).then(c=>c.put(e.request,copy));return res})))});
