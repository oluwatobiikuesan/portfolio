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
      origin: "https://xdoodle.onrender.com",
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
