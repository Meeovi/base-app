<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <h1 class="text-h4 mb-6">Order Management System</h1>

                <v-card>
                    <v-tabs v-model="activeTab" color="primary" grow>
                        <v-tab value="orders">
                            <v-icon start>mdi-package-variant</v-icon>
                            Orders
                        </v-tab>
                        <v-tab value="returns">
                            <v-icon start>mdi-package-down</v-icon>
                            Returns
                        </v-tab>
                        <v-tab value="transactions">
                            <v-icon start>mdi-credit-card</v-icon>
                            Transactions
                        </v-tab>
                        <v-tab value="receipts">
                            <v-icon start>mdi-receipt</v-icon>
                            Receipts
                        </v-tab>
                        <v-tab value="invoices">
                            <v-icon start>mdi-file-document</v-icon>
                            Invoices
                        </v-tab>
                        <v-tab value="credit-memos">
                            <v-icon start>mdi-note-text</v-icon>
                            Credit Memos
                        </v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-tabs-window v-model="activeTab">
                            <!-- Orders Tab -->
                            <v-tabs-window-item value="orders">
                                <OrdersTab />
                            </v-tabs-window-item>

                            <!-- Returns Tab -->
                            <v-tabs-window-item value="returns">
                                <ReturnsTab />
                            </v-tabs-window-item>

                            <!-- Transactions Tab -->
                            <v-tabs-window-item value="transactions">
                                <TransactionsTab />
                            </v-tabs-window-item>

                            <!-- Receipts Tab -->
                            <v-tabs-window-item value="receipts">
                                <ReceiptsTab />
                            </v-tabs-window-item>

                            <!-- Invoices Tab -->
                            <v-tabs-window-item value="invoices">
                                <InvoicesTab />
                            </v-tabs-window-item>

                            <!-- Credit Memos Tab -->
                            <v-tabs-window-item value="credit-memos">
                                <CreditMemosTab />
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Order Details Dialog -->
        <OrderDetailsDialog v-model="orderDetailsDialog" :order="selectedOrder" />

        <!-- Return Request Dialog -->
        <ReturnRequestDialog v-model="returnRequestDialog" :order="selectedOrder"
            @return-submitted="onReturnSubmitted" />
    </v-container>
</template>

<script setup lang="ts">
    import type {
        Order
    } from '../../types'

    const activeTab = ref('orders')
    const orderDetailsDialog = ref(false)
    const returnRequestDialog = ref(false)
    const selectedOrder = ref < Order | null > (null)

    // Event handlers
    const onViewOrder = (order: Order) => {
        selectedOrder.value = order
        orderDetailsDialog.value = true
    }

    const onCreateReturn = (order: Order) => {
        selectedOrder.value = order
        returnRequestDialog.value = true
    }

    const onReturnSubmitted = () => {
        returnRequestDialog.value = false
        // Refresh returns data
        nextTick(() => {
            activeTab.value = 'returns'
        })
    }

    // Provide functions to child components
    provide('onViewOrder', onViewOrder)
    provide('onCreateReturn', onCreateReturn)
</script>