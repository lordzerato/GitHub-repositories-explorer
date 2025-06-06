import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/GitHub-repositories-explorer/',
  plugins: [react()]
})
