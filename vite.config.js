import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const name = 'VPSwiper'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, `src/${name}.vue`),
            name,
            fileName: (format) => `${name}.${format}.js`,
        },
        cssCodeSplit: true,
        rollupOptions: {
            external: ['vue', 'swiper', 'swiper/vue', 'swiper/modules'],
            output: {
                globals: {
                    vue: 'Vue',
                    swiper: 'Swiper',
                    'swiper/vue': 'Swiper',
                    'swiper/modules': 'Swiper',
                },
            },
        },
    },
})
