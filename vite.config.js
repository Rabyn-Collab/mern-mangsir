import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'dist',
  },
  base: './', // Use `./` if you get path errors
  plugins: [react()],
});
