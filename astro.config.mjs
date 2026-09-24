import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://S0rek1X5.github.io', 
  base: '/Prototype_1/',
  vite: {
    plugins: [tailwindcss()]
  }
});