<template>
  <div>
    <div v-if="page?.name === 'Meeovi Global'">
      <meeoviGlobal />
    </div>
    <div v-if="page?.name === 'Pickup Locations'">
      <pickupLocations />
    </div>
    <div v-if="page?.name === 'Upload Center'">
      <upload />
    </div>
    <div v-else>
      <div v-html="page?.content" />
    </div>
  </div>
</template>

<script setup>
import meeoviGlobal from '~/components/pages/meeoviGlobal.vue'
import pickupLocations from '~/components/pages/pickup-locations.vue'
import upload from '~/components/pages/upload.vue'

const route = useRoute();
const { $directus, $readItem } = useNuxtApp()

const {
  data: page
} = await useAsyncData('page', () => {
  return $directus.request($readItem('pages', {
    filter: {
      slug: { _eq: `${route.params.slug}` }
    },
    fields: ['*'],
    limit: 1
  })).then(response => response?.[0]) // Get first item from response
})

definePageMeta({
  layout: 'nolive',
});

useHead({
  title: page?.value?.name || 'Page',
})
</script>
