import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  // Base path for GitHub Pages deployment: https://<user>.github.io/<repo>/
  // Adjust if your repo name changes
  base: process.env.VITE_BASE ?? '/MasteryHub/',
})
