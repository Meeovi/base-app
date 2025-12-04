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
      secretKey: string,
   },

   nitro: {
      envPrefix: string,
   },

   vuefire: {
      admin: any,

      auth: {
         enabled: boolean,

         errorMap: string,

         persistence: Array<string>,

         popupRedirectResolver: string,

         sessionCookie: boolean,
      },
   },

   private: {
      basicAuth: boolean,
   },

   security: {
      strict: boolean,

      headers: {
         crossOriginResourcePolicy: string,

         crossOriginOpenerPolicy: boolean,

         crossOriginEmbedderPolicy: boolean,

         contentSecurityPolicy: boolean,

         originAgentCluster: string,

         referrerPolicy: string,

         strictTransportSecurity: {
            maxAge: number,

            includeSubdomains: boolean,
         },

         xContentTypeOptions: string,

         xDNSPrefetchControl: string,

         xDownloadOptions: string,

         xFrameOptions: string,

         xPermittedCrossDomainPolicies: string,

         xXSSProtection: string,

         permissionsPolicy: boolean,
      },

      requestSizeLimiter: {
         maxRequestSizeInBytes: number,

         maxUploadFileRequestInBytes: number,

         throwError: boolean,
      },

      rateLimiter: {
         tokensPerInterval: number,

         interval: number,

         headers: boolean,

         driver: {
            name: string,
         },

         whiteList: any,

         ipHeader: any,

         throwError: boolean,
      },

      xssValidator: {
         methods: Array<string>,

         throwError: boolean,
      },

      corsHandler: {
         origin: string,

         methods: Array<string>,

         preflight: {
            statusCode: number,
         },
      },

      allowedMethodsRestricter: {
         methods: string,

         throwError: boolean,
      },

      hidePoweredBy: boolean,

      enabled: boolean,

      csrf: boolean,

      nonce: boolean,

      removeLoggers: boolean,

      ssg: {
         meta: boolean,

         hashScripts: boolean,

         hashStyles: boolean,

         nitroHeaders: boolean,

         exportToPresets: boolean,
      },

      sri: boolean,
   },

   mcp: {
      enabled: boolean,

      route: string,

      browserRedirect: string,

      name: string,

      version: string,

      dir: string,
   },
  }
  interface SharedPublicRuntimeConfig {
   authSecret: string,

   jwtSecret: string,

   firebaseApiKey: string,

   firebaseAuthDomain: string,

   firebaseProjectId: string,

   firebaseStorageBucket: string,

   firebaseMessagingSenderId: string,

   firebaseAppId: string,

   measurementId: string,

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

   NUXT_PROJECT_ID: string,

   NUXT_PUBLIC_SITE_URL: string,

   directusGraphql: string,

   indexName: string,

   meilisearch: {
      host: string,

      searchApiKey: string,

      options: {
         primaryKey: string,

         keepZeroFacets: boolean,

         finitePagination: boolean,
      },
   },

   minioEndpoint: string,

   minioUser: string,

   minioPass: string,

   gtagId: string,

   stripe: {
      publishableKey: string,
   },

   paypalClientId: string,

   vuefire: {
      config: {
         apiKey: string,

         authDomain: string,

         projectId: string,

         storageBucket: string,

         messagingSenderId: string,

         appId: string,

         measurementId: string,
      },

      appCheck: {
         provider: string,

         key: string,

         isTokenAutoRefreshEnabled: boolean,

         debug: string,
      },
   },

   i18n: {
      baseUrl: string,

      defaultLocale: string,

      rootRedirect: any,

      redirectStatusCode: number,

      skipSettingLocaleOnNavigate: boolean,

      locales: Array<{

      }>,

      detectBrowserLanguage: boolean,

      experimental: {
         localeDetector: string,

         typedPages: boolean,

         typedOptionsAndMessages: boolean,

         alternateLinkCanonicalQueries: boolean,

         devCache: boolean,

         cacheLifetime: any,

         stripMessagesPayload: boolean,

         preload: boolean,

         strictSeo: boolean,

         nitroContextDetection: boolean,
      },

      domainLocales: {
         "en-GB": {
            domain: string,
         },

         "pl-PL": {
            domain: string,
         },

         testde: {
            domain: string,
         },
      },
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