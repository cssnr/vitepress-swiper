# Vertical Example

<ExampleLinks />

<!--@include: ./parts/head.md-->

<VPSwiper
base-url="https://picsum.photos/id"
:number-of-slides="10"
:lazy-preload-prev-next="0"
file-ext="/600/400"
:start-at="30"
:navigation="false"
:pagination="{ clickable: true }"
direction="vertical"
height="400px"
/>

### Code

::: code-group

```vue [Dynamic URLs ~vscode-icons:file-type-codekit~]
<VPSwiper
  base-url="https://picsum.photos/id"
  :number-of-slides="10"
  :lazy-preload-prev-next="0"
  file-ext="/600/400"
  :start-at="30"
  :navigation="false"
  :pagination="{ clickable: true }"
  direction="vertical"
  height="400px"
/>
```

```vue [Slides ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://picsum.photos/id/30/600/400',
    'https://picsum.photos/id/31/600/400',
    'https://picsum.photos/id/32/600/400',
    'https://picsum.photos/id/33/600/400',
    'https://picsum.photos/id/34/600/400',
    'https://picsum.photos/id/35/600/400',
    'https://picsum.photos/id/36/600/400',
    'https://picsum.photos/id/37/600/400',
    'https://picsum.photos/id/38/600/400',
    'https://picsum.photos/id/39/600/400',
    'https://picsum.photos/id/40/600/400',
  ]"
  :navigation="false"
  :pagination="{ clickable: true }"
  direction="vertical"
  height="400px"
/>
```

:::

::: warning
This example is a test using images from https://picsum.photos/
:::
