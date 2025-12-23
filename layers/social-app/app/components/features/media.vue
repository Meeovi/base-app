<template>
    <div>
        <section data-bs-version="5.1" class="info1 cid-v5A0K07pfT" id="info1-bd" data-sortbtn="btn-primary">
            <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(68, 121, 217);"></div>
            <div class="align-center container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                        <h3 class="mbr-section-title mb-4 mbr-fonts-style display-1">
                            <strong> {{ mediaCenterPage?.name }}</strong>
                        </h3>
                        <p class="mbr-section-title mb-4 mbr-fonts-style display-7" v-html="mediaCenterPage?.content"></p>
                    </div>
                </div>
            </div>
        </section>

        <v-card variant="text" class="lowerBar">
            <v-toolbar :style="`background-color: ${mediaBar?.color}; color: ${mediaBar?.colortext} !important`">
                <v-toolbar-title>{{ mediaBar?.name }}</v-toolbar-title>

                <v-tabs v-model="tab" align-tabs="center">
                    <div v-for="(menu, index) in mediaBar?.menus" :key="index">
                        <v-tab :value="menu?.value">
                            <v-btn variant="text"
                                :style="`color: ${mediaBar?.colortext} !important`">{{ menu?.name }}</v-btn>
                        </v-tab>
                    </div>
                </v-tabs>
            </v-toolbar>
        </v-card>

        <v-tabs-window v-model="tab">
            <v-tabs-window-item :value="mediaBar?.menus?.[0]?.value">
                <v-row class="mediaCard">
                    <v-col cols="3">
                        <photoCard :image="images" />
                    </v-col>
                </v-row>
            </v-tabs-window-item>
            <v-tabs-window-item :value="mediaBar?.menus?.[1]?.value">
                <v-row class="mediaCard">
                    <v-col cols="3">
                        <videoCard :visual="visuals" />
                    </v-col>
                </v-row>
            </v-tabs-window-item>
            <v-tabs-window-item :value="mediaBar?.menus?.[2]?.value">
                <v-row class="mediaCard">
                    <v-col cols="3">
                        <documentCard :text="texts" />
                    </v-col>
                </v-row>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import photoCard from '~/components/blocks/photo.vue'
    import videoCard from '~/components/blocks/video.vue'
    import documentCard from '~/components/blocks/document.vue'

    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const tab = ref(null);

    const {
        data: mediaBar
    } = await useAsyncData('mediaBar', () => {
        return $directus.request($readItem('navigation', '81', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: mediaCenterPage
    } = await useAsyncData('mediaCenterPage', () => {
        return $directus.request($readItem('pages', '100', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })


    useHead({
        title: 'Meeovi Media Center',
    })
</script>