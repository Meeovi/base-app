<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Set new password
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleResetPassword">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <v-text-field id="password" v-model="password" name="password" type="password" label="New Password" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="New Password"></v-text-field>
          </div>
          <div>
            <v-text-field id="confirmPassword" v-model="confirmPassword" name="confirmPassword" type="password"
              label="Confirm New Password" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm New Password"></v-text-field>
          </div>
        </div>

        <div>
          <v-btn type="submit" :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span v-if="loading">Updating password...</span>
            <span v-else>Update password</span>
          </v-btn>
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRouter, useRoute, useHead } from 'nuxt/app'

  const router = useRouter()
  const route = useRoute()

  const password = ref('')
  const confirmPassword = ref('')
  const loading = ref(false)
  const error = ref('')

  // Password reset via tokens is handled by your identity provider (Keycloak).
  // Redirect users back to login with an explanation.
  const handleResetPassword = async () => {
    loading.value = true
    error.value = ''
    try {
      // Nothing to do client-side for Keycloak-managed passwords
      await router.push('/auth/login')
    } catch (err: any) {
      error.value = err.message || 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  // If no reset token, send back to login immediately
  onMounted(() => {
    const token = route.query.oobCode || route.query.token
    if (!token) {
      router.push('/auth/login')
    }
  })

  definePageMeta({
    layout: 'auth',
  })

  useHead({
    title: 'Reset Password - Meeovi',
  })
</script>