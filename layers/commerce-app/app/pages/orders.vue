<!-- pages/orders/index.vue -->
<template>
  <div>
    <OrderManagement />
  </div>
</template>

<script setup lang="ts">

// SEO
useHead({
  title: 'Order Management System',
  meta: [
    { name: 'description', content: 'Comprehensive order management system with returns, transactions, receipts, invoices, and credit memos.' }
  ]
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

.v-application {
  font-family: 'Roboto', sans-serif !important;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Smooth transitions */
.v-card,
.v-btn,
.v-chip {
  transition: all 0.2s ease-in-out;
}
</style>