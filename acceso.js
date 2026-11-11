/* Pantalla de acceso de Arranca, como en cualquier plataforma: iniciar sesión, crear cuenta y "olvidé mi contraseña".
   Aparece cuando no hay sesión y se quita sola al entrar. Si llegas desde el correo para cambiar tu contraseña,
   muestra el cuadro de "nueva contraseña". La sesión se guarda en el dispositivo, así que abre aunque no haya internet. */

(function estilos(){
  const st = document.createElement('style');
  st.textContent = `
  #acceso{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:24px 16px;overflow-y:auto;
    background:radial-gradient(900px 520px at 85% -10%,rgba(56,120,248,.28),transparent 60%),radial-gradient(800px 480px at -10% 110%,rgba(56,189,248,.16),transparent 60%),var(--bg)}
  #acceso[hidden]{display:none}
  .ac-caja{width:100%;max-width:410px;display:grid;gap:18px}
  .ac-marca{display:grid;justify-items:center;gap:8px;text-align:center}
  .ac-marca .mark{width:64px;height:64px;border-radius:18px;display:grid;place-items:center;background:var(--metal);border:1px solid rgba(var(--led),.55);
    box-shadow:var(--glow);font:900 30px var(--f-led);color:var(--accent);text-shadow:0 0 14px rgba(var(--led),.9)}
  .ac-marca h1{font:800 32px var(--f-display);letter-spacing:-.6px}
  .ac-marca h1 span{color:var(--accent);text-shadow:0 0 14px rgba(var(--led),.7)}
  .ac-marca p{margin:0;color:var(--muted)}
  .ac-tarjeta{display:grid;gap:14px;padding:22px}
  .ac-tabs{display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:4px;border-radius:14px;background:#081228;border:1px solid var(--line)}
  .ac-tabs[hidden]{display:none}
  .ac-tabs button{border:1px solid transparent;background:transparent;color:var(--muted);min-height:42px}
  .ac-tabs button[aria-selected="true"]{color:var(--ink);background:linear-gradient(180deg,rgba(var(--led),.22),rgba(var(--led),.06));border-color:rgba(var(--led),.45);box-shadow:0 0 14px rgba(var(--led),.25)}
  .ac-form{display:grid;gap:12px}
  .ac-form[hidden]{display:none}
  .ac-form h2{font-size:20px}
  .ac-campo{display:grid;gap:6px;font-size:14px;color:var(--muted)}
  .ac-campo input{min-height:46px;font-size:16px}
  .ac-clave{position:relative;display:block}
  .ac-clave input{padding-right:52px}
  .ac-ver{position:absolute;right:4px;top:50%;transform:translateY(-50%);width:44px;height:40px;padding:0;border:0;background:transparent;color:var(--muted)}
  .ac-ver svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
  .ac-form button[type=submit]{min-height:48px;font-size:16px}
  .ac-link{background:none;border:0;padding:4px 0;color:var(--accent);font:700 14px var(--f-body);justify-self:start;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
  .ac-msg{min-height:20px;font-size:14px;margin:0}
  .ac-msg.error{color:#fca5a5}
  .ac-msg.ok{color:var(--ok)}
  .ac-ayuda{font-size:13px;color:var(--muted);margin:0}
  `;
  document.head.append(st);
})();

const AC_OJO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const acCampoClave = (id, etiqueta, auto) => `<label class="ac-campo" for="${id}">${etiqueta}
  <span class="ac-clave"><input id="${id}" type="password" autocomplete="${auto}" required minlength="8">
  <button type="button" class="ac-ver" data-ver="${id}" aria-label="Mostrar contraseña">${AC_OJO}</button></span></label>`;

document.body.insertAdjacentHTML('beforeend', `
<div id="acceso" hidden role="dialog" aria-modal="true" aria-labelledby="acTitulo">
  <div class="ac-caja">
    <div class="ac-marca"><span class="mark" aria-hidden="true">A</span><h1 id="acTitulo">Arran<span>ca</span>.</h1><p>Estudia todos los días, sin excusas.</p></div>
    <div class="card ac-tarjeta">
      <div class="ac-tabs" role="tablist" id="acTabs">
        <button type="button" role="tab" aria-selected="true" data-vista="entrar">Iniciar sesión</button>
        <button type="button" role="tab" aria-selected="false" data-vista="crear">Crear cuenta</button>
      </div>

      <form class="ac-form" id="acEntrar" novalidate>
        <label class="ac-campo" for="acEmail">Correo<input id="acEmail" type="email" inputmode="email" autocomplete="email" required></label>
        ${acCampoClave('acClave', 'Contraseña', 'current-password')}
        <button type="button" class="ac-link" data-vista="olvide">¿Olvidaste tu contraseña?</button>
        <p class="ac-msg" aria-live="polite"></p>
        <button type="submit" class="primary">Entrar</button>
      </form>

      <form class="ac-form" id="acCrear" novalidate hidden>
        <label class="ac-campo" for="acNombre">Tu nombre<input id="acNombre" autocomplete="given-name" maxlength="30" required></label>
        <label class="ac-campo" for="acEmail2">Correo<input id="acEmail2" type="email" inputmode="email" autocomplete="email" required></label>
        ${acCampoClave('acClave2', 'Contraseña (mínimo 8 caracteres)', 'new-password')}
        ${acCampoClave('acClave3', 'Repite la contraseña', 'new-password')}
        <p class="ac-msg" aria-live="polite"></p>
        <button type="submit" class="primary">Crear cuenta</button>
      </form>

      <form class="ac-form" id="acOlvide" novalidate hidden>
        <h2>Recupera tu contraseña</h2>
        <p class="ac-ayuda">Escribe tu correo y te mandamos un enlace para crear una nueva.</p>
        <label class="ac-campo" for="acEmail3">Correo<input id="acEmail3" type="email" inputmode="email" autocomplete="email" required></label>
        <p class="ac-msg" aria-live="polite"></p>
        <button type="submit" class="primary">Mandar enlace</button>
        <button type="button" class="ac-link" data-vista="entrar">← Volver a iniciar sesión</button>
      </form>

      <form class="ac-form" id="acNueva" novalidate hidden>
        <h2>Crea tu nueva contraseña</h2>
        ${acCampoClave('acNueva1', 'Nueva contraseña (mínimo 8 caracteres)', 'new-password')}
        ${acCampoClave('acNueva2', 'Repítela', 'new-password')}
        <p class="ac-msg" aria-live="polite"></p>
        <button type="submit" class="primary">Guardar contraseña</button>
      </form>
    </div>
  </div>
</div>`);

let acRecuperando = false;
const acForms = {entrar: 'acEntrar', crear: 'acCrear', olvide: 'acOlvide', nueva: 'acNueva'};
function acVista(v){
  Object.entries(acForms).forEach(([k, id]) => { $(id).hidden = k !== v; const m = $(id).querySelector('.ac-msg'); m.textContent = ''; m.className = 'ac-msg' });
  $('acTabs').hidden = v === 'olvide' || v === 'nueva';
  document.querySelectorAll('#acTabs [data-vista]').forEach(b => b.setAttribute('aria-selected', b.dataset.vista === v ? 'true' : 'false'));
  if (v === 'olvide') $('acEmail3').value = $('acEmail').value;
  setTimeout(() => $(acForms[v]).querySelector('input')?.focus(), 30);
}
function mostrarAcceso(mostrar){
  if (acRecuperando) mostrar = true;
  $('acceso').hidden = !mostrar;
  document.body.style.overflow = mostrar ? 'hidden' : '';
}
// Llegaste desde el correo de "olvidé mi contraseña": ya hay sesión temporal, falta la nueva contraseña
function accesoNuevaClave(){ acRecuperando = true; mostrarAcceso(true); acVista('nueva') }

const acMsg = (form, texto, ok) => { const m = form.querySelector('.ac-msg'); m.textContent = texto; m.className = 'ac-msg ' + (ok ? 'ok' : 'error') };
const acEmailOk = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
function acError(e){
  const t = String(e?.message || e || '');
  if (!navigator.onLine || /fetch|network|load failed/i.test(t)) return 'No hay conexión. Revisa tu internet e intenta otra vez.';
  if (/invalid login|invalid credentials/i.test(t)) return 'Correo o contraseña incorrectos.';
  if (/not confirmed/i.test(t)) return 'Primero confirma tu cuenta con el enlace que te mandamos por correo.';
  if (/already registered|already been registered|exists/i.test(t)) return 'Ya existe una cuenta con ese correo. Inicia sesión o recupera tu contraseña.';
  if (/signups? not allowed|disabled/i.test(t)) return 'Por ahora no se pueden crear cuentas nuevas.';
  if (/rate limit|too many|security purposes/i.test(t)) return 'Hiciste varios intentos seguidos. Espera un minuto y vuelve a intentar.';
  if (/password/i.test(t) && /weak|short|least/i.test(t)) return 'La contraseña es muy débil: usa al menos 8 caracteres.';
  return 'No se pudo completar: ' + t;
}
async function acEnviar(form, boton, texto, fn){
  const antes = boton.textContent; boton.disabled = true; boton.textContent = texto;
  try { await fn() } catch(e){ acMsg(form, acError(e)) }
  boton.disabled = false; boton.textContent = antes;
}

$('acceso').addEventListener('click', e => {
  const v = e.target.closest('[data-vista]'); if (v) acVista(v.dataset.vista);
  const ver = e.target.closest('[data-ver]');
  if (ver){ const i = $(ver.dataset.ver), mostrar = i.type === 'password'; i.type = mostrar ? 'text' : 'password'; ver.setAttribute('aria-label', mostrar ? 'Ocultar contraseña' : 'Mostrar contraseña') }
});

$('acEntrar').addEventListener('submit', e => {
  e.preventDefault(); const f = e.currentTarget, email = $('acEmail').value.trim(), clave = $('acClave').value;
  if (!acEmailOk(email)) return acMsg(f, 'Escribe un correo válido.');
  if (!clave) return acMsg(f, 'Escribe tu contraseña.');
  acEnviar(f, f.querySelector('[type=submit]'), 'Entrando…', async () => {
    const { error } = await sb.auth.signInWithPassword({email, password: clave});
    if (error) throw error;
  });
});

$('acCrear').addEventListener('submit', e => {
  e.preventDefault(); const f = e.currentTarget;
  const nombre = $('acNombre').value.trim(), email = $('acEmail2').value.trim(), c1 = $('acClave2').value, c2 = $('acClave3').value;
  if (!nombre) return acMsg(f, 'Escribe tu nombre.');
  if (!acEmailOk(email)) return acMsg(f, 'Escribe un correo válido.');
  if (c1.length < 8) return acMsg(f, 'La contraseña necesita al menos 8 caracteres.');
  if (c1 !== c2) return acMsg(f, 'Las contraseñas no coinciden.');
  acEnviar(f, f.querySelector('[type=submit]'), 'Creando tu cuenta…', async () => {
    const { data, error } = await sb.auth.signUp({email, password: c1, options: {data: {nombre: nombre.slice(0, 30)}, emailRedirectTo: location.origin + location.pathname}});
    if (error) throw error;
    // Si Supabase pide confirmar el correo, no hay sesión todavía
    if (!data.session) acMsg(f, `¡Listo! Te mandamos un correo a ${email}. Abre el enlace para confirmar tu cuenta y luego inicia sesión. Revisa también la carpeta de spam.`, true);
  });
});

$('acOlvide').addEventListener('submit', e => {
  e.preventDefault(); const f = e.currentTarget, email = $('acEmail3').value.trim();
  if (!acEmailOk(email)) return acMsg(f, 'Escribe un correo válido.');
  acEnviar(f, f.querySelector('[type=submit]'), 'Mandando…', async () => {
    const { error } = await sb.auth.resetPasswordForEmail(email, {redirectTo: location.origin + location.pathname});
    if (error) throw error;
    acMsg(f, `Si existe una cuenta con ${email}, te llegará un correo con el enlace en unos minutos. Revisa también spam.`, true);
  });
});

$('acNueva').addEventListener('submit', e => {
  e.preventDefault(); const f = e.currentTarget, c1 = $('acNueva1').value, c2 = $('acNueva2').value;
  if (c1.length < 8) return acMsg(f, 'La contraseña necesita al menos 8 caracteres.');
  if (c1 !== c2) return acMsg(f, 'Las contraseñas no coinciden.');
  acEnviar(f, f.querySelector('[type=submit]'), 'Guardando…', async () => {
    const { error } = await sb.auth.updateUser({password: c1});
    if (error) throw error;
    acRecuperando = false; acMsg(f, '¡Listo! Tu contraseña quedó guardada.', true);
    history.replaceState(null, '', location.pathname);
    setTimeout(() => mostrarAcceso(!session), 1200);
  });
});

// Si Supabase ya revisó la sesión antes de que cargara este archivo
if (window.arrancaSesionLista) mostrarAcceso(!session);
