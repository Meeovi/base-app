import {
  useLayers
} from 'nuxt-layers-utils'
import {
  fileURLToPath
} from 'node:url'
import {
  URL
} from 'node:url'

const layers = useLayers(__dirname, {
  commerce: 'layers/commerce-app',
  social: 'layers/social-app',
  lists: 'layers/lists-app',
  departments: 'layers/departments-app',
  auth: 'layers/auth-app',
  ui: 'layers/ui-app',
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
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap'
        }
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

  modules: ["@nuxt/image", '@nuxtjs/tailwindcss', "@storefront-ui/nuxt", 'vuetify-nuxt-module', '@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/i18n', "nuxt-security", '@maas/vue-equipment/nuxt', '@nuxtjs/mcp-toolkit'],

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

  mcp: {
    name: 'Meeovi MCP Server',
    version: '1.0.0',
  },

  vueEquipment: {
    plugins: ['MagicDrawer', 'MagicMenu', 'MagicModal', 'MagicCommand', 'MagicCookie', 'MagicDraggable', 'MagicMenu', 'MagicEmitter', 'MagicError', 'MagicMarquee', 'MagicPie', 'MagicNoise', 'MagicPlayer', 'MagicScroll', 'MagicToast'],
    composables: ['useCountdown', 'useScrollTo', 'useuseEasings', 'useMetaViewport', 'useScrollLockPadding'],
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

      directusGraphql: process.env.DIRECTUS_GRAPHQL,

      indexName: process.env.MEILISEARCH_INDEX_NAME,

      meilisearch: {
        host: process.env.MEILISEARCH_HOST,
        searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY,
        options: {
          primaryKey: 'id',
          keepZeroFacets: false,
          finitePagination: false
        },
      },

      // Minio
      minioEndpoint: process.env.MINIO_ENDPOINT,
      minioUser: process.env.MINIO_USER,
      minioPass: process.env.MINIO_PASS,

      // Supabase
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,

      // Commerce 
      commerceUrl: process.env.COMMERCE_STORE_URL,
      commerceGraphql: process.env.COMMERCE_GRAPHQL_URL,
      commerceApiToken: process.env.WEBSITE_TOKEN,

      // Google Tag Manager
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,

      // Stripe
      stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
      },

      // Paypal
      paypalClientId: process.env.PAYPAL_CLIENT_ID,
    },
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY
    }
  },

  build: {
    transpile: [
      'vuetify',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons"
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify']
    },
    resolve: {
      alias: {
        '@apollo/client/core': '@apollo/client',
        '@apollo/client/core/index.js': fileURLToPath(
          new URL('./shims/apollo-v4-compat.ts', import.meta.url)
        ),
      }
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
    storage: {
      redis: {
        driver: 'redis',
        port: 6379,
        host: process.env.REDIS_HOST || '',
        password: process.env.REDIS_PASSWORD || '',
      }
    }
  },

  compatibilityDate: '2025-02-22',
})