import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild:{
    logOverride:{"this-is-fine" : "silent"}
  },
  server: {
    cors: {
      origin: process.env.VITE_CORS_ORIGIN || true,
      methods: ['GET', 'POST']
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
