<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>

      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start icon="fas fa-question-circle"></v-icon> Logo
        </a></v-app-bar-title>

      <v-text-field density="compact" variant="solo" label="Search" append-inner-icon="fas fa-search" single-line
        hide-details @click:append-inner="onClick"></v-text-field>
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-clock-rotate-left"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="" value="" href="/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="Show More" value="Show More" href="/admin/user/notifications">
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col>
          <ecosystemmenu />
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="My Account" value="my account" href="/admin/user/"></v-list-item>
              <v-list-item title="Logout" value="logout" href="/logout"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer v-model="drawer" temporary>
            <v-list-item title="Home" href="/"></v-list-item>
            <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div >
                        <v-list-item title="departments.name" value="departments.name"
                            href="`/departments/${departments.slug}`">
                        </v-list-item>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
            <v-list-item title="" href="/projects/"></v-list-item>
            <v-list-item title="" href="/lists/"></v-list-item>
            <v-spacer></v-spacer>
          </v-navigation-drawer>

          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <div>
              <slot />
            </div>
          </main>
        </v-layout>
      </v-card>
      <FooterNav />
    </v-main>
  </v-app>
</template>

<script setup>
  import search from '~/components/Search/search.vue'
  import ecosystemmenu from '~/components/Menus/ecosystemmenu.vue'
  import {
    ref
  } from 'vue';
  import {
    useDark,
    useToggle
  } from '@vueuse/core'
  import {
    useTheme
  } from 'vuetify'

  const theme = useTheme()
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  // Sync Vuetify theme with dark mode
  watch(isDark, (dark) => {
    theme.global.name.value = dark ? 'dark' : 'light'
  }, {
    immediate: true
  })

  // Initialize user state
  const drawer = ref(null);

  useSeoMeta({
    title: 'Starter Template',
    htmlAttrs: {
      // uncomment this line to simulate dark mode
      // class: 'dark',
    },
  });
</script>