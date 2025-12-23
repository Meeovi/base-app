<template>
  <v-btn variant="flat" @click="clear">Logout</v-btn>
</template>

<script setup>
const { clear } = useUserSession()

</script>

