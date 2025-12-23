import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["nuxt-leaflet"]?: ModuleDependencyMeta<typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["pinia"]?: ModuleDependencyMeta<typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["vueuse"]?: ModuleDependencyMeta<typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicDrawer"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicMenu"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicMenu/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicModal"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicModal/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicCommand"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicCommand/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicCookie"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicCookie/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicDraggable"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicEmitter"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicError"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicError/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicMarquee"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicPie"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicPie/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicNoise"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicNoise/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicPlayer"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicScroll"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicScroll/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicToast"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicToast/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/mcp-toolkit"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-tiptap-editor"]?: ModuleDependencyMeta<typeof import("nuxt-tiptap-editor").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["auth-utils"]?: ModuleDependencyMeta<typeof import("nuxt-auth-utils").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-authorization"]?: ModuleDependencyMeta<typeof import("nuxt-authorization").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/test-utils"]?: ModuleDependencyMeta<typeof import("@nuxt/test-utils/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["vuetify-nuxt-module"]?: ModuleDependencyMeta<typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/i18n"]?: ModuleDependencyMeta<typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-security"]?: ModuleDependencyMeta<typeof import("nuxt-security").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxtseo"]?: ModuleDependencyMeta<typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/sitemap"]?: ModuleDependencyMeta<typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-link-checker"]?: ModuleDependencyMeta<typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-schema-org"]?: ModuleDependencyMeta<typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-seo-utils"]?: ModuleDependencyMeta<typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/leaflet`
     */
    ["leaflet"]: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicDrawer"]: typeof import("@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicMenu/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicMenu"]: typeof import("@maas/vue-equipment/dist/plugins/MagicMenu/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicModal/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicModal"]: typeof import("@maas/vue-equipment/dist/plugins/MagicModal/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicCommand/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicCommand"]: typeof import("@maas/vue-equipment/dist/plugins/MagicCommand/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicCookie/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicCookie"]: typeof import("@maas/vue-equipment/dist/plugins/MagicCookie/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicDraggable"]: typeof import("@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicEmitter"]: typeof import("@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicError/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicError"]: typeof import("@maas/vue-equipment/dist/plugins/MagicError/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicMarquee"]: typeof import("@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicPie/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicPie"]: typeof import("@maas/vue-equipment/dist/plugins/MagicPie/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicNoise/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicNoise"]: typeof import("@maas/vue-equipment/dist/plugins/MagicNoise/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicPlayer"]: typeof import("@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicScroll/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicScroll"]: typeof import("@maas/vue-equipment/dist/plugins/MagicScroll/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicToast/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicToast"]: typeof import("@maas/vue-equipment/dist/plugins/MagicToast/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/nuxt`
     */
    ["vueEquipment"]: typeof import("@maas/vue-equipment/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mcp-toolkit`
     */
    ["mcp"]: typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-tiptap-editor`
     */
    ["tiptap"]: typeof import("nuxt-tiptap-editor").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     */
    ["auth"]: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-authorization`
     */
    ["authorization"]: typeof import("nuxt-authorization").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/test-utils/module`
     */
    ["testUtils"]: typeof import("@nuxt/test-utils/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `vuetify-nuxt-module`
     */
    ["vuetify"]: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-security`
     */
    ["security"]: typeof import("nuxt-security").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/leaflet`
     */
    ["leaflet"]?: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicDrawer"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicMenu/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicMenu"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicMenu/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicModal/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicModal"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicModal/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicCommand/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicCommand"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicCommand/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicCookie/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicCookie"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicCookie/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicDraggable"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicEmitter"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicError/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicError"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicError/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicMarquee"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicPie/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicPie"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicPie/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicNoise/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicNoise"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicNoise/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicPlayer"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicScroll/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicScroll"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicScroll/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicToast/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicToast"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicToast/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/nuxt`
     */
    ["vueEquipment"]?: typeof import("@maas/vue-equipment/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mcp-toolkit`
     */
    ["mcp"]?: typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-tiptap-editor`
     */
    ["tiptap"]?: typeof import("nuxt-tiptap-editor").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     */
    ["auth"]?: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-authorization`
     */
    ["authorization"]?: typeof import("nuxt-authorization").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/test-utils/module`
     */
    ["testUtils"]?: typeof import("@nuxt/test-utils/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `vuetify-nuxt-module`
     */
    ["vuetify"]?: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-security`
     */
    ["security"]?: typeof import("nuxt-security").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/leaflet", Exclude<NuxtConfig["leaflet"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicDrawer"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicMenu/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicMenu"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicModal/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicModal"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicCommand/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicCommand"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicCookie/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicCookie"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicDraggable"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicEmitter"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicError/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicError"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicMarquee"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicPie/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicPie"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicNoise/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicNoise"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicPlayer"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicScroll/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicScroll"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicToast/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicToast"], boolean>] | ["@maas/vue-equipment/nuxt", Exclude<NuxtConfig["vueEquipment"], boolean>] | ["@nuxtjs/mcp-toolkit", Exclude<NuxtConfig["mcp"], boolean>] | ["nuxt-tiptap-editor", Exclude<NuxtConfig["tiptap"], boolean>] | ["nuxt-auth-utils", Exclude<NuxtConfig["auth"], boolean>] | ["nuxt-authorization", Exclude<NuxtConfig["authorization"], boolean>] | ["@nuxt/test-utils/module", Exclude<NuxtConfig["testUtils"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["vuetify-nuxt-module", Exclude<NuxtConfig["vuetify"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["nuxt-security", Exclude<NuxtConfig["security"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module.cjs", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["nuxt-leaflet"]?: ModuleDependencyMeta<typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["pinia"]?: ModuleDependencyMeta<typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["vueuse"]?: ModuleDependencyMeta<typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicDrawer"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicMenu"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicMenu/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicModal"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicModal/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicCommand"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicCommand/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicCookie"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicCookie/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicDraggable"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicEmitter"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicError"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicError/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicMarquee"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicPie"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicPie/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicNoise"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicNoise/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicPlayer"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicScroll"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicScroll/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt/MagicToast"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/dist/plugins/MagicToast/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@maas/vue-equipment/nuxt"]?: ModuleDependencyMeta<typeof import("@maas/vue-equipment/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/mcp-toolkit"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-tiptap-editor"]?: ModuleDependencyMeta<typeof import("nuxt-tiptap-editor").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["auth-utils"]?: ModuleDependencyMeta<typeof import("nuxt-auth-utils").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-authorization"]?: ModuleDependencyMeta<typeof import("nuxt-authorization").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/test-utils"]?: ModuleDependencyMeta<typeof import("@nuxt/test-utils/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["vuetify-nuxt-module"]?: ModuleDependencyMeta<typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/i18n"]?: ModuleDependencyMeta<typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-security"]?: ModuleDependencyMeta<typeof import("nuxt-security").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxtseo"]?: ModuleDependencyMeta<typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/sitemap"]?: ModuleDependencyMeta<typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-link-checker"]?: ModuleDependencyMeta<typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-schema-org"]?: ModuleDependencyMeta<typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-seo-utils"]?: ModuleDependencyMeta<typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/leaflet`
     * @see https://www.npmjs.com/package/@nuxtjs/leaflet
     */
    ["leaflet"]: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicDrawer"]: typeof import("@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicMenu/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicMenu"]: typeof import("@maas/vue-equipment/dist/plugins/MagicMenu/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicModal/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicModal"]: typeof import("@maas/vue-equipment/dist/plugins/MagicModal/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicCommand/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicCommand"]: typeof import("@maas/vue-equipment/dist/plugins/MagicCommand/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicCookie/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicCookie"]: typeof import("@maas/vue-equipment/dist/plugins/MagicCookie/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicDraggable"]: typeof import("@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicEmitter"]: typeof import("@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicError/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicError"]: typeof import("@maas/vue-equipment/dist/plugins/MagicError/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicMarquee"]: typeof import("@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicPie/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicPie"]: typeof import("@maas/vue-equipment/dist/plugins/MagicPie/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicNoise/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicNoise"]: typeof import("@maas/vue-equipment/dist/plugins/MagicNoise/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicPlayer"]: typeof import("@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicScroll/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicScroll"]: typeof import("@maas/vue-equipment/dist/plugins/MagicScroll/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicToast/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicToast"]: typeof import("@maas/vue-equipment/dist/plugins/MagicToast/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/nuxt`
     * @see https://www.npmjs.com/package/@maas/vue-equipment/nuxt
     */
    ["vueEquipment"]: typeof import("@maas/vue-equipment/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mcp-toolkit`
     * @see https://mcp-toolkit.nuxt.dev/getting-started/installation
     */
    ["mcp"]: typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-tiptap-editor`
     * @see https://www.npmjs.com/package/nuxt-tiptap-editor
     */
    ["tiptap"]: typeof import("nuxt-tiptap-editor").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     * @see https://www.npmjs.com/package/nuxt-auth-utils
     */
    ["auth"]: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-authorization`
     * @see https://www.npmjs.com/package/nuxt-authorization
     */
    ["authorization"]: typeof import("nuxt-authorization").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/test-utils/module`
     * @see https://www.npmjs.com/package/@nuxt/test-utils/module
     */
    ["testUtils"]: typeof import("@nuxt/test-utils/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `vuetify-nuxt-module`
     * @see https://www.npmjs.com/package/vuetify-nuxt-module
     */
    ["vuetify"]: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-security`
     * @see https://www.npmjs.com/package/nuxt-security
     */
    ["security"]: typeof import("nuxt-security").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/leaflet`
     * @see https://www.npmjs.com/package/@nuxtjs/leaflet
     */
    ["leaflet"]?: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicDrawer"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicMenu/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicMenu"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicMenu/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicModal/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicModal"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicModal/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicCommand/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicCommand"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicCommand/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicCookie/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicCookie"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicCookie/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicDraggable"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicEmitter"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicError/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicError"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicError/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicMarquee"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicPie/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicPie"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicPie/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicNoise/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicNoise"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicNoise/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicPlayer"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicScroll/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicScroll"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicScroll/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/dist/plugins/MagicToast/nuxt`
     */
    ["@maas/vue-equipment/nuxt/MagicToast"]?: typeof import("@maas/vue-equipment/dist/plugins/MagicToast/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@maas/vue-equipment/nuxt`
     * @see https://www.npmjs.com/package/@maas/vue-equipment/nuxt
     */
    ["vueEquipment"]?: typeof import("@maas/vue-equipment/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mcp-toolkit`
     * @see https://mcp-toolkit.nuxt.dev/getting-started/installation
     */
    ["mcp"]?: typeof import("@nuxtjs/mcp-toolkit").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-tiptap-editor`
     * @see https://www.npmjs.com/package/nuxt-tiptap-editor
     */
    ["tiptap"]?: typeof import("nuxt-tiptap-editor").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     * @see https://www.npmjs.com/package/nuxt-auth-utils
     */
    ["auth"]?: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-authorization`
     * @see https://www.npmjs.com/package/nuxt-authorization
     */
    ["authorization"]?: typeof import("nuxt-authorization").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/test-utils/module`
     * @see https://www.npmjs.com/package/@nuxt/test-utils/module
     */
    ["testUtils"]?: typeof import("@nuxt/test-utils/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `vuetify-nuxt-module`
     * @see https://www.npmjs.com/package/vuetify-nuxt-module
     */
    ["vuetify"]?: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-security`
     * @see https://www.npmjs.com/package/nuxt-security
     */
    ["security"]?: typeof import("nuxt-security").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/leaflet", Exclude<NuxtConfig["leaflet"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicDrawer/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicDrawer"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicMenu/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicMenu"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicModal/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicModal"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicCommand/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicCommand"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicCookie/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicCookie"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicDraggable/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicDraggable"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicEmitter/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicEmitter"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicError/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicError"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicMarquee/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicMarquee"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicPie/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicPie"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicNoise/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicNoise"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicPlayer/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicPlayer"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicScroll/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicScroll"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/@maas/vue-equipment/dist/plugins/MagicToast/nuxt.mjs", Exclude<NuxtConfig["@maas/vue-equipment/nuxt/MagicToast"], boolean>] | ["@maas/vue-equipment/nuxt", Exclude<NuxtConfig["vueEquipment"], boolean>] | ["@nuxtjs/mcp-toolkit", Exclude<NuxtConfig["mcp"], boolean>] | ["nuxt-tiptap-editor", Exclude<NuxtConfig["tiptap"], boolean>] | ["nuxt-auth-utils", Exclude<NuxtConfig["auth"], boolean>] | ["nuxt-authorization", Exclude<NuxtConfig["authorization"], boolean>] | ["@nuxt/test-utils/module", Exclude<NuxtConfig["testUtils"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["vuetify-nuxt-module", Exclude<NuxtConfig["vuetify"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["nuxt-security", Exclude<NuxtConfig["security"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module.cjs", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>] | ["C:/Users/Basti/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/Meeovi_Framework/Ecosystem/base-app/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>])[],
  }
}