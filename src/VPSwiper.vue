<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-flip'

const props = defineProps({
  slides: { type: Array, default: null },
  baseUrl: { type: String, default: null },
  numberOfSlides: { type: Number, default: 1 },
  startAt: { type: Number, default: 1 },
  fileExt: { type: String, default: '.jpg' },
  padStart: { type: Number, default: 1 },
  fileNamePrefix: { type: String, default: '' },
  altTextPrefix: { type: String, default: 'Loading' },
  buttonText: { type: String, default: 'View in Fullscreen' },
  noFullscreen: { type: Boolean, default: false },
  height: { type: String, default: null },
  margin: { type: String, default: null },
  borderRadius: { type: String, default: '8px' },

  slidesPerView: { type: Number, default: 1 },
  spaceBetween: { type: Number, default: 0 },
  lazyPreloadPrevNext: { type: Number, default: 1 },
  breakpoints: { type: Object, default: null },
  pagination: { type: [Object, Boolean], default: true },
  keyboard: { type: Boolean, default: true },
  mousewheel: { type: Boolean, default: true },
  navigation: { type: Boolean, default: true },
  grabCursor: { type: Boolean, default: true },
  loop: { type: Boolean, default: true },
  autoplay: { type: [Object, Boolean], default: false },
  centeredSlides: { type: Boolean, default: false },
  direction: { type: String, default: 'horizontal' },
  initialSlide: { type: Number, default: 0 },
  oneWayMovement: { type: Boolean, default: false },
  speed: { type: Number, default: 300 },
  effect: { type: String, default: 'slide' },
  coverflowEffect: { type: Object, default: () => ({}) },
  cubeEffect: { type: Object, default: () => ({}) },
  fadeEffect: { type: Object, default: () => ({}) },
  flipEffect: { type: Object, default: () => ({}) },
})

// Modules
const swiperModules = [] // NOSONAR
if (props.autoplay) swiperModules.push(Autoplay)
if (props.keyboard) swiperModules.push(Keyboard)
if (props.mousewheel) swiperModules.push(Mousewheel)
if (props.navigation) swiperModules.push(Navigation)
if (props.pagination) swiperModules.push(Pagination)
const effects = {
  coverflow: EffectCoverflow,
  cube: EffectCube,
  fade: EffectFade,
  flip: EffectFlip,
}
const effect = props.effect.trim().toLowerCase()
if (effects[effect]) swiperModules.push(effects[effect])

// Slides
let swiperSlides = []
if (props.slides?.length) {
  swiperSlides = props.slides
} else if (props.baseUrl) {
  const baseUrl = props.baseUrl.replace(/\/$/, '')
  for (let i = props.startAt; i < props.numberOfSlides + props.startAt; i++) {
    const fileName = String(i).padStart(props.padStart, '0')
    swiperSlides.push(`${baseUrl}/${props.fileNamePrefix}${fileName}${props.fileExt}`)
  }
}

// Fullscreen
const swiperEl = ref(null)
const requestFullscreen = () => {
  // noinspection JSUnresolvedReference
  swiperEl?.value?.$el?.requestFullscreen?.()
}
</script>

<template>
  <div class="vp-swiper-wrapper">
    <button v-if="!props.noFullscreen" @click="requestFullscreen" class="vp-swiper-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-fullscreen-icon lucide-fullscreen"
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect width="10" height="8" x="7" y="8" rx="1" />
      </svg>
      <span>{{ props.buttonText }}</span>
    </button>

    <ClientOnly>
      <Swiper
        ref="swiperEl"
        class="swiper"
        :modules="swiperModules"
        :slides-per-view="props.slidesPerView"
        :space-between="props.spaceBetween"
        :lazy-preload-prev-next="props.lazyPreloadPrevNext"
        :breakpoints="props.breakpoints"
        :pagination="props.pagination"
        :keyboard="props.keyboard"
        :mousewheel="props.mousewheel"
        :navigation="props.navigation"
        :grab-cursor="props.grabCursor"
        :loop="props.loop"
        :autoplay="props.autoplay"
        :centered-slides="props.centeredSlides"
        :direction="props.direction"
        :initial-slide="props.initialSlide"
        :one-way-movement="props.oneWayMovement"
        :speed="props.speed"
        :effect="props.effect"
        :coverflow-effect="props.coverflowEffect"
        :cube-effect="props.cubeEffect"
        :fade-effect="props.fadeEffect"
        :flip-effect="props.flipEffect"
      >
        <SwiperSlide v-for="(url, i) in swiperSlides" :key="i">
          <img :src="url" :alt="`${props.altTextPrefix} ${i + 1}`" loading="lazy" />
          <div class="swiper-lazy-preloader"></div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style scoped>
.vp-swiper-wrapper {
  margin: v-bind('props.margin');
}
.vp-swiper-button {
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.swiper {
  height: v-bind('props.height');
  --swiper-pagination-fraction-color: var(--vp-c-purple-1);
  --swiper-pagination-color: var(--vp-c-purple-1);
  --swiper-navigation-color: var(--vp-c-purple-1);
  --swiper-navigation-sides-offset: 4px;
  background-color: var(--vp-code-block-bg);
  border-radius: v-bind('props.borderRadius');
}

/*noinspection CssUnusedSymbol*/
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  height: auto;
}

.swiper-slide img {
  height: 100%;
  object-fit: contain;
}
</style>
