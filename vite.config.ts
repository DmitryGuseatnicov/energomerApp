import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/energomerApp',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/style/mixins.scss";         
          @import "@/assets/style/animations.scss";         
        `,
      },
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgProps: {
          width: '24px',
          height: '24px',
        },
      },
    }),
  ],
});
