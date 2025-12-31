// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils', 'nuxt-authorization'],

  auth: {
    webAuthn: true
  },

  runtimeConfig: {
    session: {
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }
  },

  nitro: {
    experimental: {
      websocket: true
    }
  }
})