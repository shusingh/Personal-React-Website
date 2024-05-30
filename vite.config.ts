import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { resolve } from 'path';
import svgr from '@svgr/rollup';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  base: '/Personal-React-Website/',
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src'),
    },
  },
});
