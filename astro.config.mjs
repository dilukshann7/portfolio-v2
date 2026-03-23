// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

const site =
  process.env.SITE_URL ||
  process.env.PUBLIC_SITE_URL ||
  (process.env.CF_PAGES_URL
    ? `https://${process.env.CF_PAGES_URL}`
    : undefined);

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [react()],
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Relationship of mélodrame",
      cssVariable: "--font-melodrame",
      options: {
        variants: [
          {
            src: ["./src/assets/font/font.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      target: "es2022",
    },
  },

  adapter: cloudflare(),
});
