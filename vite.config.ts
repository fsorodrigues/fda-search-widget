import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") return { plugins: [svelte()] };
  else
    return { base: "/fda-search-widget/", plugins: [svelte()] };
});
