<template>
  <div>
    <!-- Search -->
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchQuery"
          label="Search receipts..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          clearable
          @input="debouncedSearch"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-btn
          color="primary"
          variant="outlined"
          prepend-icon="mdi-refresh"
          @click="refreshReceipts"
        >
          Refresh
        </v-btn>
      </v-col>
    </v-row>

    <!-- Receipts Table -->
    <v-data-table
      :headers="receiptHeaders"
      :items="receipts"
      :loading="loading"
      class="elevation-1"
      item-key="id"
    >
      <template #item.amount="{ item }">
        {{ formatCurrency(item.amount) }}
      </template>

      <template #item.order="{ item }">
        {{ item.order?.order_number }}
      </template>

      <template #item.created_at="{ item }">
        {{ formatDate(item.created_at) }}
      </template>

      <template #item.actions="{ item }">
        <v-btn-group variant="text" density="compact">
          <v-btn
            size="small"
            icon="mdi-download"
            @click="downloadReceipt(item)"
          />
          <v-btn
            size="small"
            icon="mdi-eye"
            @click="viewReceipt(item)"
          />
        </v-btn-group>
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es'
import { useOrdersStore } from '~/app/stores/orders'
import { storeToRefs } from 'pinia'
import type { Receipt } from '~/app/types'

const ordersStore = useOrdersStore()
const { receipts, loading } = storeToRefs(ordersStore)

const searchQuery = ref('')

const receiptHeaders = [
  { title: 'Receipt #', key: 'receipt_number', sortable: true },
  { title: 'Order #', key: 'order', sortable: false },
  { title: 'Amount', key: 'amount', sortable: true },
  { title: 'Date', key: 'created_at', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, width: '120px' }
]

const debouncedSearch = debounce(() => {
  ordersStore.fetchReceipts(searchQuery.value)
}, 300)

const refreshReceipts = () => {
  ordersStore.fetchReceipts(searchQuery.value)
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

const downloadReceipt = (receipt: Receipt) => {
  // Implement receipt download functionality
  console.log('Download receipt:', receipt)
}

const viewReceipt = (receipt: Receipt) => {
  // Implement receipt preview functionality
  console.log('View receipt:', receipt)
}

onMounted(() => {
  ordersStore.fetchReceipts()
})
</script>