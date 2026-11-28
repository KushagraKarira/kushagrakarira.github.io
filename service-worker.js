const C='site-cache-v3',S=/\.(?:css|js|svg|png|jpe?g|gif|webp|ico|woff2?)$/i;
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;e.respondWith(caches.match(r).then(c=>c||fetch(r).then(n=>{if(n.ok&&S.test(u.pathname))caches.open(C).then(x=>x.put(r,n.clone()));return n}).catch(()=>c)))});
