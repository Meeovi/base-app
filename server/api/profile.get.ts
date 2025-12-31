import { createDirectus, rest, readItems } from '@directus/sdk'

export default defineEventHandler(async (event) => {
  const { $supabase } = await useNuxtApp(event)
  const config = useRuntimeConfig()

  const {
    data: { user }
  } = await $supabase.auth.getUser()

  if (!user) {
    throw createError({ statusCode: 401 })
  }

  const directus = createDirectus(config.public.directus.url).with(rest())

  const profiles = await directus.request(
    readItems('profiles', {
      filter: {
        supabase_user_id: { _eq: user.id }
      },
      fields: ['id', 'display_name', 'role.key'],
      limit: 1
    })
  )

  return profiles[0] ?? null
})
