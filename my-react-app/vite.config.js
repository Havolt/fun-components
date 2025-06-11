import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Makes test utilities like 'expect', 'it' available globally
    environment: 'jsdom', // JSDOM environment for browser-like testing
    setupFiles: './src/setupTests.js', // Test setup file
    css: false, // Disable CSS processing for tests if you don't need it
    coverage: {
      reporter: ['text', 'json', 'html'], // Configure coverage report formats
    },
  },
});