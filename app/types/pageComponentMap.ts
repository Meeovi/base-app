// types/pageComponentMap.ts
// Typed mapping for page name/slug -> async component loader
import type { DefineComponent } from 'vue'
import type { AsyncComponentLoader } from './componentMap'

export const pageComponentMap: Record<string, AsyncComponentLoader> = {
  'meeovi global': () => import('~/components/pages/meeoviGlobal.vue'),
  'pickup-locations': () => import('~/components/pages/pickup-locations.vue'),
  'upload center': () => import('~/components/pages/upload.vue'),
  'memories': () => import('#social/app/components/features/memories.vue'),
  'birthdays-center': () => import('#social/app/components/features/birthdays.vue'),
  'events': () => import('#social/app/components/features/events.vue'),
  'friends': () => import('#social/app/components/features/friends.vue'),
  'hashtags': () => import('#social/app/components/features/hashtags.vue'),
  'feeds': () => import('#social/app/components/features/feeds.vue'),
  'radio': () => import('#social/app/components/features/radio.vue'),
  'media-center': () => import('#social/app/components/features/media.vue'),
  'members': () => import('#social/app/components/features/members.vue'),
  'spaces': () => import('#social/app/components/features/spaces.vue'),
  'vibez': () => import('#social/app/components/features/vibez.vue'),
  'showcases': () => import('#commerce/app/components/content/pages/showcases.vue'),
  'notifications': () => import('~/components/pages/notifications.vue'),
  'seller dashboard': () => import('~/components/pages/sellerdashboard.vue'),
  'offline': () => import('~/components/pages/offline.vue'),
  'checkout': () => import('~/components/pages/account/checkout.vue'),
  'success': () => import('~/components/pages/account/success.vue'),
}

export default pageComponentMap
