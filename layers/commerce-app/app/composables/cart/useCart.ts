import { ref, computed, readonly } from 'vue'
import { createDirectus, rest, readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk'
import { useCoupons } from '../marketing/getCoupons'

export interface CartItem {
  id: string
  cart_id: string
  product_id: string
  variant_id?: string
  quantity: number
  price: number
  total: number
  product?: any
  variant?: any
}

export interface Cart {
  id: string
  customer_id?: string
  session_id?: string
  items?: CartItem[]
  subtotal: number
  tax_amount: number
  shipping_amount: number
  discount_amount: number
  total: number
  currency: string
  coupon_code?: string
  created_at: string
  updated_at: string
}

// Define schema types for Directus collections
type Schema = {
  cart: Cart
  cart_items: CartItem
  products: any
}

export const useCart = () => {
  const config = useRuntimeConfig()
  const client = createDirectus<Schema>(config.public.directus.url as string).with(rest())
  const { $auth } = useNuxtApp() as { $auth?: { user?: { id: string } } }
  
  const cart = ref<Cart | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  // Get cart identifier (customer ID or session ID)
  const getCartIdentifier = () => {
    // Check if $auth exists and has user property
    if ($auth && $auth.user) {
      return { customer_id: $auth.user.id }
    }
    
    // Use session ID for guest users
    let sessionId = localStorage.getItem('cart_session_id')
    if (!sessionId) {
      sessionId = `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('cart_session_id', sessionId)
    }
    return { session_id: sessionId }
  }

  const fetchCart = async () => {
    try {
      loading.value = true
      error.value = null
      
      const identifier = getCartIdentifier()
      
      const result = await client.request(
        readItems('cart', {
          filter: identifier,
          limit: 1,
          fields: [
            '*',
            'items.*',
            'items.product.*',
            'items.product.images.*',
            'items.variant.*'
          ]
        })
      )
      
      cart.value = result.length > 0 ? result[0] : null
    } catch (err) {
      error.value = err as Error
      console.error('Error fetching cart:', err)
    } finally {
      loading.value = false
    }
  }

  const createCart = async () => {
    try {
      const identifier = getCartIdentifier()
      
      const newCart = await client.request(
        createItem('cart', {
          ...identifier,
          subtotal: 0,
          tax_amount: 0,
          shipping_amount: 0,
          discount_amount: 0,
          total: 0,
          currency: 'USD',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
      )
      
      cart.value = newCart
      return newCart
    } catch (err) {
      error.value = err as Error
      throw err
    }
  }

  const addToCart = async (productId: string, quantity: number = 1, variantId?: string) => {
    try {
      loading.value = true
      error.value = null
      
      // Ensure cart exists
      if (!cart.value) {
        await createCart()
      }
      
      if (!cart.value) throw new Error('Failed to create cart')
      
      // Get product details
      const product = await client.request(
        readItem('products', productId, {
          fields: ['*', 'images.*']
        })
      )
      
      if (!product) throw new Error('Product not found')
      
      // Check if item already exists in cart
      const existingItem = cart.value.items?.find(
        item => item.product_id === productId && item.variant_id === variantId
      )
      
      if (existingItem) {
        // Update existing item quantity
        await updateCartItem(existingItem.id, existingItem.quantity + quantity)
      } else {
        // Add new item to cart
        const price = product.sale_price || product.price
        
        await client.request(
          createItem('cart_items', {
            cart_id: cart.value.id,
            product_id: productId,
            variant_id: variantId,
            quantity,
            price,
            total: price * quantity
          })
        )
      }
      
      // Refresh cart
      await fetchCart()
      await updateCartTotals()
    } catch (err) {
      error.value = err as Error
      console.error('Error adding to cart:', err)
    } finally {
      loading.value = false
    }
  }

  const removeFromCart = async (itemId: string) => {
    try {
      loading.value = true
      error.value = null
      
      await client.request(deleteItem('cart_items', itemId))
      
      // Refresh cart
      await fetchCart()
      await updateCartTotals()
    } catch (err) {
      error.value = err as Error
      console.error('Error removing from cart:', err)
    } finally {
      loading.value = false
    }
  }

  const updateCartItem = async (itemId: string, quantity: number) => {
    try {
      loading.value = true
      error.value = null
      
      if (quantity <= 0) {
        await removeFromCart(itemId)
        return
      }
      
      // Get current item to calculate new total
      const item = await client.request(readItem('cart_items', itemId))
      
      await client.request(
        updateItem('cart_items', itemId, {
          quantity,
          total: item.price * quantity,
          updated_at: new Date().toISOString()
        })
      )
      
      // Refresh cart
      await fetchCart()
      await updateCartTotals()
    } catch (err) {
      error.value = err as Error
      console.error('Error updating cart item:', err)
    } finally {
      loading.value = false
    }
  }

  const updateCartTotals = async () => {
    if (!cart.value) return
    
    try {
      const subtotal = cart.value.items?.reduce((sum, item) => sum + item.total, 0) || 0
      const taxAmount = subtotal * 0.08 // 8% tax rate - should be configurable
      const total = subtotal + taxAmount + (cart.value.shipping_amount || 0) - (cart.value.discount_amount || 0)
      
      await client.request(
        updateItem('cart', cart.value.id, {
          subtotal,
          tax_amount: taxAmount,
          total,
          updated_at: new Date().toISOString()
        })
      )
      
      // Update local cart state
      cart.value.subtotal = subtotal
      cart.value.tax_amount = taxAmount
      cart.value.total = total
    } catch (err) {
      console.error('Error updating cart totals:', err)
    }
  }

  const applyCoupon = async (couponCode: string) => {
    if (!cart.value) return false
    
    try {
      loading.value = true
      
      // Validate coupon (assuming we have a useCoupons composable)
      const { validateCoupon } = useCoupons()
      const validation = await validateCoupon(couponCode, cart.value.subtotal)
      
      if (!validation.valid) {
        throw new Error(validation.message)
      }
      
      const coupon = validation.coupon
      let discountAmount = 0
      
      if (coupon && coupon.discount_type === 'percentage') {
        discountAmount = (cart.value.subtotal * coupon.discount_value) / 100
      } else if (coupon) {
        discountAmount = coupon.discount_value
      }
      
      // Apply maximum discount limit if set
      if (coupon && coupon.max_discount_amount && discountAmount > coupon.max_discount_amount) {
        discountAmount = coupon.max_discount_amount
      }
      
      await client.request(
        updateItem('cart', cart.value.id, {
          coupon_code: couponCode,
          discount_amount: discountAmount,
          updated_at: new Date().toISOString()
        })
      )
      
      await updateCartTotals()
      await fetchCart()
      
      return true
    } catch (err) {
      error.value = err as Error
      console.error('Error applying coupon:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  const removeCoupon = async () => {
    if (!cart.value) return
    
    try {
      await client.request(
        updateItem('cart', cart.value.id, {
          coupon_code: null,
          discount_amount: 0,
          updated_at: new Date().toISOString()
        })
      )
      
      await updateCartTotals()
      await fetchCart()
    } catch (err) {
      console.error('Error removing coupon:', err)
    }
  }

  const clearCart = async () => {
    if (!cart.value) return
    
    try {
      loading.value = true
      
      // Delete all cart items
      if (cart.value.items?.length) {
        for (const item of cart.value.items) {
          await client.request(deleteItem('cart_items', item.id))
        }
      }
      
      // Reset cart totals
      await client.request(
        updateItem('cart', cart.value.id, {
          subtotal: 0,
          tax_amount: 0,
          discount_amount: 0,
          total: 0,
          coupon_code: null,
          updated_at: new Date().toISOString()
        })
      )
      
      await fetchCart()
    } catch (err) {
      console.error('Error clearing cart:', err)
    } finally {
      loading.value = false
    }
  }

  // Computed properties
  const itemCount = computed(() => {
    return cart.value?.items?.reduce((count, item) => count + item.quantity, 0) || 0
  })

  const isEmpty = computed(() => {
    return !cart.value?.items?.length
  })

  const hasItems = computed(() => {
    return !isEmpty.value
  })

  return {
    cart: readonly(cart),
    loading: readonly(loading),
    error: readonly(error),
    itemCount,
    isEmpty,
    hasItems,
    fetchCart,
    addToCart,
    removeFromCart,
    updateCartItem,
    applyCoupon,
    removeCoupon,
    clearCart
  }
}
