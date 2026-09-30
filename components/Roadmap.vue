<script setup lang="ts">
// Roadmap de estudiante a primer empleo. El camino se dibuja al entrar a la diapositiva.
// <Roadmap />  completo  ·  <Roadmap :active="3" mini />  en las portadas de cada etapa
import { computed } from 'vue'
import { useIsSlideActive } from '@slidev/client'

const props = withDefaults(defineProps<{ active?: number, mini?: boolean }>(), { active: 0, mini: false })
const on = useIsSlideActive()

const STAGES: { t: string, s: string }[] = [
  { t: 'Habilidades', s: 'técnicas y blandas' },
  { t: 'Aprende con IA', s: 'tutor, no atajo' },
  { t: 'Tu perfil', s: 'CV y LinkedIn con Claude' },
  { t: 'Comunidad', s: 'visibilidad y referidos' },
  { t: 'Busca con IA', s: 'herramientas y remoto' },
  { t: 'Entrevista', s: 'prepárate, sin trampa' },
]
const W = 860
const H = computed(() => (props.mini ? 120 : 250))
const pts = computed(() => STAGES.map((_, i) => ({
  x: 70 + i * ((W - 140) / (STAGES.length - 1)),
  y: props.mini ? (i % 2 ? 78 : 42) : (i % 2 ? 150 : 80),
})))
const path = computed(() => {
  const p = pts.value
  const start = { x: 8, y: p[0].y }
  const end = { x: W - 8, y: p[p.length - 1].y }
  const all = [start, ...p, end]
  let d = `M${all[0].x},${all[0].y}`
  for (let i = 1; i < all.length; i++) {
    const a = all[i - 1], b = all[i], mx = (a.x + b.x) / 2
    d += ` C${mx},${a.y} ${mx},${b.y} ${b.x},${b.y}`
  }
  return d
})
const state = (i: number) => (!props.active ? 'all' : i + 1 < props.active ? 'done' : i + 1 === props.active ? 'now' : 'next')
</script>

<template>
  <div class="rm" :class="{ mini, on }">
    <svg :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="xMidYMid meet">
      <path class="road" :d="path" pathLength="1" />
      <path class="line" :d="path" pathLength="1" />
      <g v-for="(p, i) in pts" :key="i" class="node" :class="state(i)" :style="{ '--d': `${0.4 + i * 0.22}s` }">
        <circle :cx="p.x" :cy="p.y" :r="mini ? 13 : 20" class="dot" />
        <text :x="p.x" :y="p.y + (mini ? 4.5 : 6)" class="nnum">{{ i + 1 }}</text>
        <template v-if="!mini">
          <text :x="p.x" :y="i % 2 ? p.y + 50 : p.y - 50" class="t">{{ STAGES[i].t }}</text>
          <text :x="p.x" :y="i % 2 ? p.y + 70 : p.y - 30" class="s">{{ STAGES[i].s }}</text>
        </template>
        <text v-else-if="state(i) === 'now'" :x="p.x" :y="i % 2 ? p.y + 34 : p.y - 22" class="t mt">{{ STAGES[i].t }}</text>
      </g>
      <g v-if="!mini" class="ends">
        <text x="8" :y="pts[0].y + 44" class="end">Hoy: estudiante</text>
        <text :x="W - 8" :y="pts[pts.length - 1].y - 36" class="end right">Primer empleo</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.rm { width: 100%; color: #fff }
.rm svg { width: 100%; height: auto; display: block; overflow: visible }
.road { fill: none; stroke: rgba(255, 255, 255, .12); stroke-width: 10; stroke-linecap: round }
.line { fill: none; stroke: #41B3FF; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 1 }
.mini .line { stroke: #fff }
.on .line { animation: draw 2.2s .15s cubic-bezier(.4, 0, .2, 1) forwards }
@keyframes draw { to { stroke-dashoffset: 0 } }
.dot { fill: #151D25; stroke: #41B3FF; stroke-width: 3 }
.nnum { fill: #fff; font: 800 15px var(--display); text-anchor: middle }
.mini .nnum { font-size: 12px }
.t { fill: #fff; font: 800 17px var(--display); text-anchor: middle }
.s { fill: #C4CCD4; font: 500 13px var(--body); text-anchor: middle }
.end { fill: #8B98A5; font: 700 12px var(--body); letter-spacing: .12em; text-transform: uppercase }
.end.right { text-anchor: end; fill: #2ED47A }
.node { opacity: 0 }
.on .node { animation: pop .5s var(--d) cubic-bezier(.2, .8, .2, 1) both; transform-box: fill-box; transform-origin: center }
@keyframes pop { from { opacity: 0; transform: scale(.4) } to { opacity: 1; transform: none } }
/* mini (sobre el degradado) */
.mini .dot { fill: rgba(255, 255, 255, .12); stroke: rgba(255, 255, 255, .5) }
.mini .done .dot { fill: #fff; stroke: #fff }
.mini .done .nnum { fill: #1F3FAE }
.mini .now .dot { fill: #fff; stroke: #fff; filter: drop-shadow(0 0 10px rgba(255, 255, 255, .8)) }
.mini .now .nnum { fill: #1F3FAE }
.mini .next .nnum { fill: rgba(255, 255, 255, .7) }
.mt { font-size: 14px }
.all .dot { fill: #1D3A52 }
.on .now .dot { animation: pulse 1.8s 1.2s ease-in-out infinite }
@keyframes pulse { 50% { stroke-width: 8; stroke-opacity: .5 } }
@media (prefers-reduced-motion: reduce) { .on .line { animation: none; stroke-dashoffset: 0 } .on .node { animation: none; opacity: 1 } }
</style>
