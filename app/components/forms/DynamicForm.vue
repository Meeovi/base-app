<template>
	<form
		v-if="validFields.length"
		:data-directus="
			setAttr({
				collection: 'forms',
				item: props.formId,
				fields: 'fields',
				mode: 'popover',
			})
		"
		@submit.prevent="onSubmitForm"
	>
		<div class="flex flex-wrap gap-4">
			<BaseFormField v-for="field in validFields" :key="field.id" :field="toRenderableField(field)" v-model="values[field.name]" />
			<div class="w-full">
				<div>
					<BaseButton
						:id="`submit-${submitLabel.replace(/\s+/g, '-').toLowerCase()}`"
						type="submit"
						:label="submitLabel"
						:disabled="isSubmitting"
						icon="arrow"
						icon-position="right"
						color="dodger-blue"
					/>
				</div>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
type FormField = {
	id?: string | number;
	name?: string;
	type: 'text' | 'textarea' | 'checkbox' | 'checkbox_group' | 'select' | 'radio' | 'file' | string;
	label?: string;
	required?: boolean;
	sort?: number;
	options?: Array<{ label: string; value: string }>;
	// allow other arbitrary properties used by your form fields
	[key: string]: any;
};
import { ref, computed, reactive, watch } from 'vue';
import BaseFormField from './BaseFormField.vue';
// BaseButton lives in search/atoms in this project; import the existing component
import BaseButton from '../search/atoms/BaseButton.vue';

const props = defineProps<{
	fields: FormField[];
	onSubmit: (data: Record<string, any>) => Promise<void> | void;
	submitLabel: string;
	formId?: string;
}>();

const isSubmitting = ref(false);

const { setAttr } = useVisualEditing();

const sortedFields = computed(() => [...props.fields].sort((a, b) => (a.sort || 0) - (b.sort || 0)));

type RenderableField = FormField & { name: string; id: string };

const validFields = computed(() =>
	sortedFields.value.filter((field): field is FormField & { name: string } => field.name != null && field.name !== ''),
);

const toRenderableField = (f: FormField & { name: string }): RenderableField => {
	return {
		...f,
		id: f.id != null ? String(f.id) : '',
	};
};

const initialValues = computed(() => {
	if (!validFields.value.length) return {};
	return validFields.value.reduce(
		(defaults, field) => {
			const name = field.name;

			switch (field.type) {
				case 'checkbox':
					defaults[name] = false;
					break;
				case 'checkbox_group':
					defaults[name] = [];
					break;
				case 'select':
				case 'radio':
					defaults[name] = '';
					break;
				case 'file':
					defaults[name] = null;
					break;
				case 'textarea':
				case 'text':
				default:
					defaults[name] = '';
			}

			return defaults;
		},
		{} as Record<string, any>,
	);
});

// reactive form values
const values = reactive<Record<string, any>>({});
// initialize values
watch(
	initialValues,
	(v) => {
		Object.assign(values, v);
	},
	{ immediate: true },
);

const validate = () => {
	// Simple required check based on field.required
	const errors: string[] = [];
	for (const f of validFields.value) {
		if (f.required) {
			const val = values[f.name];
			if (val === null || val === undefined || (typeof val === 'string' && val.trim() === '')) {
				errors.push(`${f.name} is required`);
			}
		}
	}
	return errors;
};

const onSubmitForm = async () => {
	if (isSubmitting.value) return;
	const errors = validate();
	if (errors.length) {
		// you might want to show these errors in the UI; for now just alert
		alert('Form errors:\n' + errors.join('\n'));
		return;
	}
	try {
		isSubmitting.value = true;
		await props.onSubmit({ ...values });
	} finally {
		isSubmitting.value = false;
	}
};
</script>
