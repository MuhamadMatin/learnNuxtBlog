// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image'],

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

  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
});
