import {
  resolve
} from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils', 'nuxt-authorization'],

  auth: {
    webAuthn: true
  },

  runtimeConfig: {
    appName: process.env.NUXT_PUBLIC_SITE_NAME || 'Meeovi',
    appSite: process.env.NUXT_PUBLIC_SITE_URL || '.com',
    directus: {
      url: process.env.DIRECTUS_URL || '',
      adminToken: process.env.DIRECTUS_ADMIN_TOKEN || '',
      // Directus OAuth config (if using Directus as OAuth provider)
      clientId: process.env.DIRECTUS_CLIENT_ID || '',
      clientSecret: process.env.DIRECTUS_CLIENT_SECRET || '',
    },
    mail: {
      key: process.env.RESEND_API_KEY || '',
      from: process.env.MAIL_FROM || 'noreply@meeovi.com',
    },
    session: {
      password: process.env.NUXT_SESSION_PASSWORD || '',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    },
    public: {
      directus: {
        url: process.env.DIRECTUS_URL || '',
      },
    },
  },

  nitro: {
    experimental: {
      websocket: true
    }
  }
})