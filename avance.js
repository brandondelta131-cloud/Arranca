/* Avance: dashboard de tus cursos (Inglés, Japonés, TripleTen, Daxus) con el tema azul marino y luces LED.
   Lee lo que ya guarda Arranca: minutos por día y materia (log.days), tarjetas (cards) y el progreso de los cursos
   de idiomas (jp, ingl). No escribe nada. */

(function estilos(){
  const st = document.createElement('style');
  st.textContent = `
  .av-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px}
  .av-kpi{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;align-items:center}
  .av-kpi .ic{grid-row:span 2;width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:rgba(var(--led),.10);border:1px solid rgba(var(--led),.35);box-shadow:0 0 14px rgba(var(--led),.18)}
  .av-kpi .ic svg{width:22px;height:22px;fill:none;stroke:var(--accent);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 5px rgba(var(--led),.8))}
  .av-kpi .v{font:900 26px/1.1 var(--f-led);font-variant-numeric:tabular-nums;color:var(--ink);text-shadow:0 0 14px rgba(var(--led),.35)}
  .av-kpi .l{font-size:13px;color:var(--muted)}
  .av-cursos{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:12px}
  .av-curso{display:grid;gap:10px;align-content:start}
  .av-curso header{display:flex;align-items:center;gap:10px}
  .av-led{width:10px;height:10px;border-radius:50%;flex:none;display:inline-block}
  .av-curso h3{font-size:16px;line-height:1.25}
  .av-fila{display:flex;align-items:center;gap:14px}
  .av-ring{flex:none}
  .av-ring text{font:900 15px var(--f-led);fill:var(--ink)}
  .av-datos{display:grid;gap:3px;font-size:13px;color:var(--muted)}
  .av-datos b{color:var(--ink);font-variant-numeric:tabular-nums}
  .av-mini{display:grid;gap:4px;font-size:13px;color:var(--muted)}
  .av-graf svg{width:100%;height:auto;display:block}
  .av-graf .eje{fill:var(--muted);font:12px var(--f-body)}
  .av-graf .val{fill:var(--ink);font:700 11px var(--f-body)}
  .av-ley{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:13px;color:var(--muted)}
  .av-ley span{display:inline-flex;align-items:center;gap:6px}
  .av-tot{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;font-size:13px;color:var(--muted)}
  .av-tot b{display:block;font:900 20px var(--f-led);color:var(--ink)}
  /* En el teléfono: 2 columnas y el ícono arriba (va al final para ganarle a las reglas generales) */
  @media (max-width:520px){ .av-kpis{grid-template-columns:1fr 1fr;gap:10px} .av-kpi{grid-template-columns:1fr;padding:14px} .av-kpi .ic{grid-row:auto;width:36px;height:36px} .av-kpi .v{font-size:22px} }
  @media (prefers-reduced-motion: no-preference){ .av-ring circle.p{transition:stroke-dashoffset .8s cubic-bezier(.2,.8,.2,1)} }
  `;
  document.head.append(st);
})();

const AV_IC = {
  racha: '<path d="M12 2c1 3 4 5 4 9a4 4 0 0 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 0-8z"/><path d="M8 14a4 4 0 0 0 8 0"/>',
  hoy: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  semana: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  repaso: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 2h12a2 2 0 0 1 2 2v12"/>'
};
const avSvg = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${AV_IC[k]}</svg>`;
const avMin = m => { m = Math.round(m || 0); return m < 60 ? `${m} min` : `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')} min` };
function avPlaneado(a, fecha){ const we = [0, 6].includes(fecha.getDay()); return (we && a.minsWE) ? a.minsWE : a.mins }
function avDias(n){ const r = []; const t = new Date(); t.setHours(12, 0, 0, 0); for (let i = n - 1; i >= 0; i--){ const d = new Date(t); d.setDate(t.getDate() - i); r.push(d) } return r }
const avMinDe = (d, id) => (log.days?.[ymd(d)]?.[id]) || 0;
const avTotalDia = d => Object.values(log.days?.[ymd(d)] || {}).reduce((s, m) => s + m, 0);
function avRacha(){
  const t = new Date(); t.setHours(12, 0, 0, 0);
  if (avTotalDia(t) < 1) t.setDate(t.getDate() - 1);
  let n = 0; while (avTotalDia(t) >= 1){ n++; t.setDate(t.getDate() - 1) }
  return n;
}
function avAnillo(pct, color, etiqueta){
  const r = 26, c = 2 * Math.PI * r, p = Math.max(0, Math.min(1, pct));
  return `<svg class="av-ring" width="68" height="68" viewBox="0 0 68 68" role="img" aria-label="${esc(etiqueta)}">
    <circle cx="34" cy="34" r="${r}" fill="none" stroke="rgba(140,175,230,.16)" stroke-width="7"/>
    <circle class="p" cx="34" cy="34" r="${r}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round"
      stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - p)).toFixed(1)}" transform="rotate(-90 34 34)" style="filter:drop-shadow(0 0 5px ${color})"/>
    <text x="34" y="39" text-anchor="middle">${Math.round(p * 100)}%</text></svg>`;
}

// Gráfica de barras apiladas: minutos por día y por materia, últimos 14 días
function avGrafica(n){
  const dias = avDias(n), acts = plan.acts;
  const tot = dias.map(avTotalDia), max = Math.max(60, Math.ceil(Math.max(...tot) * 1.18 / 30) * 30);
  // Margen izquierdo para las etiquetas del eje y espacio arriba para el número de la barra más alta
  const W = n <= 7 ? 420 : 900, H = n <= 7 ? 250 : 240, izq = n <= 7 ? 40 : 56, base = 210, alto = 175, paso = (W - izq) / dias.length, ancho = Math.min(34, paso * 0.58);
  const DS = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  let barras = '';
  dias.forEach((d, i) => {
    let y = base; const x = izq + i * paso + (paso - ancho) / 2;
    acts.forEach(a => {
      const m = avMinDe(d, a.id); if (m < 0.5) return;
      const h = Math.max(2, m / max * alto); y -= h;
      barras += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${ancho.toFixed(1)}" height="${h.toFixed(1)}" rx="3" fill="${a.color}" style="filter:drop-shadow(0 0 4px ${a.color}88)"><title>${esc(a.name)}: ${avMin(m)} (${d.toLocaleDateString('es-MX', {weekday: 'short', day: 'numeric'})})</title></rect>`;
    });
    if (tot[i] >= 1) barras += `<text class="val" x="${(x + ancho / 2).toFixed(1)}" y="${(y - 5).toFixed(1)}" text-anchor="middle">${Math.round(tot[i])}</text>`;
    const hoy = i === dias.length - 1;
    barras += `<text class="eje" x="${(x + ancho / 2).toFixed(1)}" y="${base + 18}" text-anchor="middle" ${hoy ? 'style="fill:var(--accent);font-weight:700"' : ''}>${hoy ? 'Hoy' : DS[d.getDay()] + d.getDate()}</text>`;
  });
  const lineas = [0.5, 1].map(f => `<line x1="${izq}" x2="${W}" y1="${(base - f * alto).toFixed(1)}" y2="${(base - f * alto).toFixed(1)}" stroke="rgba(140,175,230,.12)"/><text class="eje" x="${izq - 8}" y="${(base - f * alto + 4).toFixed(1)}" text-anchor="end">${Math.round(max * f)}</text>`).join('');
  const suma = tot.reduce((s, m) => s + m, 0), conEstudio = tot.filter(m => m >= 1).length;
  return `<div class="av-graf"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Minutos de estudio por día en los últimos ${n} días: ${Math.round(suma)} minutos en total, ${conEstudio} días con estudio.">
      ${lineas}<line x1="${izq}" x2="${W}" y1="${base}" y2="${base}" stroke="rgba(140,175,230,.25)"/>${barras}</svg></div>
    <div class="av-ley">${acts.map(a => `<span><i class="av-led" style="background:${a.color};box-shadow:0 0 8px ${a.color}"></i>${esc(a.name)}</span>`).join('')}</div>`;
}

function avCurso(a){
  const sem = avDias(7), hoyD = sem[sem.length - 1];
  const hecho = sem.reduce((s, d) => s + avMinDe(d, a.id), 0), meta = sem.reduce((s, d) => s + avPlaneado(a, d), 0);
  const hoyM = avMinDe(hoyD, a.id), hoyMeta = avPlaneado(a, hoyD);
  const cs = cardList().filter(c => c.act === a.id), toca = cs.filter(c => c.due <= Date.now()).length;
  let extra = '';
  if (a.id === 'ingles' && typeof EN_HISTORIAS !== 'undefined'){
    const j = ingl || {done: {}, xp: 0}, n = Object.keys(j.done || {}).length;
    extra = `<div class="av-mini"><span>Historias <b style="color:var(--ink)">${n} de ${EN_HISTORIAS.length}</b> · ${j.xp || 0} XP</span>
      <div class="bar"><div style="width:${100 * n / EN_HISTORIAS.length}%;background:${a.color};box-shadow:0 0 10px ${a.color}"></div></div></div>`;
  }
  if (a.id === 'japones' && typeof JP_LECCIONES !== 'undefined'){
    const j = jp || {done: {}, xp: 0}, n = Object.keys(j.done || {}).length;
    extra = `<div class="av-mini"><span>Lecciones <b style="color:var(--ink)">${n} de ${JP_LECCIONES.length}</b> · ${j.xp || 0} XP</span>
      <div class="bar"><div style="width:${100 * n / JP_LECCIONES.length}%;background:${a.color};box-shadow:0 0 10px ${a.color}"></div></div></div>`;
  }
  const curso = a.id === 'ingles' ? 'ingles' : a.id === 'japones' ? 'japones' : null;
  return `<div class="card av-curso">
    <header><i class="av-led" style="background:${a.color};box-shadow:0 0 10px ${a.color}"></i><h3>${esc(a.name)}</h3></header>
    <div class="av-fila">${avAnillo(meta ? hecho / meta : 0, a.color, `${Math.round(meta ? 100 * hecho / meta : 0)}% de la meta de la semana`)}
      <div class="av-datos">
        <span>Semana: <b>${avMin(hecho)}</b> de ${avMin(meta)}</span>
        <span>Hoy: <b>${avMin(hoyM)}</b> de ${avMin(hoyMeta)}</span>
        <span>Tarjetas: <b>${cs.length}</b>${toca ? ` · <b style="color:var(--accent)">${toca} por repasar</b>` : ''}</span>
      </div></div>
    ${extra}
    <div class="row"><button class="primary" data-avstart="${esc(a.id)}">▶ Empezar bloque</button>${curso ? `<button data-go="${curso}">Abrir curso</button>` : ''}</div>
  </div>`;
}

function renderAvance(){
  const box = $('avArea'); if (!box) return;
  const hoyD = avDias(1)[0], sem = avDias(7);
  const hoyM = avTotalDia(hoyD), hoyMeta = plan.acts.reduce((s, a) => s + avPlaneado(a, hoyD), 0);
  const semM = sem.reduce((s, d) => s + avTotalDia(d), 0), semMeta = sem.reduce((s, d) => s + plan.acts.reduce((t, a) => t + avPlaneado(a, d), 0), 0);
  const cs = cardList(), toca = cs.filter(c => c.due <= Date.now()).length;
  const racha = avRacha(), nDias = innerWidth < 640 ? 7 : 14;
  const todo = Object.values(log.days || {}).reduce((s, d) => s + Object.values(d).reduce((t, m) => t + m, 0), 0);
  const diasConEstudio = Object.values(log.days || {}).filter(d => Object.values(d).reduce((t, m) => t + m, 0) >= 1).length;
  box.innerHTML = `
    <div class="av-kpis">
      <div class="card av-kpi"><span class="ic">${avSvg('racha')}</span><span class="v">${racha}</span><span class="l">${racha === 1 ? 'día seguido' : 'días seguidos'} estudiando</span></div>
      <div class="card av-kpi"><span class="ic">${avSvg('hoy')}</span><span class="v">${hoyMeta ? Math.round(100 * hoyM / hoyMeta) : 0}%</span><span class="l">de hoy · ${avMin(hoyM)} de ${avMin(hoyMeta)}</span></div>
      <div class="card av-kpi"><span class="ic">${avSvg('semana')}</span><span class="v">${(semM / 60).toFixed(1)} h</span><span class="l">esta semana · meta ${(semMeta / 60).toFixed(1)} h</span></div>
      <div class="card av-kpi"><span class="ic">${avSvg('repaso')}</span><span class="v">${toca}</span><span class="l">tarjetas por repasar de ${cs.length}</span></div>
    </div>
    <div class="card"><div class="row" style="justify-content:space-between"><h2>Últimos ${nDias} días</h2><span class="muted small">minutos por día</span></div>${avGrafica(nDias)}</div>
    <h2 style="margin-top:4px">Tus cursos</h2>
    <div class="av-cursos">${plan.acts.map(avCurso).join('')}</div>
    <div class="card"><h2>En total</h2><div class="av-tot">
      <div><b>${(todo / 60).toFixed(1)} h</b>estudiadas</div>
      <div><b>${diasConEstudio}</b>días con estudio</div>
      <div><b>${cs.length}</b>tarjetas creadas</div>
      <div><b>${Object.values(notes || {}).filter(n => !n.del).length}</b>notas de clase</div>
    </div></div>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-avstart]'); if (!b) return;
  startBlock(b.dataset.avstart); goTab('hoy');
});
