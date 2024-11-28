import path from 'path';
import { defineConfig } from 'vitest/config';

console.log(__dirname, 'dirname');

export default defineConfig({
    test: {
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname, 
      },
      globals: true,
      environment: 'jsdom',
      setupFiles: path.resolve(__dirname, './tests/setup.ts'),
    },
});
