# Fade Example

<ExampleLinks />

<!--@include: ./parts/head.md-->

<VPSwiper
:slides="[
'https://smashedr.github.io/random-image/aviation/61919_1467456365.jpg',
'https://smashedr.github.io/random-image/aviation/33782_1539281580.jpg',
'https://smashedr.github.io/random-image/aviation/14489_1641713842.jpg',
'https://smashedr.github.io/random-image/aviation/1608733_1693084765.jpg',
'https://smashedr.github.io/random-image/aviation/1580346_1709589727.jpg',
'https://smashedr.github.io/random-image/aviation/1769591_1691873136.jpg',
'https://smashedr.github.io/random-image/aviation/1810826_1706545148.jpg',
'https://smashedr.github.io/random-image/aviation/89479_1546971121.jpg',
'https://smashedr.github.io/random-image/aviation/1960525_1717688607.jpg',
'https://smashedr.github.io/random-image/aviation/1572559_1715425354.jpg',
'https://smashedr.github.io/random-image/aviation/92909_1498031277.jpg',
'https://smashedr.github.io/random-image/aviation/1674361_1713318851.jpg',
]"
:navigation="false"
:pagination="{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2 }"
effect="fade"
/>

### Code

::: code-group

```vue [Slides ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://smashedr.github.io/random-image/aviation/61919_1467456365.jpg',
    'https://smashedr.github.io/random-image/aviation/33782_1539281580.jpg',
    'https://smashedr.github.io/random-image/aviation/14489_1641713842.jpg',
    'https://smashedr.github.io/random-image/aviation/1608733_1693084765.jpg',
    'https://smashedr.github.io/random-image/aviation/1580346_1709589727.jpg',
    'https://smashedr.github.io/random-image/aviation/1769591_1691873136.jpg',
    'https://smashedr.github.io/random-image/aviation/1810826_1706545148.jpg',
    'https://smashedr.github.io/random-image/aviation/89479_1546971121.jpg',
    'https://smashedr.github.io/random-image/aviation/1960525_1717688607.jpg',
    'https://smashedr.github.io/random-image/aviation/1572559_1715425354.jpg',
    'https://smashedr.github.io/random-image/aviation/92909_1498031277.jpg',
    'https://smashedr.github.io/random-image/aviation/1674361_1713318851.jpg',
  ]"
  :navigation="false"
  :pagination="{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2 }"
  effect="fade"
/>
```

:::

_Note: Dynamic URL's can not be used with these image names._
