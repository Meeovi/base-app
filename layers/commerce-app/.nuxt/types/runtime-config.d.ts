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

   paypal: {
      clientId: string,

      clientSecret: string,

      sandbox: boolean,
   },

   stripe: {
      key: any,

      options: any,

      secretKey: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface SharedPublicRuntimeConfig {
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

   commerceUrl: string,

   commerceGraphql: string,

   commerceApiToken: string,

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

   stripe: {
      manualClientLoad: boolean,

      key: any,

      options: any,

      publishableKey: string,
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