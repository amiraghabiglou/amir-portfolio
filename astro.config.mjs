import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://amiraghabiglou.github.io',
  base: '/amir-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});