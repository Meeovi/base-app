import type { Session } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()

  // Supabase not ready? Bail quietly.
  if (!nuxtApp.$supabase) return

  const userStore = useUserStore()

  nuxtApp.$supabase.auth.getSession().then(({ data }) => {
    userStore.setUser(data.session?.user ?? null)
    userStore.loading = false
  })

  nuxtApp.$supabase.auth.onAuthStateChange((_event, session: Session | null) => {
    userStore.setUser(session?.user ?? null)
  })
})
