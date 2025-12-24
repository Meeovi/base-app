<template>
  <div>
    <!-- Search -->
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchQuery"
          label="Search returns..."
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
          @click="refreshReturns"
        >
          Refresh
        </v-btn>
      </v-col>
    </v-row>

    <!-- Returns Table -->
    <v-data-table
      :headers="returnHeaders"
      :items="returns"
      :loading="loading"
      class="elevation-1"
      item-key="id"
    >
      <template #item.status="{ item }">
        <v-chip
          :color="getReturnStatusColor(item.status)"
          size="small"
          variant="tonal"
        >
          {{ item.status.toUpperCase() }}
        </v-chip>
      </template>

      <template #item.order="{ item }">
        {{ item.order?.order_number }}
      </template>

      <template #item.created_at="{ item }">
        {{ formatDate(item.created_at) }}
      </template>

      <template #item.actions="{ item }">
        <v-btn
          size="small"
          icon="mdi-eye"
          variant="text"
          @click="viewReturn(item)"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { debounce } from 'lodash-es'
import { useVendureQuery } from '@/app/composables/useVendureQuery'
import activeCustomerQuery from '~/layers/layer-graphql/app/commerce/queries/activeCustomer.gql'

const searchQuery = ref('')

const returnHeaders = [
  { title: 'Return #', key: 'id', sortable: true },
  { title: 'Order #', key: 'order.code', sortable: false },
  { title: 'Status', key: 'state', sortable: true },
  { title: 'Reason', key: 'reason', sortable: false },
  { title: 'Date', key: 'createdAt', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, width: '100px' }
]

const { data, loading, refetch } = useVendureQuery(activeCustomerQuery)

const returns = computed(() => {
  // This assumes returns are available on activeCustomer. Adjust as needed for your schema.
  let list = data.value?.activeCustomer?.returns || []
  if (searchQuery.value) {
    list = list.filter((r: any) =>
      r.id.includes(searchQuery.value) ||
      r.order?.code?.includes(searchQuery.value)
    )
  }
  return list
})

const debouncedSearch = debounce(() => {
  refetch()
}, 300)

const refreshReturns = () => {
  refetch()
}

const getReturnStatusColor = (status: string) => {
  const colors = {
    Requested: 'orange',
    Approved: 'green',
    Rejected: 'red',
    Processed: 'blue'
  } as const
  return colors[status as keyof typeof colors] || 'grey'
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

const viewReturn = (returnItem: any) => {
  // Implement return details view
  console.log('View return:', returnItem)
}

onMounted(() => {
  refetch()
})
</script>