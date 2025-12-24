<template>
  <v-dialog v-model="dialog" max-width="600px" persistent>
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon class="me-2">mdi-package-down</v-icon>
        Create Return Request
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" @click="cancelReturn" />
      </v-card-title>

      <v-card-text v-if="order">
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <p class="text-subtitle-1 mb-4">
                Creating return for Order #{{ order.order_number }}
              </p>
            </v-col>

            <v-col cols="12">
              <v-select
                v-model="returnForm.reason"
                :items="returnReasons"
                label="Return Reason"
                variant="outlined"
                :rules="[(v: string) => !!v || 'Reason is required']"
                required
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="returnForm.description"
                label="Additional Details"
                variant="outlined"
                rows="3"
                hint="Please provide additional details about the return"
              />
            </v-col>

            <v-col cols="12">
              <v-card variant="outlined">
                <v-card-title class="text-h6">Select Items to Return</v-card-title>
                <v-card-text>
                  <div v-for="item in order.order_items" :key="item.id" class="mb-3">
                    <v-row align="center">
                      <v-col cols="1">
                        <v-checkbox
                          v-model="selectedItems[item.id]"
                          hide-details
                        />
                      </v-col>
                      <v-col cols="6">
                        <span>{{ item.product_name }}</span>
                      </v-col>
                      <v-col cols="2">
                        <span>Qty: {{ item.quantity }}</span>
                      </v-col>
                      <v-col cols="3">
                        <v-text-field
                          v-model.number="returnQuantities[item.id]"
                          type="number"
                          :min="1"
                          :max="item.quantity"
                          :disabled="!selectedItems[item.id]"
                          density="compact"
                          variant="outlined"
                          hide-details
                        />
                      </v-col>
                    </v-row>
                    <v-divider v-if="item !== order.order_items[order.order_items.length - 1]" />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="cancelReturn">Cancel</v-btn>
        <v-btn
          color="primary"
          :loading="loading"
          :disabled="!valid || !hasSelectedItems"
          @click="submitReturn"
        >
          Submit Return Request
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useVendureMutation } from '@/app/composables/useVendureMutation';
import createReturnRequestMutation from '~/layers/layer-graphql/app/commerce/mutations/createReturnRequest.gql';

interface Props {
  modelValue: boolean;
  order: { code: string } | null;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue', 'return-submitted']);

const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const returnForm = ref({ reason: '', description: '' })
const selectedItems = ref<Record<string, boolean>>({})
const returnQuantities = ref<Record<string, number>>({})
const valid = ref(false)
const loading = ref(false)

const returnReasons = [
  'Damaged',
  'Wrong Item',
  'Not as Described',
  'Other',
]

const hasSelectedItems = computed(() => Object.values(selectedItems.value).some(Boolean))

const cancelReturn = () => {
  emit('update:modelValue', false)
}

const { mutate: createReturnRequest } = useVendureMutation(createReturnRequestMutation)

const submitReturn = async () => {
  if (!props.order) return
  loading.value = true
  try {
    const items = Object.entries(selectedItems.value)
      .filter(([_, checked]) => checked)
      .map(([itemId]) => ({
        orderLineId: itemId,
        quantity: returnQuantities.value[itemId] || 1,
      }))
    await createReturnRequest({
      orderCode: props.order.code,
      reason: returnForm.value.reason,
      description: returnForm.value.description,
      items,
    })
    emit('return-submitted')
    emit('update:modelValue', false)
  } finally {
    loading.value = false
  }
}

// Initialize quantities when order changes
watch(() => props.order, (newOrder) => {
  if (newOrder) {
    newOrder.order_items.forEach(item => {
      returnQuantities.value[item.id] = 1
    })
  }
}, { immediate: true })
</script>