import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    vue(),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "app", "javascript"),
      },
    ],
    extensions: ['.vue', '.json', '.js'],
  },
})
