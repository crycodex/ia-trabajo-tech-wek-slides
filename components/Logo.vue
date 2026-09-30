<script setup lang="ts">
// Logo de marca. Si no hay archivo verificado, muestra un monograma.  Ej: <Logo n="linkedin" />
import { computed } from 'vue'

const props = withDefaults(defineProps<{ n: string, size?: number }>(), { size: 40 })

const MAP: Record<string, { src?: string, mono?: string, alt: string, pad?: boolean }> = {
  linkedin: { src: '/logos/linkedin.png', alt: 'LinkedIn' },
  getonbrd: { src: '/logos/getonbrd.png', alt: 'Get on Board' },
  torre: { mono: 'T', alt: 'Torre' },
  wellfound: { src: '/logos/wellfound.svg', alt: 'Wellfound', pad: true },
  wwr: { src: '/logos/wwr.png', alt: 'We Work Remotely' },
  remoteok: { src: '/logos/remoteok.png', alt: 'Remote OK' },
  workana: { src: '/logos/workana.png', alt: 'Workana' },
  develop21: { mono: 'D21', alt: 'Develop21 Jobs' },
  rankedin: { mono: 'ri', alt: 'rankedin' },
  foundrole: { mono: 'FR', alt: 'FoundRole Jobs' },
  mokaru: { src: '/logos/mokaru.png', alt: 'Mokaru' },
  careervillage: { src: '/logos/careervillage.png', alt: 'CareerVillage' },
  github: { src: '/logos/github.svg', alt: 'GitHub', pad: true },
  aws: { src: '/logos/aws.png', alt: 'AWS' },
  gdg: { src: '/logos/gdg.png', alt: 'Google Developer Groups' },
  googlecloud: { src: '/logos/googlecloud.svg', alt: 'Google Cloud', pad: true },
  ieee: { src: '/logos/ieee.png', alt: 'IEEE' },
  claude: { src: '/logos/claude.png', alt: 'Claude' },
  anthropic: { src: '/logos/anthropic.png', alt: 'Anthropic' },
  deel: { src: '/logos/deel.png', alt: 'Deel' },
  indeed: { src: '/logos/indeed.png', alt: 'Indeed' },
  ionos: { src: '/img/ionos-hub.png', alt: 'IONOS HUB' },
  plus: { mono: '+', alt: 'Tu comunidad' },
}
const m = computed(() => MAP[props.n] ?? { mono: props.n.slice(0, 2).toUpperCase(), alt: props.n })
</script>

<template>
  <span class="logo" :class="{ mono: !m.src, pad: m.pad }" :style="{ width: `${size}px`, height: `${size}px`, fontSize: `${size * 0.38}px`, padding: m.pad ? `${Math.round(size * 0.18)}px` : undefined }" :title="m.alt">
    <img v-if="m.src" :src="m.src" :alt="m.alt">
    <b v-else>{{ m.mono }}</b>
  </span>
</template>

<style scoped>
.logo { display: inline-grid; place-items: center; flex: none; border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 4px 14px rgba(0, 0, 0, .25) }
.logo img { width: 100%; height: 100%; object-fit: contain; display: block }
.logo.pad img { width: 100%; height: auto; max-height: 100% }
.logo.pad { display: flex; align-items: center; justify-content: center; box-sizing: border-box }
.logo.pad { background: #0F151C }
.logo.mono { background: linear-gradient(135deg, #2E3D4D, #1D3A52); color: #fff; font-family: var(--display); font-weight: 800; letter-spacing: -.02em }
</style>
