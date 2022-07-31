import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://velnae.github.io/velnae-games/',
  plugins: [react()]
})
