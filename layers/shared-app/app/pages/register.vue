<template>
  <div class="authPage">
    <!-- Same layout as login but with "Register" -->
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary" style="height: 100vh;">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <img src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Register</strong>
              </h2>
            </div>
            <div class="form-wrap">
              <form class="row flex-center flex" @submit.prevent="handleRegister">
                <div class="col-12 form-widget">
                  <div class="mb-3">
                    <v-text-field class="inputField" type="email" placeholder="Email" v-model="email" required />
                  </div>

                  <div class="mb-3">
                    <v-text-field class="inputField" placeholder="Username (handle)" v-model="username" required />
                  </div>

                  <div class="mb-3">
                    <v-text-field class="inputField" type="password" placeholder="Password" v-model="password"
                      required />
                  </div>

                  <div>
                    <v-btn type="submit" class="button block" :disabled="loading">
                      {{ loading ? 'Loading...' : 'Sign Up' }}
                    </v-btn>
                  </div>

                  <div v-if="result" class="success-message mt-3 text-green-600">
                    <p>Successfully registered</p>
                  </div>
                  <div v-if="errorMsg" class="error-message mt-3 text-red-500">
                    {{ errorMsg }}
                  </div>

                  <div class="mt-3 text-center">
                    <p>Already have an account?
                      <NuxtLink to="/login">Sign In</NuxtLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useHead } from 'nuxt/app'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  // @ts-ignore: missing type declarations for '#auth' (Sidebase Auth)
  import { useAuth as useSidebaseAuth } from '#auth'

  const email = ref('')
  const username = ref('')
  const password = ref('')
  const loading = ref(false)
  const result = ref(false)
  const errorMsg = ref('')
  const router = useRouter()

  const sbAuth = useSidebaseAuth()

  const handleRegister = async () => {
    loading.value = true
    result.value = false
    errorMsg.value = ''
    try {
      if (!sbAuth) throw new Error('Auth not available')
      // Start Keycloak sign-in (provider handles signup)
      // @ts-ignore
      await sbAuth.signIn({ provider: 'keycloak', callbackUrl: window.location.href })
    } catch (error: any) {
      console.error(error)
      errorMsg.value = error?.message || 'Registration failed. Please try again.'
    } finally {
      loading.value = false
      password.value = ''
    }
  }

  definePageMeta({
    layout: 'auth',
  })

  useHead({
    title: 'Register to Meeovi',
  })
</script>