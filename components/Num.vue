<script setup lang="ts">
// Cuenta de 0 al valor cuando la diapositiva se activa. Ej: <Num v="+170 M" />
import { ref, watch } from 'vue'
import { useIsSlideActive } from '@slidev/client'

const props = withDefaults(defineProps<{ v: string, tag?: string, ms?: number }>(), { tag: 'div', ms: 1300 })
const active = useIsSlideActive()
const shown = ref(props.v)
const re = /\d{1,3}(?:\.\d{3})+|\d+(?:,\d+)?/g
let raf = 0

function render(tok: string, p: number) {
  if (/^\d{1,3}(\.\d{3})+$/.test(tok)) {
    const n = Math.round(Number(tok.replace(/\./g, '')) * p)
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  const d = tok.includes(',') ? tok.split(',')[1].length : 0
  return (Number(tok.replace(',', '.')) * p).toFixed(d).replace('.', ',')
}
function frame(p: number) {
  shown.value = props.v.replace(re, m => render(m, p))
}
function run() {
  cancelAnimationFrame(raf)
  const t0 = performance.now()
  const step = (t: number) => {
    const k = Math.min(1, (t - t0) / props.ms)
    frame(1 - Math.pow(1 - k, 3))
    if (k < 1) raf = requestAnimationFrame(step)
  }
  frame(0)
  raf = requestAnimationFrame(step)
}
watch(active, a => {
  if (a) run()
  else { cancelAnimationFrame(raf); shown.value = props.v }
}, { immediate: true })
</script>

<template>
  <component :is="tag">{{ shown }}</component>
</template>
