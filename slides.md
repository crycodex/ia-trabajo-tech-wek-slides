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

<div class="two" style="grid-template-columns:1.4fr 1fr">
<div>
<div class="kick">PONENCIA · EMPLEO E IA 2026</div>
<div class="st" style="font-size:50px">La IA no te quitará el trabajo, <span class="hl">pero sí te lo puede conseguir</span></div>
<p style="font-size:17px;color:var(--soft);margin-top:26px;max-width:560px">Datos reales, nuevas reglas de contratación y cómo usar la IA para conseguir empleo.</p>
<p style="font-size:16px;font-weight:700;margin-top:30px">Cristhian Recalde · @cry.code</p>
</div>
<div class="pic "><img src="/img/1.jpg" alt="Imagen de portada / collage tech"></div>
</div>

<!--
Bienvenida (1 min). Pregunta: ¿cuántos aquí están buscando trabajo o lo buscarán en el próximo año?
-->

---
layout: anim
---

<div class="kick">ANTES DE EMPEZAR</div>
<div class="tt">¿Quién les habla?</div>
<div class="two" style="grid-template-columns:260px 1fr;align-items:start">
<img src="/foto.jpg" style="width:260px;height:340px;object-fit:cover;border-radius:14px">
<div class="grid" style="gap:16px">
<div class="card" v-click style="display:flex;align-items:center;gap:26px"><div class="bn" style="margin:0;min-width:130px">20+</div><div class="h" style="font-weight:400;font-size:20px">apps móviles publicadas</div></div><div class="card" v-click style="display:flex;align-items:center;gap:26px"><div class="bn" style="margin:0;min-width:130px">AWS</div><div class="h" style="font-weight:400;font-size:20px">Community Builder</div></div><div class="card" v-click style="display:flex;align-items:center;gap:26px"><div class="bn" style="margin:0;min-width:130px">Global</div><div class="h" style="font-weight:400;font-size:20px">startups y empresas</div></div>
</div></div>

<!--
Presentación breve (1 min). Máximo 3 datos.
-->

---
layout: anim
---

<div class="kick">PREGUNTA A LA SALA</div>
<div class="two"><div><div class="st">Levanta la mano si crees que la IA te va a quitar el trabajo.</div><p style="color:var(--muted);margin-top:26px">Cuenta las manos. Al final volvemos a preguntar.</p></div><div class="pic "><img src="/img/3.jpg" alt="Público levantando la mano"><span class="cap">Foto: Grey World · CC BY</span></div></div>

<!--
Cuenta las manos. Al final de la charla volvemos a preguntar (2 min).
-->

---
layout: anim
---

<div class="kick">PREGUNTA A LA SALA</div>
<div class="st wide" style="margin:20px 0 30px">¿Quién está buscando trabajo, o lo buscará este año?</div>
<div class="pic wide"><img src="/img/4.jpg" alt="foto de sala o emoji gigante"><span class="cap">Foto: Phillie Casablanca · CC BY</span></div>

<!--
Segunda mano: ¿quién busca trabajo o lo buscará pronto? (1 min)
-->

---
layout: anim
---

<div class="kick">EL RECORRIDO</div>
<div class="tt">Del miedo al plan de acción</div>
<div class="grid" style="grid-template-columns:repeat(5,1fr)">
<div class="card " v-click><div class="n">01</div><div class="h">El miedo vs los datos</div></div>
<div class="card " v-click><div class="n">02</div><div class="h">La verdad incómoda</div></div>
<div class="card " v-click><div class="n">03</div><div class="h">Las nuevas reglas</div></div>
<div class="card " v-click><div class="n">04</div><div class="h">La IA como aliada</div></div>
<div class="card " v-click><div class="n">05</div><div class="h">Marca personal y plan</div></div>
</div>

<!--
Agenda (1 min). Un bloque = una idea que se llevan.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~9 min</div>
<div class="kick">BLOQUE</div>
<div class="sec-n">01</div>
<div class="sec-t">El miedo vs los datos</div>
<div class="sec-s">¿La IA viene por tu trabajo? Veamos qué dicen los números.</div>

<!--
Bloque 1. Tiempo estimado: 9 min.
-->

---
layout: anim
---

<div class="kick">EL MIEDO VS LOS DATOS</div>
<div class="two "><div class="side"><div class="tt">Cada revolución tecnológica dio miedo</div><ul class="lst"><li v-click>Cajeros automáticos</li><li v-click>Excel</li><li v-click>Internet</li></ul></div><div class="pic "><img src="/img/7.jpg" alt="oficina antes de Excel / ATM"></div></div>

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
---

<div class="kick">EL MIEDO VS LOS DATOS</div>
<div class="two"><div><Num v="39%" class="num " style="font-size:150px" /><div class="lab">de las habilidades clave van a cambiar</div></div><div class="pic "><img src="/img/9.jpg" alt="cambio de habilidades"></div></div>
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
---

<div class="kick">EL MIEDO VS LOS DATOS · LATINOAMÉRICA</div>
<div class="two"><div><Num v="26–38%" class="num " style="font-size:100px" /><div class="lab">de los empleos en la región están expuestos a IA generativa</div></div><div class="pic "><img src="/img/11.jpg" alt="Mapa de Latinoamérica"><span class="cap">Foto: thejourney1972 (South America addicted) · CC BY</span></div></div>
<div class="src">OIT y Banco Mundial</div>

<!--
Expuestos no es lo mismo que reemplazados.
-->

---
layout: anim
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
<div class="opts" style="grid-template-columns:repeat(3,1fr)"><div class="opt">A) 12% más</div><div class="opt">B) 35% más</div><div class="opt">C) 62% más</div></div>

<!--
Pedir votos levantando la mano. Dar 20 segundos.
-->

---
layout: anim
---

<div class="kick">RESPUESTA: C</div>
<div class="two"><div><Num v="+62%" class="num " style="font-size:125px" /><div class="lab">prima salarial promedio de los empleos que piden IA</div></div><div class="pic "><img src="/img/14.jpg" alt="billete / gráfico ascendente"><span class="cap">Foto: Cooperweb · CC BY</span></div></div>
<div class="src">PwC · Global AI Jobs Barometer 2026 (57% el año anterior)</div>

<!--
El dato más fuerte de la charla. Saber IA paga.
-->

---
layout: anim
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
---

<div class="kick">MICROSOFT · WORK TREND INDEX 2026</div>
<div class="two"><div><Num v="86%" class="num " style="font-size:150px" /><div class="lab">de usuarios de IA trata su resultado como punto de partida</div></div><div class="pic "><img src="/img/18.jpg" alt="persona revisando una respuesta de IA"><span class="cap">Foto: Rawpixel Ltd · CC BY</span></div></div>
<div class="src">Microsoft (vende herramientas de IA; dato direccionalmente correcto)</div>

<!--
Mencionar el interés comercial si hay público crítico.
-->

---
layout: anim
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
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 1</div>
<div class="two"><div class="st" >No es el fin del empleo. <span class="hl">Es un cambio de reglas.</span></div><div class="pic "><img src="/img/20.jpg" alt="tablero de juego / reglas nuevas"><span class="cap">Foto: Felipe Skroski · CC BY</span></div></div>

<!--
Idea que se llevan. Repetirla.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~11 min</div>
<div class="kick">BLOQUE</div>
<div class="sec-n">02</div>
<div class="sec-t">La verdad incómoda</div>
<div class="sec-s">Dónde sí hay riesgo, y por qué no es el fin del camino.</div>

<!--
Bloque 2. Tiempo estimado: 11 min.
-->

---
layout: anim
---

<div class="kick">LA VERDAD INCÓMODA</div>
<div class="two"><div class="st" >El primer peldaño de la escalera <span class="hl">sí se está rompiendo</span></div><div class="pic "><img src="/img/22.jpg" alt="escalera con el primer escalón roto"><span class="cap">Foto: shankar s. · CC BY</span></div></div>

<!--
Credibilidad: reconocer el riesgo real. (1 min)
-->

---
layout: anim
---

<div class="kick">LA VERDAD INCÓMODA · STANFORD</div>
<div class="two"><div><Num v="−19%" class="num warm" style="font-size:125px" /><div class="lab">de empleo en jóvenes de 22 a 25 años en ocupaciones muy expuestas a IA</div></div><div class="pic "><img src="/img/23.jpg" alt="canario en la mina (metáfora)"><span class="cap">Foto: Majd Mohabek · CC BY</span></div></div>
<div class="src">Stanford Digital Economy Lab · 'Canaries in the Coal Mine' · revisión agosto 2026</div>

<!--
Comparado con dónde estaría sin la IA. Datos de nómina ADP, EE. UU.
-->

---
layout: anim
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
---

<div class="kick">LA VERDAD INCÓMODA · CASOS</div>
<div class="two"><div><Num v="−20%" class="num warm" style="font-size:125px" /><div class="lab">desarrolladores de software de 22 a 25 años desde el pico de fines de 2022 (también atención al cliente)</div></div><div class="pic "><img src="/img/25.jpg" alt="pantalla con código"></div></div>
<div class="src">Stanford Digital Economy Lab</div>

<!--
Soy desarrollador: me toca de cerca. Ser honesto.
-->

---
layout: anim
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
---

<div class="kick">ECUADOR · EMPLEO JUVENIL</div>
<div class="two"><div><Num v="7,7%" class="num warm" style="font-size:125px" /><div class="lab">desempleo de jóvenes de 15 a 24 años (vs 3,1% nacional)</div></div><div class="pic "><img src="/img/30.jpg" alt="jóvenes en una feria de empleo"><span class="cap">Foto: COD Newsroom · CC BY</span></div></div>
<div class="src">INEC · mayo 2026 (citado por El Diario)</div>

<!--
El problema en Ecuador es el mercado, no la IA.
-->

---
layout: anim
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
---

<div class="kick">ECUADOR · JÓVENES</div>
<div class="two"><div><Num v="581.046" class="num warm" style="font-size:100px" /><div class="lab">jóvenes de 15 a 24 años no estudian ni trabajan (18,25%)</div></div><div class="pic "><img src="/img/32.jpg" alt="joven con celular / sin rumbo"></div></div>
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
---

<div class="kick">ECUADOR · OPORTUNIDAD REMOTA</div>
<div class="two "><div class="side"><div class="tt">Misma hora que EE. UU. y usamos dólar</div><ul class="lst"><li v-click>UTC-5: casi la misma hora que la costa este</li><li v-click>Dólar: sin fricción de pagos</li><li v-click>Tendencia, no cifra</li></ul></div><div class="pic "><img src="/img/34.jpg" alt="Ecuador ↔ EE. UU. (husos horarios)"></div></div>
<div class="src">Fuentes: blogs de agencias de contratación; úsalo como tendencia.</div>

<!--
No dar cifras: las fuentes son blogs.
-->

---
layout: anim
---

<div class="kick">HISTORIA LOCAL</div>
<div class="two rev"><div class="ph "><div><small>ESPACIO PARA IMAGEN</small><br>Foto / captura de la nota de Primicias</div></div><div class="side"><div class="tt">Francisco Arias, ingeniero en marketing</div><ul class="lst"><li v-click>Se sintió obsoleto</li><li v-click>Fue escéptico</li><li v-click>Adoptó la IA para potenciar sus ideas</li></ul></div></div>

<!--
Personalizar con una historia ecuatoriana.
-->

---
layout: anim
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 2</div>
<div class="two"><div class="st" >El puesto junior cambió, <span class="hl">no desapareció.</span></div><div class="pic "><img src="/img/36.jpg" alt="persona subiendo por una escalera nueva"><span class="cap">Foto: Felipe Brandalise · CC BY</span></div></div>

<!--
Cierre del bloque.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~8 min</div>
<div class="kick">BLOQUE</div>
<div class="sec-n">03</div>
<div class="sec-t">Las nuevas reglas de contratación</div>
<div class="sec-s">La búsqueda de empleo en 2026 es IA contra IA.</div>

<!--
Bloque 3. Tiempo estimado: 8 min.
-->

---
layout: anim
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
---

<div class="kick">LAS NUEVAS REGLAS</div>
<div class="one"><div class="st wide" style="font-size:46px">La IA de las empresas hace <span class="hl">tareas administrativas</span> . No decide.</div></div>
<div class="src">Resume Genius 2026 · filtrar, redactar ofertas y agendar</div>

<!--
Matiz: la contratación sigue siendo humana.
-->

---
layout: anim
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
---

<div class="kick">LAS NUEVAS REGLAS · LINKEDIN</div>
<div class="two "><div class="side"><div class="tt">El reclutador ya tiene un agente de IA</div><ul class="lst"><li v-click>LinkedIn Hiring Assistant (desde sep. 2025)</li><li v-click>Arma búsquedas y recomienda candidatos</li><li v-click>Entrevistas de filtro con IA (Hiring Pro)</li></ul></div><div class="ph "><div><small>ESPACIO PARA IMAGEN</small><br>Captura de LinkedIn Hiring Assistant</div></div></div>
<div class="src">Noon · HeroHunt</div>

<!--
Implicación: tu perfil lo lee primero una IA.
-->

---
layout: anim
---

<div class="kick">LAS NUEVAS REGLAS</div>
<div class="two"><div class="st" >Primero te lee una <span class="hl">máquina.</span> Después, te ve una <span class="hl">persona.</span></div><div class="pic "><img src="/img/43.jpg" alt="robot leyendo un perfil"><span class="cap">Foto: dullhunk · CC BY</span></div></div>

<!--
Búsqueda semántica: entiende sinónimos y conceptos relacionados.
-->

---
layout: anim
---

<div class="kick">LAS NUEVAS REGLAS · PRESENCIAL</div>
<div class="two"><div><Num v="72,4%" class="num " style="font-size:125px" /><div class="lab">de líderes de reclutamiento entrevista en persona para combatir fraude</div></div><div class="pic "><img src="/img/44.jpg" alt="entrevista cara a cara"><span class="cap">Foto: OregonDOT · CC BY</span></div></div>
<div class="src">Gartner (vía Computerworld) · Google, Cisco y McKinsey reinstalaron rondas presenciales</div>

<!--
Vuelven las entrevistas presenciales.
-->

---
layout: anim
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
<div class="opts" style="grid-template-columns:repeat(2,1fr)"><div class="opt">MITO</div><div class="opt">REALIDAD</div></div>

<!--
Votar levantando la mano.
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
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 3</div>
<div class="one"><div class="st wide" style="font-size:42px">Si la IA te ayuda a enviar 100 solicitudes, <span class="hl">también ayuda a otros 1.000.</span> La ventaja ya no es el volumen.</div></div>

<!--
La ventaja es la señal, no el volumen.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~16 min</div>
<div class="kick">BLOQUE</div>
<div class="sec-n">04</div>
<div class="sec-t">La IA como tu aliada</div>
<div class="sec-s">CV, LinkedIn y entrevistas. En vivo, sin ediciones.</div>

<!--
Bloque 4. Tiempo estimado: 16 min.
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
<div class="two"><div class="st" >La IA <span class="hl">adapta y pule.</span> Los hechos los pones <span class="hl">tú.</span></div><div class="pic "><img src="/img/52.jpg" alt="persona escribiendo su CV junto a un asistente de IA"></div></div>

<!--
La regla de oro del CV.
-->

---
layout: anim
---

<div class="kick">CONTRAEJEMPLO (1 MIN)</div>
<div class="tt">¿Lo contratarías?</div>
<div class="ph wide"><div><small>ESPACIO PARA IMAGEN</small><br>Captura de un CV / mensaje de LinkedIn 100% genérico hecho con IA</div></div>
<div class="src">Resume Now: 62% de empleadores rechaza CV con IA no personalizados.</div>

<!--
Mostrar un CV o mensaje 100% genérico hecho con IA. Suele provocar risas.
-->

---
layout: anim
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
<div class="prompt">"Compara mi CV con esta oferta. Dime qué falta, qué sobra y qué palabras clave debo usar. No inventes nada."</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">Usa una oferta real de un portal ecuatoriano</div></div><div class="card" v-click><div class="p" style="margin:0">Muestra el antes y después de un logro</div></div><div class="card" v-click><div class="p" style="margin:0">Si falla el internet: capturas de respaldo</div></div></div>

<!--
3–4 minutos.
-->

---
layout: anim
---

<div class="kick">DEMO EN VIVO</div>
<div class="tt">Demo 1 · captura de respaldo</div>
<div class="ph wide"><div><small>ESPACIO PARA IMAGEN</small><br>Captura: CV + oferta + respuesta de la IA</div></div>

<!--
Pega aquí la captura por si falla la conexión.
-->

---
layout: anim
---

<div class="kick">DEMO 2 · LA IA TE ENTREVISTA</div>
<div class="tt">Para encontrar tus logros medibles</div>
<div class="prompt">"Hazme preguntas, una a la vez, sobre mi último trabajo hasta encontrar 3 logros medibles. No inventes nada."</div>
<div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px"><div class="card" v-click><div class="p" style="margin:0">Un voluntario del público responde</div></div><div class="card" v-click><div class="p" style="margin:0">Los logros salen de su experiencia real</div></div><div class="card" v-click><div class="p" style="margin:0">Nunca dejes que invente</div></div></div>

<!--
3–4 minutos con voluntario.
-->

---
layout: anim
---

<div class="kick">DEMO EN VIVO</div>
<div class="tt">Demo 2 · captura de respaldo</div>
<div class="ph wide"><div><small>ESPACIO PARA IMAGEN</small><br>Captura: conversación con logros encontrados</div></div>

<!--
Respaldo de la demo 2.
-->

---
layout: anim
---

<div class="kick">LINKEDIN EN 2026</div>
<div class="two"><div class="st" >Tu perfil es un documento que <span class="hl">primero lee una máquina.</span></div><div class="pic "><img src="/img/61.jpg" alt="perfil de LinkedIn con lupa"><span class="cap">Foto: Visual Content · CC BY</span></div></div>

<!--
Recordar el agente reclutador y la búsqueda semántica.
-->

---
layout: anim
---

<div class="kick">LINKEDIN EN 2026 · TITULAR</div>
<div class="two "><div class="side"><div class="tt">Rol + especialidad + prueba de valor</div><ul class="lst"><li v-click>"Desarrollador Flutter | Apps móviles con IA | 20+ apps publicadas"</li><li v-click>Es lo que aparece en los resultados</li></ul></div><div class="ph "><div><small>ESPACIO PARA IMAGEN</small><br>Captura de un buen titular en LinkedIn</div></div></div>

<!--
El titular es lo más importante.
-->

---
layout: anim
---

<div class="kick">DEMO EN VIVO</div>
<div class="tt">Demo 3 · Tres titulares, tú votas</div>
<div class="ph wide"><div><small>ESPACIO PARA IMAGEN</small><br>Tres versiones del titular generadas por la IA (que el público vote)</div></div>

<!--
3–4 minutos. Mismo perfil, tres versiones. Votación levantando la mano.
-->

---
layout: anim
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

<div class="kick">LINKEDIN EN 2026 · DÓNDE POSTULAR</div>
<div class="two"><div><Num v="6,87%" class="num " style="font-size:125px" /><div class="lab">conversión a entrevista al postular en la web de la empresa (vs 1,95% en LinkedIn)</div></div><div class="ph "><div><small>ESPACIO PARA IMAGEN</small><br>Captura: botón 'Solicitud sencilla'</div></div></div>
<div class="src">Huntr · 1,24 millones de postulaciones (vía Lumyhired)</div>

<!--
Usa LinkedIn para descubrir y conectar, no solo para 'Solicitud sencilla'.
-->

---
layout: anim
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
---

<div class="kick">DEMO EN VIVO</div>
<div class="tt">Demo 4 · Simulación de entrevista por voz</div>
<div class="ph wide"><div><small>ESPACIO PARA IMAGEN</small><br>Captura: la IA entrevista y califica con STAR</div></div>

<!--
3–4 minutos. Usa la oferta de la demo 1.
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
---

<div class="kick">IDEA PARA LLEVARTE · BLOQUE 4</div>
<div class="two"><div class="st" >La IA adapta y pule; <span class="hl">los hechos los pones tú.</span></div><div class="pic "><img src="/img/71.jpg" alt="manos humanas y robóticas escribiendo juntas"><span class="cap">Foto: oakridgelabnews · CC BY</span></div></div>

<!--
Cierre del bloque de demos.
-->

---
layout: animgrad
transition: fade
---

<div class="mins">~9 min</div>
<div class="kick">BLOQUE</div>
<div class="sec-n">05</div>
<div class="sec-t">Marca personal y plan de 30 días</div>
<div class="sec-s">Que te encuentren, no solo buscar.</div>

<!--
Bloque 5. Tiempo estimado: 9 min.
-->

---
layout: anim
---

<div class="kick">MARCA PERSONAL Y NETWORKING</div>
<div class="two"><div><Num v="11x" class="num " style="font-size:150px" /><div class="lab">más tasa de contratación para candidatos referidos frente a postular en frío</div></div><div class="pic "><img src="/img/73.jpg" alt="dos personas dándose la mano"><span class="cap">Foto: ccnull.de Bilddatenbank · CC BY</span></div></div>
<div class="src">Gem · más de 165 millones de postulaciones (vía Lumyhired)</div>

<!--
El canal más eficiente, pero no el único.
-->

---
layout: anim
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
---

<div class="kick">MARCA PERSONAL</div>
<div class="two "><div class="side"><div class="tt">Un proyecto pequeño con IA que resuelva un problema local</div><ul class="lst"><li v-click>Problema</li><li v-click>Solución</li><li v-click>Resultado</li></ul></div><div class="ph "><div><small>ESPACIO PARA IMAGEN</small><br>Captura de un portafolio o repo</div></div></div>

<!--
Estructura de cada proyecto.
-->

---
layout: anim
---

<div class="kick">NETWORKING</div>
<div class="two rev"><div class="ph "><div><small>ESPACIO PARA IMAGEN</small><br>Ejemplo: mensaje genérico vs personalizado</div></div><div class="side"><div class="tt">Un mensaje con motivo concreto vale más que 100 genéricos</div><ul class="lst"><li v-click>Menciona algo que publicó o hizo</li><li v-click>Nada de mensajes de IA sin revisar</li></ul></div></div>

<!--
Se nota cuando lo escribió una IA.
-->

---
layout: anim
---

<div class="kick">TU PLAN</div>
<div class="tt">30 días · 10 horas por semana</div>
<div class="grid" style="grid-template-columns:repeat(4,1fr)">
<div class="card " v-click><div class="n">Sem 1</div><div class="h">Base</div></div>
<div class="card " v-click><div class="n">Sem 2</div><div class="h">CV y LinkedIn</div></div>
<div class="card " v-click><div class="n">Sem 3</div><div class="h">Prueba pública</div></div>
<div class="card " v-click><div class="n">Sem 4</div><div class="h">Red y postulaciones</div></div>
</div>

<!--
Ver las cuatro semanas una por una.
-->

---
layout: anim
---

<div class="kick">TU PLAN DE 30 DÍAS</div>
<div class="tt">Semana 1 · Base</div>
<div class="week"><ul class="lst" style="font-size:22px"><li v-click>Elige 1 o 2 roles objetivo</li><li v-click>Reúne 10 ofertas reales</li><li v-click>Con IA, extrae las habilidades que más se repiten</li></ul><div class="deliv"><small>ENTREGABLE</small><div>Lista de habilidades y palabras clave</div></div></div>

<!--
Una semana, un frente.
-->

---
layout: anim
---

<div class="kick">TU PLAN DE 30 DÍAS</div>
<div class="tt">Semana 2 · CV y LinkedIn</div>
<div class="week"><ul class="lst" style="font-size:22px"><li v-click>CV base con logros medibles</li><li v-click>Titular, Acerca de, habilidades y Destacados alineados</li></ul><div class="deliv"><small>ENTREGABLE</small><div>CV base + perfil actualizado</div></div></div>

<!--
Una semana, un frente.
-->

---
layout: anim
---

<div class="kick">TU PLAN DE 30 DÍAS</div>
<div class="tt">Semana 3 · Prueba pública</div>
<div class="week"><ul class="lst" style="font-size:22px"><li v-click>Un proyecto pequeño con IA</li><li v-click>Primera publicación contando qué aprendiste</li></ul><div class="deliv"><small>ENTREGABLE</small><div>1 proyecto + 1 publicación</div></div></div>

<!--
Una semana, un frente.
-->

---
layout: anim
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
<div class="one"><div class="st wide">¿Quién sigue creyendo que la IA le va a quitar el trabajo?</div><p style="color:var(--muted);font-size:20px;margin-top:30px">Levanta la mano otra vez.</p></div>

<!--
Volver a levantar la mano. ¿Cambió algo? Cerrar con la prima de 62% de PwC (2 min).
-->

---
layout: anim
---

<div class="kick">CIERRE</div>
<div class="two"><div><Num v="+62%" class="num " style="font-size:125px" /><div class="lab">prima salarial para quien sabe usar IA con criterio</div></div><div class="pic "><img src="/img/86.jpg" alt="persona con laptop sonriendo"><span class="cap">Foto: mislav-m · CC BY</span></div></div>
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
<div class="two"><div><div class="st" style="font-size:56px">¿Preguntas? Hablemos.</div><div class="hl" style="font-size:34px;font-weight:700;margin-top:26px">@cry.code</div><p style="color:var(--soft);margin-top:24px;max-width:420px">Escanea y llévate los prompts, el plan de 30 días y las fuentes.</p></div><div class="ph "><div><small>ESPACIO PARA IMAGEN</small><br>QR a la versión web</div></div></div>

<!--
Preguntas y contacto.
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
---

<div class="kick">ANEXO</div>
<div class="tt">Créditos de imágenes</div>
<ul class="lst" style="font-size:12px;columns:2;column-gap:40px;margin-top:0"><li style="break-inside:avoid">Diap. 1: White digital robot, futuristic technology — Autor desconocido (CC0)</li><li style="break-inside:avoid">Diap. 3: hands up for the band — Grey World (BY)</li><li style="break-inside:avoid">Diap. 4: Conference hall @ Le Web — Phillie Casablanca (BY)</li><li style="break-inside:avoid">Diap. 7: Bank of America cash machine, multi-check deposit, lit panels, sign-in screen, keypad, make deposits has never been easier, University Village, Seattle, Washington, USA — Wonderlane (CC0)</li><li style="break-inside:avoid">Diap. 9: Man and woman using electronic device free image — Rawpixel Ltd (CC0)</li><li style="break-inside:avoid">Diap. 11: Mapa antiguo de América del Sur; mapa antigo da América do Sul; old South America map. — thejourney1972 (South America addicted) (BY)</li><li style="break-inside:avoid">Diap. 14: Money — Cooperweb (BY)</li><li style="break-inside:avoid">Diap. 18: Business people working on laptops during a meeting — Rawpixel Ltd (BY)</li><li style="break-inside:avoid">Diap. 20: Chess Glass — Felipe Skroski (BY)</li><li style="break-inside:avoid">Diap. 22: VIP Entrance to the amphitheatre — shankar s. (BY)</li><li style="break-inside:avoid">Diap. 23: SDC10671_1024x768 — Majd Mohabek (BY)</li><li style="break-inside:avoid">Diap. 25: HTML PHP Javascript Source Code — markus spiske (CC0)</li><li style="break-inside:avoid">Diap. 30: Career Fair at College of DuPage 2014 11 — COD Newsroom (BY)</li><li style="break-inside:avoid">Diap. 32: A young man waiting for a train on the platform of a metro station. Several other passengers can be seen in the background, out of focus. — Midhun P (CC0)</li><li style="break-inside:avoid">Diap. 34: Laptop Work — Matt Moloney (CC0)</li><li style="break-inside:avoid">Diap. 36: climbing stairs — Felipe Brandalise (BY)</li><li style="break-inside:avoid">Diap. 43: Nao Social Humanoid Robot from Aldebaran Robotics at Animation 2012 — dullhunk (BY)</li><li style="break-inside:avoid">Diap. 44: Oregon DMV — OregonDOT (BY)</li><li style="break-inside:avoid">Diap. 52: Analytics Charts — Negative Space (CC0)</li><li style="break-inside:avoid">Diap. 61: Engaging LinkedIn Profile — Visual Content (BY)</li><li style="break-inside:avoid">Diap. 71: Robotic hand — oakridgelabnews (BY)</li><li style="break-inside:avoid">Diap. 73: Business Handshake — ccnull.de Bilddatenbank (BY)</li><li style="break-inside:avoid">Diap. 86: Ready — mislav-m (BY)</li></ul>
<div class="src">Fuentes: Openverse / Flickr / Wikimedia. CC0 y dominio público no requieren atribución; CC BY sí (aparece también en cada foto).</div>

<!--
Créditos de las imágenes.
-->
