<script setup lang="ts">

import type { DirectusField } from '@directus/sdk'
import Input from './blocks/forms/Input.vue'
import TextArea from './blocks/forms/TextArea.vue'
import Select from './blocks/forms/Select.vue'
import DateTime from './blocks/forms/DateTime.vue'
import FileInput from './blocks/forms/FileInput.vue'

const props = defineProps<{
    field: DirectusField
}>()

const fieldLookup = computed(() => {
    if (!props.field.meta?.interface) {
        return Input
    }
    
    switch (props.field.meta.interface) {
        case 'input':
            return Input
        case 'input-rich-text-md':
            return TextArea
        case 'select-dropdown':
            return Select
        case 'file':
        case 'file-image':
        case 'file-upload':
        case 'file-input':
            return FileInput
        case 'datetime':
            return DateTime
        default:
            return Input
    }
})
</script>

<template>
    <component v-if="field.meta && !field.meta.hidden" :key="field.field" :is="fieldLookup" :field="field.field"
        :width="field.meta?.width" :defaultValue="field.schema?.default_value" :label="field.meta?.field"
        :options="field.meta?.options" :required="field.schema?.is_nullable === false" />
</template>