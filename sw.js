/* Pedro · O Contador da Harvest — service worker
   Guarda apenas os arquivos do aplicativo; as despesas ficam no armazenamento local do navegador.
   Ao publicar uma nova versão do index.html, aumente o número em VERSION. */
const VERSION='h1.4.0';
const CACHE='pedro-harvest-'+VERSION;
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith('pedro-harvest-')&&n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin||!u.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(x=>x.put('./index.html',c))}return res}).catch(()=>caches.match('./index.html')));return}
 e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{if(res.ok){const c2=res.clone();caches.open(CACHE).then(x=>x.put(r,c2))}return res})))});
