<template>
    <div>
        <!---->
        <v-row>
            <v-col cols="12">
                <h4 style="left: 15px; position: relative;">Available Coupons</h4>
                <div v-if="loading">Loading coupons...</div>
                <div v-else-if="error">Error loading coupons: {{ error.message }}</div>
                <div v-else>
                    <div v-for="coupon in availableCoupons" :key="coupon.rule_id">
                        <coupons :coupon="coupon" :class="['ma-4', selectedClass]" @click="toggle" />
                    </div>
                </div>
            </v-col>

            <v-col cols="12">
                <h4 style="left: 15px; position: relative;">My Coupons</h4>
                <div v-if="loading">Loading coupons...</div>
                <div v-else-if="error">Error loading coupons: {{ error.message }}</div>
                <div v-else>
                    <div v-for="coupon in myCoupons" :key="coupon.rule_id">
                        <coupons :coupon="coupon" :class="['ma-4', selectedClass]" @click="toggle" />
                    </div>
                </div>
            </v-col>

            <v-col cols="12">
                <h4 style="left: 15px; position: relative;">{{ couponCallouts.menus?.[2]?.name }}</h4>
                <div v-for="coupons in archivedCoupons" :key="coupons">
                    <coupons :coupon="coupons" :class="['ma-4', selectedClass]" @click="toggle" />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import coupons from '~/app/components/marketing/coupons.vue'
    import {
        ref,
        onMounted,
        computed
    } from 'vue';
    import {
        useUserStore
    } from '~/stores/user'
    import { useQuery } from '@vue/apollo-composable'
    import gql from 'graphql-tag'

    const model = ref(null);
    const userStore = useUserStore()

    const userDisplayName = computed(() => {
        return userStore.name || userStore.username || 'User'
    })

    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    // GraphQL query for available coupons
    const AVAILABLE_COUPONS_QUERY = gql`
      query GetAvailableCoupons {
        availableCoupons {
          rule_id
          name
          description
          from_date
          to_date
          is_active
          coupon_code
          discount_amount
          discount_type
          usage_limit
          usage_per_customer
          times_used
        }
      }
    `

    // GraphQL query for customer's coupons
    const MY_COUPONS_QUERY = gql`
      query GetMyCoupons {
        customer {
          coupons {
            rule_id
            name
            description
            from_date
            to_date
            is_active
            coupon_code
            discount_amount
            discount_type
            usage_limit
            usage_per_customer
            times_used
          }
        }
      }
    `

    const { result: availableCouponsResult, loading: availableLoading, error: availableError } = useQuery(AVAILABLE_COUPONS_QUERY)
    const { result: myCouponsResult, loading: myLoading, error: myError } = useQuery(MY_COUPONS_QUERY)

    const availableCoupons = computed(() => availableCouponsResult.value?.availableCoupons || [])
    const myCoupons = computed(() => myCouponsResult.value?.customer?.coupons || [])

    const loading = computed(() => availableLoading.value || myLoading.value)
    const error = computed(() => availableError.value || myError.value)

    const {
        data: couponCallouts
    } = await useAsyncData('couponCallouts', () => {
        return $directus.request($readItem('callouts', '6'))
    })

    useHead({
        title: 'Coupons',
    })

    definePageMeta({
        middleware: ['authenticated'],
    })
</script>