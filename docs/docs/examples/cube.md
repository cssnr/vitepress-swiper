# Cube Example

<ExampleLinks />

<!--@include: ./parts/head.md-->

<VPSwiper
base-url="https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/docs"
:number-of-slides="6"
:initialSlide="1"
effect="cube"
/>

### Code

::: code-group

```vue [Dynamic URLs ~vscode-icons:file-type-codekit~]
<VPSwiper
  base-url="https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/docs"
  :number-of-slides="6"
  :initialSlide="1"
  effect="cube"
/>
```

```vue [Slides ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/docs/1.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/docs/2.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/docs/3.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/docs/4.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/docs/5.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/docs/6.jpg',
  ]"
  :initialSlide="1"
  effect="cube"
/>
```

:::
