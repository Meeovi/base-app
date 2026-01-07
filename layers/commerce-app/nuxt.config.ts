import {
  defineNuxtConfig
} from "nuxt/config"

export default defineNuxtConfig({
  extends: ['../shared-app'],

  experimental: {
    watcher: 'parcel'
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
        content: 'Commerce App for the M Framework'
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
    },
  },

  appConfig: {
    titleSuffix: '',
  },

  css: [],

  modules: [
    '@unlok-co/nuxt-stripe',
  ],

  commerce: {
    provider: 'magento', // or 'directus'
  },

  runtimeConfig: {
    // Cloudflare Turnstile
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    // Server
    stripe: {
      key: process.env.STRIPE_SECRET_KEY,
      options: {},
    },
    // Client
    public: {
      stripe: {
        key: process.env.STRIPE_PUBLISHABLE_KEY,
        options: {},
      },
      // Directus
      directus: {
        url: process.env.DIRECTUS_URL,
        nuxtBaseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
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

      // Commerce
      commerce: {
        magentoEndpoint: process.env.MAGE_MAGENTO_GRAPHQL_URL || '',
        magentoToken: process.env.MAGE_MAGENTO_TOKEN || '',
      },

      ups: {
        apiKey: process.env.UPS_API_KEY,
        apiUrl: process.env.UPS_API_URL || 'https://onlinetools.ups.com/api'
      },

      fedex: {
        apiKey: process.env.FEDEX_API_KEY,
        apiUrl: process.env.FEDEX_API_URL
      },

      dhl: {
        apiKey: process.env.DHL_API_KEY,
        apiUrl: process.env.DHL_API_URL
      },

      payments: {
        enabledProviders: process.env.PAYMENT_PROVIDERS?.split(',') || ['stripe', 'offline'],
        defaultProvider: process.env.DEFAULT_PAYMENT_PROVIDER || 'stripe',
        currency: process.env.DEFAULT_CURRENCY || 'USD'
      },
    },
    paypal: {
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
      sandbox: process.env.PAYPAL_SANDBOX === 'true'
    },
  },

  build: {},

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    logLevel: 'info'
  },

  nitro: {
    prerender: {
      routes: [
        '/assets/images/*',
      ]
    },
    compressPublicAssets: true,
  },

  compatibilityDate: '2025-02-22',
})
