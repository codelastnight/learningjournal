import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
// https://astro.build/config
export default defineConfig({
  site: 'https://codelastnight.github.io',
  base: '/learningjournal',
  // image: {
  //   service: passthroughImageService(),
  // },
  markdown: {
    // Applied to .md and .mdx files
    rehypePlugins: [
      rehypeAutolinkHeadings,
      [rehypeSlug, { behavior: 'append' }],
      [rehypeToc, { headings: ['h1', 'h2'] }],
    ]
  },
  integrations: [mdx(), sitemap(), tailwind()]
});
