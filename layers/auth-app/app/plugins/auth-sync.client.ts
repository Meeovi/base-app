import { createDirectus, rest, readItems, createItem } from '@directus/sdk'

export default defineNuxtPlugin(async () => {
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()

  // Supabase plugin may not have run yet; bail if not available.
  if (!nuxtApp.$supabase) return

  const { $supabase } = nuxtApp

  const directus = createDirectus(config.public.directus.url).with(rest())

  const {
    data: { user }
  } = await $supabase.auth.getUser()

  if (!user) return

  // 1. Check if profile already exists
  const existing = await directus.request(
    readItems('profiles', {
      filter: {
        supabase_user_id: { _eq: user.id }
      },
      limit: 1
    })
  )

  if (existing.length) return // already synced

  // 2. Decide role
  const wantsSeller = user.user_metadata?.wants_seller === true
  const roleKey = wantsSeller ? 'seller' : 'buyer'

  // 3. Fetch role
  const roles = (await directus.request(
    readItems('directus_roles', {
      filter: { key: { _eq: roleKey } },
      limit: 1
    })
  )) as Record<string, any>[]

  if (!roles || roles.length === 0) {
    console.error(`Role "${roleKey}" not found`)
    return
  }

  const roleId = roles[0]?.id
  if (!roleId) {
    console.error(`Role id for "${roleKey}" is missing`)
    return
  }

  // 4. Create profile
  await directus.request(
    createItem('profiles', {
      supabase_user_id: user.id,
      display_name: user.user_metadata?.username ?? user.email,
      role: roleId
    })
  )
})
