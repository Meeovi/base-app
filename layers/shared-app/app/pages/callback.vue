<template>
  <div>Processing login...</div>
</template>

<script setup>
const { $supabase } = useNuxtApp()
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(async () => {
  const { error } = await $supabase.auth.getSession()
  if (error) {
    await router.push('/auth/login')
  } else {
    await router.push('/') // or your dashboard route
  }
})
</script>
