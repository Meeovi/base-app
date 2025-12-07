<template>
  <div>
    <!-- Shopping Cart Button -->
    <v-btn class="relative" icon="fas fa-basket-shopping" variant="text" @click.stop="drawer = !drawer"
      aria-label="Shopping Cart">
    </v-btn>
    <v-badge :content="totalQuantity" :value="totalQuantity" color="error" overlap />

    <!-- Cart Notification -->
    <v-snackbar v-model="cartNotification" timeout="2000" color="success">
      {{ notificationMessage }}
    </v-snackbar>

    <!-- Flyout Menu -->
    <v-navigation-drawer v-model="drawer" location="right" temporary class="cart-flyout">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Shopping Cart</span>
        <v-btn icon="fas:fa fa-x" @click="drawer = false">
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <div class="cart-items">
        <template v-if="cartStore?.items?.length">
          <v-list>
            <v-list-item v-for="item in cartStore?.items || []" :key="item.id" class="cart-item">
              <v-row align="center">
                <v-col cols="3">
                  <v-img :src="item.image || '/images/placeholder.png'" height="60" width="60" contain></v-img>
                </v-col>
                <v-col cols="6">
                  <div class="text-subtitle-1">{{ item.name }}</div>
                  <div class="text-caption">${{ item.price }}</div>
                  <div class="d-flex align-center mt-2">
                    <v-btn icon size="x-small" @click="updateQuantity(item.id, item.quantity - 1)"
                      :disabled="item.quantity <= 1">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <span class="mx-2">{{ item.quantity }}</span>
                    <v-btn icon size="x-small" @click="updateQuantity(item.id, item.quantity + 1)">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="3" class="text-right">
                  <v-btn color="error" icon size="small" @click="removeFromCart(item.id)" aria-label="Remove item">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>

          <v-divider class="my-4"></v-divider>

          <div class="px-4">
            <div class="d-flex justify-space-between mb-2">
              <span>Subtotal:</span>
              <span>${{ cartStore?.totalPrice || 0 }}</span>
            </div>
            <div class="d-flex justify-space-between mb-2">
              <span>Shipping:</span>
              <span>Calculated at checkout</span>
            </div>
            <v-divider class="my-2"></v-divider>
            <div class="d-flex justify-space-between font-weight-bold">
              <span>Total:</span>
              <span>${{ cartStore?.totalPrice || 0 }}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <v-alert type="info" class="mt-4 mx-4">
            Your cart is empty
          </v-alert>
        </template>
      </div>

      <!-- Cart Actions -->
      <v-card-actions class="checkout-section">
        <v-btn color="error" block @click="handleClearCart" :disabled="!cartStore?.items?.length"
          aria-label="Clear shopping cart">
          Clear Cart
        </v-btn>
      </v-card-actions>

      <!-- Checkout Button -->
      <v-card-actions class="checkout-section">
        <v-btn color="primary" block @click="handleCheckout" :disabled="!cartStore?.items?.length"
          aria-label="Proceed to checkout">
          Proceed to Checkout
        </v-btn>
      </v-card-actions>

      <!-- PayPal Buttons Container (renders after clicking checkout) -->
      <div v-if="showPayPal" class="px-4 pb-4">
        <div id="paypal-button-container"></div>
      </div>
    </v-navigation-drawer>

    <!-- Confirmation Dialog -->
    <v-dialog v-model="showConfirmDialog" max-width="400">
      <v-card>
        <v-card-title>Clear Cart?</v-card-title>
        <v-card-text>
          Are you sure you want to clear your cart?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="showConfirmDialog = false">Cancel</v-btn>
          <v-btn color="error" @click="confirmClear">Clear Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import {
    ref,
    computed,
    onMounted
  } from 'vue'
  import {
    useRouter
  } from 'vue-router'
  import {
    useCartStore
  } from '#commerce/app/stores/cart'
  import {
    useCart
  } from '#commerce/app/composables/cart/useCart'
  import {
    loadScript
  } from '@paypal/paypal-js'

  // Local state
  const cartNotification = ref(false)
  const notificationMessage = ref('')
  const drawer = ref(false)
  const router = useRouter()
  const showConfirmDialog = ref(false)
  const loading = ref(false)
  const cartId = useCookie('magento_cart_id')
  const showPayPal = ref(false)

  // Store and composable - only initialize on client side
  const cartStore = process.client ? useCartStore() : null
  const {
    removeFromCart,
    updateCartItem,
    fetchCart,
    clearCart: clearCartItems
  } = process.client ? useCart() : { 
    removeFromCart: () => {}, 
    updateCartItem: () => {}, 
    fetchCart: () => {}, 
    clearCart: () => {} 
  }
  
  // Initialize cart on component mount
  onMounted(async () => {
    if (process.client) {
      await fetchCart()
    }
  })

  // Computed properties
  const totalQuantity = computed(() => {
    if (!process.client || !cartStore || !cartStore.items) return 0
    return cartStore.items.reduce((total, item) => total + (item?.quantity || 0), 0)
  })

  // Methods
  const updateQuantity = async (itemId, newQuantity) => {
    try {
      loading.value = true
      await updateCartItem(itemId, newQuantity)
      showNotification('Cart updated')
    } catch (error) {
      console.error('Error updating quantity:', error)
    } finally {
      loading.value = false
    }
  }

  // Already defined in the destructured useCart()

  const handleCheckout = async () => {
    // Switch to PayPal flow: render PayPal Buttons in the flyout and initialize order creation
    try {
      loading.value = true
      showPayPal.value = true
      await createAndRenderPayPalButtons()
    } catch (error) {
      console.error('Error initializing PayPal checkout:', error)
      showNotification('Error initializing PayPal checkout')
    } finally {
      loading.value = false
    }
  }

  // Render PayPal Buttons into the cart flyout container
  const createAndRenderPayPalButtons = async () => {
    if (!process.client) return
    const config = useRuntimeConfig()

    try {
      // Ensure PayPal JS SDK is loaded
      if (!window.paypal) {
        await loadScript({ clientId: config.public.paypalClientId })
      }

      // Prepare the buttons
      const buttons = window.paypal.Buttons({
        style: { layout: 'vertical', color: 'blue', shape: 'rect', label: 'paypal' },
        createOrder: async (data, actions) => {
          // Prefer server-side order creation if available
          try {
            const res = await fetch('/api/create-paypal-order', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ items: cartStore?.items || [], cartId: cartId.value })
            })
            if (res.ok) {
              const json = await res.json()
              if (json?.orderID) return json.orderID
            }
          } catch (err) {
            // fallthrough to client-side create
            console.warn('Server-side PayPal order creation failed, falling back to client-side', err)
          }

          // Fallback: create order client-side
          const total = String(cartStore?.totalPrice || 0)
          return actions.order.create({
            purchase_units: [{ amount: { value: total } }]
          })
        },
        onApprove: async (data, actions) => {
          try {
            // If actions.order.capture is available, capture client-side
            let captureResult = null
            if (actions && actions.order && typeof actions.order.capture === 'function') {
              captureResult = await actions.order.capture()
            }

            // Notify server to fulfill the order (optional but recommended)
            try {
              await fetch('/api/capture-paypal-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderID: data.orderID, cartId: cartId.value })
              })
            } catch (fulfillErr) {
              console.warn('Order capture/fulfillment webhook failed', fulfillErr)
            }

            showNotification('Payment completed')
            await clearCartItems()
            drawer.value = false
          } catch (err) {
            console.error('Error capturing PayPal order:', err)
            showNotification('Payment capture failed')
          }
        },
        onError: (err) => {
          console.error('PayPal Buttons error:', err)
          showNotification('PayPal error')
        }
      })

      // Render into container; if it's already rendered this will throw which we catch
      await buttons.render('#paypal-button-container')
    } catch (err) {
      console.error('Failed to render PayPal buttons', err)
      showNotification('Failed to initialize PayPal')
    }
  }

  const handleClearCart = () => {
    showConfirmDialog.value = true
  }

  const confirmClear = async () => {
    try {
      await clearCartItems()
      showConfirmDialog.value = false
      showNotification('Cart cleared')
      drawer.value = false
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  const showNotification = (message) => {
    notificationMessage.value = message
    cartNotification.value = true
  }
</script>

<style scoped>
  .cart-flyout {
    width: 400px;
  }

  .cart-items {
    padding: 16px;
    height: calc(100vh - 200px);
    overflow-y: auto;
  }

  .checkout-section {
    position: relative;
    bottom: 0;
    width: 100%;
    padding: 16px;
    background: white;
    border-top: 1px solid #e0e0e0;
  }

  .cart-item {
    border-bottom: 1px solid #e0e0e0;
    padding: 16px 0;
  }
</style>