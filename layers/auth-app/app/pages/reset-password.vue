<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="authForm">
      <NuxtImg loading="lazy" src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
      <h1 class="mbr-section-title mbr-fonts-style display-1">Reset Password</h1>

      <div class="reset-password-form">
        <form class="mbr-section-btn">
          <v-text-field v-model="newPassword" type="password" label="New Password" :error-messages="passwordError"
            required></v-text-field>
          <v-text-field v-model="confirmPassword" type="password" label="Confirm Password"
            :error-messages="confirmPasswordError" required></v-text-field>
          <v-btn class="mt-2 btn btn-primary display-4" @click="updateUserPassword" type="submit" block
            :loading="loading" :disabled="loading">
            Reset Password
          </v-btn>
        </form>
      </div>

      <v-alert v-if="message" :type="messageType" class="mt-4" variant="tonal">
        {{ message }}
      </v-alert>

      <div class="mt-4 text-center">
        <NuxtLink to="/auth/login">Back to Login</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
  const { $supabase } = useNuxtApp()

  const newPassword = ref('')
  const password = generateRandomPassword()

  const updateUserPassword = async () => {
    const {
      data,
      error
    } = await supabase.auth.updateUser({
      password: newPassword.value
    })
    if (error) console.log(error)
  }

  watch(newPassword, () => {
    $supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const {
          data,
          error
        } = await supabase.auth
          .updateUser({
            password
          })

        if (data) alert("Password updated successfully!")
        if (error) alert("There was an error updating your password.")
      }
    })
  })

  // Page meta
  useHead({
    title: "Reset Password"
  });

  definePageMeta({
    auth: false,
    layout: false,
  });
</script>

<style scoped>
  .authForm {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
  }

  .message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 4px;
  }
</style>