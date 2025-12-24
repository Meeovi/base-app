<template>
    <div>
        <!--<profilebar />-->
        <v-toolbar color="transparent" density="compact" title="My Payment Methods">
            <addPayment />
        </v-toolbar>
        <v-table fixed-header>
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        Gateway
                    </th>
                    <th class="text-left">
                        Default?
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(method, index) in paymentMethods" :key="index">
                    <td>{{ method.name }}</td>
                    <td>{{ method.type }}</td>
                    <td>{{ method.handler }}</td>
                    <td>{{ method.isDefault ? 'Yes' : 'No' }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>

</template>

<script>
    import addPayment from '../../../components/create/commerce/add-payment.vue'
    import profilebar from '../../../components/menus/profilebar.vue'

    export default {
        components: {
            profilebar,
            addPayment
        },
        data() {
            return {

            }
        },
    }
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useVendureQuery } from '@/app/composables/useVendureQuery';
import getActiveOrderQuery from '#graphql/app/commerce/queries/getActiveOrder.gql';
import addPayment from '../../../components/create/commerce/add-payment.vue';

const paymentMethods = ref([]);
const { data, refetch } = useVendureQuery(getActiveOrderQuery);

onMounted(() => {
  if (data.value?.activeOrder?.eligiblePaymentMethods) {
    paymentMethods.value = data.value.activeOrder.eligiblePaymentMethods;
  }
});
</script>