import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@icons": fileURLToPath(new URL("../../packages/icons", import.meta.url)),
      "@stores": fileURLToPath(
        new URL("../../packages/stores", import.meta.url),
      ),
      "@sounds": fileURLToPath(
        new URL("../../packages/sounds", import.meta.url),
      ),
      "@ui": fileURLToPath(new URL("../../packages/ui", import.meta.url)),
    },
  },
});
