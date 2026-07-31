import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // This is a GitHub project page, so production assets live below the repo name.
  // Keeping the development server at the root preserves the usual local URL.
  base: command === 'build' ? '/PCChainLink.github.io/' : '/',
}));
