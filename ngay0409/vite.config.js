import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2' // Đổi sang plugin Vue 2

export default defineConfig({
  plugins: [
    createVuePlugin() // Dùng plugin Vue 2
  ],
})