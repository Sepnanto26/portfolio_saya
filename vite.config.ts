import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/portfolio_saya/", // Sesuaikan dengan NAMA REPOSITORY kamu di GitHub
  plugins: [react()],
})