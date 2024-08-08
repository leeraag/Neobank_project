import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constant': path.resolve(__dirname, './src/constant'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@router': path.resolve(__dirname, './src/router'),
      // '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@UI': path.resolve(__dirname, './src/components/UI'),
    },
  },
  plugins: [react(), tsconfigPaths()],
})
