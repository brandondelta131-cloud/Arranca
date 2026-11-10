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

// Progreso sincronizado en `ingl` (declarado en index.html): {done:{id:fecha}, xp, dias:[fechas], fallas:{frase:n}, u}
/* Cómo va una historia (pedido de Brandon, con la mecánica de la clase de Kale):
   Parte 1 · Con subtítulos: la historia se repite sola hasta que das Siguiente. Tocas una palabra y ves su significado
             con 2 ejemplos (y la puedes mandar a tu Repaso). Ejercicio: 5 oraciones, eliges qué significan.
   Parte 2 · Sin subtítulos: mínimo 3 vueltas completas para seguir. Ejercicio: repetir 5 oraciones con el micrófono;
             marca en rojo las palabras que no se entendieron y no avanzas hasta decirlas bien.
   Parte 3 · Preguntas: suena cada frase con su pregunta y su respuesta, mínimo 3 vueltas. Ejercicio: contestas todas
             las preguntas con el micrófono.
   Si fallas una misma frase 5 veces, pasa sola a tu Repaso. Velocidad 0.75, 1 o 1.2. */

// Palabras con significado y dos ejemplos: [significado, ejemplo, traducción, ejemplo, traducción]
const EN_GLOSA = {
  'actually':['de hecho / en realidad','Actually, I live near here.','De hecho, vivo cerca de aquí.','I thought it was easy, but actually it was hard.','Pensé que era fácil, pero en realidad fue difícil.'],
  'well':['bueno… (para empezar a hablar) / bien','Well, I think it is a good idea.','Bueno, creo que es buena idea.','She sings really well.','Ella canta muy bien.'],
  'honestly':['honestamente / la verdad','Honestly, I don\'t like coffee.','La verdad, no me gusta el café.','Honestly, it was the best day.','Honestamente, fue el mejor día.'],
  'anyway':['en fin / de todos modos','Anyway, let\'s start.','En fin, empecemos.','It was raining, but we went anyway.','Estaba lloviendo, pero fuimos de todos modos.'],
  'definitely':['definitivamente / claro que sí','I\'m definitely going to the party.','Definitivamente voy a ir a la fiesta.','"Do you like it?" "Definitely!"','"¿Te gusta?" "¡Claro que sí!"'],
  'right':['¿verdad? (al final) / correcto / derecha','It\'s cold today, right?','Hace frío hoy, ¿verdad?','Turn right at the corner.','Da vuelta a la derecha en la esquina.'],
  'so':['así que / entonces / tan','I was tired, so I went to bed.','Estaba cansado, así que me fui a dormir.','The movie was so good.','La película estuvo tan buena.'],
  'us':['nos / a nosotros','She always buys us coffee.','Ella siempre nos compra café.','Can you help us?','¿Nos puedes ayudar?'],
  'them':['los / las / a ellos','Most of them are books.','Casi todos son libros.','I called them yesterday.','Les llamé ayer.'],
  'downtown':['en el centro (de la ciudad)','I work downtown.','Trabajo en el centro.','Let\'s have dinner downtown.','Cenemos en el centro.'],
  'bakery':['panadería','The bakery opens at six.','La panadería abre a las seis.','I bought bread at the bakery.','Compré pan en la panadería.'],
  'early':['temprano','I wake up early.','Me despierto temprano.','We arrived early to the meeting.','Llegamos temprano a la junta.'],
  'smell':['olor / oler','I love the smell of rain.','Me encanta el olor de la lluvia.','This soup smells great.','Esta sopa huele muy bien.'],
  'fresh':['fresco / recién hecho','I want fresh bread.','Quiero pan recién hecho.','The fish is very fresh.','El pescado está muy fresco.'],
  'boss':['jefe / jefa','My boss is on vacation.','Mi jefe está de vacaciones.','Ask your boss for a day off.','Pídele a tu jefe un día libre.'],
  'kind':['amable / tipo (de)','She is very kind to everyone.','Ella es muy amable con todos.','What kind of music do you like?','¿Qué tipo de música te gusta?'],
  'whole':['todo / entero','I ate the whole pizza.','Me comí la pizza entera.','We stayed the whole day.','Nos quedamos todo el día.'],
  'free':['libre / gratis','Are you free tonight?','¿Estás libre hoy en la noche?','The coffee is free.','El café es gratis.'],
  'plans':['planes','Do you have plans for Friday?','¿Tienes planes para el viernes?','Our plans changed.','Nuestros planes cambiaron.'],
  'hiking':['hacer senderismo / ir de excursión a pie','We go hiking every Sunday.','Vamos de excursión cada domingo.','Hiking is good exercise.','Caminar en el monte es buen ejercicio.'],
  'weather':['el clima (del día)','The weather is nice today.','El clima está bonito hoy.','Check the weather before you go.','Revisa el clima antes de irte.'],
  'instead':['en su lugar / mejor (otra cosa)','Let\'s have tea instead.','Mejor tomemos té.','I stayed home instead of going out.','Me quedé en casa en vez de salir.'],
  'sunny':['soleado','It\'s sunny and warm.','Está soleado y hace calor.','Tomorrow will be sunny.','Mañana va a estar soleado.'],
  'regular':['normal / regular','I\'ll have regular milk.','Quiero leche normal.','He is a regular customer.','Él es cliente frecuente.'],
  'oat':['avena','Oat milk is popular now.','La leche de avena está de moda.','I eat oats for breakfast.','Desayuno avena.'],
  'close':['cerca / cercano / cerrar','Close enough!','¡Casi! / ¡Ya ni modo, está bien!','Please close the door.','Por favor cierra la puerta.'],
  'enough':['suficiente','Do we have enough food?','¿Tenemos suficiente comida?','I\'m old enough to drive.','Tengo edad suficiente para manejar.'],
  'missed':['perdí (el camión, la clase) / extrañé','I missed the bus.','Perdí el camión.','I missed you!','¡Te extrañé!'],
  'late':['tarde','Sorry, I\'m late.','Perdón, llegué tarde.','It\'s too late to call.','Es muy tarde para llamar.'],
  'died':['se murió / se apagó (aparatos)','My phone died.','Se me apagó el teléfono.','The plant died last week.','La planta se murió la semana pasada.'],
  'meeting':['junta / reunión','I have a meeting at ten.','Tengo una junta a las diez.','The meeting was long.','La reunión fue larga.'],
  'embarrassed':['apenado / con vergüenza (no "embarazada")','I was so embarrassed.','Me dio mucha pena.','Don\'t be embarrassed.','No te apenes.'],
  'coworker':['compañero de trabajo','My coworker helped me.','Mi compañero de trabajo me ayudó.','I had lunch with a coworker.','Comí con una compañera de trabajo.'],
  'lent':['prestó (pasado de lend)','He lent me his car.','Me prestó su carro.','Can you lend me a pen?','¿Me prestas una pluma?'],
  'charger':['cargador','Where is my charger?','¿Dónde está mi cargador?','I forgot my phone charger.','Olvidé el cargador del teléfono.'],
  'spilled':['se me tiró / derramé','I spilled water on the table.','Tiré agua en la mesa.','She spilled her coffee.','Se le tiró el café.'],
  'brand':['marca / brand new = nuevecito','These are brand new shoes.','Son zapatos nuevecitos.','What brand is your phone?','¿De qué marca es tu teléfono?'],
  'better':['mejor','I feel better today.','Hoy me siento mejor.','This one is better.','Este es mejor.'],
  'boxes':['cajas','Put the boxes in the car.','Pon las cajas en el carro.','We need more boxes.','Necesitamos más cajas.'],
  'explains':['explica','That explains everything.','Eso lo explica todo.','The teacher explains very well.','La maestra explica muy bien.'],
  'heavy':['pesado','This bag is heavy.','Esta bolsa pesa mucho.','The traffic is heavy today.','Hay mucho tráfico hoy.'],
  'careful':['cuidadoso / ten cuidado','Be careful, it\'s hot.','Cuidado, está caliente.','He is a careful driver.','Es un conductor cuidadoso.'],
  'plates':['platos','Wash the plates, please.','Lava los platos, por favor.','We need six plates.','Necesitamos seis platos.'],
  'couch':['sillón / sofá','The cat is on the couch.','El gato está en el sillón.','I fell asleep on the couch.','Me quedé dormido en el sillón.'],
  'neighbor':['vecino','My neighbor has a dog.','Mi vecino tiene un perro.','Our neighbors are very nice.','Nuestros vecinos son muy buena onda.'],
  'annoying':['molesto / que fastidia','That noise is annoying.','Ese ruido es molesto.','My brother is annoying sometimes.','Mi hermano a veces es molesto.'],
  'snacks':['botanas / tentempiés','I bought snacks for the movie.','Compré botanas para la película.','No snacks before dinner!','¡Nada de botanas antes de cenar!'],
  'scored':['anotó / metió (un gol)','He scored a goal.','Metió un gol.','She scored 90 on the test.','Sacó 90 en el examen.'],
  'goals':['goles / metas','They scored two goals.','Metieron dos goles.','What are your goals this year?','¿Cuáles son tus metas este año?'],
  'laugh':['reír','He always makes me laugh.','Siempre me hace reír.','We laughed a lot.','Nos reímos mucho.'],
  'lets':['deja / permite','My mom lets me stay up late.','Mi mamá me deja desvelarme.','Let\'s go! (= vamos)','¡Vámonos!'],
  'during':['durante','I sleep during the trip.','Duermo durante el viaje.','No phones during class.','Nada de celulares durante la clase.'],
  'interview':['entrevista','I have a job interview.','Tengo una entrevista de trabajo.','The interview went well.','La entrevista salió bien.'],
  'nervous':['nervioso','I get nervous before exams.','Me pongo nervioso antes de los exámenes.','Don\'t be nervous.','No te pongas nervioso.'],
  'worry':['preocuparse','Don\'t worry about it.','No te preocupes por eso.','I worry about my family.','Me preocupo por mi familia.'],
  'position':['puesto / posición','They have an open position.','Tienen un puesto disponible.','What position do you play?','¿En qué posición juegas?'],
  'company':['empresa / compañía','She works for a big company.','Trabaja en una empresa grande.','Thanks for the company.','Gracias por la compañía.'],
  'honest':['honesto','Be honest with me.','Sé honesto conmigo.','He is an honest person.','Es una persona honesta.'],
  'advice':['consejo (no se dice "advices")','Can I give you some advice?','¿Te puedo dar un consejo?','That\'s good advice.','Ese es un buen consejo.'],
  'practice':['practicar / práctica','I practice English every day.','Practico inglés todos los días.','Practice makes perfect.','La práctica hace al maestro.'],
  'still':['todavía / aún','I\'m still learning.','Todavía estoy aprendiendo.','Is she still here?','¿Sigue aquí?'],
  'invited':['invitó / invité','I invited my friends.','Invité a mis amigos.','We were invited to a wedding.','Nos invitaron a una boda.'],
  'burned':['se quemó / quemé','I burned the toast.','Se me quemó el pan tostado.','He burned his hand.','Se quemó la mano.'],
  'garlic':['ajo','Add some garlic.','Agrega un poco de ajo.','I love garlic bread.','Me encanta el pan de ajo.'],
  'smelled':['olía / olió','The kitchen smelled amazing.','La cocina olía increíble.','It smelled like smoke.','Olía a humo.'],
  'terrible':['horrible / terrible','The food was terrible.','La comida estuvo horrible.','I feel terrible.','Me siento fatal.'],
  'smoke':['humo','There is smoke in the kitchen.','Hay humo en la cocina.','I can smell smoke.','Huelo humo.'],
  'alarm':['alarma','The alarm went off.','Sonó la alarma.','Set an alarm for six.','Pon una alarma a las seis.'],
  'arrived':['llegó / llegaron','My friends arrived at eight.','Mis amigos llegaron a las ocho.','The package arrived today.','El paquete llegó hoy.'],
  'ordered':['pidió / pedimos (comida)','We ordered pizza.','Pedimos pizza.','I ordered a new phone.','Pedí un teléfono nuevo.'],
  'ever':['alguna vez / de la vida (con best)','It was the best day ever.','Fue el mejor día de la vida.','Have you ever been to Japan?','¿Alguna vez has ido a Japón?'],
  'journey':['viaje / camino (etapa de la vida)','I\'m excited for this new journey.','Estoy emocionado por esta nueva etapa.','Life is a journey.','La vida es un camino.'],
  'tonight':['hoy en la noche','What are you doing tonight?','¿Qué vas a hacer hoy en la noche?','Let\'s watch a movie tonight.','Veamos una película hoy en la noche.'],
  'mountains':['montañas','We drove to the mountains.','Manejamos a las montañas.','The mountains are beautiful.','Las montañas están hermosas.'],
  'muffin':['panquecito / mantecada','A blueberry muffin, please.','Un panquecito de mora azul, por favor.','I had a muffin for breakfast.','Desayuné un panquecito.']
};

let enH = null, enDrillActual = null;
const enData = () => (ingl ||= {done: {}, xp: 0, dias: [], fallas: {}, u: 0});
let enVel = 1; try { enVel = +localStorage.getItem('arranca-vel-en') || 1 } catch(e){}
const enDi = (t, rate) => speak(t, 'en-US', (rate || 1) * enVel);
function enRacha(){
  const d = new Set(enData().dias); let n = 0; const t = new Date();
  if (!d.has(ymd(t))) t.setDate(t.getDate() - 1);
  while (d.has(ymd(t))){ n++; t.setDate(t.getDate() - 1) }
  return n;
}

/* ---------- Comparar lo que dijiste con la frase (palabra por palabra) ---------- */
const EN_NUM = {0:'zero',1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',11:'eleven',12:'twelve'};
const EN_CONTR = {"i'm":'i am',"it's":'it is',"he's":'he is',"she's":'she is',"that's":'that is',"what's":'what is',"there's":'there is',"let's":'let us',
  "you're":'you are',"we're":'we are',"they're":'they are',"i'll":'i will',"you'll":'you will',"i've":'i have',"don't":'do not',"doesn't":'does not',
  "didn't":'did not',"isn't":'is not',"aren't":'are not',"wasn't":'was not',"weren't":'were not',"can't":'can not',"cannot":'can not',"won't":'will not',
  "shouldn't":'should not',"i'd":'i would',"he'd":'he would'};
function enPalabras(s){
  return String(s || '').toLowerCase().replace(/[’`]/g, "'").replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean)
    .flatMap(w => (EN_CONTR[w] || EN_NUM[w] || w.replace(/'s$/, '')).split(' '));
}
// Devuelve cada palabra de la frase con ok/no y el porcentaje que se entendió
function enComparar(dijo, frase){
  const oido = enPalabras(dijo);
  const piezas = String(frase).split(/\s+/);
  let total = 0, bien = 0;
  const marcadas = piezas.map(p => {
    const ws = enPalabras(p);
    if (!ws.length) return {p, ok: true};
    const ok = ws.every(w => { const i = oido.indexOf(w); if (i >= 0){ oido.splice(i, 1); return true } return false });
    total++; if (ok) bien++;
    return {p, ok};
  });
  return {marcadas, nota: total ? bien / total : 0};
}

/* ---------- Palabra tocada: significado, 2 ejemplos, agregar al Repaso ---------- */
const enLimpia = w => String(w).toLowerCase().replace(/[’]/g, "'").replace(/^[^a-z]+|[^a-z']+$/g, '').replace(/'s$/, '');
const enConPalabras = (txt) => esc(txt).replace(/[A-Za-z][A-Za-z'’]*/g, w => `<span data-enw="${w}" style="cursor:pointer;border-bottom:1px dotted var(--line)">${w}</span>`);
let enGlosaNube = {}; try { enGlosaNube = JSON.parse(localStorage.getItem('arranca-glosa') || '{}') } catch(e){}
async function enPalabra(w, frase){
  const k = enLimpia(w); if (!k) return;
  let pop = $('enPop');
  if (!pop){ pop = document.createElement('div'); pop.id = 'enPop'; pop.className = 'card';
    pop.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:60;max-width:560px;margin:auto;border-color:#2563eb;box-shadow:0 8px 30px rgba(0,0,0,.4)';
    document.body.append(pop) }
  const pintar = (g, nube) => {
    pop.innerHTML = `<div class="row" style="justify-content:space-between"><b style="font-size:20px">${esc(k)}</b><span><button id="enPopOir">🔊</button> <button class="ghost" id="enPopX">✕</button></span></div>
      ${g ? `<div style="color:#2563eb;font-weight:700">${esc(g[0])}</div>
        ${g[1] ? `<div class="small" style="margin-top:6px">• <b>${esc(g[1])}</b><br><span class="muted">${esc(g[2])}</span></div>` : ''}
        ${g[3] ? `<div class="small" style="margin-top:4px">• <b>${esc(g[3])}</b><br><span class="muted">${esc(g[4])}</span></div>` : ''}`
        : nube ? `<div class="small">${esc(nube)}</div>` : '<div class="small muted">Buscando el significado con Claude…</div>'}
      <div class="row" style="margin-top:8px"><button class="primary" id="enPopAdd">➕ Agregar a mi Repaso</button></div>`;
    $('enPopX').onclick = () => pop.remove();
    $('enPopOir').onclick = () => enDi(k, 0.9);
    $('enPopAdd').onclick = () => {
      const back = g ? `${g[0]} · Ej: ${g[1]} (${g[2]})` : (nube || '').slice(0, 300);
      if (!cardList().some(c => c.act === 'ingles' && c.f.toLowerCase() === k)) addCards('ingles', `${k} = ${back}`);
      $('enPopAdd').textContent = '✓ Agregada a tu Repaso'; $('enPopAdd').disabled = true;
    };
  };
  const g = EN_GLOSA[k];
  if (g || enGlosaNube[k]){ pintar(g, enGlosaNube[k]); enDi(k, 0.9); return }
  pintar(null, null); enDi(k, 0.9);
  try {
    const r = await tutor({accion: 'explicar', materia: 'Inglés', tarjeta: {f: k,
      b: `Palabra en inglés dentro de la frase "${frase}". Da su significado en español en esta frase y DOS ejemplos cortos en inglés con su traducción.`}});
    enGlosaNube[k] = `${r.explicacion} ${r.ejemplo}`.trim();
    try { localStorage.setItem('arranca-glosa', JSON.stringify(enGlosaNube)) } catch(e){}
  } catch(e){ enGlosaNube[k] = null; pintar(null, 'No pude buscarla ahora (' + e.message + '). Toca 🔊 para oírla.'); return }
  if ($('enPop')) pintar(null, enGlosaNube[k]);
}
document.addEventListener('click', e => {
  const w = e.target.closest('[data-enw]'); if (!w) return;
  e.stopPropagation();
  const linea = w.closest('[data-enfrase]');
  enPalabra(w.dataset.enw, linea ? linea.dataset.enfrase : '');
}, true);

// Si fallas la misma frase 5 veces, pasa sola a tu Repaso
function enFalla(texto, es){
  const j = enData(); j.fallas = j.fallas || {};
  j.fallas[texto] = (j.fallas[texto] || 0) + 1; j.u = Date.now(); persist();
  if (j.fallas[texto] === 5 && !cardList().some(c => c.act === 'ingles' && c.f === texto)){ addCards('ingles', `${texto} = ${es}`); return true }
  return false;
}

/* ---------- Mapa de historias ---------- */
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
      <p class="muted small">3 partes: entiéndela con subtítulos, entiéndela sin subtítulos y contesta las preguntas. Toca cualquier palabra para ver qué significa.</p>
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
  if (enDrillActual) enDrillActual.parar();
  enH = EN_HISTORIAS[i]; activar();
  $('enArea').innerHTML = `<div class="card">
    <div class="row" style="justify-content:space-between"><button class="ghost" id="enSalir">← Salir</button>
      <span class="small">Velocidad <select id="enVel">${[0.75, 1, 1.2].map(v => `<option value="${v}" ${v === enVel ? 'selected' : ''}>${v}×</option>`).join('')}</select></span></div>
    <h2>${esc(enH.titulo)} <span class="muted small">· Historia ${i + 1} de ${EN_HISTORIAS.length} · ${enH.nivel}</span></h2>
    <div class="small" id="enPartes"></div>
    <div id="enBox" style="display:grid;gap:12px"></div></div>`;
  $('enVel').onchange = () => { enVel = +$('enVel').value; try { localStorage.setItem('arranca-vel-en', enVel) } catch(e){} };
  enDrillActual = enDrill($('enBox'), enH, r => enFin(i, r));
  $('enSalir').onclick = () => { enDrillActual.parar(); enDrillActual = null; enH = null; $('enPop')?.remove(); renderEn() };
  window.scrollTo(0, 0);
}

/* ---------- El recorrido de una historia ---------- */
function enDrill(box, h, alTerminar){
  const PASOS = [['subs', '💬 Con subtítulos'], ['quiz', '✅ ¿Qué significa?'], ['sin', '🎧 Sin subtítulos'], ['repite', '🎤 Repite'], ['pregEsc', '❓ Escucha las preguntas'], ['pregMic', '🗣️ Contesta']];
  const st = {p: 0, aciertos: 0, total: 0};
  let gen = 0;
  const vivo = () => box.isConnected && box.offsetParent;
  const parar = () => { gen++; callarVoz(); if (vozActiva) vozActiva.terminar() };
  const di = (t, r) => vivo() ? enDi(t, r) : (gen++, Promise.resolve());
  const lineaHTML = (x, k, conSub) => `<div data-enl="${k}" data-enfrase="${esc(x[1])}" style="border:1px solid var(--line);border-radius:10px;padding:8px 12px">
      <div style="font-size:19px;font-weight:700"><span class="muted small">${esc(x[0])}:</span> ${enConPalabras(x[1])} <button class="x" data-enoir="${k}" aria-label="Escuchar">🔊</button></div>
      ${conSub ? `<div class="small muted">${esc(x[3])}</div>` : ''}</div>`;
  const marcar = k => box.querySelectorAll('[data-enl]').forEach(x => x.style.background = +x.dataset.enl === k ? 'var(--soft)' : '');
  const sig = () => { parar(); st.p++; if (st.p < PASOS.length) pintar(); else alTerminar(st) };
  const boton = (txt, id = 'enSig') => `<button class="primary" id="${id}" style="font-size:18px;padding:14px">${txt}</button>`;

  function pintar(){
    parar();
    const partes = $('enPartes');
    if (partes) partes.innerHTML = PASOS.map((p, i) => `<span style="opacity:${i <= st.p ? 1 : .35}">${i === st.p ? `<b>${p[1]}</b>` : p[1].split(' ')[0]}</span>`).join(' · ');
    ({subs: parteEscucha, quiz: parteQuiz, sin: parteEscucha, repite: parteRepite, pregEsc: partePregEsc, pregMic: partePregMic})[PASOS[st.p][0]]();
    window.scrollTo(0, 0);
  }

  // Parte 1 y 2: la historia se repite sola. Con subtítulos se puede seguir cuando quieras; sin subtítulos, mínimo 3 vueltas.
  function parteEscucha(){
    const conSub = PASOS[st.p][0] === 'subs', minimo = conSub ? 0 : 3;
    let vueltas = 0;
    box.innerHTML = `<p class="small" style="margin:0">${conSub
      ? '💬 <b>Parte 1 · Con subtítulos.</b> La historia se repite sola hasta que des Siguiente. Toca cualquier palabra para ver qué significa.'
      : '🎧 <b>Parte 2 · Sin subtítulos.</b> Ahora entiéndela solo en inglés. Escúchala mínimo 3 veces completas para seguir. Si una palabra no la recuerdas, tócala.'}</p>
      <div class="flash" style="padding:10px;min-height:0"><div class="muted small" id="enEstado">Empezando…</div></div>
      <div id="enTexto" style="display:grid;gap:8px">${h.lineas.map((x, k) => lineaHTML(x, k, conSub)).join('')}</div>
      ${boton(conSub ? 'Siguiente: ejercicio →' : 'Siguiente: ejercicio (escúchala 3 veces)')}`;
    const btn = $('enSig');
    if (minimo){ btn.disabled = true; btn.style.opacity = .5 }
    const estado = t => { const e = $('enEstado'); if (e) e.textContent = t };
    const g = ++gen;
    (async () => {
      while (g === gen){
        for (let k = 0; k < h.lineas.length && g === gen; k++){
          estado(`Vuelta ${vueltas + 1}${minimo ? ` de mínimo ${minimo}` : ''} · línea ${k + 1} de ${h.lineas.length}`); marcar(k);
          await di(h.lineas[k][1]); await wait(400);
        }
        if (g !== gen) return;
        vueltas++; marcar(-1);
        if (minimo && vueltas >= minimo && btn.disabled){ btn.disabled = false; btn.style.opacity = 1; btn.textContent = 'Siguiente: ejercicio →' }
        else if (minimo && btn.disabled) btn.textContent = `Siguiente: ejercicio (${vueltas} de 3 vueltas)`;
        estado(`Llevas ${vueltas} ${vueltas === 1 ? 'vuelta' : 'vueltas'}. Vuelve a empezar…`);
        await wait(1500);
      }
    })();
    box.querySelector('#enTexto').addEventListener('click', ev => {
      const b = ev.target.closest('[data-enoir]'); if (!b) return;
      callarVoz(); di(h.lineas[+b.dataset.enoir][1]);
    });
    btn.onclick = () => { if (!btn.disabled) sig() };
  }

  // Ejercicio de la parte 1: 5 oraciones, eliges qué significan. Las que fallas vuelven al final.
  function parteQuiz(){
    const idx = hsMezclar(h.lineas.map((x, k) => k)).slice(0, 5);
    st.usadas = new Set(idx);
    let cola = [...idx], hechas = 0;
    const una = () => {
      parar();
      if (!cola.length){
        box.innerHTML = `<div class="flash"><div class="f">✅ ¡Entendiste las 5!</div><div class="muted">Ahora vas a escucharla sin subtítulos.</div></div>${boton('Siguiente: sin subtítulos →')}`;
        $('enSig').onclick = sig; return;
      }
      const k = cola[0], x = h.lineas[k];
      const otras = hsMezclar(h.lineas.filter((y, j) => j !== k).map(y => y[3])).slice(0, 3);
      const ops = hsMezclar([x[3], ...otras]);
      box.innerHTML = `<p class="small" style="margin:0">✅ <b>¿Qué significa?</b> ${Math.min(hechas + 1, 5)} de 5${cola.length > 5 - hechas ? ' · repasando las que fallaste' : ''}</p>
        <div data-enfrase="${esc(x[1])}" class="flash" style="min-height:0;padding:14px"><div class="f" style="font-size:22px">${enConPalabras(x[1])} <button class="x" id="enOirQ">🔊</button></div></div>
        <div style="display:grid;gap:8px">${ops.map(o => `<button data-enop="${esc(o)}" style="text-align:left;padding:12px">${esc(o)}</button>`).join('')}</div>
        <p class="small" id="enRes" style="min-height:22px"></p>`;
      $('enOirQ').onclick = () => { callarVoz(); di(x[1]) };
      di(x[1]);
      let listo = false;
      box.querySelectorAll('[data-enop]').forEach(b => b.onclick = async () => {
        if (listo) return; listo = true;
        const ok = b.dataset.enop === x[3];
        st.total++; if (ok) st.aciertos++;
        b.style.background = ok ? 'var(--ok)' : 'var(--accent)'; b.style.color = '#fff';
        if (!ok){ const bien = [...box.querySelectorAll('[data-enop]')].find(y => y.dataset.enop === x[3]); bien.style.boxShadow = 'inset 0 0 0 2px var(--ok)' }
        $('enRes').innerHTML = ok ? '<b style="color:var(--ok)">✓ ¡Exacto!</b>' : '<b>✗</b> Era la marcada en verde. Esta vuelve al final.';
        cola.shift(); if (ok) hechas++; else cola.push(k);
        await wait(ok ? 900 : 2200); if (vivo()) una();
      });
    };
    una();
  }

  // Micrófono con calificación palabra por palabra
  async function decirFrase(texto, el, umbral = 0.8){
    const res = el.querySelector('[data-enres]');
    try {
      const dijo = await escucharLargo('en-US', res);
      const c = enComparar(dijo, texto), ok = c.nota >= umbral;
      st.total++; if (ok) st.aciertos++;
      const malas = c.marcadas.filter(m => !m.ok).map(m => m.p.replace(/[^A-Za-z'’]/g, ''));
      res.innerHTML = `<div style="font-size:18px">${c.marcadas.map(m => `<span style="color:${m.ok ? 'var(--ok)' : 'var(--accent)'};${m.ok ? '' : 'text-decoration:underline'}">${esc(m.p)}</span>`).join(' ')}</div>
        <div class="small">${ok ? '<b style="color:var(--ok)">✓ ¡Bien dicho!</b>' : `<b style="color:var(--warn)">Mejora la pronunciación de:</b> ${malas.map(esc).join(', ')}`} · ${Math.round(c.nota * 100)}% · Escuché: "${esc(dijo)}"</div>`;
      return {ok, dijo};
    } catch(e){ res.innerHTML = '⚠️ ' + esc(e.message); return {ok: false, error: true} }
  }

  // Ejercicio de la parte 2: repetir 5 oraciones (otras distintas a las del ejercicio 1). No avanzas hasta decirlas bien.
  function parteRepite(){
    const resto = h.lineas.map((x, k) => k).filter(k => !st.usadas || !st.usadas.has(k));
    const idx = hsMezclar(resto).concat(hsMezclar([...(st.usadas || [])])).slice(0, 5);
    let i = 0;
    const fallas = {};
    const una = () => {
      parar();
      if (i >= idx.length){
        box.innerHTML = `<div class="flash"><div class="f">🎤 ¡Dijiste las 5!</div><div class="muted">Sigue la parte de preguntas.</div></div>${boton('Siguiente: preguntas →')}`;
        $('enSig').onclick = sig; return;
      }
      const x = h.lineas[idx[i]];
      box.innerHTML = `<p class="small" style="margin:0">🎤 <b>Repite la frase.</b> ${i + 1} de 5 · Escúchala y dila igual. Las palabras en rojo son las que hay que mejorar.</p>
        <div data-enfrase="${esc(x[1])}" class="flash" style="min-height:0;padding:14px"><div class="f" style="font-size:22px">${enConPalabras(x[1])}</div><div class="muted small">${esc(x[3])}</div></div>
        <div class="row"><button id="enOirR">🔊 Escuchar</button><button class="ghost" id="enLentoR">🐢 Lento</button><button class="primary" id="enHablo">🎤 Decirla</button></div>
        <div id="enMic"><div data-enres class="small" style="min-height:22px"></div></div>
        <button class="primary" id="enSigF" style="font-size:18px;padding:14px;opacity:.5" disabled>Dila bien para seguir</button>`;
      $('enOirR').onclick = () => { callarVoz(); di(x[1]) };
      $('enLentoR').onclick = () => { callarVoz(); di(x[1], 0.7) };
      $('enHablo').onclick = async () => {
        const r = await decirFrase(x[1], $('enMic'));
        if (r.error) return;
        if (r.ok){ $('enSigF').disabled = false; $('enSigF').style.opacity = 1; $('enSigF').textContent = i < 4 ? 'Siguiente frase →' : 'Terminar →'; return }
        fallas[i] = (fallas[i] || 0) + 1;
        const alRepaso = enFalla(x[1], x[3]);
        if (fallas[i] >= 2 && session) tutor({accion: 'oral', modo: 'pronunciar', materia: 'Inglés', idioma: 'en-US', tarjeta: {f: x[1], b: x[3]}, dijo: r.dijo})
          .then(t => { const m = $('enMic'); if (m && t.comentario) m.insertAdjacentHTML('beforeend', `<div class="small" style="margin-top:6px">💡 ${esc(t.comentario)}</div>`) }).catch(() => {});
        if (fallas[i] >= 5){
          $('enMic').insertAdjacentHTML('beforeend', `<div class="small" style="margin-top:6px">📌 ${alRepaso ? 'La agregué a tu Repaso' : 'Ya está en tu Repaso'} para practicarla después. Puedes seguir.</div>`);
          $('enSigF').disabled = false; $('enSigF').style.opacity = 1; $('enSigF').textContent = 'Seguir →';
        }
        await di(x[1], 0.85);
      };
      $('enSigF').onclick = () => { if (!$('enSigF').disabled){ i++; una() } };
      di(x[1]);
    };
    una();
  }

  // Parte 3: suena cada frase, su pregunta y su respuesta. Mínimo 3 vueltas.
  function partePregEsc(){
    let vueltas = 0;
    box.innerHTML = `<p class="small" style="margin:0">❓ <b>Parte 3 · Preguntas.</b> Escucha cada frase con su pregunta y su respuesta corta. Mínimo 3 vueltas, y sigue repitiéndose hasta que des Siguiente.</p>
      <div class="flash" style="padding:10px;min-height:0"><div class="muted small" id="enEstado">Empezando…</div></div>
      <div id="enPreg" style="display:grid;gap:10px"></div>
      ${boton('Siguiente: contesta tú (0 de 3 vueltas)')}`;
    const btn = $('enSig'); btn.disabled = true; btn.style.opacity = .5;
    const pinta = (p, fase) => { const x = h.lineas[p[0]]; const c = $('enPreg'); if (!c) return;
      c.innerHTML = `<div data-enfrase="${esc(x[1])}" style="border:1px solid var(--line);border-radius:10px;padding:8px 12px;${fase === 0 ? 'background:var(--soft)' : ''}"><span class="muted small">${esc(x[0])}:</span> <b>${enConPalabras(x[1])}</b></div>
        <div class="flash" style="min-height:0;padding:12px"><div class="f" style="font-size:22px;${fase === 1 ? 'color:#2563eb' : ''}">${esc(p[1])}</div>
        ${fase === 2 ? `<div style="font-size:22px;color:var(--ok);font-weight:700">${esc(p[3])}</div>` : ''}</div>` };
    const estado = t => { const e = $('enEstado'); if (e) e.textContent = t };
    const g = ++gen;
    (async () => {
      while (g === gen){
        for (let q = 0; q < h.preguntas.length && g === gen; q++){
          const p = h.preguntas[q];
          estado(`Vuelta ${vueltas + 1} · pregunta ${q + 1} de ${h.preguntas.length}`);
          pinta(p, 0); await di(h.lineas[p[0]][1]); if (g !== gen) return; await wait(400);
          pinta(p, 1); await di(p[1]); if (g !== gen) return; await wait(900);
          pinta(p, 2); await di(p[3]); if (g !== gen) return; await wait(900);
        }
        if (g !== gen) return;
        vueltas++;
        if (vueltas >= 3 && btn.disabled){ btn.disabled = false; btn.style.opacity = 1; btn.textContent = 'Siguiente: contesta tú →' }
        else if (btn.disabled) btn.textContent = `Siguiente: contesta tú (${vueltas} de 3 vueltas)`;
        estado(`Llevas ${vueltas} ${vueltas === 1 ? 'vuelta' : 'vueltas'}. Vuelve a empezar…`); await wait(1500);
      }
    })();
    btn.onclick = () => { if (!btn.disabled) sig() };
  }

  // Ejercicio de la parte 3: todas las preguntas, contestadas con el micrófono
  function partePregMic(){
    let i = 0;
    const fallas = {};
    const una = () => {
      parar();
      if (i >= h.preguntas.length){ alTerminar(st); return }
      const p = h.preguntas[i], x = h.lineas[p[0]];
      box.innerHTML = `<p class="small" style="margin:0">🗣️ <b>Contesta en voz alta</b>, corto: "Yes, he does." / "No, she isn't." · ${i + 1} de ${h.preguntas.length}</p>
        <div data-enfrase="${esc(x[1])}" style="border:1px solid var(--line);border-radius:10px;padding:8px 12px"><span class="muted small">${esc(x[0])}:</span> ${enConPalabras(x[1])}</div>
        <div class="flash" style="min-height:0;padding:14px"><div class="f" style="font-size:24px">${esc(p[1])} <button class="x" id="enOirP">🔊</button></div>
          <div id="enModelo" hidden style="font-size:22px;color:var(--ok);font-weight:700;margin-top:6px">${esc(p[3])}</div></div>
        <div class="row"><button class="primary" id="enHablo">🎤 Contestar</button></div>
        <div id="enMic"><div data-enres class="small" style="min-height:22px"></div></div>
        <button class="primary" id="enSigF" style="font-size:18px;padding:14px;opacity:.5" disabled>Contesta bien para seguir</button>`;
      $('enOirP').onclick = () => { callarVoz(); di(p[1]) };
      $('enHablo').onclick = async () => {
        const res = $('enMic').querySelector('[data-enres]');
        try {
          const dijo = await escucharLargo('en-US', res);
          const esperado = hsPolaridad(p[3], 'en-US'), dicho = hsPolaridad(dijo, 'en-US');
          const c = enComparar(dijo, p[3]);
          const ok = dicho === esperado && c.nota >= 0.5;
          st.total++; if (ok) st.aciertos++;
          $('enModelo').hidden = false;
          res.innerHTML = ok ? `<b style="color:var(--ok)">✓ ${c.nota >= 0.8 ? '¡Perfecto!' : 'Correcto. La respuesta completa es la verde.'}</b> · Escuché: "${esc(dijo)}"`
            : `<b style="color:var(--warn)">${dicho !== esperado ? 'Revisa la historia: la respuesta es la verde.' : 'Dila completa, como la verde.'}</b> · Escuché: "${esc(dijo)}"`;
          if (ok){ $('enSigF').disabled = false; $('enSigF').style.opacity = 1; $('enSigF').textContent = i < h.preguntas.length - 1 ? 'Siguiente pregunta →' : 'Terminar →' }
          else {
            fallas[i] = (fallas[i] || 0) + 1;
            const alRepaso = enFalla(`${p[1]} — ${p[3]}`, p[5]);
            if (fallas[i] >= 5){ res.insertAdjacentHTML('beforeend', `<div style="margin-top:6px">📌 ${alRepaso ? 'La agregué a tu Repaso' : 'Ya está en tu Repaso'}. Puedes seguir.</div>`);
              $('enSigF').disabled = false; $('enSigF').style.opacity = 1; $('enSigF').textContent = 'Seguir →' }
          }
          await di(p[3]);
        } catch(e){ res.innerHTML = '⚠️ ' + esc(e.message) }
      };
      $('enSigF').onclick = () => { if (!$('enSigF').disabled){ i++; una() } };
      (async () => { const g = gen; await di(x[1]); if (g === gen){ await wait(400); await di(p[1]) } })();
    };
    una();
  }

  pintar();
  return {parar};
}

function enFin(i, r){
  const j = enData(), h = EN_HISTORIAS[i], nueva = !j.done[h.id];
  const xp = (nueva ? 50 : 20) + r.aciertos * 5;
  j.xp += xp; j.done[h.id] = j.done[h.id] || today();
  if (!j.dias.includes(today())) j.dias = [...j.dias, today()].slice(-120);
  j.u = Date.now();
  const hay = new Set(cardList().filter(c => c.act === 'ingles').map(c => c.f));
  const lineas = [[h.lineas[h.clave][1], h.lineas[h.clave][3]], ...h.frases].filter(f => !hay.has(f[0])).map(f => `${f[0]} = ${f[1]}`);
  const nuevas = lineas.length ? addCards('ingles', lineas.join('\n')) : 0;
  persist(); chime(false); enDrillActual = null;
  const otra = EN_HISTORIAS.findIndex(x => !j.done[x.id]);
  if ($('enPartes')) $('enPartes').innerHTML = '🏁 <b>¡Terminada!</b>';
  $('enBox').innerHTML = `<div class="flash"><div class="f">🎉 ¡Historia terminada!</div>
      <div>+${xp} XP · ${r.aciertos} de ${r.total} bien · 🔥 ${enRacha()} ${enRacha() === 1 ? 'día seguido' : 'días seguidos'}</div>
      <div class="muted small">${nuevas} tarjetas nuevas en tu Repaso con la frase clave y las expresiones de la historia.</div></div>
    <div class="card" style="background:var(--soft)">
      <h2>🎯 Platica de la historia con Claude</h2>
      <p class="small">Claude te hace preguntas en inglés sobre "${esc(h.titulo)}" y sobre tu vida, y te corrige. Te deja terminar de hablar.</p>
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
