import DefaultTheme, { VPBadge } from 'vitepress/theme'
import './custom.css'
import 'virtual:group-icons.css'

// noinspection NpmUsedModulesInstalled
import VPSwiper from '@src/VPSwiper.vue'

import ExampleLinks from './components/ExampleLinks.vue'

import Contributors from '@cssnr/vitepress-plugin-contributors'
import '@cssnr/vitepress-plugin-contributors/style.css'
import contributors from '../contributors.json'

import CopyButton from '@cssnr/vitepress-plugin-copybutton'
import '@cssnr/vitepress-plugin-copybutton/style.css'

import chat from '@cssnr/vitepress-chat'
import '@cssnr/vitepress-chat/style.css'

// https://vitepress.dev/guide/extending-default-theme
// noinspection JSUnusedGlobalSymbols
/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,

  ...chat(DefaultTheme, {
    api: import.meta.env.VITE_AI_API,
    headers: import.meta.env.VITE_AI_AUTH
      ? { Authorization: import.meta.env.VITE_AI_AUTH }
      : undefined,
    filePath: 'llms.txt',
  }),

  enhanceApp({ app }) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Badge', VPBadge)

    app.component('VPSwiper', VPSwiper)

    app.component('ExampleLinks', ExampleLinks)

    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Contributors', Contributors)
    app.config.globalProperties.$contributors = contributors

    app.component('CB', CopyButton)
  },
}
