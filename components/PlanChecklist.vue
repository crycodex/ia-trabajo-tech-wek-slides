<script setup lang="ts">
// Plan de 30 días como checklist. Se guarda en el navegador.
import { computed, ref, watch } from 'vue'

const weeks = [
  { k: 'Semana 1', h: 'Base', items: ['Elegir 1 o 2 roles objetivo', 'Juntar 10 ofertas reales', 'Con IA, extraer las habilidades que más se repiten'] },
  { k: 'Semana 2', h: 'Perfil', items: ['CV base con logros medibles', 'Titular y Acerca de con Claude', 'Habilidades y Destacados'] },
  { k: 'Semana 3', h: 'Visibilidad', items: ['Un proyecto pequeño con IA', 'Publicar qué aprendiste', 'Ir a un evento de comunidad'] },
  { k: 'Semana 4', h: 'Búsqueda', items: ['10 mensajes con motivo', '5 a 10 postulaciones adaptadas', '2 simulaciones de entrevista'] },
]
const KEY = 'iaempleo.plan'
const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} } }
const done = ref<Record<string, boolean>>(read())
watch(done, v => { try { localStorage.setItem(KEY, JSON.stringify(v)) } catch {} }, { deep: true })
const total = weeks.reduce((n, w) => n + w.items.length, 0)
const count = computed(() => Object.values(done.value).filter(Boolean).length)
</script>

<template>
  <div class="plan" @keydown.stop>
    <div class="bar"><div class="track"><i :style="{ transform: `scaleX(${count / total})` }" /></div><span>{{ count }} de {{ total }}</span></div>
    <div class="weeks">
      <div v-for="(w, wi) in weeks" :key="wi" class="wk">
        <span class="k">{{ w.k }}</span>
        <b>{{ w.h }}</b>
        <label v-for="(it, ii) in w.items" :key="ii"><input v-model="done[`${wi}-${ii}`]" type="checkbox"><span>{{ it }}</span></label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plan { display: grid; gap: 14px }
.bar { display: flex; align-items: center; gap: 14px; font: 700 14px var(--body); color: #C4CCD4 }
.track { flex: 1; height: 10px; background: #222D39; border-radius: 10px; overflow: hidden }
.track i { display: block; height: 100%; width: 100%; background: #2ED47A; transform-origin: left center; transition: transform .35s cubic-bezier(.2, .8, .2, 1) }
.weeks { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px }
.wk { background: #222D39; border-radius: 12px; padding: 14px; display: grid; gap: 8px; align-content: start }
.k { font: 700 10px var(--body); letter-spacing: .22em; text-transform: uppercase; color: #41B3FF }
.wk b { font: 800 20px var(--display) }
label { display: grid; grid-template-columns: 18px 1fr; gap: 8px; font-size: 15px; color: #C4CCD4; cursor: pointer; line-height: 1.3 }
input { width: 16px; height: 16px; accent-color: #2ED47A; margin-top: 2px }
input:checked + span { color: #fff; text-decoration: line-through; text-decoration-color: #2ED47A }
</style>
