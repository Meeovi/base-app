// https://nuxt.com/docs/api/configuration/nuxt-config
import {
  defineNuxtConfig
} from "nuxt/config"
import {
  resolve
} from 'path'

export default defineNuxtConfig({
  alias: {
    '#departments': resolve(__dirname, '../departments-app'),
    '#lists': resolve(__dirname, '../lists-app'),
    '#social': resolve(__dirname, '../social-app'),
    '#auth': resolve(__dirname, '../auth-app'),
    '#commerce': resolve(__dirname, '../commerce-app'),
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

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
        content: 'Search Application for Meeovi Framework'
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
        }
      ],
    },
  },

  runtimeConfig: {
    public: {
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

      // Search (Elasticsearch / Searchkit or MeiliSearch) - set at runtime or via environment
      search: {
        // Example: 'https://your-search-host:9243' or MeiliSearch host
        host: process.env.NUXT_PUBLIC_SEARCH_HOST,
        // Example: 'your_api_key'
        apiKey: process.env.NUXT_PUBLIC_SEARCH_API_KEY,
      },
    }
  }
})
