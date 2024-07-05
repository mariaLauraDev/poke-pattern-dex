// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "PokePatternDex",
      htmlAttrs: {
        lang: "pt-BR",
      },
    },
  },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: [
    '~/assets/css/main.scss',
    'vuetify/lib/styles/main.sass',
    "@mdi/font/css/materialdesignicons.css"
  ],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    //...
  ],
  compatibilityDate: '2024-07-03',
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  googleFonts: {
    families: {
      Quicksand: [400, 500, 700],
      "Cutive Mono": true,
      "Dancing Script": true,
      "DM Serif Display": true,
      Pacifico: true,
      Roboto: [400, 500, 700],
      "Rubik Mono One": true,
      "Zilla Slab": true,
      Oswald: true,
      Bangers: true,
      "Jacquard 24": true,
      "Bebas Neue": true,
      Anton: true,
      Lobster: true,
      Acme: true,
      Khand: true,
    },
  },
  tailwindcss: {
    configPath: "tailwind.config",
  },
})


// import { defineNuxtConfig } from 'nuxt';

// export default defineNuxtConfig({
//   css: ['~/styles/main.css'],
//   buildModules: [
//     '@nuxtjs/tailwindcss',
//     '@pinia/nuxt',
//     '@nuxt/typescript-build'
//   ],
//   modules: []
// });