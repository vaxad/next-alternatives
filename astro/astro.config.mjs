import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), prefetch()],
   experimental: {
   assets: true
  },
    image: {
    service: "astro/assets/services/sharp",
  },

});
