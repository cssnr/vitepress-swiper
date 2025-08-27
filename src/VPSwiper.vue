<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
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
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-flip'

const props = defineProps({
  baseUrl: { type: String, required: true },
  numberOfSlides: { type: Number, required: true },
  fileExt: { type: String, default: 'jpg' },
  padStart: { type: Number, default: 1 },
  altTextPrefix: { type: String, default: 'Loading' },
  buttonText: { type: String, default: 'View in Fullscreen' },
  marginTop: { type: String, default: '10px' },
  marginBottom: { type: String, default: '10px' },
  height: { type: String, default: '' },

  slidesPerView: { type: Number, default: 1 },
  spaceBetween: { type: [Number], default: 0 },
  lazyPreloadPrevNext: { type: Number, default: 1 },
  breakpoints: { type: Object, default: null },
  pagination: { type: Object, default: true },
  keyboard: { type: Boolean, default: true },
  mousewheel: { type: Boolean, default: true },
  navigation: { type: Boolean, default: true },
  grabCursor: { type: Boolean, default: true },
  loop: { type: Boolean, default: true },
  effect: { type: String, default: 'slide' },
  coverflowEffect: { type: Object, default: null },
  cubeEffect: { type: Object, default: null },
  fadeEffect: { type: Object, default: null },
  flipEffect: { type: Object, default: null },
})

const swiperModules = [] // NOSONAR
if (props.keyboard) swiperModules.push(Keyboard)
if (props.mousewheel) swiperModules.push(Mousewheel)
if (props.navigation) swiperModules.push(Navigation)
if (props.pagination) swiperModules.push(Pagination)
if (props.effect === 'coverflow') swiperModules.push(EffectCoverflow)
if (props.effect === 'cube') swiperModules.push(EffectCube)
if (props.effect === 'fade') swiperModules.push(EffectFade)
if (props.effect === 'flip') swiperModules.push(EffectFlip)

// TODO: Generate URL array here and allow passing an array...
const baseUrl = props.baseUrl.replace(/\/$/, '')
const getImageSource = (index) => {
  const fileName = String(index).padStart(props.padStart, '0')
  return `${baseUrl}/${fileName}.${props.fileExt}`
}

const swiperEl = ref(null)
const requestFullscreen = () => {
  // noinspection JSUnresolvedReference
  swiperEl?.value?.$el?.requestFullscreen?.()
}

const swiperStyle = {}
if (props.marginBottom) swiperStyle.marginBottom = props.marginBottom
if (props.height) swiperStyle.height = props.height
</script>

<style scoped>
.vp-swiper-button {
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.swiper {
  --swiper-pagination-fraction-color: var(--vp-c-purple-1);
  --swiper-pagination-color: var(--vp-c-purple-1);
  --swiper-navigation-color: var(--vp-c-purple-1);
  --swiper-navigation-sides-offset: 4px;
  background-color: var(--vp-code-block-bg);
  border-radius: 8px;
}

/*noinspection CssUnusedSymbol*/
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  height: 100%;
  object-fit: contain;
}
</style>

<template>
  <button
    @click="requestFullscreen"
    class="vp-swiper-button"
    :style="props.marginTop ? { marginTop: props.marginTop } : {}"
  >
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
      :style="swiperStyle"
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
      :effect="props.effect"
      :coverflow-effect="props.coverflowEffect"
      :cube-effect="props.cubeEffect"
      :fade-effect="props.fadeEffect"
      :flip-effect="props.flipEffect"
    >
      <SwiperSlide v-for="i in props.numberOfSlides" :key="i">
        <img :src="getImageSource(i)" :alt="`${props.altTextPrefix} ${i}`" loading="lazy" />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>
