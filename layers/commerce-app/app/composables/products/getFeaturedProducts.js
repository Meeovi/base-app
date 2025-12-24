import { createDirectus, rest, readItems } from '@directus/sdk'

export const useFeaturedProducts = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getFeaturedProducts = async (options = {}) => {
    try {
      const {
        limit = 10,
        category = null,
        sort = ['-featured_order', '-created_at'],
        includeVariants = true
      } = options

      const filter = {
        status: { _eq: 'published' },
        is_featured: { _eq: true }
      }

      if (category) {
        filter.categories = { categories_id: { _eq: category } }
      }

      const fields = [
        '*',
        'categories.categories_id.*',
        'images.*'
      ]

      if (includeVariants) {
        fields.push('variants.*')
      }

      return await client.request(
        readItems('products', {
          filter,
          limit,
          sort,
          fields
        })
      )
    } catch (error) {
      console.error('Error fetching featured products:', error)
      return []
    }
  }

  const getFeaturedProductsByCategory = async (categoryId, limit = 6) => {
    try {
      return await client.request(
        readItems('products', {
          filter: {
            status: { _eq: 'published' },
            is_featured: { _eq: true },
            categories: { categories_id: { _eq: categoryId } }
          },
          limit,
          sort: ['-featured_order', '-created_at'],
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching featured products by category:', error)
      return []
    }
  }

  const getHomepageFeatured = async () => {
    try {
      return await client.request(
        readItems('products', {
          filter: {
            status: { _eq: 'published' },
            is_featured: { _eq: true },
            show_on_homepage: { _eq: true }
          },
          limit: 8,
          sort: ['-featured_order', '-created_at'],
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching homepage featured products:', error)
      return []
    }
  }

  const getFeaturedDeals = async (limit = 6) => {
    try {
      return await client.request(
        readItems('products', {
          filter: {
            status: { _eq: 'published' },
            is_featured: { _eq: true },
            sale_price: { _nnull: true },
            sale_price: { _lt: { _field: 'regular_price' } }
          },
          limit,
          sort: ['-featured_order', '-created_at'],
          fields: [
            '*',
            'categories.categories_id.*',
            'images.*',
            'variants.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching featured deals:', error)
      return []
    }
  }

  return {
    getFeaturedProducts,
    getFeaturedProductsByCategory,
    getHomepageFeatured,
    getFeaturedDeals
  }
}
