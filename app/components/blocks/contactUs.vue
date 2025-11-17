<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label class="block mb-1">Name</label>
            <input type="text" v-model="name" class="w-full border rounded px-2 py-1" />
            <div v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</div>
        </div>

        <div class="mb-3">
            <label class="block mb-1">Phone Number</label>
            <input type="text" v-model="phone" class="w-full border rounded px-2 py-1" />
            <div v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</div>
        </div>

        <div class="mb-3">
            <label class="block mb-1">E-mail</label>
            <input type="email" v-model="email" class="w-full border rounded px-2 py-1" />
            <div v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</div>
        </div>

        <div class="mb-3">
            <label class="block mb-1">Select</label>
            <select v-model="select" class="w-full border rounded px-2 py-1">
                <option value="">-- choose --</option>
                <option v-for="(it, idx) in items" :key="idx" :value="it">{{ it }}</option>
            </select>
            <div v-if="errors.select" class="text-red-500 text-sm">{{ errors.select }}</div>
        </div>

        <div class="mb-3">
            <label class="inline-flex items-center">
                <input type="checkbox" v-model="checkbox" value="1" class="mr-2" /> Option
            </label>
            <div v-if="errors.checkbox" class="text-red-500 text-sm">{{ errors.checkbox }}</div>
        </div>

        <div class="flex gap-2">
            <button class="me-4 px-4 py-2 bg-blue-600 text-white rounded" type="submit">Submit</button>
            <button type="button" @click="handleReset" class="px-4 py-2 border rounded">Clear</button>
        </div>
    </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const name = ref('')
const phone = ref('')
const email = ref('')
const select = ref('')
const checkbox = ref(null)

const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])

const errors = reactive({ name: '', phone: '', email: '', select: '', checkbox: '' })

const validate = () => {
    let ok = true
    errors.name = ''
    errors.phone = ''
    errors.email = ''
    errors.select = ''
    errors.checkbox = ''

    if (name.value.length < 2) {
        errors.name = 'Name needs to be at least 2 characters.'
        ok = false
    }
    if (!/^[0-9-]{7,}$/.test(phone.value)) {
        errors.phone = 'Phone number needs to be at least 7 digits.'
        ok = false
    }
    if (!/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(email.value)) {
        errors.email = 'Must be a valid e-mail.'
        ok = false
    }
    if (!select.value) {
        errors.select = 'Select an item.'
        ok = false
    }
    if (checkbox.value !== '1') {
        errors.checkbox = 'Must be checked.'
        ok = false
    }

    return ok
}

const submit = () => {
    if (validate()) {
        alert(JSON.stringify({ name: name.value, phone: phone.value, email: email.value, select: select.value, checkbox: checkbox.value }, null, 2))
    }
}

const handleReset = () => {
    name.value = ''
    phone.value = ''
    email.value = ''
    select.value = ''
    checkbox.value = null
    errors.name = ''
    errors.phone = ''
    errors.email = ''
    errors.select = ''
    errors.checkbox = ''
}
</script>