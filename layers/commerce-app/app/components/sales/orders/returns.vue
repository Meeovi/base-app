<template>
  <div>
    <!--<profilebar />-->
    <v-row>
      <v-col cols="12" v-for="refund in refunds" :key="refund.id">
        <v-card variant="text">
          <v-toolbar>
            <v-row class="orderRow">
              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Return Placed</v-list-item-title>
                  <v-list-item-subtitle>{{ refund.createdAt }}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Amount</v-list-item-title>
                  <v-list-item-subtitle>{{ formatPrice(refund.total) }}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Refunded By</v-list-item-title>
                  <v-list-item-subtitle>{{ refund.refundedBy?.fullName }}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Return # {{ refund.id }}</v-list-item-title>
                  <v-list-item-subtitle><a href="/account/user/orders/my-orders/">View order details</a></v-list-item-subtitle>
                </v-list>
              </v-col>
            </v-row>
          </v-toolbar>

          <v-card>
            <v-row>
              <v-col cols="12">
                <v-card-title>{{ refund.items?.[0]?.productVariant?.name }}</v-card-title>
                <v-card-subtitle>{{ refund.items?.[0]?.productVariant?.sku }}</v-card-subtitle>
                <v-card-text>Reason: {{ refund.reason }}</v-card-text>
              </v-col>
            </v-row>

            <v-card-actions>
              <v-btn color="orange" variant="outlined">Buy it again</v-btn>
              <v-btn variant="outlined">View your item</v-btn>
              <v-btn variant="outlined">Write a product review</v-btn>
            </v-card-actions>
          </v-card>

          <v-card-actions>
            <v-btn>Archive Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useVendureQuery } from '@/app/composables/useVendureQuery';
import getCustomerRefundsQuery from '#graphql/app/commerce/queries/getCustomerRefunds.gql';

const refunds = ref([]);
const { data, refetch } = useVendureQuery(getCustomerRefundsQuery);

onMounted(() => {
  if (data.value?.activeCustomer?.refunds?.items) {
    refunds.value = data.value.activeCustomer.refunds.items;
  }
});

const formatPrice = (amount: number) => {
  if (!amount) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100);
};
</script>