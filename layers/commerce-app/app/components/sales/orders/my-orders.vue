<template>
  <div>
    <section class="firmm4_features1 features1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 title_block">
            <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Orders</strong>
            </h3>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="card col-12 col-lg-3 col-md-6 col-sm-6" v-for="order in orders" :key="order.id">
            <div class="card_wrapper">
              <div class="card-box">
                <div class="icon_block">
                  <div class="iconfont-wrapper">
                    <span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span>
                  </div>
                </div>
                <p class="card-text mbr-fonts-style display-4">ID: {{ order.code }}</p>
                <p class="card-text mbr-fonts-style display-4">Purchase Date: {{ new Date(order.createdAt).toLocaleDateString() }}</p>
                <p class="card-text mbr-fonts-style display-4">Bill to Name: {{ order.customer?.firstName }} {{ order.customer?.lastName }}</p>
                <p class="card-text mbr-fonts-style display-4">Ship to Name: {{ order.shippingAddress?.fullName }}</p>
                <p class="card-text mbr-fonts-style display-4">Grand Total: {{ formatPrice(order.totalWithTax) }}</p>
                <p class="card-text mbr-fonts-style display-4">Status: {{ order.state }}</p>
                <p class="btn_link mbr-fonts-style display-4">
                  <a :href="`/account/user/order/${order.id}`" class="text-secondary">View<span class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useVendureQuery } from '@/app/composables/useVendureQuery';
import getCustomerOrdersQuery from '#graphql/app/commerce/queries/getCustomerOrders.gql';

const orders = ref([]);
const { data, refetch } = useVendureQuery(getCustomerOrdersQuery);

onMounted(() => {
  if (data.value?.activeCustomer?.orders?.items) {
    orders.value = data.value.activeCustomer.orders.items;
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