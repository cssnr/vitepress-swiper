[![NPM Downloads](https://img.shields.io/npm/dw/%40cssnr%2Fvitepress-swiper?logo=npm)](https://www.npmjs.com/package/@cssnr/vitepress-swiper)
[![NPM Version](https://img.shields.io/npm/v/%40cssnr%2Fvitepress-swiper?logo=npm)](https://www.npmjs.com/package/@cssnr/vitepress-swiper)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/vitepress-swiper?logo=github)](https://github.com/cssnr/vitepress-swiper/releases/latest)
[![Lint](https://img.shields.io/github/actions/workflow/status/cssnr/vitepress-swiper/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/vitepress-swiper/actions/workflows/lint.yaml)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/vitepress-swiper?logo=github)](https://github.com/cssnr/vitepress-swiper/pulse)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/vitepress-swiper?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/vitepress-swiper)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/vitepress-swiper?logo=htmx&logoColor=white)](https://github.com/cssnr/vitepress-swiper)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/vitepress-swiper?logo=github)](https://github.com/cssnr/vitepress-swiper/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/vitepress-swiper?style=flat&logo=github)](https://github.com/cssnr/vitepress-swiper/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=Support)](https://ko-fi.com/cssnr)

# VitePress Swiper Plugin

- [Install](#Install)
- [Usage](#Usage)
- [Options](#Options)

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

These are the only 2 required properties ([options](#Options)):

```html
<VPSwiper base-url="https://example.com/path" :number-of-slides="2" />
```

The resulting URL format is: `base-url`/`#`.`file-ext`

Therefore, the above example will generate 2 image links:

- `https://example.com/path/1.jpg`
- `https://example.com/path/2.jpg`

Note: this can be modified to include prefixes, start numbers, or accept a list of strings.  
Please open a [Feature Request Discussion](https://github.com/cssnr/vitepress-swiper/discussions/categories/feature-requests) if you would like to see more options.

**Example passing additional parameters:**

```html
<VPSwiper
  base-url="https://example.com/path"
  :number-of-slides="18"
  file-ext="png"
  height="400px"
  :pagination="{ type: 'fraction' }"
  :mousewheel="false"
  effect="coverflow"
  :coverflow-effect="{ slideShadows: false }"
/>
```

## Options

The options are broken down into 2 sections.
The [Plugin Options](#plugin-options) and [Swiper Options](#swiper-options).

Note: String parameters do not begin with a `:` but all other types do.

### Plugin Options

These options are used by the plugin to generate the slideshow.

| Property&nbsp;Name |  Type  | Default&nbsp;Value   | Description&nbsp;of&nbsp;Property&nbsp;Value |
| :----------------- | :----: | :------------------- | :------------------------------------------- |
| base-url           | String | ❗ Required          | Base URL for the Swiper images source.       |
| :number-of-slides  | Number | ❗ Required          | Number of slides to generate.                |
| alt-text-prefix    | String | `Loading`            | Prefix text for `alt` attributes.            |
| file-ext           | String | `jpg`                | File extension for image source url.         |
| :pad-start         | Number | `1`                  | Pad image name numbers with `0`'s.           |
| height             | String | `496px`              | CSS string height applied to the Swiper.     |
| button-text        | String | `View in Fullscreen` | Text label for fullscreen button.            |

### Swiper Options

Swiper Parameters Documentation: https://swiperjs.com/swiper-api#parameters

| Property&nbsp;Name      |  Type   | Default&nbsp;Value | Description&nbsp;of&nbsp;Property&nbsp;Value                                             |
| :---------------------- | :-----: | :----------------- | :--------------------------------------------------------------------------------------- |
| :slides-per-view        | Number  | `1`                | Number of slides shown per view.                                                         |
| :breakpoints            | Object  | `{ }`              | Breakpoints configuration [🌐](https://swiperjs.com/swiper-api#param-breakpoints)        |
| :pagination             | Object  | `{ }`              | Pagination configuration [🌐](https://swiperjs.com/swiper-api#pagination-parameters)     |
| :lazy-preload-prev-next | Number  | `2`                | Number of lazy loaded slides before/after.                                               |
| :keyboard               | Boolean | `true`             | Enable/disable keyboard navigation.                                                      |
| :mousewheel             | Boolean | `true`             | Enable/disable mouse wheel navigation.                                                   |
| :navigation             | Boolean | `true`             | Enable/disable navigation arrows.                                                        |
| :grab-cursor            | Boolean | `true`             | Enable/disable grab cursor on hover.                                                     |
| :loop                   | Boolean | `true`             | Enable/disable continuous loop mode.                                                     |
| effect                  | String  | `slide`            | `slide`, `coverflow`, `cube`, `fade`, `flip`                                             |
| :coverflow-effect       | Object  | `{ }`              | EffectCoverflow params [🌐](https://swiperjs.com/swiper-api#coverflow-effect-parameters) |
| :cube-effect            | Object  | `{ }`              | EffectCube params [🌐](https://swiperjs.com/swiper-api#cube-effect-parameters)           |
| :fade-effect            | Object  | `{ }`              | EffectFade params [🌐](https://swiperjs.com/swiper-api#fade-effect-parameters)           |
| :flip-effect            | Object  | `{ }`              | EffectFlip params [🌐](https://swiperjs.com/swiper-api#flip-effect-parameters)           |

> [!TIP]
> Need more options? Start a [Feature Request Discussion](https://github.com/cssnr/vitepress-swiper/discussions/categories/feature-requests).

# Contributing

For instructions on creating a PR, see the [CONTRIBUTING.md](https://github.com/cssnr/.github/blob/master/.github/CONTRIBUTING.md).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)
