// Keeps the app and its engine on the device so it works offline after the first visit.
const V='knightnmare-v3';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png',
'https://cdn.jsdelivr.net/npm/stockfish@10.0.2/src/stockfish.asm.js','https://cdn.jsdelivr.net/npm/chess.js@0.10.3/chess.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(V).then(c=>c.put(e.request,copy));return res})))});
