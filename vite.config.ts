import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    hmr: true,
    open: true,
    cors: true,
    port: 8080,
    proxy: {
        "/api": {
            target: "http://localhost",
            changeOrigin: true,
        },
    },
},
  plugins: [react()]
})
