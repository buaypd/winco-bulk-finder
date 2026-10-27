import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/products': {
        target: 'http://localhost:3050',
        changeOrigin: true,
      },
    },
  },
});