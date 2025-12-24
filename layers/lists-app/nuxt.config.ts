import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    '#departments': resolve(__dirname, '../departments-app'),
    '#commerce': resolve(__dirname, '../commerce-app'),
    '#social': resolve(__dirname, '../social-app'),
  },

  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: false
  },

  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      templateParams: {
        separator: '·',
      },
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{
        name: 'description',
        content: 'Lists App for the M Framework'
      }, ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        },
      ],
      script: [{
        //src: 'https://static.elfsight.com/platform/platform.js'
      }]
    },
  },

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
  ],

  modules: [],

  runtimeConfig: {
    public: {
      // Directus
      directus: {
        url: process.env.DIRECTUS_URL,
        nuxtBaseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3011',
        auth: {
          email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
          password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
          token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
          enabled: true,
          enableGlobalAuthMiddleware: false, // Enable auth middleware on every page
          userFields: ['*'], // Select user fields
          redirect: {
            login: '/auth/login', // Path to redirect when login is required
            logout: '/', // Path to redirect after logout
            home: '/', // Path to redirect after successful login
            resetPassword: '/auth/reset-password', // Path to redirect for password reset
            callback: '/auth/callback', // Path to redirect after login with provider
          },
        }
      },
    },
  },

  // Build configuration
  build: {},
})