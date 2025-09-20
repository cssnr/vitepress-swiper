---
prev:
  text: 'Get Help'
  link: '/support'
next:
  text: 'Plugin Options'
  link: '/docs/options'
---

# Getting Started

A [VitePress](https://vitepress.dev/) Plugin to Easily add a [SwiperJS](https://swiperjs.com/) Photo Gallery or Image Slideshow.

Start by [installing](#install) the package, [setting](#setup) up the plugin, and [using](#usage) the component.

## Install

<span class="search-keywords">Install or Download from NPM npmjs.com</span>

Install directly to your VitePress with the following command.

::: code-group

```shell [npm]
npm i @cssnr/vitepress-swiper
```

```shell [pnpm]
pnpm i @cssnr/vitepress-swiper
```

```shell [yarn]
yarn add @cssnr/vitepress-swiper
```

```shell [bun]
bun i @cssnr/vitepress-swiper
```

:::

_Note: you can also [copy the source](source.md) file to your project._

## Setup

Add these 3 lines to your `index.[js,ts]`.

_If you don't have a [.vitepress/theme/index.js](https://vitepress.dev/guide/custom-theme#theme-resolving) file, create one._

```javascript [.vitepress/theme/index.js]
import DefaultTheme, { VPBadge } from 'vitepress/theme' // [!code highlight]

import VPSwiper from '@cssnr/vitepress-swiper' // [!code ++]
import '@cssnr/vitepress-swiper/style.css' // [!code ++]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Badge', VPBadge) // [!code highlight]
    app.component('VPSwiper', VPSwiper) // [!code ++]
  },
}
```

<Badge type="info">VPBadge</Badge> Only required if you are using the VitePress [Badge](https://vitepress.dev/reference/default-theme-badge#badge).

## Usage

Add a `<VPSwiper>` tag to your Markdown where you want the Swiper to appear.

::: code-group

```vue [Basic ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://example.com/path/1.jpg',
    'https://example.com/path/2.jpg',
    'https://example.com/path/3.jpg',
  ]"
/>
```

```vue [Additional Options ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://example.com/path/1.jpg',
    'https://example.com/path/2.jpg',
    'https://example.com/path/3.jpg',
  ]"
  :pagination="{ type: 'fraction' }"
  :mousewheel="false"
  button-text="Fullscreen"
  margin-top="30px"
  effect="coverflow"
  :coverflow-effect="{ slideShadows: false }"
/>
```

```vue [Dynamic URL's ~vscode-icons:file-type-text~]
<VPSwiper base-url="https://example.com/path" :number-of-slides="3" />
```

:::

Make sure to check out the [Additional Options](../docs/options.md).

_Note: HTML tags must be seperated from Markdown with one blank line._

::: info 🖼️ LIVE DEMOS
You can view more on the [Examples page](../examples/index.md).
:::

### Dynamic URLs

You can generate URL's dynamically using numbers to reduce boilerplate.

See the [Dynamic URL's Page](dynamic.md) for more details.

&nbsp;

::: tip ❔ GET HELP
If you have any trouble getting started, [support is available](../support.md).
:::
