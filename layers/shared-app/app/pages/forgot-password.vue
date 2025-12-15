<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset your password
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleResetPassword">
        <div>
          <v-text-field id="email" v-model="email" name="email" label="Email address" type="email" required
            class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"></v-text-field>
        </div>

        <div>
          <v-btn type="submit" :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span v-if="loading">Sending reset link...</span>
            <span v-else>Send reset link</span>
          </v-btn>
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>

        <div v-if="success" class="text-green-500 text-sm text-center">
          {{ success }}
        </div>
      </form>

      <div class="text-center">
        <p class="text-sm text-gray-600">
          Remember your password?
          <NuxtLink to="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useHead } from 'nuxt/app'

  const email = ref('')
  const loading = ref(false)
  const error = ref('')
  const success = ref('')

  // Password reset is handled by your Keycloak provider. Show guidance.
  const handleResetPassword = async () => {
    loading.value = true
    error.value = ''
    success.value = ''
    try {
      success.value = 'Password reset is handled by your identity provider. Please use the provider UI to reset your password.'
      email.value = ''
    } catch (err: any) {
      error.value = err.message || 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  definePageMeta({
    layout: 'auth',
  })

  useHead({
    title: 'Forgot Password - Meeovi',
  })
</script>

<style scoped>
  .authPage {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--v-background);
  }

  .authForm {
    width: 100%;
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    background: var(--v-surface-variant);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .authLogo {
    display: block;
    margin: 0 auto 2rem;
    max-width: 128px;
    height: auto;
  }

  .mbr-section-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }

  .v-alert {
    margin-top: 1rem;
  }

  .text-center {
    text-align: center;
  }

  .mt-4 {
    margin-top: 1rem;
  }
</style>