/**
 * Directus Client Utility
 * 
 * Provides a centralized Directus SDK client for server-side operations
 * Supports both REST and GraphQL operations with authentication
 */

import { createDirectus, rest, graphql, authentication, staticToken, readItems } from '@directus/sdk'
import type { RestClient, GraphqlClient, AuthenticationClient, StaticTokenClient } from '@directus/sdk'

// Define the Directus schema interface
interface DirectusSchema {
  users: DirectusUser[]
}

export interface DirectusUser {
  id: string
  email: string
  first_name: string | null
  last_name: string | null
  avatar: string | null
  password: string | null
  role: string | null
  status: 'active' | 'suspended' | 'archived'
  created_at: string
  updated_at: string
  verified_at: string | null
  email_to_verify: string | null
}

let _directusClient: ReturnType<typeof createDirectus<DirectusSchema>> & 
  RestClient<DirectusSchema> & 
  GraphqlClient<DirectusSchema> & 
  AuthenticationClient<DirectusSchema> &
  StaticTokenClient<DirectusSchema> | null = null

/**
 * Get or create a Directus client for server-side operations
 * Uses the admin token for privileged operations
 */
export function serverDirectusClient() {
  const config = useRuntimeConfig()
  
  const directusUrl = config.directus?.url || config.public?.directus?.url || process.env.DIRECTUS_URL
  const adminToken = config.directus?.adminToken || process.env.DIRECTUS_ADMIN_TOKEN
  
  if (!directusUrl) {
    throw createError({
      statusCode: 500,
      message: 'Missing Directus configuration. Please set DIRECTUS_URL environment variable.'
    })
  }
  
  if (!_directusClient) {
    _directusClient = createDirectus<DirectusSchema>(directusUrl)
      .with(rest())
      .with(graphql())
      .with(authentication('json'))
      .with(staticToken(adminToken || ''))
  }
  
  return _directusClient
}

/**
 * Create a Directus client with a specific user token
 * Used for authenticated user operations
 */
export function createDirectusUserClient(token: string) {
  const config = useRuntimeConfig()
  const directusUrl = config.directus?.url || config.public?.directus?.url || process.env.DIRECTUS_URL
  
  if (!directusUrl) {
    throw createError({
      statusCode: 500,
      message: 'Missing Directus URL configuration.'
    })
  }
  
  return createDirectus<DirectusSchema>(directusUrl)
    .with(rest())
    .with(graphql())
    .with(authentication('json'))
    .with(staticToken(token))
}

/**
 * Verify a Directus access token and get user information
 */
export async function verifyDirectusToken(token: string): Promise<DirectusUser | null> {
  try {
    const config = useRuntimeConfig()
    const directusUrl = config.directus?.url || config.public?.directus?.url
    
    if (!directusUrl) {
      return null
    }
    
    // Make direct API call to verify token
    const response = await $fetch<DirectusUser>(`${directusUrl}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    return response
  } catch (error) {
    console.error('Failed to verify Directus token:', error)
    return null
  }
}
