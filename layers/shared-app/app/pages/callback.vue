<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-text-field type="url" hint=""></v-text-field>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(async () => {
    // Simple callback redirect logic
    await router.replace('/')
})

useHead({ title: '' })
</script>