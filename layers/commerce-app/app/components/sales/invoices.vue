<template>
  <div>
    <!-- Search -->
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchQuery"
          label="Search invoices..."
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
          @click="refreshInvoices"
        >
          Refresh
        </v-btn>
      </v-col>
    </v-row>

    <!-- Invoices Table -->
    <v-data-table
      :headers="invoiceHeaders"
      :items="invoices"
      :loading="loading"
      class="elevation-1"
      item-key="id"
    >
      <template #item.status="{ item }">
        <v-chip
          :color="getInvoiceStatusColor(item.status)"
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

      <template #item.due_date="{ item }">
        {{ formatDate(item.due_date) }}
      </template>

      <template #item.actions="{ item }">
        <v-btn-group variant="text" density="compact">
          <v-btn
            size="small"
            icon="mdi-download"
            @click="downloadInvoice(item)"
          />
          <v-btn
            size="small"
            icon="mdi-eye"
            @click="viewInvoice(item)"
          />
          <v-btn
            size="small"
            icon="mdi-email"
            @click="sendInvoice(item)"
            :disabled="item.status === 'paid'"
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
import type { Invoice } from '~/app/types'

const ordersStore = useOrdersStore()
const { invoices, loading } = storeToRefs(ordersStore)

const searchQuery = ref('')

const invoiceHeaders = [
  { title: 'Invoice #', key: 'invoice_number', sortable: true },
  { title: 'Order #', key: 'order', sortable: false },
  { title: 'Amount', key: 'amount', sortable: true },
  { title: 'Status', key: 'status', sortable: true },
  { title: 'Due Date', key: 'due_date', sortable: true },
  { title: 'Date', key: 'created_at', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, width: '160px' }
]

const debouncedSearch = debounce(() => {
  ordersStore.fetchInvoices(searchQuery.value)
}, 300)

const refreshInvoices = () => {
  ordersStore.fetchInvoices(searchQuery.value)
}

const getInvoiceStatusColor = (status: string) => {
  const colors = {
    draft: 'grey',
    sent: 'blue',
    paid: 'green',
    overdue: 'red'
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

const downloadInvoice = (invoice: Invoice) => {
  console.log('Download invoice:', invoice)
}

const viewInvoice = (invoice: Invoice) => {
  console.log('View invoice:', invoice)
}

const sendInvoice = (invoice: Invoice) => {
  console.log('Send invoice:', invoice)
}

onMounted(() => {
  ordersStore.fetchInvoices()
})
</script>