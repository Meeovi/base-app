import { createClient } from '@supabase/supabase-js'
import type { Database } from '~/types/supabase'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const url = config.public.supabase.url
  const key = config.public.supabase.key

  if (!url || !key) {
    console.warn('[supabase] missing supabase runtime config')
  }

  const supabase = createClient<Database>(url, key)

  return {
    provide: {
      supabase,
    },
  }
})
