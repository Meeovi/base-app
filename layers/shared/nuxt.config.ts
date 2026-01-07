import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  extends: [],
  alias: {},

  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      templateParams: {
        separator: '·',
      },
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: 'Shared Application for Meeovi Framework'
        }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-180x180.png' }
      ]
    }
  },

  css: [],

  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/mcp-toolkit',
    'nuxt-tiptap-editor'
  ],

  mcp: {
    name: 'Meeovi MCP Server',
    version: '1.0.0'
  },

  runtimeConfig: {
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY
    },
    public: {
      NUXT_PROJECT_ID: process.env.NUXT_PROJECT_ID,
      NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
      rocketChatUrl: process.env.NUXT_PUBLIC_ROCKETCHAT_URL,
      minioEndpoint: process.env.MINIO_ENDPOINT,
      minioUser: process.env.MINIO_USER,
      minioPass: process.env.MINIO_PASS,
      supabase: {
        url: process.env.SUPABASE_URL || '',
        key: process.env.SUPABASE_KEY || ''
      },
      commerceUrl: process.env.COMMERCE_STORE_URL,
      commerceGraphql: process.env.COMMERCE_GRAPHQL_URL,
      commerceApiToken: process.env.WEBSITE_TOKEN,
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,
      stripe: {
        key: process.env.STRIPE_PUBLISHABLE_KEY
      },
      paypalClientId: process.env.PAYPAL_CLIENT_ID
    },
    stripe: {
      key: process.env.STRIPE_SECRET_KEY
    }
  },

  image: {
    provider: 'directus',
    directus: {
      baseURL: `${process.env.DIRECTUS_URL}/assets/`
    }
  },

  nitro: {
    prerender: {
      routes: ['/assets/images/*']
    },
    compressPublicAssets: true,
    storage: {
      redis: {
        driver: 'redis',
        port: 6379,
        host: process.env.REDIS_HOST || '',
        password: process.env.REDIS_PASSWORD || ''
      }
    },
    experimental: {
      websocket: true
    }
  },

  compatibilityDate: '2025-02-22'
})
