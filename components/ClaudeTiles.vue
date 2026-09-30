<script setup lang="ts">
// Mosaicos con degradado que cambian de tono y el destello de Claude girando (del HTML original).
// Ej: <ClaudeTiles img="/img/cover.jpg" />  ·  <ClaudeTiles small />
withDefaults(defineProps<{ img?: string, small?: boolean }>(), { small: false })
</script>

<template>
  <div class="tiles" :class="{ small }" aria-hidden="true">
    <img v-if="img" class="base" :src="img" alt="">
    <span class="grid-lines" />
    <span class="t t1" />
    <span class="t t2" />
    <span class="t t3" />
    <img class="spark" src="/img/claude-spark.png" alt="">
  </div>
</template>

<style scoped>
.tiles { position: relative; width: 100%; height: 100%; min-height: 330px; border-radius: 18px; overflow: hidden; background: #1B252F; box-shadow: 0 16px 50px rgba(0, 0, 0, .4) }
.tiles.small { min-height: 260px }
.base { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .55 }
.grid-lines { position: absolute; inset: 0; background:
  linear-gradient(#2B3946 1px, transparent 1px) 0 0 / 25% 20%,
  linear-gradient(90deg, #2B3946 1px, transparent 1px) 0 0 / 25% 20%; opacity: .9 }
.t { position: absolute; background: linear-gradient(135deg, #5B3CFF 0%, #2E8BFF 38%, #13C8E0 62%, #6A4BFF 100%); mix-blend-mode: screen }
.t1 { left: 50%; top: 40%; width: 50%; height: 20%; animation: drift 9s ease-in-out infinite alternate }
.t2 { left: 0; top: 60%; width: 50%; height: 40%; animation: drift 11s ease-in-out infinite alternate-reverse }
.t3 { left: 25%; top: 0; width: 25%; height: 20%; opacity: .7; animation: drift 13s ease-in-out infinite alternate }
.spark { position: absolute; right: 8%; top: 6%; width: 26%; animation: spin 26s linear infinite; filter: drop-shadow(0 6px 18px rgba(224, 123, 83, .45)) }
@keyframes drift { to { filter: hue-rotate(40deg) } }
@keyframes spin { to { transform: rotate(360deg) } }
@media (prefers-reduced-motion: reduce) { .t, .spark { animation: none } }
</style>
