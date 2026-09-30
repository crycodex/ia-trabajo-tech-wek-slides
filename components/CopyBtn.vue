<script setup lang="ts">
// Copia el texto del recuadro .prompt de la misma diapositiva.
import { ref } from 'vue'

const done = ref(false)
const el = ref<HTMLElement>()
async function copy() {
  const box = el.value?.closest('.slidev-layout')?.querySelector('.prompt')
  const text = (box?.textContent || '').replace(/^\s*["“]|["”]\s*$/g, '').trim()
  try { await navigator.clipboard.writeText(text) } catch {}
  done.value = true
  setTimeout(() => (done.value = false), 1600)
}
</script>

<template>
  <button ref="el" class="copy" :class="{ done }" @click="copy">{{ done ? '¡Copiado!' : 'Copiar prompt' }}</button>
</template>

<style scoped>
.copy { background: #41B3FF; color: #0B2336; border: 0; border-radius: 999px; padding: 7px 16px; font: 700 13px var(--body); cursor: pointer; transition: background .2s ease }
.copy.done { background: #2ED47A; color: #062515 }
</style>
