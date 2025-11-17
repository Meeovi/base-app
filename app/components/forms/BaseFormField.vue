<template>
	<div v-if="props.field.type !== 'hidden'" :class="`field-width-${field.width ?? '100'}`">
		<div class="pt-2">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-1 h-[20px]">
					<span v-if="field.type !== 'checkbox'">{{ field.label ?? '' }}</span>
					<span v-if="field.help" class="text-sm text-gray-500">{{ field.help }}</span>
				</div>
				<span v-if="field.required" class="text-sm text-gray-400">*Required</span>
			</div>

			<!-- Dynamic native field rendering -->
			<div>
				<!-- Text input -->
				<input v-if="fieldComponent === 'input-text'" type="text" v-model="innerValue"
					v-bind="getComponentProps(field)" class="w-full border rounded px-2 py-1" />

				<!-- Textarea -->
				<textarea v-else-if="fieldComponent === 'textarea'" v-model="innerValue"
					v-bind="getComponentProps(field)" class="w-full border rounded px-2 py-1"></textarea>

				<!-- Select -->
				<select v-else-if="fieldComponent === 'select'" v-model="innerValue" v-bind="getComponentProps(field)"
					class="w-full border rounded px-2 py-1">
					<option v-for="(opt, idx) in (field.choices || [])" :key="idx" :value="opt.value ?? opt">
						{{ opt.label ?? opt }}
					</option>
				</select>

				<!-- Checkbox -->
				<input v-else-if="fieldComponent === 'input-checkbox'" type="checkbox" :checked="innerValue"
					@change="onCheckboxChange" v-bind="getComponentProps(field)" />

				<!-- File -->
				<input v-else-if="fieldComponent === 'input-file'" type="file" @change="onFileChange"
					v-bind="getComponentProps(field)" />
			</div>

			<div v-if="errorMessages.length" class="text-red-500 italic text-sm mt-1">{{ errorMessages[0] }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	// Local FormField type to avoid missing module '~/types/schema'
	type FormField = {
		id: string;
		name ? : string;
		placeholder ? : string;
		label ? : string;
		required ? : boolean;
		type ? : string;
		choices ? : any[];
		width ? : string | number;
		help ? : string;
	};

	import {
		ref,
		watch,
		computed
	} from 'vue';

	// Accept v-model from parent (DynamicCrudForm uses v-model on the dynamic component)
	const props = defineProps < {
		field: FormField;modelValue ? : any
	} > ();
	const emit = defineEmits(['update:modelValue']);

	// inner value mirrors v-model
	const innerValue = ref(props.modelValue ?? null);
	watch(
		() => props.modelValue,
		(v) => {
			innerValue.value = v;
		}
	);
	watch(innerValue, (v) => emit('update:modelValue', v));

	// Simple required check (no external validator) — can be expanded later
	const isInvalid = computed(() => {
		if (!props.field.required) return false;
		const val = innerValue.value;
		return val === null || val === undefined || (typeof val === 'string' && val.trim() === '');
	});

	// Map form field types to native HTML elements or simple Vue components
	const componentMap: Record < string, string > = {
		textarea: 'textarea',
		checkbox: 'input-checkbox', // custom marker — render input[type=checkbox]
		checkbox_group: 'select',
		radio: 'input-radio',
		select: 'select',
		file: 'input-file',
		default: 'input-text',
	};

	const fieldComponent = computed(() => componentMap[props.field.type ?? ''] || componentMap.default);

	const getComponentProps = (field: FormField) => {
		const baseProps: Record < string, any > = {
			id: field.id,
			name: field.name ?? '',
			placeholder: field.placeholder ?? '',
			label: field.label ?? '',
		};

		if (['checkbox_group', 'radio', 'select'].includes(field.type ?? '')) {
			return {
				...baseProps,
				options: field.choices ?? []
			};
		}

		return baseProps;
	};

	const onCheckboxChange = (e: Event) => {
		const target = e.target as HTMLInputElement | null;
		innerValue.value = !!(target && target.checked);
	};

	const onFileChange = (e: Event) => {
		const target = e.target as HTMLInputElement | null;
		innerValue.value = target && target.files ? target.files[0] : null;
	};

	const errorMessages = computed(() => (isInvalid.value ? ['This field is required'] : []));
</script>

<style scoped>
	.field-width-100 {
		flex: 100%;
	}

	.field-width-50 {
		flex: calc(50% - 1rem);
	}

	.field-width-67 {
		flex: calc(67% - 1rem);
	}

	.field-width-33 {
		flex: calc(33% - 1rem);
	}
</style>