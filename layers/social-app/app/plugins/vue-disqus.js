// Nuxt plugin: provide a Rocket.Chat comments API factory to components
import { RocketChatAPI } from './rocketchat-api.js'
import VueDisqus from 'vue-disqus'

export default defineNuxtPlugin((nuxtApp) => {
  // provide RocketChat factory (components can call this to get an API instance)
  const factory = (options = {}) => RocketChatAPI(Object.assign({
    baseURL: process.env.ROCKETCHAT_URL || nuxtApp.$config?.ROCKETCHAT_URL,
    token: process.env.ROCKETCHAT_TOKEN || nuxtApp.$config?.ROCKETCHAT_TOKEN,
    userId: process.env.ROCKETCHAT_USER_ID || nuxtApp.$config?.ROCKETCHAT_USER_ID
  }, options))

  // Avoid redefining provided keys — check Vue app provides and globalProperties first
  try {
    const app = nuxtApp.vueApp
    const provides = app && app._context && app._context.provides
    const gp = app && app.config && app.config.globalProperties

    if (!(provides && ('commentsApi' in provides)) && !(gp && ('$commentsApi' in gp))) {
      nuxtApp.provide('commentsApi', factory)
    }

    if (!(provides && ('rocketChatAPIFactory' in provides)) && !(gp && ('$rocketChatAPIFactory' in gp))) {
      nuxtApp.provide('rocketChatAPIFactory', factory)
    }
  } catch (e) {
    // if introspection fails, fall back to a best-effort provide (non-fatal)
    try { nuxtApp.provide('commentsApi', factory) } catch (e) {}
    try { nuxtApp.provide('rocketChatAPIFactory', factory) } catch (e) {}
  }

  // Also register vue-disqus for components that still want to use Disqus
  // Nuxt 3: global registration via app instance
  try {
    nuxtApp.vueApp.use(VueDisqus, { shortname: 'your_shortname_disqus' })
  } catch (e) {
    // ignore if plugin isn't compatible — presence of vue-disqus is optional
  }

  // Usage in components:
  // const { $commentsApi } = useNuxtApp()
  // const api = $commentsApi({ baseURL: '...' })
  // await api.postComment({ issueId, content })
})
