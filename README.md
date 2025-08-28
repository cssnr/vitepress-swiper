[![NPM Downloads](https://img.shields.io/npm/dw/%40cssnr%2Fvitepress-swiper?logo=npm)](https://www.npmjs.com/package/@cssnr/vitepress-swiper)
[![NPM Version](https://img.shields.io/npm/v/%40cssnr%2Fvitepress-swiper?logo=npm)](https://www.npmjs.com/package/@cssnr/vitepress-swiper)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/vitepress-swiper?logo=github)](https://github.com/cssnr/vitepress-swiper/releases/latest)
[![Lint](https://img.shields.io/github/actions/workflow/status/cssnr/vitepress-swiper/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/vitepress-swiper/actions/workflows/lint.yaml)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/vitepress-swiper?logo=github)](https://github.com/cssnr/vitepress-swiper/pulse)
[![NPM Bundle Size](https://img.shields.io/bundlephobia/min/%40cssnr%2Fvitepress-swiper?logo=npm)](https://bundlephobia.com/package/@cssnr/vitepress-swiper)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/vitepress-swiper?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/vitepress-swiper)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/vitepress-swiper?logo=htmx&logoColor=white)](https://github.com/cssnr/vitepress-swiper)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/vitepress-swiper?logo=github)](https://github.com/cssnr/vitepress-swiper/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/vitepress-swiper?style=flat&logo=github)](https://github.com/cssnr/vitepress-swiper/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# VitePress Swiper Plugin

- [Install](#Install)
- [Usage](#Usage)
- [Options](#Options)
- [Support](#Support)

A [Swiper](https://swiperjs.com/) Plugin for [VitePress](https://vitepress.dev/) to Easily add an Image Gallery or Photo Slideshow with Custom Options.

Minimal footprint, only 3 lines of setup code and 1 Markdown tag per gallery.

Easy to [install](#Install) and [use](#Usage) with lots of custom [options](#Options).

Live Demos:

- https://zipline-android.cssnr.com/guides/features#screenshots

## Install

There are 2 ways to install this plugin based on preference.

1. [As a Dependency](#as-a-dependency) - Easiest, minimal footprint, no source access
2. [From the Source](#from-the-source) - Adds 1 file to your project, full source access

### As a Dependency

NPM Package: https://www.npmjs.com/package/@cssnr/vitepress-swiper

```shell
npm i @cssnr/vitepress-swiper
```

Then import it in your `.vitepress/theme/index.js`:

```javascript
import DefaultTheme from 'vitepress/theme'

import VPSwiper from '@cssnr/vitepress-swiper' // add this line
import '@cssnr/vitepress-swiper/style.css' // add this line

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VPSwiper', VPSwiper) // add this line
  },
}
```

Proceed to [Usage](#Usage).

### From the Source

Add to your project:

1. Download or clone the [src/VPSwiper.vue](src/VPSwiper.vue) file to your project.
2. Place it to the following location: `.vitepress/theme/components/VPSwiper.vue`
3. Install the dependencies, `swiper`.

```shell
npm i swiper
```

Then import it in your `.vitepress/theme/index.js`:

```javascript
import DefaultTheme from 'vitepress/theme'

import VPSwiper from './components/VPSwiper.vue' // add this line

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VPSwiper', VPSwiper) // add this line
  },
}
```

## Usage

To use, add a `<VPSwiper>` tag to your markdown where you want the gallery to appear.

You can provide a [list](#slides-list) of `:slides` or generate
a [dynamic](#dynamic-url-generation) `:number-of-slides` using a `base-url`.

### Slides List

To generate from a list of `:slides` add them in this format.

```vue
<VPSwiper
  :slides="[
    'https://example.com/path/1.jpg',
    'https://example.com/path/2.jpg',
    'https://example.com/path/3.jpg',
  ]"
/>
```

Example using [additional options](#options).

```vue
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

### Dynamic URL Generation

This only works if your files are named numerically and ordered sequentially.

This generates numbers for filenames and appends them to the base url as follows:

- `base-url` + `/` + `file-name-prefix` + `file#` + `file-ext`

Therefore, the following `<VPSwiper>` tag options/parameters.

```vue
<VPSwiper base-url="https://example.com/path" :number-of-slides="3" />
```

Will produce these URL's:

```text
https://example.com/path/1.jpg
https://example.com/path/2.jpg
https://example.com/path/3.jpg
```

Example using [additional options](#options).

```vue
<VPSwiper
  base-url="https://example.com/path"
  :number-of-slides="4"
  :start-at="8"
  :pad-start="2"
  file-name-prefix="slide-"
  file-ext=".png"
  :pagination="{ clickable: true }"
  :grab-cursor="false"
  margin-top="40px"
  effect="fade"
/>
```

Resulting URL's:

```text
https://example.com/path/slide-08.png
https://example.com/path/slide-09.png
https://example.com/path/slide-10.png
https://example.com/path/slide-11.png
```

## Options

The [Plugin Options](#plugin-options) are for slide generation and [Swiper Options](#swiper-options)
are 1:1 with [Swiper](https://swiperjs.com/swiper-api#parameters).

_Note: String parameters do not begin with a `:` but all other types do._

### Plugin Options

You must provide `:slides` or a `base-url` but **not both**.

| Property&nbsp;Name      |  Default&nbsp;Value  |  Type  | Description&nbsp;of&nbsp;Value |
| :---------------------- | :------------------: | :----: | :----------------------------- |
| **:slides**             |   or **base-url**    | Array  | Base URL for image sources     |
| **base-url** **¹**      |    or **:slides**    | String | Base URL for image sources     |
| :number-of-slides **¹** |         `1`          | Number | Number of slides to generate   |
| :start-at **¹**         |         `1`          | Number | Number to start genreation     |
| file-ext **¹**          |        `.jpg`        | String | Extension for file names       |
| :pad-start **¹**        |         `1`          | Number | Pad file names with `0`'s      |
| file-name-prefix **¹**  |         ` `          | String | Prefix for file names          |
| alt-text-prefix         |      `Loading`       | String | Prefix for `alt` attributes    |
| button-text             | `View in Fullscreen` | String | Text for fullscreen button     |
| margin-top              |        `10px`        | String | CSS marginTop                  |
| margin-bottom           |        `10px`        | String | CSS marginBottom               |
| height                  |         ` `          | String | CSS height (default: auto)     |

> **¹** Only used with [Dynamic URL's](#dynamic-url-generation)

### Swiper Options

Swiper Parameters: https://swiperjs.com/swiper-api#parameters

| Property&nbsp;Name                                                               | Default |  Type   | Description&nbsp;of&nbsp;Value      |
| :------------------------------------------------------------------------------- | :-----: | :-----: | :---------------------------------- |
| [:slides-per-view](https://swiperjs.com/swiper-api#param-slidesPerView)          |   `1`   | Number  | Number of slides shown per view     |
| [:space-between](https://swiperjs.com/swiper-api#param-spaceBetween)             |   `0`   | Number  | Space between slides in pixels      |
| [:lazy-preload-prev-next](https://swiperjs.com/swiper-api#param-spaceBetween)    |   `1`   | Number  | Number of lazy loaded slides        |
| [:breakpoints](https://swiperjs.com/swiper-api#param-breakpoints)                | `null`  | Object  | Breakpoints parameters              |
| [:pagination](https://swiperjs.com/swiper-api#pagination-parameters)             | `true`  | Object  | Pagination parameters               |
| [:keyboard](https://swiperjs.com/swiper-api#param-keyboard)                      | `true`  | Boolean | Enable keyboard navigation          |
| [:mousewheel](https://swiperjs.com/swiper-api#param-mousewheel)                  | `true`  | Boolean | Enable mouse wheel navigation       |
| [:navigation](https://swiperjs.com/swiper-api#param-navigation)                  | `true`  | Boolean | Enable side navigation arrows       |
| [:grab-cursor](https://swiperjs.com/swiper-api#param-grabCursor)                 | `true`  | Boolean | Enable grab cursor on hover         |
| [:loop](https://swiperjs.com/swiper-api#param-loop)                              | `true`  | Boolean | Enable continuous loop              |
| [effect](https://swiperjs.com/swiper-api#param-effect)                           | `slide` | String  | `coverflow`, `cube`, `fade`, `flip` |
| [:coverflow-effect](https://swiperjs.com/swiper-api#coverflow-effect-parameters) |  `{ }`  | Object  | EffectCoverflow parameters          |
| [:cube-effect](https://swiperjs.com/swiper-api#cube-effect-parameters)           |  `{ }`  | Object  | EffectCube parameters               |
| [:fade-effect](https://swiperjs.com/swiper-api#fade-effect-parameters)           |  `{ }`  | Object  | EffectFade parameters               |
| [:flip-effect](https://swiperjs.com/swiper-api#flip-effect-parameters)           |  `{ }`  | Object  | EffectFlip parameters               |

> [!TIP]  
> Need more options? Start a [Feature Request Discussion](https://github.com/cssnr/vitepress-swiper/discussions/categories/feature-requests).

## Support

Please let us know if you run into any [issues](https://github.com/cssnr/vitepress-swiper/issues)
or want to see [new features](https://github.com/cssnr/vitepress-swiper/discussions/categories/feature-requests)...

For general help or to request a feature:

- Q&A Discussion: https://github.com/cssnr/vitepress-swiper/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/vitepress-swiper/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results:

- Report an Issue: https://github.com/cssnr/vitepress-swiper/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=VitePress%20Swiper)

# Contributing

For instructions on creating a PR, see the [CONTRIBUTING.md](https://github.com/cssnr/.github/blob/master/.github/CONTRIBUTING.md).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)
