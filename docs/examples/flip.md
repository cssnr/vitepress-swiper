# Flip Example

<ExampleLinks />

<!--@include: ./parts/head.md-->

<VPSwiper
base-url="https://picsum.photos/id"
:number-of-slides="10"
:start-at="20"
file-ext="/800/450"
:pagination="{ type: 'fraction' }"
effect="flip"
/>

### Code

::: code-group

```vue [Dynamic URLs ~vscode-icons:file-type-codekit~]
<VPSwiper
  base-url="https://picsum.photos/id"
  :number-of-slides="10"
  :start-at="20"
  file-ext="/800/600"
  :pagination="{ type: 'fraction' }"
  effect="flip"
/>
```

```vue [Slides ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://picsum.photos/id/20/800/450',
    'https://picsum.photos/id/21/800/450',
    'https://picsum.photos/id/22/800/450',
    'https://picsum.photos/id/23/800/450',
    'https://picsum.photos/id/24/800/450',
    'https://picsum.photos/id/25/800/450',
    'https://picsum.photos/id/26/800/450',
    'https://picsum.photos/id/27/800/450',
    'https://picsum.photos/id/28/800/450',
    'https://picsum.photos/id/29/800/450',
    'https://picsum.photos/id/30/800/450',
  ]"
  :pagination="{ type: 'fraction' }"
  effect="flip"
/>
```

:::

::: warning
This example is a test using images from https://picsum.photos/
:::
