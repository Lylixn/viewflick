import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  server: {
    host: true,
    port: 3000
  },
  adapter: node({
    mode: 'standalone',
  }),
  plugins: [{
    name: "astro-plugin-tailwindcss",
    options: {
      config: "./tailwind.config.js"
    }
  }],
  integrations: [tailwind()],
});