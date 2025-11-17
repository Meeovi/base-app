<template>
  <div class="notifications-page">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="d-flex align-center">
              <span>Notifications</span>
              <v-spacer></v-spacer>
              <v-btn color="primary" prepend-icon="fas:fa fa-check-double" @click="markAllAsRead"
                :disabled="!hasUnreadNotifications">
                Mark All as Read
              </v-btn>
            </v-card-title>

            <v-data-table :headers="headers" :items="notifications" :loading="loading" class="elevation-1">
              <template v-slot:item="{ item }">
                <tr :class="{ 'unread-row': !item.isRead }">
                  <td>
                    <div class="d-flex align-center">
                      <v-icon :icon="getNotificationIcon(item.type)" :color="getNotificationColor(item.type)"
                        class="me-2"></v-icon>
                      <span v-html="item.title"></span>
                    </div>
                  </td>
                  <td>{{ item.content }}</td>
                  <td>{{ formatDate(item.date) }}</td>
                  <td>
                    <v-chip :color="item.isRead ? 'grey' : 'primary'" size="small">
                      {{ item.isRead ? 'Read' : 'Unread' }}
                    </v-chip>
                  </td>
                  <td>
                    <v-chip :color="getSourceColor(item.source)" size="small">
                      {{ item.source }}
                    </v-chip>
                  </td>
                  <td>
                    <v-btn icon variant="text" size="small" :href="getNotificationLink(item)" class="me-2">
                      <v-icon>fas:fa fa-external-link-alt</v-icon>
                    </v-btn>
                    <v-btn v-if="!item.isRead" icon variant="text" size="small" color="primary"
                      @click="markAsRead(item.id, item.source)">
                      <v-icon>fas:fa fa-check</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
  import {
    ref,
    computed
  } from 'vue'
  import {
    useNotifications
  } from '~/composables/globals/useNotifications'

  const {
    notifications,
    markAsRead,
    markAllAsRead
  } = useNotifications()
  const loading = ref(false)

  const headers = [{
      title: 'Title',
      key: 'title',
      sortable: true
    },
    {
      title: 'Content',
      key: 'content',
      sortable: true
    },
    {
      title: 'Date',
      key: 'date',
      sortable: true
    },
    {
      title: 'Status',
      key: 'isRead',
      sortable: true
    },
    {
      title: 'Source',
      key: 'source',
      sortable: true
    },
    {
      title: 'Actions',
      key: 'actions',
      sortable: false
    }
  ]

  const hasUnreadNotifications = computed(() => {
    return notifications.value.some(n => !n.isRead)
  })

  const getNotificationIcon = (type) => {
    const icons = {
      order: 'fas:fa fa-shopping-cart',
      account: 'fas:fa fa-user',
      social: 'fas:fa fa-users',
      system: 'fas:fa fa-bell'
    }
    return icons[type] || 'fas:fa fa-bell'
  }

  const getNotificationColor = (type) => {
    const colors = {
      order: 'primary',
      account: 'info',
      social: 'success',
      system: 'warning'
    }
    return colors[type] || 'grey'
  }

  const getSourceColor = (source) => {
    return source === 'magento' ? 'success' : 'info'
  }

  const getNotificationLink = (notification) => {
    if (notification.source === 'magento') {
      switch (notification.type) {
        case 'order':
          return `/orders/${notification.payload?.order_id}`
        case 'account':
          return '/account'
        default:
          return '/notifications'
      }
    }
    return notification.payload?.link || '/notifications'
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleString()
  }
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