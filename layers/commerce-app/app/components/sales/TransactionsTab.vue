<template>
  <div>
    <!-- Search -->
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchQuery"
          label="Search transactions..."
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
          @click="refreshTransactions"
        >
          Refresh
        </v-btn>
      </v-col>
    </v-row>

    <!-- Transactions Table -->
    <v-data-table
      :headers="transactionHeaders"
      :items="transactions"
      :loading="loading"
      class="elevation-1"
      item-key="id"
    >
      <template #item.type="{ item }">
        <v-chip
          :color="item.type === 'payment' ? 'green' : 'orange'"
          size="small"
          variant="tonal"
        >
          {{ item.type.toUpperCase() }}
        </v-chip>
      </template>

      <template #item.status="{ item }">
        <v-chip
          :color="getTransactionStatusColor(item.status)"
          size="small"
          variant="tonal"
        >
          {{ item.status.toUpperCase() }}
        </v-chip>
      </template>

      <template #item.amount="{ item }">
        {{ formatCurrency(item.amount) }}
      </template>

      <template #item.order="{ item }">
        {{ item.order?.order_number }}
      </template>

      <template #item.created_at="{ item }">
        {{ formatDate(item.created_at) }}
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es'
import { storeToRefs } from 'pinia'
import { useOrdersStore } from '~/app/stores/orders'

const ordersStore = useOrdersStore()
const { transactions, loading } = storeToRefs(ordersStore)

const searchQuery = ref('')

const transactionHeaders = [
  { title: 'Transaction ID', key: 'transaction_id', sortable: true },
  { title: 'Order #', key: 'order', sortable: false },
  { title: 'Type', key: 'type', sortable: true },
  { title: 'Amount', key: 'amount', sortable: true },
  { title: 'Status', key: 'status', sortable: true },
  { title: 'Payment Method', key: 'payment_method', sortable: false },
  { title: 'Date', key: 'created_at', sortable: true }
]

const debouncedSearch = debounce(() => {
  ordersStore.fetchTransactions(searchQuery.value)
}, 300)

const refreshTransactions = () => {
  ordersStore.fetchTransactions(searchQuery.value)
}

const getTransactionStatusColor = (status: string) => {
  const colors = {
    pending: 'orange',
    completed: 'green',
    failed: 'red'
  } as const
  return colors[status as keyof typeof colors] || 'grey'
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

onMounted(() => {
  ordersStore.fetchTransactions()
})
</script>