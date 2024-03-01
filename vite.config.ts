import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),vercel()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        Boat: './Charters.html',
        Charters: './Boat.html'
      }
    }
  },
  base: process.env.VITE_BASE_PATH || '/MissSiennaSite',
})
