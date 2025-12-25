import { ref } from 'vue'

const KEY = 'meeovi_recently_viewed'

export function addViewed(id: string | number) {
  if (!process.client || !id) return
  try {
    const raw = localStorage.getItem(KEY) || '[]'
    let arr = JSON.parse(raw)
    if (!Array.isArray(arr)) arr = []
    arr = arr.filter((x: any) => x !== id)
    arr.unshift(id)
    arr = arr.slice(0, 10)
    localStorage.setItem(KEY, JSON.stringify(arr))
  } catch (e) {
    // ignore storage errors
    // eslint-disable-next-line no-console
    console.warn('useRecentlyViewed.addViewed error', e)
  }
}

export async function fetchProductsByIds(ids: Array<string | number>) {
  if (!ids || ids.length === 0) return []
  try {
    const { $directus, $readItems } = useNuxtApp()
    const res = await $directus.request(
      $readItems('products', {
        fields: [
          '*',
          'products.products_id.*',
          'products.products_id.image.*',
          'products.products_id.image.*',
          'currency.currency_id.*',
          'brands.brands_id.*',
          'image.*'
        ],
        filter: {
          id: {
            _in: ids
          }
        },
        limit: ids.length
      })
    )

    const items = Array.isArray(res) ? res : (res?.data || res?.items || [])
    const map = new Map(items.map((i: any) => [i.id, i]))
    return ids.map((id) => map.get(id)).filter(Boolean)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('useRecentlyViewed.fetchProductsByIds error', e)
    return []
  }
}

export function useRecentlyViewed() {
  const products = ref<any[]>([])

  async function load() {
    if (!process.client) return
    try {
      const raw = localStorage.getItem(KEY) || '[]'
      const ids = JSON.parse(raw)
      if (!Array.isArray(ids) || ids.length === 0) {
        products.value = []
        return
      }
      const uniqueIds = [...new Set(ids)].slice(0, 10)
      products.value = await fetchProductsByIds(uniqueIds)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('useRecentlyViewed.load error', e)
    }
  }

  return {
    products,
    load,
    addViewed
  }
}
