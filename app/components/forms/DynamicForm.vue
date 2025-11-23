<script setup>
import { resolveFieldComponent } from '~/utils/fieldRegistry.js'

defineProps({
  schema: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])

function updateField(name, value) {
  emit('update:modelValue', { ...props.modelValue, [name]: value })
}
</script>

<template>
  <form>
    <div v-for="field in schema" :key="field.field" class="form-field">
      <label :for="field.field">{{ field.meta?.display_name || field.field }}</label>
      <component
        :is="resolveFieldComponent(field)"
        v-model="modelValue[field.field]"
        :options="field.meta?.options"
        :id="field.field"
      />
    </div>
  </form>
</template>