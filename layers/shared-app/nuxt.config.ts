import {
  useLayers
} from 'nuxt-layers-utils'

const layers = useLayers(__dirname, {
  commerce: '../commerce-app',
  social: '../social-app',
  lists: '../lists-app',
  departments: '../departments-app',
  auth: '../auth-app',
  search: '../search-app'
})

export default defineNuxtConfig({
  extends: layers.extends(),
  alias: layers.alias('#'),

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
        content: 'Shared Application for Meeovi Framework'
      }, ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        }
      ],
    },
  },

  css: [],

  modules: [
    "@nuxt/image",
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/mcp-toolkit',
    'nuxt-tiptap-editor',
    'nuxt-og-image'
  ],

  mcp: {
    name: 'Meeovi MCP Server',
    version: '1.0.0',
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

      // Rocket.chat
      rocketChatUrl: process.env.NUXT_PUBLIC_ROCKETCHAT_URL,

      // Minio
      minioEndpoint: process.env.MINIO_ENDPOINT,
      minioUser: process.env.MINIO_USER,
      minioPass: process.env.MINIO_PASS,

      // Supabase
      supabase: {
        url: process.env.SUPABASE_URL || '',
        key: process.env.SUPABASE_KEY || '',
      },

      // Commerce
      commerceUrl: process.env.COMMERCE_STORE_URL,
      commerceGraphql: process.env.COMMERCE_GRAPHQL_URL,
      commerceApiToken: process.env.WEBSITE_TOKEN,

      // Google Tag Manager
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,

      // Stripe
      stripe: {
        key: process.env.STRIPE_PUBLISHABLE_KEY
      },

      // Paypal
      paypalClientId: process.env.PAYPAL_CLIENT_ID,
    },
    stripe: {
      key: process.env.STRIPE_SECRET_KEY
    }
  },

  // Image Configuration - https://image.nuxt.com/providers/directus
  image: {
    provider: 'directus',
    directus: {
      baseURL: `${process.env.DIRECTUS_URL}/assets/`,
    },
  },

  // OG Image Configuration - https://nuxtseo.com/og-image/getting-started/installation
  ogImage: {
    defaults: {
      component: 'OgImageTemplate',
      width: 1200,
      height: 630,
    },
    // @TODO: Fix font families for OG Image
    // fonts: formatFonts(fontFamilies),
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
    },
    experimental: {
      websocket: true
    }
  },
  compatibilityDate: '2025-02-22',
})
