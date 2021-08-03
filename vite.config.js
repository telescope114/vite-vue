import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { developmentURL, productionURL } from './src/project.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: '1428',
    open: true,
    proxy: {
      '^/api': {
        // 开发
        target: developmentURL, // 后端地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/pro': productionURL
    }
  }
})
