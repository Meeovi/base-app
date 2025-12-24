<template>
  <div class="flex items-center py-4 border-b border-gray-200">
    <div class="flex-shrink-0 w-24 h-24">
      <img :src="item.productVariant?.featuredAsset?.preview || ''" :alt="item.productVariant?.name" class="w-full h-full object-cover rounded" />
    </div>
    <div class="ml-4 flex-1">
      <h3 class="text-lg font-medium text-gray-900">{{ item.productVariant?.name }}</h3>
      <p class="mt-1 text-sm text-gray-500">SKU: {{ item.productVariant?.sku }}</p>
      <div class="mt-2 flex items-center">
        <div class="flex items-center border border-gray-300 rounded">
          <button 
            class="px-2 py-1 text-gray-600 hover:bg-gray-100"
            @click="updateQuantity(item.id, item.quantity - 1)"
            :disabled="item.quantity <= 1"
          >
            -
          </button>
          <span class="px-4 py-1">{{ item.quantity }}</span>
          <button 
            class="px-2 py-1 text-gray-600 hover:bg-gray-100"
            @click="updateQuantity(item.id, item.quantity + 1)"
          >
            +
          </button>
        </div>
        <button 
          class="ml-4 text-sm text-red-600 hover:text-red-800"
          @click="removeItem(item.id)"
        >
          Remove
        </button>
      </div>
    </div>
    <div class="ml-4 text-right">
      <p class="text-lg font-medium text-gray-900">
        {{ formatPrice(item.unitPriceWithTax) }}
      </p>
      <p v-if="item.listPriceWithTax && item.listPriceWithTax !== item.unitPriceWithTax" class="mt-1 text-sm text-gray-500 line-through">
        {{ formatPrice(item.listPriceWithTax) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVendureMutation } from '@/app/composables/useVendureMutation';
import removeOrderLineMutation from '#graphql/app/commerce/mutations/removeOrderLine.gql';
import adjustOrderLineMutation from '#graphql/app/commerce/mutations/adjustOrderLine.gql';
import getActiveOrderQuery from '#graphql/app/commerce/queries/activeOrder.gql';
import { useNuxtApp } from '#app';

const props = defineProps<{ item: any }>();
const nuxtApp = useNuxtApp() as any;

const { mutate: removeOrderLine } = useVendureMutation(removeOrderLineMutation);
const { mutate: adjustOrderLine } = useVendureMutation(adjustOrderLineMutation);

async function removeItem(orderLineId: string) {
  try {
    await removeOrderLine({ orderLineId });
    await refetchOrder();
  } catch (error) {
    console.error('Failed to remove item:', error);
  }
}

async function updateQuantity(orderLineId: string, newQuantity: number) {
  if (newQuantity < 1) return;
  try {
    await adjustOrderLine({ orderLineId, quantity: newQuantity });
    await refetchOrder();
  } catch (error) {
    console.error('Failed to update quantity:', error);
  }
}

async function refetchOrder() {
  await nuxtApp.$graphql.request(getActiveOrderQuery);
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price / 100);
}
</script>