import { createClient } from '@supabase/supabase-js'

let cachedClient: ReturnType<typeof createClient> | null = null

export function createSupabaseClient() {
  if (cachedClient) return cachedClient
  // Prefer environment variables for server-side usage
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) {
    throw new Error('Supabase URL or anon key is not set in runtime config or env')
  }
  cachedClient = createClient(url, key)
  return cachedClient
}

export function useSupabaseClient() {
  return createSupabaseClient()
}
