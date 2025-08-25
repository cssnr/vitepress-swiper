[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/vitepress-swiper?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/vitepress-swiper/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/vitepress-swiper?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/vitepress-swiper/tags)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/vitepress-swiper?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/vitepress-swiper/releases/latest)
[![Lint](https://img.shields.io/github/actions/workflow/status/cssnr/vitepress-swiper/lint.yaml?logo=github&label=lint)](https://github.com/cssnr/vitepress-swiper/actions/workflows/lint.yaml)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/vitepress-swiper?logo=github)](https://github.com/cssnr/vitepress-swiper/pulse)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/vitepress-swiper?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/vitepress-swiper)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/vitepress-swiper?logo=github)](https://github.com/cssnr/vitepress-swiper/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/vitepress-swiper?style=flat&logo=github)](https://github.com/cssnr/vitepress-swiper/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=Support)](https://ko-fi.com/cssnr)

- [Install](#Install)
- [Usage](#Usage)

# VitePress Swiper Plugin

A [Swiper](https://swiperjs.com/) Plugin for [VitePress](https://vitepress.dev/).

Easily add Swiper to VitePress.

## Install

There are 2 ways to install this plugin based on preference.

1. [Dependency](#as-dependency) - Minimal footprint, no source access
2. [Source](#as-source) - Adds 1 file to your project, full source access

### As Dependency

To use this as a dependency in your project install it with npm.

```shell
npm i git+https://github.com/cssnr/vitepress-swiper.git#master
```

Then import it in your `.vitepress/theme/index.js`:

```javascript
import DefaultTheme from 'vitepress/theme'

import VPSwiper from 'vitepress-swiper' // add this line
import 'vitepress-swiper/style.css' // add this line

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VPSwiper', VPSwiper) // add this line
  },
}
```

### As Source

To add this to your project:

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

To use this add a `<VPSwiper>` to your markdown.

```html
<VPSwiper
  base-url="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots"
  :number-of-slides="18"
/>
```

| Property&nbsp;Name     | Type.   | Default&nbsp;Value        | Description&nbsp;of&nbsp;Property              |
| ---------------------- | ------- | ------------------------- | ---------------------------------------------- |
| base-url \*            | String  | -                         | Base URL for the Swiper images.                |
| number-of-slides \*    | Number  | -                         | Number of slides to generate.                  |
| alt-text-prefix        | String  | `Loading`                 | Prefix text for slide `alt` attributes.        |
| file-ext               | String  | `jpg`                     | File extension used for slide images.          |
| pad-start              | Number  | `1`                       | Pad image numbers with `0`'s.                  |
| height                 | String  | `496px`                   | CSS string height applied to the Swiper.       |
| slides-per-view        | Number  | `1`                       | Number of slides shown per view.               |
| breakpoints            | Object  | `{}`                      | Breakpoints configuration.                     |
| pagination             | Object  | `{}`                      | Pagination configuration.                      |
| lazy-preload-prev-next | Number  | `2`                       | Number of lazy-loaded slides before/after.     |
| button-text            | String  | `View in Fullscreen`      | Text label for fullscreen button.              |
| keyboard               | Boolean | `true`                    | Enable/disable keyboard navigation.            |
| mousewheel             | Boolean | `true`                    | Enable/disable mouse wheel navigation.         |
| navigation             | Boolean | `true`                    | Enable/disable navigation arrows.              |
| grab-cursor            | Boolean | `true`                    | Enable/disable grab cursor on hover.           |
| loop                   | Boolean | `true`                    | Enable/disable continuous loop mode.           |
| effect                 | String  | ` `                       | [`slide`, `fade`, `cube`, `coverflow`, `flip`] |
| coverflow-effect       | Object  | `{ slideShadows: false }` | Effect params for: `effect: coverflow`         |

# Contributing

For instructions on creating a PR, see the [CONTRIBUTING.md](https://github.com/cssnr/.github/blob/master/.github/CONTRIBUTING.md).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)
