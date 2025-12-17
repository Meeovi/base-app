<template>
  <div>
    <section data-bs-version="5.1" class="info1 cid-v5A0K07pfT" id="info1-bd" data-sortbtn="btn-primary">
      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(68, 121, 217);"></div>
      <div class="align-center container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <h3 class="mbr-section-title mb-4 mbr-fonts-style display-1">
              <strong> {{ notificationPage?.name }}</strong>
            </h3>
            <p class="mbr-section-title mb-4 mbr-fonts-style display-7" v-html="notificationPage?.content"></p>
          </div>
        </div>
      </div>
    </section>

    <v-card variant="text">
      <v-toolbar :style="`background-color: ${notificationBar?.color}; color: ${notificationBar?.colortext} !important`">

        <v-tabs v-model="tab" align-tabs="center">
          <div v-for="(menu, index) in notificationBar?.menus" :key="index">
            <v-tab :value="menu?.value">
              <v-btn variant="text" :style="`color: ${notificationBar?.colortext} !important`">{{ menu?.name }}</v-btn>
            </v-tab>
          </div>
        </v-tabs>
      </v-toolbar>
    </v-card>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="notificationBar?.menus?.[0]?.value">
        <v-row class="media-container-row">
          <template v-if="notifications?.length">
            <!--<v-col class="wrap col-sm-12 col-lg-4 feedPost" v-for="notify in notifications" :key="notify.id">
              <notifyCard :notify="notify" />
            </v-col>-->
            <div id="notification-inbox"></div>
          </template>
          <div class="center-text" v-else>No Notifications yet</div>
        </v-row>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
  const {
    $directus,
    $readItem,
    $readItems
  } = useNuxtApp()
  const tab = ref(null);

  const {
    data: notificationBar
  } = await useAsyncData('notificationBar', async () => {
    const resp = await $directus.request($readItem('navigation', '93', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
    return resp?.data ?? resp ?? null
  })

  const {
    data: notificationPage
  } = await useAsyncData('notificationPage', () => {
    return $directus.request($readItem('pages', '95', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })
</script>