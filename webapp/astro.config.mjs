import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  server: {
    host: true,
    port: 3000
  },
  adapter: node({
    mode: 'middleware'
  }),
  plugins: [{
    name: "astro-plugin-tailwindcss",
    options: {
      config: "./tailwind.config.js"
    }
  }],
  integrations: [tailwind({
    configFile: './tailwind.config.mjs'
  }), preact({
    include: ['**/preact/*']
  }), react({
    include: ['**/react/*']
  }), mdx()]
});