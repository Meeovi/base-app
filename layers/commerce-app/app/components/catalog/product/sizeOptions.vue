<template>
    <v-row>
        <v-col cols="12">
            <h6>Size</h6>
        </v-col>

        <v-col cols="12">
            <v-select v-model="selectedSize" :items="sizes" label="Select Size" item-value="id" item-title="name" single-line variant="solo" />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const props = defineProps<{ sizes: Array<{ id: string; name: string }> }>();
const emit = defineEmits(['size-selected']);
const selectedSize = ref(null);
watch(selectedSize, (newSize) => emit('size-selected', newSize));
</script>