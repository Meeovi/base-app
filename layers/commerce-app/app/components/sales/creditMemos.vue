<template>
  <div>
    <!-- Search -->
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchQuery"
          label="Search credit memos..."
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
          @click="refreshCreditMemos"
        >
          Refresh
        </v-btn>
      </v-col>
    </v-row>

    <!-- Credit Memos Table -->
    <v-data-table
      :headers="memoHeaders"
      :items="creditMemos"
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

      <template #item.return="{ item }">
        {{ item.return?.return_number || 'N/A' }}
      </template>

      <template #item.created_at="{ item }">
        {{ formatDate(item.created_at) }}
      </template>

      <template #item.actions="{ item }">
        <v-btn-group variant="text" density="compact">
          <v-btn
            size="small"
            icon="mdi-download"
            @click="downloadMemo(item)"
          />
          <v-btn
            size="small"
            icon="mdi-eye"
            @click="viewMemo(item)"
          />
        </v-btn-group>
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es'
import { useOrdersStore } from '../../stores/orders'
import { storeToRefs } from 'pinia'
import type { CreditMemo } from '../../types'

const ordersStore = useOrdersStore()
const { creditMemos, loading } = storeToRefs(ordersStore)

const searchQuery = ref('')

const memoHeaders = [
  { title: 'Memo #', key: 'memo_number', sortable: true },
  { title: 'Order #', key: 'order', sortable: false },
  { title: 'Return #', key: 'return', sortable: false },
  { title: 'Amount', key: 'amount', sortable: true },
  { title: 'Reason', key: 'reason', sortable: false },
  { title: 'Date', key: 'created_at', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, width: '120px' }
]

const debouncedSearch = debounce(() => {
  ordersStore.fetchCreditMemos(searchQuery.value)
}, 300)

const refreshCreditMemos = () => {
  ordersStore.fetchCreditMemos(searchQuery.value)
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

const downloadMemo = (memo: CreditMemo) => {
  console.log('Download memo:', memo)
}

const viewMemo = (memo: CreditMemo) => {
  console.log('View memo:', memo)
}

onMounted(() => {
  ordersStore.fetchCreditMemos()
})
</script>