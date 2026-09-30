---
theme: default
title: La IA no te quitará el trabajo, pero sí te lo puede conseguir
info: Ponencia · Empleo e IA 2026 · @cry.code
colorSchema: dark
aspectRatio: 16/9
canvasWidth: 980
transition: slide-left
mdc: true
fonts:
  sans: Instrument Sans
  serif: Bricolage Grotesque
  mono: JetBrains Mono
  weights: '400,500,600,700,800'
  provider: google
drawings:
  persist: false
layout: anim
---

<div class="two" style="grid-template-columns:1.35fr 1fr">
<div>
<div class="kick">PONENCIA · EMPLEO E IA 2026</div>
<div class="st" style="font-size:50px">La IA no te quitará el trabajo, <span class="hl">pero sí te lo puede conseguir</span></div>
<p style="font-size:18px;color:var(--soft);margin-top:22px;max-width:540px">Datos reales y un roadmap para pasar de estudiante a tu primer empleo, con IA.</p>
<div class="byline"><img src="/foto.jpg" alt="Cristhian Recalde"><div><b>Cristhian Recalde · @cry.code</b><span>AWS Community Builder · IA</span></div></div>
</div>
<ClaudeTiles img="/img/cover.jpg" />
</div>

<!--
Bienvenida (1 min). Pregunta: ¿cuántos aquí están buscando trabajo o lo buscarán en el próximo año?
-->

---
layout: anim
---

<div class="kick">ANTES DE EMPEZAR</div>
<div class="who">
<img src="/foto.jpg" alt="Cristhian Recalde frente al logo de AWS">
<div>
<p class="who-k">Cristhian Recalde · @cry.code</p>
<div class="aws-hero" v-click><Logo n="aws" :size="58" /><div><small>MI COMUNIDAD PRINCIPAL</small><b>AWS Community Builder</b><span>Área: Inteligencia Artificial</span></div></div>
<div class="grid who-grid">
<div class="card" v-click><div class="bn">20+</div><div class="h">apps publicadas · Full Stack Flutter</div></div><div class="card" v-click><div class="bn">Docente</div><div class="h">ITSI · maestrante en IA (UEES)</div></div><div class="card" v-click><div class="bn">IONOS HUB</div><div class="h">cofundador · software y automatización</div></div><div class="card" v-click><div class="bn">Cry Code</div><div class="h">contenido tech en español</div></div>
</div>
<p class="who-also" v-click>También: comunidad GDG Quito · Mención de honor TuApp 2023 (SwapMe) · YouTube Software & Development</p>
</div>
</div>

<!--
Presentación (1 min). Empieza por AWS Community Builder en el área de IA: es la credencial principal. Luego 20+ apps, docencia y maestría en IA, IONOS HUB y Cry Code. GDG Quito y TuApp solo como mención.
-->

---
layout: anim
---

<div class="kick">PREGUNTA A LA SALA</div>
<div class="ask"><div class="st">Levanta la mano si crees que la IA te va a quitar el trabajo.</div></div>

<!--
Pregunta a mano alzada, sin contar. Solo mira la sala y comenta. Al final volvemos a preguntar (1 min).
-->

---
layout: anim
hide: true
---

<div class="kick">PREGUNTA A LA SALA</div>
<div class="st wide" style="margin:20px 0 30px">¿Quién está buscando trabajo, o lo buscará este año?</div>
<div class="pic wide"><img src="/img/audience.jpg" alt="foto de sala o emoji gigante"></div>

<!--
Segunda mano: ¿quién busca trabajo o lo buscará pronto? (1 min)
-->

---
layout: anim
---

<div class="kick">EL RECORRIDO</div>
<div class="tt">Primero el contexto. Después, tu roadmap.</div>
<div class="agenda2">
<div class="ctx"><small>PARTE 1 · EL CONTEXTO · 12 MIN</small>
<div class="card" v-click><div class="n">01</div><div class="h">El miedo vs los datos</div></div>
<div class="card" v-click><div class="n">02</div><div class="h">La verdad incómoda</div></div>
<div class="card" v-click><div class="n">03</div><div class="h">Las nuevas reglas</div></div>
</div>
<div class="card hi rmlist" v-click><small>PARTE 2 · TU ROADMAP · 30 MIN</small>
<ol><li>Habilidades</li><li>Aprende con IA</li><li>Tu perfil con Claude</li><li>Comunidad y visibilidad</li><li>Busca trabajo con IA</li><li>Entrevista</li></ol>
</div>
</div>

<!--
Agenda (1 min). Doce minutos de contexto con datos y treinta de roadmap práctico: de estudiante a tu primer empleo.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~4 min</div>
<div class="kick">PARTE 1 · EL CONTEXTO</div>
<div class="sec-n">01</div>
<div class="sec-t">El miedo vs los datos</div>
<div class="sec-s">¿La IA viene por tu trabajo? Veamos qué dicen los números.</div>

<!--
Bloque 1. Tiempo estimado: 4 min.
-->

---
layout: anim
hide: true
---

<div class="kick">EL MIEDO VS LOS DATOS</div>
<div class="two "><div class="side"><div class="tt">Cada revolución tecnológica dio miedo</div><ul class="lst"><li v-click>Cajeros automáticos</li><li v-click>Excel</li><li v-click>Internet</li></ul></div><div class="pic "><img src="/img/old-tech.jpg" alt="oficina antes de Excel / ATM"></div></div>

<!--
Contexto (1 min): el miedo no es nuevo. Cambia el trabajo, no desaparece.
-->

---
layout: anim
---

<div class="kick">EL MIEDO VS LOS DATOS</div>
<div class="tt">El saldo neto es positivo</div>
<div class="pair" style="grid-template-columns:repeat(3,1fr)">
<div class="card "><Num v="+170 M" class="bn" style="color:var(--acc)" /><div class="h">empleos creados</div></div>
<div class="card "><Num v="−92 M" class="bn" style="color:var(--warm)" /><div class="h">desplazados</div></div>
<div class="card "><Num v="+78 M" class="bn" style="color:var(--good)" /><div class="h">saldo neto a 2030</div></div>
</div>
<div class="src">Foro Económico Mundial · Future of Jobs Report 2025</div>

<!--
WEF Future of Jobs 2025. Abrir rompiendo el miedo: el saldo es positivo (1 min).
-->

---
layout: anim
hide: true
---

<div class="kick">EL MIEDO VS LOS DATOS</div>
<div class="two"><div><Num v="39%" class="num " style="font-size:150px" /><div class="lab">de las habilidades clave van a cambiar</div></div><div class="pic "><img src="/img/skills.jpg" alt="cambio de habilidades"></div></div>
<div class="src">WEF Future of Jobs 2025</div>

<!--
No es 'desaparecer', es 'cambiar'.
-->

---
layout: anim
---

<div class="kick">EL MIEDO VS LOS DATOS · BANCO MUNDIAL</div>
<div class="tt">Empleos en riesgo de automatización por IA generativa</div>
<div class="bars">
<div><div class="bl">Países de ingreso alto</div><div class="bt"><i style="width:62.0%;background:var(--warm)"></i><b style="color:var(--warm)"><Num v="14,2%" tag="span" /></b></div></div>
<div><div class="bl">Países en desarrollo (como Ecuador)</div><div class="bt"><i style="width:19.6%;background:var(--acc)"></i><b style="color:var(--acc)"><Num v="4,5%" tag="span" /></b></div></div>
</div>
<div class="src">Banco Mundial, World Development Report 2026</div>

<!--
3 veces más riesgo en países ricos. Ecuador tiene más que ganar que perder.
-->

---
layout: anim
hide: true
---

<div class="kick">EL MIEDO VS LOS DATOS · LATINOAMÉRICA</div>
<div class="two"><div><Num v="26–38%" class="num " style="font-size:100px" /><div class="lab">de los empleos en la región están expuestos a IA generativa</div></div><div class="pic "><img src="/img/latam.jpg" alt="Mapa de Latinoamérica"></div></div>
<div class="src">OIT y Banco Mundial</div>

<!--
Expuestos no es lo mismo que reemplazados.
-->

---
layout: anim
hide: true
---

<div class="kick">EL MIEDO VS LOS DATOS · LATINOAMÉRICA</div>
<div class="two"><div><Num v="2–5%" class="num" style="font-size:125px" /><div class="lab">en riesgo de automatización total</div></div>
<div class="wafw"><div class="waf"><i class="w" style="--i:0"></i><i class="w" style="--i:1"></i><i class="w" style="--i:2"></i><i class="w" style="--i:3"></i><i class="w" style="--i:4"></i><i class="e" style="--i:5"></i><i class="e" style="--i:6"></i><i class="e" style="--i:7"></i><i class="e" style="--i:8"></i><i class="e" style="--i:9"></i><i class="e" style="--i:10"></i><i class="e" style="--i:11"></i><i class="e" style="--i:12"></i><i class="e" style="--i:13"></i><i class="e" style="--i:14"></i><i class="e" style="--i:15"></i><i class="e" style="--i:16"></i><i class="e" style="--i:17"></i><i class="e" style="--i:18"></i><i class="e" style="--i:19"></i><i class="e" style="--i:20"></i><i class="e" style="--i:21"></i><i class="e" style="--i:22"></i><i class="e" style="--i:23"></i><i class="e" style="--i:24"></i><i class="e" style="--i:25"></i><i class="e" style="--i:26"></i><i class="e" style="--i:27"></i><i class="e" style="--i:28"></i><i class="e" style="--i:29"></i><i class="e" style="--i:30"></i><i class="e" style="--i:31"></i><i class="e" style="--i:32"></i><i class="e" style="--i:33"></i><i class="e" style="--i:34"></i><i class="e" style="--i:35"></i><i class="e" style="--i:36"></i><i class="e" style="--i:37"></i><i class="" style="--i:38"></i><i class="" style="--i:39"></i><i class="" style="--i:40"></i><i class="" style="--i:41"></i><i class="" style="--i:42"></i><i class="" style="--i:43"></i><i class="" style="--i:44"></i><i class="" style="--i:45"></i><i class="" style="--i:46"></i><i class="" style="--i:47"></i><i class="" style="--i:48"></i><i class="" style="--i:49"></i><i class="" style="--i:50"></i><i class="" style="--i:51"></i><i class="" style="--i:52"></i><i class="" style="--i:53"></i><i class="" style="--i:54"></i><i class="" style="--i:55"></i><i class="" style="--i:56"></i><i class="" style="--i:57"></i><i class="" style="--i:58"></i><i class="" style="--i:59"></i><i class="" style="--i:60"></i><i class="" style="--i:61"></i><i class="" style="--i:62"></i><i class="" style="--i:63"></i><i class="" style="--i:64"></i><i class="" style="--i:65"></i><i class="" style="--i:66"></i><i class="" style="--i:67"></i><i class="" style="--i:68"></i><i class="" style="--i:69"></i><i class="" style="--i:70"></i><i class="" style="--i:71"></i><i class="" style="--i:72"></i><i class="" style="--i:73"></i><i class="" style="--i:74"></i><i class="" style="--i:75"></i><i class="" style="--i:76"></i><i class="" style="--i:77"></i><i class="" style="--i:78"></i><i class="" style="--i:79"></i><i class="" style="--i:80"></i><i class="" style="--i:81"></i><i class="" style="--i:82"></i><i class="" style="--i:83"></i><i class="" style="--i:84"></i><i class="" style="--i:85"></i><i class="" style="--i:86"></i><i class="" style="--i:87"></i><i class="" style="--i:88"></i><i class="" style="--i:89"></i><i class="" style="--i:90"></i><i class="" style="--i:91"></i><i class="" style="--i:92"></i><i class="" style="--i:93"></i><i class="" style="--i:94"></i><i class="" style="--i:95"></i><i class="" style="--i:96"></i><i class="" style="--i:97"></i><i class="" style="--i:98"></i><i class="" style="--i:99"></i></div><div class="wleg"><span><i class="e"></i>Expuestos a IA generativa: 26–38 de cada 100</span><span><i class="w"></i>En riesgo de automatización total: 2–5 de cada 100</span></div></div></div>
<div class="src">OIT y Banco Mundial · cada cuadro = 1 de cada 100 empleos (se muestra el límite superior)</div>

<!--
Contraste con la diapositiva anterior: estar expuesto no es ser reemplazado.
-->

---
layout: animgrad
transition: fade
---

<div class="kick">ADIVINA EL DATO · PREGUNTA AL PÚBLICO</div>
<div class="quiz-q">¿Cuánto más ganan, en promedio, los empleos que piden habilidades de IA?</div>
<Quiz :opts='["A) 12% más","B) 35% más","C) 62% más"]' :answer="2" />

<!--
Pedir votos levantando la mano. Dar 20 segundos. Luego haz clic en la opción que eligió la mayoría.
-->

---
layout: anim
---

<div class="kick">RESPUESTA: C</div>
<div class="two"><div><Num v="+62%" class="num " style="font-size:125px" /><div class="lab">prima salarial promedio de los empleos que piden IA</div></div><div class="pic "><img src="/img/salary.jpg" alt="billete / gráfico ascendente"></div></div>
<div class="src">PwC · Global AI Jobs Barometer 2026 (57% el año anterior)</div>

<!--
El dato más fuerte de la charla. Saber IA paga.
-->

---
layout: anim
hide: true
---

<div class="kick">PWC · AI JOBS BAROMETER 2026</div>
<div class="tt">Los empleos que piden IA crecen mucho más rápido</div>
<div class="bars">
<div><div class="bl">Empleos que piden habilidades de IA</div><div class="bt"><i style="width:62.0%;background:var(--acc)"></i><b style="color:var(--acc)"><Num v="+69%" tag="span" /></b></div></div>
<div><div class="bl">Mercado laboral en general</div><div class="bt"><i style="width:8.1%;background:var(--muted)"></i><b style="color:var(--muted)"><Num v="+9%" tag="span" /></b></div></div>
</div>
<div class="src">PwC · más de 1.000 millones de avisos en 27 países</div>

<!--
Crecimiento de demanda.
-->

---
layout: anim
hide: true
---

<div class="kick">PWC · MERCADO DE DOS VÍAS</div>
<div class="tt">La IA premia el criterio experto, no lo reemplaza</div>
<div class="pair" style="grid-template-columns:repeat(2,1fr)">
<div class="card hi"><Num v="2x" class="bn"  /><div class="h">de crecimiento en empleos que la IA 'profesionaliza' frente a los que 'democratiza'</div></div>
<div class="card hi"><Num v="+42%" class="bn"  /><div class="h">más crecimiento salarial en esos mismos empleos</div></div>
</div>

<!--
La IA amplifica al que ya sabe. Por eso hay que aprender el oficio Y la herramienta.
-->

---
layout: anim
hide: true
---

<div class="kick">LINKEDIN · SKILLS ON THE RISE 2026</div>
<div class="tt">Crecen en paralelo dos tipos de habilidades</div>
<div class="grid" style="grid-template-columns:repeat(2,1fr)">
<div class="card hi" v-click><div class="h">Técnicas de IA</div><div class="p">Prompting · RAG · LangChain</div></div>
<div class="card hi" v-click><div class="h">Humanas</div><div class="p">Liderazgo · comunicación con stakeholders</div></div>
</div>

<!--
Si eres de humanidades: sirve igual. No hace falta programar.
-->

---
layout: anim
hide: true
---

<div class="kick">MICROSOFT · WORK TREND INDEX 2026</div>
<div class="two"><div><Num v="86%" class="num " style="font-size:150px" /><div class="lab">de usuarios de IA trata su resultado como punto de partida</div></div><div class="pic "><img src="/img/review-ai.jpg" alt="persona revisando una respuesta de IA"></div></div>
<div class="src">Microsoft (vende herramientas de IA; dato direccionalmente correcto)</div>

<!--
Mencionar el interés comercial si hay público crítico.
-->

---
layout: anim
hide: true
---

<div class="kick">MICROSOFT · HABILIDADES QUE MÁS GANAN VALOR</div>
<div class="tt">No es 'usar IA', es verificarla</div>
<div class="pair" style="grid-template-columns:repeat(2,1fr)">
<div class="card hi"><Num v="50%" class="bn"  /><div class="h">Control de calidad</div></div>
<div class="card hi"><Num v="46%" class="bn"  /><div class="h">Pensamiento crítico</div></div>
</div>

<!--
La habilidad no es usar IA, es verificarla.
-->

---
layout: anim
hide: true
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 1</div>
<div class="two"><div class="st" >No es el fin del empleo. <span class="hl">Es un cambio de reglas.</span></div><div class="pic "><img src="/img/rules.jpg" alt="tablero de juego / reglas nuevas"></div></div>

<!--
Idea que se llevan. Repetirla.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~4 min</div>
<div class="kick">PARTE 1 · EL CONTEXTO</div>
<div class="sec-n">02</div>
<div class="sec-t">La verdad incómoda</div>
<div class="sec-s">Dónde sí hay riesgo, y por qué no es el fin del camino.</div>

<!--
Bloque 2. Tiempo estimado: 4 min.
-->

---
layout: anim
---

<div class="kick">LA VERDAD INCÓMODA</div>
<div class="two"><div class="st" >El primer peldaño de la escalera <span class="hl">sí se está rompiendo</span></div><div class="pic "><img src="/img/broken-stair.jpg" alt="escalera con el primer escalón roto"></div></div>

<!--
Credibilidad: reconocer el riesgo real. (1 min)
-->

---
layout: anim
---

<div class="kick">LA VERDAD INCÓMODA · STANFORD</div>
<div class="two"><div><Num v="−19%" class="num warm" style="font-size:125px" /><div class="lab">de empleo en jóvenes de 22 a 25 años en ocupaciones muy expuestas a IA</div></div><div class="pic "><img src="/img/canary.jpg" alt="canario en la mina (metáfora)"></div></div>
<div class="src">Stanford Digital Economy Lab · 'Canaries in the Coal Mine' · revisión agosto 2026</div>

<!--
Comparado con dónde estaría sin la IA. Datos de nómina ADP, EE. UU. Decirlo en voz: son datos de EE. UU., descriptivos, no causales. Y la caída se concentra donde la IA automatiza, no donde aumenta el trabajo.
-->

---
layout: anim
hide: true
---

<div class="kick">LA VERDAD INCÓMODA · STANFORD</div>
<div class="tt">Nov 2022 → Jun 2026 · jóvenes de 22 a 25 años</div>
<div class="pair" style="grid-template-columns:repeat(2,1fr)">
<div class="card "><Num v="−11%" class="bn" style="color:var(--warm)" /><div class="h">ocupaciones más expuestas a IA</div></div>
<div class="card "><Num v="+10%" class="bn" style="color:var(--good)" /><div class="h">ocupaciones menos expuestas</div></div>
</div>

<!--
Mismo grupo etario, distinta exposición.
-->

---
layout: anim
hide: true
---

<div class="kick">LA VERDAD INCÓMODA · CASOS</div>
<div class="two"><div><Num v="−20%" class="num warm" style="font-size:125px" /><div class="lab">desarrolladores de software de 22 a 25 años desde el pico de fines de 2022 (también atención al cliente)</div></div><div class="pic "><img src="/img/code.jpg" alt="pantalla con código"></div></div>
<div class="src">Stanford Digital Economy Lab</div>

<!--
Soy desarrollador: me toca de cerca. Ser honesto.
-->

---
layout: anim
hide: true
---

<div class="kick">EL MATIZ CLAVE</div>
<div class="one"><div class="st wide" style="font-size:44px">La caída se concentra donde la IA <span class="hl">automatiza</span> . Donde <span class="hl">aumenta</span> el trabajo humano, no aparece.</div></div>
<div class="src">Los mismos autores titulan su actualización: 'sin desplazamiento generalizado'.</div>

<!--
Los trabajadores con experiencia no muestran esa brecha.
-->

---
layout: anim
---

<div class="kick">LA VERDAD INCÓMODA</div>
<div class="tt">El puesto junior cambió, no desapareció</div>
<div class="grid" style="grid-template-columns:repeat(2,1fr)">
<div class="card bad" v-click><div class="kick" style="color:var(--warm)">EL JUNIOR DE ANTES</div><div class="bn" style="font-size:28px;color:#fff">Tareas repetitivas</div><div class="p">Aprendía con los años.</div></div>
<div class="card hi" v-click><div class="kick">EL JUNIOR DE AHORA</div><div class="bn" style="font-size:28px;color:#fff">Criterio desde el día uno</div><div class="p">La IA te deja llegar con ese criterio antes.</div></div>
</div>

<!--
Frase clave del bloque.
-->

---
layout: anim
hide: true
---

<div class="kick">LA VERDAD INCÓMODA · PWC</div>
<div class="tt">El otro lado de la moneda</div>
<div class="pair" style="grid-template-columns:repeat(3,1fr)">
<div class="card "><Num v="7x" class="bn" style="color:var(--acc)" /><div class="h">más probabilidad de pedir habilidades de nivel senior</div></div>
<div class="card "><Num v="+35%" class="bn" style="color:var(--good)" /><div class="h">crecieron desde 2019</div></div>
<div class="card "><Num v="−10%" class="bn" style="color:var(--warm)" /><div class="h">otros puestos de entrada</div></div>
</div>
<div class="src">PwC 2026 · puestos junior más expuestos a IA · datos de EE. UU.</div>

<!--
Puestos junior más expuestos a IA (datos EE. UU.)
-->

---
layout: anim
hide: true
---

<div class="kick">LIMITACIÓN HONESTA</div>
<div class="tt">Lo que estos datos NO dicen</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card " v-click><div class="h">Son de EE. UU.</div><div class="p">No son datos de Ecuador.</div></div>
<div class="card " v-click><div class="h">Son descriptivos</div><div class="p">Indicadores tempranos, no causales.</div></div>
<div class="card " v-click><div class="h">Es una foto</div><div class="p">La tendencia puede cambiar.</div></div>
</div>

<!--
Declarar límites da credibilidad.
-->

---
layout: anim
hide: true
---

<div class="kick">ECUADOR · EMPLEO JUVENIL</div>
<div class="two"><div><Num v="7,7%" class="num warm" style="font-size:125px" /><div class="lab">desempleo de jóvenes de 15 a 24 años (vs 3,1% nacional)</div></div><div class="pic "><img src="/img/jobfair.jpg" alt="jóvenes en una feria de empleo"></div></div>
<div class="src">INEC · mayo 2026 (citado por El Diario)</div>

<!--
El problema en Ecuador es el mercado, no la IA.
-->

---
layout: anim
hide: true
---

<div class="kick">ECUADOR · MERCADO LABORAL</div>
<div class="tt">Pocos empleos de calidad</div>
<div class="pair" style="grid-template-columns:repeat(2,1fr)">
<div class="card "><Num v="36,6%" class="bn" style="color:var(--acc)" /><div class="h">empleo adecuado nacional</div></div>
<div class="card "><Num v="52,8%" class="bn" style="color:var(--warm)" /><div class="h">informalidad</div></div>
</div>
<div class="src">INEC · mayo 2026 (citado por El Comercio)</div>

<!--
INEC mayo 2026.
-->

---
layout: anim
hide: true
---

<div class="kick">ECUADOR · JÓVENES</div>
<div class="two"><div><Num v="581.046" class="num warm" style="font-size:100px" /><div class="lab">jóvenes de 15 a 24 años no estudian ni trabajan (18,25%)</div></div><div class="pic "><img src="/img/youth.jpg" alt="joven con celular / sin rumbo"></div></div>
<div class="src">Microdatos ENEMDU procesados por Expreso · mayo 2026</div>

<!--
Pausa. Dejar que el número pese.
-->

---
layout: anim
---

<div class="kick">ECUADOR · LA OPORTUNIDAD</div>
<div class="tt">Talento en IA: hay más demanda que oferta</div>
<div class="pair" style="grid-template-columns:repeat(2,1fr)">
<div class="card hi"><Num v="7 de 10" class="bn"  /><div class="h">empresas no encuentran talento en IA</div><div class="p">CITEC · Primicias</div></div>
<div class="card hi"><Num v="19,5%" class="bn"  /><div class="h">de la PEA ya adopta IA</div><div class="p">Mentinno · El Diario · T1 2026</div></div>
</div>

<!--
La escasez es la oportunidad.
-->

---
layout: anim
hide: true
---

<div class="kick">ECUADOR · OPORTUNIDAD REMOTA</div>
<div class="two "><div class="side"><div class="tt">Misma hora que EE. UU. y usamos dólar</div><ul class="lst"><li v-click>UTC-5: casi la misma hora que la costa este</li><li v-click>Dólar: sin fricción de pagos</li><li v-click>Tendencia, no cifra</li></ul></div><div class="pic "><img src="/img/timezone.jpg" alt="Ecuador ↔ EE. UU. (husos horarios)"></div></div>
<div class="src">Fuentes: blogs de agencias de contratación; úsalo como tendencia.</div>

<!--
No dar cifras: las fuentes son blogs.
-->

---
layout: anim
hide: true
---

<div class="kick">HISTORIA LOCAL</div>
<div class="two rev"><div class="pic "><img src="/img/story.jpg" alt="Foto / captura de la nota de Primicias"></div><div class="side"><div class="tt">Francisco Arias, ingeniero en marketing</div><ul class="lst"><li v-click>Se sintió obsoleto</li><li v-click>Fue escéptico</li><li v-click>Adoptó la IA para potenciar sus ideas</li></ul></div></div>
<div class="src">Primicias · ilustración de la charla, no es la foto de la nota</div>

<!--
Personalizar con una historia ecuatoriana. La imagen ilustra el arco, no reemplaza la nota.
-->

---
layout: anim
hide: true
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 2</div>
<div class="two"><div class="st" >El puesto junior cambió, <span class="hl">no desapareció.</span></div><div class="pic "><img src="/img/new-stair.jpg" alt="persona subiendo por una escalera nueva"></div></div>

<!--
Cierre del bloque.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~4 min</div>
<div class="kick">PARTE 1 · EL CONTEXTO</div>
<div class="sec-n">03</div>
<div class="sec-t">Las nuevas reglas de contratación</div>
<div class="sec-s">La búsqueda de empleo en 2026 es IA contra IA.</div>

<!--
Bloque 3. Tiempo estimado: 4 min.
-->

---
layout: anim
hide: true
---

<div class="kick">LAS NUEVAS REGLAS</div>
<div class="tt">Avalancha de solicitudes</div>
<div class="pair" style="grid-template-columns:repeat(2,1fr)">
<div class="card "><Num v="48%" class="bn"  /><div class="h">dice que la IA aumentó el volumen de postulaciones por vacante</div></div>
<div class="card "><Num v="92%" class="bn"  /><div class="h">usa algún grado de IA en su proceso</div></div>
</div>
<div class="src">ZipRecruiter 2026 · más de 1.000 reclutadores (resumen HeroHunt)</div>

---
layout: anim
---

<div class="kick">LAS NUEVAS REGLAS</div>
<div class="tt">IA contra IA: así llega tu solicitud a una persona</div>
<div class="flow" style="grid-template-columns:1fr auto 1fr auto 1fr auto 1fr">
<div class="card" v-click><div class="n">1</div><div class="h">Candidatos con IA</div><div class="p">Cientos de solicitudes en minutos</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">2</div><div class="h">Filtro con IA</div><div class="p">Resume, filtra y agenda</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">3</div><div class="h">Reclutador humano</div><div class="p">Revisa los pocos que pasan</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">4</div><div class="h">Entrevista</div><div class="p">Cada vez más presencial</div></div>
</div>

<!--
Explicar el embudo. Lo escaso ahora es la señal de autenticidad.
-->

---
layout: anim
hide: true
---

<div class="kick">LAS NUEVAS REGLAS</div>
<div class="one"><div class="st wide" style="font-size:46px">La IA de las empresas hace <span class="hl">tareas administrativas</span> . No decide.</div></div>
<div class="src">Resume Genius 2026 · filtrar, redactar ofertas y agendar</div>

<!--
Matiz: la contratación sigue siendo humana.
-->

---
layout: anim
hide: true
---

<div class="kick">LAS NUEVAS REGLAS</div>
<div class="tt">Verificar se volvió el problema</div>
<div class="pair" style="grid-template-columns:repeat(2,1fr)">
<div class="card bad"><Num v="67%" class="bn"  /><div class="h">dice que las solicitudes con IA hacen el proceso más lento</div></div>
<div class="card bad"><Num v="65%" class="bn"  /><div class="h">dice que las habilidades son más difíciles de verificar</div></div>
</div>
<div class="src">Robert Half 2026 (citado por Peopable)</div>

---
layout: anim
hide: true
---

<div class="kick">LAS NUEVAS REGLAS · LINKEDIN</div>
<div class="two "><div class="side"><div class="tt">El reclutador ya tiene un agente de IA</div><ul class="lst"><li v-click>LinkedIn Hiring Assistant (desde sep. 2025)</li><li v-click>Arma búsquedas y recomienda candidatos</li><li v-click>Entrevistas de filtro con IA (Hiring Pro)</li></ul></div><div class="pic "><img src="/img/agent.jpg" alt="Captura de LinkedIn Hiring Assistant"></div></div>
<div class="src">Noon · HeroHunt</div>

<!--
Implicación: tu perfil lo lee primero una IA.
-->

---
layout: anim
---

<div class="kick">LAS NUEVAS REGLAS</div>
<div class="two"><div class="st" >Primero te lee una <span class="hl">máquina.</span> Después, te ve una <span class="hl">persona.</span></div><div class="pic "><img src="/img/robot-profile.jpg" alt="robot leyendo un perfil"></div></div>

<!--
Búsqueda semántica: entiende sinónimos y conceptos relacionados.
-->

---
layout: anim
hide: true
---

<div class="kick">LAS NUEVAS REGLAS · PRESENCIAL</div>
<div class="two"><div><Num v="72,4%" class="num " style="font-size:125px" /><div class="lab">de líderes de reclutamiento entrevista en persona para combatir fraude</div></div><div class="pic "><img src="/img/interview.jpg" alt="entrevista cara a cara"></div></div>
<div class="src">Gartner (vía Computerworld) · Google, Cisco y McKinsey reinstalaron rondas presenciales</div>

<!--
Vuelven las entrevistas presenciales.
-->

---
layout: anim
hide: true
---

<div class="kick">DOS PREGUNTAS DE LÍDERES</div>
<div class="tt">Prepara tu respuesta</div>
<div class="grid" style="grid-template-columns:repeat(2,1fr)">
<div class="card hi" v-click><div class="h">Dan Shapero · COO de LinkedIn</div><div class="p">¿Cómo has usado la IA?</div></div>
<div class="card hi" v-click><div class="h">Julie Sweet · CEO de Accenture</div><div class="p">¿Qué aprendiste en los últimos seis meses?</div></div>
</div>
<div class="src">Fortune</div>

<!--
Interpelar al público en vivo: pedir que alguien responda.
-->

---
layout: animgrad
transition: fade
---

<div class="kick">¿MITO O REALIDAD? · VOTA</div>
<div class="quiz-q">"El ATS rechaza tu CV automáticamente si el formato no le gusta."</div>
<Quiz :opts='["MITO","REALIDAD"]' :answer="0" />

<!--
Votar levantando la mano. Haz clic en lo que votó la mayoría.
-->

---
layout: anim
---

<div class="kick">RESPUESTA</div>
<div class="two" style="grid-template-columns:1fr 1fr">
<div><div class="num warm" style="font-size:110px">MITO</div><div class="lab">El ATS guarda tu CV y permite buscarlo por palabras clave. Lo que lo hunde es la avalancha de competidores.</div></div>
<div class="grid">
<div class="card hi"><Num v="99,7%" class="bn" /><div class="p">de reclutadores filtra por palabras clave</div></div>
<div class="card hi"><Num v="10,6x" class="bn" /><div class="p">más invitaciones con el título exacto del puesto</div></div>
</div></div>
<div class="src">Jobscan · encuesta a más de 380 reclutadores (vía ResumeVera, JobCannon)</div>

<!--
Jobscan: el ATS guarda y permite buscar por palabras clave, no rechaza. Lo que hunde el CV es la avalancha.
-->

---
layout: anim
hide: true
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 3</div>
<div class="one"><div class="st wide" style="font-size:42px">Si la IA te ayuda a enviar 100 solicitudes, <span class="hl">también ayuda a otros 1.000.</span> La ventaja ya no es el volumen.</div></div>

<!--
La ventaja es la señal, no el volumen.
-->

---
layout: anim
---

<div class="kick">PARTE 2 · TU ROADMAP</div>
<div class="tt">De estudiante a tu primer empleo, en 6 etapas</div>
<div class="one"><Roadmap /></div>

<!--
Puente entre el contexto y la práctica. Recorre las 6 etapas en 30 segundos; cada una tiene su portada.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~3 min</div>
<div class="kick">PARTE 2 · ETAPA 1 DE 6</div>
<div class="sec-t" style="margin-top:4px">Habilidades</div>
<div class="sec-s">Qué aprender: técnicas y blandas.</div>
<div class="stage-rm"><Roadmap :active="1" mini /></div>

<!--
Etapa 1 del roadmap. Tiempo estimado: 3 min.
-->

---
layout: anim
hide: true
---

<div class="kick">HABILIDADES PARA 2026</div>
<div class="one"><div class="st wide" style="font-size:46px">La IA cambia el <span class="hl">cómo</span> se trabaja. Tus habilidades deciden el <span class="hl">qué</span> te encargan.</div></div>

<!--
Recordar el 39% de habilidades que cambian (WEF).
-->

---
layout: anim
---

<div class="kick">HABILIDADES TÉCNICAS</div>
<div class="tt">Lo que crece más rápido</div>
<div class="grid tools" style="grid-template-columns:repeat(3,1fr)">
<div class="card tool " v-click><div class="thead"><span class="tag ">Para todos</span></div><div class="h">Usar IA con criterio</div><div class="p">Pedir bien, revisar siempre, citar la fuente</div></div>
<div class="card tool " v-click><div class="thead"><span class="tag ">Para todos</span></div><div class="h">Alfabetización tecnológica</div><div class="p">Hojas de cálculo, datos básicos, automatizar tareas</div></div>
<div class="card tool " v-click><div class="thead"><span class="tag ">Para todos</span></div><div class="h">Inglés funcional</div><div class="p">Leer documentación y escribir un correo claro</div></div>
<div class="card tool " v-click><div class="thead"><span class="tag dev">Tecnología</span></div><div class="h">IA y datos</div><div class="p">APIs de modelos, RAG, agentes, evaluación</div></div>
<div class="card tool " v-click><div class="thead"><span class="tag dev">Tecnología</span></div><div class="h">Redes y ciberseguridad</div><div class="p">Entre las de mayor crecimiento según el WEF</div></div>
<div class="card tool " v-click><div class="thead"><span class="tag dev">Tecnología</span></div><div class="h">Automatización</div><div class="p">Flujos sin código y scripts pequeños</div></div>
</div>
<div class="src">WEF Future of Jobs 2025 · LinkedIn Skills on the Rise 2026</div>

<!--
La fila de arriba es para cualquier carrera. La de abajo, para perfiles técnicos.
-->

---
layout: anim
---

<div class="kick">HABILIDADES BLANDAS</div>
<div class="tt">Las que la IA no puede hacer por ti</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card " v-click><div class="n">1</div><div class="h">Pensamiento crítico</div><div class="p">Detectar cuándo la IA se equivoca</div></div>
<div class="card " v-click><div class="n">2</div><div class="h">Comunicación escrita</div><div class="p">Clave en equipos remotos y asíncronos</div></div>
<div class="card " v-click><div class="n">3</div><div class="h">Adaptabilidad</div><div class="p">Cambiar de herramienta sin drama</div></div>
<div class="card " v-click><div class="n">4</div><div class="h">Curiosidad</div><div class="p">Aprender algo nuevo cada mes</div></div>
<div class="card " v-click><div class="n">5</div><div class="h">Colaboración y liderazgo</div><div class="p">Coordinar personas, no solo prompts</div></div>
<div class="card " v-click><div class="n">6</div><div class="h">Criterio ético</div><div class="p">No inventar, no exagerar, citar</div></div>
</div>
<div class="src">WEF Future of Jobs 2025 · LinkedIn Skills on the Rise 2026 · Microsoft Work Trend Index 2026</div>

<!--
Enlazar con Microsoft: control de calidad 50%, pensamiento crítico 46%.
-->

---
layout: anim
hide: true
---

<div class="kick">RECUERDA LA PREGUNTA DE LA CEO DE ACCENTURE</div>
<div class="one"><div class="st wide" style="font-size:46px">¿Qué aprendiste en los <span class="hl">últimos seis meses?</span> Ten una respuesta con un proyecto.</div></div>

<!--
Callback a Julie Sweet del bloque 3.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~3 min</div>
<div class="kick">PARTE 2 · ETAPA 2 DE 6</div>
<div class="sec-t" style="margin-top:4px">Aprende con IA</div>
<div class="sec-s">Que la IA sea tu tutor, no tu atajo.</div>
<div class="stage-rm"><Roadmap :active="2" mini /></div>

<!--
Etapa 2 del roadmap. Tiempo estimado: 3 min.
-->

---
layout: anim
---

<div class="kick">APRENDER CON IA · EL MÉTODO</div>
<div class="tt">Que la IA sea tu tutor, no tu atajo</div>
<div class="flow" style="grid-template-columns:1fr auto 1fr auto 1fr auto 1fr">
<div class="card" v-click><div class="n">1</div><div class="h">Diagnóstico</div><div class="p">Que te haga 5 preguntas de nivel</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">2</div><div class="h">Plan</div><div class="p">4 semanas que terminan en un proyecto</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">3</div><div class="h">Práctica</div><div class="p">Ejercicios cortos con corrección</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">4</div><div class="h">Explícalo tú</div><div class="p">Enséñale el tema; que busque tus errores</div></div>
</div>

<!--
Explicar con tus palabras es la prueba de que aprendiste.
-->

---
layout: anim
---

<div class="kick">APRENDER CON IA · PROMPT 1</div>
<div class="tt">Un plan que termina en algo que mostrar</div>
<div class="pwrap"><div class="prompt">"Quiero aprender [tema] en 4 semanas, 5 horas por semana. Primero hazme 5 preguntas para saber mi nivel. Luego arma un plan semanal que termine en un proyecto que pueda poner en mi portafolio."</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">El proyecto final va a Destacados</div></div><div class="card" v-click><div class="p" style="margin:0">Pide recursos gratuitos</div></div><div class="card" v-click><div class="p" style="margin:0">Revisa el plan cada domingo</div></div></div>

<!--
Conecta con la semana 3 del plan de 30 días.
-->

---
layout: anim
hide: true
---

<div class="kick">APRENDER CON IA · PROMPT 2</div>
<div class="tt">Modo tutor</div>
<div class="pwrap"><div class="prompt">"Explícame [concepto] con un ejemplo de mi trabajo. Después hazme 3 preguntas. No me des la respuesta hasta que lo intente, y corrígeme."</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">'No me des la respuesta' es la clave</div></div><div class="card" v-click><div class="p" style="margin:0">Pide el ejemplo de tu área</div></div><div class="card" v-click><div class="p" style="margin:0">Guarda las preguntas que fallaste</div></div></div>

<!--
Mostrar en vivo si hay tiempo.
-->

---
layout: anim
hide: true
---

<div class="kick">APRENDER CON IA</div>
<div class="tt">La diferencia está en quién piensa</div>
<div class="grid" style="grid-template-columns:repeat(2,1fr)">
<div class="card bad" v-click><div class="kick" style="color:var(--warm)">ASÍ NO</div><div class="bn" style="font-size:28px;color:#fff">Que la IA haga la tarea</div><div class="p">Aprendes a copiar.</div></div>
<div class="card hi" v-click><div class="kick">ASÍ SÍ</div><div class="bn" style="font-size:28px;color:#fff">Que la IA te haga preguntas</div><div class="p">Aprendes a pensar.</div></div>
</div>

<!--
Cierra la parte de aprendizaje.
-->

---
layout: anim
hide: true
---

<div class="kick">DÓNDE APRENDER GRATIS</div>
<div class="tt">Sin pagar un curso</div>
<div class="grid tools" style="grid-template-columns:repeat(2,1fr)">
<div class="card tool " v-click><div class="thead"><span class="tag ">Curso</span></div><div class="h">Anthropic Academy</div><div class="p">Cursos gratuitos de fluidez en IA</div></div>
<div class="card tool " v-click><div class="thead"><span class="tag ">Comunidad</span></div><div class="h">GDG, AWS User Groups, meetups</div><div class="p">Aprendes y conoces a quien te recomienda</div></div>
<div class="card tool " v-click><div class="thead"><span class="tag ">Fuente</span></div><div class="h">Documentación oficial</div><div class="p">La fuente, no el resumen de un resumen</div></div>
<div class="card tool " v-click><div class="thead"><span class="tag ">Práctica</span></div><div class="h">Un problema real</div><div class="p">El mejor curso es resolver algo de tu ciudad</div></div>
</div>

<!--
Mencionar las comunidades de las que formas parte.
-->

---
layout: anim
hide: true
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 5</div>
<div class="one"><div class="st wide" style="font-size:52px">Aprende con la IA, <span class="hl">no a través de ella.</span></div></div>

<!--
Cierre del bloque 5.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~10 min</div>
<div class="kick">PARTE 2 · ETAPA 3 DE 6</div>
<div class="sec-t" style="margin-top:4px">Tu perfil con Claude</div>
<div class="sec-s">CV y LinkedIn que una IA encuentra y una persona cree.</div>
<div class="stage-rm"><Roadmap :active="3" mini /></div>

<!--
Etapa 3 del roadmap. Tiempo estimado: 10 min.
-->

---
layout: anim
---

<div class="kick">CV EN LA ERA DE LA IA</div>
<div class="tt">Personalizar rinde el doble</div>
<div class="bars">
<div><div class="bl">CV adaptado a la oferta</div><div class="bt"><i style="width:62.0%;background:var(--acc)"></i><b style="color:var(--acc)"><Num v="5,75%" tag="span" /></b></div></div>
<div><div class="bl">CV genérico</div><div class="bt"><i style="width:28.9%;background:var(--warm)"></i><b style="color:var(--warm)"><Num v="2,68%" tag="span" /></b></div></div>
</div>
<div class="src">Análisis de 1,39 millones de postulaciones (The Interview Guys) · % de conversión a entrevista</div>

<!--
Personalizar duplica las probabilidades.
-->

---
layout: anim
hide: true
---

<div class="kick">CV EN LA ERA DE LA IA · HUNTR T1 2026</div>
<div class="tt">Menos solicitudes, mejor adaptadas</div>
<div class="bars">
<div><div class="bl">Entre 11 y 20 solicitudes</div><div class="bt"><i style="width:62.0%;background:var(--acc)"></i><b style="color:var(--acc)"><Num v="9,25%" tag="span" /></b></div></div>
<div><div class="bl">100 o más solicitudes</div><div class="bt"><i style="width:17.3%;background:var(--warm)"></i><b style="color:var(--warm)"><Num v="2,58%" tag="span" /></b></div></div>
</div>
<div class="src">Huntr T1 2026 (vía The Interview Guys) · % de conversión a entrevista</div>

<!--
Menos, pero mejor.
-->

---
layout: anim
---

<div class="kick">CV EN LA ERA DE LA IA</div>
<div class="two"><div class="st" >La IA <span class="hl">adapta y pule.</span> Los hechos los pones <span class="hl">tú.</span></div><div class="pic "><img src="/img/cv-ai.jpg" alt="persona escribiendo su CV junto a un asistente de IA"></div></div>

<!--
La regla de oro del CV.
-->

---
layout: anim
---

<div class="kick">CONTRAEJEMPLO (1 MIN)</div>
<div class="tt">¿Lo contratarías?</div>
<div class="mocks">
<div class="bubble bad" v-click><small>MENSAJE GENÉRICO</small><p>Estimado reclutador, soy un profesional altamente motivado, proactivo y orientado a resultados, con pasión por los desafíos y excelente trabajo en equipo. Quedo atento a sus comentarios.</p></div>
<div class="bubble good" v-click><small>LO QUE SÍ SE LEE</small><p>Aumenté 40% el alcance de Instagram en 6 meses con un calendario de contenido. Busco el equipo donde pueda repetir ese número.</p></div>
</div>
<div class="src">Ejemplo de la charla · Resume Now: 62% de empleadores rechaza CV con IA no personalizados.</div>

<!--
Leer el genérico en voz alta: suele provocar risas. El segundo es el mismo ejemplo del bloque. No presentarlo como un caso real con nombre.
-->

---
layout: anim
hide: true
---

<div class="kick">LO GENÉRICO SE CASTIGA</div>
<div class="tt">Reclutadores y gerentes lo detectan</div>
<div class="pair" style="grid-template-columns:repeat(2,1fr)">
<div class="card bad"><Num v="62%" class="bn"  /><div class="h">de empleadores rechaza CV hechos con IA sin personalizar</div></div>
<div class="card bad"><Num v="49%" class="bn"  /><div class="h">de gerentes descarta los que identifica como generados por IA</div></div>
</div>
<div class="src">Resume Now · Resume.io (vía KraftCV)</div>

<!--
Fuentes secundarias: citarlas como tal.
-->

---
layout: anim
hide: true
---

<div class="kick">CV EN LA ERA DE LA IA</div>
<div class="tt">Siete reglas para tu CV</div>
<div class="grid" style="grid-template-columns:repeat(4,1fr)">
<div class="card " v-click><div class="n">1</div><div class="h">Un CV base + una versión por oferta</div></div>
<div class="card " v-click><div class="n">2</div><div class="h">Título exacto del puesto</div></div>
<div class="card " v-click><div class="n">3</div><div class="h">Cada logro: verbo, acción, número</div></div>
<div class="card " v-click><div class="n">4</div><div class="h">Deja que la IA te entreviste</div></div>
<div class="card " v-click><div class="n">5</div><div class="h">Formato simple, una columna</div></div>
<div class="card " v-click><div class="n">6</div><div class="h">Léelo en voz alta</div></div>
<div class="card " v-click><div class="n">7</div><div class="h">Nunca exageres</div></div>
</div>

<!--
Repasar rápido; los prompts vienen en las demos.
-->

---
layout: anim
hide: true
---

<div class="kick">CV EN LA ERA DE LA IA</div>
<div class="tt">De responsabilidad a logro</div>
<div class="grid" style="grid-template-columns:repeat(2,1fr)">
<div class="card bad" v-click><div class="kick" style="color:var(--warm)">ANTES</div><div class="bn" style="font-size:28px;color:#fff">"Encargado de redes sociales."</div><div class="p"></div></div>
<div class="card hi" v-click><div class="kick">DESPUÉS</div><div class="bn" style="font-size:24px;color:#fff">"Aumenté 40% el alcance de Instagram en 6 meses con un calendario de contenido."</div><div class="p"></div></div>
</div>

<!--
Usar el ejemplo real que vas a mostrar en la demo.
-->

---
layout: anim
---

<div class="kick">DEMO 1 · CV CONTRA LA OFERTA</div>
<div class="tt">Pega una oferta real y tu CV base</div>
<div class="pwrap"><div class="prompt">"Compara mi CV con esta oferta. Dime qué falta, qué sobra y qué palabras clave debo usar. No inventes nada."</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">Usa una oferta real de un portal ecuatoriano</div></div><div class="card" v-click><div class="p" style="margin:0">Muestra el antes y después de un logro</div></div><div class="card" v-click><div class="p" style="margin:0">Si falla el internet: capturas de respaldo</div></div></div>

<!--
3–4 minutos.
-->

---
layout: anim
hide: true
---

<div class="kick">DEMO 1 · SI FALLA EL INTERNET</div>
<div class="tt">La IA compara. Tú pones el número.</div>
<div class="mocks">
<div class="bubble bad"><small>OFERTA · ANTES</small><p>Analista de marketing digital.<br>En el CV: “Encargado de redes sociales.”</p></div>
<div class="bubble good"><small>RESPUESTA DE LA IA</small><p>Falta el resultado. No lo invento. Pregúntale al candidato: ¿cuánto creció, en cuánto tiempo, con qué?</p></div>
</div>

<!--
Respaldo de la demo 1. Mismo ejemplo de Instagram: +40% en 6 meses.
-->

---
layout: anim
hide: true
---

<div class="kick">DEMO 2 · LA IA TE ENTREVISTA</div>
<div class="tt">Para encontrar tus logros medibles</div>
<div class="pwrap"><div class="prompt">"Hazme preguntas, una a la vez, sobre mi último trabajo hasta encontrar 3 logros medibles. No inventes nada."</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">Un voluntario del público responde</div></div><div class="card" v-click><div class="p" style="margin:0">Los logros salen de su experiencia real</div></div><div class="card" v-click><div class="p" style="margin:0">Nunca dejes que invente</div></div></div>

<!--
3–4 minutos con voluntario.
-->

---
layout: anim
hide: true
---

<div class="kick">DEMO 2 · SI FALLA EL INTERNET</div>
<div class="tt">Una pregunta a la vez</div>
<div class="chat">
<div class="bubble ai" v-click><small>IA</small><p>¿Qué cambió gracias a tu trabajo, en un número?</p></div>
<div class="bubble me" v-click><small>TÚ</small><p>El alcance de Instagram. No sé el porcentaje exacto.</p></div>
<div class="bubble ai" v-click><small>IA</small><p>No lo invento. ¿Tienes el dato de seguidores o de alcance, y en cuántos meses?</p></div>
<div class="bubble me goodline" v-click><small>LOGRO</small><p>+40% de alcance en 6 meses. Ahora sí se puede escribir.</p></div>
</div>

<!--
Respaldo de la demo 2. El número sale de la persona, no del modelo.
-->

---
layout: anim
hide: true
---

<div class="kick">LINKEDIN EN 2026</div>
<div class="two"><div class="st" >Tu perfil es un documento que <span class="hl">primero lee una máquina.</span></div><div class="pic "><img src="/img/profile-lens.jpg" alt="perfil de LinkedIn con lupa"></div></div>

<!--
Recordar el agente reclutador y la búsqueda semántica.
-->

---
layout: anim
hide: true
---

<div class="kick">LINKEDIN EN 2026 · TITULAR</div>
<div class="two"><div class="side"><div class="tt">Rol + especialidad + prueba de valor</div><ul class="lst"><li v-click>Es lo primero que aparece en la búsqueda</li><li v-click>Sin prueba, el titular es un adjetivo</li></ul></div>
<div class="pcard"><div class="av"></div><div><div class="nm">Cristhian Recalde</div><div class="hd">Desarrollador Flutter | Apps móviles con IA | 20+ apps publicadas</div><div class="meta">Ibarra, Ecuador · @cry.code</div></div></div></div>

<!--
El titular es lo más importante. Este es el ejemplo real del speaker.
-->

---
layout: anim
---

<div class="kick">DEMO 3 · LA SALA VOTA</div>
<div class="tt">Mismo perfil. Tres titulares. ¿Cuál abrirías?</div>
<div class="votes">
<div class="opt" v-click><b>A</b><span>Desarrollador</span></div>
<div class="opt" v-click><b>B</b><span>Apasionado por la tecnología y el trabajo en equipo</span></div>
<div class="opt" v-click><b>C</b><span>Desarrollador Flutter | Apps móviles con IA | 20+ apps publicadas</span></div>
</div>
<p class="reveal" v-click>C gana: tiene rol, especialidad y una prueba.</p>

<!--
3–4 minutos. Votación levantando la mano. El clic final revela por qué C gana. No lo adelantes.
-->

---
layout: anim
---

<div class="kick">MI PERFIL REAL · LO QUE YA FUNCIONA</div>
<div class="tt">Un perfil que se entiende en 5 segundos</div>
<div class="annw">
<Annotated src="/img/linkedin-perfil.webp" :boxes='[{"x":5,"y":3,"w":92,"h":39,"n":1,"tone":"good"},{"x":7,"y":23,"w":19.5,"h":32,"n":2,"tone":"good"},{"x":7,"y":62,"w":39.5,"h":6.2,"n":3,"tone":"good"},{"x":65.5,"y":61,"w":23.5,"h":17.5,"n":4,"tone":"good"}]'  />
<ol class="alist"><li class="good" v-click><b>1</b><div><strong>Banner con propuesta</strong><span>Dice qué haces y dónde encontrarte</span></div></li><li class="good" v-click><b>2</b><div><strong>Foto con rostro claro</strong><span>Cercana, bien iluminada, sin filtros</span></div></li><li class="good" v-click><b>3</b><div><strong>Nombre con marca</strong><span>(cry.code) hace que te encuentren</span></div></li><li class="good" v-click><b>4</b><div><strong>Empresa y universidad</strong><span>Contexto inmediato para el reclutador</span></div></li></ol>
</div>

<!--
Mostrar el perfil propio es más creíble que un ejemplo. Recorre los recuadros verdes en orden.
-->

---
layout: anim
---

<div class="kick">MI PERFIL REAL · LO QUE MEJORARÍA</div>
<div class="tt">Cuatro arreglos de cinco minutos</div>
<div class="annw">
<Annotated src="/img/linkedin-perfil.webp" :boxes='[{"x":7,"y":68.6,"w":56,"h":8.8,"n":1},{"x":7,"y":77.4,"w":41.5,"h":4.8,"n":2},{"x":7,"y":82.6,"w":33.5,"h":4.8,"n":3},{"x":7,"y":89,"w":18.2,"h":7.4,"n":4}]'  />
<ol class="alist"><li class="fix" v-click><b>1</b><div><strong>Titular</strong><span>“Comunity” → “Community”. Abre con el rol que buscas y suma una prueba: 20+ apps</span></div></li><li class="fix" v-click><b>2</b><div><strong>Ubicación</strong><span>Ibarra está bien. Suma “remoto” como tipo de trabajo en Open to Work</span></div></li><li class="fix" v-click><b>3</b><div><strong>Visibilidad</strong><span>1.362 seguidores: publica una vez por semana lo que construyes</span></div></li><li class="fix" v-click><b>4</b><div><strong>“Tengo interés en…”</strong><span>Activa Open to Work visible solo para reclutadores</span></div></li></ol>
</div>

<!--
Autocrítica en vivo: da credibilidad. Después, arma el titular corregido en la siguiente diapositiva.
-->

---
layout: anim
---

<div class="kick">LINKEDIN · PRUÉBALO EN VIVO</div>
<div class="tt">Arma tu titular para que una IA te encuentre</div>
<HeadlineBuilder />

<!--
Arma el titular de un voluntario en vivo, o corrige el tuyo. Límite de LinkedIn: 220 caracteres.
-->

---
layout: anim
hide: true
---

<div class="kick">LINKEDIN EN 2026</div>
<div class="tt">Tu perfil en seis partes</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card " v-click><div class="n">1</div><div class="h">Foto y banner</div><div class="p">Muchas más visitas y mensajes</div></div>
<div class="card " v-click><div class="n">2</div><div class="h">Habilidades</div><div class="p">5 o más: hasta 17x más visitas</div></div>
<div class="card " v-click><div class="n">3</div><div class="h">Acerca de</div><div class="p">Lo mejor en las primeras líneas</div></div>
<div class="card " v-click><div class="n">4</div><div class="h">Destacados</div><div class="p">Tu portafolio dentro de LinkedIn</div></div>
<div class="card " v-click><div class="n">5</div><div class="h">Experiencia</div><div class="p">Con logros medibles</div></div>
<div class="card " v-click><div class="n">6</div><div class="h">Open to Work</div><div class="p">Visible solo para reclutadores</div></div>
</div>

<!--
Foto: las cifras (14x–21x) son inconsistentes entre fuentes; presentar como principio, sin número.
-->

---
layout: anim
---

<div class="kick">CLAUDE PARA TU PERFIL</div>
<div class="two"><div class="st" style="font-size:42px">Claude no escribe tu perfil por ti. <span class="hl">Te entrevista, te compara y te corrige.</span></div><ClaudeTiles small /></div>

<!--
Transición a la parte práctica con Claude. La idea: editor exigente, no ghostwriter.
-->

---
layout: anim
---

<div class="kick">CLAUDE PARA TU PERFIL · EL FLUJO</div>
<div class="tt">Cuatro pasos, una tarde</div>
<div class="flow" style="grid-template-columns:1fr auto 1fr auto 1fr auto 1fr">
<div class="card" v-click><div class="n">1</div><div class="h">Crea un Proyecto</div><div class="p">Sube tu CV, 10 ofertas y la exportación de LinkedIn</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">2</div><div class="h">Diagnóstico</div><div class="p">Que lea tu perfil como un reclutador</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">3</div><div class="h">Reescribe por partes</div><div class="p">Titular, Acerca de, experiencia</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">4</div><div class="h">Verifica</div><div class="p">Léelo en voz alta. Corrige cada dato</div></div>
</div>
<div class="src">Exportación: LinkedIn › Configuración › Privacidad de datos › Obtener una copia de tus datos</div>

<!--
Proyectos de Claude: el contexto (CV, ofertas, perfil) queda guardado y no lo repites en cada chat.
-->

---
layout: anim
---

<div class="kick">CLAUDE · PROMPT 1 · DIAGNÓSTICO</div>
<div class="tt"><img class="spark-ic" src="/img/claude-spark.png" alt="">Que te lea un reclutador en 30 segundos</div>
<div class="pwrap"><div class="prompt">"Lee mi perfil como un reclutador de [rol] con 30 segundos. ¿Qué entiendes que hago? ¿Qué te falta para llamarme? ¿Qué sobra?"</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">Pega el perfil o súbelo en PDF</div></div><div class="card" v-click><div class="p" style="margin:0">Pide la respuesta en viñetas</div></div><div class="card" v-click><div class="p" style="margin:0">Repite después de cada cambio</div></div></div>

<!--
Primero diagnóstico, después reescritura.
-->

---
layout: anim
hide: true
---

<div class="kick">CLAUDE · PROMPT 2 · TITULAR</div>
<div class="tt"><img class="spark-ic" src="/img/claude-spark.png" alt="">Cinco titulares para elegir</div>
<div class="pwrap"><div class="prompt">"Con mi CV, propón 5 titulares de LinkedIn de máximo 220 caracteres: rol + especialidad + una prueba. Sin adjetivos como 'apasionado' o 'proactivo'."</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">220 caracteres es el límite de LinkedIn</div></div><div class="card" v-click><div class="p" style="margin:0">Elige uno y ajústalo a tu voz</div></div><div class="card" v-click><div class="p" style="margin:0">La prueba es un número o un logro</div></div></div>

<!--
Conecta con la votación de titulares de la demo 3.
-->

---
layout: anim
---

<div class="kick">CLAUDE · PROMPT 3 · ACERCA DE</div>
<div class="tt"><img class="spark-ic" src="/img/claude-spark.png" alt="">Las dos primeras líneas mandan</div>
<div class="pwrap"><div class="prompt">"Escribe mi 'Acerca de' en primera persona, 3 párrafos cortos. Las 2 primeras líneas dicen qué hago y para quién. Usa solo hechos de mi CV. Si falta un dato, pregúntame antes de escribir."</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">Solo se ven 2–3 líneas antes de 'ver más'</div></div><div class="card" v-click><div class="p" style="margin:0">'Pregúntame' evita que invente</div></div><div class="card" v-click><div class="p" style="margin:0">Termina con qué buscas</div></div></div>

<!--
La frase clave es 'si falta un dato, pregúntame'.
-->

---
layout: anim
hide: true
---

<div class="kick">CLAUDE · PROMPT 4 · PALABRAS CLAVE</div>
<div class="tt"><img class="spark-ic" src="/img/claude-spark.png" alt="">Habla el idioma de las ofertas</div>
<div class="pwrap"><div class="prompt">"Te paso 10 ofertas del rol que busco. Lista las 15 habilidades que más se repiten y marca cuáles faltan en mi perfil y cuáles tengo pero no menciono."</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">Así te encuentra la búsqueda semántica</div></div><div class="card" v-click><div class="p" style="margin:0">Solo agrega lo que puedes demostrar</div></div><div class="card" v-click><div class="p" style="margin:0">Las mismas palabras van en tu CV</div></div></div>

<!--
Es el entregable de la semana 1 del plan.
-->

---
layout: anim
hide: true
---

<div class="kick">CLAUDE PARA TU PERFIL · ASÍ SE VE</div>
<div class="tt">Bien usado, Claude pregunta antes de escribir</div>
<div class="chat">
<div class="bubble me" v-click><small>TÚ</small><p>Mejora mi Acerca de.</p></div>
<div class="bubble ai" v-click><small>CLAUDE</small><p>Antes de escribir: ¿qué problema resuelves y para quién? ¿Tienes un resultado con número de tu último proyecto?</p></div>
<div class="bubble me" v-click><small>TÚ</small><p>Apps móviles para pymes. La última bajó a la mitad los pedidos por WhatsApp.</p></div>
<div class="bubble goodline" v-click><small>PRIMERA LÍNEA</small><p>Hago apps móviles para pymes. La última redujo a la mitad los pedidos manuales por WhatsApp.</p></div>
</div>

<!--
Ejemplo ilustrativo, no un caso real. Mostrar que el dato sale de la persona.
-->

---
layout: anim
---

<div class="kick">LINKEDIN · TIPS QUE CASI NADIE USA</div>
<div class="tt">Seis ajustes de cinco minutos</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card " v-click><div class="n">1</div><div class="h">URL personalizada</div><div class="p">linkedin.com/in/tunombre, no la de números</div></div>
<div class="card " v-click><div class="n">2</div><div class="h">Perfil en inglés</div><div class="p">Agrega un segundo idioma al perfil</div></div>
<div class="card " v-click><div class="n">3</div><div class="h">Open to Work con 'remoto'</div><div class="p">Elige también el tipo de lugar de trabajo</div></div>
<div class="card " v-click><div class="n">4</div><div class="h">Alertas de empleo</div><div class="p">Por rol + remoto, llegan cada día</div></div>
<div class="card " v-click><div class="n">5</div><div class="h">Recomendaciones concretas</div><div class="p">Pide 2–3 que mencionen un logro</div></div>
<div class="card " v-click><div class="n">6</div><div class="h">Comenta antes de publicar</div><div class="p">Un buen comentario también es visibilidad</div></div>
</div>

<!--
Todos se hacen hoy, desde el celular.
-->

---
layout: anim
---

<div class="kick">TU PERFIL · ACERCA DE</div>
<div class="tt">Espacio para tu captura: Acerca de</div>
<div class="annw">
<Annotated  :boxes='[]' label="Pega tu sección Acerca de y marca las 4 zonas" />
<ol class="alist"><li class="tip" v-click><b>1</b><div><strong>Primeras dos líneas</strong><span>Qué haces y para quién</span></div></li><li class="tip" v-click><b>2</b><div><strong>Un logro con número</strong><span>El que más te enorgullece</span></div></li><li class="tip" v-click><b>3</b><div><strong>Qué buscas ahora</strong><span>Rol, modalidad, remoto</span></div></li><li class="tip" v-click><b>4</b><div><strong>Palabras de tus ofertas</strong><span>Las que te encuentra la IA</span></div></li></ol>
</div>

<!--
Reemplaza el espacio con tu captura: gen.js › annotated('Tu perfil · Acerca de'…), pon la imagen en public/img y las coordenadas de los recuadros en %.
-->

---
layout: anim
---

<div class="kick">TU PERFIL · DESTACADOS Y EXPERIENCIA</div>
<div class="tt">Espacio para tu captura: Destacados</div>
<div class="annw">
<Annotated  :boxes='[]' label="Pega tus Destacados o tu Experiencia" />
<ol class="alist"><li class="tip" v-click><b>1</b><div><strong>Destacados</strong><span>3 proyectos con enlace y resultado</span></div></li><li class="tip" v-click><b>2</b><div><strong>Experiencia</strong><span>Verbo + acción + número</span></div></li><li class="tip" v-click><b>3</b><div><strong>Habilidades</strong><span>Las 5 que más piden tus ofertas</span></div></li><li class="tip" v-click><b>4</b><div><strong>Recomendaciones</strong><span>Que mencionen un logro concreto</span></div></li></ol>
</div>

<!--
Mismo proceso que la diapositiva anterior.
-->

---
layout: anim
hide: true
---

<div class="kick">LINKEDIN EN 2026 · DÓNDE POSTULAR</div>
<div class="two"><div><Num v="6,87%" class="num" style="font-size:120px" /><div class="lab">conversión a entrevista en la web de la empresa</div></div>
<div class="doors">
<div class="door bad" v-click><div class="bn" style="color:var(--warm)">1,95%</div><div class="h">Solicitud sencilla</div><div class="p">LinkedIn te descubre. El botón fácil te entierra.</div></div>
<div class="door hi" v-click><div class="bn">6,87%</div><div class="h">Web de la empresa</div><div class="p">Menos gente. Más señal.</div></div>
</div></div>
<div class="src">Huntr · 1,24 millones de postulaciones (vía Lumyhired)</div>

<!--
Usa LinkedIn para descubrir y conectar, no solo para 'Solicitud sencilla'.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~5 min</div>
<div class="kick">PARTE 2 · ETAPA 4 DE 6</div>
<div class="sec-t" style="margin-top:4px">Comunidad y visibilidad</div>
<div class="sec-s">Que te encuentren, no solo buscar.</div>
<div class="stage-rm"><Roadmap :active="4" mini /></div>

<!--
Etapa 4 del roadmap. Tiempo estimado: 5 min.
-->

---
layout: anim
---

<div class="kick">COMUNIDAD</div>
<div class="two"><div class="st" style="font-size:42px">En Ecuador hay comunidades gratuitas que abren <span class="hl">puertas que el aula no abre.</span></div><div class="logo-cloud"><span style="--i:0"><Logo n="aws" :size="78" /></span><span style="--i:1"><Logo n="gdg" :size="78" /></span><span style="--i:2"><Logo n="ieee" :size="78" /></span><span style="--i:3"><Logo n="github" :size="78" /></span><span style="--i:4"><Logo n="googlecloud" :size="78" /></span><span style="--i:5"><Logo n="anthropic" :size="78" /></span></div></div>

<!--
Aquí es donde más cambió mi camino: comunidades como AWS y GDG me dieron contactos, charlas y oportunidades.
-->

---
layout: anim
---

<div class="kick">COMUNIDADES EN ECUADOR</div>
<div class="tt">Súmate a una este mes</div>
<div class="grid tools" style="grid-template-columns:repeat(3,1fr)">
<div class="card tool " v-click><div class="thead"><Logo n="aws" :size="36" /><span class="tag ">Nube e IA</span></div><div class="h">AWS User Groups</div><div class="p">Meetups y el camino a AWS Community Builders</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="gdg" :size="36" /><span class="tag ">Google</span></div><div class="h">GDG Quito</div><div class="p">Meetups, DevFest y study jams</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="ieee" :size="36" /><span class="tag ">Universidad</span></div><div class="h">Ramas estudiantiles IEEE</div><div class="p">Congresos, concursos y red internacional</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="aws" :size="36" /><span class="tag ">Campus</span></div><div class="h">AWS Cloud Clubs</div><div class="p">Clubes de nube liderados por estudiantes</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="gdg" :size="36" /><span class="tag ">Campus</span></div><div class="h">GDG on Campus</div><div class="p">El club de Google dentro de tu universidad</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="plus" :size="36" /><span class="tag dev">Tú</span></div><div class="h">Tu propia comunidad</div><div class="p">¿No hay una en tu ciudad? Ábrela</div></div>
</div>

<!--
Nombrar las que conoces de primera mano. AWS primero: es tu comunidad principal.
-->

---
layout: anim
---

<div class="kick">BENEFICIOS QUE CASI NADIE APROVECHA</div>
<div class="tt">Gratis, por ser estudiante o por ser parte</div>
<div class="grid tools" style="grid-template-columns:repeat(3,1fr)">
<div class="card tool " v-click><div class="thead"><Logo n="github" :size="36" /><span class="tag ">Estudiantes</span></div><div class="h">GitHub Student Developer Pack</div><div class="p">Herramientas pro gratis con tu correo universitario</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="aws" :size="36" /><span class="tag ">Aprende</span></div><div class="h">AWS Educate y Skill Builder</div><div class="p">Cursos y laboratorios de nube e IA</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="googlecloud" :size="36" /><span class="tag ">Aprende</span></div><div class="h">Google Cloud Skills Boost</div><div class="p">Rutas e insignias, a veces con campañas de los GDG</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="anthropic" :size="36" /><span class="tag ">Aprende</span></div><div class="h">Anthropic Academy</div><div class="p">Cursos gratuitos de fluidez en IA</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="aws" :size="36" /><span class="tag ">Programa</span></div><div class="h">AWS Community Builders</div><div class="p">Expertos, créditos y vouchers de certificación</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="ieee" :size="36" /><span class="tag ">Membresía</span></div><div class="h">IEEE estudiantil</div><div class="p">Descuentos en congresos y publicaciones</div></div>
</div>

<!--
Verifica las condiciones vigentes de cada programa antes de la charla. Cuenta qué te dio a ti ser Community Builder.
-->

---
layout: anim
---

<div class="kick">LO QUE LA COMUNIDAD TE DA</div>
<div class="tt">Y que ningún curso te da</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card " v-click><div class="n">1</div><div class="h">Referidos</div><div class="p">Quien te conoce te recomienda: 11x más contratación</div></div>
<div class="card " v-click><div class="n">2</div><div class="h">Mentores</div><div class="p">Gente que ya hizo el camino</div></div>
<div class="card " v-click><div class="n">3</div><div class="h">Tu primera charla</div><div class="p">Hablar en público también se practica</div></div>
<div class="card " v-click><div class="n">4</div><div class="h">Experiencia real</div><div class="p">Organizar un evento es gestionar un proyecto</div></div>
<div class="card " v-click><div class="n">5</div><div class="h">Visibilidad</div><div class="p">Fotos, posts y contactos para tu LinkedIn</div></div>
<div class="card " v-click><div class="n">6</div><div class="h">Avisos de vacantes</div><div class="p">Muchas se comparten primero en la comunidad</div></div>
</div>
<div class="src">Referidos: Gem, más de 165 millones de postulaciones</div>

<!--
El dato de 11x es de Gem.
-->

---
layout: anim
---

<div class="kick">CREA TU COMUNIDAD</div>
<div class="tt">Así empieza, aunque sean tres</div>
<div class="flow" style="grid-template-columns:1fr auto 1fr auto 1fr auto 1fr auto 1fr">
<div class="card" v-click><div class="n">1</div><div class="h">Junta 3 personas</div><div class="p">Con el mismo interés</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">2</div><div class="h">Elige un tema</div><div class="p">IA, nube, móvil o datos</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">3</div><div class="h">Primer meetup</div><div class="p">10 personas y un aula prestada</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">4</div><div class="h">Pide respaldo</div><div class="p">GDG on Campus, AWS Cloud Clubs o tu rama IEEE</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">5</div><div class="h">Publícalo</div><div class="p">Fotos y aprendizajes en LinkedIn</div></div>
</div>

<!--
Crear una comunidad es la forma más rápida de ganar liderazgo y marca personal. Cuenta tu experiencia.
-->

---
layout: anim
hide: true
---

<div class="kick">MARCA PERSONAL Y NETWORKING</div>
<div class="two"><div><Num v="11x" class="num " style="font-size:150px" /><div class="lab">más tasa de contratación para candidatos referidos frente a postular en frío</div></div><div class="pic "><img src="/img/handshake.jpg" alt="dos personas dándose la mano"></div></div>
<div class="src">Gem · más de 165 millones de postulaciones (vía Lumyhired)</div>

<!--
El canal más eficiente, pero no el único.
-->

---
layout: anim
hide: true
---

<div class="kick">EL CONTRAPESO HONESTO</div>
<div class="tt">Postular sí funciona. Lo que falla es postular en masa.</div>
<div class="grid" style="grid-template-columns:repeat(2,1fr)">
<div class="card " v-click><Num v="43–52%" class="bn" /><div class="h">de contrataciones vienen de postulaciones directas</div></div>
<div class="card " v-click><Num v="17–18%" class="bn" /><div class="h">de contrataciones vienen de referidos</div></div>
</div>
<div class="src">Ashby · 250.000 contrataciones</div>

<!--
No decir '85% se consigue por networking': no tiene fuente.
-->

---
layout: anim
hide: true
---

<div class="kick">COMPORTAMIENTO DE LOS BUSCADORES</div>
<div class="tt">Dónde se va el tiempo de búsqueda</div>
<div class="bars">
<div><div class="bl">Postulando en línea</div><div class="bt"><i style="width:62.0%;background:var(--warm)"></i><b style="color:var(--warm)"><Num v="85%" tag="span" /></b></div></div>
<div><div class="bl">Haciendo networking</div><div class="bt"><i style="width:10.9%;background:var(--acc)"></i><b style="color:var(--acc)"><Num v="15%" tag="span" /></b></div></div>
</div>
<div class="src">Encuesta de Huntr</div>

<!--
Ahí está la oportunidad.
-->

---
layout: anim
---

<div class="kick">MARCA PERSONAL PRÁCTICA</div>
<div class="tt">No hace falta ser influencer</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card " v-click><div class="n">1</div><div class="h">Portafolio público</div><div class="p">GitHub, Behance o una página con 2–3 proyectos</div></div>
<div class="card " v-click><div class="n">2</div><div class="h">Aprender en público</div><div class="p">Una publicación por semana</div></div>
<div class="card " v-click><div class="n">3</div><div class="h">Proyecto con IA</div><div class="p">Uno pequeño vale más que un certificado más</div></div>
<div class="card " v-click><div class="n">4</div><div class="h">Comunidades</div><div class="p">Meetups, hackathons, eventos</div></div>
<div class="card " v-click><div class="n">5</div><div class="h">Mensajes con motivo</div><div class="p">Menciona algo específico de la persona</div></div>
<div class="card " v-click><div class="n">6</div><div class="h">Coherencia</div><div class="p">CV, LinkedIn y portafolio: la misma historia</div></div>
</div>

<!--
Cada fila es una acción concreta.
-->

---
layout: anim
hide: true
---

<div class="kick">MARCA PERSONAL</div>
<div class="two "><div class="side"><div class="tt">Un proyecto pequeño con IA que resuelva un problema local</div><ul class="lst"><li v-click>Problema</li><li v-click>Solución</li><li v-click>Resultado</li></ul></div><div class="pic "><img src="/img/portfolio.jpg" alt="Captura de un portafolio o repo"></div></div>

<!--
Estructura de cada proyecto.
-->

---
layout: anim
hide: true
---

<div class="kick">NETWORKING</div>
<div class="tt">Un motivo concreto vale más que 100 genéricos</div>
<div class="mocks">
<div class="bubble bad" v-click><small>GENÉRICO</small><p>Hola, vi tu perfil y me encantaría conectar. Soy un desarrollador apasionado en busca de nuevas oportunidades. Quedo atento.</p></div>
<div class="bubble good" v-click><small>CON MOTIVO</small><p>Hola Ana. Tu nota sobre contratar juniors en Quito me dejó pensando. Publiqué una app de rutas para el transporte de Ibarra. ¿Te la resumo en tres líneas?</p></div>
</div>

<!--
Se nota cuando lo escribió una IA. El segundo menciona algo concreto de la otra persona. Ejemplo, no un mensaje enviado.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~4 min</div>
<div class="kick">PARTE 2 · ETAPA 5 DE 6</div>
<div class="sec-t" style="margin-top:4px">Busca trabajo con IA</div>
<div class="sec-s">Herramientas reales, trabajo remoto y lo que hay que evitar.</div>
<div class="stage-rm"><Roadmap :active="5" mini /></div>

<!--
Etapa 5 del roadmap. Tiempo estimado: 4 min.
-->

---
layout: anim
hide: true
---

<div class="kick">BUSCAR TRABAJO CON IA</div>
<div class="one"><div class="st wide" style="font-size:46px">Las mejores herramientas <span class="hl">no disparan solicitudes.</span> Evalúan el encaje y adaptan.</div></div>

<!--
Refuerza la tesis del bloque 3: la ventaja no es el volumen.
-->

---
layout: anim
hide: true
---

<div class="kick">BUSCAR CON IA · EL FLUJO</div>
<div class="tt">De la oferta a la postulación</div>
<div class="flow" style="grid-template-columns:1fr auto 1fr auto 1fr auto 1fr auto 1fr">
<div class="card" v-click><div class="n">1</div><div class="h">Perfil</div><div class="p">CV base en un Proyecto de Claude</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">2</div><div class="h">Búsqueda</div><div class="p">Plugin o portales, con filtros reales</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">3</div><div class="h">Encaje</div><div class="p">¿Vale la pena postular?</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">4</div><div class="h">Adaptación</div><div class="p">CV y carta por oferta, con tus palabras</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">5</div><div class="h">Seguimiento</div><div class="p">Tracker y recordatorios</div></div>
</div>

<!--
Cada paso tiene una herramienta; la decisión de postular siempre es tuya.
-->

---
layout: anim
---

<div class="kick">PLUGINS DE CLAUDE · PARA TODOS</div>
<div class="tt">Se instalan con un clic</div>
<div class="grid tools" style="grid-template-columns:repeat(3,1fr)">
<div class="card tool " v-click><div class="thead"><Logo n="develop21" :size="36" /><span class="tag ">Busca ofertas</span></div><div class="h">Develop21 Jobs</div><div class="p">Indeed, LinkedIn y webs de empresas. Evalúa encaje y adapta CV y carta</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="rankedin" :size="36" /><span class="tag ">Analiza perfil</span></div><div class="h">rankedin</div><div class="p">Con tu exportación de LinkedIn: puntaje, brechas y resistencia a la IA</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="foundrole" :size="36" /><span class="tag ">Busca ofertas</span></div><div class="h">FoundRole Jobs</div><div class="p">Salario de mercado, ofertas fantasma y cómo lee tu CV el ATS</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="mokaru" :size="36" /><span class="tag ">Busca y adapta</span></div><div class="h">Mokaru</div><div class="p">Busca, adapta tu CV a cada rol y sigue tus postulaciones</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="careervillage" :size="36" /><span class="tag ">Orientación</span></div><div class="h">Career Coaching</div><div class="p">CareerVillage: orientación de carrera con fuentes citadas</div></div>
<div class="card tool bad" v-click><div class="thead"><span class="tag warn">Ojo</span></div><div class="h">Son de terceros</div><div class="p">Categoría comunidad: revisa qué datos compartes</div></div>
</div>
<div class="src">Directorio de plugins de Claude · septiembre 2026</div>

<!--
Para público no técnico: estos se instalan desde Claude sin programar.
-->

---
layout: anim
---

<div class="kick">SKILLS DE LA COMUNIDAD · PARA DESARROLLADORES</div>
<div class="tt">Gratis en GitHub, con Claude Code</div>
<div class="grid tools" style="grid-template-columns:repeat(2,1fr)">
<div class="card tool " v-click><div class="thead"><Logo n="github" :size="36" /><span class="tag dev">La más usada</span></div><div class="h">career-ops</div><div class="p">~69 k estrellas, MIT, README en español. Revisa Greenhouse, Ashby y Lever, evalúa ofertas y genera tu CV en PDF</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="github" :size="36" /><span class="tag dev">Perfil</span></div><div class="h">linkedin-profile-optimizer</div><div class="p">Titular, Acerca de y palabras clave. Parte de un repo con 20+ skills de carrera</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="github" :size="36" /><span class="tag dev">Estrategia</span></div><div class="h">job-search-strategist</div><div class="p">Plan de búsqueda por rol y mercado</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="github" :size="36" /><span class="tag dev">CV</span></div><div class="h">resume-tailoring-skill</div><div class="p">Adapta el CV a cada oferta</div></div>
</div>
<div class="src">github.com/santifer/career-ops · claudemarketplaces.com · requieren Claude Code y Node</div>

<!--
career-ops la hizo un desarrollador español. Nunca postula por ti: tú decides.
-->

---
layout: anim
---

<div class="kick">LA ADVERTENCIA</div>
<div class="one"><div class="st wide" style="font-size:44px">No existe un conector oficial de LinkedIn, y LinkedIn <span class="hl warm">prohíbe bots y automatizar acciones.</span></div></div>
<div class="src">Condiciones de uso de LinkedIn. Los conectores de empleo que existen son de Indeed, ZipRecruiter y Dice.</div>

<!--
Desconfía de lo que prometa 'postular automático en LinkedIn': te pueden restringir la cuenta.
-->

---
layout: anim
hide: true
---

<div class="kick">BUSCAR CON IA · PROMPT</div>
<div class="tt">Evalúa el encaje antes de postular</div>
<div class="pwrap"><div class="prompt">"Te paso esta oferta y mi CV. Del 1 al 10, ¿qué tan bien encajo? Dame 3 razones a favor, 3 brechas y si vale la pena postular. Sé honesto."</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">Menos de 6: no postules, aprende la brecha</div></div><div class="card" v-click><div class="p" style="margin:0">Las brechas van a tu plan de aprendizaje</div></div><div class="card" v-click><div class="p" style="margin:0">Las razones a favor van a tu carta</div></div></div>

<!--
Es la versión manual de lo que hacen los plugins.
-->

---
layout: anim
---

<div class="kick">TRABAJO REMOTO</div>
<div class="one"><div class="st wide" style="font-size:50px">Muchas ofertas 'remotas' son <span class="hl warm">solo para EE. UU.</span> Lee la ubicación antes de postular.</div></div>

<!--
Remoto no siempre es 'desde cualquier país'. Buscar 'LATAM', 'Americas' o 'worldwide'.
-->

---
layout: anim
---

<div class="kick">TRABAJO REMOTO · DÓNDE BUSCAR</div>
<div class="tt">Portales que sí aceptan Latinoamérica</div>
<div class="grid tools" style="grid-template-columns:repeat(3,1fr)">
<div class="card tool " v-click><div class="thead"><Logo n="linkedin" :size="36" /><span class="tag ">Filtro</span></div><div class="h">LinkedIn</div><div class="p">Filtro 'Remoto' + ubicación 'Latinoamérica'</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="getonbrd" :size="36" /><span class="tag ">Tech LatAm</span></div><div class="h">Get on Board</div><div class="p">Empleos de tecnología en la región</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="torre" :size="36" /><span class="tag ">LatAm</span></div><div class="h">Torre</div><div class="p">Empleos remotos para Latinoamérica</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="wellfound" :size="36" /><span class="tag ">Startups</span></div><div class="h">Wellfound</div><div class="p">Startups con equipos distribuidos</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="wwr" :size="36" /><span class="tag ">Global</span></div><div class="h">We Work Remotely · Remote OK</div><div class="p">Revisa si dice 'worldwide'</div></div>
<div class="card tool " v-click><div class="thead"><Logo n="workana" :size="36" /><span class="tag ">Freelance</span></div><div class="h">Workana</div><div class="p">Proyectos para empezar y armar portafolio</div></div>
</div>

<!--
Palabras clave útiles en inglés: remote LATAM, remote Americas, worldwide.
-->

---
layout: anim
hide: true
---

<div class="kick">TRABAJO REMOTO · LO QUE TE PIDEN</div>
<div class="tt">Más allá de lo técnico</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card " v-click><div class="n">1</div><div class="h">Inglés</div><div class="p">Escrito primero; hablado en la entrevista</div></div>
<div class="card " v-click><div class="n">2</div><div class="h">Comunicación asíncrona</div><div class="p">Escribir claro para quien lee mañana</div></div>
<div class="card " v-click><div class="n">3</div><div class="h">Autonomía</div><div class="p">Entregas, no horas conectado</div></div>
<div class="card " v-click><div class="n">4</div><div class="h">Zona horaria</div><div class="p">UTC-5: tu ventaja con EE. UU.</div></div>
<div class="card " v-click><div class="n">5</div><div class="h">Portafolio público</div><div class="p">Nadie te ve en la oficina</div></div>
<div class="card " v-click><div class="n">6</div><div class="h">Herramientas</div><div class="p">Slack, Notion, GitHub, Loom</div></div>
</div>

<!--
Conecta con la diapositiva de Ecuador: hora y dólar.
-->

---
layout: anim
hide: true
---

<div class="kick">TRABAJO REMOTO · CÓMO TE CONTRATAN</div>
<div class="tt">Tres formas, tres realidades</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card " v-click><div class="h">Empleo directo</div><div class="p">La empresa te contrata. Poco común desde el extranjero.</div></div>
<div class="card " v-click><div class="h">Vía EOR</div><div class="p">Una empresa intermedia (p. ej. Deel o Remote) te contrata por ellos.</div></div>
<div class="card " v-click><div class="h">Contratista</div><div class="p">Facturas tú. Revisa tus obligaciones con el SRI.</div></div>
</div>

<!--
No es asesoría legal ni tributaria; es para saber qué preguntar.
-->

---
layout: anim
---

<div class="kick">TRABAJO REMOTO · SEÑALES DE ESTAFA</div>
<div class="tt">Si ves esto, sal</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card bad" v-click><div class="h">Te piden pagar</div><div class="p">Por capacitación, equipo o 'registro'</div></div>
<div class="card bad" v-click><div class="h">Entrevista solo por chat</div><div class="p">Sin video y sin nombre real</div></div>
<div class="card bad" v-click><div class="h">Piden cédula o banco</div><div class="p">Antes de una oferta por escrito</div></div>
<div class="card bad" v-click><div class="h">Sueldo irreal</div><div class="p">Muy alto para el rol y sin experiencia</div></div>
<div class="card bad" v-click><div class="h">Correo gratuito</div><div class="p">Gmail o Hotmail en vez del dominio de la empresa</div></div>
<div class="card bad" v-click><div class="h">Urgencia</div><div class="p">'Responde hoy o pierdes el puesto'</div></div>
</div>

<!--
Las estafas de empleo remoto son comunes. Mejor prevenir.
-->

---
layout: anim
hide: true
---

<div class="kick">TRABAJO REMOTO · PROMPT</div>
<div class="tt">Revisa la oferta antes de ilusionarte</div>
<div class="pwrap"><div class="prompt">"Revisa esta oferta remota: ¿acepta candidatos desde Ecuador? ¿En qué zona horaria trabaja el equipo? ¿Es empleo, EOR o contrato? ¿Ves señales de estafa?"</div><CopyBtn /></div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">Pega la oferta completa</div></div><div class="card" v-click><div class="p" style="margin:0">Busca la empresa aparte</div></div><div class="card" v-click><div class="p" style="margin:0">Nunca pagues para postular</div></div></div>

<!--
Cierra el bloque práctico de remoto.
-->

---
layout: anim
hide: true
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 6</div>
<div class="one"><div class="st wide" style="font-size:52px">La IA busca y compara. <span class="hl">Tú decides dónde postular.</span></div></div>

<!--
Cierre del bloque 6.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~2 min</div>
<div class="kick">PARTE 2 · ETAPA 6 DE 6</div>
<div class="sec-t" style="margin-top:4px">Entrevista</div>
<div class="sec-s">Prepárate con IA. Responde tú.</div>
<div class="stage-rm"><Roadmap :active="6" mini /></div>

<!--
Etapa 6 del roadmap. Tiempo estimado: 2 min.
-->

---
layout: anim
---

<div class="kick">ENTREVISTAS · JUEGO</div>
<div class="tt">¿Legítimo o trampa?</div>
<LegitGame />

<!--
Lee cada frase, que la sala grite 'legítimo' o 'trampa', y haz clic.
-->

---
layout: anim
hide: true
---

<div class="kick">ENTREVISTAS EN 2026</div>
<div class="tt">Prepararte con IA: sí. Que responda por ti: no.</div>
<div class="grid" style="grid-template-columns:repeat(2,1fr)">
<div class="card hi" v-click><div class="h">Sí: úsala para prepararte</div><div class="p">Preguntas probables · simulación por voz · historias STAR</div></div>
<div class="card bad" v-click><div class="h">No: que piense por ti en vivo</div><div class="p">Es fraude y cada vez más empresas lo detectan</div></div>
</div>

<!--
Línea ética clara.
-->

---
layout: anim
hide: true
---

<div class="kick">ENTREVISTAS EN 2026 · EL CONTEXTO</div>
<div class="tt">El fraude en entrevistas</div>
<div class="grid" style="grid-template-columns:repeat(2,1fr)">
<div class="card " v-click><Num v="6%" class="bn" /><div class="h">de buscadores admitió fraude</div><div class="p">Gartner (unos 3.000 encuestados)</div></div>
<div class="card " v-click><Num v="1 de 4" class="bn" /><div class="h">perfiles falsos en 2028</div><div class="p">Gartner: es una proyección, no una medición</div></div>
</div>

<!--
Citar como proyección.
-->

---
layout: anim
hide: true
---

<div class="kick">ENTREVISTAS EN 2026</div>
<div class="tt">Cómo prepararte con IA</div>
<div class="flow" style="grid-template-columns:1fr auto 1fr auto 1fr auto 1fr auto 1fr">
<div class="card" v-click><div class="n">1</div><div class="h">Pega la oferta</div><div class="p">Pide las 10 preguntas más probables</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">2</div><div class="h">Simula por voz</div><div class="p">Que te pregunte y repregunte</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">3</div><div class="h">Historias STAR</div><div class="p">5 o 6 reales, practicadas</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">4</div><div class="h">Investiga la empresa</div><div class="p">Productos, noticias, problemas</div></div><div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="card" v-click><div class="n">5</div><div class="h">Ensaya sobre IA</div><div class="p">¿Cómo la usas? Con ejemplo</div></div>
</div>

<!--
Sexto paso, de viva voz: prepara preguntas inteligentes para el entrevistador.
-->

---
layout: anim
hide: true
---

<div class="kick">DEMO 4 · SI FALLA EL INTERNET</div>
<div class="tt">La IA te entrevista. Tú respondes en STAR.</div>
<div class="star">
<div class="card" v-click><div class="n">S</div><div class="h">Situación</div><div class="p">El alcance de la cuenta estaba plano.</div></div>
<div class="card" v-click><div class="n">T</div><div class="h">Tarea</div><div class="p">Ordenar qué se publicaba y cuándo.</div></div>
<div class="card" v-click><div class="n">A</div><div class="h">Acción</div><div class="p">Armé un calendario y medí cada pieza.</div></div>
<div class="card hi" v-click><div class="n">R</div><div class="h">Resultado</div><div class="p">+40% de alcance en 6 meses.</div></div>
</div>
<p class="reveal">Si falta la R, la historia no cierra.</p>

<!--
3–4 minutos en vivo con voz. Esta diapositiva es el respaldo, con el mismo ejemplo de la charla.
-->

---
layout: anim
---

<div class="kick">ENTREVISTAS EN 2026</div>
<div class="one"><div class="st wide" style="font-size:44px">Si la IA piensa por ti en la entrevista, <span class="hl">el día uno en el trabajo se va a notar.</span></div></div>

<!--
Frase para la charla.
-->

---
layout: anim
hide: true
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 4</div>
<div class="two"><div class="st" >La IA adapta y pule; <span class="hl">los hechos los pones tú.</span></div><div class="pic "><img src="/img/cowrite.jpg" alt="manos humanas y robóticas escribiendo juntas"></div></div>

<!--
Cierre del bloque de demos.
-->

---
layout: anim
---

<div class="kick">TU PLAN · CHECKLIST</div>
<div class="tt">30 días, 10 horas por semana</div>
<PlanChecklist />

<!--
Marca en vivo lo que ya hiciste. El avance se guarda en el navegador.
-->

---
layout: anim
hide: true
---

<div class="kick">TU PLAN DE 30 DÍAS</div>
<div class="tt">Semana 1 · Base</div>
<div class="week"><ul class="lst" style="font-size:22px"><li v-click>Elige 1 o 2 roles objetivo</li><li v-click>Reúne 10 ofertas reales</li><li v-click>Con IA, extrae las habilidades que más se repiten</li></ul><div class="deliv"><small>ENTREGABLE</small><div>Lista de habilidades y palabras clave</div></div></div>

<!--
Una semana, un frente.
-->

---
layout: anim
hide: true
---

<div class="kick">TU PLAN DE 30 DÍAS</div>
<div class="tt">Semana 2 · CV y LinkedIn</div>
<div class="week"><ul class="lst" style="font-size:22px"><li v-click>CV base con logros medibles</li><li v-click>Titular, Acerca de, habilidades y Destacados alineados</li></ul><div class="deliv"><small>ENTREGABLE</small><div>CV base + perfil actualizado</div></div></div>

<!--
Una semana, un frente.
-->

---
layout: anim
hide: true
---

<div class="kick">TU PLAN DE 30 DÍAS</div>
<div class="tt">Semana 3 · Prueba pública</div>
<div class="week"><ul class="lst" style="font-size:22px"><li v-click>Un proyecto pequeño con IA</li><li v-click>Primera publicación contando qué aprendiste</li></ul><div class="deliv"><small>ENTREGABLE</small><div>1 proyecto + 1 publicación</div></div></div>

<!--
Una semana, un frente.
-->

---
layout: anim
hide: true
---

<div class="kick">TU PLAN DE 30 DÍAS</div>
<div class="tt">Semana 4 · Red y postulaciones</div>
<div class="week"><ul class="lst" style="font-size:22px"><li v-click>10 mensajes personalizados</li><li v-click>Asiste a una comunidad o evento</li><li v-click>5–10 postulaciones adaptadas en la web de la empresa</li><li v-click>2 simulaciones de entrevista</li></ul><div class="deliv"><small>ENTREGABLE</small><div>Postulaciones enviadas + práctica</div></div></div>

<!--
Una semana, un frente.
-->

---
layout: anim
---

<div class="kick">REGLA DE ORO</div>
<div class="one"><div class="st wide" style="font-size:48px">Menos postulaciones, <span class="hl">mejor adaptadas,</span> con alguien que te recomiende.</div></div>

<!--
Regla de oro para cerrar.
-->

---
layout: anim
---

<div class="kick">VOLVAMOS A LA PREGUNTA DEL INICIO</div>
<div class="ask"><div class="st">¿Quién sigue creyendo que la IA le va a quitar el trabajo?</div></div>

<!--
Volver a levantar la mano. ¿Cambió algo? Cerrar con la prima de 62% de PwC (2 min).
-->

---
layout: anim
hide: true
---

<div class="kick">CIERRE</div>
<div class="two"><div><Num v="+62%" class="num " style="font-size:125px" /><div class="lab">prima salarial para quien sabe usar IA con criterio</div></div><div class="pic "><img src="/img/ready.jpg" alt="persona con laptop sonriendo"></div></div>
<div class="src">PwC · AI Jobs Barometer 2026</div>

<!--
Volver al título.
-->

---
layout: animgrad
transition: fade
---

<div class="quote">"La IA no te consigue el trabajo sola. Tú, con IA, sí."</div>
<p style="text-align:center;margin-top:30px;font-size:18px">— Cristhian Recalde</p>

<!--
Frase final. Pausa. Pasar a preguntas.
-->

---
layout: anim
hide: true
---

<div class="kick">PREGUNTAS DIFÍCILES · Q&A</div>
<div class="tt">Respuestas preparadas</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="card " v-click><div class="h">¿Y si en Ecuador las empresas ni usan IA?</div><div class="p">Solo 19,5% de la PEA la adopta, pero 7 de 10 empresas no encuentran talento. La escasez es la oportunidad.</div></div>
<div class="card " v-click><div class="h">¿No es trampa usar IA para el CV?</div><div class="p">Las empresas también la usan para filtrarte. La línea ética: no inventar ni exagerar.</div></div>
<div class="card " v-click><div class="h">Soy de humanidades, ¿me sirve?</div><div class="p">Las habilidades humanas crecen al ritmo de las técnicas. Aprende a usar las herramientas en tu campo; no hace falta programar.</div></div>
</div>

<!--
No mostrar hasta que pregunten. Sirve de respaldo.
-->

---
layout: anim
---

<div class="kick">GRACIAS</div>
<div class="two"><div><div class="st" style="font-size:52px">¿Preguntas? Hablemos.</div><div class="hl" style="font-size:32px;font-weight:700;margin-top:22px">@cry.code</div><p style="color:var(--soft);margin-top:18px;max-width:460px">Escanea y escríbeme. Por ahí te paso los prompts, el plan de 30 días y las fuentes.</p><p style="color:var(--muted);margin-top:14px;font-size:15px">linkedin.com/in/isnotcristhianr</p></div><div class="qrbox"><img src="/img/qr.png" alt="Código QR al LinkedIn de Cristhian Recalde"></div></div>

<!--
El QR abre el LinkedIn. Los prompts se envían por ese contacto: todavía no hay una página pública con el paquete.
-->

---
layout: anim
---

<div class="kick">ANEXO</div>
<div class="tt">Fuentes</div>
<div class="two" style="align-items:start;grid-template-columns:1fr 1fr">
<ul class="lst" style="font-size:13px;margin:0"><li>Foro Económico Mundial — Future of Jobs Report 2025</li><li>PwC — 2026 Global AI Jobs Barometer</li><li>Stanford Digital Economy Lab — Canaries in the Coal Mine (ago 2026)</li><li>Banco Mundial — World Development Report 2026</li><li>OIT y Banco Mundial — IA generativa en América Latina</li><li>LinkedIn — Skills on the Rise 2026</li><li>Microsoft — Work Trend Index 2026</li><li>Resume Genius — AI Impact on Hiring 2026</li><li>Computerworld — entrevistas presenciales</li></ul>
<div><div class="hl" style="font-size:13px;font-weight:700">Prensa ecuatoriana y fuentes secundarias</div><ul class="lst" style="font-size:13px;margin-top:12px"><li>INEC — ENEMDU mayo 2026 (vía El Comercio, El Diario, Expreso)</li><li>Primicias — PwC e IA en Ecuador</li><li>The Interview Guys · HeroHunt · Noon</li><li>Peopable · KraftCV · JobCannon · ResumeVera</li><li>Lumyhired · StaffingHub · Truffle · Fortune</li></ul></div>
</div>

<!--
Fuentes primarias primero; las secundarias, verificar antes de citar.
-->

---
layout: anim
hide: true
---

<div class="kick">ANEXO</div>
<div class="tt">Imágenes</div>
<p style="font-size:22px;max-width:760px;line-height:1.4">Ilustraciones originales de esta charla, hechas para el relato. La foto de la presentación es de Cristhian Recalde.</p>
<p style="color:var(--soft);margin-top:18px;max-width:760px">El código QR abre linkedin.com/in/isnotcristhianr.</p>

<!--
Ya no se usan las fotos de stock. No hace falta atribución CC.
-->
