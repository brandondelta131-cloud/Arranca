// Guarda la app para que abra sin internet. Sube CACHE cuando cambie index.html.
const CACHE = 'arranca-v29';
const ASSETS = ['./', './index.html', './historias.js?v=29', './japones.js?v=29', './ingles.js?v=29', './avance.js?v=29', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || req.url.includes('.supabase.co')) return;
  // La página: primero internet (para recibir actualizaciones), si no hay, la copia guardada
  if (req.mode === 'navigate'){
    // Con datos lentos no se queda en blanco: si la red tarda más de 4 s, abre la copia guardada (la nueva llega la próxima vez)
    const red = fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return r });
    const lento = new Promise(res => setTimeout(res, 4000)).then(() => caches.match('./index.html'));
    e.respondWith(Promise.race([red.catch(() => caches.match('./index.html')), lento.then(c => c || red)]).then(r => r || red));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok && (req.url.startsWith(self.location.origin) || req.url.includes('fonts.g'))) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)) }
    return r;
  })));
});
// Avisos que manda el servidor aunque la app esté cerrada
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {} } catch (err) { d = { title: 'Arranca', body: e.data ? e.data.text() : '' } }
  e.waitUntil(self.registration.showNotification(d.title || 'Arranca', {
    body: d.body || 'Te toca estudiar.', icon: 'icon-192.png', badge: 'icon-192.png',
    tag: d.tag || 'arranca', renotify: true, requireInteraction: true, vibrate: [400, 150, 400],
    data: { url: d.url || './' }
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: 'window'}).then(cs => cs[0] ? cs[0].focus() : self.clients.openWindow('./')));
});
