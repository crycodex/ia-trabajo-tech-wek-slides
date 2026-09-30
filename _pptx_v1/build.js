const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
pres.title = "La IA no te quitará el trabajo, pero sí te lo puede conseguir";
pres.author = "Cristhian Recalde";

const C = { bg: "151D25", surf: "1B252F", card: "222D39", line: "2B3946", dash: "3E5266", fg: "FFFFFF", soft: "C4CCD4", muted: "8B98A5", acc: "41B3FF", accInk: "0B2336", accTint: "1D3A52", warm: "E07B53", warmTint: "3A2A24", good: "2ED47A", ink: "16283A" };
const F = "Arial";
const W = 13.33, H = 7.5, M = 0.7;

const T = (s, text, o = {}) => s.addText(text, Object.assign({ fontFace: F, isTextBox: true, margin: 0, valign: "top", color: C.fg }, o));
const rect = (s, x, y, w, h, fill, o = {}) => s.addShape(pres.shapes.ROUNDED_RECTANGLE, Object.assign({ x, y, w, h, fill: { color: fill }, line: { color: fill, width: 0 }, rectRadius: 0.15 }, o));

function base(kicker, title, notes) {
  const s = pres.addSlide();
  s.background = { color: C.bg };
  if (kicker) T(s, kicker.toUpperCase(), { x: M, y: 0.5, w: 11.5, h: 0.3, fontSize: 12, bold: true, color: C.acc, charSpacing: 4 });
  if (title) T(s, title, { x: M, y: 0.9, w: 11.9, h: 1.4, fontSize: 36, bold: true });
  s.slideNumber = { x: W - 1.0, y: H - 0.45, w: 0.5, h: 0.25, fontFace: F, fontSize: 10, color: C.muted, align: "right" };
  T(s, "@cry.code", { x: M, y: H - 0.45, w: 3, h: 0.25, fontSize: 10, color: C.muted });
  if (notes) s.addNotes(notes);
  return s;
}
// Espacio en blanco para imagen (se reemplaza después)
function ph(s, x, y, w, h, label, dark = true) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.18, fill: { color: dark ? C.surf : "FFFFFF", transparency: dark ? 0 : 82 }, line: { color: dark ? C.dash : "FFFFFF", width: 1.5, dashType: "dash" } });
  T(s, [{ text: "ESPACIO PARA IMAGEN", options: { fontSize: 10, bold: true, color: C.muted, charSpacing: 3, breakLine: true } }, { text: label, options: { fontSize: 14, color: C.soft } }], { x: x + 0.3, y, w: w - 0.6, h, align: "center", valign: "middle" });
}
function section(n, title, sub, mins) {
  const s = pres.addSlide();
  s.background = { path: "assets/grad.png" };
  T(s, "BLOQUE", { x: M, y: 1.3, w: 4, h: 0.3, fontSize: 14, bold: true, charSpacing: 6 });
  T(s, String(n).padStart(2, "0"), { x: M, y: 1.7, w: 4, h: 1.6, fontSize: 110, bold: true });
  T(s, title, { x: M, y: 3.6, w: 11.5, h: 1.6, fontSize: 48, bold: true });
  T(s, sub, { x: M, y: 5.4, w: 10, h: 0.8, fontSize: 20, color: "EAF4FF" });
  T(s, `~${mins} min`, { x: W - 2.5, y: 0.6, w: 1.8, h: 0.4, fontSize: 14, bold: true, align: "right" });
  s.addNotes(`Bloque ${n}. Tiempo estimado: ${mins} min.`);
  return s;
}
// Frase grande (idea para llevarse)
function statement(kicker, parts, opt = {}) {
  const s = base(kicker, null, opt.n);
  const rich = parts.map((p, i) => {
    const t = typeof p === "string" ? p : p.hl;
    const prev = i > 0 ? (typeof parts[i - 1] === "string" ? parts[i - 1] : parts[i - 1].hl) : "";
    const txt = (i > 0 && !/\s$/.test(prev) && !/^\s/.test(t) ? " " : "") + t;
    return { text: txt, options: { color: typeof p === "string" ? C.fg : (p.warm ? C.warm : C.acc) } };
  });
  if (opt.ph) {
    T(s, rich, { x: M, y: 1.4, w: 6.6, h: 4.8, fontSize: opt.fs || 44, bold: true, valign: "middle" });
    ph(s, 7.9, 1.1, 4.75, 5.3, opt.ph);
  } else T(s, rich, { x: 1.2, y: 1.4, w: W - 2.4, h: 4.8, fontSize: opt.fs || 54, bold: true, valign: "middle" });
  if (opt.src) T(s, opt.src, { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
  return s;
}
// Número grande
function stat(kicker, big, label, o = {}) {
  const s = base(kicker, null, o.n);
  const len = big.length, fs = len <= 3 ? 170 : len <= 5 ? 140 : len <= 7 ? 110 : len <= 10 ? 74 : 56;
  const wide = !o.ph;
  T(s, big, { x: M, y: 1.4, w: wide ? 11.9 : 7.2, h: 2.8, fontSize: fs, bold: true, color: o.warm ? C.warm : C.acc, valign: "middle" });
  T(s, label, { x: M, y: 4.4, w: wide ? 10.5 : 6.7, h: 1.6, fontSize: 26, bold: true });
  if (o.ph) ph(s, 8.3, 1.1, 4.35, 5.3, o.ph);
  if (o.src) T(s, o.src, { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
  return s;
}
// Barras horizontales
function bars(kicker, title, rows, o = {}) {
  const s = base(kicker, title, o.n);
  const max = Math.max(...rows.map(r => r.pct)), trackW = 8.2, y0 = 2.7, gap = 1.35;
  rows.forEach((r, i) => {
    const y = y0 + i * gap;
    T(s, r.label, { x: M, y, w: 11, h: 0.35, fontSize: 16, color: C.soft });
    const bw = Math.max(0.15, trackW * r.pct / max);
    rect(s, M, y + 0.45, bw, 0.6, r.color || C.acc, { rectRadius: 0.06 });
    T(s, r.val, { x: M + bw + 0.25, y: y + 0.45, w: 3.5, h: 0.6, fontSize: 32, bold: true, color: r.color || C.acc, valign: "middle" });
  });
  if (o.src) T(s, o.src, { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
  return s;
}
// Tarjetas
function cards(kicker, title, items, o = {}) {
  const s = base(kicker, title, o.n);
  const n = items.length, cols = o.cols || n, rows = Math.ceil(n / cols);
  const gap = 0.3, cw = (W - 2 * M - gap * (cols - 1)) / cols, top = o.top || 2.5, ch = o.h || (rows === 1 ? 3.6 : (3.9 - gap * (rows - 1)) / rows);
  items.forEach((it, i) => {
    const x = M + (i % cols) * (cw + gap), y = top + Math.floor(i / cols) * (ch + gap);
    rect(s, x, y, cw, ch, it.hi ? C.accTint : it.bad ? C.warmTint : C.card, it.hi ? { line: { color: C.acc, width: 1.5 } } : {});
    let yy = y + 0.3;
    if (it.n !== undefined) { T(s, String(it.n), { x: x + 0.3, y: yy, w: cw - 0.6, h: 0.5, fontSize: 26, bold: true, color: C.acc }); yy += 0.6; }
    if (it.big) { T(s, it.big, { x: x + 0.3, y: yy, w: cw - 0.6, h: 0.9, fontSize: 44, bold: true, color: it.bad ? C.warm : C.acc }); yy += 1.0; }
    T(s, it.h, { x: x + 0.3, y: yy, w: cw - 0.6, h: 0.9, fontSize: o.hfs || 20, bold: true });
    if (it.p) T(s, it.p, { x: x + 0.3, y: yy + (o.pdy || 0.85), w: cw - 0.6, h: ch - (yy - y) - (o.pdy || 0.85) - 0.2, fontSize: 15, color: C.soft });
  });
  if (o.src) T(s, o.src, { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
  return s;
}
// Imagen + texto corto
function split(kicker, title, lines, phLabel, o = {}) {
  const s = base(kicker, null, o.n);
  const imgLeft = o.left;
  const tx = imgLeft ? 6.3 : M, ix = imgLeft ? M : 7.5;
  T(s, title, { x: tx, y: 1.3, w: 5.7, h: 2.2, fontSize: 34, bold: true });
  if (lines && lines.length) T(s, lines.map((l, i) => ({ text: l, options: { bullet: { indent: 18 }, breakLine: i < lines.length - 1, paraSpaceAfter: 10 } })), { x: tx, y: 3.6, w: 5.7, h: 2.8, fontSize: 18, color: C.soft });
  ph(s, ix, 1.1, 5.1, 5.3, phLabel);
  if (o.src) T(s, o.src, { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
  return s;
}
// Antes / después
function versus(kicker, title, a, b, o = {}) {
  const s = base(kicker, title, o.n);
  const cw = (W - 2 * M - 0.4) / 2;
  [[a, M, o.aBad === false ? false : true], [b, M + cw + 0.4, false]].forEach(([d, x, bad]) => {
    rect(s, x, 2.5, cw, 3.8, bad ? C.warmTint : C.accTint, bad ? {} : { line: { color: C.acc, width: 1.5 } });
    T(s, d.h.toUpperCase(), { x: x + 0.35, y: 2.8, w: cw - 0.7, h: 0.35, fontSize: 13, bold: true, charSpacing: 3, color: bad ? C.warm : C.acc });
    T(s, d.big, { x: x + 0.35, y: 3.3, w: cw - 0.7, h: 1.3, fontSize: d.fs || 30, bold: true });
    if (d.p) T(s, d.p, { x: x + 0.35, y: 4.8, w: cw - 0.7, h: 1.3, fontSize: 17, color: C.soft });
  });
  if (o.src) T(s, o.src, { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
  return s;
}
// Pregunta con opciones
function quiz(kicker, q, opts, o = {}) {
  const s = pres.addSlide();
  s.background = { path: "assets/grad.png" };
  T(s, kicker.toUpperCase(), { x: M, y: 0.5, w: 11, h: 0.3, fontSize: 12, bold: true, charSpacing: 4 });
  T(s, q, { x: M, y: 1.1, w: 11.9, h: 2.2, fontSize: 40, bold: true });
  const n = opts.length, gap = 0.3, cw = (W - 2 * M - gap * (n - 1)) / n;
  opts.forEach((t, i) => {
    rect(s, M + i * (cw + gap), 3.9, cw, 1.9, "FFFFFF");
    T(s, t, { x: M + i * (cw + gap), y: 3.9, w: cw, h: 1.9, fontSize: 36, bold: true, color: C.ink, align: "center", valign: "middle" });
  });
  if (o.n) s.addNotes(o.n);
  return s;
}
// Prompt para copiar
function prompt(kicker, title, text, o = {}) {
  const s = base(kicker, title, o.n);
  rect(s, M, 2.5, W - 2 * M, o.h || 2.6, C.surf, { line: { color: C.line, width: 1 } });
  T(s, text, { x: M + 0.4, y: 2.5, w: W - 2 * M - 0.8, h: o.h || 2.6, fontSize: 22, fontFace: "Courier New", color: "BFE6FF", valign: "middle" });
  if (o.tips) o.tips.forEach((t, i) => {
    const cw = (W - 2 * M - 0.3 * (o.tips.length - 1)) / o.tips.length, x = M + i * (cw + 0.3);
    rect(s, x, 5.4, cw, 1.0, C.card);
    T(s, t, { x: x + 0.25, y: 5.4, w: cw - 0.5, h: 1.0, fontSize: 15, color: C.soft, valign: "middle" });
  });
  return s;
}
// Pantalla en vivo / captura de respaldo
function demoScreen(title, note, n) {
  const s = base("Demo en vivo", title, n);
  ph(s, M, 2.3, W - 2 * M, 3.9, note);
  return s;
}
// Pasos en fila
function flow(kicker, title, steps, o = {}) {
  const s = base(kicker, title, o.n);
  const k = steps.length, gap = 0.55, cw = (W - 2 * M - gap * (k - 1)) / k;
  steps.forEach((st, i) => {
    const x = M + i * (cw + gap);
    rect(s, x, 2.7, cw, 3.2, C.card);
    T(s, st.big || String(i + 1), { x: x + 0.25, y: 2.95, w: cw - 0.5, h: 0.8, fontSize: 36, bold: true, color: C.acc });
    T(s, st.h, { x: x + 0.25, y: 3.85, w: cw - 0.5, h: 0.8, fontSize: 17, bold: true });
    if (st.p) T(s, st.p, { x: x + 0.25, y: 4.7, w: cw - 0.5, h: 1.1, fontSize: 14, color: C.soft });
    if (i < k - 1) T(s, "→", { x: x + cw, y: 4.0, w: gap, h: 0.6, fontSize: 28, bold: true, color: C.acc, align: "center" });
  });
  if (o.src) T(s, o.src, { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
  return s;
}

// =====================================================================
// 1-5 APERTURA (≈4 min)
// =====================================================================
{
  const s = pres.addSlide(); s.background = { color: C.bg };
  s.addNotes("Bienvenida (1 min). Pregunta: ¿cuántos aquí están buscando trabajo o lo buscarán en el próximo año?");
  T(s, "PONENCIA · EMPLEO E IA 2026", { x: M, y: 0.9, w: 8, h: 0.3, fontSize: 12, bold: true, color: C.acc, charSpacing: 4 });
  T(s, [{ text: "La IA no te quitará el trabajo, ", options: {} }, { text: "pero sí te lo puede conseguir", options: { color: C.acc } }], { x: M, y: 1.5, w: 8.2, h: 3.4, fontSize: 48, bold: true });
  T(s, "Datos reales, nuevas reglas de contratación y cómo usar la IA para conseguir empleo.", { x: M, y: 5.1, w: 7.6, h: 0.9, fontSize: 18, color: C.soft });
  T(s, "Cristhian Recalde · @cry.code", { x: M, y: 6.4, w: 7, h: 0.4, fontSize: 16, bold: true });
  ph(s, 9.2, 0.9, 3.45, 5.7, "Imagen de portada / collage tech");
}
{
  const s = base("Antes de empezar", "¿Quién les habla?", "Presentación breve (1 min). Máximo 3 datos.");
  s.addImage({ path: "assets/foto.jpg", x: M, y: 2.0, w: 3.3, h: 4.4, sizing: { type: "cover", w: 3.3, h: 4.4 } });
  [["20+", "apps móviles publicadas"], ["AWS", "Community Builder"], ["Global", "startups y empresas"]].forEach(([b, l], i) => {
    const y = 2.0 + i * 1.5;
    rect(s, 4.9, y, 7.7, 1.3, C.card);
    T(s, b, { x: 5.2, y, w: 2.4, h: 1.3, fontSize: 38, bold: true, color: C.acc, valign: "middle" });
    T(s, l, { x: 7.7, y, w: 4.7, h: 1.3, fontSize: 20, valign: "middle" });
  });
}
{
  const s = base("Pregunta a la sala", null, "Cuenta las manos. Al final de la charla volvemos a preguntar (2 min).");
  T(s, "Levanta la mano si crees que la IA te va a quitar el trabajo.", { x: M, y: 1.4, w: 6.6, h: 3.6, fontSize: 44, bold: true, valign: "middle" });
  T(s, "Cuenta las manos. Al final volvemos a preguntar.", { x: M, y: 5.3, w: 6.5, h: 0.8, fontSize: 18, color: C.muted });
  ph(s, 7.9, 1.1, 4.75, 5.3, "Público levantando la mano");
}
{
  const s = base("Pregunta a la sala", null, "Segunda mano: ¿quién busca trabajo o lo buscará pronto? (1 min)");
  T(s, "¿Quién está buscando trabajo, o lo buscará este año?", { x: M, y: 1.4, w: 11.9, h: 2.4, fontSize: 48, bold: true, valign: "middle" });
  ph(s, M, 4.1, W - 2 * M, 2.2, "Ilustración: foto de sala o emoji gigante");
}
cards("El recorrido", "Del miedo al plan de acción", [
  { n: "01", h: "El miedo vs los datos" }, { n: "02", h: "La verdad incómoda" }, { n: "03", h: "Las nuevas reglas" }, { n: "04", h: "La IA como aliada" }, { n: "05", h: "Marca personal y plan" },
], { n: "Agenda (1 min). Un bloque = una idea que se llevan.", h: 2.6, top: 2.7, hfs: 20 });

// =====================================================================
// BLOQUE 1 · EL MIEDO VS LOS DATOS (≈9 min)
// =====================================================================
section(1, "El miedo vs los datos", "¿La IA viene por tu trabajo? Veamos qué dicen los números.", 9);
split("El miedo vs los datos", "Cada revolución tecnológica dio miedo", ["Cajeros automáticos", "Excel", "Internet"], "Foto histórica: oficina antes de Excel / ATM", { n: "Contexto (1 min): el miedo no es nuevo. Cambia el trabajo, no desaparece." });
{
  const s = base("El miedo vs los datos", "El saldo neto es positivo", "WEF Future of Jobs 2025. Abrir rompiendo el miedo: el saldo es positivo (1 min).");
  [["+170 M", "empleos creados", C.acc], ["−92 M", "desplazados", C.warm], ["+78 M", "saldo neto a 2030", C.good]].forEach(([b, l, c], i) => {
    const cw = (W - 2 * M - 0.6) / 3, x = M + i * (cw + 0.3);
    rect(s, x, 2.6, cw, 3.4, C.card);
    T(s, b, { x, y: 2.9, w: cw, h: 1.6, fontSize: 68, bold: true, color: c, align: "center", valign: "middle" });
    T(s, l, { x, y: 4.7, w: cw, h: 0.8, fontSize: 20, bold: true, align: "center" });
  });
  T(s, "Foro Económico Mundial · Future of Jobs Report 2025", { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
}
stat("El miedo vs los datos", "39%", "de las habilidades clave van a cambiar", { src: "WEF Future of Jobs 2025", ph: "Ícono o imagen: cambio de habilidades", n: "No es 'desaparecer', es 'cambiar'." });
bars("El miedo vs los datos · Banco Mundial", "Empleos en riesgo de automatización por IA generativa", [
  { label: "Países de ingreso alto", val: "14,2%", pct: 14.2, color: C.warm },
  { label: "Países en desarrollo (como Ecuador)", val: "4,5%", pct: 4.5, color: C.acc },
], { src: "Banco Mundial, World Development Report 2026", n: "3 veces más riesgo en países ricos. Ecuador tiene más que ganar que perder." });
stat("El miedo vs los datos · Latinoamérica", "26–38%", "de los empleos en la región están expuestos a IA generativa", { src: "OIT y Banco Mundial", ph: "Mapa de Latinoamérica", n: "Expuestos no es lo mismo que reemplazados." });
stat("El miedo vs los datos · Latinoamérica", "2–5%", "en riesgo de automatización total", { src: "OIT y Banco Mundial", ph: "Gráfico: expuestos vs reemplazados", n: "Contraste con la diapositiva anterior." });
quiz("Adivina el dato · pregunta al público", "¿Cuánto más ganan, en promedio, los empleos que piden habilidades de IA?", ["A) 12% más", "B) 35% más", "C) 62% más"], { n: "Pedir votos levantando la mano. Dar 20 segundos." });
stat("Respuesta: C", "+62%", "prima salarial promedio de los empleos que piden IA", { src: "PwC · Global AI Jobs Barometer 2026 (57% el año anterior)", ph: "Imagen: billete / gráfico ascendente", n: "El dato más fuerte de la charla. Saber IA paga." });
bars("PwC · AI Jobs Barometer 2026", "Los empleos que piden IA crecen mucho más rápido", [
  { label: "Empleos que piden habilidades de IA", val: "+69%", pct: 69 },
  { label: "Mercado laboral en general", val: "+9%", pct: 9, color: C.muted },
], { src: "PwC · más de 1.000 millones de avisos en 27 países", n: "Crecimiento de demanda." });
cards("PwC · mercado de dos vías", "La IA premia el criterio experto, no lo reemplaza", [
  { big: "2x", h: "de crecimiento", p: "en empleos que la IA 'profesionaliza' frente a los que 'democratiza'", hi: true },
  { big: "+42%", h: "más crecimiento salarial", p: "en esos mismos empleos", hi: true },
], { cols: 2, h: 3.4, n: "La IA amplifica al que ya sabe. Por eso hay que aprender el oficio Y la herramienta." });
cards("LinkedIn · Skills on the Rise 2026", "Crecen en paralelo dos tipos de habilidades", [
  { h: "Técnicas de IA", p: "Prompting · RAG · LangChain", hi: true },
  { h: "Humanas", p: "Liderazgo · comunicación con stakeholders", hi: true },
], { cols: 2, h: 3.2, hfs: 26, pdy: 0.9, n: "Si eres de humanidades: sirve igual. No hace falta programar." });
stat("Microsoft · Work Trend Index 2026", "86%", "de usuarios de IA trata su resultado como punto de partida", { src: "Microsoft (vende herramientas de IA; dato direccionalmente correcto)", ph: "Imagen: persona revisando una respuesta de IA", n: "Mencionar el interés comercial si hay público crítico." });
cards("Microsoft · habilidades que más ganan valor", "No es 'usar IA', es verificarla", [
  { big: "50%", h: "Control de calidad", hi: true }, { big: "46%", h: "Pensamiento crítico", hi: true },
], { cols: 2, h: 3.0, hfs: 24, n: "La habilidad no es usar IA, es verificarla." });
statement("Idea para llevarte · bloque 1", ["No es el fin del empleo.", { hl: "Es un cambio de reglas." }], { ph: "Imagen: tablero de juego / reglas nuevas", n: "Idea que se llevan. Repetirla." });

// =====================================================================
// BLOQUE 2 · LA VERDAD INCÓMODA (≈11 min)
// =====================================================================
section(2, "La verdad incómoda", "Dónde sí hay riesgo, y por qué no es el fin del camino.", 11);
statement("La verdad incómoda", ["El primer peldaño de la escalera ", { hl: "sí se está rompiendo" }], { ph: "Imagen: escalera con el primer escalón roto", n: "Credibilidad: reconocer el riesgo real. (1 min)" });
stat("La verdad incómoda · Stanford", "−19%", "de empleo en jóvenes de 22 a 25 años en ocupaciones muy expuestas a IA", { warm: true, src: "Stanford Digital Economy Lab · 'Canaries in the Coal Mine' · revisión agosto 2026", ph: "Imagen: canario en la mina (metáfora)", n: "Comparado con dónde estaría sin la IA. Datos de nómina ADP, EE. UU." });
{
  const s = base("La verdad incómoda · Stanford", "Nov 2022 → Jun 2026 · jóvenes de 22 a 25 años", "Mismo grupo etario, distinta exposición.");
  [["−11%", "ocupaciones más expuestas a IA", C.warm], ["+10%", "ocupaciones menos expuestas", C.good]].forEach(([b, l, c], i) => {
    const cw = (W - 2 * M - 0.3) / 2, x = M + i * (cw + 0.3);
    rect(s, x, 2.6, cw, 3.5, C.card);
    T(s, b, { x, y: 2.9, w: cw, h: 1.9, fontSize: 96, bold: true, color: c, align: "center", valign: "middle" });
    T(s, l, { x: x + 0.3, y: 5.0, w: cw - 0.6, h: 0.8, fontSize: 20, bold: true, align: "center" });
  });
}
stat("La verdad incómoda · Casos", "−20%", "desarrolladores de software de 22 a 25 años desde el pico de fines de 2022 (también atención al cliente)", { warm: true, src: "Stanford Digital Economy Lab", ph: "Imagen: pantalla con código", n: "Soy desarrollador: me toca de cerca. Ser honesto." });
statement("El matiz clave", ["La caída se concentra donde la IA ", { hl: "automatiza" }, ". Donde ", { hl: "aumenta" }, " el trabajo humano, no aparece."], { fs: 44, src: "Los mismos autores titulan su actualización: 'sin desplazamiento generalizado'.", n: "Los trabajadores con experiencia no muestran esa brecha." });
versus("La verdad incómoda", "El puesto junior cambió, no desapareció", { h: "El junior de antes", big: "Tareas repetitivas", p: "Aprendía con los años." }, { h: "El junior de ahora", big: "Criterio desde el día uno", p: "La IA te deja llegar con ese criterio antes." }, { n: "Frase clave del bloque." });
{
  const s = base("La verdad incómoda · PwC", "El otro lado de la moneda", "Puestos junior más expuestos a IA (datos EE. UU.)");
  [["7x", "más probabilidad de pedir habilidades de nivel senior", C.acc], ["+35%", "crecieron desde 2019", C.good], ["−10%", "otros puestos de entrada", C.warm]].forEach(([b, l, c], i) => {
    const cw = (W - 2 * M - 0.6) / 3, x = M + i * (cw + 0.3);
    rect(s, x, 2.6, cw, 3.6, C.card);
    T(s, b, { x, y: 2.9, w: cw, h: 1.5, fontSize: 68, bold: true, color: c, align: "center", valign: "middle" });
    T(s, l, { x: x + 0.3, y: 4.6, w: cw - 0.6, h: 1.3, fontSize: 18, bold: true, align: "center" });
  });
  T(s, "PwC 2026 · datos de EE. UU.", { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
}
cards("Limitación honesta", "Lo que estos datos NO dicen", [
  { h: "Son de EE. UU.", p: "No son datos de Ecuador." }, { h: "Son descriptivos", p: "Indicadores tempranos, no causales." }, { h: "Es una foto", p: "La tendencia puede cambiar." },
], { h: 2.8, hfs: 22, pdy: 0.7, n: "Declarar límites da credibilidad." });
stat("Ecuador · empleo juvenil", "7,7%", "desempleo de jóvenes de 15 a 24 años (vs 3,1% nacional)", { src: "INEC · mayo 2026 (citado por El Diario)", warm: true, ph: "Foto: jóvenes en una feria de empleo", n: "El problema en Ecuador es el mercado, no la IA." });
{
  const s = base("Ecuador · mercado laboral", "Pocos empleos de calidad", "INEC mayo 2026.");
  [["36,6%", "empleo adecuado nacional", C.acc], ["52,8%", "informalidad", C.warm]].forEach(([b, l, c], i) => {
    const cw = (W - 2 * M - 0.3) / 2, x = M + i * (cw + 0.3);
    rect(s, x, 2.6, cw, 3.5, C.card);
    T(s, b, { x, y: 2.9, w: cw, h: 1.9, fontSize: 88, bold: true, color: c, align: "center", valign: "middle" });
    T(s, l, { x, y: 5.0, w: cw, h: 0.6, fontSize: 22, bold: true, align: "center" });
  });
  T(s, "INEC · mayo 2026 (citado por El Comercio)", { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
}
stat("Ecuador · jóvenes", "581.046", "jóvenes de 15 a 24 años no estudian ni trabajan (18,25%)", { src: "Microdatos ENEMDU procesados por Expreso · mayo 2026", warm: true, ph: "Imagen: joven con celular / sin rumbo", n: "Pausa. Dejar que el número pese." });
{
  const s = base("Ecuador · la oportunidad", "Talento en IA: hay más demanda que oferta", "La escasez es la oportunidad.");
  [["7 de 10", "empresas no encuentran talento en IA", C.acc, "CITEC · Primicias"], ["19,5%", "de la PEA ya adopta IA", C.acc, "Mentinno · El Diario · T1 2026"]].forEach(([b, l, c, src], i) => {
    const cw = (W - 2 * M - 0.3) / 2, x = M + i * (cw + 0.3);
    rect(s, x, 2.6, cw, 3.4, C.accTint, { line: { color: C.acc, width: 1.5 } });
    T(s, b, { x, y: 2.85, w: cw, h: 1.7, fontSize: 80, bold: true, color: c, align: "center", valign: "middle" });
    T(s, l, { x: x + 0.3, y: 4.6, w: cw - 0.6, h: 0.7, fontSize: 20, bold: true, align: "center" });
    T(s, src, { x, y: 5.4, w: cw, h: 0.3, fontSize: 11, color: C.muted, align: "center" });
  });
}
split("Ecuador · oportunidad remota", "Misma hora que EE. UU. y usamos dólar", ["UTC-5: casi la misma hora que la costa este", "Dólar: sin fricción de pagos", "Tendencia, no cifra"], "Mapa: Ecuador ↔ EE. UU. (husos horarios)", { src: "Fuentes: blogs de agencias de contratación; úsalo como tendencia.", n: "No dar cifras: las fuentes son blogs." });
split("Historia local", "Francisco Arias, ingeniero en marketing", ["Se sintió obsoleto", "Fue escéptico", "Adoptó la IA para potenciar sus ideas"], "Foto / captura de la nota de Primicias", { left: true, n: "Personalizar con una historia ecuatoriana." });
statement("Idea para llevarte · bloque 2", ["El puesto junior cambió,", { hl: "no desapareció." }], { ph: "Imagen: persona subiendo por una escalera nueva", n: "Cierre del bloque." });

// =====================================================================
// BLOQUE 3 · NUEVAS REGLAS (≈8 min)
// =====================================================================
section(3, "Las nuevas reglas de contratación", "La búsqueda de empleo en 2026 es IA contra IA.", 8);
{
  const s = base("Las nuevas reglas", "Avalancha de solicitudes", "ZipRecruiter 2026, más de 1.000 reclutadores (resumen HeroHunt).");
  [["48%", "dice que la IA aumentó el volumen de postulaciones por vacante", C.acc], ["92%", "usa algún grado de IA en su proceso", C.acc]].forEach(([b, l, c], i) => {
    const cw = (W - 2 * M - 0.3) / 2, x = M + i * (cw + 0.3);
    rect(s, x, 2.6, cw, 3.5, C.card);
    T(s, b, { x, y: 2.9, w: cw, h: 1.9, fontSize: 96, bold: true, color: c, align: "center", valign: "middle" });
    T(s, l, { x: x + 0.4, y: 5.0, w: cw - 0.8, h: 0.9, fontSize: 18, bold: true, align: "center" });
  });
}
flow("Las nuevas reglas", "IA contra IA: así llega tu solicitud a una persona", [
  { h: "Candidatos con IA", p: "Cientos de solicitudes en minutos" }, { h: "Filtro con IA", p: "Resume, filtra y agenda" }, { h: "Reclutador humano", p: "Revisa los pocos que pasan" }, { h: "Entrevista", p: "Cada vez más presencial" },
], { n: "Explicar el embudo. Lo escaso ahora es la señal de autenticidad." });
statement("Las nuevas reglas", ["La IA de las empresas hace ", { hl: "tareas administrativas" }, ". No decide."], { fs: 46, src: "Resume Genius 2026 · filtrar, redactar ofertas y agendar", n: "Matiz: la contratación sigue siendo humana." });
{
  const s = base("Las nuevas reglas", "Verificar se volvió el problema", "Robert Half 2026 (citado por Peopable).");
  [["67%", "dice que las solicitudes con IA hacen el proceso más lento"], ["65%", "dice que las habilidades son más difíciles de verificar"]].forEach(([b, l], i) => {
    const cw = (W - 2 * M - 0.3) / 2, x = M + i * (cw + 0.3);
    rect(s, x, 2.6, cw, 3.5, C.warmTint);
    T(s, b, { x, y: 2.9, w: cw, h: 1.9, fontSize: 96, bold: true, color: C.warm, align: "center", valign: "middle" });
    T(s, l, { x: x + 0.4, y: 5.0, w: cw - 0.8, h: 0.9, fontSize: 18, bold: true, align: "center" });
  });
}
split("Las nuevas reglas · LinkedIn", "El reclutador ya tiene un agente de IA", ["LinkedIn Hiring Assistant (desde sep. 2025)", "Arma búsquedas y recomienda candidatos", "Entrevistas de filtro con IA (Hiring Pro)"], "Captura de LinkedIn Hiring Assistant", { src: "Noon · HeroHunt", n: "Implicación: tu perfil lo lee primero una IA." });
statement("Las nuevas reglas", ["Primero te lee una ", { hl: "máquina." }, " Después, te ve una ", { hl: "persona." }], { ph: "Imagen: robot leyendo un perfil", n: "Búsqueda semántica: entiende sinónimos y conceptos relacionados." });
stat("Las nuevas reglas · presencial", "72,4%", "de líderes de reclutamiento entrevista en persona para combatir fraude", { src: "Gartner (vía Computerworld) · Google, Cisco y McKinsey reinstalaron rondas presenciales", ph: "Foto: entrevista cara a cara", n: "Vuelven las entrevistas presenciales." });
cards("Dos preguntas de líderes", "Prepara tu respuesta", [
  { h: "Dan Shapero · COO de LinkedIn", p: "¿Cómo has usado la IA?", hi: true }, { h: "Julie Sweet · CEO de Accenture", p: "¿Qué aprendiste en los últimos seis meses?", hi: true },
], { cols: 2, h: 3.2, hfs: 22, pdy: 0.9, src: "Fortune", n: "Interpelar al público en vivo: pedir que alguien responda." });
quiz("¿Mito o realidad? · vota", "\"El ATS rechaza tu CV automáticamente si el formato no le gusta.\"", ["MITO", "REALIDAD"], { n: "Votar levantando la mano." });
{
  const s = base("Respuesta", null, "Jobscan: el ATS guarda y permite buscar por palabras clave, no rechaza. Lo que hunde el CV es la avalancha.");
  T(s, "MITO", { x: M, y: 1.2, w: 6, h: 2, fontSize: 110, bold: true, color: C.warm });
  T(s, "El ATS guarda tu CV y permite buscarlo por palabras clave. Lo que lo hunde es la avalancha de competidores.", { x: M, y: 3.5, w: 6.3, h: 2.2, fontSize: 24, bold: true });
  [["99,7%", "de reclutadores filtra por palabras clave"], ["10,6x", "más invitaciones con el título exacto del puesto"]].forEach(([b, l], i) => {
    const y = 1.3 + i * 2.6;
    rect(s, 7.9, y, 4.75, 2.3, C.accTint, { line: { color: C.acc, width: 1.5 } });
    T(s, b, { x: 8.2, y: y + 0.2, w: 4.2, h: 1.1, fontSize: 56, bold: true, color: C.acc });
    T(s, l, { x: 8.2, y: y + 1.35, w: 4.2, h: 0.8, fontSize: 16, color: C.soft });
  });
  T(s, "Jobscan · encuesta a más de 380 reclutadores (vía ResumeVera, JobCannon)", { x: M, y: 6.6, w: 11, h: 0.3, fontSize: 11, color: C.muted });
}
statement("Idea para llevarte · bloque 3", ["Si la IA te ayuda a enviar 100 solicitudes, ", { hl: "también ayuda a otros 1.000." }, " La ventaja ya no es el volumen."], { fs: 42, n: "La ventaja es la señal, no el volumen." });

// =====================================================================
// BLOQUE 4 · LA IA COMO ALIADA (≈16 min con demos)
// =====================================================================
section(4, "La IA como tu aliada", "CV, LinkedIn y entrevistas. En vivo, sin ediciones.", 16);
bars("CV en la era de la IA", "Personalizar rinde el doble", [
  { label: "CV adaptado a la oferta", val: "5,75%", pct: 5.75 }, { label: "CV genérico", val: "2,68%", pct: 2.68, color: C.warm },
], { src: "Análisis de 1,39 millones de postulaciones (The Interview Guys) · % de conversión a entrevista", n: "Personalizar duplica las probabilidades." });
bars("CV en la era de la IA · Huntr T1 2026", "Menos solicitudes, mejor adaptadas", [
  { label: "Entre 11 y 20 solicitudes", val: "9,25%", pct: 9.25 }, { label: "100 o más solicitudes", val: "2,58%", pct: 2.58, color: C.warm },
], { src: "Huntr T1 2026 (vía The Interview Guys) · % de conversión a entrevista", n: "Menos, pero mejor." });
statement("CV en la era de la IA", ["La IA ", { hl: "adapta y pule." }, " Los hechos los pones ", { hl: "tú." }], { ph: "Imagen: persona escribiendo su CV junto a un asistente de IA", n: "La regla de oro del CV." });
{
  const s = base("Contraejemplo (1 min)", "¿Lo contratarías?", "Mostrar un CV o mensaje 100% genérico hecho con IA. Suele provocar risas.");
  ph(s, M, 2.3, W - 2 * M, 3.7, "Captura de un CV / mensaje de LinkedIn 100% genérico hecho con IA");
  T(s, "Resume Now: 62% de empleadores rechaza CV con IA no personalizados.", { x: M, y: 6.4, w: 11.5, h: 0.4, fontSize: 14, color: C.muted });
}
cards("Lo genérico se castiga", "Reclutadores y gerentes lo detectan", [
  { big: "62%", h: "de empleadores rechaza CV hechos con IA sin personalizar", bad: true }, { big: "49%", h: "de gerentes descarta los que identifica como generados por IA", bad: true },
], { cols: 2, h: 3.4, hfs: 20, src: "Resume Now · Resume.io (vía KraftCV)", n: "Fuentes secundarias: citarlas como tal." });
cards("CV en la era de la IA", "Siete reglas para tu CV", [
  { n: 1, h: "Un CV base + una versión por oferta" }, { n: 2, h: "Título exacto del puesto" }, { n: 3, h: "Cada logro: verbo, acción, número" },
  { n: 4, h: "Deja que la IA te entreviste" }, { n: 5, h: "Formato simple, una columna" }, { n: 6, h: "Léelo en voz alta" }, { n: 7, h: "Nunca exageres" },
], { cols: 4, h: 1.85, top: 2.5, hfs: 17, n: "Repasar rápido; los prompts vienen en las demos." });
versus("CV en la era de la IA", "De responsabilidad a logro", { h: "Antes", big: "\"Encargado de redes sociales.\"", fs: 28 }, { h: "Después", big: "\"Aumenté 40% el alcance de Instagram en 6 meses con un calendario de contenido.\"", fs: 24 }, { n: "Usar el ejemplo real que vas a mostrar en la demo." });
prompt("Demo 1 · CV contra la oferta", "Pega una oferta real y tu CV base", "\"Compara mi CV con esta oferta. Dime qué falta, qué sobra y qué palabras clave debo usar. No inventes nada.\"", { tips: ["Usa una oferta real de un portal ecuatoriano", "Muestra el antes y después de un logro", "Si falla el internet: capturas de respaldo"], n: "3–4 minutos." });
demoScreen("Demo 1 · captura de respaldo", "Captura: CV + oferta + respuesta de la IA", "Pega aquí la captura por si falla la conexión.");
prompt("Demo 2 · La IA te entrevista", "Para encontrar tus logros medibles", "\"Hazme preguntas, una a la vez, sobre mi último trabajo hasta encontrar 3 logros medibles. No inventes nada.\"", { tips: ["Un voluntario del público responde", "Los logros salen de su experiencia real", "Nunca dejes que invente"], n: "3–4 minutos con voluntario." });
demoScreen("Demo 2 · captura de respaldo", "Captura: conversación con logros encontrados", "Respaldo de la demo 2.");
statement("LinkedIn en 2026", ["Tu perfil es un documento que ", { hl: "primero lee una máquina." }], { ph: "Imagen: perfil de LinkedIn con lupa", n: "Recordar el agente reclutador y la búsqueda semántica." });
split("LinkedIn en 2026 · Titular", "Rol + especialidad + prueba de valor", ["\"Desarrollador Flutter | Apps móviles con IA | 20+ apps publicadas\"", "Es lo que aparece en los resultados"], "Captura de un buen titular en LinkedIn", { n: "El titular es lo más importante." });
demoScreen("Demo 3 · Tres titulares, tú votas", "Tres versiones del titular generadas por la IA (que el público vote)", "3–4 minutos. Mismo perfil, tres versiones. Votación levantando la mano.");
cards("LinkedIn en 2026", "Tu perfil en seis partes", [
  { n: 1, h: "Foto y banner", p: "Muchas más visitas y mensajes" }, { n: 2, h: "Habilidades", p: "5 o más: hasta 17x más visitas" }, { n: 3, h: "Acerca de", p: "Lo mejor en las primeras líneas" },
  { n: 4, h: "Destacados", p: "Tu portafolio dentro de LinkedIn" }, { n: 5, h: "Experiencia", p: "Con logros medibles" }, { n: 6, h: "Open to Work", p: "Visible solo para reclutadores" },
], { cols: 3, top: 2.3, h: 1.95, hfs: 19, pdy: 0.7, n: "Foto: las cifras (14x–21x) son inconsistentes entre fuentes; presentar como principio, sin número." });
stat("LinkedIn en 2026 · dónde postular", "6,87%", "conversión a entrevista al postular en la web de la empresa (vs 1,95% en LinkedIn)", { src: "Huntr · 1,24 millones de postulaciones (vía Lumyhired)", ph: "Captura: botón 'Solicitud sencilla'", n: "Usa LinkedIn para descubrir y conectar, no solo para 'Solicitud sencilla'." });
cards("Entrevistas en 2026", "Prepararte con IA: sí. Que responda por ti: no.", [
  { h: "Sí: úsala para prepararte", p: "Preguntas probables · simulación por voz · historias STAR", hi: true }, { h: "No: que piense por ti en vivo", p: "Es fraude y cada vez más empresas lo detectan", bad: true },
], { cols: 2, h: 3.3, hfs: 22, pdy: 0.9, n: "Línea ética clara." });
cards("Entrevistas en 2026 · el contexto", "El fraude en entrevistas", [
  { big: "6%", h: "de buscadores admitió fraude", p: "Gartner (unos 3.000 encuestados)" }, { big: "1 de 4", h: "perfiles falsos en 2028", p: "Gartner: es una proyección, no una medición" },
], { cols: 2, h: 3.4, hfs: 20, pdy: 1.0, n: "Citar como proyección." });
flow("Entrevistas en 2026", "Cómo prepararte con IA", [
  { h: "Pega la oferta", p: "Pide las 10 preguntas más probables" }, { h: "Simula por voz", p: "Que te pregunte y repregunte" }, { h: "Historias STAR", p: "5 o 6 reales, practicadas" },
  { h: "Investiga la empresa", p: "Productos, noticias, problemas" }, { h: "Ensaya sobre IA", p: "¿Cómo la usas? Con ejemplo" },
], { n: "Sexto paso, de viva voz: prepara preguntas inteligentes para el entrevistador." });
demoScreen("Demo 4 · Simulación de entrevista por voz", "Captura: la IA entrevista y califica con STAR", "3–4 minutos. Usa la oferta de la demo 1.");
statement("Entrevistas en 2026", ["Si la IA piensa por ti en la entrevista, ", { hl: "el día uno en el trabajo se va a notar." }], { fs: 44, n: "Frase para la charla." });
statement("Idea para llevarte · bloque 4", ["La IA adapta y pule;", { hl: "los hechos los pones tú." }], { ph: "Imagen: manos humanas y robóticas escribiendo juntas", n: "Cierre del bloque de demos." });

// =====================================================================
// BLOQUE 5 · MARCA PERSONAL Y PLAN (≈9 min)
// =====================================================================
section(5, "Marca personal y plan de 30 días", "Que te encuentren, no solo buscar.", 9);
stat("Marca personal y networking", "11x", "más tasa de contratación para candidatos referidos frente a postular en frío", { src: "Gem · más de 165 millones de postulaciones (vía Lumyhired)", ph: "Imagen: dos personas dándose la mano", n: "El canal más eficiente, pero no el único." });
cards("El contrapeso honesto", "Postular sí funciona. Lo que falla es postular en masa.", [
  { big: "43–52%", h: "de contrataciones vienen de postulaciones directas" }, { big: "17–18%", h: "de contrataciones vienen de referidos" },
], { cols: 2, h: 3.3, hfs: 18, src: "Ashby · 250.000 contrataciones", n: "No decir '85% se consigue por networking': no tiene fuente." });
bars("Comportamiento de los buscadores", "Dónde se va el tiempo de búsqueda", [
  { label: "Postulando en línea", val: "85%", pct: 85, color: C.warm }, { label: "Haciendo networking", val: "15%", pct: 15 },
], { src: "Encuesta de Huntr", n: "Ahí está la oportunidad." });
cards("Marca personal práctica", "No hace falta ser influencer", [
  { n: 1, h: "Portafolio público", p: "GitHub, Behance o una página con 2–3 proyectos" }, { n: 2, h: "Aprender en público", p: "Una publicación por semana" }, { n: 3, h: "Proyecto con IA", p: "Uno pequeño vale más que un certificado más" },
  { n: 4, h: "Comunidades", p: "Meetups, hackathons, eventos" }, { n: 5, h: "Mensajes con motivo", p: "Menciona algo específico de la persona" }, { n: 6, h: "Coherencia", p: "CV, LinkedIn y portafolio: la misma historia" },
], { cols: 3, top: 2.3, h: 1.95, hfs: 19, pdy: 0.65, n: "Cada fila es una acción concreta." });
split("Marca personal", "Un proyecto pequeño con IA que resuelva un problema local", ["Problema", "Solución", "Resultado"], "Captura de un portafolio o repo", { n: "Estructura de cada proyecto." });
split("Networking", "Un mensaje con motivo concreto vale más que 100 genéricos", ["Menciona algo que publicó o hizo", "Nada de mensajes de IA sin revisar"], "Ejemplo: mensaje genérico vs personalizado", { left: true, n: "Se nota cuando lo escribió una IA." });
cards("Tu plan", "30 días · 10 horas por semana", [
  { n: "Sem 1", h: "Base" }, { n: "Sem 2", h: "CV y LinkedIn" }, { n: "Sem 3", h: "Prueba pública" }, { n: "Sem 4", h: "Red y postulaciones" },
], { h: 2.6, top: 2.7, hfs: 22, n: "Ver las cuatro semanas una por una." });
[
  ["Semana 1 · Base", ["Elige 1 o 2 roles objetivo", "Reúne 10 ofertas reales", "Con IA, extrae las habilidades que más se repiten"], "Lista de habilidades y palabras clave"],
  ["Semana 2 · CV y LinkedIn", ["CV base con logros medibles", "Titular, Acerca de, habilidades y Destacados alineados"], "CV base + perfil actualizado"],
  ["Semana 3 · Prueba pública", ["Un proyecto pequeño con IA", "Primera publicación contando qué aprendiste"], "1 proyecto + 1 publicación"],
  ["Semana 4 · Red y postulaciones", ["10 mensajes personalizados", "Asiste a una comunidad o evento", "5–10 postulaciones adaptadas en la web de la empresa", "2 simulaciones de entrevista"], "Postulaciones enviadas + práctica"],
].forEach(([t, ls, ent]) => {
  const s = base("Tu plan de 30 días", t, "Una semana, un frente.");
  T(s, ls.map((l, i) => ({ text: l, options: { bullet: { indent: 20 }, breakLine: i < ls.length - 1, paraSpaceAfter: 12 } })), { x: M, y: 2.5, w: 6.6, h: 3.6, fontSize: 22, color: C.soft });
  rect(s, 7.9, 2.5, 4.75, 3.3, C.accTint, { line: { color: C.acc, width: 1.5 } });
  T(s, "ENTREGABLE", { x: 8.25, y: 2.85, w: 4, h: 0.3, fontSize: 12, bold: true, charSpacing: 4, color: C.acc });
  T(s, ent, { x: 8.25, y: 3.4, w: 4.05, h: 2.2, fontSize: 26, bold: true });
});
statement("Regla de oro", ["Menos postulaciones,", { hl: "mejor adaptadas," }, "con alguien que te recomiende."], { fs: 48, n: "Regla de oro para cerrar." });

// =====================================================================
// CIERRE (≈4 min) + Q&A
// =====================================================================
{
  const s = base("Volvamos a la pregunta del inicio", null, "Volver a levantar la mano. ¿Cambió algo? Cerrar con la prima de 62% de PwC (2 min).");
  T(s, "¿Quién sigue creyendo que la IA le va a quitar el trabajo?", { x: M, y: 1.3, w: 11.9, h: 3.2, fontSize: 54, bold: true, valign: "middle" });
  T(s, "Levanta la mano otra vez.", { x: M, y: 5.0, w: 8, h: 0.6, fontSize: 22, color: C.muted });
}
stat("Cierre", "+62%", "prima salarial para quien sabe usar IA con criterio", { src: "PwC · AI Jobs Barometer 2026", ph: "Imagen: persona con laptop sonriendo", n: "Volver al título." });
{
  const s = pres.addSlide(); s.background = { path: "assets/grad.png" };
  s.addNotes("Frase final. Pausa. Pasar a preguntas.");
  T(s, "\"La IA no te consigue el trabajo sola. Tú, con IA, sí.\"", { x: 1.1, y: 1.5, w: W - 2.2, h: 3.4, fontSize: 52, bold: true, align: "center", valign: "middle" });
  T(s, "— Cristhian Recalde", { x: 1.1, y: 5.3, w: W - 2.2, h: 0.5, fontSize: 20, align: "center" });
}
cards("Preguntas difíciles · Q&A", "Respuestas preparadas", [
  { h: "¿Y si en Ecuador las empresas ni usan IA?", p: "Solo 19,5% de la PEA la adopta, pero 7 de 10 empresas no encuentran talento. La escasez es la oportunidad." },
  { h: "¿No es trampa usar IA para el CV?", p: "Las empresas también la usan para filtrarte. La línea ética: no inventar ni exagerar." },
  { h: "Soy de humanidades, ¿me sirve?", p: "Las habilidades humanas crecen al ritmo de las técnicas. Aprende a usar las herramientas en tu campo; no hace falta programar." },
], { h: 4.0, hfs: 18, pdy: 1.1, n: "No mostrar hasta que pregunten. Sirve de respaldo." });
{
  const s = base("Gracias", null, "Preguntas y contacto.");
  T(s, "¿Preguntas? Hablemos.", { x: M, y: 1.5, w: 7, h: 2.2, fontSize: 60, bold: true });
  T(s, "@cry.code", { x: M, y: 4.1, w: 7, h: 0.8, fontSize: 36, bold: true, color: C.acc });
  T(s, "Escanea y llévate los prompts, el plan de 30 días y las fuentes.", { x: M, y: 5.2, w: 6.5, h: 1.0, fontSize: 18, color: C.soft });
  ph(s, 8.3, 1.3, 4.3, 4.9, "QR a la versión web");
}
{
  const s = base("Anexo", "Fuentes", "Fuentes primarias primero; las secundarias, verificar antes de citar.");
  const a = ["Foro Económico Mundial — Future of Jobs Report 2025", "PwC — 2026 Global AI Jobs Barometer", "Stanford Digital Economy Lab — Canaries in the Coal Mine (ago 2026)", "Banco Mundial — World Development Report 2026", "OIT y Banco Mundial — IA generativa en América Latina", "LinkedIn — Skills on the Rise 2026", "Microsoft — Work Trend Index 2026", "Resume Genius — AI Impact on Hiring 2026", "Computerworld — entrevistas presenciales"];
  const b = ["INEC — ENEMDU mayo 2026 (vía El Comercio, El Diario, Expreso)", "Primicias — PwC e IA en Ecuador", "The Interview Guys · HeroHunt · Noon", "Peopable · KraftCV · JobCannon · ResumeVera", "Lumyhired · StaffingHub · Truffle · Fortune"];
  T(s, a.map((l, i) => ({ text: l, options: { bullet: { indent: 14 }, breakLine: i < a.length - 1, paraSpaceAfter: 6 } })), { x: M, y: 2.2, w: 6.0, h: 4.2, fontSize: 13, color: C.soft });
  T(s, "Prensa ecuatoriana y fuentes secundarias", { x: 7.1, y: 2.2, w: 5.5, h: 0.3, fontSize: 13, bold: true, color: C.acc });
  T(s, b.map((l, i) => ({ text: l, options: { bullet: { indent: 14 }, breakLine: i < b.length - 1, paraSpaceAfter: 6 } })), { x: 7.1, y: 2.65, w: 5.5, h: 3.7, fontSize: 13, color: C.soft });
}

pres.writeFile({ fileName: "IA_te_consigue_el_trabajo_v2.pptx" }).then(f => console.log("ok", f));
