import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://efrencodes.github.io/gh-vuejs-vite/",
  plugins: [vue()],
});
