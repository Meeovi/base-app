<!-- add-rewards.vue -->
<template>
    <div class="rewards-dashboard">
        <v-row>
            <!-- Header -->
            <v-col cols="12">
                <v-toolbar color="primary">
                    <v-toolbar-title>Add New Reward Points</v-toolbar-title>
                </v-toolbar>
            </v-col>

            <!-- Current Balance Card -->
            <v-col cols="12" md="4">
                <v-card class="mb-4">
                    <v-card-title>Current Balance</v-card-title>
                    <v-card-text>
                        <div class="text-h4 text-primary">
                            {{ currentBalance }} Points
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Exchange Rates Card -->
            <v-col cols="12" md="8">
                <v-card class="mb-4">
                    <v-card-title>Exchange Rates</v-card-title>
                    <v-card-text>
                        <v-row v-if="rewardRates">
                            <v-col cols="6" v-for="(rate, index) in rewardRates" :key="index">
                                <div class="text-subtitle-1">
                                    {{ rate.points }} points = {{ rate.currency_amount }} {{ rate.currency_code }}
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Add Rewards Form -->
            <v-col cols="12">
                <v-card class="b-1">
                    <v-card-title>
                        <h3>Create New Reward</h3>
                    </v-card-title>

                    <v-card-text>
                        <div v-if="formError" class="error">{{ formError }}</div>
                        <div v-else-if="formSuccess" class="success">{{ formSuccess }}</div>
                        <form @submit.prevent="submitForm">
                            <DirectusFormElement v-for="field in rewardFields" :key="field.field" :field="field"
                                v-model="form[field.field]" />
                            <v-btn type="submit">Submit</v-btn>
                        </form>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Recent History -->
            <v-col cols="12">
                <v-card>
                    <v-card-title>Recent Reward History</v-card-title>
                    <v-card-text>
                        <v-data-table :headers="historyHeaders" :items="rewardHistory" :loading="loadingHistory"
                            class="elevation-1">
                            <template v-slot:item.points_delta="{ item }">
                                <span :class="item.points_delta > 0 ? 'success--text' : 'error--text'">
                                    {{ item.points_delta > 0 ? '+' : '' }}{{ item.points_delta }}
                                </span>
                            </template>
                            <template v-slot:item.created_at="{ item }">
                                {{ formatDate(item.created_at) }}
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Snackbar for notifications -->
        <v-snackbar v-model="snackbar.show" :color="snackbar.color">
            {{ snackbar.message }}
            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="snackbar.show = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import {
        getRewardBalance,
        getRewardHistory,
        getRewardRates    } from '#commerce/app/composables/commerce/marketing/useReward';
    import DirectusFormElement from '#shared/app/components/forms/DirectusFormElement.vue'
    import {
        useDirectusForm
    } from '#shared/app/composables/globals/useDirectusForm'

    // State
    const currentBalance = ref(0);
    const rewardRates = ref(null);
    const rewardHistory = ref([]);
    const loadingHistory = ref(false);
    const dialog = ref(false);
    const snackbar = ref({
        show: false,
        message: '',
        color: 'success'
    });

    // Table headers for history
    const historyHeaders = [{
            text: 'Date',
            value: 'created_at'
        },
        {
            text: 'Points Change',
            value: 'points_delta'
        },
        {
            text: 'Comment',
            value: 'comment'
        },
        {
            text: 'Status',
            value: 'status'
        }
    ];

    // Methods
    const loadInitialData = async () => {
        try {
            // Load balance
            const balance = await getRewardBalance();
            currentBalance.value = balance;

            // Load rates
            const rates = await getRewardRates();
            rewardRates.value = rates;

            // Load recent history
            await loadHistory();
        } catch (error) {
            showError('Error loading initial data');
            console.error('Error loading initial data:', error);
        }
    };

    const loadHistory = async () => {
        loadingHistory.value = true;
        try {
            const history = await getRewardHistory({
                pageSize: 10,
                currentPage: 1
            });
            rewardHistory.value = history.items || [];
        } catch (error) {
            showError('Error loading reward history');
            console.error('Error loading history:', error);
        } finally {
            loadingHistory.value = false;
        }
    };

    const {
        $directus,
        $readFieldsByCollection
    } = useNuxtApp()

    const {
        data,
        error
    } = await useAsyncData('rewards', async () => {
        return $directus.request($readFieldsByCollection('rewards'))
    })

    // guard against undefined/null data.value and empty arrays
    if (error.value || data.value == null || (data.value?.length ?? 0) === 0) {
        console.error(error)
        throw createError({
            statusCode: 404,
            statusMessage: 'Reward not found'
        })
    }

    const rewardFields = data

    // use composable for form handling (validation, submit, provide context)
    const {
        form,
        formError,
        formSuccess,
        submitForm
    } = useDirectusForm('rewards', rewardFields, {
        clearOnSuccess: true,
        closeDialogRef: dialog
    })


    const showError = (message) => {
        snackbar.value = {
            show: true,
            message,
            color: 'error'
        };
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Lifecycle
    onMounted(() => {
        loadInitialData();
    });

    // Meta
    definePageMeta({
        layout: 'dashboard'
    });

    useHead({
        title: 'Add Rewards',
    });
</script>

<style scoped>
    .rewards-dashboard {
        padding: 20px;
    }

    .v-data-table {
        background: transparent !important;
    }
</style>