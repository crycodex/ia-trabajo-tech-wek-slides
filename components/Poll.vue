<script setup lang="ts">
// Encuesta a mano alzada: cuentas las manos con +1 / −. Se guarda en el navegador.
// <Poll mode="start" />  al inicio  ·  <Poll mode="end" />  al cierre (compara con el inicio)
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{ mode?: 'start' | 'end' }>(), { mode: 'start' })

const read = (k: string) => { try { return Number(localStorage.getItem(`iaempleo.${k}`) || 0) } catch { return 0 } }
const save = (k: string, v: number) => { try { localStorage.setItem(`iaempleo.${k}`, String(v)) } catch {} }

const v = ref<Record<string, number>>({ p0y: read('p0y'), p0n: read('p0n'), p1y: read('p1y') })
function bump(k: string, d: number) {
  v.value[k] = Math.max(0, v.value[k] + d)
  save(k, v.value[k])
}
function reset() { for (const k of Object.keys(v.value)) { v.value[k] = 0; save(k, 0) } }

const delta = computed(() => {
  const a = v.value.p0y, b = v.value.p1y
  if (!a && !b) return 'Cuenta las manos para ver el cambio.'
  if (b < a) return `${a - b} ${a - b === 1 ? 'persona cambió' : 'personas cambiaron'} de opinión.`
  if (b === a) return 'Las mismas manos. Hablemos en las preguntas.'
  return 'Más manos que al inicio. Hablemos en las preguntas.'
})
</script>

<template>
  <div class="poll" @keydown.stop>
    <template v-if="mode === 'start'">
      <div class="box">
        <span class="lbl">Sí, me lo quitará</span><b class="n">{{ v.p0y }}</b>
        <div class="btns"><button class="minus" aria-label="Restar" @click="bump('p0y', -1)">−</button><button @click="bump('p0y', 1)">+1</button></div>
      </div>
      <div class="box">
        <span class="lbl">No lo creo</span><b class="n">{{ v.p0n }}</b>
        <div class="btns"><button class="minus" aria-label="Restar" @click="bump('p0n', -1)">−</button><button @click="bump('p0n', 1)">+1</button></div>
      </div>
      <button class="reset" @click="reset">Reiniciar</button>
    </template>
    <template v-else>
      <div class="box"><span class="lbl">Al inicio dijeron "sí"</span><b class="n">{{ v.p0y }}</b><span class="lbl">manos</span></div>
      <div class="box now">
        <span class="lbl">Ahora dicen "sí"</span><b class="n">{{ v.p1y }}</b>
        <div class="btns"><button class="minus" aria-label="Restar" @click="bump('p1y', -1)">−</button><button @click="bump('p1y', 1)">+1</button></div>
      </div>
      <p class="delta">{{ delta }}</p>
    </template>
  </div>
</template>

<style scoped>
.poll { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 22px; position: relative }
.box { background: rgba(255, 255, 255, .06); border: 1px solid #2B3946; border-radius: 14px; padding: 14px 16px; display: flex; flex-direction: column; gap: 6px }
.box.now { border-color: #41B3FF }
.lbl { font-size: 15px; color: #C4CCD4 }
.n { font-family: var(--display); font-size: 52px; line-height: 1; font-weight: 800; font-variant-numeric: tabular-nums; color: #41B3FF }
.btns { display: flex; gap: 8px; margin-top: 4px }
.btns button { flex: 1; border: 0; border-radius: 10px; padding: 8px; background: #fff; color: #16283A; font: 700 16px var(--body); cursor: pointer }
.btns button.minus { flex: 0 0 44px; background: #2B3946; color: #fff }
.btns button:active { transform: scale(.96) }
.reset { position: absolute; right: 0; bottom: -28px; background: none; border: 0; color: #8B98A5; font: 12px var(--body); cursor: pointer }
.delta { grid-column: 1 / -1; font-family: var(--display); font-weight: 700; font-size: 22px; margin: 4px 0 0; color: #fff }
</style>
