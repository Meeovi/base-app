export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth()

  if (!auth.isAuthenticated.value) {
    return navigateTo('/login')
  }

  if (!auth.isSeller.value) {
    return navigateTo('/')
  }
})
