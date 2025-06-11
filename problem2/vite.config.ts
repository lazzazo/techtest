import { defineConfig, UserConfig } from 'vite'; // Variant 2
import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  plugins: [react(), tsConfigPaths()],
  server: {
    open: true, 
    port: 3000,
  },
  test: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
    environment: 'jsdom',
    include: ['**/*.test.*', '**/*.spec.*'],
    globals: true,
    setupFiles: ['./setup-tests.ts'],
  },
} as UserConfig);
