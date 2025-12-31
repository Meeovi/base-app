export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()

  if (userStore.isLoggedIn === undefined) return

  if (!userStore.isLoggedIn && to.meta.requiresAuth) {
    return navigateTo('/login')
  }

  if (
    userStore.isLoggedIn &&
    (to.path === '/login' || to.path === '/register')
  ) {
    return navigateTo('/')
  }
})
