<script setup lang="ts">
// Juego "¿Legítimo o trampa?": la sala grita, tú haces clic.
import { computed, ref } from 'vue'

const items = [
  { t: 'Pedir a la IA las 10 preguntas más probables de la oferta.', a: 'ok', why: 'Legítimo: es preparación. Tú respondes con tu experiencia.' },
  { t: 'Tener una IA dictándote respuestas durante la videollamada.', a: 'no', why: 'Trampa: 6% de candidatos admite fraude (Gartner) y ya vuelven las rondas presenciales.' },
  { t: 'Simular la entrevista por voz y pedir que critique tus respuestas con STAR.', a: 'ok', why: 'Legítimo: es entrenamiento, como practicar con un amigo.' },
  { t: 'Pedirle a la IA que invente un logro para tu CV.', a: 'no', why: 'Trampa: todo lo que escribas te lo van a preguntar.' },
  { t: 'Usar IA en una prueba de código cuando la empresa lo permite.', a: 'ok', why: 'Legítimo: algunas empresas, como Meta, evalúan cómo la usas.' },
]
const ans = ref<(string | null)[]>(items.map(() => null))
const score = computed(() => ans.value.filter((a, i) => a === items[i].a).length)
const played = computed(() => ans.value.filter(Boolean).length)
</script>

<template>
  <div class="game">
    <div v-for="(it, i) in items" :key="i" class="item" :class="ans[i] ? (ans[i] === it.a ? 'ok' : 'no') : ''">
      <span class="t">{{ it.t }}</span>
      <div class="btns">
        <button :class="{ sel: ans[i] === 'ok' }" @click="ans[i] = 'ok'">Legítimo</button>
        <button :class="{ sel: ans[i] === 'no' }" @click="ans[i] = 'no'">Trampa</button>
      </div>
      <p v-if="ans[i]" class="why">{{ it.why }}</p>
    </div>
    <p class="score">Aciertos de la sala: {{ score }} de {{ played || items.length }}</p>
  </div>
</template>

<style scoped>
.game { display: grid; gap: 8px }
.item { display: grid; grid-template-columns: 1fr auto; gap: 4px 12px; align-items: center; background: #222D39; border-radius: 12px; padding: 10px 14px; transition: box-shadow .3s ease }
.item.ok { box-shadow: inset 0 0 0 1.5px #2ED47A }
.item.no { box-shadow: inset 0 0 0 1.5px #E07B53 }
.t { font-size: 16px }
.btns { display: flex; gap: 6px }
.btns button { border: 1px solid #2B3946; background: #1B252F; color: #fff; border-radius: 999px; padding: 6px 12px; font: 600 13px var(--body); cursor: pointer }
.btns button.sel { background: #41B3FF; color: #0B2336; border-color: #41B3FF }
.why { grid-column: 1 / -1; margin: 2px 0 0; font-size: 14px; color: #C4CCD4 }
.score { margin: 6px 0 0; font: 700 15px var(--body); color: #C4CCD4 }
</style>
