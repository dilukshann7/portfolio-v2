// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
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
});
