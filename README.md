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

```html
<VPSwiper base-url="https://example.com/path" :number-of-slides="2" />
```

This generates numbers for filenames and appends them to the base url as follows:

```text
base-url / # . file-ext
```

Therefore, the above example will generate 2 image links:

- `https://example.com/path/1.jpg`
- `https://example.com/path/2.jpg`

**Example passing additional parameters:**

```html
<VPSwiper
  base-url="https://example.com/path"
  :number-of-slides="18"
  file-ext="png"
  :pagination="{ type: 'fraction' }"
  :mousewheel="false"
  effect="coverflow"
  :coverflow-effect="{ slideShadows: false }"
/>
```

> [!TIP]  
> If you need to pass a list of files, add thumbnails, or anything else; please
> [request a feature](https://github.com/cssnr/vitepress-swiper/discussions/categories/feature-requests).

## Options

The options are broken down into 2 sections.
The [Plugin Options](#plugin-options) and [Swiper Options](#swiper-options).

_Note: String parameters do not begin with a `:` but all other types do._

### Plugin Options

These options are used by the plugin to generate the slideshow.

| Property&nbsp;Name |  Default&nbsp;Value  |  Type  | Description&nbsp;of&nbsp;Property&nbsp;Value |
| :----------------- | :------------------: | :----: | :------------------------------------------- |
| base-url           |     ❗ Required      | String | Base URL for the Swiper images source.       |
| :number-of-slides  |     ❗ Required      | Number | Number of slides to generate.                |
| file-ext           |        `jpg`         | String | File extension for image source url.         |
| :pad-start         |         `1`          | Number | Pad image name numbers with `0`'s.           |
| alt-text-prefix    |      `Loading`       | String | Prefix text for `alt` attributes.            |
| button-text        | `View in Fullscreen` | String | Text label for fullscreen button.            |
| height             |         ` `          | String | CSS height string, auto by default.          |
| margin-top         |         ` `          | String | CSS marginTop string, none by default.       |

### Swiper Options

Swiper Parameters Documentation: https://swiperjs.com/swiper-api#parameters

| Property&nbsp;Name      | Default |  Type   | Description&nbsp;of&nbsp;Property&nbsp;Value                                                       |
| :---------------------- | :-----: | :-----: | :------------------------------------------------------------------------------------------------- |
| :slides-per-view        |   `1`   | Number  | Number of slides shown per view.                                                                   |
| :space-between          |   `0`   | Number  | Space between slides in pixels.                                                                    |
| :breakpoints            |  `{ }`  | Object  | Breakpoints params [🌐](https://swiperjs.com/swiper-api#param-breakpoints)                         |
| :pagination             |  `{ }`  | Object  | Pagination params (`false` to disable) [🌐](https://swiperjs.com/swiper-api#pagination-parameters) |
| :lazy-preload-prev-next |   `2`   | Number  | Number of lazy loaded slides before/after.                                                         |
| :keyboard               | `true`  | Boolean | Enable/disable keyboard navigation.                                                                |
| :mousewheel             | `true`  | Boolean | Enable/disable mouse wheel navigation.                                                             |
| :navigation             | `true`  | Boolean | Enable/disable navigation arrows.                                                                  |
| :grab-cursor            | `true`  | Boolean | Enable/disable grab cursor on hover.                                                               |
| :loop                   | `true`  | Boolean | Enable/disable continuous loop mode.                                                               |
| effect                  | `slide` | String  | `slide`, `coverflow`, `cube`, `fade`, `flip`                                                       |
| :coverflow-effect       |  `{ }`  | Object  | EffectCoverflow params [🌐](https://swiperjs.com/swiper-api#coverflow-effect-parameters)           |
| :cube-effect            |  `{ }`  | Object  | EffectCube params [🌐](https://swiperjs.com/swiper-api#cube-effect-parameters)                     |
| :fade-effect            |  `{ }`  | Object  | EffectFade params [🌐](https://swiperjs.com/swiper-api#fade-effect-parameters)                     |
| :flip-effect            |  `{ }`  | Object  | EffectFlip params [🌐](https://swiperjs.com/swiper-api#flip-effect-parameters)                     |

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
