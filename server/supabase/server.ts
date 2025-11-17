import { createClient } from '@supabase/supabase-js'
import type { H3Event } from 'h3'

let cachedAdminClient: ReturnType<typeof createClient> | null = null

function getAdminClient() {
  if (cachedAdminClient) return cachedAdminClient
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error('Supabase URL or service role key is not set in runtime config or env')
  }
  cachedAdminClient = createClient(url, key)
  return cachedAdminClient
}

export async function serverSupabaseUser(event: H3Event) {
  const supabase = getAdminClient()

  // Try Bearer token first
  const authHeader = event.node.req.headers.authorization || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null

  if (token) {
    const { data, error } = await supabase.auth.getUser(token)
    if (error) return null
    return data?.user ?? null
  }

  // Fallback to cookie named 'sb:token' (common for Supabase client)
  const cookieHeader = event.node.req.headers.cookie || ''
  const match = cookieHeader.match(/sb:token=([^;]+)/)
  const cookieToken = match ? decodeURIComponent(match[1]) : null
  if (cookieToken) {
    const { data, error } = await supabase.auth.getUser(cookieToken)
    if (error) return null
    return data?.user ?? null
  }

  return null
}
