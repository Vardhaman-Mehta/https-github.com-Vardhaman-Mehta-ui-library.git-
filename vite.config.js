import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ui-library',
      formats: ['es', 'cjs'], // Output ES modules and CommonJS
      fileName: (format) => `ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Externalize peer dependencies
    },
  },
});
