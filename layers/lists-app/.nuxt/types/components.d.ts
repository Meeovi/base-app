
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'RelatedList': typeof import("../../app/components/Related/list.vue").default
  'RelatedRelatedlists': typeof import("../../app/components/Related/relatedlists.vue").default
  'FeaturesArchived': typeof import("../../app/components/features/archived.vue").default
  'FeaturesBookmarks': typeof import("../../app/components/features/bookmarks.vue").default
  'FeaturesLists': typeof import("../../app/components/features/lists.vue").default
  'FeaturesStarred': typeof import("../../app/components/features/starred.vue").default
  'ListsListItemCard': typeof import("../../app/components/lists/ListItemCard.vue").default
  'ListsAddBookmark': typeof import("../../app/components/lists/add-bookmark.vue").default
  'ListsAddListItem': typeof import("../../app/components/lists/add-list-item.vue").default
  'ListsAddList': typeof import("../../app/components/lists/add-list.vue").default
  'ListsListsettings': typeof import("../../app/components/lists/listsettings.vue").default
  'ListsUpdateBookmark': typeof import("../../app/components/lists/update-bookmark.vue").default
  'ListsUpdateList': typeof import("../../app/components/lists/update-list.vue").default
  'MediaPlayer': typeof import("../../app/components/media/MediaPlayer.vue").default
  'PartialsAddtolist': typeof import("../../app/components/partials/addtolist.vue").default
  'PartialsCreateListBtn': typeof import("../../app/components/partials/createListBtn.vue").default
  'PartialsListBtn': typeof import("../../app/components/partials/listBtn.vue").default
  'TasksTaskItem': typeof import("../../app/components/tasks/TaskItem.vue").default
  'NuxtWelcome': typeof import("../../../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'NuxtPage': typeof import("../../../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyRelatedList': LazyComponent<typeof import("../../app/components/Related/list.vue").default>
  'LazyRelatedRelatedlists': LazyComponent<typeof import("../../app/components/Related/relatedlists.vue").default>
  'LazyFeaturesArchived': LazyComponent<typeof import("../../app/components/features/archived.vue").default>
  'LazyFeaturesBookmarks': LazyComponent<typeof import("../../app/components/features/bookmarks.vue").default>
  'LazyFeaturesLists': LazyComponent<typeof import("../../app/components/features/lists.vue").default>
  'LazyFeaturesStarred': LazyComponent<typeof import("../../app/components/features/starred.vue").default>
  'LazyListsListItemCard': LazyComponent<typeof import("../../app/components/lists/ListItemCard.vue").default>
  'LazyListsAddBookmark': LazyComponent<typeof import("../../app/components/lists/add-bookmark.vue").default>
  'LazyListsAddListItem': LazyComponent<typeof import("../../app/components/lists/add-list-item.vue").default>
  'LazyListsAddList': LazyComponent<typeof import("../../app/components/lists/add-list.vue").default>
  'LazyListsListsettings': LazyComponent<typeof import("../../app/components/lists/listsettings.vue").default>
  'LazyListsUpdateBookmark': LazyComponent<typeof import("../../app/components/lists/update-bookmark.vue").default>
  'LazyListsUpdateList': LazyComponent<typeof import("../../app/components/lists/update-list.vue").default>
  'LazyMediaPlayer': LazyComponent<typeof import("../../app/components/media/MediaPlayer.vue").default>
  'LazyPartialsAddtolist': LazyComponent<typeof import("../../app/components/partials/addtolist.vue").default>
  'LazyPartialsCreateListBtn': LazyComponent<typeof import("../../app/components/partials/createListBtn.vue").default>
  'LazyPartialsListBtn': LazyComponent<typeof import("../../app/components/partials/listBtn.vue").default>
  'LazyTasksTaskItem': LazyComponent<typeof import("../../app/components/tasks/TaskItem.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyNuxtPage': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
