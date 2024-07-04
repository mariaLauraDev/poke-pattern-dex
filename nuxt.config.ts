// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/assets/css/main.scss'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: [
    '@pinia/nuxt',
  ],
  compatibilityDate: '2024-07-03',
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