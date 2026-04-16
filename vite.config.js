import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- 1. Agrega esta línea

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- 2. Agrega esto aquí
  ],
})
