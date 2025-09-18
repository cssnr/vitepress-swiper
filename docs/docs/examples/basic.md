# Basic Example

<ExampleLinks />

<!--@include: ./parts/head.md-->

<VPSwiper
base-url="https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs"
:number-of-slides="8"
:pagination="{ clickable: true }"
/>

### Code

::: code-group

```vue [Dynamic URLs ~vscode-icons:file-type-codekit~]
<VPSwiper
  base-url="https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs"
  :number-of-slides="8"
  :pagination="{ clickable: true }"
/>
```

```vue [Slides ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs/1.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs/2.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs/3.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs/4.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs/5.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs/6.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs/7.jpg',
    'https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs/8.jpg',
  ]"
  :pagination="{ clickable: true }"
/>
```

:::
