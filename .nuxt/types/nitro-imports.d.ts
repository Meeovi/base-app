declare global {
  const __buildAssetsURL: typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/utils/paths').buildAssetsURL
  const __publicAssetsURL: typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/utils/paths').publicAssetsURL
  const allow: typeof import('../../node_modules/nuxt-authorization/dist/runtime/ability').allow
  const allows: typeof import('../../node_modules/nuxt-authorization/dist/runtime/server/utils/bouncer').allows
  const appendCorsHeaders: typeof import('../../node_modules/h3').appendCorsHeaders
  const appendCorsPreflightHeaders: typeof import('../../node_modules/h3').appendCorsPreflightHeaders
  const appendHeader: typeof import('../../node_modules/h3').appendHeader
  const appendHeaders: typeof import('../../node_modules/h3').appendHeaders
  const appendResponseHeader: typeof import('../../node_modules/h3').appendResponseHeader
  const appendResponseHeaders: typeof import('../../node_modules/h3').appendResponseHeaders
  const asSitemapUrl: typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/server/composables/asSitemapUrl').asSitemapUrl
  const assertMethod: typeof import('../../node_modules/h3').assertMethod
  const auth: typeof import('../../layers/auth-app/server/utils/auth').auth
  const authorize: typeof import('../../node_modules/nuxt-authorization/dist/runtime/server/utils/bouncer').authorize
  const cacheClient: typeof import('../../layers/auth-app/server/utils/drivers').cacheClient
  const cachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').cachedEventHandler
  const cachedFunction: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').cachedFunction
  const callNodeListener: typeof import('../../node_modules/h3').callNodeListener
  const clearResponseHeaders: typeof import('../../node_modules/h3').clearResponseHeaders
  const clearSession: typeof import('../../node_modules/h3').clearSession
  const clearUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session').clearUserSession
  const createApp: typeof import('../../node_modules/h3').createApp
  const createAppEventHandler: typeof import('../../node_modules/h3').createAppEventHandler
  const createBetterAuth: typeof import('../../layers/auth-app/server/utils/auth').createBetterAuth
  const createDirectusUserClient: typeof import('../../layers/shared-app/server/utils/directus').createDirectusUserClient
  const createError: typeof import('../../node_modules/h3').createError
  const createEvent: typeof import('../../node_modules/h3').createEvent
  const createEventStream: typeof import('../../node_modules/h3').createEventStream
  const createItem: typeof import('../../layers/shared-app/server/utils/directus-server').createItem
  const createRouter: typeof import('../../node_modules/h3').createRouter
  const createSitePathResolver: typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/composables/utils').createSitePathResolver
  const defaultContentType: typeof import('../../node_modules/h3').defaultContentType
  const defineAbility: typeof import('../../node_modules/nuxt-authorization/dist/runtime/ability').defineAbility
  const defineAppConfig: typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/utils/config').defineAppConfig
  const defineCachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').defineCachedEventHandler
  const defineCachedFunction: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').defineCachedFunction
  const defineEventHandler: typeof import('../../node_modules/h3').defineEventHandler
  const defineI18nConfig: typeof import('../../node_modules/@nuxtjs/i18n/dist/runtime/composables/shared').defineI18nConfig
  const defineI18nLocale: typeof import('../../node_modules/@nuxtjs/i18n/dist/runtime/composables/shared').defineI18nLocale
  const defineI18nLocaleDetector: typeof import('../../node_modules/@nuxtjs/i18n/dist/runtime/composables/server').defineI18nLocaleDetector
  const defineLazyEventHandler: typeof import('../../node_modules/h3').defineLazyEventHandler
  const defineMcpHandler: typeof import('../../node_modules/@nuxtjs/mcp-toolkit/dist/runtime/server/mcp/definitions').defineMcpHandler
  const defineMcpPrompt: typeof import('../../node_modules/@nuxtjs/mcp-toolkit/dist/runtime/server/mcp/definitions').defineMcpPrompt
  const defineMcpResource: typeof import('../../node_modules/@nuxtjs/mcp-toolkit/dist/runtime/server/mcp/definitions').defineMcpResource
  const defineMcpTool: typeof import('../../node_modules/@nuxtjs/mcp-toolkit/dist/runtime/server/mcp/definitions').defineMcpTool
  const defineNitroErrorHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/error/utils').defineNitroErrorHandler
  const defineNitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime/internal/plugin').defineNitroPlugin
  const defineNodeListener: typeof import('../../node_modules/h3').defineNodeListener
  const defineNodeMiddleware: typeof import('../../node_modules/h3').defineNodeMiddleware
  const defineOAuthAppleEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/apple').defineOAuthAppleEventHandler
  const defineOAuthAtlassianEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/atlassian').defineOAuthAtlassianEventHandler
  const defineOAuthAuth0EventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0').defineOAuthAuth0EventHandler
  const defineOAuthAuthentikEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/authentik').defineOAuthAuthentikEventHandler
  const defineOAuthAzureB2CEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/azureb2c').defineOAuthAzureB2CEventHandler
  const defineOAuthBattledotnetEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet').defineOAuthBattledotnetEventHandler
  const defineOAuthCognitoEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito').defineOAuthCognitoEventHandler
  const defineOAuthDiscordEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord').defineOAuthDiscordEventHandler
  const defineOAuthDropboxEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/dropbox').defineOAuthDropboxEventHandler
  const defineOAuthFacebookEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook').defineOAuthFacebookEventHandler
  const defineOAuthGitHubEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github').defineOAuthGitHubEventHandler
  const defineOAuthGitLabEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab').defineOAuthGitLabEventHandler
  const defineOAuthGiteaEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitea').defineOAuthGiteaEventHandler
  const defineOAuthGoogleEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google').defineOAuthGoogleEventHandler
  const defineOAuthHerokuEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/heroku').defineOAuthHerokuEventHandler
  const defineOAuthHubspotEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/hubspot').defineOAuthHubspotEventHandler
  const defineOAuthInstagramEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram').defineOAuthInstagramEventHandler
  const defineOAuthKeycloakEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak').defineOAuthKeycloakEventHandler
  const defineOAuthKickEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/kick').defineOAuthKickEventHandler
  const defineOAuthLineEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/line').defineOAuthLineEventHandler
  const defineOAuthLinearEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linear').defineOAuthLinearEventHandler
  const defineOAuthLinkedInEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin').defineOAuthLinkedInEventHandler
  const defineOAuthLiveChatEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/livechat').defineOAuthLiveChatEventHandler
  const defineOAuthMicrosoftEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft').defineOAuthMicrosoftEventHandler
  const defineOAuthOktaEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/okta').defineOAuthOktaEventHandler
  const defineOAuthOryEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/ory').defineOAuthOryEventHandler
  const defineOAuthPaypalEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal').defineOAuthPaypalEventHandler
  const defineOAuthPolarEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/polar').defineOAuthPolarEventHandler
  const defineOAuthRobloxEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/roblox').defineOAuthRobloxEventHandler
  const defineOAuthSalesforceEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/salesforce').defineOAuthSalesforceEventHandler
  const defineOAuthSeznamEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/seznam').defineOAuthSeznamEventHandler
  const defineOAuthShopifyCustomerEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/shopifyCustomer').defineOAuthShopifyCustomerEventHandler
  const defineOAuthSlackEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/slack').defineOAuthSlackEventHandler
  const defineOAuthSpotifyEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify').defineOAuthSpotifyEventHandler
  const defineOAuthSteamEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam').defineOAuthSteamEventHandler
  const defineOAuthStravaEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/strava').defineOAuthStravaEventHandler
  const defineOAuthTikTokEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok').defineOAuthTikTokEventHandler
  const defineOAuthTwitchEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch').defineOAuthTwitchEventHandler
  const defineOAuthVKEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk').defineOAuthVKEventHandler
  const defineOAuthWorkOSEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/workos').defineOAuthWorkOSEventHandler
  const defineOAuthXEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x').defineOAuthXEventHandler
  const defineOAuthXSUAAEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa').defineOAuthXSUAAEventHandler
  const defineOAuthYandexEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex').defineOAuthYandexEventHandler
  const defineOAuthZitadelEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/zitadel').defineOAuthZitadelEventHandler
  const defineRenderHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/renderer').defineRenderHandler
  const defineRequestMiddleware: typeof import('../../node_modules/h3').defineRequestMiddleware
  const defineResponseMiddleware: typeof import('../../node_modules/h3').defineResponseMiddleware
  const defineRouteMeta: typeof import('../../node_modules/nitropack/dist/runtime/internal/meta').defineRouteMeta
  const defineSitemapEventHandler: typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/server/composables/defineSitemapEventHandler').defineSitemapEventHandler
  const defineTask: typeof import('../../node_modules/nitropack/dist/runtime/internal/task').defineTask
  const defineWebAuthnAuthenticateEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/webauthn/authenticate').defineWebAuthnAuthenticateEventHandler
  const defineWebAuthnRegisterEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/webauthn/register').defineWebAuthnRegisterEventHandler
  const defineWebSocket: typeof import('../../node_modules/h3').defineWebSocket
  const defineWebSocketHandler: typeof import('../../node_modules/h3').defineWebSocketHandler
  const defuReplaceArray: typeof import('../../node_modules/nuxt-security/dist/utils/merge').defuReplaceArray
  const deleteCookie: typeof import('../../node_modules/h3').deleteCookie
  const denies: typeof import('../../node_modules/nuxt-authorization/dist/runtime/server/utils/bouncer').denies
  const deny: typeof import('../../node_modules/nuxt-authorization/dist/runtime/ability').deny
  const directusServer: typeof import('../../layers/shared-app/server/utils/directus-server').directusServer
  const dynamicEventHandler: typeof import('../../node_modules/h3').dynamicEventHandler
  const ensurePolarCustomer: typeof import('../../layers/auth-app/server/utils/polar').ensurePolarCustomer
  const ensureStripeCustomer: typeof import('../../layers/auth-app/server/utils/stripe').ensureStripeCustomer
  const errorResult: typeof import('../../node_modules/@nuxtjs/mcp-toolkit/dist/runtime/server/mcp/definitions').errorResult
  const eventHandler: typeof import('../../node_modules/h3').eventHandler
  const fetchWithEvent: typeof import('../../node_modules/h3').fetchWithEvent
  const filterSchema: typeof import('../../layers/auth-app/server/utils/query').filterSchema
  const formatFileSize: typeof import('../../layers/auth-app/shared/utils/format').formatFileSize
  const fromNodeMiddleware: typeof import('../../node_modules/h3').fromNodeMiddleware
  const fromPlainHandler: typeof import('../../node_modules/h3').fromPlainHandler
  const fromWebHandler: typeof import('../../node_modules/h3').fromWebHandler
  const generateRuntimeConfig: typeof import('../../layers/auth-app/server/utils/runtimeConfig').generateRuntimeConfig
  const getAtprotoClientMetadata: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/atproto').getAtprotoClientMetadata
  const getAuthSession: typeof import('../../layers/auth-app/server/utils/auth').getAuthSession
  const getBotDetection: typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/server/composables/getBotDetection').getBotDetection
  const getBotInfo: typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/server/composables/getBotDetection').getBotInfo
  const getCookie: typeof import('../../node_modules/h3').getCookie
  const getCookieLocale: typeof import('../../node_modules/@intlify/utils/dist/h3').getCookieLocale
  const getDB: typeof import('../../layers/auth-app/server/utils/db').getDB
  const getDBStats: typeof import('../../layers/auth-app/server/utils/dbStats').getDBStats
  const getHeader: typeof import('../../node_modules/h3').getHeader
  const getHeaderLanguage: typeof import('../../node_modules/@intlify/utils/dist/h3').getHeaderLanguage
  const getHeaderLanguages: typeof import('../../node_modules/@intlify/utils/dist/h3').getHeaderLanguages
  const getHeaderLocale: typeof import('../../node_modules/@intlify/utils/dist/h3').getHeaderLocale
  const getHeaderLocales: typeof import('../../node_modules/@intlify/utils/dist/h3').getHeaderLocales
  const getHeaders: typeof import('../../node_modules/h3').getHeaders
  const getMethod: typeof import('../../node_modules/h3').getMethod
  const getNitroOrigin: typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/composables/getNitroOrigin').getNitroOrigin
  const getPathLocale: typeof import('../../node_modules/@intlify/utils/dist/h3').getPathLocale
  const getPathRobotConfig: typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/server/composables/getPathRobotConfig').getPathRobotConfig
  const getPgPool: typeof import('../../layers/auth-app/server/utils/drivers').getPgPool
  const getProxyRequestHeaders: typeof import('../../node_modules/h3').getProxyRequestHeaders
  const getQuery: typeof import('../../node_modules/h3').getQuery
  const getQueryLocale: typeof import('../../node_modules/@intlify/utils/dist/h3').getQueryLocale
  const getRequestFingerprint: typeof import('../../node_modules/h3').getRequestFingerprint
  const getRequestHeader: typeof import('../../node_modules/h3').getRequestHeader
  const getRequestHeaders: typeof import('../../node_modules/h3').getRequestHeaders
  const getRequestHost: typeof import('../../node_modules/h3').getRequestHost
  const getRequestIP: typeof import('../../node_modules/h3').getRequestIP
  const getRequestPath: typeof import('../../node_modules/h3').getRequestPath
  const getRequestProtocol: typeof import('../../node_modules/h3').getRequestProtocol
  const getRequestURL: typeof import('../../node_modules/h3').getRequestURL
  const getRequestWebStream: typeof import('../../node_modules/h3').getRequestWebStream
  const getResponseHeader: typeof import('../../node_modules/h3').getResponseHeader
  const getResponseHeaders: typeof import('../../node_modules/h3').getResponseHeaders
  const getResponseStatus: typeof import('../../node_modules/h3').getResponseStatus
  const getResponseStatusText: typeof import('../../node_modules/h3').getResponseStatusText
  const getRouteRules: typeof import('../../node_modules/nitropack/dist/runtime/internal/route-rules').getRouteRules
  const getRouterParam: typeof import('../../node_modules/h3').getRouterParam
  const getRouterParams: typeof import('../../node_modules/h3').getRouterParams
  const getSession: typeof import('../../node_modules/h3').getSession
  const getSiteConfig: typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/composables/getSiteConfig').getSiteConfig
  const getSiteIndexable: typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/composables/getSiteIndexable').getSiteIndexable
  const getSiteRobotConfig: typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/server/composables/getSiteRobotConfig').getSiteRobotConfig
  const getUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session').getUserSession
  const getValidatedQuery: typeof import('../../node_modules/h3').getValidatedQuery
  const getValidatedRouterParams: typeof import('../../node_modules/h3').getValidatedRouterParams
  const handleCacheHeaders: typeof import('../../node_modules/h3').handleCacheHeaders
  const handleCors: typeof import('../../node_modules/h3').handleCors
  const hashEmail: typeof import('../../layers/shared-app/server/utils/mail').hashEmail
  const hashPassword: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/password').hashPassword
  const imageResult: typeof import('../../node_modules/@nuxtjs/mcp-toolkit/dist/runtime/server/mcp/definitions').imageResult
  const isBot: typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/server/composables/getBotDetection').isBot
  const isCorsOriginAllowed: typeof import('../../node_modules/h3').isCorsOriginAllowed
  const isError: typeof import('../../node_modules/h3').isError
  const isEvent: typeof import('../../node_modules/h3').isEvent
  const isEventHandler: typeof import('../../node_modules/h3').isEventHandler
  const isMethod: typeof import('../../node_modules/h3').isMethod
  const isPreflightRequest: typeof import('../../node_modules/h3').isPreflightRequest
  const isStream: typeof import('../../node_modules/h3').isStream
  const isValidTable: typeof import('../../layers/auth-app/server/utils/db').isValidTable
  const isWebResponse: typeof import('../../node_modules/h3').isWebResponse
  const jsonResult: typeof import('../../node_modules/@nuxtjs/mcp-toolkit/dist/runtime/server/mcp/definitions').jsonResult
  const lazyEventHandler: typeof import('../../node_modules/h3').lazyEventHandler
  const logAuditEvent: typeof import('../../layers/auth-app/server/utils/auditLogger').logAuditEvent
  const nitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime/internal/plugin').nitroPlugin
  const parseCookies: typeof import('../../node_modules/h3').parseCookies
  const passwordNeedsReHash: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/password').passwordNeedsReHash
  const processFilters: typeof import('../../layers/auth-app/server/utils/query').processFilters
  const promisifyNodeListener: typeof import('../../node_modules/h3').promisifyNodeListener
  const proxyRequest: typeof import('../../node_modules/h3').proxyRequest
  const readBody: typeof import('../../node_modules/h3').readBody
  const readFormData: typeof import('../../node_modules/h3').readFormData
  const readItem: typeof import('../../layers/shared-app/server/utils/directus-server').readItem
  const readItems: typeof import('../../layers/shared-app/server/utils/directus-server').readItems
  const readMultipartFormData: typeof import('../../node_modules/h3').readMultipartFormData
  const readRawBody: typeof import('../../node_modules/h3').readRawBody
  const readSingleton: typeof import('../../layers/shared-app/server/utils/directus-server').readSingleton
  const readValidatedBody: typeof import('../../node_modules/h3').readValidatedBody
  const removeResponseHeader: typeof import('../../node_modules/h3').removeResponseHeader
  const replaceUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session').replaceUserSession
  const requireAuth: typeof import('../../layers/auth-app/server/utils/auth').requireAuth
  const requireUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session').requireUserSession
  const resendInstance: typeof import('../../layers/auth-app/server/utils/drivers').resendInstance
  const runTask: typeof import('../../node_modules/nitropack/dist/runtime/internal/task').runTask
  const runtimeConfig: typeof import('../../layers/auth-app/server/utils/runtimeConfig').runtimeConfig
  const sanitizeStatusCode: typeof import('../../node_modules/h3').sanitizeStatusCode
  const sanitizeStatusMessage: typeof import('../../node_modules/h3').sanitizeStatusMessage
  const sealSession: typeof import('../../node_modules/h3').sealSession
  const send: typeof import('../../node_modules/h3').send
  const sendError: typeof import('../../node_modules/h3').sendError
  const sendIterable: typeof import('../../node_modules/h3').sendIterable
  const sendNoContent: typeof import('../../node_modules/h3').sendNoContent
  const sendProxy: typeof import('../../node_modules/h3').sendProxy
  const sendRedirect: typeof import('../../node_modules/h3').sendRedirect
  const sendStream: typeof import('../../node_modules/h3').sendStream
  const sendUserVerificationEmail: typeof import('../../layers/auth-app/server/utils/email').sendUserVerificationEmail
  const sendWebResponse: typeof import('../../node_modules/h3').sendWebResponse
  const serveStatic: typeof import('../../node_modules/h3').serveStatic
  const serverDirectusClient: typeof import('../../layers/shared-app/server/utils/directus').serverDirectusClient
  const sessionHooks: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session').sessionHooks
  const setCookie: typeof import('../../node_modules/h3').setCookie
  const setCookieLocale: typeof import('../../node_modules/@intlify/utils/dist/h3').setCookieLocale
  const setHeader: typeof import('../../node_modules/h3').setHeader
  const setHeaders: typeof import('../../node_modules/h3').setHeaders
  const setResponseHeader: typeof import('../../node_modules/h3').setResponseHeader
  const setResponseHeaders: typeof import('../../node_modules/h3').setResponseHeaders
  const setResponseStatus: typeof import('../../node_modules/h3').setResponseStatus
  const setUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session').setUserSession
  const setupPolar: typeof import('../../layers/auth-app/server/utils/polar').setupPolar
  const setupStripe: typeof import('../../layers/auth-app/server/utils/stripe').setupStripe
  const splitCookiesString: typeof import('../../node_modules/h3').splitCookiesString
  const textResult: typeof import('../../node_modules/@nuxtjs/mcp-toolkit/dist/runtime/server/mcp/definitions').textResult
  const toEventHandler: typeof import('../../node_modules/h3').toEventHandler
  const toNodeListener: typeof import('../../node_modules/h3').toNodeListener
  const toPlainHandler: typeof import('../../node_modules/h3').toPlainHandler
  const toWebHandler: typeof import('../../node_modules/h3').toWebHandler
  const toWebRequest: typeof import('../../node_modules/h3').toWebRequest
  const tryCookieLocale: typeof import('../../node_modules/@intlify/utils/dist/h3').tryCookieLocale
  const tryHeaderLocale: typeof import('../../node_modules/@intlify/utils/dist/h3').tryHeaderLocale
  const tryHeaderLocales: typeof import('../../node_modules/@intlify/utils/dist/h3').tryHeaderLocales
  const tryPathLocale: typeof import('../../node_modules/@intlify/utils/dist/h3').tryPathLocale
  const tryQueryLocale: typeof import('../../node_modules/@intlify/utils/dist/h3').tryQueryLocale
  const unsealSession: typeof import('../../node_modules/h3').unsealSession
  const updateItem: typeof import('../../layers/shared-app/server/utils/directus-server').updateItem
  const updateSession: typeof import('../../node_modules/h3').updateSession
  const updateSiteConfig: typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/composables/updateSiteConfig').updateSiteConfig
  const useAppConfig: typeof import('../../node_modules/nitropack/dist/runtime/internal/config').useAppConfig
  const useBase: typeof import('../../node_modules/h3').useBase
  const useDB: typeof import('../../layers/auth-app/server/utils/db').useDB
  const useEvent: typeof import('../../node_modules/nitropack/dist/runtime/internal/context').useEvent
  const useImage: typeof import('../../node_modules/@nuxt/image/dist/runtime/server/utils/image').useImage
  const useMail: typeof import('../../layers/shared-app/server/utils/mail').useMail
  const useMailgun: typeof import('../../layers/auth-app/server/utils/email').useMailgun
  const useNitroApp: typeof import('../../node_modules/nitropack/dist/runtime/internal/app').useNitroApp
  const useNitroOrigin: typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/composables/useNitroOrigin').useNitroOrigin
  const useRuntimeConfig: typeof import('../../node_modules/nitropack/dist/runtime/internal/config').useRuntimeConfig
  const useRuntimeConfigNuxtRobots: typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/server/composables/useRuntimeConfigNuxtRobots').useRuntimeConfigNuxtRobots
  const useServerAuth: typeof import('../../layers/auth-app/server/utils/auth').useServerAuth
  const useSession: typeof import('../../node_modules/h3').useSession
  const useSiteConfig: typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/composables/useSiteConfig').useSiteConfig
  const useStorage: typeof import('../../node_modules/nitropack/dist/runtime/internal/storage').useStorage
  const useTranslation: typeof import('../../node_modules/@intlify/h3').useTranslation
  const userVerificationTemplate: typeof import('../../layers/auth-app/server/utils/emailTemplates').userVerificationTemplate
  const validateUserData: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/webauthn/register').validateUserData
  const verifyDirectusToken: typeof import('../../layers/shared-app/server/utils/directus').verifyDirectusToken
  const verifyPassword: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/password').verifyPassword
  const withFilters: typeof import('../../layers/auth-app/server/utils/query').withFilters
  const withSiteTrailingSlash: typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/composables/utils').withSiteTrailingSlash
  const withSiteUrl: typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/composables/utils').withSiteUrl
  const withToken: typeof import('../../layers/shared-app/server/utils/directus-server').withToken
  const writeEarlyHints: typeof import('../../node_modules/h3').writeEarlyHints
}
// for type re-export
declare global {
  // @ts-ignore
  export type { User, FileRecord } from '../../layers/auth-app/shared/utils/types'
  import('../../layers/auth-app/shared/utils/types')
  // @ts-ignore
  export type { OAuthAppleConfig, OAuthAppleTokens, OAuthAppleUser } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/apple.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/apple.d')
  // @ts-ignore
  export type { OAuthAtlassianConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/atlassian.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/atlassian.d')
  // @ts-ignore
  export type { OAuthAuth0Config } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0.d')
  // @ts-ignore
  export type { OAuthAuthentikConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/authentik.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/authentik.d')
  // @ts-ignore
  export type { OAuthAzureB2CConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/azureb2c.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/azureb2c.d')
  // @ts-ignore
  export type { OAuthBattledotnetConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet.d')
  // @ts-ignore
  export type { OAuthCognitoConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito.d')
  // @ts-ignore
  export type { OAuthDiscordConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord.d')
  // @ts-ignore
  export type { OAuthDropboxConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/dropbox.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/dropbox.d')
  // @ts-ignore
  export type { OAuthFacebookConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook.d')
  // @ts-ignore
  export type { OAuthGiteaConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitea.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitea.d')
  // @ts-ignore
  export type { OAuthGitHubConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github.d')
  // @ts-ignore
  export type { OAuthGitLabConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab.d')
  // @ts-ignore
  export type { OAuthGoogleConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google.d')
  // @ts-ignore
  export type { OAuthHerokuConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/heroku.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/heroku.d')
  // @ts-ignore
  export type { OAuthHubspotConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/hubspot.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/hubspot.d')
  // @ts-ignore
  export type { OAuthInstagramConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram.d')
  // @ts-ignore
  export type { OAuthKeycloakConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak.d')
  // @ts-ignore
  export type { OAuthKickConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/kick.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/kick.d')
  // @ts-ignore
  export type { OAuthLineConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/line.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/line.d')
  // @ts-ignore
  export type { OAuthLinearConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linear.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linear.d')
  // @ts-ignore
  export type { OAuthLinkedInConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin.d')
  // @ts-ignore
  export type { LiveChatTokens, LiveChatUser, LiveChatConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/livechat.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/livechat.d')
  // @ts-ignore
  export type { OAuthMicrosoftConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft.d')
  // @ts-ignore
  export type { OpenIdConfig, OAuthConfigExt, OAuthOktaConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/okta.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/okta.d')
  // @ts-ignore
  export type { OAuthOryConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/ory.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/ory.d')
  // @ts-ignore
  export type { OAuthPaypalConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal.d')
  // @ts-ignore
  export type { OAuthPolarConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/polar.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/polar.d')
  // @ts-ignore
  export type { OAuthRobloxConfig, OAuthRobloxUser } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/roblox.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/roblox.d')
  // @ts-ignore
  export type { OAuthSalesforceConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/salesforce.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/salesforce.d')
  // @ts-ignore
  export type { OAuthSeznamConfig, OAuthSeznamUser } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/seznam.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/seznam.d')
  // @ts-ignore
  export type { OAuthShopifyCustomerConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/shopifyCustomer.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/shopifyCustomer.d')
  // @ts-ignore
  export type { OAuthSlackConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/slack.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/slack.d')
  // @ts-ignore
  export type { OAuthSpotifyConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify.d')
  // @ts-ignore
  export type { OAuthSteamConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam.d')
  // @ts-ignore
  export type { OAuthStravaConfig, OAuthStravaUser, OAuthStravaTokens } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/strava.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/strava.d')
  // @ts-ignore
  export type { OAuthTikTokConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok.d')
  // @ts-ignore
  export type { OAuthTwitchConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch.d')
  // @ts-ignore
  export type { OAuthVKConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk.d')
  // @ts-ignore
  export type { OAuthWorkOSConfig, OAuthWorkOSUser, OAuthWorkOSAuthenticationMethod, OAuthWorkOSAuthenticateResponse, OAuthWorkOSTokens } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/workos.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/workos.d')
  // @ts-ignore
  export type { OAuthXConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x.d')
  // @ts-ignore
  export type { OAuthXSUAAConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa.d')
  // @ts-ignore
  export type { OAuthYandexConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex.d')
  // @ts-ignore
  export type { OAuthZitadelConfig } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/zitadel.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/zitadel.d')
  // @ts-ignore
  export type { SessionHooks } from '../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session.d'
  import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session.d')
  // @ts-ignore
  export type { BotDetectionContext } from '../../node_modules/@nuxtjs/robots/dist/runtime/server/composables/getBotDetection.d'
  import('../../node_modules/@nuxtjs/robots/dist/runtime/server/composables/getBotDetection.d')
  // @ts-ignore
  export type { DirectusUser } from '../../layers/shared-app/server/utils/directus'
  import('../../layers/shared-app/server/utils/directus')
  // @ts-ignore
  export type { TableNames } from '../../layers/auth-app/server/utils/db'
  import('../../layers/auth-app/server/utils/db')
  // @ts-ignore
  export type { EmailOptions, EmailService } from '../../layers/auth-app/server/utils/email'
  import('../../layers/auth-app/server/utils/email')
}
export { useNitroApp } from 'nitropack/runtime/internal/app';
export { useRuntimeConfig, useAppConfig } from 'nitropack/runtime/internal/config';
export { defineNitroPlugin, nitroPlugin } from 'nitropack/runtime/internal/plugin';
export { defineCachedFunction, defineCachedEventHandler, cachedFunction, cachedEventHandler } from 'nitropack/runtime/internal/cache';
export { useStorage } from 'nitropack/runtime/internal/storage';
export { defineRenderHandler } from 'nitropack/runtime/internal/renderer';
export { defineRouteMeta } from 'nitropack/runtime/internal/meta';
export { getRouteRules } from 'nitropack/runtime/internal/route-rules';
export { useEvent } from 'nitropack/runtime/internal/context';
export { defineTask, runTask } from 'nitropack/runtime/internal/task';
export { defineNitroErrorHandler } from 'nitropack/runtime/internal/error/utils';
export { appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, callNodeListener, clearResponseHeaders, clearSession, createApp, createAppEventHandler, createError, createEvent, createEventStream, createRouter, defaultContentType, defineEventHandler, defineLazyEventHandler, defineNodeListener, defineNodeMiddleware, defineRequestMiddleware, defineResponseMiddleware, defineWebSocket, defineWebSocketHandler, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeMiddleware, fromPlainHandler, fromWebHandler, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, isCorsOriginAllowed, isError, isEvent, isEventHandler, isMethod, isPreflightRequest, isStream, isWebResponse, lazyEventHandler, parseCookies, promisifyNodeListener, proxyRequest, readBody, readFormData, readMultipartFormData, readRawBody, readValidatedBody, removeResponseHeader, sanitizeStatusCode, sanitizeStatusMessage, sealSession, send, sendError, sendIterable, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, splitCookiesString, toEventHandler, toNodeListener, toPlainHandler, toWebHandler, toWebRequest, unsealSession, updateSession, useBase, useSession, writeEarlyHints } from 'h3';
export { buildAssetsURL as __buildAssetsURL, publicAssetsURL as __publicAssetsURL } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxt/nitro-server/dist/runtime/utils/paths';
export { defineAppConfig } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxt/nitro-server/dist/runtime/utils/config';
export { defineAbility, allow, deny } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-authorization/dist/runtime/ability';
export { useImage } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxt/image/dist/runtime/server/utils/image';
export { defineMcpTool, defineMcpResource, defineMcpPrompt, defineMcpHandler, textResult, jsonResult, errorResult, imageResult } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxtjs/mcp-toolkit/dist/runtime/server/mcp/definitions';
export { defuReplaceArray } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-security/dist/utils/merge';
export { defineSitemapEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxtjs/sitemap/dist/runtime/server/composables/defineSitemapEventHandler';
export { asSitemapUrl } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxtjs/sitemap/dist/runtime/server/composables/asSitemapUrl';
export { defineI18nLocale, defineI18nConfig } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxtjs/i18n/dist/runtime/composables/shared';
export { defineI18nLocaleDetector } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxtjs/i18n/dist/runtime/composables/server';
export { useTranslation } from '@intlify/h3';
export { getCookieLocale, getHeaderLanguage, getHeaderLanguages, getHeaderLocale, getHeaderLocales, getPathLocale, getQueryLocale, setCookieLocale, tryCookieLocale, tryHeaderLocale, tryHeaderLocales, tryPathLocale, tryQueryLocale } from '@intlify/utils/h3';
export { formatFileSize } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/shared/utils/format';
export { defineOAuthAppleEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/apple';
export { defineOAuthAtlassianEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/atlassian';
export { defineOAuthAuth0EventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0';
export { defineOAuthAuthentikEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/authentik';
export { defineOAuthAzureB2CEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/azureb2c';
export { defineOAuthBattledotnetEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet';
export { defineOAuthCognitoEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito';
export { defineOAuthDiscordEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord';
export { defineOAuthDropboxEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/dropbox';
export { defineOAuthFacebookEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook';
export { defineOAuthGiteaEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitea';
export { defineOAuthGitHubEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github';
export { defineOAuthGitLabEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab';
export { defineOAuthGoogleEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google';
export { defineOAuthHerokuEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/heroku';
export { defineOAuthHubspotEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/hubspot';
export { defineOAuthInstagramEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram';
export { defineOAuthKeycloakEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak';
export { defineOAuthKickEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/kick';
export { defineOAuthLineEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/line';
export { defineOAuthLinearEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linear';
export { defineOAuthLinkedInEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin';
export { defineOAuthLiveChatEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/livechat';
export { defineOAuthMicrosoftEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft';
export { defineOAuthOktaEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/okta';
export { defineOAuthOryEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/ory';
export { defineOAuthPaypalEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal';
export { defineOAuthPolarEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/polar';
export { defineOAuthRobloxEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/roblox';
export { defineOAuthSalesforceEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/salesforce';
export { defineOAuthSeznamEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/seznam';
export { defineOAuthShopifyCustomerEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/shopifyCustomer';
export { defineOAuthSlackEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/slack';
export { defineOAuthSpotifyEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify';
export { defineOAuthSteamEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam';
export { defineOAuthStravaEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/strava';
export { defineOAuthTikTokEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok';
export { defineOAuthTwitchEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch';
export { defineOAuthVKEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk';
export { defineOAuthWorkOSEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/workos';
export { defineOAuthXEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x';
export { defineOAuthXSUAAEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa';
export { defineOAuthYandexEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex';
export { defineOAuthZitadelEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/zitadel';
export { defineWebAuthnAuthenticateEventHandler } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/webauthn/authenticate';
export { defineWebAuthnRegisterEventHandler, validateUserData } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/lib/webauthn/register';
export { getAtprotoClientMetadata } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/utils/atproto';
export { hashPassword, verifyPassword, passwordNeedsReHash } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/utils/password';
export { sessionHooks, getUserSession, setUserSession, replaceUserSession, clearUserSession, requireUserSession } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-auth-utils/dist/runtime/server/utils/session';
export { allows, denies, authorize } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-authorization/dist/runtime/server/utils/bouncer';
export { getNitroOrigin } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-site-config/dist/runtime/server/composables/getNitroOrigin';
export { getSiteConfig } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-site-config/dist/runtime/server/composables/getSiteConfig';
export { getSiteIndexable } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-site-config/dist/runtime/server/composables/getSiteIndexable';
export { updateSiteConfig } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-site-config/dist/runtime/server/composables/updateSiteConfig';
export { useNitroOrigin } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-site-config/dist/runtime/server/composables/useNitroOrigin';
export { useSiteConfig } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-site-config/dist/runtime/server/composables/useSiteConfig';
export { createSitePathResolver, withSiteTrailingSlash, withSiteUrl } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-site-config/dist/runtime/server/composables/utils';
export { getBotDetection, isBot, getBotInfo } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxtjs/robots/dist/runtime/server/composables/getBotDetection';
export { getPathRobotConfig } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxtjs/robots/dist/runtime/server/composables/getPathRobotConfig';
export { getSiteRobotConfig } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxtjs/robots/dist/runtime/server/composables/getSiteRobotConfig';
export { useRuntimeConfigNuxtRobots } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@nuxtjs/robots/dist/runtime/server/composables/useRuntimeConfigNuxtRobots';
export { directusServer, readItem, readItems, readSingleton, createItem, updateItem, withToken } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/shared-app/server/utils/directus-server';
export { serverDirectusClient, createDirectusUserClient, verifyDirectusToken } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/shared-app/server/utils/directus';
export { useMail, hashEmail } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/shared-app/server/utils/mail';
export { logAuditEvent } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/auditLogger';
export { createBetterAuth, auth, useServerAuth, getAuthSession, requireAuth } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/auth';
export { getDB, useDB, isValidTable } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/db';
export { getDBStats } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/dbStats';
export { getPgPool, cacheClient, resendInstance } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/drivers';
export { useMailgun, sendUserVerificationEmail } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/email';
export { userVerificationTemplate } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/emailTemplates';
export { ensurePolarCustomer, setupPolar } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/polar';
export { filterSchema, processFilters, withFilters } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/query';
export { generateRuntimeConfig, runtimeConfig } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/runtimeConfig';
export { ensureStripeCustomer, setupStripe } from 'C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/layers/auth-app/server/utils/stripe';