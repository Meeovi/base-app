<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <img src="../../assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Welcome Back</strong>
              </h2>

              <!-- Show error message if exists -->
              <p v-if="error" class="error-message text-danger">{{ error }}</p>
            </div>
            <div class="form-wrap">
              <div class="mbr-form" data-form-type="formoid">
                <form width="500">
                  <v-text-field type="email" v-model="email" label="Email*" required :disabled="loading"
                    :error-messages="error && !email ? ['Email is required'] : []"></v-text-field>

                  <v-text-field type="password" v-model="password" label="Password*" required :disabled="loading"
                    :error-messages="error && !password ? ['Password is required'] : []"></v-text-field>

                  <v-checkbox v-model="rememberMe" label="Remember me" color="primary"></v-checkbox>
                  <v-list lines="one" style="background: transparent;">
                    <v-list-item>
                      <v-list-item-title>
                        Forgot your password?.
                        <a href="/auth/forgot-password">Reset It Here</a>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        Don't have an account?.
                        <a href="/auth/register">Signup Here</a>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>

                  <v-btn @click="signIn('credentials', { email, password, callbackUrl: '/protected/globally' })" class="mt-2 btn btn-primary display-4" type="submit" :loading="loading" :disabled="loading">
                    {{ loading ? 'Logging in...' : 'Login' }}
                  </v-btn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
/*  import {
    definePageMeta,
    useAuth
  } from '#imports'*/

  //const userStore = useUserStore()
  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  const error = ref('')
  const loading = ref(false)

  const {
    signIn
  } = useAuth()

  definePageMeta({
    auth: false,
    layout: 'auth',
  });

  useHead({
    title: 'Login',
  });
</script>