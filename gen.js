// Genera slides.md (Slidev) a partir del contenido de la charla.
// Uso: npm run gen && npm run dev
import fs from "fs";

const IMG = fs.existsSync("images.json") ? JSON.parse(fs.readFileSync("images.json", "utf8")) : {};
const out = [];
const add = (body, { cls = "s", notes = "", tr } = {}) => out.push({ cls, body: body.trim(), notes, tr: tr || (cls === "grad" ? "fade" : "") });
const kick = k => (k ? `<div class="kick">${k.toUpperCase()}</div>` : "");
const ttl = t => (t ? `<div class="tt">${t}</div>` : "");
const src = s => (s ? `<div class="src">${s}</div>` : "");
const ph = (label, cls = "") => IMG[label]
  ? `<div class="pic ${cls}"><img src="${IMG[label].file}" alt="${label.replace(/^(Imagen|Foto|Mapa|Ícono o imagen|Ilustración)[^:]*:\s*/, "")}">${IMG[label].lic === "by" ? `<span class="cap">Foto: ${IMG[label].by} · CC BY</span>` : ""}</div>`
  : `<div class="ph ${cls}"><div><small>ESPACIO PARA IMAGEN</small><br>${label}</div></div>`;
const rich = parts => parts.map((p, i) => {
  const t = typeof p === "string" ? p : p.hl;
  const prev = i > 0 ? (typeof parts[i - 1] === "string" ? parts[i - 1] : parts[i - 1].hl) : "";
  const sp = i > 0 && !/\s$/.test(prev) && !/^\s/.test(t) ? " " : "";
  return typeof p === "string" ? sp + t : `${sp}<span class="hl${p.warm ? " warm" : ""}">${t}</span>`;
}).join("");
const cols = n => `style="grid-template-columns:repeat(${n},1fr)"`;

function section(n, title, sub, mins) {
  add(`<div class="mins">~${mins} min</div>
<div class="kick">PARTE 1 · EL CONTEXTO</div>
<div class="sec-n">${String(n).padStart(2, "0")}</div>
<div class="sec-t">${title}</div>
<div class="sec-s">${sub}</div>`, { cls: "grad", notes: `Bloque ${n}. Tiempo estimado: ${mins} min.` });
}
function stage(n, title, sub, mins) {
  add(`<div class="mins">~${mins} min</div>
<div class="kick">PARTE 2 · ETAPA ${n} DE 6</div>
<div class="sec-t" style="margin-top:4px">${title}</div>
<div class="sec-s">${sub}</div>
<div class="stage-rm"><Roadmap :active="${n}" mini /></div>`, { cls: "grad", notes: `Etapa ${n} del roadmap. Tiempo estimado: ${mins} min.` });
}
function statement(k, parts, o = {}) {
  const t = rich(parts);
  if (o.side) return add(`${kick(k)}
<div class="two"><div class="st" ${o.fs ? `style="font-size:${o.fs}px"` : ""}>${t}</div>${o.side}</div>
${src(o.src)}`, { notes: o.n });
  add(`${kick(k)}
${o.ph ? `<div class="two"><div class="st" ${o.fs ? `style="font-size:${o.fs}px"` : ""}>${t}</div>${ph(o.ph)}</div>` : `<div class="one"><div class="st wide" ${o.fs ? `style="font-size:${o.fs}px"` : ""}>${t}</div></div>`}
${src(o.src)}`, { notes: o.n });
}
function stat(k, big, label, o = {}) {
  const len = big.length, fs = len <= 3 ? 150 : len <= 5 ? 125 : len <= 7 ? 100 : len <= 10 ? 66 : 50;
  add(`${kick(k)}
<div class="${o.ph ? "two" : "one"}"><div><Num v="${big}" class="num ${o.warm ? "warm" : ""}" style="font-size:${fs}px" /><div class="lab">${label}</div></div>${o.ph ? ph(o.ph) : ""}</div>
${src(o.src)}`, { notes: o.n });
}
function statpair(k, title, items, o = {}) {
  add(`${kick(k)}
${ttl(title)}
<div class="pair" ${cols(items.length)}>
${items.map(it => `<div class="card ${it.cls || ""}"><Num v="${it.big}" class="bn" ${it.c ? `style="color:var(--${it.c})"` : ""} /><div class="h">${it.h}</div>${it.src ? `<div class="p">${it.src}</div>` : ""}</div>`).join("\n")}
</div>
${src(o.src)}`, { notes: o.n });
}
function bars(k, title, rows, o = {}) {
  const max = Math.max(...rows.map(r => r.pct));
  add(`${kick(k)}
${ttl(title)}
<div class="bars">
${rows.map(r => `<div><div class="bl">${r.label}</div><div class="bt"><i style="width:${(62 * r.pct / max).toFixed(1)}%;background:${r.color || "var(--acc)"}"></i><b style="color:${r.color || "var(--acc)"}"><Num v="${r.val}" tag="span" /></b></div></div>`).join("\n")}
</div>
${src(o.src)}`, { notes: o.n });
}
function cards(k, title, items, o = {}) {
  const c = o.cols || items.length;
  add(`${kick(k)}
${ttl(title)}
<div class="grid" ${cols(c)}>
${items.map(it => `<div class="card ${it.hi ? "hi" : it.bad ? "bad" : ""}" v-click>${it.n !== undefined ? `<div class="n">${it.n}</div>` : ""}${it.big ? `<Num v="${it.big}" class="bn" />` : ""}<div class="h">${it.h}</div>${it.p ? `<div class="p">${it.p}</div>` : ""}</div>`).join("\n")}
</div>
${src(o.src)}`, { notes: o.n });
}
function split(k, title, lines, phLabel, o = {}) {
  const txt = `<div class="side"><div class="tt">${title}</div>${lines && lines.length ? `<ul class="lst">${lines.map(l => `<li v-click>${l}</li>`).join("")}</ul>` : ""}</div>`;
  add(`${kick(k)}
<div class="two ${o.left ? "rev" : ""}">${o.left ? ph(phLabel) + txt : txt + ph(phLabel)}</div>
${src(o.src)}`, { notes: o.n });
}
function versus(k, title, a, b, o = {}) {
  add(`${kick(k)}
${ttl(title)}
<div class="grid" ${cols(2)}>
<div class="card bad" v-click><div class="kick" style="color:var(--warm)">${a.h.toUpperCase()}</div><div class="bn" style="font-size:${a.fs || 28}px;color:#fff">${a.big}</div><div class="p">${a.p || ""}</div></div>
<div class="card hi" v-click><div class="kick">${b.h.toUpperCase()}</div><div class="bn" style="font-size:${b.fs || 28}px;color:#fff">${b.big}</div><div class="p">${b.p || ""}</div></div>
</div>
${src(o.src)}`, { notes: o.n });
}
function quiz(k, q, opts, o = {}) {
  add(`${kick(k)}
<div class="quiz-q">${q}</div>
<Quiz :opts='${JSON.stringify(opts)}' :answer="${o.answer ?? 0}" />`, { cls: "grad", notes: o.n });
}
function prompt(k, title, text, o = {}) {
  add(`${kick(k)}
${/claude/i.test(k) ? `<div class="tt"><img class="spark-ic" src="/img/claude-spark.png" alt="">${title}</div>` : ttl(title)}
<div class="pwrap"><div class="prompt">${text}</div><CopyBtn /></div>
${o.tips ? `<div class="grid" style="grid-template-columns:repeat(${o.tips.length},1fr);margin-top:22px">${o.tips.map(t => `<div class="card" v-click><div class="p" style="margin:0">${t}</div></div>`).join("")}</div>` : ""}`, { notes: o.n });
}
function demoScreen(title, note, n) {
  add(`${kick("Demo en vivo")}
${ttl(title)}
${ph(note, "wide")}`, { notes: n });
}
function flow(k, title, steps, o = {}) {
  const tpl = steps.map(() => "1fr").join(" auto ");
  add(`${kick(k)}
${ttl(title)}
<div class="flow" style="grid-template-columns:${tpl}">
${steps.map((s, i) => `<div class="card" v-click><div class="n">${s.big || i + 1}</div><div class="h">${s.h}</div><div class="p">${s.p || ""}</div></div>${i < steps.length - 1 ? '<div class="arr"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>' : ""}`).join("\n")}
</div>
${src(o.src)}`, { notes: o.n });
}
function tools(k, title, items, o = {}) {
  add(`${kick(k)}
${ttl(title)}
<div class="grid tools" ${cols(o.cols || 3)}>
${items.map(it => `<div class="card tool ${it.bad ? "bad" : ""}" v-click><div class="thead">${it.logo ? `<Logo n="${it.logo}" :size="36" />` : ""}<span class="tag ${it.t === "dev" ? "dev" : it.t === "warn" ? "warn" : ""}">${it.tag}</span></div><div class="h">${it.h}</div><div class="p">${it.p}</div></div>`).join("\n")}
</div>
${src(o.src)}`, { notes: o.n });
}
function annotated(k, title, img, boxes, items, o = {}) {
  add(`${kick(k)}
${ttl(title)}
<div class="annw">
<Annotated ${img ? `src="${img}"` : ""} :boxes='${JSON.stringify(boxes)}' ${o.label ? `label="${o.label}"` : ""} />
<ol class="alist">${items.map((it, i) => `<li class="${it.tone || "fix"}" v-click><b>${it.n ?? i + 1}</b><div><strong>${it.h}</strong><span>${it.p}</span></div></li>`).join("")}</ol>
</div>
${src(o.src)}`, { notes: o.n });
}
function week(t, ls, ent) {
  add(`${kick("Tu plan de 30 días")}
${ttl(t)}
<div class="week"><ul class="lst" style="font-size:22px">${ls.map(l => `<li v-click>${l}</li>`).join("")}</ul><div class="deliv"><small>ENTREGABLE</small><div>${ent}</div></div></div>`, { notes: "Una semana, un frente." });
}

// =====================================================================
// APERTURA
// =====================================================================
add(`<div class="two" style="grid-template-columns:1.35fr 1fr">
<div>
<div class="kick">PONENCIA · EMPLEO E IA 2026</div>
<div class="st" style="font-size:50px">La IA no te quitará el trabajo, <span class="hl">pero sí te lo puede conseguir</span></div>
<p style="font-size:18px;color:var(--soft);margin-top:22px;max-width:540px">Datos reales y un roadmap para pasar de estudiante a tu primer empleo, con IA.</p>
<div class="byline"><img src="/foto.jpg" alt="Cristhian Recalde"><div><b>Cristhian Recalde · @cry.code</b><span>AWS Community Builder · IA</span></div></div>
</div>
<ClaudeTiles img="/img/cover.jpg" />
</div>`, { notes: "Bienvenida (1 min). Pregunta: ¿cuántos aquí están buscando trabajo o lo buscarán en el próximo año?" });

add(`${kick("Antes de empezar")}
<div class="who">
<img src="/foto.jpg" alt="Cristhian Recalde frente al logo de AWS">
<div>
<p class="who-k">Cristhian Recalde · @cry.code</p>
<div class="aws-hero" v-click><Logo n="aws" :size="58" /><div><small>MI COMUNIDAD PRINCIPAL</small><b>AWS Community Builder</b><span>Área: Inteligencia Artificial</span></div></div>
<div class="grid who-grid">
${[
  ["20+", "apps publicadas · Full Stack Flutter"],
  ["Docente", "ITSI · maestrante en IA (UEES)"],
  ["IONOS HUB", "cofundador · software y automatización"],
  ["Cry Code", "contenido tech en español"],
].map(([b, l]) => `<div class="card" v-click><div class="bn">${b}</div><div class="h">${l}</div></div>`).join("")}
</div>
<p class="who-also" v-click>También: comunidad GDG Quito · Mención de honor TuApp 2023 (SwapMe) · YouTube Software & Development</p>
</div>
</div>`, { notes: "Presentación (1 min). Empieza por AWS Community Builder en el área de IA: es la credencial principal. Luego 20+ apps, docencia y maestría en IA, IONOS HUB y Cry Code. GDG Quito y TuApp solo como mención." });

add(`${kick("Pregunta a la sala")}
<div class="ask"><div class="st">Levanta la mano si crees que la IA te va a quitar el trabajo.</div></div>`, { notes: "Pregunta a mano alzada, sin contar. Solo mira la sala y comenta. Al final volvemos a preguntar (1 min)." });

add(`${kick("Pregunta a la sala")}
<div class="st wide" style="margin:20px 0 30px">¿Quién está buscando trabajo, o lo buscará este año?</div>
${ph("Ilustración: foto de sala o emoji gigante", "wide")}`, { notes: "Segunda mano: ¿quién busca trabajo o lo buscará pronto? (1 min)" });

add(`${kick("El recorrido")}
${ttl("Primero el contexto. Después, tu roadmap.")}
<div class="agenda2">
<div class="ctx"><small>PARTE 1 · EL CONTEXTO · 12 MIN</small>
<div class="card" v-click><div class="n">01</div><div class="h">El miedo vs los datos</div></div>
<div class="card" v-click><div class="n">02</div><div class="h">La verdad incómoda</div></div>
<div class="card" v-click><div class="n">03</div><div class="h">Las nuevas reglas</div></div>
</div>
<div class="card hi rmlist" v-click><small>PARTE 2 · TU ROADMAP · 30 MIN</small>
<ol><li>Habilidades</li><li>Aprende con IA</li><li>Tu perfil con Claude</li><li>Comunidad y visibilidad</li><li>Busca trabajo con IA</li><li>Entrevista</li></ol>
</div>
</div>`, { notes: "Agenda (1 min). Doce minutos de contexto con datos y treinta de roadmap práctico: de estudiante a tu primer empleo." });

// =====================================================================
// BLOQUE 1
// =====================================================================
section(1, "El miedo vs los datos", "¿La IA viene por tu trabajo? Veamos qué dicen los números.", 4);
split("El miedo vs los datos", "Cada revolución tecnológica dio miedo", ["Cajeros automáticos", "Excel", "Internet"], "Foto histórica: oficina antes de Excel / ATM", { n: "Contexto (1 min): el miedo no es nuevo. Cambia el trabajo, no desaparece." });
statpair("El miedo vs los datos", "El saldo neto es positivo", [
  { big: "+170 M", h: "empleos creados", c: "acc" }, { big: "−92 M", h: "desplazados", c: "warm" }, { big: "+78 M", h: "saldo neto a 2030", c: "good" },
], { src: "Foro Económico Mundial · Future of Jobs Report 2025", n: "WEF Future of Jobs 2025. Abrir rompiendo el miedo: el saldo es positivo (1 min)." });
stat("El miedo vs los datos", "39%", "de las habilidades clave van a cambiar", { src: "WEF Future of Jobs 2025", ph: "Ícono o imagen: cambio de habilidades", n: "No es 'desaparecer', es 'cambiar'." });
bars("El miedo vs los datos · Banco Mundial", "Empleos en riesgo de automatización por IA generativa", [
  { label: "Países de ingreso alto", val: "14,2%", pct: 14.2, color: "var(--warm)" }, { label: "Países en desarrollo (como Ecuador)", val: "4,5%", pct: 4.5 },
], { src: "Banco Mundial, World Development Report 2026", n: "3 veces más riesgo en países ricos. Ecuador tiene más que ganar que perder." });
stat("El miedo vs los datos · Latinoamérica", "26–38%", "de los empleos en la región están expuestos a IA generativa", { src: "OIT y Banco Mundial", ph: "Mapa de Latinoamérica", n: "Expuestos no es lo mismo que reemplazados." });
{
  const cells = Array.from({ length: 100 }, (_, i) => `<i class="${i < 5 ? "w" : i < 38 ? "e" : ""}" style="--i:${i}"></i>`).join("");
  add(`${kick("El miedo vs los datos · Latinoamérica")}
<div class="two"><div><Num v="2–5%" class="num" style="font-size:125px" /><div class="lab">en riesgo de automatización total</div></div>
<div class="wafw"><div class="waf">${cells}</div><div class="wleg"><span><i class="e"></i>Expuestos a IA generativa: 26–38 de cada 100</span><span><i class="w"></i>En riesgo de automatización total: 2–5 de cada 100</span></div></div></div>
${src("OIT y Banco Mundial · cada cuadro = 1 de cada 100 empleos (se muestra el límite superior)")}`, { notes: "Contraste con la diapositiva anterior: estar expuesto no es ser reemplazado." });
}
quiz("Adivina el dato · pregunta al público", "¿Cuánto más ganan, en promedio, los empleos que piden habilidades de IA?", ["A) 12% más", "B) 35% más", "C) 62% más"], { answer: 2, n: "Pedir votos levantando la mano. Dar 20 segundos. Luego haz clic en la opción que eligió la mayoría." });
stat("Respuesta: C", "+62%", "prima salarial promedio de los empleos que piden IA", { src: "PwC · Global AI Jobs Barometer 2026 (57% el año anterior)", ph: "Imagen: billete / gráfico ascendente", n: "El dato más fuerte de la charla. Saber IA paga." });
bars("PwC · AI Jobs Barometer 2026", "Los empleos que piden IA crecen mucho más rápido", [
  { label: "Empleos que piden habilidades de IA", val: "+69%", pct: 69 }, { label: "Mercado laboral en general", val: "+9%", pct: 9, color: "var(--muted)" },
], { src: "PwC · más de 1.000 millones de avisos en 27 países", n: "Crecimiento de demanda." });
statpair("PwC · mercado de dos vías", "La IA premia el criterio experto, no lo reemplaza", [
  { big: "2x", h: "de crecimiento en empleos que la IA 'profesionaliza' frente a los que 'democratiza'", cls: "hi" },
  { big: "+42%", h: "más crecimiento salarial en esos mismos empleos", cls: "hi" },
], { n: "La IA amplifica al que ya sabe. Por eso hay que aprender el oficio Y la herramienta." });
cards("LinkedIn · Skills on the Rise 2026", "Crecen en paralelo dos tipos de habilidades", [
  { h: "Técnicas de IA", p: "Prompting · RAG · LangChain", hi: true }, { h: "Humanas", p: "Liderazgo · comunicación con stakeholders", hi: true },
], { n: "Si eres de humanidades: sirve igual. No hace falta programar." });
stat("Microsoft · Work Trend Index 2026", "86%", "de usuarios de IA trata su resultado como punto de partida", { src: "Microsoft (vende herramientas de IA; dato direccionalmente correcto)", ph: "Imagen: persona revisando una respuesta de IA", n: "Mencionar el interés comercial si hay público crítico." });
statpair("Microsoft · habilidades que más ganan valor", "No es 'usar IA', es verificarla", [
  { big: "50%", h: "Control de calidad", cls: "hi" }, { big: "46%", h: "Pensamiento crítico", cls: "hi" },
], { n: "La habilidad no es usar IA, es verificarla." });
statement("Idea para llevarte · bloque 1", ["No es el fin del empleo.", { hl: "Es un cambio de reglas." }], { ph: "Imagen: tablero de juego / reglas nuevas", n: "Idea que se llevan. Repetirla." });

// =====================================================================
// BLOQUE 2
// =====================================================================
section(2, "La verdad incómoda", "Dónde sí hay riesgo, y por qué no es el fin del camino.", 4);
statement("La verdad incómoda", ["El primer peldaño de la escalera ", { hl: "sí se está rompiendo" }], { ph: "Imagen: escalera con el primer escalón roto", n: "Credibilidad: reconocer el riesgo real. (1 min)" });
stat("La verdad incómoda · Stanford", "−19%", "de empleo en jóvenes de 22 a 25 años en ocupaciones muy expuestas a IA", { warm: true, src: "Stanford Digital Economy Lab · 'Canaries in the Coal Mine' · revisión agosto 2026", ph: "Imagen: canario en la mina (metáfora)", n: "Comparado con dónde estaría sin la IA. Datos de nómina ADP, EE. UU. Decirlo en voz: son datos de EE. UU., descriptivos, no causales. Y la caída se concentra donde la IA automatiza, no donde aumenta el trabajo." });
statpair("La verdad incómoda · Stanford", "Nov 2022 → Jun 2026 · jóvenes de 22 a 25 años", [
  { big: "−11%", h: "ocupaciones más expuestas a IA", c: "warm" }, { big: "+10%", h: "ocupaciones menos expuestas", c: "good" },
], { n: "Mismo grupo etario, distinta exposición." });
stat("La verdad incómoda · Casos", "−20%", "desarrolladores de software de 22 a 25 años desde el pico de fines de 2022 (también atención al cliente)", { warm: true, src: "Stanford Digital Economy Lab", ph: "Imagen: pantalla con código", n: "Soy desarrollador: me toca de cerca. Ser honesto." });
statement("El matiz clave", ["La caída se concentra donde la IA ", { hl: "automatiza" }, ". Donde ", { hl: "aumenta" }, " el trabajo humano, no aparece."], { fs: 44, src: "Los mismos autores titulan su actualización: 'sin desplazamiento generalizado'.", n: "Los trabajadores con experiencia no muestran esa brecha." });
versus("La verdad incómoda", "El puesto junior cambió, no desapareció", { h: "El junior de antes", big: "Tareas repetitivas", p: "Aprendía con los años." }, { h: "El junior de ahora", big: "Criterio desde el día uno", p: "La IA te deja llegar con ese criterio antes." }, { n: "Frase clave del bloque." });
statpair("La verdad incómoda · PwC", "El otro lado de la moneda", [
  { big: "7x", h: "más probabilidad de pedir habilidades de nivel senior", c: "acc" }, { big: "+35%", h: "crecieron desde 2019", c: "good" }, { big: "−10%", h: "otros puestos de entrada", c: "warm" },
], { src: "PwC 2026 · puestos junior más expuestos a IA · datos de EE. UU.", n: "Puestos junior más expuestos a IA (datos EE. UU.)" });
cards("Limitación honesta", "Lo que estos datos NO dicen", [
  { h: "Son de EE. UU.", p: "No son datos de Ecuador." }, { h: "Son descriptivos", p: "Indicadores tempranos, no causales." }, { h: "Es una foto", p: "La tendencia puede cambiar." },
], { n: "Declarar límites da credibilidad." });
stat("Ecuador · empleo juvenil", "7,7%", "desempleo de jóvenes de 15 a 24 años (vs 3,1% nacional)", { src: "INEC · mayo 2026 (citado por El Diario)", warm: true, ph: "Foto: jóvenes en una feria de empleo", n: "El problema en Ecuador es el mercado, no la IA." });
statpair("Ecuador · mercado laboral", "Pocos empleos de calidad", [
  { big: "36,6%", h: "empleo adecuado nacional", c: "acc" }, { big: "52,8%", h: "informalidad", c: "warm" },
], { src: "INEC · mayo 2026 (citado por El Comercio)", n: "INEC mayo 2026." });
stat("Ecuador · jóvenes", "581.046", "jóvenes de 15 a 24 años no estudian ni trabajan (18,25%)", { src: "Microdatos ENEMDU procesados por Expreso · mayo 2026", warm: true, ph: "Imagen: joven con celular / sin rumbo", n: "Pausa. Dejar que el número pese." });
statpair("Ecuador · la oportunidad", "Talento en IA: hay más demanda que oferta", [
  { big: "7 de 10", h: "empresas no encuentran talento en IA", cls: "hi", src: "CITEC · Primicias" }, { big: "19,5%", h: "de la PEA ya adopta IA", cls: "hi", src: "Mentinno · El Diario · T1 2026" },
], { n: "La escasez es la oportunidad." });
split("Ecuador · oportunidad remota", "Misma hora que EE. UU. y usamos dólar", ["UTC-5: casi la misma hora que la costa este", "Dólar: sin fricción de pagos", "Tendencia, no cifra"], "Mapa: Ecuador ↔ EE. UU. (husos horarios)", { src: "Fuentes: blogs de agencias de contratación; úsalo como tendencia.", n: "No dar cifras: las fuentes son blogs." });
split("Historia local", "Francisco Arias, ingeniero en marketing", ["Se sintió obsoleto", "Fue escéptico", "Adoptó la IA para potenciar sus ideas"], "Foto / captura de la nota de Primicias", { left: true, src: "Primicias · ilustración de la charla, no es la foto de la nota", n: "Personalizar con una historia ecuatoriana. La imagen ilustra el arco, no reemplaza la nota." });
statement("Idea para llevarte · bloque 2", ["El puesto junior cambió,", { hl: "no desapareció." }], { ph: "Imagen: persona subiendo por una escalera nueva", n: "Cierre del bloque." });

// =====================================================================
// BLOQUE 3
// =====================================================================
section(3, "Las nuevas reglas de contratación", "La búsqueda de empleo en 2026 es IA contra IA.", 4);
statpair("Las nuevas reglas", "Avalancha de solicitudes", [
  { big: "48%", h: "dice que la IA aumentó el volumen de postulaciones por vacante" }, { big: "92%", h: "usa algún grado de IA en su proceso" },
], { src: "ZipRecruiter 2026 · más de 1.000 reclutadores (resumen HeroHunt)" });
flow("Las nuevas reglas", "IA contra IA: así llega tu solicitud a una persona", [
  { h: "Candidatos con IA", p: "Cientos de solicitudes en minutos" }, { h: "Filtro con IA", p: "Resume, filtra y agenda" }, { h: "Reclutador humano", p: "Revisa los pocos que pasan" }, { h: "Entrevista", p: "Cada vez más presencial" },
], { n: "Explicar el embudo. Lo escaso ahora es la señal de autenticidad." });
statement("Las nuevas reglas", ["La IA de las empresas hace ", { hl: "tareas administrativas" }, ". No decide."], { fs: 46, src: "Resume Genius 2026 · filtrar, redactar ofertas y agendar", n: "Matiz: la contratación sigue siendo humana." });
statpair("Las nuevas reglas", "Verificar se volvió el problema", [
  { big: "67%", h: "dice que las solicitudes con IA hacen el proceso más lento", cls: "bad" }, { big: "65%", h: "dice que las habilidades son más difíciles de verificar", cls: "bad" },
], { src: "Robert Half 2026 (citado por Peopable)" });
split("Las nuevas reglas · LinkedIn", "El reclutador ya tiene un agente de IA", ["LinkedIn Hiring Assistant (desde sep. 2025)", "Arma búsquedas y recomienda candidatos", "Entrevistas de filtro con IA (Hiring Pro)"], "Captura de LinkedIn Hiring Assistant", { src: "Noon · HeroHunt", n: "Implicación: tu perfil lo lee primero una IA." });
statement("Las nuevas reglas", ["Primero te lee una ", { hl: "máquina." }, " Después, te ve una ", { hl: "persona." }], { ph: "Imagen: robot leyendo un perfil", n: "Búsqueda semántica: entiende sinónimos y conceptos relacionados." });
stat("Las nuevas reglas · presencial", "72,4%", "de líderes de reclutamiento entrevista en persona para combatir fraude", { src: "Gartner (vía Computerworld) · Google, Cisco y McKinsey reinstalaron rondas presenciales", ph: "Foto: entrevista cara a cara", n: "Vuelven las entrevistas presenciales." });
cards("Dos preguntas de líderes", "Prepara tu respuesta", [
  { h: "Dan Shapero · COO de LinkedIn", p: "¿Cómo has usado la IA?", hi: true }, { h: "Julie Sweet · CEO de Accenture", p: "¿Qué aprendiste en los últimos seis meses?", hi: true },
], { src: "Fortune", n: "Interpelar al público en vivo: pedir que alguien responda." });
quiz("¿Mito o realidad? · vota", "\"El ATS rechaza tu CV automáticamente si el formato no le gusta.\"", ["MITO", "REALIDAD"], { answer: 0, n: "Votar levantando la mano. Haz clic en lo que votó la mayoría." });
add(`${kick("Respuesta")}
<div class="two" style="grid-template-columns:1fr 1fr">
<div><div class="num warm" style="font-size:110px">MITO</div><div class="lab">El ATS guarda tu CV y permite buscarlo por palabras clave. Lo que lo hunde es la avalancha de competidores.</div></div>
<div class="grid">
<div class="card hi"><Num v="99,7%" class="bn" /><div class="p">de reclutadores filtra por palabras clave</div></div>
<div class="card hi"><Num v="10,6x" class="bn" /><div class="p">más invitaciones con el título exacto del puesto</div></div>
</div></div>
${src("Jobscan · encuesta a más de 380 reclutadores (vía ResumeVera, JobCannon)")}`, { notes: "Jobscan: el ATS guarda y permite buscar por palabras clave, no rechaza. Lo que hunde el CV es la avalancha." });
statement("Idea para llevarte · bloque 3", ["Si la IA te ayuda a enviar 100 solicitudes, ", { hl: "también ayuda a otros 1.000." }, " La ventaja ya no es el volumen."], { fs: 42, n: "La ventaja es la señal, no el volumen." });

// =====================================================================
// PUENTE · ROADMAP
// =====================================================================
add(`${kick("Parte 2 · Tu roadmap")}
${ttl("De estudiante a tu primer empleo, en 6 etapas")}
<div class="one"><Roadmap /></div>`, { notes: "Puente entre el contexto y la práctica. Recorre las 6 etapas en 30 segundos; cada una tiene su portada." });
// =====================================================================
// ETAPA 1 · HABILIDADES
// =====================================================================
stage(1, "Habilidades", "Qué aprender: técnicas y blandas.", 3);
statement("Habilidades para 2026", ["La IA cambia el ", { hl: "cómo" }, " se trabaja.", "Tus habilidades deciden el ", { hl: "qué" }, " te encargan."], { fs: 46, n: "Recordar el 39% de habilidades que cambian (WEF)." });
tools("Habilidades técnicas", "Lo que crece más rápido", [
  { tag: "Para todos", h: "Usar IA con criterio", p: "Pedir bien, revisar siempre, citar la fuente" },
  { tag: "Para todos", h: "Alfabetización tecnológica", p: "Hojas de cálculo, datos básicos, automatizar tareas" },
  { tag: "Para todos", h: "Inglés funcional", p: "Leer documentación y escribir un correo claro" },
  { tag: "Tecnología", t: "dev", h: "IA y datos", p: "APIs de modelos, RAG, agentes, evaluación" },
  { tag: "Tecnología", t: "dev", h: "Redes y ciberseguridad", p: "Entre las de mayor crecimiento según el WEF" },
  { tag: "Tecnología", t: "dev", h: "Automatización", p: "Flujos sin código y scripts pequeños" },
], { src: "WEF Future of Jobs 2025 · LinkedIn Skills on the Rise 2026", n: "La fila de arriba es para cualquier carrera. La de abajo, para perfiles técnicos." });
cards("Habilidades blandas", "Las que la IA no puede hacer por ti", [
  { n: 1, h: "Pensamiento crítico", p: "Detectar cuándo la IA se equivoca" }, { n: 2, h: "Comunicación escrita", p: "Clave en equipos remotos y asíncronos" }, { n: 3, h: "Adaptabilidad", p: "Cambiar de herramienta sin drama" },
  { n: 4, h: "Curiosidad", p: "Aprender algo nuevo cada mes" }, { n: 5, h: "Colaboración y liderazgo", p: "Coordinar personas, no solo prompts" }, { n: 6, h: "Criterio ético", p: "No inventar, no exagerar, citar" },
], { cols: 3, src: "WEF Future of Jobs 2025 · LinkedIn Skills on the Rise 2026 · Microsoft Work Trend Index 2026", n: "Enlazar con Microsoft: control de calidad 50%, pensamiento crítico 46%." });
statement("Recuerda la pregunta de la CEO de Accenture", ["¿Qué aprendiste en los ", { hl: "últimos seis meses?" }, " Ten una respuesta con un proyecto."], { fs: 46, n: "Callback a Julie Sweet del bloque 3." });
// =====================================================================
// ETAPA 2 · APRENDE CON IA
// =====================================================================
stage(2, "Aprende con IA", "Que la IA sea tu tutor, no tu atajo.", 3);
flow("Aprender con IA · el método", "Que la IA sea tu tutor, no tu atajo", [
  { h: "Diagnóstico", p: "Que te haga 5 preguntas de nivel" }, { h: "Plan", p: "4 semanas que terminan en un proyecto" },
  { h: "Práctica", p: "Ejercicios cortos con corrección" }, { h: "Explícalo tú", p: "Enséñale el tema; que busque tus errores" },
], { n: "Explicar con tus palabras es la prueba de que aprendiste." });
prompt("Aprender con IA · prompt 1", "Un plan que termina en algo que mostrar", "\"Quiero aprender [tema] en 4 semanas, 5 horas por semana. Primero hazme 5 preguntas para saber mi nivel. Luego arma un plan semanal que termine en un proyecto que pueda poner en mi portafolio.\"", { tips: ["El proyecto final va a Destacados", "Pide recursos gratuitos", "Revisa el plan cada domingo"], n: "Conecta con la semana 3 del plan de 30 días." });
prompt("Aprender con IA · prompt 2", "Modo tutor", "\"Explícame [concepto] con un ejemplo de mi trabajo. Después hazme 3 preguntas. No me des la respuesta hasta que lo intente, y corrígeme.\"", { tips: ["'No me des la respuesta' es la clave", "Pide el ejemplo de tu área", "Guarda las preguntas que fallaste"], n: "Mostrar en vivo si hay tiempo." });
versus("Aprender con IA", "La diferencia está en quién piensa", { h: "Así no", big: "Que la IA haga la tarea", p: "Aprendes a copiar." }, { h: "Así sí", big: "Que la IA te haga preguntas", p: "Aprendes a pensar." }, { n: "Cierra la parte de aprendizaje." });
tools("Dónde aprender gratis", "Sin pagar un curso", [
  { tag: "Curso", h: "Anthropic Academy", p: "Cursos gratuitos de fluidez en IA" },
  { tag: "Comunidad", h: "GDG, AWS User Groups, meetups", p: "Aprendes y conoces a quien te recomienda" },
  { tag: "Fuente", h: "Documentación oficial", p: "La fuente, no el resumen de un resumen" },
  { tag: "Práctica", h: "Un problema real", p: "El mejor curso es resolver algo de tu ciudad" },
], { cols: 2, n: "Mencionar las comunidades de las que formas parte." });
statement("Idea para llevarte · bloque 5", ["Aprende con la IA,", { hl: "no a través de ella." }], { fs: 52, n: "Cierre del bloque 5." });

// =====================================================================
// ETAPA 3 · TU PERFIL
// =====================================================================
stage(3, "Tu perfil con Claude", "CV y LinkedIn que una IA encuentra y una persona cree.", 10);
bars("CV en la era de la IA", "Personalizar rinde el doble", [
  { label: "CV adaptado a la oferta", val: "5,75%", pct: 5.75 }, { label: "CV genérico", val: "2,68%", pct: 2.68, color: "var(--warm)" },
], { src: "Análisis de 1,39 millones de postulaciones (The Interview Guys) · % de conversión a entrevista", n: "Personalizar duplica las probabilidades." });
bars("CV en la era de la IA · Huntr T1 2026", "Menos solicitudes, mejor adaptadas", [
  { label: "Entre 11 y 20 solicitudes", val: "9,25%", pct: 9.25 }, { label: "100 o más solicitudes", val: "2,58%", pct: 2.58, color: "var(--warm)" },
], { src: "Huntr T1 2026 (vía The Interview Guys) · % de conversión a entrevista", n: "Menos, pero mejor." });
statement("CV en la era de la IA", ["La IA ", { hl: "adapta y pule." }, " Los hechos los pones ", { hl: "tú." }], { ph: "Imagen: persona escribiendo su CV junto a un asistente de IA", n: "La regla de oro del CV." });
add(`${kick("Contraejemplo (1 min)")}
${ttl("¿Lo contratarías?")}
<div class="mocks">
<div class="bubble bad" v-click><small>MENSAJE GENÉRICO</small><p>Estimado reclutador, soy un profesional altamente motivado, proactivo y orientado a resultados, con pasión por los desafíos y excelente trabajo en equipo. Quedo atento a sus comentarios.</p></div>
<div class="bubble good" v-click><small>LO QUE SÍ SE LEE</small><p>Aumenté 40% el alcance de Instagram en 6 meses con un calendario de contenido. Busco el equipo donde pueda repetir ese número.</p></div>
</div>
${src("Ejemplo de la charla · Resume Now: 62% de empleadores rechaza CV con IA no personalizados.")}`, { notes: "Leer el genérico en voz alta: suele provocar risas. El segundo es el mismo ejemplo del bloque. No presentarlo como un caso real con nombre." });
statpair("Lo genérico se castiga", "Reclutadores y gerentes lo detectan", [
  { big: "62%", h: "de empleadores rechaza CV hechos con IA sin personalizar", cls: "bad" }, { big: "49%", h: "de gerentes descarta los que identifica como generados por IA", cls: "bad" },
], { src: "Resume Now · Resume.io (vía KraftCV)", n: "Fuentes secundarias: citarlas como tal." });
cards("CV en la era de la IA", "Siete reglas para tu CV", [
  { n: 1, h: "Un CV base + una versión por oferta" }, { n: 2, h: "Título exacto del puesto" }, { n: 3, h: "Cada logro: verbo, acción, número" },
  { n: 4, h: "Deja que la IA te entreviste" }, { n: 5, h: "Formato simple, una columna" }, { n: 6, h: "Léelo en voz alta" }, { n: 7, h: "Nunca exageres" },
], { cols: 4, n: "Repasar rápido; los prompts vienen en las demos." });
versus("CV en la era de la IA", "De responsabilidad a logro", { h: "Antes", big: "\"Encargado de redes sociales.\"", fs: 28 }, { h: "Después", big: "\"Aumenté 40% el alcance de Instagram en 6 meses con un calendario de contenido.\"", fs: 24 }, { n: "Usar el ejemplo real que vas a mostrar en la demo." });
prompt("Demo 1 · CV contra la oferta", "Pega una oferta real y tu CV base", "\"Compara mi CV con esta oferta. Dime qué falta, qué sobra y qué palabras clave debo usar. No inventes nada.\"", { tips: ["Usa una oferta real de un portal ecuatoriano", "Muestra el antes y después de un logro", "Si falla el internet: capturas de respaldo"], n: "3–4 minutos." });
add(`${kick("Demo 1 · si falla el internet")}
${ttl("La IA compara. Tú pones el número.")}
<div class="mocks">
<div class="bubble bad"><small>OFERTA · ANTES</small><p>Analista de marketing digital.<br>En el CV: “Encargado de redes sociales.”</p></div>
<div class="bubble good"><small>RESPUESTA DE LA IA</small><p>Falta el resultado. No lo invento. Pregúntale al candidato: ¿cuánto creció, en cuánto tiempo, con qué?</p></div>
</div>`, { notes: "Respaldo de la demo 1. Mismo ejemplo de Instagram: +40% en 6 meses." });
prompt("Demo 2 · La IA te entrevista", "Para encontrar tus logros medibles", "\"Hazme preguntas, una a la vez, sobre mi último trabajo hasta encontrar 3 logros medibles. No inventes nada.\"", { tips: ["Un voluntario del público responde", "Los logros salen de su experiencia real", "Nunca dejes que invente"], n: "3–4 minutos con voluntario." });
add(`${kick("Demo 2 · si falla el internet")}
${ttl("Una pregunta a la vez")}
<div class="chat">
<div class="bubble ai" v-click><small>IA</small><p>¿Qué cambió gracias a tu trabajo, en un número?</p></div>
<div class="bubble me" v-click><small>TÚ</small><p>El alcance de Instagram. No sé el porcentaje exacto.</p></div>
<div class="bubble ai" v-click><small>IA</small><p>No lo invento. ¿Tienes el dato de seguidores o de alcance, y en cuántos meses?</p></div>
<div class="bubble me goodline" v-click><small>LOGRO</small><p>+40% de alcance en 6 meses. Ahora sí se puede escribir.</p></div>
</div>`, { notes: "Respaldo de la demo 2. El número sale de la persona, no del modelo." });
statement("LinkedIn en 2026", ["Tu perfil es un documento que ", { hl: "primero lee una máquina." }], { ph: "Imagen: perfil de LinkedIn con lupa", n: "Recordar el agente reclutador y la búsqueda semántica." });
add(`${kick("LinkedIn en 2026 · Titular")}
<div class="two"><div class="side"><div class="tt">Rol + especialidad + prueba de valor</div><ul class="lst"><li v-click>Es lo primero que aparece en la búsqueda</li><li v-click>Sin prueba, el titular es un adjetivo</li></ul></div>
<div class="pcard"><div class="av"></div><div><div class="nm">Cristhian Recalde</div><div class="hd">Desarrollador Flutter | Apps móviles con IA | 20+ apps publicadas</div><div class="meta">Ibarra, Ecuador · @cry.code</div></div></div></div>`, { notes: "El titular es lo más importante. Este es el ejemplo real del speaker." });
add(`${kick("Demo 3 · la sala vota")}
${ttl("Mismo perfil. Tres titulares. ¿Cuál abrirías?")}
<div class="votes">
<div class="opt" v-click><b>A</b><span>Desarrollador</span></div>
<div class="opt" v-click><b>B</b><span>Apasionado por la tecnología y el trabajo en equipo</span></div>
<div class="opt" v-click><b>C</b><span>Desarrollador Flutter | Apps móviles con IA | 20+ apps publicadas</span></div>
</div>
<p class="reveal" v-click>C gana: tiene rol, especialidad y una prueba.</p>`, { notes: "3–4 minutos. Votación levantando la mano. El clic final revela por qué C gana. No lo adelantes." });
annotated("Mi perfil real · lo que ya funciona", "Un perfil que se entiende en 5 segundos", "/img/linkedin-perfil.webp", [{"x": 5, "y": 3, "w": 92, "h": 39, "n": 1, "tone": "good"}, {"x": 7, "y": 23, "w": 19.5, "h": 32, "n": 2, "tone": "good"}, {"x": 7, "y": 62, "w": 39.5, "h": 6.2, "n": 3, "tone": "good"}, {"x": 65.5, "y": 61, "w": 23.5, "h": 17.5, "n": 4, "tone": "good"}], [
  { tone: "good", h: "Banner con propuesta", p: "Dice qué haces y dónde encontrarte" },
  { tone: "good", h: "Foto con rostro claro", p: "Cercana, bien iluminada, sin filtros" },
  { tone: "good", h: "Nombre con marca", p: "(cry.code) hace que te encuentren" },
  { tone: "good", h: "Empresa y universidad", p: "Contexto inmediato para el reclutador" },
], { n: "Mostrar el perfil propio es más creíble que un ejemplo. Recorre los recuadros verdes en orden." });
annotated("Mi perfil real · lo que mejoraría", "Cuatro arreglos de cinco minutos", "/img/linkedin-perfil.webp", [{"x": 7, "y": 68.6, "w": 56, "h": 8.8, "n": 1}, {"x": 7, "y": 77.4, "w": 41.5, "h": 4.8, "n": 2}, {"x": 7, "y": 82.6, "w": 33.5, "h": 4.8, "n": 3}, {"x": 7, "y": 89, "w": 18.2, "h": 7.4, "n": 4}], [
  { h: "Titular", p: "“Comunity” → “Community”. Abre con el rol que buscas y suma una prueba: 20+ apps" },
  { h: "Ubicación", p: "Ibarra está bien. Suma “remoto” como tipo de trabajo en Open to Work" },
  { h: "Visibilidad", p: "1.362 seguidores: publica una vez por semana lo que construyes" },
  { h: "“Tengo interés en…”", p: "Activa Open to Work visible solo para reclutadores" },
], { n: "Autocrítica en vivo: da credibilidad. Después, arma el titular corregido en la siguiente diapositiva." });
add(`${kick("LinkedIn · pruébalo en vivo")}
${ttl("Arma tu titular para que una IA te encuentre")}
<HeadlineBuilder />`, { notes: "Arma el titular de un voluntario en vivo, o corrige el tuyo. Límite de LinkedIn: 220 caracteres." });
cards("LinkedIn en 2026", "Tu perfil en seis partes", [
  { n: 1, h: "Foto y banner", p: "Muchas más visitas y mensajes" }, { n: 2, h: "Habilidades", p: "5 o más: hasta 17x más visitas" }, { n: 3, h: "Acerca de", p: "Lo mejor en las primeras líneas" },
  { n: 4, h: "Destacados", p: "Tu portafolio dentro de LinkedIn" }, { n: 5, h: "Experiencia", p: "Con logros medibles" }, { n: 6, h: "Open to Work", p: "Visible solo para reclutadores" },
], { cols: 3, n: "Foto: las cifras (14x–21x) son inconsistentes entre fuentes; presentar como principio, sin número." });
statement("Claude para tu perfil", ["Claude no escribe tu perfil por ti.", { hl: "Te entrevista, te compara y te corrige." }], { fs: 42, side: `<ClaudeTiles small />`, n: "Transición a la parte práctica con Claude. La idea: editor exigente, no ghostwriter." });
flow("Claude para tu perfil · el flujo", "Cuatro pasos, una tarde", [
  { h: "Crea un Proyecto", p: "Sube tu CV, 10 ofertas y la exportación de LinkedIn" }, { h: "Diagnóstico", p: "Que lea tu perfil como un reclutador" },
  { h: "Reescribe por partes", p: "Titular, Acerca de, experiencia" }, { h: "Verifica", p: "Léelo en voz alta. Corrige cada dato" },
], { src: "Exportación: LinkedIn › Configuración › Privacidad de datos › Obtener una copia de tus datos", n: "Proyectos de Claude: el contexto (CV, ofertas, perfil) queda guardado y no lo repites en cada chat." });
prompt("Claude · prompt 1 · diagnóstico", "Que te lea un reclutador en 30 segundos", "\"Lee mi perfil como un reclutador de [rol] con 30 segundos. ¿Qué entiendes que hago? ¿Qué te falta para llamarme? ¿Qué sobra?\"", { tips: ["Pega el perfil o súbelo en PDF", "Pide la respuesta en viñetas", "Repite después de cada cambio"], n: "Primero diagnóstico, después reescritura." });
prompt("Claude · prompt 2 · titular", "Cinco titulares para elegir", "\"Con mi CV, propón 5 titulares de LinkedIn de máximo 220 caracteres: rol + especialidad + una prueba. Sin adjetivos como 'apasionado' o 'proactivo'.\"", { tips: ["220 caracteres es el límite de LinkedIn", "Elige uno y ajústalo a tu voz", "La prueba es un número o un logro"], n: "Conecta con la votación de titulares de la demo 3." });
prompt("Claude · prompt 3 · Acerca de", "Las dos primeras líneas mandan", "\"Escribe mi 'Acerca de' en primera persona, 3 párrafos cortos. Las 2 primeras líneas dicen qué hago y para quién. Usa solo hechos de mi CV. Si falta un dato, pregúntame antes de escribir.\"", { tips: ["Solo se ven 2–3 líneas antes de 'ver más'", "'Pregúntame' evita que invente", "Termina con qué buscas"], n: "La frase clave es 'si falta un dato, pregúntame'." });
prompt("Claude · prompt 4 · palabras clave", "Habla el idioma de las ofertas", "\"Te paso 10 ofertas del rol que busco. Lista las 15 habilidades que más se repiten y marca cuáles faltan en mi perfil y cuáles tengo pero no menciono.\"", { tips: ["Así te encuentra la búsqueda semántica", "Solo agrega lo que puedes demostrar", "Las mismas palabras van en tu CV"], n: "Es el entregable de la semana 1 del plan." });
add(`${kick("Claude para tu perfil · así se ve")}
${ttl("Bien usado, Claude pregunta antes de escribir")}
<div class="chat">
<div class="bubble me" v-click><small>TÚ</small><p>Mejora mi Acerca de.</p></div>
<div class="bubble ai" v-click><small>CLAUDE</small><p>Antes de escribir: ¿qué problema resuelves y para quién? ¿Tienes un resultado con número de tu último proyecto?</p></div>
<div class="bubble me" v-click><small>TÚ</small><p>Apps móviles para pymes. La última bajó a la mitad los pedidos por WhatsApp.</p></div>
<div class="bubble goodline" v-click><small>PRIMERA LÍNEA</small><p>Hago apps móviles para pymes. La última redujo a la mitad los pedidos manuales por WhatsApp.</p></div>
</div>`, { notes: "Ejemplo ilustrativo, no un caso real. Mostrar que el dato sale de la persona." });
cards("LinkedIn · tips que casi nadie usa", "Seis ajustes de cinco minutos", [
  { n: 1, h: "URL personalizada", p: "linkedin.com/in/tunombre, no la de números" }, { n: 2, h: "Perfil en inglés", p: "Agrega un segundo idioma al perfil" }, { n: 3, h: "Open to Work con 'remoto'", p: "Elige también el tipo de lugar de trabajo" },
  { n: 4, h: "Alertas de empleo", p: "Por rol + remoto, llegan cada día" }, { n: 5, h: "Recomendaciones concretas", p: "Pide 2–3 que mencionen un logro" }, { n: 6, h: "Comenta antes de publicar", p: "Un buen comentario también es visibilidad" },
], { cols: 3, n: "Todos se hacen hoy, desde el celular." });
annotated("Tu perfil · Acerca de", "Espacio para tu captura: Acerca de", "", [], [
  { tone: "tip", h: "Primeras dos líneas", p: "Qué haces y para quién" },
  { tone: "tip", h: "Un logro con número", p: "El que más te enorgullece" },
  { tone: "tip", h: "Qué buscas ahora", p: "Rol, modalidad, remoto" },
  { tone: "tip", h: "Palabras de tus ofertas", p: "Las que te encuentra la IA" },
], { label: "Pega tu sección Acerca de y marca las 4 zonas", n: "Reemplaza el espacio con tu captura: gen.js › annotated('Tu perfil · Acerca de'…), pon la imagen en public/img y las coordenadas de los recuadros en %." });
annotated("Tu perfil · Destacados y experiencia", "Espacio para tu captura: Destacados", "", [], [
  { tone: "tip", h: "Destacados", p: "3 proyectos con enlace y resultado" },
  { tone: "tip", h: "Experiencia", p: "Verbo + acción + número" },
  { tone: "tip", h: "Habilidades", p: "Las 5 que más piden tus ofertas" },
  { tone: "tip", h: "Recomendaciones", p: "Que mencionen un logro concreto" },
], { label: "Pega tus Destacados o tu Experiencia", n: "Mismo proceso que la diapositiva anterior." });
add(`${kick("LinkedIn en 2026 · dónde postular")}
<div class="two"><div><Num v="6,87%" class="num" style="font-size:120px" /><div class="lab">conversión a entrevista en la web de la empresa</div></div>
<div class="doors">
<div class="door bad" v-click><div class="bn" style="color:var(--warm)">1,95%</div><div class="h">Solicitud sencilla</div><div class="p">LinkedIn te descubre. El botón fácil te entierra.</div></div>
<div class="door hi" v-click><div class="bn">6,87%</div><div class="h">Web de la empresa</div><div class="p">Menos gente. Más señal.</div></div>
</div></div>
${src("Huntr · 1,24 millones de postulaciones (vía Lumyhired)")}`, { notes: "Usa LinkedIn para descubrir y conectar, no solo para 'Solicitud sencilla'." });
// =====================================================================
// ETAPA 4 · COMUNIDAD Y VISIBILIDAD
// =====================================================================
stage(4, "Comunidad y visibilidad", "Que te encuentren, no solo buscar.", 5);
statement("Comunidad", ["En Ecuador hay comunidades gratuitas que abren ", { hl: "puertas que el aula no abre." }], { fs: 42, side: `<div class="logo-cloud">${["aws", "gdg", "ieee", "github", "googlecloud", "anthropic"].map((n, i) => `<span style="--i:${i}"><Logo n="${n}" :size="78" /></span>`).join("")}</div>`, n: "Aquí es donde más cambió mi camino: comunidades como AWS y GDG me dieron contactos, charlas y oportunidades." });
tools("Comunidades en Ecuador", "Súmate a una este mes", [
  { logo: "aws", tag: "Nube e IA", h: "AWS User Groups", p: "Meetups y el camino a AWS Community Builders" },
  { logo: "gdg", tag: "Google", h: "GDG Quito", p: "Meetups, DevFest y study jams" },
  { logo: "ieee", tag: "Universidad", h: "Ramas estudiantiles IEEE", p: "Congresos, concursos y red internacional" },
  { logo: "aws", tag: "Campus", h: "AWS Cloud Clubs", p: "Clubes de nube liderados por estudiantes" },
  { logo: "gdg", tag: "Campus", h: "GDG on Campus", p: "El club de Google dentro de tu universidad" },
  { logo: "plus", tag: "Tú", t: "dev", h: "Tu propia comunidad", p: "¿No hay una en tu ciudad? Ábrela" },
], { n: "Nombrar las que conoces de primera mano. AWS primero: es tu comunidad principal." });
tools("Beneficios que casi nadie aprovecha", "Gratis, por ser estudiante o por ser parte", [
  { logo: "github", tag: "Estudiantes", h: "GitHub Student Developer Pack", p: "Herramientas pro gratis con tu correo universitario" },
  { logo: "aws", tag: "Aprende", h: "AWS Educate y Skill Builder", p: "Cursos y laboratorios de nube e IA" },
  { logo: "googlecloud", tag: "Aprende", h: "Google Cloud Skills Boost", p: "Rutas e insignias, a veces con campañas de los GDG" },
  { logo: "anthropic", tag: "Aprende", h: "Anthropic Academy", p: "Cursos gratuitos de fluidez en IA" },
  { logo: "aws", tag: "Programa", h: "AWS Community Builders", p: "Expertos, créditos y vouchers de certificación" },
  { logo: "ieee", tag: "Membresía", h: "IEEE estudiantil", p: "Descuentos en congresos y publicaciones" },
], { n: "Verifica las condiciones vigentes de cada programa antes de la charla. Cuenta qué te dio a ti ser Community Builder." });
cards("Lo que la comunidad te da", "Y que ningún curso te da", [
  { n: 1, h: "Referidos", p: "Quien te conoce te recomienda: 11x más contratación" }, { n: 2, h: "Mentores", p: "Gente que ya hizo el camino" }, { n: 3, h: "Tu primera charla", p: "Hablar en público también se practica" },
  { n: 4, h: "Experiencia real", p: "Organizar un evento es gestionar un proyecto" }, { n: 5, h: "Visibilidad", p: "Fotos, posts y contactos para tu LinkedIn" }, { n: 6, h: "Avisos de vacantes", p: "Muchas se comparten primero en la comunidad" },
], { cols: 3, src: "Referidos: Gem, más de 165 millones de postulaciones", n: "El dato de 11x es de Gem." });
flow("Crea tu comunidad", "Así empieza, aunque sean tres", [
  { h: "Junta 3 personas", p: "Con el mismo interés" }, { h: "Elige un tema", p: "IA, nube, móvil o datos" }, { h: "Primer meetup", p: "10 personas y un aula prestada" },
  { h: "Pide respaldo", p: "GDG on Campus, AWS Cloud Clubs o tu rama IEEE" }, { h: "Publícalo", p: "Fotos y aprendizajes en LinkedIn" },
], { n: "Crear una comunidad es la forma más rápida de ganar liderazgo y marca personal. Cuenta tu experiencia." });
stat("Marca personal y networking", "11x", "más tasa de contratación para candidatos referidos frente a postular en frío", { src: "Gem · más de 165 millones de postulaciones (vía Lumyhired)", ph: "Imagen: dos personas dándose la mano", n: "El canal más eficiente, pero no el único." });
cards("El contrapeso honesto", "Postular sí funciona. Lo que falla es postular en masa.", [
  { big: "43–52%", h: "de contrataciones vienen de postulaciones directas" }, { big: "17–18%", h: "de contrataciones vienen de referidos" },
], { src: "Ashby · 250.000 contrataciones", n: "No decir '85% se consigue por networking': no tiene fuente." });
bars("Comportamiento de los buscadores", "Dónde se va el tiempo de búsqueda", [
  { label: "Postulando en línea", val: "85%", pct: 85, color: "var(--warm)" }, { label: "Haciendo networking", val: "15%", pct: 15 },
], { src: "Encuesta de Huntr", n: "Ahí está la oportunidad." });
cards("Marca personal práctica", "No hace falta ser influencer", [
  { n: 1, h: "Portafolio público", p: "GitHub, Behance o una página con 2–3 proyectos" }, { n: 2, h: "Aprender en público", p: "Una publicación por semana" }, { n: 3, h: "Proyecto con IA", p: "Uno pequeño vale más que un certificado más" },
  { n: 4, h: "Comunidades", p: "Meetups, hackathons, eventos" }, { n: 5, h: "Mensajes con motivo", p: "Menciona algo específico de la persona" }, { n: 6, h: "Coherencia", p: "CV, LinkedIn y portafolio: la misma historia" },
], { cols: 3, n: "Cada fila es una acción concreta." });
split("Marca personal", "Un proyecto pequeño con IA que resuelva un problema local", ["Problema", "Solución", "Resultado"], "Captura de un portafolio o repo", { n: "Estructura de cada proyecto." });
add(`${kick("Networking")}
${ttl("Un motivo concreto vale más que 100 genéricos")}
<div class="mocks">
<div class="bubble bad" v-click><small>GENÉRICO</small><p>Hola, vi tu perfil y me encantaría conectar. Soy un desarrollador apasionado en busca de nuevas oportunidades. Quedo atento.</p></div>
<div class="bubble good" v-click><small>CON MOTIVO</small><p>Hola Ana. Tu nota sobre contratar juniors en Quito me dejó pensando. Publiqué una app de rutas para el transporte de Ibarra. ¿Te la resumo en tres líneas?</p></div>
</div>`, { notes: "Se nota cuando lo escribió una IA. El segundo menciona algo concreto de la otra persona. Ejemplo, no un mensaje enviado." });
// =====================================================================
// ETAPA 5 · BUSCA CON IA
// =====================================================================
stage(5, "Busca trabajo con IA", "Herramientas reales, trabajo remoto y lo que hay que evitar.", 4);
statement("Buscar trabajo con IA", ["Las mejores herramientas ", { hl: "no disparan solicitudes." }, " Evalúan el encaje y adaptan."], { fs: 46, n: "Refuerza la tesis del bloque 3: la ventaja no es el volumen." });
flow("Buscar con IA · el flujo", "De la oferta a la postulación", [
  { h: "Perfil", p: "CV base en un Proyecto de Claude" }, { h: "Búsqueda", p: "Plugin o portales, con filtros reales" }, { h: "Encaje", p: "¿Vale la pena postular?" },
  { h: "Adaptación", p: "CV y carta por oferta, con tus palabras" }, { h: "Seguimiento", p: "Tracker y recordatorios" },
], { n: "Cada paso tiene una herramienta; la decisión de postular siempre es tuya." });
tools("Plugins de Claude · para todos", "Se instalan con un clic", [
  { logo: "develop21", tag: "Busca ofertas", h: "Develop21 Jobs", p: "Indeed, LinkedIn y webs de empresas. Evalúa encaje y adapta CV y carta" },
  { logo: "rankedin", tag: "Analiza perfil", h: "rankedin", p: "Con tu exportación de LinkedIn: puntaje, brechas y resistencia a la IA" },
  { logo: "foundrole", tag: "Busca ofertas", h: "FoundRole Jobs", p: "Salario de mercado, ofertas fantasma y cómo lee tu CV el ATS" },
  { logo: "mokaru", tag: "Busca y adapta", h: "Mokaru", p: "Busca, adapta tu CV a cada rol y sigue tus postulaciones" },
  { logo: "careervillage", tag: "Orientación", h: "Career Coaching", p: "CareerVillage: orientación de carrera con fuentes citadas" },
  { tag: "Ojo", t: "warn", h: "Son de terceros", p: "Categoría comunidad: revisa qué datos compartes", bad: true },
], { src: "Directorio de plugins de Claude · septiembre 2026", n: "Para público no técnico: estos se instalan desde Claude sin programar." });
tools("Skills de la comunidad · para desarrolladores", "Gratis en GitHub, con Claude Code", [
  { logo: "github", tag: "La más usada", t: "dev", h: "career-ops", p: "~69 k estrellas, MIT, README en español. Revisa Greenhouse, Ashby y Lever, evalúa ofertas y genera tu CV en PDF" },
  { logo: "github", tag: "Perfil", t: "dev", h: "linkedin-profile-optimizer", p: "Titular, Acerca de y palabras clave. Parte de un repo con 20+ skills de carrera" },
  { logo: "github", tag: "Estrategia", t: "dev", h: "job-search-strategist", p: "Plan de búsqueda por rol y mercado" },
  { logo: "github", tag: "CV", t: "dev", h: "resume-tailoring-skill", p: "Adapta el CV a cada oferta" },
], { cols: 2, src: "github.com/santifer/career-ops · claudemarketplaces.com · requieren Claude Code y Node", n: "career-ops la hizo un desarrollador español. Nunca postula por ti: tú decides." });
statement("La advertencia", ["No existe un conector oficial de LinkedIn, y LinkedIn ", { hl: "prohíbe bots y automatizar acciones.", warm: true }], { fs: 44, src: "Condiciones de uso de LinkedIn. Los conectores de empleo que existen son de Indeed, ZipRecruiter y Dice.", n: "Desconfía de lo que prometa 'postular automático en LinkedIn': te pueden restringir la cuenta." });
prompt("Buscar con IA · prompt", "Evalúa el encaje antes de postular", "\"Te paso esta oferta y mi CV. Del 1 al 10, ¿qué tan bien encajo? Dame 3 razones a favor, 3 brechas y si vale la pena postular. Sé honesto.\"", { tips: ["Menos de 6: no postules, aprende la brecha", "Las brechas van a tu plan de aprendizaje", "Las razones a favor van a tu carta"], n: "Es la versión manual de lo que hacen los plugins." });
statement("Trabajo remoto", ["Muchas ofertas 'remotas' son ", { hl: "solo para EE. UU.", warm: true }, " Lee la ubicación antes de postular."], { fs: 50, n: "Remoto no siempre es 'desde cualquier país'. Buscar 'LATAM', 'Americas' o 'worldwide'." });
tools("Trabajo remoto · dónde buscar", "Portales que sí aceptan Latinoamérica", [
  { logo: "linkedin", tag: "Filtro", h: "LinkedIn", p: "Filtro 'Remoto' + ubicación 'Latinoamérica'" },
  { logo: "getonbrd", tag: "Tech LatAm", h: "Get on Board", p: "Empleos de tecnología en la región" },
  { logo: "torre", tag: "LatAm", h: "Torre", p: "Empleos remotos para Latinoamérica" },
  { logo: "wellfound", tag: "Startups", h: "Wellfound", p: "Startups con equipos distribuidos" },
  { logo: "wwr", tag: "Global", h: "We Work Remotely · Remote OK", p: "Revisa si dice 'worldwide'" },
  { logo: "workana", tag: "Freelance", h: "Workana", p: "Proyectos para empezar y armar portafolio" },
], { n: "Palabras clave útiles en inglés: remote LATAM, remote Americas, worldwide." });
cards("Trabajo remoto · lo que te piden", "Más allá de lo técnico", [
  { n: 1, h: "Inglés", p: "Escrito primero; hablado en la entrevista" }, { n: 2, h: "Comunicación asíncrona", p: "Escribir claro para quien lee mañana" }, { n: 3, h: "Autonomía", p: "Entregas, no horas conectado" },
  { n: 4, h: "Zona horaria", p: "UTC-5: tu ventaja con EE. UU." }, { n: 5, h: "Portafolio público", p: "Nadie te ve en la oficina" }, { n: 6, h: "Herramientas", p: "Slack, Notion, GitHub, Loom" },
], { cols: 3, n: "Conecta con la diapositiva de Ecuador: hora y dólar." });
cards("Trabajo remoto · cómo te contratan", "Tres formas, tres realidades", [
  { h: "Empleo directo", p: "La empresa te contrata. Poco común desde el extranjero." },
  { h: "Vía EOR", p: "Una empresa intermedia (p. ej. Deel o Remote) te contrata por ellos." },
  { h: "Contratista", p: "Facturas tú. Revisa tus obligaciones con el SRI." },
], { n: "No es asesoría legal ni tributaria; es para saber qué preguntar." });
cards("Trabajo remoto · señales de estafa", "Si ves esto, sal", [
  { h: "Te piden pagar", p: "Por capacitación, equipo o 'registro'", bad: true }, { h: "Entrevista solo por chat", p: "Sin video y sin nombre real", bad: true }, { h: "Piden cédula o banco", p: "Antes de una oferta por escrito", bad: true },
  { h: "Sueldo irreal", p: "Muy alto para el rol y sin experiencia", bad: true }, { h: "Correo gratuito", p: "Gmail o Hotmail en vez del dominio de la empresa", bad: true }, { h: "Urgencia", p: "'Responde hoy o pierdes el puesto'", bad: true },
], { cols: 3, n: "Las estafas de empleo remoto son comunes. Mejor prevenir." });
prompt("Trabajo remoto · prompt", "Revisa la oferta antes de ilusionarte", "\"Revisa esta oferta remota: ¿acepta candidatos desde Ecuador? ¿En qué zona horaria trabaja el equipo? ¿Es empleo, EOR o contrato? ¿Ves señales de estafa?\"", { tips: ["Pega la oferta completa", "Busca la empresa aparte", "Nunca pagues para postular"], n: "Cierra el bloque práctico de remoto." });
statement("Idea para llevarte · bloque 6", ["La IA busca y compara.", { hl: "Tú decides dónde postular." }], { fs: 52, n: "Cierre del bloque 6." });

// =====================================================================
// ETAPA 6 · ENTREVISTA
// =====================================================================
stage(6, "Entrevista", "Prepárate con IA. Responde tú.", 2);
add(`${kick("Entrevistas · juego")}
${ttl("¿Legítimo o trampa?")}
<LegitGame />`, { notes: "Lee cada frase, que la sala grite 'legítimo' o 'trampa', y haz clic." });
cards("Entrevistas en 2026", "Prepararte con IA: sí. Que responda por ti: no.", [
  { h: "Sí: úsala para prepararte", p: "Preguntas probables · simulación por voz · historias STAR", hi: true }, { h: "No: que piense por ti en vivo", p: "Es fraude y cada vez más empresas lo detectan", bad: true },
], { n: "Línea ética clara." });
cards("Entrevistas en 2026 · el contexto", "El fraude en entrevistas", [
  { big: "6%", h: "de buscadores admitió fraude", p: "Gartner (unos 3.000 encuestados)" }, { big: "1 de 4", h: "perfiles falsos en 2028", p: "Gartner: es una proyección, no una medición" },
], { n: "Citar como proyección." });
flow("Entrevistas en 2026", "Cómo prepararte con IA", [
  { h: "Pega la oferta", p: "Pide las 10 preguntas más probables" }, { h: "Simula por voz", p: "Que te pregunte y repregunte" }, { h: "Historias STAR", p: "5 o 6 reales, practicadas" },
  { h: "Investiga la empresa", p: "Productos, noticias, problemas" }, { h: "Ensaya sobre IA", p: "¿Cómo la usas? Con ejemplo" },
], { n: "Sexto paso, de viva voz: prepara preguntas inteligentes para el entrevistador." });
add(`${kick("Demo 4 · si falla el internet")}
${ttl("La IA te entrevista. Tú respondes en STAR.")}
<div class="star">
<div class="card" v-click><div class="n">S</div><div class="h">Situación</div><div class="p">El alcance de la cuenta estaba plano.</div></div>
<div class="card" v-click><div class="n">T</div><div class="h">Tarea</div><div class="p">Ordenar qué se publicaba y cuándo.</div></div>
<div class="card" v-click><div class="n">A</div><div class="h">Acción</div><div class="p">Armé un calendario y medí cada pieza.</div></div>
<div class="card hi" v-click><div class="n">R</div><div class="h">Resultado</div><div class="p">+40% de alcance en 6 meses.</div></div>
</div>
<p class="reveal">Si falta la R, la historia no cierra.</p>`, { notes: "3–4 minutos en vivo con voz. Esta diapositiva es el respaldo, con el mismo ejemplo de la charla." });
statement("Entrevistas en 2026", ["Si la IA piensa por ti en la entrevista, ", { hl: "el día uno en el trabajo se va a notar." }], { fs: 44, n: "Frase para la charla." });
statement("Idea para llevarte · bloque 4", ["La IA adapta y pule;", { hl: "los hechos los pones tú." }], { ph: "Imagen: manos humanas y robóticas escribiendo juntas", n: "Cierre del bloque de demos." });

// =====================================================================
// PLAN DE 30 DÍAS
// =====================================================================
add(`${kick("Tu plan · checklist")}
${ttl("30 días, 10 horas por semana")}
<PlanChecklist />`, { notes: "Marca en vivo lo que ya hiciste. El avance se guarda en el navegador." });
week("Semana 1 · Base", ["Elige 1 o 2 roles objetivo", "Reúne 10 ofertas reales", "Con IA, extrae las habilidades que más se repiten"], "Lista de habilidades y palabras clave");
week("Semana 2 · CV y LinkedIn", ["CV base con logros medibles", "Titular, Acerca de, habilidades y Destacados alineados"], "CV base + perfil actualizado");
week("Semana 3 · Prueba pública", ["Un proyecto pequeño con IA", "Primera publicación contando qué aprendiste"], "1 proyecto + 1 publicación");
week("Semana 4 · Red y postulaciones", ["10 mensajes personalizados", "Asiste a una comunidad o evento", "5–10 postulaciones adaptadas en la web de la empresa", "2 simulaciones de entrevista"], "Postulaciones enviadas + práctica");
statement("Regla de oro", ["Menos postulaciones,", { hl: "mejor adaptadas," }, "con alguien que te recomiende."], { fs: 48, n: "Regla de oro para cerrar." });

// =====================================================================
// CIERRE
// =====================================================================
add(`${kick("Volvamos a la pregunta del inicio")}
<div class="ask"><div class="st">¿Quién sigue creyendo que la IA le va a quitar el trabajo?</div></div>`, { notes: "Volver a levantar la mano. ¿Cambió algo? Cerrar con la prima de 62% de PwC (2 min)." });
stat("Cierre", "+62%", "prima salarial para quien sabe usar IA con criterio", { src: "PwC · AI Jobs Barometer 2026", ph: "Imagen: persona con laptop sonriendo", n: "Volver al título." });
add(`<div class="quote">"La IA no te consigue el trabajo sola. Tú, con IA, sí."</div>
<p style="text-align:center;margin-top:30px;font-size:18px">— Cristhian Recalde</p>`, { cls: "grad", notes: "Frase final. Pausa. Pasar a preguntas." });
cards("Preguntas difíciles · Q&A", "Respuestas preparadas", [
  { h: "¿Y si en Ecuador las empresas ni usan IA?", p: "Solo 19,5% de la PEA la adopta, pero 7 de 10 empresas no encuentran talento. La escasez es la oportunidad." },
  { h: "¿No es trampa usar IA para el CV?", p: "Las empresas también la usan para filtrarte. La línea ética: no inventar ni exagerar." },
  { h: "Soy de humanidades, ¿me sirve?", p: "Las habilidades humanas crecen al ritmo de las técnicas. Aprende a usar las herramientas en tu campo; no hace falta programar." },
], { n: "No mostrar hasta que pregunten. Sirve de respaldo." });
add(`${kick("Gracias")}
<div class="two"><div><div class="st" style="font-size:52px">¿Preguntas? Hablemos.</div><div class="hl" style="font-size:32px;font-weight:700;margin-top:22px">@cry.code</div><p style="color:var(--soft);margin-top:18px;max-width:460px">Escanea y escríbeme. Por ahí te paso los prompts, el plan de 30 días y las fuentes.</p><p style="color:var(--muted);margin-top:14px;font-size:15px">linkedin.com/in/isnotcristhianr</p></div><div class="qrbox"><img src="/img/qr.png" alt="Código QR al LinkedIn de Cristhian Recalde"></div></div>`, { notes: "El QR abre el LinkedIn. Los prompts se envían por ese contacto: todavía no hay una página pública con el paquete." });
add(`${kick("Anexo")}
${ttl("Fuentes")}
<div class="two" style="align-items:start;grid-template-columns:1fr 1fr">
<ul class="lst" style="font-size:13px;margin:0">${["Foro Económico Mundial — Future of Jobs Report 2025", "PwC — 2026 Global AI Jobs Barometer", "Stanford Digital Economy Lab — Canaries in the Coal Mine (ago 2026)", "Banco Mundial — World Development Report 2026", "OIT y Banco Mundial — IA generativa en América Latina", "LinkedIn — Skills on the Rise 2026", "Microsoft — Work Trend Index 2026", "Resume Genius — AI Impact on Hiring 2026", "Computerworld — entrevistas presenciales"].map(l => `<li>${l}</li>`).join("")}</ul>
<div><div class="hl" style="font-size:13px;font-weight:700">Prensa ecuatoriana y fuentes secundarias</div><ul class="lst" style="font-size:13px;margin-top:12px">${["INEC — ENEMDU mayo 2026 (vía El Comercio, El Diario, Expreso)", "Primicias — PwC e IA en Ecuador", "The Interview Guys · HeroHunt · Noon", "Peopable · KraftCV · JobCannon · ResumeVera", "Lumyhired · StaffingHub · Truffle · Fortune"].map(l => `<li>${l}</li>`).join("")}</ul></div>
</div>`, { notes: "Fuentes primarias primero; las secundarias, verificar antes de citar." });


add(`${kick("Anexo")}
${ttl("Imágenes")}
<p style="font-size:22px;max-width:760px;line-height:1.4">Ilustraciones originales de esta charla, hechas para el relato. La foto de la presentación es de Cristhian Recalde.</p>
<p style="color:var(--soft);margin-top:18px;max-width:760px">El código QR abre linkedin.com/in/isnotcristhianr.</p>`, { notes: "Ya no se usan las fotos de stock. No hace falta atribución CC." });
// Diapositivas ocultas para la versión de 45 min (hide: true). Borra una línea para volver a mostrarla.
const HIDE = [
  "IDEA PARA LLEVARTE · BLOQUE 1",
  "IDEA PARA LLEVARTE · BLOQUE 2",
  "IDEA PARA LLEVARTE · BLOQUE 3",
  "IDEA PARA LLEVARTE · BLOQUE 5",
  "IDEA PARA LLEVARTE · BLOQUE 6",
  "DEMO 1 · SI FALLA EL INTERNET",
  "De responsabilidad a logro",
  "De la oferta a la postulación",
  "Cómo prepararte con IA",
  "v=\"11x\"",
  "¿Quién está buscando trabajo, o lo buscará este año?",
  "Cajeros automáticos",
  "v=\"39%\"",
  "v=\"26–38%\"",
  "v=\"2–5%\"",
  "v=\"+9%\"",
  "v=\"2x\"",
  "Técnicas de IA",
  "v=\"86%\"",
  "v=\"50%\"",
  "v=\"−11%\"",
  "v=\"−20%\"",
  "EL MATIZ CLAVE",
  "v=\"+35%\"",
  "Son de EE. UU.",
  "v=\"7,7%\"",
  "v=\"36,6%\"",
  "v=\"581.046\"",
  "Tendencia, no cifra",
  "Fue escéptico",
  "v=\"48%\"",
  ". No decide.",
  "v=\"67%\"",
  "Noon · HeroHunt",
  "v=\"72,4%\"",
  "Prepara tu respuesta",
  "v=\"9,25%\"",
  "v=\"49%\"",
  "Nunca exageres",
  "Nunca dejes que invente",
  "Una pregunta a la vez",
  "primero lee una máquina.",
  "LINKEDIN EN 2026 · TITULAR",
  "Foto y banner",
  "CLAUDE · PROMPT 2 · TITULAR",
  "Habla el idioma de las ofertas",
  "PRIMERA LÍNEA",
  "v=\"6,87%\"",
  "Sí: úsala para prepararte",
  "v=\"1 de 4\"",
  "DEMO 4 · SI FALLA EL INTERNET",
  "La IA adapta y pule;",
  "te encargan.",
  "Ten una respuesta con un proyecto.",
  "APRENDER CON IA · PROMPT 2",
  "Aprendes a copiar.",
  "Un problema real",
  "BUSCAR TRABAJO CON IA",
  "BUSCAR CON IA · PROMPT",
  "Zona horaria",
  "Empleo directo",
  "TRABAJO REMOTO · PROMPT",
  "v=\"43–52%\"",
  "v=\"85%\"",
  "Un proyecto pequeño con IA que resuelva un problema local",
  "Un motivo concreto vale más que 100 genéricos",
  "Semana 1 · Base",
  "Semana 2 · CV y LinkedIn",
  "Semana 3 · Prueba pública",
  "10 mensajes personalizados",
  "prima salarial para quien sabe usar IA con criterio",
  "Respuestas preparadas",
  "El código QR abre linkedin.com/in/isnotcristhianr.",
];
// =====================================================================
const head = `theme: default
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
  persist: false`;
const md = out.map((s, i) => {
  const lay = s.cls === "grad" ? "animgrad" : "anim";
  const hid = HIDE.some(h => s.body.includes(h));
  const fmb = `layout: ${lay}${s.tr ? `\ntransition: ${s.tr}` : ""}${hid ? "\nhide: true" : ""}`;
  const fm = i === 0 ? `---\n${head}\n${fmb}\n---\n` : `\n---\n${fmb}\n---\n`;
  return `${fm}\n${s.body}\n${s.notes ? `\n<!--\n${s.notes}\n-->\n` : ""}`;
}).join("");
fs.writeFileSync("slides.md", md);
console.log("slides.md:", out.length, "diapositivas");
