// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/supabase",
    "nuxt-icon",
  ],
  components: [
    {
      path: "~/components/ui",
      extensions: [".vue"],
      pathPrefix: false,
    },
    {
      path: "~/components",
      extensions: [".vue"],
      pathPrefix: false,
    },
  ],
  supabase: {
    redirectOptions: {
      login: "/auth" /**set login */,
      callback: "/confirm",
      exclude: [
        "/",
      ] /**all pages are protected until login, but here we can add excluded that show either way
      i excluded only homepage "/" */,
    },
  },
});
