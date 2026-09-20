import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const isProduction = command === 'build' || mode === 'production';
  return {
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || (isProduction ? '/Mediscan-AI/' : '/'),
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true
        }
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    }
  };
});
