<template>
  <v-btn variant="flat" @click="signOut">Logout</v-btn>
</template>

<script setup>
const { supabase } = useSupabaseClient()

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
}
</script>

