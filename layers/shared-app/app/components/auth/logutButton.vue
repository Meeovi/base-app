<template>
  <v-btn variant="flat" @click="logout">Logout</v-btn>
</template>

<script setup>
const { signOut } = useAuth()

function logout() {
  signOut({ callbackUrl: '/' })
}
</script>

