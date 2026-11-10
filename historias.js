/* Motor de historias de Arranca, con la mecánica de la clase de inglés de Kale Anders:
   1. Historia completa: una vuelta con subtítulos y otra solo en el idioma.
   2. Frase clave: suena 3 veces seguidas y la repites cada vez.
   3. Frases sueltas: líneas al azar para repetirlas.
   4. Preguntas: oyes la línea, luego una pregunta de sí o no (a veces con trampa) y respondes corto
      en voz alta ("Yes, she is." / "はい、そうです。"). Al final, ronda rápida con las preguntas revueltas.
   Lo usan la pestaña English (ingles.js) y el paso de preguntas de cada lección de japonés (japones.js).

   Historia: {titulo, lineas: [[quien, texto, lectura, español]], clave: índice, preguntas: [[índice, pregunta, lecturaP, respuesta, lecturaR, español]]}
   Opciones: {lang, di(texto, velocidad), fases, color, alTerminar({aciertos, total})} */

const HS_FASES = {historia: ['🎧', 'Historia'], clave: ['🔁', 'Frase clave'], sueltas: ['🔀', 'Frases sueltas'], preguntas: ['❓', 'Preguntas']};
const hsMezclar = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(p => p[1]);
const hsJa = lang => lang.startsWith('ja');
const hsNormJa = s => String(s || '').replace(/[\s、。！？!?,.「」・ー〜]/g, '').replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));

// ¿La respuesta es sí (1), no (-1) o no se sabe (0)?
function hsPolaridad(s, lang){
  s = String(s || '').toLowerCase();
  if (hsJa(lang)){
    if (/いいえ|いえ|ううん|ちが|違/.test(s)) return -1;
    if (/はい|うん|ええ|そう/.test(s)) return 1;
    return 0;
  }
  if (/\b(no|nope|not)\b|n't/.test(s)) return -1;
  if (/\b(yes|yeah|yep|yup|sure)\b/.test(s)) return 1;
  return 0;
}
// Qué tanto de lo esperado se oyó (0 a 1): palabras en inglés, letras en japonés
function hsParecido(oido, esperado, lang){
  const partes = s => hsJa(lang) ? [...hsNormJa(s)] : String(s || '').toLowerCase().replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean);
  const A = partes(oido), B = partes(esperado);
  if (!B.length) return 0;
  let n = 0;
  for (const w of B){ const i = A.indexOf(w); if (i >= 0){ n++; A.splice(i, 1) } }
  return n / B.length;
}

function hsDrill(box, h, o){
  const fases = o.fases || ['historia', 'clave', 'sueltas', 'preguntas'];
  const color = o.color || 'var(--accent)';
  const st = {f: 0, aciertos: 0, total: 0};
  let gen = 0;
  const parar = () => { gen++; callarVoz() };
  // Si cambiaste de pestaña o saliste, deja de sonar (en vez de seguir hablando por detrás)
  const di = (t, r) => box.isConnected && box.offsetParent ? o.di(t, r) : (gen++, Promise.resolve());
  const linea = (x, conSub, extra = '') => `<div ${extra} style="border:1px solid var(--line);border-radius:10px;padding:8px 12px;cursor:pointer">
      <div ${hsJa(o.lang) ? 'lang="ja"' : ''} style="font-size:${hsJa(o.lang) ? 22 : 19}px;font-weight:700">${x[0] ? `<span class="muted small">${esc(x[0])}:</span> ` : ''}${esc(x[1])} <span class="small">🔊</span></div>
      <div data-hssub ${conSub ? '' : 'hidden'}>${x[2] ? `<div class="small" style="color:${color}">${esc(x[2])}</div>` : ''}<div class="small muted">${esc(x[3])}</div></div></div>`;
  const resultado = (ok, txt) => `<b style="color:${ok ? 'var(--ok)' : 'var(--warn)'}">${ok ? '✓' : '≈'}</b> ${txt}`;

  function pintar(){
    parar();
    const nombre = fases[st.f];
    const chips = fases.map((k, i) => `<span style="opacity:${i <= st.f ? 1 : .35}" title="${HS_FASES[k][1]}">${HS_FASES[k][0]} ${i === st.f ? `<b>${HS_FASES[k][1]}</b>` : ''}</span>`).join(' · ');
    box.innerHTML = `<div class="small">${chips}</div><div id="hsFase" style="display:grid;gap:12px"></div>`;
    ({historia: faseHistoria, clave: faseClave, sueltas: faseSueltas, preguntas: fasePreguntas})[nombre]();
    window.scrollTo(0, 0);
  }
  const caja = () => box.querySelector('#hsFase');
  const sigFase = () => { st.f++; if (st.f < fases.length) pintar(); else { parar(); o.alTerminar({aciertos: st.aciertos, total: st.total}) } };
  const botonSig = txt => `<button class="primary" id="hsSig" style="font-size:18px;padding:14px">${txt || (st.f < fases.length - 1 ? `Siguiente: ${HS_FASES[fases[st.f + 1]][1]} →` : 'Terminar →')}</button>`;

  // 1. Historia completa: con subtítulos y luego sin ellos
  function faseHistoria(){
    let subs = true, vueltas = 0;
    const abiertas = new Set();
    caja().innerHTML = `<p class="small" id="hsGuia" style="margin:0"></p>
      <div class="flash" style="padding:10px;min-height:0"><div class="f" style="font-size:22px">🎧 ${esc(h.titulo)}</div><div class="muted small" id="hsEstado"></div></div>
      <div class="row"><button class="primary" id="hsPlay">▶ Escuchar</button><button id="hsSubs"></button><button class="ghost" id="hsLento">🐢 Más lento</button></div>
      <div id="hsTexto" style="display:grid;gap:8px"></div>${botonSig()}`;
    const dibujar = () => {
      caja().querySelector('#hsGuia').innerHTML = subs ? '💬 <b>Con subtítulos:</b> escucha y lee para entender la historia.'
        : '👀 <b>Sin subtítulos:</b> escucha y sigue el texto con la vista. Toca una línea si necesitas su traducción.';
      caja().querySelector('#hsSubs').textContent = subs ? '🙈 Quitar subtítulos' : '💬 Poner subtítulos';
      caja().querySelector('#hsTexto').innerHTML = h.lineas.map((x, k) => linea(x, subs || abiertas.has(k), `data-hsl="${k}"`)).join('');
    };
    const marcar = k => box.querySelectorAll('[data-hsl]').forEach(x => x.style.background = +x.dataset.hsl === k ? 'var(--soft)' : '');
    const estado = t => { const e = box.querySelector('#hsEstado'); if (e) e.textContent = t };
    const tocar = async rate => {
      const g = ++gen;
      for (let k = 0; k < h.lineas.length && g === gen; k++){
        estado(`Línea ${k + 1} de ${h.lineas.length}`); marcar(k);
        await di(h.lineas[k][1], rate); await wait(450);
      }
      if (g !== gen) return;
      marcar(-1); vueltas++;
      if (vueltas === 1 && subs){
        subs = false; dibujar(); estado('Ahora la misma historia, sin subtítulos…');
        await wait(1500); if (g === gen) tocar(rate);
        return;
      }
      estado(`Llevas ${vueltas} ${vueltas === 1 ? 'vuelta' : 'vueltas'}. Repítela hasta que la entiendas sin leer los subtítulos.`);
    };
    caja().querySelector('#hsPlay').onclick = () => { callarVoz(); tocar(1) };
    caja().querySelector('#hsLento').onclick = () => { callarVoz(); tocar(0.75) };
    caja().querySelector('#hsSubs').onclick = () => { subs = !subs; abiertas.clear(); dibujar() };
    caja().querySelector('#hsTexto').onclick = ev => {
      const l = ev.target.closest('[data-hsl]'); if (!l) return;
      const k = +l.dataset.hsl;
      if (!subs){ abiertas.has(k) ? abiertas.delete(k) : abiertas.add(k); l.querySelector('[data-hssub]').hidden = !abiertas.has(k) }
      gen++; callarVoz(); marcar(k); di(h.lineas[k][1]);
    };
    caja().querySelector('#hsSig').onclick = sigFase;
    dibujar(); estado('Primera vuelta…'); tocar(1);
  }

  // Micrófono para repetir una frase
  async function repetir(texto, el){
    try {
      parar(); el.innerHTML = '🎤 Te escucho…';
      const dijo = await escucharVoz(o.lang);
      const p = hsParecido(dijo, texto, o.lang);
      // En japonés el teléfono puede escribir con kanji: basta con que se parezca y tenga el largo de la frase
      const ok = hsJa(o.lang) ? p >= 0.4 && hsNormJa(dijo).length >= hsNormJa(texto).length * 0.5 : p >= 0.7;
      st.total++; if (ok) st.aciertos++;
      el.innerHTML = resultado(ok, `${ok ? '¡Bien dicho!' : 'Casi. Escúchala otra vez y repítela.'} · Escuché: "${esc(dijo)}"`);
    } catch(e){ el.innerHTML = '⚠️ ' + esc(e.message) }
  }

  // 2. Frase clave: tres veces seguidas
  function faseClave(){
    const x = h.lineas[h.clave];
    caja().innerHTML = `<p class="small" style="margin:0">🔁 <b>La frase clave de la historia.</b> Va a sonar 3 veces: repítela en voz alta cada vez, copiando el ritmo.</p>
      <div class="flash"><div class="f" ${hsJa(o.lang) ? 'lang="ja"' : ''} style="font-size:28px">${esc(x[1])}</div>${x[2] ? `<div style="color:${color}">${esc(x[2])}</div>` : ''}<div class="muted">${esc(x[3])}</div>
        <div class="small" id="hsCuenta" style="margin-top:6px"></div></div>
      <div class="row"><button id="hsOtra">🔊 Otras 3 veces</button><button class="primary" id="hsHablo">🎤 Ahora tú</button></div>
      <p class="small" id="hsRes" style="min-height:22px"></p>${botonSig()}`;
    const tres = async () => {
      const g = ++gen;
      for (let n = 1; n <= 3 && g === gen; n++){
        const c = box.querySelector('#hsCuenta'); if (c) c.textContent = `${n} de 3 · repite después de oírla`;
        await di(x[1], n === 2 ? 0.8 : 1); await wait(2200);
      }
      const c = box.querySelector('#hsCuenta'); if (g === gen && c) c.textContent = 'Ahora dila tú sin ayuda 👇';
    };
    caja().querySelector('#hsOtra').onclick = () => { callarVoz(); tres() };
    caja().querySelector('#hsHablo').onclick = () => repetir(x[1], caja().querySelector('#hsRes'));
    caja().querySelector('#hsSig').onclick = sigFase;
    tres();
  }

  // 3. Frases sueltas al azar
  function faseSueltas(){
    const lista = hsMezclar(h.lineas.map((x, k) => k)).slice(0, Math.min(5, h.lineas.length));
    let i = 0;
    const una = () => {
      parar();
      const x = h.lineas[lista[i]];
      caja().innerHTML = `<p class="small" style="margin:0">🔀 Frase ${i + 1} de ${lista.length} · Escúchala y repítela. Toca la frase si quieres ver qué significa.</p>
        ${linea(x, false, 'id="hsLinea"')}
        <div class="row"><button id="hsOir">🔊 Otra vez</button><button class="primary" id="hsHablo">🎤 Repetir</button></div>
        <p class="small" id="hsRes" style="min-height:22px"></p>
        ${i < lista.length - 1 ? '<button class="primary" id="hsOtraF" style="font-size:18px;padding:14px">Siguiente frase →</button>' : botonSig()}`;
      caja().querySelector('#hsLinea').onclick = () => { const s = caja().querySelector('[data-hssub]'); s.hidden = !s.hidden; parar(); di(x[1]) };
      caja().querySelector('#hsOir').onclick = () => { parar(); di(x[1]) };
      caja().querySelector('#hsHablo').onclick = () => repetir(x[1], caja().querySelector('#hsRes'));
      if (i < lista.length - 1) caja().querySelector('#hsOtraF').onclick = () => { i++; una() };
      else caja().querySelector('#hsSig').onclick = sigFase;
      di(x[1]);
    };
    una();
  }

  // 4. Preguntas: línea → pregunta → respondes → respuesta corta. Luego ronda rápida revuelta.
  function fasePreguntas(){
    const ps = h.preguntas || [];
    if (!ps.length){ sigFase(); return }
    let lista = ps.map(p => ({p, conLinea: true})), i = 0, rapida = false, manos = false;
    const una = () => {
      parar();
      const {p, conLinea} = lista[i], x = h.lineas[p[0]];
      caja().innerHTML = `<p class="small" style="margin:0">${rapida ? '⚡ <b>Ronda rápida:</b> las mismas preguntas, revueltas y sin la frase.' : '❓ Oye la frase y responde la pregunta en voz alta, corto.'} · ${i + 1} de ${lista.length}</p>
        ${conLinea ? linea(x, false, 'id="hsLinea"') : ''}
        <div class="flash" style="min-height:0;padding:14px"><div class="f" ${hsJa(o.lang) ? 'lang="ja"' : ''} style="font-size:24px">${esc(p[1])}</div>${p[2] ? `<div style="color:${color}">${esc(p[2])}</div>` : ''}
          <div id="hsResp" hidden style="margin-top:8px"><div ${hsJa(o.lang) ? 'lang="ja"' : ''} style="font-size:24px;color:var(--ok);font-weight:700">${esc(p[3])}</div>${p[4] ? `<div style="color:${color}">${esc(p[4])}</div>` : ''}${p[5] ? `<div class="muted small">${esc(p[5])}</div>` : ''}</div></div>
        <div class="row"><button class="primary" id="hsHablo">🎤 Responder</button><button id="hsVer">👀 Ver respuesta</button><button class="ghost" id="hsManos">${manos ? '⏸ Parar manos libres' : '🚗 Manos libres'}</button></div>
        <p class="small" id="hsRes" style="min-height:22px"></p>
        <button class="primary" id="hsOtraP" style="font-size:18px;padding:14px">${i < lista.length - 1 ? 'Siguiente pregunta →' : rapida ? (st.f < fases.length - 1 ? 'Siguiente →' : 'Terminar →') : 'Ronda rápida →'}</button>`;
      const g = ++gen;
      const mostrar = async () => { const r = caja().querySelector('#hsResp'); if (r) r.hidden = false; await di(p[3]) };
      const avanzar = () => {
        if (i < lista.length - 1){ i++; una(); return }
        if (!rapida){ rapida = true; lista = hsMezclar(ps).map(q => ({p: q, conLinea: false})); i = 0; una(); return }
        manos = false; sigFase();
      };
      if (conLinea) caja().querySelector('#hsLinea').onclick = () => { const s = caja().querySelector('[data-hssub]'); s.hidden = !s.hidden; parar(); di(x[1]) };
      caja().querySelector('#hsVer').onclick = () => { parar(); mostrar() };
      caja().querySelector('#hsOtraP').onclick = () => { manos = false; avanzar() };
      caja().querySelector('#hsManos').onclick = () => { manos = !manos; if (manos) una(); else { parar(); caja().querySelector('#hsManos').textContent = '🚗 Manos libres' } };
      caja().querySelector('#hsHablo').onclick = async () => {
        const el = caja().querySelector('#hsRes');
        manos = false; caja().querySelector('#hsManos').textContent = '🚗 Manos libres';
        try {
          parar(); el.innerHTML = '🎤 Te escucho…';
          const dijo = await escucharVoz(o.lang);
          const esperado = hsPolaridad(p[3], o.lang), dicho = hsPolaridad(dijo, o.lang);
          const ok = esperado !== 0 ? dicho === esperado : hsParecido(dijo, p[3], o.lang) >= 0.6;
          // En japonés el teléfono escribe con kanji (朝 en vez de あさ): ahí cuenta que la respuesta sea completa, no letra por letra
          const completo = ok && (hsJa(o.lang) ? hsNormJa(dijo).length >= hsNormJa(p[3]).length * 0.6 : hsParecido(dijo, p[3], o.lang) >= 0.7);
          st.total++; if (ok) st.aciertos++;
          el.innerHTML = resultado(ok, `${ok ? (completo ? '¡Perfecto!' : 'Correcto. Ahora dila completa como en el modelo.') : 'No era así, escucha la respuesta.'} · Escuché: "${esc(dijo)}"`);
          await mostrar();
        } catch(e){ el.innerHTML = '⚠️ ' + esc(e.message) }
      };
      // Al entrar: suena la frase (si va) y la pregunta; en manos libres, pausa para que respondas y sigue sola
      (async () => {
        if (conLinea){ await di(x[1]); if (g !== gen) return; await wait(500) }
        if (g !== gen) return;
        await di(p[1]); if (g !== gen) return;
        if (!manos) return;
        const el = caja().querySelector('#hsRes'); if (el) el.textContent = '⏳ Responde en voz alta…';
        await wait(4000); if (g !== gen) return;
        await mostrar(); if (g !== gen) return;
        await wait(1500); if (g !== gen || !manos) return;
        avanzar();
      })();
    };
    una();
  }

  pintar();
  return {parar};
}
