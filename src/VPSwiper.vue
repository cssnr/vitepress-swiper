<script setup>
// noinspection NpmUsedModulesInstalled
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Keyboard, Mousewheel, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const props = defineProps({
  baseUrl: { type: String, required: true },
  numberOfSlides: { type: Number, required: true },
  altTextPrefix: { type: String, default: 'Loading' },
  fileExt: { type: String, default: 'jpg' },
  padStart: { type: Number, default: 1 },
  height: { type: String, default: '496px' },

  slidesPerView: { type: Number, default: 1 },
  breakpoints: { type: Object, default: () => ({}) },
  pagination: { type: Object, default: () => ({}) },
  lazyPreloadPrevNext: { type: Number, default: 2 },
  buttonText: { type: String, default: 'View in Fullscreen' },
  keyboard: { type: Boolean, default: true },
  mousewheel: { type: Boolean, default: true },
  navigation: { type: Boolean, default: true },
  grabCursor: { type: Boolean, default: true },
  loop: { type: Boolean, default: true },
  effect: { type: String, default: '' },
  coverflowEffect: { type: Object, default: () => ({ slideShadows: false }) },
})

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
</script>

<style>
:root {
  --swiper-pagination-fraction-color: var(--vp-c-purple-1);
  --swiper-navigation-color: var(--vp-c-purple-1);
  --swiper-navigation-sides-offset: 4px;
}

.swiper {
  background-color: var(--vp-code-block-bg);
  border-radius: 8px;
}

.swiper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.inline-button {
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
</style>

<template>
  <button @click="requestFullscreen" class="inline-button">
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
      :style="{ height: props.height }"
      :modules="[Keyboard, Mousewheel, Navigation, Pagination, EffectCoverflow]"
      :slides-per-view="props.slidesPerView"
      :breakpoints="props.breakpoints"
      :pagination="props.pagination"
      :keyboard="props.keyboard"
      :mousewheel="props.mousewheel"
      :navigation="props.navigation"
      :grab-cursor="props.grabCursor"
      :loop="props.loop"
      :lazy-preload-prev-next="props.lazyPreloadPrevNext"
      :effect="props.effect"
      :coverflow-effect="props.coverflowEffect"
    >
      <SwiperSlide v-for="i in props.numberOfSlides" :key="i">
        <img :src="getImageSource(i)" :alt="`${props.altTextPrefix} ${i}`" loading="lazy" />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>
