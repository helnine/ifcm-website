import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cache-Control': 'no-cache',
    },
  },
  optimizeDeps: {
    include: ['@fontsource/cera-round'],
  },
  assetsInclude: ['**/*.woff2'],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})