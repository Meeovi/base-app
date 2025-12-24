import { createDirectus, rest, readItems } from '@directus/sdk'

export const useRelatedProducts = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getRelatedProducts = async (productId) => {
    return await client.request(
      readItems('product_relations', {
        filter: { product_id: { _eq: productId } },
        fields: ['*', 'related_product.*']
      })
    )
  }

  const getProductsByCategory = async (categoryId, limit = 10) => {
    return await client.request(
      readItems('products', {
        filter: { category_id: { _eq: categoryId } },
        limit,
        fields: ['*']
      })
    )
  }

  const getSimilarProducts = async (productId, attributes) => {
    return await client.request(
      readItems('products', {
        filter: {
          _and: [
            { id: { _neq: productId } },
            { attributes: { _contains: attributes } }
          ]
        },
        limit: 8
      })
    )
  }

  return { getRelatedProducts, getProductsByCategory, getSimilarProducts }
}