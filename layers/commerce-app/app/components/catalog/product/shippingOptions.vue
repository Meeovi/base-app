<template>
    <v-row>
        <v-col cols="12">
            <h6>Delivery</h6>
        </v-col>

        <v-col cols="12">
            <v-select v-model="selectedOption" :items="shippingOptions" item-title="name" item-value="id"
                label="Select Delivery Method" single-line variant="solo" :loading="loading"
                :disabled="loading || shippingOptions.length === 0"></v-select>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useVendureQuery } from '../../../composables/useVendureQuery';
import getEligibleShippingMethodsQuery from '#graphql/app/commerce/queries/getEligibleShippingMethods.gql';
const props = defineProps<{ orderId: string }>();
const selectedOption = ref(null);
const loading = ref(false);
const shippingOptions = ref([]);
const { data, refetch } = useVendureQuery(getEligibleShippingMethodsQuery, { orderId: props.orderId });
onMounted(() => {
  if (data.value?.eligibleShippingMethods) {
    shippingOptions.value = data.value.eligibleShippingMethods;
  }
});
</script>