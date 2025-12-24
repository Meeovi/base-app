<template>
    <div class="checkout-form">
        <form @submit.prevent="handleSubmit">
            <div v-if="error" class="error-message">
                {{ error }}
            </div>

            <!-- Shipping Address -->
            <div class="form-section">
                <h3>Shipping Address</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label for="shipping-firstname">First Name*</label>
                        <input 
                            id="shipping-firstname"
                            v-model="shippingAddress.firstname"
                            type="text"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label for="shipping-lastname">Last Name*</label>
                        <input 
                            id="shipping-lastname"
                            v-model="shippingAddress.lastname"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div class="form-group">
                    <label for="shipping-street">Street Address*</label>
                    <input 
                        id="shipping-street"
                        v-model="shippingAddress.street[0]"
                        type="text"
                        required
                    />
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="shipping-city">City*</label>
                        <input 
                            id="shipping-city"
                            v-model="shippingAddress.city"
                            type="text"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label for="shipping-postcode">Postcode*</label>
                        <input 
                            id="shipping-postcode"
                            v-model="shippingAddress.postcode"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="shipping-country">Country*</label>
                        <select 
                            id="shipping-country"
                            v-model="shippingAddress.country_code"
                            required
                        >
                            <option value="">Select Country</option>
                            <option v-for="country in countries" :key="country.id" :value="country.id">
                                {{ country.full_name_locale }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="shipping-telephone">Phone Number*</label>
                        <input 
                            id="shipping-telephone"
                            v-model="shippingAddress.telephone"
                            type="tel"
                            required
                        />
                    </div>
                </div>
            </div>

            <!-- Billing Address -->
            <div class="form-section">
                <h3>Billing Address</h3>
                <div class="form-check">
                    <input 
                        type="checkbox"
                        id="same-as-shipping"
                        v-model="sameAsShipping"
                    />
                    <label for="same-as-shipping">Same as shipping address</label>
                </div>
                <div v-if="!sameAsShipping">
                    <!-- Billing address fields (same structure as shipping) -->
                    <div class="form-row">
                        <div class="form-group">
                            <label for="billing-firstname">First Name*</label>
                            <input 
                                id="billing-firstname"
                                v-model="billingAddress.firstname"
                                type="text"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="billing-lastname">Last Name*</label>
                            <input 
                                id="billing-lastname"
                                v-model="billingAddress.lastname"
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <!-- Add other billing address fields similar to shipping -->
                </div>
            </div>

            <!-- Payment Section -->
            <div class="form-section">
                <h3>Payment</h3>
                <div ref="paymentElement"></div>
            </div>

            <!-- Order Summary -->
            <div class="form-section">
                <h3>Order Summary</h3>
                <div class="order-summary">
                    <div class="summary-row">
                        <span>Subtotal:</span>
                        <span>{{ formatPrice(cart.subtotal) }}</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping:</span>
                        <span>{{ formatPrice(cart.shipping) }}</span>
                    </div>
                    <div class="summary-row">
                        <span>Tax:</span>
                        <span>{{ formatPrice(cart.tax) }}</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total:</span>
                        <span>{{ formatPrice(cart.total) }}</span>
                    </div>
                </div>
            </div>

            <button class="submit-button" type="submit" :disabled="!stripe || loading">
                <span v-if="loading">Processing...</span>
                <span v-else>Pay {{ formatPrice(cart.total) }}</span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { loadStripe } from '@stripe/stripe-js'
import { useMutation, useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

// GraphQL queries and mutations
const GET_CART = gql`
  query GetCart {
    customerCart {
      id
      items {
        id
        quantity
        product {
          name
          sku
        }
        prices {
          price {
            value
            currency
          }
        }
      }
      prices {
        subtotal_excluding_tax {
          value
          currency
        }
        grand_total {
          value
          currency
        }
      }
      shipping_addresses {
        firstname
        lastname
        street
        city
        region {
          code
          label
        }
        postcode
        country {
          code
          label
        }
        telephone
      }
    }
  }
`

const SET_SHIPPING_ADDRESS = gql`
  mutation SetShippingAddress($cartId: String!, $address: ShippingAddressInput!) {
    setShippingAddressesOnCart(
      input: {
        cart_id: $cartId
        shipping_addresses: [$address]
      }
    ) {
      cart {
        shipping_addresses {
          firstname
          lastname
          street
          city
          region {
            code
            label
          }
          postcode
          country {
            code
            label
          }
          telephone
        }
      }
    }
  }
`

const SET_BILLING_ADDRESS = gql`
  mutation SetBillingAddress($cartId: String!, $address: BillingAddressInput!) {
    setBillingAddressOnCart(
      input: {
        cart_id: $cartId
        billing_address: $address
      }
    ) {
      cart {
        billing_address {
          firstname
          lastname
          street
          city
          region {
            code
            label
          }
          postcode
          country {
            code
            label
          }
          telephone
        }
      }
    }
  }
`

const PLACE_ORDER = gql`
  mutation PlaceOrder($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      order {
        order_number
      }
    }
  }
`

// Component state
const stripe = ref(null)
const elements = ref(null)
const paymentElement = ref(null)
const loading = ref(false)
const error = ref(null)
const sameAsShipping = ref(true)

const shippingAddress = ref({
    firstname: '',
    lastname: '',
    street: [''],
    city: '',
    region: { code: '', label: '' },
    postcode: '',
    country_code: '',
    telephone: ''
})

const billingAddress = ref({
    firstname: '',
    lastname: '',
    street: [''],
    city: '',
    region: { code: '', label: '' },
    postcode: '',
    country_code: '',
    telephone: ''
})

// Cart data
const { result: cartResult, loading: cartLoading } = useQuery(GET_CART)
const cart = computed(() => cartResult.value?.customerCart || {})

// Mutations
const { mutate: setShippingAddress } = useMutation(SET_SHIPPING_ADDRESS)
const { mutate: setBillingAddress } = useMutation(SET_BILLING_ADDRESS)
const { mutate: placeOrder } = useMutation(PLACE_ORDER)

// Watch for same as shipping changes
watch(sameAsShipping, (newValue) => {
    if (newValue) {
        billingAddress.value = { ...shippingAddress.value }
    }
})

// Initialize Stripe
const initializeStripe = async () => {
    try {
        stripe.value = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

        const response = await fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: cart.value.prices.grand_total.value * 100, // Convert to cents
                currency: cart.value.prices.grand_total.currency.toLowerCase()
            })
        })

        const { clientSecret } = await response.json()

        elements.value = stripe.value.elements({
            clientSecret,
            appearance: {
                theme: 'stripe',
                variables: {
                    colorPrimary: '#0570de',
                    colorBackground: '#ffffff',
                    colorText: '#30313d',
                    colorDanger: '#df1b41',
                    fontFamily: 'Ideal Sans, system-ui, sans-serif',
                    borderRadius: '4px'
                }
            }
        })

        const paymentElementInstance = elements.value.create('payment')
        paymentElementInstance.mount(paymentElement.value)
    } catch (err) {
        error.value = 'Failed to initialize payment system. Please try again.'
        console.error('Stripe initialization error:', err)
    }
}

// Handle form submission
const handleSubmit = async () => {
    try {
        if (!stripe.value || !elements.value) return

        loading.value = true
        error.value = null

        // Set shipping address
        await setShippingAddress({
            variables: {
                cartId: cart.value.id,
                address: shippingAddress.value
            }
        })

        // Set billing address
        await setBillingAddress({
            variables: {
                cartId: cart.value.id,
                address: sameAsShipping.value ? shippingAddress.value : billingAddress.value
            }
        })

        // Place order
        const orderResult = await placeOrder({
            variables: {
                cartId: cart.value.id
            }
        })

        // Confirm payment with Stripe
        const { error: stripeError } = await stripe.value.confirmPayment({
            elements: elements.value,
            confirmParams: {
                return_url: `${window.location.origin}/checkout/confirmation/${orderResult.data.placeOrder.order.order_number}`
            }
        })

        if (stripeError) {
            error.value = stripeError.message || 'An error occurred during payment.'
        }
    } catch (err) {
        error.value = 'Payment failed. Please try again.'
        console.error('Payment error:', err)
    } finally {
        loading.value = false
    }
}

// Format price helper
const formatPrice = (price) => {
    if (!price) return '$0.00'
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: price.currency || 'USD'
    }).format(price.value)
}

// Initialize on component mount
onMounted(() => {
    initializeStripe()
})
</script>

<style scoped>
.checkout-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.form-section {
    margin-bottom: 2rem;
    padding: 1.5rem;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
}

.form-section h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    font-size: 1rem;
}

.form-check {
    margin-bottom: 1rem;
}

.error-message {
    color: #df1b41;
    margin-bottom: 16px;
    padding: 12px;
    border-radius: 4px;
    background-color: #fff0f0;
}

.submit-button {
    background: #5469d4;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    width: 100%;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    margin-top: 24px;
}

.submit-button:hover {
    filter: brightness(1.1);
}

.submit-button:disabled {
    opacity: 0.5;
    cursor: default;
    background-color: #7795f8;
}

.order-summary {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 4px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.summary-row.total {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e6e6e6;
    font-weight: 600;
    font-size: 1.1rem;
}

:deep(.stripe-element) {
    padding: 12px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    background: white;
}
</style>