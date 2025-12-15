<template>
  <div class="notifications-page" style="width: 100%;">
    <v-row>
      <v-col cols="12">
        <v-card elevation="0" style="width: 100%;">
          <v-card-title class="d-flex align-center">
            <span>Notifications</span>
            <v-spacer></v-spacer>
            <v-btn color="primary" prepend-icon="fas:fa fa-check-double" @click="markAllAsRead"
              :disabled="!hasUnreadNotifications">
              Mark All as Read
            </v-btn>
          </v-card-title>

          <DynamicTableElement :items="notifications" :loading="loading" class="elevation-1" :format-dates="true"
            :actions="true">
            <template #item="{ item, headers }">
              <tr :class="{ 'unread-row': !item.isRead }">
                <td v-for="h in headers" :key="h.value">
                  <template v-if="h.value === 'title'">
                    <div class="d-flex align-center">
                      <v-icon :icon="getNotificationIcon(item.type)" :color="getNotificationColor(item.type)"
                        class="me-2"></v-icon>
                      <span v-html="item.title"></span>
                    </div>
                  </template>
                  <template v-else-if="h.value === 'date'">
                    {{ new Date(item.date).toLocaleString() }}
                  </template>
                  <template v-else-if="h.value === '__actions'">
                    <v-btn icon variant="text" size="small"
                      :href="(item.source === 'magento' && item.type === 'order') ? (`/orders/${item.payload?.order_id}`) : (item.payload?.link || '/notifications')"
                      class="me-2">
                      <v-icon>fas:fa fa-external-link-alt</v-icon>
                    </v-btn>
                    <v-btn v-if="!item.isRead" icon variant="text" size="small" color="primary"
                      @click="markAsRead(item.id, item.source)">
                      <v-icon>fas:fa fa-check</v-icon>
                    </v-btn>
                  </template>
                  <template v-else>
                    {{ item[h.value] }}
                  </template>
                </td>
              </tr>
            </template>
          </DynamicTableElement>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import {
    ref,
    computed
  } from 'vue'
  import {
    useNotifications
  } from '#shared/app/composables/globals/useNotifications'

  const {
    notifications,
    markAsRead,
    markAllAsRead
  } = useNotifications()
  const loading = ref(false)
  const hasUnreadNotifications = computed(() => notifications.value.some(n => !n.isRead))
</script>

<style scoped>
  .notifications-page {
    padding: 20px 0;
  }

  .unread-row {
    background-color: rgba(var(--v-theme-primary), 0.05);
  }

  :deep(.v-data-table) {
    background: transparent !important;
  }

  :deep(.v-data-table-header) {
    background-color: rgba(var(--v-theme-surface), 0.8);
  }
</style>