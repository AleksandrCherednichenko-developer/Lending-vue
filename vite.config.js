import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    base: '/Lending-vue/',
    plugins: [
        vue(),
        svgLoader({
            svgoConfig: {
                multipass: true,
            },
        }),
    ],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                            @use 'sass:math';
                            @import "@/assets/css/variables-scss";
                            @import "@/assets/css/functions";
                            @import "@/assets/css/mixins";
                         `,
            },
        },
    },
});
