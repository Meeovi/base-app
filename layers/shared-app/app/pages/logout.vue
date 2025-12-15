<template>
    <div>
        <h1>Logging out...</h1>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuth as useSidebaseAuth } from '#auth'

const router = useRouter()

const handleLogout = async () => {
  try {
    const auth = useSidebaseAuth()
    if (typeof auth.signOut === 'function') {
      // @ts-ignore
      await auth.signOut({ callbackUrl: '/auth/login' })
    }
  } catch (e) {
    // ignore sign out errors
  }

  // clear any local state as fallback
  try { localStorage.removeItem('jwtToken') } catch (e) {}

  // Redirect to the login page
  router.push('/auth/login')
}

// Run logout immediately when this page is visited
handleLogout()
</script>