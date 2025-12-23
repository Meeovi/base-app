<template>
    <div>
        <v-card variant="text" class="lowerBar">
            <v-toolbar :style="`background-color: transparent; color: black !important`">
                <v-toolbar-title>Your Events</v-toolbar-title>


                <v-tabs v-model="tab" align-tabs="center">
                    <div v-for="(menu, index) in eventBar?.submenus" :key="index">
                        <v-tab :value="menu?.value">
                            <v-btn variant="text" :style="`color: black !important`">{{ menu?.name }}</v-btn>
                        </v-tab>
                    </div>
                </v-tabs>
            </v-toolbar>
        </v-card>

        <v-tabs-window v-model="tab">
            <v-tabs-window-item :value="eventBar?.submenus?.[0]?.value">
                <v-sheet class="pa-5">
                    <h2 class="text-center">Going To</h2>
                    <v-row class="member-cards">
                        <v-col cols="3" v-for="events in goingEvents" :key="events.id" class="d-inline-block">
                            <eventCard :event="events" />
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-tabs-window-item>
            <v-tabs-window-item :value="eventBar?.submenus?.[1]?.value">
                <v-sheet class="pa-5">
                    <h2 class="text-center">Invited To</h2>
                    <v-row class="member-cards">
                        <v-col cols="3" v-for="events in invitedEvents" :key="events.id" class="d-inline-block">
                            <eventCard :event="events" />
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-tabs-window-item>
            <v-tabs-window-item :value="eventBar?.submenus?.[2]?.value">
                <v-sheet class="pa-5">
                    <h2 class="text-center">Interested</h2>
                    <v-row class="member-cards">
                        <v-col cols="3" v-for="events in interestedEvents" :key="events.id" class="d-inline-block">
                            <eventCard :event="events" />
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-tabs-window-item>
            <v-tabs-window-item :value="eventBar?.submenus?.[3]?.value">
                <v-sheet class="pa-5">
                    <h2 class="text-center">Events your Hosting</h2>
                    <v-row class="member-cards">
                        <v-col cols="3" v-for="events in hostingEvents" :key="events.id" class="d-inline-block">
                            <eventCard :event="events" />
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-tabs-window-item>

            <v-tabs-window-item :value="eventBar?.submenus?.[4]?.value">
                <v-sheet class="pa-5">
                    <h2 class="text-center">Past Events</h2>
                    <v-row class="member-cards">
                        <v-col cols="3" v-for="events in pastEvents" :key="events.id" class="d-inline-block">
                            <eventCard :event="events" />
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import eventCard from '#commerce/app/components/catalog/productCard.vue'

    const {
        $directus,
        $readItem,
        $readItems
    } = useNuxtApp()
    const route = useRoute()
    const tab = ref(null);

    const {
        data: eventBar
    } = await useAsyncData('eventBar', () => {
        return $directus.request($readItem('navigation', '80', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: goingEvents
    } = await useAsyncData('goingEvents', () => {
        return $directus.request($readItems('events', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                'rsvp_status': {
                    '_eq': "Going"
                }
            }
        }))
    })

    const {
        data: invitedEvents
    } = await useAsyncData('invitedEvents', () => {
        return $directus.request($readItems('events', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                'rsvp_status': {
                    '_eq': "Invites"
                }
            }
        }))
    })

    const {
        data: interestedEvents
    } = await useAsyncData('interestedEvents', () => {
        return $directus.request($readItems('events', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                'rsvp_status': {
                    '_eq': "Interested"
                }
            }
        }))
    })

    const {
        data: hostingEvents
    } = await useAsyncData('hostingEvents', () => {
        return $directus.request($readItems('events', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                'rsvp_status': {
                    '_eq': "Hosting"
                }
            }
        }))
    })

    const {
        data: pastEvents
    } = await useAsyncData('pastEvents', () => {
        return $directus.request($readItems('events', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                'rsvp_status': {
                    '_eq': "Past Events"
                }
            }
        }))
    })

    useHead({
        title: 'Meeovi Events',
    })
</script>