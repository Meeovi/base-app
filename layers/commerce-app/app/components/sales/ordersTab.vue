<template>
    <div>
        <!-- Search and Filters -->
        <v-row class="mb-4">
            <v-col cols="12" md="6">
                <v-text-field v-model="searchQuery" label="Search orders..." prepend-inner-icon="mdi-magnify"
                    variant="outlined" density="compact" clearable @input="debouncedSearch" />
            </v-col>
            <v-col cols="12" md="3">
                <v-select v-model="statusFilter" :items="statusOptions" label="Status" variant="outlined"
                    density="compact" clearable @update:model-value="handleFilterChange" />
            </v-col>
            <v-col cols="12" md="3">
                <v-btn color="primary" variant="outlined" prepend-icon="mdi-refresh" @click="refreshOrders">
                    Refresh
                </v-btn>
            </v-col>
        </v-row>

        <!-- Orders Table -->
        <v-data-table :headers="headers" :items="orders" :loading="loading" :search="searchQuery" class="elevation-1"
            item-key="id">
            <template #item.status="{ item }">
                <v-chip :color="getStatusColor(item.status)" size="small" variant="tonal">
                    {{ item.status.toUpperCase() }}
                </v-chip>
            </template>

            <template #item.total_amount="{ item }">
                {{ formatCurrency(item.total_amount, item.currency) }}
            </template>

            <template #item.created_at="{ item }">
                {{ formatDate(item.created_at) }}
            </template>

            <template #item.actions="{ item }">
                <v-btn-group variant="text" density="compact">
                    <v-btn size="small" icon="mdi-eye" @click="onViewOrder(item)" />
                    <v-btn size="small" icon="mdi-package-down" @click="onCreateReturn(item)"
                        :disabled="!canCreateReturn(item)" />
                </v-btn-group>
            </template>
        </v-data-table>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, inject } from 'vue';
import { debounce } from 'lodash-es';
import { useVendureQuery } from '@/app/composables/useVendureQuery';
import activeCustomerQuery from '#graphql/app/commerce/queries/activeCustomer.gql';
import type { Order } from '../../types';

const onViewOrder = inject('onViewOrder') as (order: Order) => void;
const onCreateReturn = inject('onCreateReturn') as (order: Order) => void;

const searchQuery = ref('');
const statusFilter = ref('');

const statusOptions = [
  { title: 'Pending', value: 'pending' },
  { title: 'Processing', value: 'processing' },
  { title: 'Shipped', value: 'shipped' },
  { title: 'Delivered', value: 'delivered' },
  { title: 'Cancelled', value: 'cancelled' }
];

const headers = [
  { title: 'Order #', key: 'code', sortable: true },
  { title: 'Customer', key: 'customer.fullName', sortable: true },
  { title: 'Email', key: 'customer.emailAddress', sortable: true },
  { title: 'Status', key: 'state', sortable: true },
  { title: 'Total', key: 'totalWithTax', sortable: true },
  { title: 'Date', key: 'createdAt', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, width: '120px' }
];

const { data, loading, refetch } = useVendureQuery(activeCustomerQuery);

const orders = computed(() => {
  let list = data.value?.activeCustomer?.orders?.items || [];
  if (searchQuery.value) {
    list = list.filter((order: any) =>
      order.code.includes(searchQuery.value) ||
      order.customer?.fullName?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      order.customer?.emailAddress?.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  if (statusFilter.value) {
    list = list.filter((order: any) => order.state === statusFilter.value);
  }
  return list;
});

const debouncedSearch = debounce(() => {
  refetch();
}, 300);

const handleFilterChange = () => {
  refetch();
};

const refreshOrders = () => {
  refetch();
};

const getStatusColor = (status: string) => {
  const colors = {
    AddingItems: 'orange',
    ArrangingPayment: 'blue',
    PaymentAuthorized: 'purple',
    PaymentSettled: 'green',
    Cancelled: 'red',
    Shipped: 'purple',
    Delivered: 'green',
    Pending: 'orange',
    Processing: 'blue',
  } as const;
  return colors[status as keyof typeof colors] || 'grey';
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100);
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

const canCreateReturn = (order: any) => {
  return ['Delivered', 'Shipped', 'PaymentSettled'].includes(order.state);
};
</script>