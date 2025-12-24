<template>
  <v-dialog v-model="dialog" max-width="800px" scrollable>
    <v-card v-if="order">
      <v-card-title class="d-flex align-center">
        <v-icon class="me-2">mdi-package-variant</v-icon>
        Order Details - {{ order.order_number }}
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" @click="dialog = false" />
      </v-card-title>

      <v-card-text>
        <v-row>
          <!-- Order Info -->
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="mb-4">
              <v-card-title class="text-h6">Order Information</v-card-title>
              <v-card-text>
                <v-list density="compact">
                  <v-list-item>
                    <template #prepend>
                      <v-icon>mdi-identifier</v-icon>
                    </template>
                    <v-list-item-title>Order Number</v-list-item-title>
                    <v-list-item-subtitle>{{ order.order_number }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon>mdi-calendar</v-icon>
                    </template>
                    <v-list-item-title>Order Date</v-list-item-title>
                    <v-list-item-subtitle>{{ formatDate(order.created_at) }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon>mdi-cash</v-icon>
                    </template>
                    <v-list-item-title>Total Amount</v-list-item-title>
                    <v-list-item-subtitle>{{ formatCurrency(order.total_amount, order.currency) }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-chip :color="getStatusColor(order.status)" size="small">
                        {{ order.status.toUpperCase() }}
                      </v-chip>
                    </template>
                    <v-list-item-title>Status</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Customer Info -->
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="mb-4">
              <v-card-title class="text-h6">Customer Information</v-card-title>
              <v-card-text>
                <v-list density="compact">
                  <v-list-item>
                    <template #prepend>
                      <v-icon>mdi-account</v-icon>
                    </template>
                    <v-list-item-title>Name</v-list-item-title>
                    <v-list-item-subtitle>{{ order.customer_name }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon>mdi-email</v-icon>
                    </template>
                    <v-list-item-title>Email</v-list-item-title>
                    <v-list-item-subtitle>{{ order.customer_email }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Order Items -->
          <v-col cols="12">
            <v-card variant="outlined" class="mb-4">
              <v-card-title class="text-h6">Order Items</v-card-title>
              <v-card-text>
                <v-data-table
                  :headers="itemHeaders"
                  :items="order.order_items"
                  density="compact"
                  hide-default-footer
                >
                  <template #item.price="{ item }">
                    {{ formatCurrency(item.price, order.currency) }}
                  </template>
                  <template #item.total="{ item }">
                    {{ formatCurrency(item.total, order.currency) }}
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Addresses -->
          <v-col cols="12" md="6" v-if="order.shipping_address">
            <v-card variant="outlined">
              <v-card-title class="text-h6">Shipping Address</v-card-title>
              <v-card-text>
                <p>{{ order.shipping_address.street }}</p>
                <p>{{ order.shipping_address.city }}, {{ order.shipping_address.state }} {{ order.shipping_address.postal_code }}</p>
                <p>{{ order.shipping_address.country }}</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" v-if="order.billing_address">
            <v-card variant="outlined">
              <v-card-title class="text-h6">Billing Address</v-card-title>
              <v-card-text>
                <p>{{ order.billing_address.street }}</p>
                <p>{{ order.billing_address.city }}, {{ order.billing_address.state }} {{ order.billing_address.postal_code }}</p>
                <p>{{ order.billing_address.country }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          variant="outlined"
          @click="createReturn"
          :disabled="!canCreateReturn(order)"
        >
          Create Return
        </v-btn>
        <v-btn color="primary" @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useVendureQuery } from '@/app/composables/useVendureQuery';
import orderByCodeQuery from '~/layers/layer-graphql/app/commerce/queries/orderByCode.gql';

const props = defineProps<{ modelValue: boolean; order: { code: string } | null }>();
const emit = defineEmits(['update:modelValue']);

const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const { data, loading, refetch } = useVendureQuery(orderByCodeQuery, { code: props.order?.code });

watch(() => props.order?.code, (newCode) => {
  if (newCode) refetch({ code: newCode });
});

const order = computed(() => data.value?.orderByCode || null);

const itemHeaders = [
  { title: 'Product', key: 'productVariant.name' },
  { title: 'Quantity', key: 'quantity' },
  { title: 'Price', key: 'unitPriceWithTax' },
  { title: 'Total', key: 'lineTotalWithTax' }
];

const getStatusColor = (state: string) => {
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
  return colors[state as keyof typeof colors] || 'grey';
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
</script>