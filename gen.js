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
  return typeof p === "string" ? sp + t : `${sp}<span class="hl">${t}</span>`;
}).join("");
const cols = n => `style="grid-template-columns:repeat(${n},1fr)"`;

function section(n, title, sub, mins) {
  add(`<div class="mins">~${mins} min</div>
<div class="kick">BLOQUE</div>
<div class="sec-n">${String(n).padStart(2, "0")}</div>
<div class="sec-t">${title}</div>
<div class="sec-s">${sub}</div>`, { cls: "grad", notes: `Bloque ${n}. Tiempo estimado: ${mins} min.` });
}
function statement(k, parts, o = {}) {
  const t = rich(parts);
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
<div class="opts" ${cols(opts.length)}>${opts.map(t => `<div class="opt">${t}</div>`).join("")}</div>`, { cls: "grad", notes: o.n });
}
function prompt(k, title, text, o = {}) {
  add(`${kick(k)}
${ttl(title)}
<div class="prompt">${text}</div>
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
function week(t, ls, ent) {
  add(`${kick("Tu plan de 30 días")}
${ttl(t)}
<div class="week"><ul class="lst" style="font-size:22px">${ls.map(l => `<li v-click>${l}</li>`).join("")}</ul><div class="deliv"><small>ENTREGABLE</small><div>${ent}</div></div></div>`, { notes: "Una semana, un frente." });
}

// =====================================================================
// APERTURA
// =====================================================================
add(`<div class="two" style="grid-template-columns:1.4fr 1fr">
<div>
<div class="kick">PONENCIA · EMPLEO E IA 2026</div>
<div class="st" style="font-size:50px">La IA no te quitará el trabajo, <span class="hl">pero sí te lo puede conseguir</span></div>
<p style="font-size:17px;color:var(--soft);margin-top:26px;max-width:560px">Datos reales, nuevas reglas de contratación y cómo usar la IA para conseguir empleo.</p>
<p style="font-size:16px;font-weight:700;margin-top:30px">Cristhian Recalde · @cry.code</p>
</div>
${ph("Imagen de portada / collage tech")}
</div>`, { notes: "Bienvenida (1 min). Pregunta: ¿cuántos aquí están buscando trabajo o lo buscarán en el próximo año?" });

add(`${kick("Antes de empezar")}
${ttl("¿Quién les habla?")}
<div class="who">
<img src="/foto.jpg" alt="Cristhian Recalde">
<div>
<p class="who-k">Cristhian Recalde · @cry.code</p>
<p class="who-line">Desarrollador de software web y móvil, también IsnotCristhian. Creo contenido para crecer en esta industria y para reducir la brecha digital en Ecuador.</p>
<div class="grid" style="grid-template-columns:1fr 1fr;gap:12px;margin-top:16px">
${[
  ["2023", "Mención de honor, TuApp · startup SwapMe"],
  ["Quito", "comunidad de desarrolladores de Google"],
  ["Video", "YouTube · Software & Development"],
  ["20+", "apps publicadas · AWS Community Builder"],
].map(([b, l]) => `<div class="card" v-click style="display:flex;align-items:center;gap:14px;padding:14px 16px"><div class="bn" style="margin:0;min-width:78px;font-size:26px">${b}</div><div class="h" style="font-weight:500;font-size:15px">${l}</div></div>`).join("")}
</div>
</div>
</div>`, { notes: "Presentación (1 min). Bio del portafolio: IsnotCristhian, desarrollador web/móvil, contenido para crecer y reducir la brecha en Ecuador. Mención de honor TuApp 2023 con SwapMe. Comunidad de desarrolladores de Google Quito. YouTube Software & Development. Cerrar con 20+ apps y AWS Community Builder." });

add(`${kick("Pregunta a la sala")}
<div class="two"><div><div class="st">Levanta la mano si crees que la IA te va a quitar el trabajo.</div><p style="color:var(--muted);margin-top:26px">Cuenta las manos. Al final volvemos a preguntar.</p></div>${ph("Público levantando la mano")}</div>`, { notes: "Cuenta las manos. Al final de la charla volvemos a preguntar (2 min)." });

add(`${kick("Pregunta a la sala")}
<div class="st wide" style="margin:20px 0 30px">¿Quién está buscando trabajo, o lo buscará este año?</div>
${ph("Ilustración: foto de sala o emoji gigante", "wide")}`, { notes: "Segunda mano: ¿quién busca trabajo o lo buscará pronto? (1 min)" });

cards("El recorrido", "Del miedo al plan de acción", [
  { n: "01", h: "El miedo vs los datos" }, { n: "02", h: "La verdad incómoda" }, { n: "03", h: "Las nuevas reglas" }, { n: "04", h: "La IA como aliada" }, { n: "05", h: "Marca personal y plan" },
], { n: "Agenda (1 min). Un bloque = una idea que se llevan." });

// =====================================================================
// BLOQUE 1
// =====================================================================
section(1, "El miedo vs los datos", "¿La IA viene por tu trabajo? Veamos qué dicen los números.", 9);
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
quiz("Adivina el dato · pregunta al público", "¿Cuánto más ganan, en promedio, los empleos que piden habilidades de IA?", ["A) 12% más", "B) 35% más", "C) 62% más"], { n: "Pedir votos levantando la mano. Dar 20 segundos." });
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
section(2, "La verdad incómoda", "Dónde sí hay riesgo, y por qué no es el fin del camino.", 11);
statement("La verdad incómoda", ["El primer peldaño de la escalera ", { hl: "sí se está rompiendo" }], { ph: "Imagen: escalera con el primer escalón roto", n: "Credibilidad: reconocer el riesgo real. (1 min)" });
stat("La verdad incómoda · Stanford", "−19%", "de empleo en jóvenes de 22 a 25 años en ocupaciones muy expuestas a IA", { warm: true, src: "Stanford Digital Economy Lab · 'Canaries in the Coal Mine' · revisión agosto 2026", ph: "Imagen: canario en la mina (metáfora)", n: "Comparado con dónde estaría sin la IA. Datos de nómina ADP, EE. UU." });
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
section(3, "Las nuevas reglas de contratación", "La búsqueda de empleo en 2026 es IA contra IA.", 8);
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
quiz("¿Mito o realidad? · vota", "\"El ATS rechaza tu CV automáticamente si el formato no le gusta.\"", ["MITO", "REALIDAD"], { n: "Votar levantando la mano." });
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
// BLOQUE 4
// =====================================================================
section(4, "La IA como tu aliada", "CV, LinkedIn y entrevistas. En vivo, sin ediciones.", 16);
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
cards("LinkedIn en 2026", "Tu perfil en seis partes", [
  { n: 1, h: "Foto y banner", p: "Muchas más visitas y mensajes" }, { n: 2, h: "Habilidades", p: "5 o más: hasta 17x más visitas" }, { n: 3, h: "Acerca de", p: "Lo mejor en las primeras líneas" },
  { n: 4, h: "Destacados", p: "Tu portafolio dentro de LinkedIn" }, { n: 5, h: "Experiencia", p: "Con logros medibles" }, { n: 6, h: "Open to Work", p: "Visible solo para reclutadores" },
], { cols: 3, n: "Foto: las cifras (14x–21x) son inconsistentes entre fuentes; presentar como principio, sin número." });
add(`${kick("LinkedIn en 2026 · dónde postular")}
<div class="two"><div><Num v="6,87%" class="num" style="font-size:120px" /><div class="lab">conversión a entrevista en la web de la empresa</div></div>
<div class="doors">
<div class="door bad" v-click><div class="bn" style="color:var(--warm)">1,95%</div><div class="h">Solicitud sencilla</div><div class="p">LinkedIn te descubre. El botón fácil te entierra.</div></div>
<div class="door hi" v-click><div class="bn">6,87%</div><div class="h">Web de la empresa</div><div class="p">Menos gente. Más señal.</div></div>
</div></div>
${src("Huntr · 1,24 millones de postulaciones (vía Lumyhired)")}`, { notes: "Usa LinkedIn para descubrir y conectar, no solo para 'Solicitud sencilla'." });
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
// BLOQUE 5
// =====================================================================
section(5, "Marca personal y plan de 30 días", "Que te encuentren, no solo buscar.", 9);
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
cards("Tu plan", "30 días · 10 horas por semana", [
  { n: "Sem 1", h: "Base" }, { n: "Sem 2", h: "CV y LinkedIn" }, { n: "Sem 3", h: "Prueba pública" }, { n: "Sem 4", h: "Red y postulaciones" },
], { n: "Ver las cuatro semanas una por una." });
week("Semana 1 · Base", ["Elige 1 o 2 roles objetivo", "Reúne 10 ofertas reales", "Con IA, extrae las habilidades que más se repiten"], "Lista de habilidades y palabras clave");
week("Semana 2 · CV y LinkedIn", ["CV base con logros medibles", "Titular, Acerca de, habilidades y Destacados alineados"], "CV base + perfil actualizado");
week("Semana 3 · Prueba pública", ["Un proyecto pequeño con IA", "Primera publicación contando qué aprendiste"], "1 proyecto + 1 publicación");
week("Semana 4 · Red y postulaciones", ["10 mensajes personalizados", "Asiste a una comunidad o evento", "5–10 postulaciones adaptadas en la web de la empresa", "2 simulaciones de entrevista"], "Postulaciones enviadas + práctica");
statement("Regla de oro", ["Menos postulaciones,", { hl: "mejor adaptadas," }, "con alguien que te recomiende."], { fs: 48, n: "Regla de oro para cerrar." });

// =====================================================================
// CIERRE
// =====================================================================
add(`${kick("Volvamos a la pregunta del inicio")}
<div class="one"><div class="st wide">¿Quién sigue creyendo que la IA le va a quitar el trabajo?</div><p style="color:var(--muted);font-size:20px;margin-top:30px">Levanta la mano otra vez.</p></div>`, { notes: "Volver a levantar la mano. ¿Cambió algo? Cerrar con la prima de 62% de PwC (2 min)." });
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
  const fmb = `layout: ${lay}${s.tr ? `\ntransition: ${s.tr}` : ""}`;
  const fm = i === 0 ? `---\n${head}\n${fmb}\n---\n` : `\n---\n${fmb}\n---\n`;
  return `${fm}\n${s.body}\n${s.notes ? `\n<!--\n${s.notes}\n-->\n` : ""}`;
}).join("");
fs.writeFileSync("slides.md", md);
console.log("slides.md:", out.length, "diapositivas");
