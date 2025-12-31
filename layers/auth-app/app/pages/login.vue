<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary" style="height: 100vh;">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <img src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Login</strong>
              </h2>
            </div>
            <div class="form-wrap">
              <form class="row flex-center flex" @submit.prevent="handleLogin">
                <div class="col-12 form-widget">
                  <div class="mb-3">
                    <v-text-field class="inputField" type="email" placeholder="Email" v-model="email" required />
                  </div>
                  <div class="mb-3">
                    <v-text-field class="inputField" type="password" placeholder="Password" v-model="password"
                      required />
                  </div>
                  <div>
                    <v-btn type="submit" class="button block" :disabled="loading">
                      {{ loading ? 'Loading...' : 'Sign In' }}
                    </v-btn>
                  </div>
                  <div v-if="error" class="error-message mt-3">
                    {{ error }}
                  </div>
                  <div class="mt-3 text-center">
                    <p>Don't have an account?
                      <NuxtLink to="/register">Sign Up</NuxtLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <p class="comment-text mbr-fonts-style align-center mb-0 display-7">
              We respect your privacy, so we never will share your info.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { $supabase } = useNuxtApp()

  const router = useRouter()
  const loading = ref(false)
  const email = ref('')
  const password = ref('')
  const error = ref(null)

  const config = useRuntimeConfig()
  const recaptchaSiteKey = config.public?.recaptcha?.siteKey ?? null

  const loadRecaptcha = () => {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') return resolve(null)
      // already available
      // @ts-ignore
      if (window.grecaptcha) return resolve(window.grecaptcha)

      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`
      script.async = true
      script.defer = true
      script.onload = () => resolve(window.grecaptcha)
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  const getRecaptchaToken = async () => {
    if (!recaptchaSiteKey) return null
    try {
      // @ts-ignore
      await loadRecaptcha()
      // @ts-ignore
      const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'login' })
      return token
    } catch (e) {
      // don't block login on recaptcha load failure; surface a helpful error
      console.warn('reCAPTCHA load/execute failed', e)
      return null
    }
  }

  const handleLogin = async () => {
    try {
      loading.value = true
      error.value = null

      const captchaToken = await getRecaptchaToken()

      const {
        data,
        error: signInError
      } = await $supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      }, captchaToken ? { captchaToken } : undefined)

      if (signInError) throw signInError

      // Successful login
      await router.push('/') // or your dashboard route
    } catch (e) {
      error.value = e.message ?? String(e)
    } finally {
      loading.value = false
    }
  }

  definePageMeta({
    layout: 'auth',
  })
</script>
