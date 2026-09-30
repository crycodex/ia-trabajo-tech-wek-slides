<script setup lang="ts">
// Captura con recuadros pintados y numerados. Coordenadas en % de la imagen.
// <Annotated src="/img/linkedin-perfil.webp" :boxes='[{"x":5,"y":3,"w":92,"h":39,"n":1,"tone":"good"}]' />
// Sin src muestra un espacio para que pegues tu captura.
import { useIsSlideActive } from '@slidev/client'

withDefaults(defineProps<{ src?: string, boxes?: { x: number, y: number, w: number, h: number, n: number | string, tone?: 'good' | 'fix' }[], label?: string, ratio?: string }>(), {
  boxes: () => [], label: 'Pega aquí tu captura', ratio: '1534 / 890',
})
const active = useIsSlideActive()
</script>

<template>
  <div class="ann" :class="{ on: active, empty: !src }" :style="{ aspectRatio: ratio }">
    <template v-if="src">
      <img :src="src" alt="">
      <span
        v-for="(b, i) in boxes" :key="i" class="box" :class="b.tone || 'fix'"
        :style="{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%`, '--d': `${0.35 + i * 0.28}s` }"
      ><b>{{ b.n }}</b></span>
    </template>
    <div v-else class="ph"><small>ESPACIO PARA TU CAPTURA</small><span>{{ label }}</span></div>
  </div>
</template>

<style scoped>
.ann { position: relative; width: 100%; border-radius: 14px; overflow: visible; background: #1B252F }
.ann img { width: 100%; height: 100%; object-fit: cover; border-radius: 14px; display: block; box-shadow: 0 16px 44px rgba(0, 0, 0, .45) }
.box { position: absolute; border-radius: 10px; border: 3px solid; opacity: 0 }
.box.good { border-color: #2ED47A; background: rgba(46, 212, 122, .12); box-shadow: 0 0 0 4px rgba(46, 212, 122, .18) }
.box.fix { border-color: #E07B53; background: rgba(224, 123, 83, .14); box-shadow: 0 0 0 4px rgba(224, 123, 83, .2) }
.box b { position: absolute; left: -34px; top: 50%; margin-top: -13px; width: 26px; height: 26px; border-radius: 50%; display: grid; place-items: center; font: 800 14px var(--display); color: #0B1620 }
.box.good b { background: #2ED47A }
.box.fix b { background: #E07B53 }
.on .box { animation: paint .6s var(--d) cubic-bezier(.2, .8, .2, 1) both, glow 2.4s calc(var(--d) + .8s) ease-in-out infinite }
@keyframes paint { from { opacity: 0; transform: scale(1.12) } to { opacity: 1; transform: none } }
@keyframes glow { 50% { box-shadow: 0 0 0 9px transparent } }
.ph { position: absolute; inset: 0; border: 2px dashed #3E5266; border-radius: 14px; display: grid; place-content: center; text-align: center; gap: 8px; color: #C4CCD4; font-size: 16px }
.ph small { font: 700 10px var(--body); letter-spacing: .25em; color: #8B98A5 }
.on .ph { animation: dash 3s ease-in-out infinite }
@keyframes dash { 50% { border-color: #41B3FF } }
@media (prefers-reduced-motion: reduce) { .on .box { animation: none; opacity: 1 } }
</style>
