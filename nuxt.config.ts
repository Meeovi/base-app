import {
  defineNuxtConfig
} from 'nuxt/config'
import {
  useLayers
} from 'nuxt-layers-utils'

const layers = useLayers(__dirname, {
  shared: 'layers/shared-app',
  commerce: 'layers/commerce-app',
  departments: 'layers/departments-app',
  lists: 'layers/lists-app',
  sellerDashboard: 'layers/seller-dashboard-app',
  social: 'layers/social-app',
})

export default defineNuxtConfig({
  extends: layers.extends(),
  alias: layers.alias('#'),

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
        content: 'Base Application for Meeovi Framework'
      }, ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css'
        },
      ],
    },
  },

  appConfig: {
    titleSuffix: '',
  },

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    //'@fortawesome/fontawesome-svg-core/styles.css',
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
  ],

  modules: [
    "@nuxt/image",
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    'vuetify-nuxt-module',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    "nuxt-security",
    '@nuxtjs/seo',
  ],

  security: {
    headers: {
      contentSecurityPolicy: false,
      strictTransportSecurity: {
        maxAge: 0
      },
      crossOriginOpenerPolicy: false,
      crossOriginEmbedderPolicy: false,
      permissionsPolicy: false
    }
  },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'fa-svg',
        svg: {
          fa: {
            libraries: [
              [ /* default export? */ false, /* export name */ 'fas', /* library */ '@fortawesome/free-solid-svg-icons']
            ]
          }
        },
        sets: [{
          name: 'mdi',
          cdn: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
        }]
      }
    }
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en-GB",
    detectBrowserLanguage: false,
    langDir: "./src/langs/",
    vueI18n: "./config",
    locales: [{
        code: "en-GB",
        language: "en-GB",
        file: "en-GB.ts",
      },
      {
        code: "pl-PL",
        language: "pl-PL",
        file: "pl-PL.ts",
      },
      {
        code: "testde",
        language: "de-DE",
        file: "de-DE.ts",
        localeId: "c19b753b5f2c4bea8ad15e00027802d4",
      },
    ],
  },

  runtimeConfig: {
    // Cloudflare Turnstile
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    public: {
      // ShareThis
      NUXT_PROJECT_ID: process.env.NUXT_PROJECT_ID,
      NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,

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
      
      // Google Tag Manager
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,

    },
  },

  build: {
    transpile: [
      'vuetify',
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify']
    },
    logLevel: 'info',
    plugins: []
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
} as any)