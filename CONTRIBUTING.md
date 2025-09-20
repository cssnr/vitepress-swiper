# Contributing

- [Workflow](#Workflow)
- [Package](#Package)
- [Documentation](#Documentation)

Contributions are welcome for both the [Package](#package) and the [Documentation](#documentation) site.

You can follow the same [Workflow](#workflow) to make contributions to both.

## Workflow

1. Fork the repository.
2. Create a branch in your fork.
3. Make your changes to the [Package](#package) or [Docs](#documentation).
4. Create a PR back to the source repository.
5. Verify all the checks are passing.
6. Complete any applicable tasks.
7. Make sure to keep your branch up-to-date.

## Package

Everything is in the [src](src) directory. To get started install the package.

```shell
npm install
```

The [Documentation](#documentation) site runs the [VPSwiper.vue](https://github.com/cssnr/vitepress-swiper/blob/master/src/VPSwiper.vue) file from source.
This is the easiest way to test changes live using vite hot module reload support.

Alternatively, you can use either [npm link](https://docs.npmjs.com/cli/v11/commands/npm-link) or install it locally with:

```shell
npm install /path/to/cloned/repository
```

_Note this is the path that contains the [package.json](package.json) file._

When you use `npm link` or install from file you need to re-build your changes to see them.

```shell
npm run build
```

## Documentation

These [docs](docs) are **written in plain text** using Markdown and built with [VitePress](https://vitepress.dev/).

| Location                                                             | Description               |
| -------------------------------------------------------------------- | ------------------------- |
| [docs](docs)                                                         | Documentation Root        |
| [docs/public](docs/public)                                           | Static Files Root         |
| [docs/.vitepress](docs/.vitepress)                                   | VitePress Root            |
| [docs/.vitepress/config.mts](docs/.vitepress/config.mts)             | VitePress Config File     |
| [docs/.vitepress/theme/index.js](docs/.vitepress/theme/index.js)     | VitePress Theme File      |
| [docs/.vitepress/theme/custom.css](docs/.vitepress/theme/custom.css) | VitePress Global CSS File |
| [docs/.vitepress/theme/components](docs/.vitepress/theme/components) | VitePress Components Root |

To get started, clone the repository, install the project, and generate the contributors file.

```shell
npm install
npm run get-contributors
npm run docs
```

The site should now be available at: http://localhost:5173/

- [VitePress CLI Reference](https://vitepress.dev/reference/cli)
- [VitePress Markdown Reference](https://vitepress.dev/guide/markdown)
