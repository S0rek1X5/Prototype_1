import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/Prototype_1/',
  vite: {
    plugins: [tailwindcss()]
  }
});