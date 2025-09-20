# Coverflow Example

<ExampleLinks />

<!--@include: ./parts/head.md-->

<VPSwiper
base-url="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs"
:number-of-slides="22"
:breakpoints="{ 680: { slidesPerView: 3 } }"
:pagination="{ type: 'fraction' }"
effect="coverflow"
:coverflow-effect="{ slideShadows: false }"
height="480px"
/>

### Code

::: code-group

```vue [Dynamic URLs ~vscode-icons:file-type-codekit~]
<VPSwiper
  base-url="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs"
  :number-of-slides="22"
  :breakpoints="{ 680: { slidesPerView: 3 } }"
  :pagination="{ type: 'fraction' }"
  effect="coverflow"
  :coverflow-effect="{ slideShadows: false }"
  height="480px"
/>
```

```vue [Slides ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/1.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/2.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/3.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/4.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/5.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/6.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/7.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/8.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/9.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/10.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/11.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/12.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/13.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/14.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/15.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/16.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/17.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/18.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/19.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/20.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/21.jpg',
    'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs/22.jpg',
  ]"
  :breakpoints="{ 680: { slidesPerView: 3 } }"
  :pagination="{ type: 'fraction' }"
  effect="coverflow"
  :coverflow-effect="{ slideShadows: false }"
  height="480px"
/>
```

:::
