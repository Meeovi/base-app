<template>
    <div>
      <v-btn color="primary" @click="redirectToCheckout">
        Proceed to Payment
      </v-btn>
    </div>
  </template>
  
  <script setup>
  import { useVendureMutation } from '~/app/composables/useVendureMutation';
  import transitionOrderToStateMutation from '#graphql/app/commerce/mutations/transitionOrderToState.gql';
  import getActiveOrderQuery from '#graphql/app/commerce/queries/activeOrder.gql';
  import { useNuxtApp } from '#app';
  
  const nuxtApp = useNuxtApp();
  
  const redirectToCheckout = async () => {
    // Optionally, fetch the active order to get the order code or id
    const orderRes = await nuxtApp.$graphql.request(getActiveOrderQuery);
    const order = orderRes?.activeOrder;
    if (!order) return;
  
    // Transition order to 'ArrangingPayment' (Vendure default)
    const { mutate: transitionOrder } = useVendureMutation(transitionOrderToStateMutation);
    await transitionOrder({ state: 'ArrangingPayment' });
  
    // Redirect to payment/confirmation page (adjust as needed)
    window.location.href = `/checkout/confirmation/${order.code}`;
  };
  </script>
