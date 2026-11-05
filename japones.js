/* Curso de japonés de Arranca.
   Ideas de políglotas que suben contenido:
   - Steve Kaufmann (LingQ) y "Comprehensible Japanese": primero escuchas mucho algo que casi entiendes.
   - Alexander Argüelles: shadowing, repetir en voz alta justo después del audio.
   - Benny Lewis (Fluent in 3 Months): hablar desde el día 1 con frases que sirven.
   - Luca Lampariello: ida y vuelta, oyes en español y lo dices en japonés.
   - Olly Richards: aprender con historias cortas que repiten las mismas palabras.
   - Repetición espaciada (Anki): lo de hoy pasa solo a tu Repaso.
   La escritura queda para después: aquí se escucha, se lee y se habla. */

const JP_LECCIONES = [
{id:'j1', titulo:'Saludar', kana:[
  ['あ','a','Una "a" con una espada cruzada encima: ¡Ah!'],
  ['い','i','Dos rayitas paradas, como dos letras "i" sin punto: i-i.'],
  ['う','u','Alguien doblado con dolor de panza: ¡Uuuh!'],
  ['え','e','Un bailarín levantando la pierna: ¡Eeeh!'],
  ['お','o','Como あ, pero se le salió una rayita volando: ¡Oh!']],
 escena:{titulo:'Un amigo en la mañana', lineas:[
  ['A','おはよう！','Ohayō!','¡Buenos días!'],
  ['B','おはよう。げんき？','Ohayō. Genki?','Buenos días. ¿Cómo estás?'],
  ['A','うん、げんき！','Un, genki!','¡Sí, bien!'],
  ['B','いいね。','Ii ne.','Qué bien.']]},
 frases:[
  ['おはようございます','ohayō gozaimasu','Buenos días (formal)',[]],
  ['こんにちは','konnichiwa','Hola / buenas tardes',['今日は']],
  ['こんばんは','konbanwa','Buenas noches (al saludar)',['今晩は']],
  ['ありがとう','arigatō','Gracias',['有難う']],
  ['はい','hai','Sí',[]]],
 palabras:[['あい','ai','amor'],['いい','ii','bueno'],['いえ','ie','casa'],['うえ','ue','arriba'],['あお','ao','azul'],['いいえ','iie','no']],
 mision:'Saludar a un vecino japonés en la mañana y preguntarle cómo está'},

{id:'j2', titulo:'En la tienda', kana:[
  ['か','ka','Una "K" con una rayita de más: ka.'],
  ['き','ki','Una llave antigua. En inglés llave es "key": ki.'],
  ['く','ku','El pico abierto de un pájaro cantando cu-cú: ku.'],
  ['け','ke','Otra "K" con un palito al lado: ke.'],
  ['こ','ko','Dos peces koi nadando uno sobre otro: ko.']],
 escena:{titulo:'Comprando un café', lineas:[
  ['A','すみません。','Sumimasen.','Disculpe.'],
  ['B','はい。','Hai.','¿Sí?'],
  ['A','これ、ください。','Kore, kudasai.','Esto, por favor.'],
  ['B','はい、どうぞ。','Hai, dōzo.','Sí, aquí tiene.'],
  ['A','ありがとうございます。','Arigatō gozaimasu.','Muchas gracias.']]},
 frases:[
  ['すみません','sumimasen','Disculpe / perdón',[]],
  ['これください','kore kudasai','Esto, por favor',['これを下さい','これ下さい']],
  ['どうぞ','dōzo','Adelante / aquí tiene',[]],
  ['ありがとうございます','arigatō gozaimasu','Muchas gracias',['有難うございます']],
  ['ごめんなさい','gomen nasai','Lo siento',['御免なさい']]],
 palabras:[['あか','aka','rojo'],['かお','kao','cara'],['えき','eki','estación'],['ここ','koko','aquí'],['いく','iku','ir'],['こえ','koe','voz']],
 mision:'Comprar algo en una tienda pequeña: pedir disculpas para llamar al empleado, pedir algo y dar las gracias'},

{id:'j3', titulo:'Presentarte', kana:[
  ['さ','sa','Un samurái de perfil sacando su espada: sa.'],
  ['し','shi','Un anzuelo de pescar. Shhh, que se espanta el pez: shi.'],
  ['す','su','Un columpio con un nudo: su-be y baja.'],
  ['せ','se','Una silla vista de lado: se-ntarse.'],
  ['そ','so','Una zeta con cola, como el vapor de la sopa: so.']],
 escena:{titulo:'Conociendo a Sakura', lineas:[
  ['A','はじめまして。','Hajimemashite.','Mucho gusto.'],
  ['A','ブランドンです。','Burandon desu.','Soy Brandon.'],
  ['B','さくらです。','Sakura desu.','Soy Sakura.'],
  ['B','よろしくおねがいします。','Yoroshiku onegaishimasu.','Encantada de conocerte.'],
  ['A','よろしく！','Yoroshiku!','¡Igualmente!']]},
 frases:[
  ['はじめまして','hajimemashite','Mucho gusto',['初めまして']],
  ['わたしはブランドンです','watashi wa Burandon desu','Yo soy Brandon',['私はブランドンです']],
  ['よろしくおねがいします','yoroshiku onegaishimasu','Encantado / cuento contigo',['よろしくお願いします']],
  ['メキシコからきました','Mekishiko kara kimashita','Vengo de México',['メキシコから来ました']],
  ['すしがすきです','sushi ga suki desu','Me gusta el sushi',['寿司が好きです','すしが好きです']]],
 palabras:[['すし','sushi','sushi'],['あさ','asa','mañana (temprano)'],['すき','suki','me gusta'],['かさ','kasa','paraguas'],['いす','isu','silla'],['せかい','sekai','mundo']],
 mision:'Presentarte con alguien nuevo: tu nombre, de dónde eres y algo que te gusta'},

{id:'j4', titulo:'A comer', kana:[
  ['た','ta','Una "t" y una "a" pegadas: ta.'],
  ['ち','chi','Alguien chaparrito con pancita: chi-quito.'],
  ['つ','tsu','Una ola de tsunami: tsu.'],
  ['て','te','Una mano estirando el brazo. て también es "mano".'],
  ['と','to','Un dedo del pie con una espina clavada: ¡ay, mi to-billo!']],
 escena:{titulo:'En el restaurante', lineas:[
  ['A','いただきます。','Itadakimasu.','Provecho (antes de comer).'],
  ['B','おいしい！','Oishii!','¡Qué rico!'],
  ['A','おいしいですね。','Oishii desu ne.','Está rico, ¿verdad?'],
  ['B','ごちそうさまでした。','Gochisōsama deshita.','Gracias por la comida.']]},
 frases:[
  ['いただきます','itadakimasu','Provecho (antes de comer)',['頂きます']],
  ['おいしい','oishii','¡Qué rico!',['美味しい']],
  ['ごちそうさまでした','gochisōsama deshita','Gracias por la comida (al terminar)',['ご馳走様でした','ごちそう様でした']],
  ['みずをください','mizu o kudasai','Agua, por favor',['水をください','水を下さい','水ください']],
  ['おなかがすいた','onaka ga suita','Tengo hambre',['お腹が空いた','お腹すいた','おなかすいた']]],
 palabras:[['たこ','tako','pulpo'],['くち','kuchi','boca'],['て','te','mano'],['そと','soto','afuera'],['あつい','atsui','caliente'],['とけい','tokei','reloj']],
 mision:'Comer en un restaurante: decir provecho, comentar que está rico y pedir agua'},

{id:'j5', titulo:'Preguntar', kana:[
  ['な','na','Una monja rezando junto a una cruz: na-vidad.'],
  ['に','ni','Una pared con dos rayitas. に también es el número dos.'],
  ['ぬ','nu','Un fideo enredado en un palillo: nu-do.'],
  ['ね','ne','Un gato (neko) con la cola enroscada: ne.'],
  ['の','no','Un letrero de prohibido: ¡No!']],
 escena:{titulo:'¿Qué es esto?', lineas:[
  ['A','これはなんですか。','Kore wa nan desu ka.','¿Qué es esto?'],
  ['B','それはねこです。','Sore wa neko desu.','Eso es un gato.'],
  ['A','かわいい！','Kawaii!','¡Qué lindo!'],
  ['B','なまえはタマです。','Namae wa Tama desu.','Se llama Tama.']]},
 frases:[
  ['これはなんですか','kore wa nan desu ka','¿Qué es esto?',['これは何ですか']],
  ['いくらですか','ikura desu ka','¿Cuánto cuesta?',[]],
  ['トイレはどこですか','toire wa doko desu ka','¿Dónde está el baño?',[]],
  ['わかりません','wakarimasen','No entiendo',['分かりません']],
  ['もういちどおねがいします','mō ichido onegaishimasu','Otra vez, por favor',['もう一度お願いします']]],
 palabras:[['ねこ','neko','gato'],['いぬ','inu','perro'],['なつ','natsu','verano'],['にく','niku','carne'],['なに','nani','qué'],['きのこ','kinoko','hongo']],
 mision:'Estás de turista y no entiendes algo: pregunta qué es, cuánto cuesta y pide que te lo repitan'},

{id:'j6', titulo:'¿Cómo te sientes?', kana:[
  ['は','ha','Alguien riéndose a carcajadas: ¡Ja, ja! (ha). Ojo: como partícula se lee "wa".'],
  ['ひ','hi','Una sonrisa enorme: ¡ji, ji! (hi).'],
  ['ふ','fu','El monte Fuji con nubecitas alrededor: fu.'],
  ['へ','he','Un cerrito. Llegas a la cima: ¡he!'],
  ['ほ','ho','Como は con una rayita de más, un hombre con sombrero: ho.']],
 escena:{titulo:'Después del trabajo', lineas:[
  ['A','げんきですか。','Genki desu ka.','¿Cómo estás?'],
  ['B','ちょっとつかれました。','Chotto tsukaremashita.','Un poco cansado.'],
  ['A','ほんとう？だいじょうぶ？','Hontō? Daijōbu?','¿En serio? ¿Estás bien?'],
  ['B','だいじょうぶ。がんばります！','Daijōbu. Ganbarimasu!','Estoy bien. ¡Le echaré ganas!']]},
 frases:[
  ['げんきですか','genki desu ka','¿Cómo estás?',['元気ですか']],
  ['ちょっとつかれました','chotto tsukaremashita','Estoy un poco cansado',['ちょっと疲れました']],
  ['だいじょうぶ','daijōbu','Estoy bien / ¿estás bien?',['大丈夫']],
  ['がんばって','ganbatte','¡Échale ganas!',['頑張って']],
  ['ほんとう','hontō','¿En serio? / de verdad',['本当']]],
 palabras:[['はな','hana','flor'],['ひと','hito','persona'],['ふね','fune','barco'],['ほし','hoshi','estrella'],['はし','hashi','palillos'],['ふく','fuku','ropa']],
 mision:'Un compañero de trabajo te pregunta cómo estás después de un turno largo; cuéntale cómo te sientes'},

{id:'j7', titulo:'Mi familia', kana:[
  ['ま','ma','Una mamá cargando con los dos brazos: ma.'],
  ['み','mi','Una nota musical "mi" con su colita.'],
  ['む','mu','Una vaca con cuernos: ¡Muuu!'],
  ['め','me','Un ojo. め también significa "ojo".'],
  ['も','mo','Un anzuelo con dos moscas para pescar: mo.']],
 escena:{titulo:'Hablando de Lía', lineas:[
  ['A','かぞくはなんにんですか。','Kazoku wa nan-nin desu ka.','¿Cuántos son en tu familia?'],
  ['B','むすめがひとりいます。','Musume ga hitori imasu.','Tengo una hija.'],
  ['A','なまえは？','Namae wa?','¿Cómo se llama?'],
  ['B','リアです。だいすきです。','Ria desu. Daisuki desu.','Se llama Lía. La quiero muchísimo.']]},
 frases:[
  ['むすめがいます','musume ga imasu','Tengo una hija',['娘がいます']],
  ['かぞく','kazoku','Familia',['家族']],
  ['だいすき','daisuki','Me encanta / te quiero mucho',['大好き']],
  ['なまえはなんですか','namae wa nan desu ka','¿Cómo te llamas?',['名前は何ですか']],
  ['おやすみなさい','oyasumi nasai','Buenas noches (al dormir)',['お休みなさい']]],
 palabras:[['むすめ','musume','hija'],['あめ','ame','lluvia'],['みみ','mimi','oreja'],['もも','momo','durazno'],['うみ','umi','mar'],['なまえ','namae','nombre']],
 mision:'Platicar de tu familia: cuántos son, que tienes una hija y cómo se llama'},

{id:'j8', titulo:'Hasta mañana', kana:[
  ['や','ya','Una flecha que se clavó: ¡ya!'],
  ['ゆ','yu','Una "U" con un palo atravesado: yu.'],
  ['よ','yo','Un yo-yo colgando de su hilo: yo.'],
  ['わ','wa','Alguien agachado que se espanta: ¡wa!'],
  ['ん','n','Una "n" escrita a la carrera: n. Es la única que va sola sin vocal.']],
 escena:{titulo:'Despidiéndose', lineas:[
  ['A','じゃあ、またあした。','Jā, mata ashita.','Bueno, hasta mañana.'],
  ['B','うん、またね。','Un, mata ne.','Sí, nos vemos.'],
  ['A','きをつけて。','Ki o tsukete.','Cuídate.'],
  ['B','ありがとう。さようなら！','Arigatō. Sayōnara!','Gracias. ¡Adiós!']]},
 frases:[
  ['またあした','mata ashita','Hasta mañana',['また明日']],
  ['またね','mata ne','Nos vemos',[]],
  ['きをつけて','ki o tsukete','Cuídate',['気をつけて','気を付けて']],
  ['さようなら','sayōnara','Adiós',['さよなら']],
  ['おつかれさまです','otsukaresama desu','Buen trabajo (al salir del trabajo)',['お疲れ様です','お疲れさまです']]],
 palabras:[['やま','yama','montaña'],['ゆき','yuki','nieve'],['わたし','watashi','yo'],['ほん','hon','libro'],['にほん','nihon','Japón'],['ゆめ','yume','sueño']],
 mision:'Despedirte de tus compañeros al terminar el turno de trabajo'},

{id:'j9', titulo:'En la ciudad', kana:[
  ['ら','ra','Un 5 con gorrito, como un ratoncito: ra.'],
  ['り','ri','Un río con dos corrientes: ri.'],
  ['る','ru','Un 3 con un rulo abajo: ru.'],
  ['れ','re','Alguien arrodillado rezando: re.'],
  ['ろ','ro','Como る, pero sin rulo: se le rompió. ro.']],
 escena:{titulo:'Buscando la estación', lineas:[
  ['A','すみません、えきはどこですか。','Sumimasen, eki wa doko desu ka.','Disculpe, ¿dónde está la estación?'],
  ['B','まっすぐいって、みぎです。','Massugu itte, migi desu.','Siga derecho y está a la derecha.'],
  ['A','ありがとうございます。','Arigatō gozaimasu.','Muchas gracias.'],
  ['B','いいえ。','Iie.','De nada.']]},
 frases:[
  ['えきはどこですか','eki wa doko desu ka','¿Dónde está la estación?',['駅はどこですか']],
  ['みぎ','migi','Derecha',['右']],
  ['ひだり','hidari','Izquierda',['左']],
  ['まっすぐ','massugu','Derecho',['真っ直ぐ']],
  ['ちかいですか','chikai desu ka','¿Está cerca?',['近いですか']]],
 palabras:[['くるま','kuruma','carro'],['よる','yoru','noche'],['これ','kore','esto'],['それ','sore','eso'],['いろ','iro','color'],['はる','haru','primavera']],
 mision:'Estás perdido en Tokio: pregunta dónde está la estación y si está cerca'},

{id:'j10', titulo:'Mi día', kana:[
  ['が','ga','Las dos comillas hacen el sonido más fuerte: か (ka) se vuelve が (ga).'],
  ['ざ','za','さ (sa) con comillas: za.'],
  ['だ','da','た (ta) con comillas: da.'],
  ['ば','ba','は (ha) con comillas: ba.'],
  ['ぱ','pa','は (ha) con un circulito: pa. El circulito solo va con la familia de は.']],
 escena:{titulo:'Un día de Brandon', lineas:[
  ['','あさ、コーヒーをのみます。','Asa, kōhī o nomimasu.','En la mañana tomo café.'],
  ['','それから、にほんごをべんきょうします。','Sorekara, nihongo o benkyō shimasu.','Luego estudio japonés.'],
  ['','よる、むすめとあそびます。','Yoru, musume to asobimasu.','En la noche juego con mi hija.'],
  ['','たのしいです！','Tanoshii desu!','¡Es divertido!']]},
 frases:[
  ['にほんごをべんきょうします','nihongo o benkyō shimasu','Estudio japonés',['日本語を勉強します']],
  ['たのしい','tanoshii','Divertido',['楽しい']],
  ['がんばります','ganbarimasu','Le voy a echar ganas',['頑張ります']],
  ['コーヒーをください','kōhī o kudasai','Un café, por favor',['コーヒー下さい','コーヒーください']],
  ['いっしょにあそぼう','issho ni asobō','Vamos a jugar juntos',['一緒に遊ぼう']]],
 palabras:[['かぎ','kagi','llave'],['だれ','dare','quién'],['ばら','bara','rosa'],['ぱん','pan','pan'],['かばん','kaban','mochila'],['ごはん','gohan','arroz / comida']],
 mision:'Cuéntale a un amigo japonés cómo es tu día: en la mañana, en la tarde y en la noche'}
];

const JP_PASOS = [
  ['escucha','🎧','Escucha primero'],
  ['kana','🔤','Letras nuevas'],
  ['juego','🎮','Juego rápido'],
  ['leer','📖','Lee palabras'],
  ['sombra','🗣️','Repite como sombra'],
  ['vuelta','🔁','Ida y vuelta'],
  ['fin','🏁','¡Listo!']];

// El progreso vive en `jp` (declarado en index.html para que se sincronice): {done:{id:fecha}, xp, dias:[fechas], u}
let jpL = null, jpPaso = 0, jpEst = {};
const jpData = () => (jp ||= {done: {}, xp: 0, dias: [], u: 0});
const jpGuardar = () => { jpData().u = Date.now(); persist() };
const jpTodasKana = hasta => JP_LECCIONES.slice(0, hasta + 1).flatMap(l => l.kana);
const jpMezclar = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(p => p[1]);
// Si la voz no pudo sonar, lo dice en pantalla con el motivo (en vez de quedarse callado)
async function jpDi(t, rate){
  await speak(t, 'ja-JP', rate || 0.9);
  const ok = ultimaVoz.startsWith('Voz natural') || !ultimaVoz.includes('no tiene voz');
  let b = $('jpSinVoz');
  if (ok){ if (b) b.remove(); return }
  if (!b){ b = document.createElement('div'); b.id = 'jpSinVoz'; b.className = 'card';
    b.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:50;border-color:var(--accent);max-width:560px;margin:auto';
    b.onclick = () => b.remove(); document.body.append(b) }
  b.innerHTML = `🔇 <b>No se pudo oír el japonés.</b><br><span class="small">${esc(ultimaVoz.replace('Voz del teléfono (respaldo) · motivo: ', 'No llegó la voz natural: '))}</span><br><span class="muted small">Toca para cerrar</span>`;
}
const jpNorm = s => String(s || '').replace(/[\s、。！？!?,.「」・]/g, '')
  .replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
function jpRacha(){
  const d = new Set(jpData().dias); let n = 0; const t = new Date();
  if (!d.has(ymd(t))) t.setDate(t.getDate() - 1);
  while (d.has(ymd(t))){ n++; t.setDate(t.getDate() - 1) }
  return n;
}

/* ===== Mapa del curso ===== */
function renderJp(){
  if (jpL){ renderJpPaso(); return }
  const j = jpData(), hechas = Object.keys(j.done).length;
  const sig = JP_LECCIONES.findIndex(l => !j.done[l.id]);
  $('jpArea').innerHTML = `
    <div class="card">
      <div class="row" style="justify-content:space-between">
        <h2>日本語 · Japonés desde cero</h2>
        <span class="muted small">⭐ ${j.xp} XP · 🔥 ${jpRacha()} ${jpRacha() === 1 ? 'día' : 'días'}</span>
      </div>
      <div class="bar"><div style="width:${100 * hechas / JP_LECCIONES.length}%;background:#e11d48"></div></div>
      <p class="muted small">Lecciones de 10 minutos para escuchar, leer y hablar. Primero oyes, luego juegas, al final hablas. Lo que aprendas pasa solo a tu Repaso.</p>
      ${sig >= 0 ? `<button class="primary" data-jpl="${sig}" style="font-size:18px;padding:14px">▶ Lección ${sig + 1}: ${esc(JP_LECCIONES[sig].titulo)}</button>` : '<p><b>🎉 Terminaste el hiragana.</b> Repite las que quieras o practica conversación.</p>'}
    </div>
    <div class="card">
      <h2>Tu camino</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px">
      ${JP_LECCIONES.map((l, i) => {
        const ok = j.done[l.id], abierta = ok || i <= (sig < 0 ? 99 : sig);
        return `<button ${abierta ? `data-jpl="${i}"` : 'disabled'} style="flex-direction:column;align-items:flex-start;text-align:left;padding:12px;${i === sig ? 'border-color:#e11d48;box-shadow:inset 0 0 0 2px #e11d48' : ''}">
          <span style="font-size:20px;white-space:nowrap" lang="ja">${l.kana.map(k => k[0]).join('')}</span>
          <span>${ok ? '✓' : abierta ? '▶' : '🔒'} ${i + 1}. ${esc(l.titulo)}</span></button>`;
      }).join('')}
      </div>
    </div>
    <div class="card">
      <h2>🚗 Para el carro</h2>
      <p class="muted small">Oyes la frase en español, tienes unos segundos para decirla en japonés y luego la oyes dos veces. Manos libres.</p>
      <div class="row"><button id="jpCarro">▶ Escuchar lo que llevo</button></div>
    </div>
    <details class="card"><summary>¿De dónde salió este método?</summary>
      <ul class="small" style="margin:8px 0;padding-left:20px;display:grid;gap:4px">
        <li><b>Steve Kaufmann</b> y el canal <b>Comprehensible Japanese</b>: escucha mucho algo que casi entiendes. Por eso cada lección empieza con una escena.</li>
        <li><b>Alexander Argüelles</b>: shadowing, repetir en voz alta justo después del audio para pegarte el ritmo y la pronunciación.</li>
        <li><b>Benny Lewis</b>: habla desde el día uno. Cada lección trae frases para usar ya y una misión con Claude.</li>
        <li><b>Luca Lampariello</b>: ida y vuelta, oyes en español y lo dices en japonés.</li>
        <li><b>Olly Richards</b>: historias cortas con las mismas palabras una y otra vez.</li>
        <li><b>Repetición espaciada</b>, como Anki: lo de hoy vuelve hoy varias veces y después cada vez menos.</li>
      </ul>
      <p class="muted small">Para ver videos en japonés fácil, busca en YouTube <b>Comprehensible Japanese</b>, y en podcasts <b>Nihongo con Teppei for Beginners</b>.</p>
    </details>`;
}

/* ===== Lección paso a paso ===== */
function jpAbrir(i){ jpL = JP_LECCIONES[i]; jpPaso = 0; jpEst = {i, xp: 0, aciertos: 0, total: 0, qi: 0}; activar(); renderJp(); window.scrollTo(0, 0) }
function jpCerrar(){ callarVoz(); jpL = null; renderJp() }
function jpSig(){ callarVoz(); jpPaso++; jpEst.q = null; jpEst.qi = 0; renderJpPaso(); window.scrollTo(0, 0) }
function jpPuntos(ok){ jpEst.total++; if (ok){ jpEst.aciertos++; jpEst.xp += 10; jpEst.combo = (jpEst.combo || 0) + 1 } else jpEst.combo = 0 }

function renderJpPaso(){
  const l = jpL, [clave, ic, nombre] = JP_PASOS[jpPaso];
  const puntos = JP_PASOS.map((p, i) => `<span title="${p[2]}" style="opacity:${i <= jpPaso ? 1 : .35}">${p[1]}</span>`).join(' ');
  $('jpArea').innerHTML = `<div class="card">
    <div class="row" style="justify-content:space-between">
      <button class="ghost" id="jpSalir">← Salir</button>
      <span class="small">${puntos}</span>
      <span class="muted small">⭐ ${jpEst.xp}${jpEst.combo >= 3 ? ` · 🔥x${jpEst.combo}` : ''}</span>
    </div>
    <div class="bar"><div style="width:${100 * jpPaso / (JP_PASOS.length - 1)}%;background:#e11d48"></div></div>
    <h2>${ic} ${nombre} <span class="muted small">· Lección ${jpEst.i + 1}: ${esc(l.titulo)}</span></h2>
    <div id="jpPaso" style="display:grid;gap:12px"></div></div>`;
  $('jpSalir').onclick = jpCerrar;
  ({escucha: jpEscucha, kana: jpKana, juego: jpJuego, leer: jpLeer, sombra: jpSombra, vuelta: jpVuelta, fin: jpFin})[clave]();
}
const jpBox = () => $('jpPaso');
const jpBotonSig = (txt) => `<button class="primary" id="jpNext" style="font-size:18px;padding:14px">${txt || 'Siguiente →'}</button>`;

// 1. Escuchar sin texto primero (input comprensible)
function jpEscucha(){
  const e = jpL.escena;
  jpBox().innerHTML = `<p class="muted small">Escúchala sin leer. Intenta adivinar qué pasa: no tienes que entender todo.</p>
    <div class="flash"><div class="f">🎧 ${esc(e.titulo)}</div><div class="muted small" id="jpOyendo">Toca para escuchar</div></div>
    <div class="row"><button class="primary" id="jpPlay">▶ Escuchar</button><button id="jpVer">👀 Ver el texto</button><button class="ghost" id="jpLento">🐢 Más lento</button></div>
    <div id="jpTexto" hidden style="display:grid;gap:8px"></div>${jpBotonSig()}`;
  let gen = 0;
  const tocar = async rate => {
    const g = ++gen;
    for (let k = 0; k < e.lineas.length && g === gen; k++){
      $('jpOyendo').textContent = `${k + 1} de ${e.lineas.length}`;
      document.querySelectorAll('[data-jpline]').forEach(x => x.style.background = +x.dataset.jpline === k ? 'var(--soft)' : '');
      await jpDi(e.lineas[k][1], rate); await wait(500);
    }
    if (g === gen && $('jpOyendo')) $('jpOyendo').textContent = 'Escúchala otra vez: la segunda vez se entiende más.';
  };
  $('jpPlay').onclick = () => tocar(0.95);
  $('jpLento').onclick = () => tocar(0.7);
  $('jpVer').onclick = () => {
    const t = $('jpTexto'); t.hidden = !t.hidden;
    t.innerHTML = e.lineas.map((x, k) => `<div data-jpline="${k}" data-jpsay="${esc(x[1])}" style="border:1px solid var(--line);border-radius:10px;padding:8px 12px;cursor:pointer">
      <div lang="ja" style="font-size:20px;font-weight:700">${x[0] ? `<span class="muted small">${x[0]}:</span> ` : ''}${esc(x[1])} 🔊</div>
      <div class="small" style="color:var(--accent)">${esc(x[2])}</div><div class="small muted">${esc(x[3])}</div></div>`).join('');
  };
  jpBox().onclick = ev => { const s = ev.target.closest('[data-jpsay]'); if (s){ gen++; callarVoz(); jpDi(s.dataset.jpsay) } };
  $('jpNext').onclick = () => { gen++; jpSig() };
  tocar(0.95);
}

// 2. Letras nuevas con un truco visual cada una
function jpKana(){
  jpBox().innerHTML = `<p class="muted small">Toca cada letra para oírla. El truco es lo que hace que se te pegue: imagínalo.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px">
    ${jpL.kana.map((k, i) => `<button data-jpk="${i}" style="flex-direction:column;padding:14px;gap:4px">
      <span lang="ja" style="font-size:54px;line-height:1">${k[0]}</span><b style="color:var(--accent)">${k[1]}</b></button>`).join('')}
    </div>
    <div class="flash" style="min-height:90px"><div class="small" id="jpTruco">Toca una letra</div></div>${jpBotonSig()}`;
  jpBox().onclick = ev => {
    const b = ev.target.closest('[data-jpk]'); if (!b) return;
    const k = jpL.kana[+b.dataset.jpk];
    b.style.borderColor = 'var(--ok)';
    $('jpTruco').innerHTML = `<span lang="ja" style="font-size:28px">${k[0]}</span> = <b>${k[1]}</b><br>${esc(k[2])}`;
    callarVoz(); jpDi(k[0], 0.8);
  };
  $('jpNext').onclick = jpSig;
}

// 3. Juego: ver la letra o solo oírla, y elegir rápido
function jpJuego(){
  const nuevas = jpL.kana, viejas = jpTodasKana(jpEst.i).filter(k => !nuevas.includes(k));
  if (!jpEst.q){
    const base = [...nuevas, ...nuevas, ...jpMezclar(viejas).slice(0, 2)];
    jpEst.q = jpMezclar(base).map((k, n) => ({k, oir: n % 3 === 2}));
    jpEst.qi = 0;
  }
  const q = jpEst.q[jpEst.qi];
  if (!q){ jpBox().innerHTML = `<div class="flash"><div class="f">🎮 ${jpEst.aciertos} de ${jpEst.total}</div><div class="muted">${jpEst.aciertos >= jpEst.total - 1 ? '¡Excelente!' : 'Vas bien, las que fallaste vuelven en tu Repaso.'}</div></div>${jpBotonSig()}`; $('jpNext').onclick = jpSig; return }
  const pool = jpTodasKana(jpEst.i).filter(k => k[0] !== q.k[0]);
  const ops = jpMezclar([q.k, ...jpMezclar(pool).slice(0, 3)]);
  jpBox().innerHTML = `<p class="muted small">Pregunta ${jpEst.qi + 1} de ${jpEst.q.length} · ${q.oir ? 'Escucha y elige la letra' : '¿Cómo suena?'}</p>
    <div class="flash" style="min-height:140px">${q.oir ? `<button id="jpOtra" style="font-size:40px;padding:16px 26px" aria-label="Escuchar otra vez">🔊</button>` : `<div lang="ja" style="font-size:80px;line-height:1">${q.k[0]}</div>`}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
    ${ops.map(o => `<button data-jpop="${o[0]}" style="font-size:${q.oir ? 34 : 22}px;padding:16px" ${q.oir ? 'lang="ja"' : ''}>${q.oir ? o[0] : o[1]}</button>`).join('')}
    </div><p class="small" id="jpRes" style="min-height:22px"></p>`;
  if (q.oir){ jpDi(q.k[0], 0.8); $('jpOtra').onclick = () => jpDi(q.k[0], 0.8) }
  let listo = false;
  jpBox().querySelectorAll('[data-jpop]').forEach(b => b.onclick = async () => {
    if (listo) return; listo = true;
    const ok = b.dataset.jpop === q.k[0]; jpPuntos(ok);
    b.style.background = ok ? 'var(--ok)' : 'var(--accent)'; b.style.color = '#fff';
    if (!ok){ const bien = jpBox().querySelector(`[data-jpop="${q.k[0]}"]`); bien.style.borderColor = 'var(--ok)'; bien.style.boxShadow = 'inset 0 0 0 2px var(--ok)' }
    $('jpRes').innerHTML = ok ? `<b style="color:var(--ok)">✓ ¡Eso!</b>${jpEst.combo >= 3 ? ` 🔥 ${jpEst.combo} seguidas` : ''}` : `<b>✗</b> Era <span lang="ja">${q.k[0]}</span> = ${q.k[1]}. ${esc(q.k[2])}`;
    if (!ok) jpEst.fallas = [...(jpEst.fallas || []), q.k];
    if (!q.oir || !ok) await jpDi(q.k[0], 0.85);
    await wait(ok ? 500 : 1800);
    if (!jpL) return;
    jpEst.qi++; renderJpPaso();
  });
}

// 4. Leer palabras que ya puedes descifrar con tus letras
function jpLeer(){
  if (!jpEst.q){ jpEst.q = jpMezclar(jpL.palabras).slice(0, 5); jpEst.qi = 0 }
  const w = jpEst.q[jpEst.qi];
  if (!w){ jpBox().innerHTML = `<div class="flash"><div class="f">📖 ¡Ya lees japonés!</div><div class="muted">Estas palabras las leíste tú solo, letra por letra.</div></div>${jpBotonSig()}`; $('jpNext').onclick = jpSig; return }
  const ops = jpMezclar([w, ...jpMezclar(jpL.palabras.filter(x => x !== w)).slice(0, 3)]);
  jpBox().innerHTML = `<p class="muted small">Palabra ${jpEst.qi + 1} de ${jpEst.q.length} · Léela en voz alta y elige qué significa.</p>
    <div class="flash" style="min-height:140px"><div lang="ja" style="font-size:64px;line-height:1.1">${w[0]}</div>
      <button class="ghost small" id="jpPista">💡 ¿Cómo se lee?</button></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${ops.map(o => `<button data-jpw="${esc(o[0])}" style="padding:16px">${esc(o[2])}</button>`).join('')}</div>
    <p class="small" id="jpRes" style="min-height:22px"></p>`;
  $('jpPista').onclick = () => { $('jpPista').textContent = w[1]; jpDi(w[0], 0.8) };
  let listo = false;
  jpBox().querySelectorAll('[data-jpw]').forEach(b => b.onclick = async () => {
    if (listo) return; listo = true;
    const ok = b.dataset.jpw === w[0]; jpPuntos(ok);
    b.style.background = ok ? 'var(--ok)' : 'var(--accent)'; b.style.color = '#fff';
    $('jpRes').innerHTML = `${ok ? '<b style="color:var(--ok)">✓</b>' : '<b>✗</b>'} <span lang="ja">${w[0]}</span> se lee <b>${w[1]}</b> y significa <b>${esc(w[2])}</b>.`;
    await jpDi(w[0], 0.85); await wait(ok ? 700 : 1500);
    if (!jpL) return;
    jpEst.qi++; renderJpPaso();
  });
}

// Revisar lo que dijiste: primero en el teléfono (gratis); si no coincide, Claude te da un consejo
async function jpRevisarVoz(f, dijo){
  const oido = jpNorm(dijo);
  const ok = oido && [f[0], ...(f[3] || [])].some(v => { const n = jpNorm(v); return oido.includes(n) || (n.includes(oido) && oido.length >= n.length * 0.8) });
  if (ok) return {ok: true, txt: '¡Se entendió perfecto!'};
  try {
    const r = await tutor({accion: 'oral', modo: 'pronunciar', materia: 'Japonés', idioma: 'ja-JP', tarjeta: {f: f[0], b: f[2]}, dijo});
    return {ok: !!r.correcto, txt: r.comentario, nube: true};
  } catch(e){ return {ok: false, txt: 'El teléfono oyó otra cosa. Escúchala otra vez y repítela despacio.'} }
}
async function jpMic(f, el){
  try {
    el.innerHTML = '🎤 Te escucho…';
    const dijo = await escucharVoz('ja-JP');
    el.innerHTML = `Escuché: <span lang="ja">"${esc(dijo)}"</span> · revisando…`;
    const r = await jpRevisarVoz(f, dijo);
    jpPuntos(r.ok);
    el.innerHTML = `<b style="color:${r.ok ? 'var(--ok)' : 'var(--warn)'}">${r.ok ? '✓ ¡Bien dicho!' : '≈ Casi'}</b> · Escuché: <span lang="ja">"${esc(dijo)}"</span><br>${esc(r.txt)}`;
    if (!r.ok && r.nube) await speak(r.txt, 'es-MX', 1);
    return r.ok;
  } catch(e){ el.innerHTML = '⚠️ ' + esc(e.message); return false }
}

// 5. Shadowing: oyes y repites enseguida, copiando el ritmo
function jpSombra(){
  const f = jpL.frases[jpEst.qi];
  if (!f){ jpSig(); return }
  jpBox().innerHTML = `<p class="muted small">Frase ${jpEst.qi + 1} de ${jpL.frases.length} · Escucha y repítela en voz alta enseguida, copiando la música de la voz.</p>
    <div class="flash"><div lang="ja" class="f" style="font-size:30px">${esc(f[0])}</div><div style="color:var(--accent)">${esc(f[1])}</div><div class="muted">${esc(f[2])}</div></div>
    <div class="row"><button id="jpOir">🔊 Escuchar</button><button class="ghost" id="jpLento">🐢 Lento</button><button class="primary" id="jpHablo">🎤 Ahora tú</button></div>
    <p class="small" id="jpRes" style="min-height:22px"></p>${jpBotonSig()}`;
  $('jpOir').onclick = () => jpDi(f[0]);
  $('jpLento').onclick = () => jpDi(f[0], 0.65);
  $('jpHablo').onclick = () => jpMic(f, $('jpRes'));
  $('jpNext').onclick = () => { callarVoz(); jpEst.qi++; renderJpPaso() };
  (async () => { await jpDi(f[0]); await wait(400); if (jpL && jpL.frases[jpEst.qi] === f) await jpDi(f[0], 0.75) })();
}

// 6. Ida y vuelta: oyes en español y lo dices en japonés
function jpVuelta(){
  if (!jpEst.q){ jpEst.q = jpMezclar(jpL.frases).slice(0, 3); jpEst.qi = 0 }
  const f = jpEst.q[jpEst.qi];
  if (!f){ jpSig(); return }
  jpBox().innerHTML = `<p class="muted small">${jpEst.qi + 1} de ${jpEst.q.length} · ¿Cómo se dice en japonés? Dilo en voz alta antes de ver la respuesta.</p>
    <div class="flash"><div class="f">${esc(f[2])}</div><div id="jpResp" hidden><div lang="ja" style="font-size:28px">${esc(f[0])}</div><div style="color:var(--accent)">${esc(f[1])}</div></div></div>
    <div class="row"><button class="primary" id="jpHablo">🎤 Decirlo</button><button id="jpMostrar">Ver respuesta</button></div>
    <p class="small" id="jpRes" style="min-height:22px"></p>${jpBotonSig()}`;
  const mostrar = () => { $('jpResp').hidden = false; jpDi(f[0]) };
  $('jpMostrar').onclick = mostrar;
  $('jpHablo').onclick = async () => { await jpMic(f, $('jpRes')); if ($('jpResp')) mostrar() };
  $('jpNext').onclick = () => { callarVoz(); jpEst.qi++; renderJpPaso() };
  speak(f[2], 'es-MX', 1);
}

// 7. Final: puntos, tarjetas al repaso y misión con Claude
function jpFin(){
  const j = jpData(), l = jpL, nueva = !j.done[l.id];
  if (!jpEst.guardado){
    jpEst.guardado = true;
    jpEst.xp += nueva ? 50 : 20;
    j.xp += jpEst.xp; j.done[l.id] = j.done[l.id] || today();
    if (!j.dias.includes(today())) j.dias = [...j.dias, today()].slice(-120);
    const hay = new Set(cardList().filter(c => c.act === 'japones').map(c => c.f));
    const lineas = [...l.frases.map(f => `${f[0]} = ${f[2]} (${f[1]})`), ...l.palabras.map(w => `${w[0]} = ${w[2]} (${w[1]})`),
      ...(jpEst.fallas || []).map(k => `${k[0]} = ${k[1]}`)].filter(t => !hay.has(t.split(' = ')[0]));
    jpEst.nuevas = lineas.length ? addCards('japones', [...new Set(lineas)].join('\n')) : 0;
    jpGuardar(); chime(false);
  }
  const otra = JP_LECCIONES.findIndex(x => !j.done[x.id]);
  jpBox().innerHTML = `<div class="flash"><div class="f">🎉 ¡Lección ${jpEst.i + 1} terminada!</div>
      <div>+${jpEst.xp} XP · ${jpEst.aciertos} de ${jpEst.total} bien · 🔥 ${jpRacha()} ${jpRacha() === 1 ? "día seguido" : "días seguidos"}</div>
      <div class="muted small">${jpEst.nuevas} tarjetas nuevas en tu Repaso. Vuelven hoy varias veces para que no se te olviden.</div></div>
    <div class="card" style="background:var(--soft)">
      <h2>🎯 Misión: habla con Claude</h2>
      <p class="small">${esc(l.mision)}. Claude te habla en japonés sencillo y te corrige.</p>
      <div class="row"><button class="primary" id="jpMision">🗣️ Empezar misión</button></div></div>
    <div class="row">${otra >= 0 ? `<button class="primary" id="jpOtraL">Siguiente lección →</button>` : ''}<button id="jpMapa">Volver al curso</button></div>`;
  $('jpMapa').onclick = jpCerrar;
  if (otra >= 0) $('jpOtraL').onclick = () => jpAbrir(otra);
  $('jpMision').onclick = () => jpMision(l);
}
function jpMision(l){
  const esc0 = `Misión de principiante (japonés muy simple, frases cortas): ${l.mision}. Usa frases como: ${l.frases.map(f => f[0]).join('、')}`;
  const sel = $('cvEsc');
  let op = [...sel.options].find(o => o.value === esc0);
  if (!op){ op = new Option('🎯 ' + l.mision, esc0); sel.add(op, 0) }
  $('cvLang').value = 'ja-JP'; sel.value = esc0;
  jpL = null; renderJp(); goTab('practica');
  cvHist = []; renderChat(); turnoCv();
}

/* ===== Modo carro: español → pausa para que lo digas → japonés dos veces ===== */
async function jpCarro(){
  const j = jpData();
  let ls = JP_LECCIONES.filter(l => j.done[l.id]);
  if (!ls.length) ls = [JP_LECCIONES[0]];
  const frases = jpMezclar(ls.flatMap(l => l.frases)).slice(0, 20);
  lsStop(); const gen = ++pcGen;
  sesionAudio('playback'); keepAwake();
  $('drive').hidden = false;
  for (let k = 0; k < frases.length && gen === pcGen; k++){
    const f = frases[k];
    $('drF').textContent = f[2]; $('drB').textContent = `¿Cómo se dice? · ${k + 1} de ${frases.length}`;
    await speak('¿Cómo se dice: ' + f[2] + '?', 'es-MX', 1);
    if (gen !== pcGen) break;
    await wait(3500);
    if (gen !== pcGen) break;
    $('drF').textContent = f[0]; $('drB').textContent = f[1];
    await jpDi(f[0], 0.9); await wait(700);
    if (gen !== pcGen) break;
    await jpDi(f[0], 0.9); await wait(1200);
  }
  if (gen === pcGen) $('drive').hidden = true;
}

$('jpArea').addEventListener('click', e => {
  const b = e.target.closest('[data-jpl]'); if (b && !jpL){ jpAbrir(+b.dataset.jpl); return }
  if (e.target.id === 'jpCarro') jpCarro();
});
