import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://codelastnight.github.io',
  base: '/learningjournal',
  integrations: [mdx(), sitemap(), tailwind()]
});