import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  css: ["./assets/css/main.css", "./assets/css/icons.css"],
  fonts: {
    families: [
      {
        name: "Chakra Petch",
        weights: [400, 700],
      },
    ],
  },
  alias: {
    "@ui": fileURLToPath(new URL("./components/ui", import.meta.url)),
    "@widgets": fileURLToPath(new URL("./components/widgets", import.meta.url)),
    "@types": fileURLToPath(new URL("./types", import.meta.url)),
    "@assets": fileURLToPath(new URL("./assets", import.meta.url)),
  },
});
