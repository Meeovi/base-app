<template>
  <span class="price-display" :class="{ 'has-discount': hasDiscount }">
    <span v-if="hasDiscount" class="original-price">{{ formattedOriginalPrice }}</span>
    <span class="current-price">{{ formattedPrice }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { useCurrency } from '~/app/composables/useCurrency'

const props = defineProps({
  amount: {
    type: Number,
    required: true
  },
  originalAmount: {
    type: Number,
    default: null
  },
  currency: {
    type: String,
    default: null // Will use store's current currency if not provided
  }
})

const { format } = useCurrency()

const formattedPrice = computed(() => format(props.amount, props.currency))
const formattedOriginalPrice = computed(() => props.originalAmount ? format(props.originalAmount, props.currency) : null)
const hasDiscount = computed(() => props.originalAmount && props.originalAmount > props.amount)
</script>

<style scoped>
.price-display {
  display: inline-flex;
  gap: 8px;
  align-items: center;
}

.original-price {
  text-decoration: line-through;
  color: #666;
  font-size: 0.9em;
}

.current-price {
  font-weight: 600;
}

.has-discount .current-price {
  color: #e53e3e;
}
</style> 