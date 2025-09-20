---
prev:
  text: 'Get Started'
  link: '/guides/get-started'
next:
  text: 'Plugin Options'
  link: '/docs/options'
---

# Use from Source

You can easily add the source file to your project for full control over the template.

::: tip ❗ IMPORTANT
This method is manual and does not provide updates or support.
:::

Download or copy the [VPSwiper.vue](https://github.com/cssnr/vitepress-swiper/blob/master/src/VPSwiper.vue)
file to your project.

- Source File: [VPSwiper.vue](https://github.com/cssnr/vitepress-swiper/blob/master/src/VPSwiper.vue)
- Target Location: `.vitepress/theme/components/VPSwiper.vue`

Install the dependency, [SwiperJS](https://www.npmjs.com/package/swiper).

::: code-group

```shell [npm]
npm i swiper
```

```shell [pnpm]
pnpm i swiper
```

```shell [yarn]
yarn add swiper
```

```shell [bun]
bun i swiper
```

:::

Add these 2 lines to your `index.[js,ts]`.

```javascript [.vitepress/theme/index.js]
import DefaultTheme, { VPBadge } from 'vitepress/theme' // [!code highlight]

import VPSwiper from './components/VPSwiper.vue' // [!code ++]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Badge', VPBadge) // [!code highlight]
    app.component('VPSwiper', VPSwiper) // [!code ++]
  },
}
```

<Badge type="info">VPBadge</Badge> Only required if you are using the VitePress [Badge](https://vitepress.dev/reference/default-theme-badge#badge).

<div class="tip custom-block" style="padding-top: 8px; margin-top: 32px;">

See the [Usage Guide](get-started.md#usage) for instructions on adding the `<VPSwiper>` tag.

</div>
