// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'title',
      charset: 'utf-8',
      meta: [],
      link: [],
    },
  },

  content: {},
});
