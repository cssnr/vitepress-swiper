---
prev:
  text: 'Get Started'
  link: '/guides/get-started'
---

# Options

There are [Plugin Options](#plugin-options) and [Swiper Options](#swiper-options).

_Note: String parameters do **not** begin with a `:` but all other types do._

### Plugin Options

You must provide `:slides` or a `base-url` but **not both**.

| Property&nbsp;Name             |  Default&nbsp;Value  |  Type   | Description&nbsp;of&nbsp;Value                                                        |
| :----------------------------- | :------------------: | :-----: | :------------------------------------------------------------------------------------ |
| **:slides** <CB />             |   or **base-url**    |  Array  | Base URL for image sources                                                            |
| **base-url** **¹** <CB />      |    or **:slides**    | String  | Base URL for image sources                                                            |
| :number-of-slides **¹** <CB /> |         `1`          | Number  | Number of slides to generate                                                          |
| :start-at **¹** <CB />         |         `1`          | Number  | Number to start generation                                                            |
| file-ext **¹** <CB />          |        `.jpg`        | String  | Extension for file names                                                              |
| :pad-start **¹** <CB />        |         `1`          | Number  | Pad file names with `0`'s                                                             |
| file-name-prefix **¹** <CB />  |         ` `          | String  | Prefix for file names                                                                 |
| alt-text-prefix <CB />         |      `Loading`       | String  | Prefix for `alt` attributes                                                           |
| button-text <CB />             | `View in Fullscreen` | String  | Text for fullscreen button                                                            |
| no-fullscreen <CB />           |       `false`        | Boolean | Disable fullscreen button                                                             |
| height <CB />                  |        `null`        | String  | [CSS height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) (default: auto) |
| margin <CB />                  |        `null`        | String  | [CSS margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)                 |
| border-radius <CB />           |        `8px`         | String  | [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)   |

> **¹** Only used with [Dynamic URL's](../guides/dynamic.md)

### Swiper Options

Swiper Parameters: https://swiperjs.com/swiper-api#parameters

| Property&nbsp;Name                                                                      |   Default    |  Type   | Description&nbsp;of&nbsp;Value      |
| :-------------------------------------------------------------------------------------- | :----------: | :-----: | :---------------------------------- |
| [:slides-per-view](https://swiperjs.com/swiper-api#param-slidesPerView) <CB />          |     `1`      | Number  | Number of slides shown per view     |
| [:space-between](https://swiperjs.com/swiper-api#param-spaceBetween) <CB />             |     `0`      | Number  | Space between slides in pixels      |
| [:lazy-preload-prev-next](https://swiperjs.com/swiper-api#param-spaceBetween) <CB />    |     `1`      | Number  | Number of lazy loaded slides        |
| [:breakpoints](https://swiperjs.com/swiper-api#param-breakpoints) <CB />                |    `null`    | Object  | Breakpoints parameters              |
| [:pagination](https://swiperjs.com/swiper-api#pagination-parameters) <CB />             |    `true`    | Object  | Pagination parameters               |
| [:keyboard](https://swiperjs.com/swiper-api#param-keyboard) <CB />                      |    `true`    | Boolean | Enable keyboard navigation          |
| [:mousewheel](https://swiperjs.com/swiper-api#param-mousewheel) <CB />                  |    `true`    | Boolean | Enable mouse wheel navigation       |
| [:navigation](https://swiperjs.com/swiper-api#param-navigation) <CB />                  |    `true`    | Boolean | Enable side navigation arrows       |
| [:grab-cursor](https://swiperjs.com/swiper-api#param-grabCursor) <CB />                 |    `true`    | Boolean | Enable grab cursor on hover         |
| [:loop](https://swiperjs.com/swiper-api#param-loop) <CB />                              |    `true`    | Boolean | Enable continuous loop              |
| [:autoplay](https://swiperjs.com/swiper-api#param-autoplay) <CB />                      |   `false`    | Object  | Can be `true` or parameters         |
| [:centered-slides](https://swiperjs.com/swiper-api#param-centeredSlides) <CB />         |   `false`    | Boolean | Center slides vs left aligned       |
| [:direction](https://swiperjs.com/swiper-api#param-direction) <CB />                    | `horizontal` | String  | If `vertical` must set `height`     |
| [:initial-slide](https://swiperjs.com/swiper-api#param-initialSlide) <CB />             |     `0`      | Number  | Initial slide index                 |
| [:one-way-movement](https://swiperjs.com/swiper-api#param-oneWayMovement) <CB />        |   `false`    | Boolean | Only allow swiping forward          |
| [:speed](https://swiperjs.com/swiper-api#param-speed) <CB />                            |    `300`     | Number  | Slide transition speed in ms        |
| [effect](https://swiperjs.com/swiper-api#param-effect) <CB />                           |   `slide`    | String  | `coverflow`, `cube`, `fade`, `flip` |
| [:coverflow-effect](https://swiperjs.com/swiper-api#coverflow-effect-parameters) <CB /> |    `{ }`     | Object  | EffectCoverflow parameters          |
| [:cube-effect](https://swiperjs.com/swiper-api#cube-effect-parameters) <CB />           |    `{ }`     | Object  | EffectCube parameters               |
| [:fade-effect](https://swiperjs.com/swiper-api#fade-effect-parameters) <CB />           |    `{ }`     | Object  | EffectFade parameters               |
| [:flip-effect](https://swiperjs.com/swiper-api#flip-effect-parameters) <CB />           |    `{ }`     | Object  | EffectFlip parameters               |

&nbsp;

See the [Usage](../guides/get-started.md#usage) guide or the [Examples](../examples/index.md)
for details on using the `<VPSwiper>` tag.

If your images are named numerically and sequentially, check out the [Dynamic URL's](../guides/dynamic.md) guide.

&nbsp;

::: tip ❔ ADDITIONAL OPTIONS
If you need more options, please [request a feature](../support.md).
:::
