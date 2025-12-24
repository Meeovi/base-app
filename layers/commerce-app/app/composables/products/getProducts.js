import { createDirectus, rest, readItems, readItem, aggregate } from '@directus/sdk'

export const useProducts = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getProducts = async (options = {}) => {
    try {
      const {
        limit = 20,
        page = 1,
        search = '',
        category = null,
        status = 'published',
        sort = ['-created_at'],
        filters = {}
      } = options

      const filter = {
        status: { _eq: status },
        ...filters
      }

      if (search) {
        filter._or = [
          { name: { _contains: search } },
          { description: { _contains: search } },
          { sku: { _contains: search } }
        ]
      }

      if (category) {
        filter.categories = { categories_id: { _eq: category } }
      }

      return await client.request(
        readItems('products', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort,
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*',
            'inventory.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching products:', error)
      return []
    }
  }

  const getProductById = async (id) => {
    try {
      return await client.request(
        readItem('products', id, {
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*',
            'inventory.*',
            'reviews.*',
            'related_products.related_products_id.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching product:', error)
      return null
    }
  }

  const getProductBySku = async (sku) => {
    try {
      const products = await client.request(
        readItems('products', {
          filter: { sku: { _eq: sku } },
          limit: 1,
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*',
            'inventory.*'
          ]
        })
      )
      return products[0] || null
    } catch (error) {
      console.error('Error fetching product by SKU:', error)
      return null
    }
  }

  const getProductsByCategory = async (categoryId, options = {}) => {
    try {
      const { limit = 20, page = 1, sort = ['-created_at'] } = options

      return await client.request(
        readItems('products', {
          filter: {
            status: { _eq: 'published' },
            categories: { categories_id: { _eq: categoryId } }
          },
          limit,
          offset: (page - 1) * limit,
          sort,
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching products by category:', error)
      return []
    }
  }

  const getFeaturedProducts = async (limit = 10) => {
    try {
      return await client.request(
        readItems('products', {
          filter: {
            status: { _eq: 'published' },
            is_featured: { _eq: true }
          },
          limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching featured products:', error)
      return []
    }
  }

  const getLatestProducts = async (limit = 10) => {
    try {
      return await client.request(
        readItems('products', {
          filter: {
            status: { _eq: 'published' }
          },
          limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching latest products:', error)
      return []
    }
  }

  const getProductsOnSale = async (limit = 20) => {
    try {
      return await client.request(
        readItems('products', {
          filter: {
            status: { _eq: 'published' },
            sale_price: { _nnull: true },
            sale_price: { _lt: { _field: 'regular_price' } }
          },
          limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching products on sale:', error)
      return []
    }
  }

  const getRelatedProducts = async (productId, limit = 6) => {
    try {
      const product = await getProductById(productId)
      if (!product) return []

      // Get explicitly related products
      const relatedProducts = product.related_products || []
      
      if (relatedProducts.length >= limit) {
        return relatedProducts.slice(0, limit)
      }

      // If not enough related products, get products from same categories
      const categoryIds = product.categories?.map(cat => cat.categories_id.id) || []
      
      if (categoryIds.length > 0) {
        const categoryProducts = await client.request(
          readItems('products', {
            filter: {
              status: { _eq: 'published' },
              id: { _neq: productId },
              categories: { categories_id: { _in: categoryIds } }
            },
            limit: limit - relatedProducts.length,
            sort: ['-created_at'],
            fields: [
              '*',
              'categories.categories_id.*',
              'images.*',
              'variants.*'
            ]
          })
        )
        
        return [...relatedProducts, ...categoryProducts]
      }

      return relatedProducts
    } catch (error) {
      console.error('Error fetching related products:', error)
      return []
    }
  }

  const searchProducts = async (query, options = {}) => {
    try {
      const { limit = 20, page = 1, filters = {} } = options

      const filter = {
        status: { _eq: 'published' },
        _or: [
          { name: { _contains: query } },
          { description: { _contains: query } },
          { sku: { _contains: query } },
          { 'categories.categories_id.name': { _contains: query } }
        ],
        ...filters
      }

      return await client.request(
        readItems('products', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error searching products:', error)
      return []
    }
  }

  const getProductCount = async (filters = {}) => {
    try {
      const filter = {
        status: { _eq: 'published' },
        ...filters
      }

      const result = await client.request(
        aggregate('products', {
          query: {
            filter,
            aggregate: { count: '*' }
          }
        })
      )

      return result[0]?.count || 0
    } catch (error) {
      console.error('Error getting product count:', error)
      return 0
    }
  }

  return {
    getProducts,
    getProductById,
    getProductBySku,
    getProductsByCategory,
    getFeaturedProducts,
    getLatestProducts,
    getProductsOnSale,
    getRelatedProducts,
    searchProducts,
    getProductCount
  }
}
