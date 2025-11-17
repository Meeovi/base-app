<script setup lang="ts">
import { computed } from 'vue'

interface Choice {
    text: string;
    value: string;
}

const props = defineProps<{
    defaultValue?: string
    label?: string
    options: Record<string, any>
    width: string | null
    field: string
    required: boolean
    modelValue?: string
}>()

const emit = defineEmits(['update:modelValue'])

const fieldWidth = props.width === 'full' ? '100%' : '50%'

const selectValue = computed({
    get() {
        return props.modelValue || props.defaultValue || ''
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

// Transform options for v-select
const items = computed(() => {
    return props.options?.choices?.map((choice: Choice) => ({
        title: choice.text,
        value: choice.value
    })) || []
})
</script>

<template>
    <div :style="'width: ' + fieldWidth + ';'">
        <v-select
            :name="field"
            v-model="selectValue"
            :items="items"
            :label="label"
            :required="required"
            variant="solo-inverted"
            density="compact"
        />
    </div>
</template>
