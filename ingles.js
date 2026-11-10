/* Pestaña English de Arranca: historias cortas con la mecánica de la clase de Kale Anders (motor en historias.js).
   Cada historia: monólogo o diálogo natural con muletillas (well, actually, you know?), una frase clave,
   y preguntas de sí o no con trampa para responder corto: "Is she a teacher? Yes, she is." */

const EN_HISTORIAS = [
{id:'e1', titulo:"Marco's early job", nivel:'A2', lineas:[
  ['Marco',"Hi, I'm Marco. Well, I work at a small bakery downtown.",'','Hola, soy Marco. Bueno, trabajo en una panadería pequeña en el centro.'],
  ['Marco',"Actually, I start work at five in the morning.",'','De hecho, empiezo a trabajar a las cinco de la mañana.'],
  ['Marco',"I know, it's super early, right?",'','Ya sé, es súper temprano, ¿verdad?'],
  ['Marco',"I make bread, cookies and sometimes birthday cakes.",'','Hago pan, galletas y a veces pasteles de cumpleaños.'],
  ['Marco',"My favorite part is the smell of fresh bread.",'','Mi parte favorita es el olor del pan recién hecho.'],
  ['Marco',"My boss is really kind. She always buys us coffee.",'','Mi jefa es muy amable. Siempre nos compra café.'],
  ['Marco',"I finish at one, so I have the whole afternoon free.",'','Termino a la una, así que tengo toda la tarde libre.'],
  ['Marco',"Honestly, I love my job. It makes people happy.",'','Honestamente, amo mi trabajo. Hace feliz a la gente.']],
 clave:7, preguntas:[
  [0,'Does Marco work at a big restaurant?','',"No, he doesn't.",'','¿Marco trabaja en un restaurante grande? No.'],
  [1,'Does he start work at five?','','Yes, he does.','','¿Empieza a trabajar a las cinco? Sí.'],
  [2,'Is it late?','',"No, it isn't.",'','¿Es tarde? No.'],
  [3,'Does he make birthday cakes?','','Yes, he does.','','¿Hace pasteles de cumpleaños? Sí.'],
  [5,'Is his boss mean?','',"No, she isn't.",'','¿Su jefa es mala onda? No.'],
  [5,'Does she buy them coffee?','','Yes, she does.','','¿Ella les compra café? Sí.'],
  [6,'Does he finish at six?','',"No, he doesn't.",'','¿Termina a las seis? No.'],
  [7,'Does Marco love his job?','','Yes, he does.','','¿Marco ama su trabajo? Sí.']],
 frases:[["It's super early, right?",'Es súper temprano, ¿verdad?'],['I have the whole afternoon free.','Tengo toda la tarde libre.'],['It makes people happy.','Hace feliz a la gente.']]},

{id:'e2', titulo:'Weekend plans', nivel:'A2', lineas:[
  ['Emma',"Hey Jake, any plans for the weekend?",'','Oye Jake, ¿algún plan para el fin de semana?'],
  ['Jake',"Actually, yeah. I'm going hiking with my brother.",'','De hecho, sí. Voy a ir de excursión con mi hermano.'],
  ['Emma',"Nice! Where are you going?",'','¡Qué bien! ¿A dónde van?'],
  ['Jake',"To the mountains, about an hour from here.",'','A las montañas, como a una hora de aquí.'],
  ['Emma',"But isn't it going to rain on Saturday?",'','¿Pero no va a llover el sábado?'],
  ['Jake',"Oh no, really? I didn't check the weather.",'','Ay no, ¿en serio? No revisé el clima.'],
  ['Emma',"Maybe go on Sunday instead. It's going to be sunny.",'','Mejor ve el domingo. Va a estar soleado.'],
  ['Jake',"Good idea. Then on Saturday we can watch a movie.",'','Buena idea. Entonces el sábado podemos ver una película.']],
 clave:6, preguntas:[
  [1,'Is Jake going hiking?','','Yes, he is.','','¿Jake va a ir de excursión? Sí.'],
  [1,'Is he going with his sister?','',"No, he isn't.",'','¿Va con su hermana? No.'],
  [3,'Are the mountains far away?','',"No, they aren't.",'','¿Las montañas están lejos? No.'],
  [4,'Is it going to rain on Saturday?','','Yes, it is.','','¿Va a llover el sábado? Sí.'],
  [5,'Did Jake check the weather?','',"No, he didn't.",'','¿Jake revisó el clima? No.'],
  [6,'Is it going to be sunny on Sunday?','','Yes, it is.','','¿Va a estar soleado el domingo? Sí.'],
  [7,'Can they watch a movie on Saturday?','','Yes, they can.','','¿Pueden ver una película el sábado? Sí.']],
 frases:[['Any plans for the weekend?','¿Algún plan para el fin de semana?'],["I didn't check the weather.",'No revisé el clima.'],['Maybe go on Sunday instead.','Mejor ve el domingo.']]},

{id:'e3', titulo:'At the coffee shop', nivel:'A2', lineas:[
  ['Barista',"Good morning! What can I get for you?",'','¡Buenos días! ¿Qué te sirvo?'],
  ['Luis',"Hi! Can I have a large latte, please?",'','¡Hola! ¿Me das un latte grande, por favor?'],
  ['Barista',"Sure. Regular milk or oat milk?",'','Claro. ¿Leche normal o de avena?'],
  ['Luis',"Oat milk, please. And, um, one blueberry muffin.",'','De avena, por favor. Y, eh, un muffin de mora azul.'],
  ['Barista',"Great. Can I get your name?",'','Perfecto. ¿Me das tu nombre?'],
  ['Luis',"It's Luis. L-U-I-S.",'','Es Luis. L-U-I-S.'],
  ['Barista',"Okay... here you go, Lewis!",'','Okay... ¡aquí tienes, Lewis!'],
  ['Luis',"Close enough. Thanks, have a nice day!",'','Casi. ¡Gracias, que tengas buen día!']],
 clave:1, preguntas:[
  [1,'Does Luis want a small latte?','',"No, he doesn't.",'','¿Luis quiere un latte chico? No.'],
  [3,'Does he want oat milk?','','Yes, he does.','','¿Quiere leche de avena? Sí.'],
  [3,'Does he order a chocolate cake?','',"No, he doesn't.",'','¿Pide un pastel de chocolate? No.'],
  [4,'Does the barista ask for his name?','','Yes, she does.','','¿La barista le pregunta su nombre? Sí.'],
  [6,'Does she write his name correctly?','',"No, she doesn't.",'','¿Escribe bien su nombre? No.'],
  [7,'Is Luis angry?','',"No, he isn't.",'','¿Luis está enojado? No.']],
 frases:[['Can I have a large latte, please?','¿Me das un latte grande, por favor?'],['Can I get your name?','¿Me das tu nombre?'],['Close enough.','Casi / Ya ni modo, está bien.']]},

{id:'e4', titulo:'A crazy Monday', nivel:'A2', lineas:[
  ['Nina',"Okay, so yesterday was a crazy Monday.",'','Okay, pues ayer fue un lunes de locos.'],
  ['Nina',"First, I missed the bus, so I was late for work.",'','Primero, perdí el camión, así que llegué tarde al trabajo.'],
  ['Nina',"Then my laptop died in the middle of a meeting.",'','Luego mi laptop se apagó a mitad de una junta.'],
  ['Nina',"I was so embarrassed, you know?",'','Me dio tanta pena, ¿sabes?'],
  ['Nina',"But my coworker Sam lent me his charger.",'','Pero mi compañero Sam me prestó su cargador.'],
  ['Nina',"At lunch, I spilled coffee on my white shirt.",'','En la comida, me tiré café en mi camisa blanca.'],
  ['Nina',"By the way, it was a brand new shirt.",'','Por cierto, era una camisa nuevecita.'],
  ['Nina',"Anyway, today is a new day. Things can only get better.",'','En fin, hoy es un nuevo día. Las cosas solo pueden mejorar.']],
 clave:7, preguntas:[
  [1,'Did Nina miss the bus?','','Yes, she did.','','¿Nina perdió el camión? Sí.'],
  [1,'Was she early for work?','',"No, she wasn't.",'','¿Llegó temprano al trabajo? No.'],
  [2,'Did her phone die?','',"No, it didn't.",'','¿Se le apagó el teléfono? No.'],
  [4,'Did Sam lend her his charger?','','Yes, he did.','','¿Sam le prestó su cargador? Sí.'],
  [5,'Did she spill juice on her shirt?','',"No, she didn't.",'','¿Se tiró jugo en la camisa? No.'],
  [6,'Was it an old shirt?','',"No, it wasn't.",'','¿Era una camisa vieja? No.'],
  [7,'Is today a new day?','','Yes, it is.','','¿Hoy es un nuevo día? Sí.']],
 frases:[['I missed the bus.','Perdí el camión.'],['I was so embarrassed.','Me dio mucha pena.'],['Things can only get better.','Las cosas solo pueden mejorar.']]},

{id:'e5', titulo:'Moving day', nivel:'A2', lineas:[
  ['Ana',"Thanks so much for helping me move today.",'','Muchas gracias por ayudarme con la mudanza hoy.'],
  ['Ben',"No problem. Wow, you have a lot of boxes!",'','No hay problema. ¡Guau, tienes muchas cajas!'],
  ['Ana',"I know. Most of them are books, actually.",'','Ya sé. De hecho, casi todas son libros.'],
  ['Ben',"That explains why they're so heavy.",'','Eso explica por qué pesan tanto.'],
  ['Ana',"Be careful with that one. It has my grandma's plates.",'','Cuidado con esa. Tiene los platos de mi abuela.'],
  ['Ben',"Got it. What about the couch?",'','Entendido. ¿Y el sillón?'],
  ['Ana',"My neighbor is going to help us with the couch.",'','Mi vecino nos va a ayudar con el sillón.'],
  ['Ben',"Perfect. And after that, pizza?",'','Perfecto. ¿Y después de eso, pizza?'],
  ['Ana',"Definitely. Pizza is on me.",'','Claro que sí. La pizza la invito yo.']],
 clave:8, preguntas:[
  [0,'Is Ben helping Ana move?','','Yes, he is.','','¿Ben está ayudando a Ana con la mudanza? Sí.'],
  [1,'Does Ana have only a few boxes?','',"No, she doesn't.",'','¿Ana tiene pocas cajas? No.'],
  [2,'Are most of the boxes clothes?','',"No, they aren't.",'','¿Casi todas las cajas son ropa? No.'],
  [3,'Are the boxes heavy?','','Yes, they are.','','¿Las cajas pesan? Sí.'],
  [4,"Does that box have her grandma's plates?",'','Yes, it does.','','¿Esa caja tiene los platos de su abuela? Sí.'],
  [6,'Is her brother going to help with the couch?','',"No, he isn't.",'','¿Su hermano va a ayudar con el sillón? No.'],
  [8,'Is Ana paying for the pizza?','','Yes, she is.','','¿Ana va a pagar la pizza? Sí.']],
 frases:[['That explains why...','Eso explica por qué...'],['Be careful with that one.','Cuidado con esa.'],['Pizza is on me.','La pizza la invito yo.']]},

{id:'e6', titulo:'My little brother', nivel:'A2', lineas:[
  ['Sofia',"I want to tell you about my little brother, Tom.",'','Les quiero contar de mi hermanito, Tom.'],
  ['Sofia',"He's ten years old and he's super funny.",'','Tiene diez años y es súper chistoso.'],
  ['Sofia',"He loves video games, but my mom only lets him play on weekends.",'','Le encantan los videojuegos, pero mi mamá solo lo deja jugar los fines de semana.'],
  ['Sofia',"So during the week, he plays soccer after school.",'','Así que entre semana, juega futbol después de la escuela.'],
  ['Sofia',"Actually, he's really good. He scored three goals last Friday.",'','De hecho, es muy bueno. Metió tres goles el viernes pasado.'],
  ['Sofia',"Sometimes he's annoying, like when he eats my snacks.",'','A veces es molesto, como cuando se come mis botanas.'],
  ['Sofia',"But when I'm sad, he always makes me laugh.",'','Pero cuando estoy triste, siempre me hace reír.'],
  ['Sofia',"Honestly, he's my best friend.",'','Honestamente, es mi mejor amigo.']],
 clave:6, preguntas:[
  [1,'Is Tom fifteen years old?','',"No, he isn't.",'','¿Tom tiene quince años? No.'],
  [1,'Is he funny?','','Yes, he is.','','¿Es chistoso? Sí.'],
  [2,'Can he play video games every day?','',"No, he can't.",'','¿Puede jugar videojuegos todos los días? No.'],
  [3,'Does he play soccer after school?','','Yes, he does.','','¿Juega futbol después de la escuela? Sí.'],
  [4,'Did he score one goal last Friday?','',"No, he didn't.",'','¿Metió un gol el viernes pasado? No.'],
  [5,'Does he eat her snacks?','','Yes, he does.','','¿Se come sus botanas? Sí.'],
  [6,'Does he make her laugh?','','Yes, he does.','','¿La hace reír? Sí.']],
 frases:[['He always makes me laugh.','Siempre me hace reír.'],['He scored three goals.','Metió tres goles.'],["He's my best friend.",'Es mi mejor amigo.']]},

{id:'e7', titulo:'The job interview', nivel:'B1', lineas:[
  ['Leo',"I have a job interview tomorrow and I'm kind of nervous.",'','Tengo una entrevista de trabajo mañana y estoy algo nervioso.'],
  ['Mia',"Don't worry, you're going to do great. What's the job?",'','No te preocupes, te va a ir súper bien. ¿Qué trabajo es?'],
  ['Leo',"It's a data analyst position at a big company.",'','Es un puesto de analista de datos en una empresa grande.'],
  ['Mia',"That's perfect for you! You love working with numbers.",'','¡Es perfecto para ti! Te encanta trabajar con números.'],
  ['Leo',"True. But what if they ask me something I don't know?",'','Cierto. ¿Pero qué tal si me preguntan algo que no sé?'],
  ['Mia',"Just be honest. Say you're still learning, but you learn fast.",'','Solo sé honesto. Di que todavía estás aprendiendo, pero que aprendes rápido.'],
  ['Leo',"That's good advice. Can we practice some questions tonight?",'','Buen consejo. ¿Podemos practicar algunas preguntas en la noche?'],
  ['Mia',"Of course. Let's do it after dinner.",'','Claro. Hagámoslo después de cenar.']],
 clave:5, preguntas:[
  [0,'Is the interview today?','',"No, it isn't.",'','¿La entrevista es hoy? No.'],
  [0,'Is Leo nervous?','','Yes, he is.','','¿Leo está nervioso? Sí.'],
  [2,'Is it a teacher position?','',"No, it isn't.",'','¿Es un puesto de maestro? No.'],
  [3,'Does Leo love working with numbers?','','Yes, he does.','','¿A Leo le encanta trabajar con números? Sí.'],
  [5,'Should he lie in the interview?','',"No, he shouldn't.",'','¿Debería mentir en la entrevista? No.'],
  [6,'Do they want to practice tonight?','','Yes, they do.','','¿Quieren practicar en la noche? Sí.'],
  [7,'Are they going to practice before dinner?','',"No, they aren't.",'','¿Van a practicar antes de cenar? No.']],
 frases:[["I'm kind of nervous.",'Estoy algo nervioso.'],["What if they ask me something I don't know?",'¿Qué tal si me preguntan algo que no sé?'],["I'm still learning, but I learn fast.",'Todavía estoy aprendiendo, pero aprendo rápido.']]},

{id:'e8', titulo:'Dinner disaster', nivel:'B1', lineas:[
  ['Kate',"So, I invited some friends for dinner last night.",'','Pues, invité a unos amigos a cenar anoche.'],
  ['Kate',"I wanted to cook pasta, you know, something easy.",'','Quería hacer pasta, ya sabes, algo fácil.'],
  ['Kate',"But I was talking on the phone and I burned the garlic.",'','Pero estaba hablando por teléfono y se me quemó el ajo.'],
  ['Kate',"The whole apartment smelled terrible.",'','Todo el departamento olía horrible.'],
  ['Kate',"Then the smoke alarm went off, right when my friends arrived.",'','Luego sonó la alarma de humo, justo cuando llegaron mis amigos.'],
  ['Kate',"We opened all the windows and just laughed.",'','Abrimos todas las ventanas y nada más nos reímos.'],
  ['Kate',"In the end, we ordered tacos instead.",'','Al final, mejor pedimos tacos.'],
  ['Kate',"Honestly, it was the best dinner ever.",'','Honestamente, fue la mejor cena de la vida.']],
 clave:6, preguntas:[
  [0,'Did Kate invite friends for lunch?','',"No, she didn't.",'','¿Kate invitó a sus amigos a comer? No.'],
  [1,'Did she want to cook pasta?','','Yes, she did.','','¿Quería hacer pasta? Sí.'],
  [2,'Did she burn the onions?','',"No, she didn't.",'','¿Se le quemó la cebolla? No.'],
  [3,'Did the apartment smell good?','',"No, it didn't.",'','¿El departamento olía bien? No.'],
  [4,'Did the smoke alarm go off?','','Yes, it did.','','¿Sonó la alarma de humo? Sí.'],
  [5,'Were her friends angry?','',"No, they weren't.",'','¿Sus amigos se enojaron? No.'],
  [6,'Did they order pizza?','',"No, they didn't.",'','¿Pidieron pizza? No.'],
  [7,'Was it a good night?','','Yes, it was.','','¿Fue una buena noche? Sí.']],
 frases:[['I burned the garlic.','Se me quemó el ajo.'],['The smoke alarm went off.','Sonó la alarma de humo.'],['We ordered tacos instead.','Mejor pedimos tacos.']]}
];

// Progreso sincronizado en `ingl` (declarado en index.html): {done:{id:fecha}, xp, dias:[fechas], u}
let enH = null;
const enData = () => (ingl ||= {done: {}, xp: 0, dias: [], u: 0});
const enDi = (t, rate) => speak(t, 'en-US', rate || 1);
function enRacha(){
  const d = new Set(enData().dias); let n = 0; const t = new Date();
  if (!d.has(ymd(t))) t.setDate(t.getDate() - 1);
  while (d.has(ymd(t))){ n++; t.setDate(t.getDate() - 1) }
  return n;
}

function renderEn(){
  if (enH) return;
  const j = enData(), hechas = Object.keys(j.done).length;
  const sig = EN_HISTORIAS.findIndex(h => !j.done[h.id]);
  $('enArea').innerHTML = `
    <div class="card">
      <div class="row" style="justify-content:space-between">
        <h2>🇺🇸 English · Historias</h2>
        <span class="muted small">⭐ ${j.xp} XP · 🔥 ${enRacha()} ${enRacha() === 1 ? 'día' : 'días'}</span>
      </div>
      <div class="bar"><div style="width:${100 * hechas / EN_HISTORIAS.length}%;background:#2563eb"></div></div>
      <p class="muted small">Con la mecánica de tu clase: oyes la historia completa, repites la frase clave, repites frases sueltas y respondes preguntas cortas: <i>"Is she a teacher? Yes, she is."</i></p>
      <button class="primary" data-enh="${sig >= 0 ? sig : 0}" style="font-size:18px;padding:14px">▶ ${sig >= 0 ? `Historia ${sig + 1}: ${esc(EN_HISTORIAS[sig].titulo)}` : 'Repasar desde la primera'}</button>
    </div>
    <div class="card">
      <h2>Tus historias</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px">
      ${EN_HISTORIAS.map((h, i) => `<button data-enh="${i}" style="flex-direction:column;align-items:flex-start;text-align:left;padding:12px;${i === sig ? 'border-color:#2563eb;box-shadow:inset 0 0 0 2px #2563eb' : ''}">
          <span>${j.done[h.id] ? '✓' : '▶'} ${i + 1}. ${esc(h.titulo)}</span><span class="muted small">${h.nivel} · ${h.lineas.length} frases</span></button>`).join('')}
      </div>
    </div>`;
}

function enAbrir(i){
  enH = EN_HISTORIAS[i]; activar();
  $('enArea').innerHTML = `<div class="card">
    <div class="row" style="justify-content:space-between"><button class="ghost" id="enSalir">← Salir</button><span class="muted small">Historia ${i + 1} de ${EN_HISTORIAS.length} · ${enH.nivel}</span></div>
    <h2>${esc(enH.titulo)}</h2><div id="enBox" style="display:grid;gap:12px"></div></div>`;
  const d = hsDrill($('enBox'), enH, {lang: 'en-US', di: enDi, color: '#2563eb', alTerminar: r => enFin(i, r)});
  $('enSalir').onclick = () => { d.parar(); enH = null; renderEn() };
  window.scrollTo(0, 0);
}

function enFin(i, r){
  const j = enData(), h = EN_HISTORIAS[i], nueva = !j.done[h.id];
  const xp = (nueva ? 50 : 20) + r.aciertos * 10;
  j.xp += xp; j.done[h.id] = j.done[h.id] || today();
  if (!j.dias.includes(today())) j.dias = [...j.dias, today()].slice(-120);
  j.u = Date.now();
  const hay = new Set(cardList().filter(c => c.act === 'ingles').map(c => c.f));
  const lineas = [[h.lineas[h.clave][1], h.lineas[h.clave][3]], ...h.frases].filter(f => !hay.has(f[0])).map(f => `${f[0]} = ${f[1]}`);
  const nuevas = lineas.length ? addCards('ingles', lineas.join('\n')) : 0;
  persist(); chime(false);
  const otra = EN_HISTORIAS.findIndex(x => !j.done[x.id]);
  $('enBox').innerHTML = `<div class="flash"><div class="f">🎉 ¡Historia terminada!</div>
      <div>+${xp} XP${r.total ? ` · ${r.aciertos} de ${r.total} bien con el micrófono` : ''} · 🔥 ${enRacha()} ${enRacha() === 1 ? 'día seguido' : 'días seguidos'}</div>
      <div class="muted small">${nuevas} tarjetas nuevas en tu Repaso con la frase clave y las expresiones de la historia.</div></div>
    <div class="card" style="background:var(--soft)">
      <h2>🎯 Platica de la historia con Claude</h2>
      <p class="small">Claude te hace preguntas en inglés sobre "${esc(h.titulo)}" y sobre tu vida, y te corrige.</p>
      <div class="row"><button class="primary" id="enMision">🗣️ Empezar</button></div></div>
    <div class="row">${otra >= 0 ? '<button class="primary" id="enOtra">Siguiente historia →</button>' : ''}<button id="enMapa">Volver a las historias</button></div>`;
  $('enMapa').onclick = () => { enH = null; renderEn() };
  if (otra >= 0) $('enOtra').onclick = () => enAbrir(otra);
  $('enMision').onclick = () => {
    const esc0 = `Conversation practice (A2 level, short sentences). Talk about this story: "${h.lineas.map(l => l[1]).join(' ')}". Ask the student simple questions about the story and then similar questions about their own life. Use: ${h.frases.map(f => f[0]).join(' / ')}`;
    const sel = $('cvEsc');
    let op = [...sel.options].find(o => o.value === esc0);
    if (!op){ op = new Option('🎯 Historia: ' + h.titulo, esc0); sel.add(op, 0) }
    $('cvLang').value = 'en-US'; sel.value = esc0;
    enH = null; renderEn(); goTab('practica');
    cvHist = []; renderChat(); turnoCv();
  };
}

$('enArea').addEventListener('click', e => { const b = e.target.closest('[data-enh]'); if (b) enAbrir(+b.dataset.enh) });
