import { defineConfig } from "vite";
import { warmup } from "vite-plugin-warmup";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  plugins: [
    svelte(),
    warmup({
      // warm up the files and its imported JS modules recursively
      clientFiles: ["./src/**/*.cy.ts", "./cypress/support/component.ts"],
    }),
  ],
});
