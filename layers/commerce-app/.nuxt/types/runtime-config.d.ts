import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   turnstile: {
      secretKey: string,
   },

   stripe: {
      key: string,

      options: any,
   },

   paypal: {
      clientId: string,

      clientSecret: string,

      sandbox: boolean,
   },

   nitro: {
      envPrefix: string,
   },

   commerce: {
      magentoToken: any,
   },
  }
  interface SharedPublicRuntimeConfig {
   stripe: {
      manualClientLoad: boolean,

      key: string,

      options: any,
   },

   directus: {
      url: string,

      nuxtBaseUrl: string,

      auth: {
         email: string,

         password: string,

         token: string,

         enabled: boolean,

         enableGlobalAuthMiddleware: boolean,

         userFields: Array<string>,

         redirect: {
            login: string,

            logout: string,

            home: string,

            resetPassword: string,

            callback: string,
         },
      },
   },

   commerce: {
      magentoEndpoint: any,

      magentoToken: string,

      provider: string,
   },

   ups: {
      apiKey: string,

      apiUrl: string,
   },

   fedex: {
      apiKey: string,

      apiUrl: string,
   },

   dhl: {
      apiKey: string,

      apiUrl: string,
   },

   payments: {
      enabledProviders: Array<string>,

      defaultProvider: string,

      currency: string,
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }