import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["@unlok-co/nuxt-stripe"]?: ModuleDependencyMeta<typeof import("@unlok-co/nuxt-stripe").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-commerce"]?: ModuleDependencyMeta<typeof import("./../../../../modules/nuxt-commerce/src/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@unlok-co/nuxt-stripe`
     */
    ["stripe"]: typeof import("@unlok-co/nuxt-stripe").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `./../../../../modules/nuxt-commerce/src/module`
     */
    ["commerce"]: typeof import("./../../../../modules/nuxt-commerce/src/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@unlok-co/nuxt-stripe`
     */
    ["stripe"]?: typeof import("@unlok-co/nuxt-stripe").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `./../../../../modules/nuxt-commerce/src/module`
     */
    ["commerce"]?: typeof import("./../../../../modules/nuxt-commerce/src/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@unlok-co/nuxt-stripe", Exclude<NuxtConfig["stripe"], boolean>] | ["./../../../../modules/nuxt-commerce/src/module", Exclude<NuxtConfig["commerce"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module.cjs", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["@unlok-co/nuxt-stripe"]?: ModuleDependencyMeta<typeof import("@unlok-co/nuxt-stripe").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-commerce"]?: ModuleDependencyMeta<typeof import("./../../../../modules/nuxt-commerce/src/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@unlok-co/nuxt-stripe`
     * @see https://www.npmjs.com/package/@unlok-co/nuxt-stripe
     */
    ["stripe"]: typeof import("@unlok-co/nuxt-stripe").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `./../../../../modules/nuxt-commerce/src/module`
     * @see https://www.npmjs.com/package/./../../../../modules/nuxt-commerce/src/module
     */
    ["commerce"]: typeof import("./../../../../modules/nuxt-commerce/src/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@unlok-co/nuxt-stripe`
     * @see https://www.npmjs.com/package/@unlok-co/nuxt-stripe
     */
    ["stripe"]?: typeof import("@unlok-co/nuxt-stripe").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `./../../../../modules/nuxt-commerce/src/module`
     * @see https://www.npmjs.com/package/./../../../../modules/nuxt-commerce/src/module
     */
    ["commerce"]?: typeof import("./../../../../modules/nuxt-commerce/src/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@unlok-co/nuxt-stripe", Exclude<NuxtConfig["stripe"], boolean>] | ["./../../../../modules/nuxt-commerce/src/module", Exclude<NuxtConfig["commerce"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module.cjs", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}