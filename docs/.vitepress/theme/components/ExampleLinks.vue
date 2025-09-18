<script setup>
import { useRoute } from 'vitepress'

const route = useRoute()
const props = defineProps({
  seperator: { type: String, default: '|' },
  asList: { type: Boolean, default: false },
})

// Links
const links = [
  { text: 'Basic', href: '/examples/basic' },
  { text: 'Slide', href: '/examples/slide' },
  { text: 'Cube', href: '/examples/cube' },
  { text: 'Coverflow', href: '/examples/coverflow' },
  { text: 'Fade', href: '/examples/fade' },
  { text: 'Flip', href: '/examples/flip' },
  { text: 'Vertical', href: '/examples/vertical' },
]
</script>

<template>
  <p v-if="!props.asList">
    <template v-for="(link, i) in links" :key="link.href">
      <template v-if="route.path !== link.href">
        <a :href="link.href">{{ link.text }}</a>
      </template>
      <template v-else>{{ link.text }}</template>
      <template v-if="i < links.length - 1">{{ ' ' + props.seperator.trim() + ' ' }} </template>
    </template>
  </p>
  <ul v-else>
    <li v-for="link in links" :key="link.href">
      <a :href="link.href">{{ link.text }}</a>
    </li>
  </ul>
</template>
