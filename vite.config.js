// vite.config.js (paste into project root)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // forward any /api requests to backend on port 5000
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        // logLevel: 'debug' // uncomment for verbose proxy logs
      }
    }
  }
});
