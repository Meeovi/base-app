import {
  useLayers
} from 'nuxt-layers-utils'

const layers = useLayers(__dirname, {
  commerce: '../commerce-app',
  social: '../social-app',
  lists: '../lists-app',
  departments: '../departments-app',
})

export default defineNuxtConfig({
  extends: layers.extends(),
  alias: layers.alias('#'),

  css: [],

  modules: [
    "@nuxt/image",
    "@sidebase/nuxt-auth",
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@maas/vue-equipment/nuxt',
    '@nuxtjs/mcp-toolkit',
    'nuxt-tiptap-editor',
  ],

  auth: {
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'keycloak',
      addDefaultCallbackUrl: true
    },
    globalAppMiddleware: {
      isEnabled: false
    },
    baseURL: `http://localhost:${process.env.PORT || 3000}/api/auth`
  },

  mcp: {
    name: 'Meeovi MCP Server',
    version: '1.0.0',
  },

  vueEquipment: {
    plugins: ['MagicDrawer', 'MagicMenu', 'MagicModal', 'MagicCommand', 'MagicCookie', 'MagicDraggable', 'MagicMenu', 'MagicEmitter', 'MagicError', 'MagicMarquee', 'MagicPie', 'MagicNoise', 'MagicPlayer', 'MagicScroll', 'MagicToast'],
    composables: ['useCountdown', 'useScrollTo', 'useuseEasings', 'useMetaViewport', 'useScrollLockPadding'],
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

  build: {},

  vite: {},

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