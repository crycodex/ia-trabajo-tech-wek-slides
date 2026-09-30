<script setup lang="ts">
// Opciones clicables: al hacer clic se marca la elegida y la correcta.
// <Quiz :opts='["A) 12% más","B) 35% más","C) 62% más"]' :answer="2" />
import { ref } from 'vue'

defineProps<{ opts: string[], answer: number }>()
const chosen = ref<number | null>(null)
</script>

<template>
  <div class="opts" :class="{ answered: chosen !== null }" :style="{ gridTemplateColumns: `repeat(${opts.length}, 1fr)` }">
    <button
      v-for="(o, i) in opts" :key="i" class="opt"
      :class="{ right: chosen !== null && i === answer, chosen: chosen === i }"
      @click="chosen = chosen === i ? null : i"
    >{{ o }}</button>
  </div>
</template>

<style scoped>
.opts { display: grid; gap: 16px; margin-top: 40px }
.opt { border: 0; background: #fff; color: #16283A; border-radius: 14px; padding: 34px 12px; font: 800 32px var(--display); cursor: pointer; transition: transform .15s ease, opacity .3s ease, background .3s ease }
.opt:hover { transform: translateY(-3px) }
.answered .opt { opacity: .45 }
.answered .opt.right { opacity: 1; background: #2ED47A; color: #062515 }
.answered .opt.chosen:not(.right) { opacity: 1; background: #E07B53; color: #2A1208 }
</style>
