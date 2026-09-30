<script setup lang="ts">
// Constructor de titular de LinkedIn en vivo: rol + especialidad + prueba (+ palabra clave).
import { computed, ref } from 'vue'

const rol = ref('Desarrollador Full Stack Flutter')
const esp = ref('Apps móviles con IA')
const prueba = ref('20+ apps publicadas')
const extra = ref('AWS Community Builder (IA)')
const out = computed(() => [rol.value, esp.value, prueba.value, extra.value].map(s => s.trim()).filter(Boolean).join(' | '))
const over = computed(() => out.value.length > 220)
const done = ref(false)
async function copy() {
  try { await navigator.clipboard.writeText(out.value) } catch {}
  done.value = true
  setTimeout(() => (done.value = false), 1600)
}
</script>

<template>
  <div class="hb" @keydown.stop>
    <form class="form" autocomplete="off" @submit.prevent>
      <label>Rol que buscas<input v-model="rol"></label>
      <label>Especialidad<input v-model="esp"></label>
      <label>Prueba de valor<input v-model="prueba"></label>
      <label>Palabra clave extra<input v-model="extra"></label>
    </form>
    <div class="right">
      <div class="profile">
        <div class="cover" />
        <div class="body">
          <img class="avatar" src="/foto.jpg" alt="">
          <div class="name">Cristhian (cry.code) Recalde</div>
          <div class="headline">{{ out }}</div>
          <div class="meter" :class="{ over }"><span>Así te ve el reclutador en la búsqueda</span><span>{{ out.length }} / 220</span></div>
        </div>
      </div>
      <button class="copy" @click="copy">{{ done ? '¡Copiado!' : 'Copiar titular' }}</button>
    </div>
  </div>
</template>

<style scoped>
.hb { display: grid; grid-template-columns: 1fr 1.1fr; gap: 28px; align-items: start; flex: 1 }
.form { display: grid; gap: 10px }
.form label { display: grid; gap: 5px; font: 600 14px var(--body); color: #C4CCD4 }
.form input { width: 100%; background: #1B252F; border: 1px solid #2B3946; border-radius: 10px; padding: 10px 12px; color: #fff; font: 500 16px var(--body) }
.form input:focus { outline: 2px solid #41B3FF; outline-offset: 1px }
.right { display: grid; gap: 12px }
.profile { background: #1B252F; border: 1px solid #2B3946; border-radius: 16px; overflow: hidden }
.cover { height: 70px; background: linear-gradient(135deg, #5B3CFF 0%, #2E8BFF 38%, #13C8E0 62%, #6A4BFF 100%) }
.body { padding: 0 20px 18px }
.avatar { width: 76px; height: 76px; border-radius: 50%; border: 4px solid #1B252F; margin-top: -38px; object-fit: cover; object-position: 70% 52%; transform: scale(1) }
.name { font: 800 21px var(--display); margin-top: 4px }
.headline { font-size: 16px; color: #E6EDF3; margin-top: 6px; line-height: 1.35; overflow-wrap: anywhere; min-height: 44px }
.meter { display: flex; justify-content: space-between; font-size: 12.5px; color: #8B98A5; margin-top: 10px }
.meter.over { color: #E07B53 }
.copy { justify-self: start; background: #41B3FF; color: #0B2336; border: 0; border-radius: 999px; padding: 9px 18px; font: 700 14px var(--body); cursor: pointer }
</style>
