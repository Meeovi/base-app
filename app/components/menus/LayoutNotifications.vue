<template>
  <div>
    <v-menu :location="location" transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <a variant="flat" v-bind="props" class="notification-bell">
          <v-icon start icon="fas:fa fa-bell"></v-icon>
          <v-badge
            v-if="unreadCount > 0"
            :content="unreadCount"
            color="error"
            floating
          ></v-badge>
        </a>
      </template>
      <v-list lines="two" class="notification-list">
        <template v-if="notifications.length > 0">
          <v-list-item
            v-for="notification in notifications.slice(0, 5)"
            :key="notification.id"
            :href="getNotificationLink(notification)"
            :class="{ 'unread': !notification.isRead }"
            @click="markAsRead(notification.id, notification.source)"
          >
            <template v-slot:prepend>
              <v-icon :icon="getNotificationIcon(notification.type)" :color="getNotificationColor(notification.type)"></v-icon>
            </template>
            <v-list-item-title v-html="notification.title"></v-list-item-title>
            <v-list-item-subtitle>
              {{ new Date(notification.date).toLocaleDateString() }}
            </v-list-item-subtitle>
          </v-list-item>
        </template>
        <v-list-item v-else>
          <v-list-item-title>No new notifications</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="All Notifications" value="All Notifications" append-icon="fas:fa fa-bell" href="/notifications">
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotifications } from '../../../layers/ui-app/app/composables/globals/useNotifications'

const location = ref('bottom')
const { notifications, unreadCount, markAsRead } = useNotifications()

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
</script>

<style scoped>
.notification-bell {
  position: relative;
  cursor: pointer;
}

.notification-list {
  max-height: 400px;
  overflow-y: auto;
}

.unread {
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style>