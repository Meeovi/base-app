import * as DirectusSdk from '@directus/sdk'
const Directus = (DirectusSdk as any).Directus || (DirectusSdk as any).default || DirectusSdk

export function createDirectusClient(options?: { url?: string; token?: string }) {
  const url = options?.url || process.env.DIRECTUS_URL
  const token = options?.token || process.env.DIRECTUS_TOKEN
  if (!url) throw new Error('DIRECTUS_URL not set')
  const client = new Directus(url)
  if (token) client.auth.static(token)
  return client
}

export function useDirectusClient() {
  return createDirectusClient({ url: process.env.DIRECTUS_URL, token: process.env.DIRECTUS_TOKEN })
}
