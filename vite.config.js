import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // This allows Vite to listen on all network interfaces
    port: 3000, // You can choose a different port if needed
  },
  plugins: [react()],
})
