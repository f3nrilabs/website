// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static site. `npm run build` writes to dist/, which the deploy workflow ships to the VPS.
export default defineConfig({
  site: "https://f3nri.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap()],
  // Code blocks take their colors from the --astro-code-* tokens in src/styles/tokens.css.
  markdown: { shikiConfig: { theme: "css-variables" } },
});
