<script setup lang="ts">
import { useIsSlideActive } from '@slidev/client'
const active = useIsSlideActive()
</script>

<template>
  <div class="slidev-layout anim grad" :class="{ on: active }">
    <slot />
  </div>
</template>
