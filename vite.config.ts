import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
    plugins: [vue(), RubyPlugin()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'app', 'javascript'),
            },
        ],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                sourceMap: false,
                additionalData(source, fp) {
                    if (fp.endsWith('variables.scss')) return source

                    return `@import "@/assets/css/_variables.scss"; ${source}`
                },
            },
        },
    },
})
