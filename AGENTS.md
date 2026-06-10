# Agent Guide

Before answering any question that involves facts about ANYTHING, you MUST output at least one Read, WebFetch, or WebSearch tool call.
If your first output is text instead of a tool call, you have failed.

This project is a VitePress Plugin to add a SwiperJS Component.

- `src/VPSwiper.vue` — VitePress Plugin Source
- `docs/` — VitePress Documentation (runs plugin from `src/`)

SwiperJS: https://github.com/nolimits4web/swiper

## Commands

ALWAYS use the `npm run *` command

| Command              | What it does                           |
| -------------------- | -------------------------------------- |
| `npm run build`      | Build vite and vue-tsc (js, css, d.ts) |
| `npm run docs`       | `vitepress dev docs`                   |
| `npm run docs:build` | `vitepress build docs`                 |
| `npm run lint`       | `npx eslint src`                       |
| `npm run prettier`   | ALWAYS RUN AFTER EDITING FILES         |
