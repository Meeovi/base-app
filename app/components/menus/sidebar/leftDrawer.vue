<template>
    <v-btn @click="open = true"> Menu </v-btn>

    <transition enter-active-class="transition duration-500 ease-in-out"
        leave-active-class="transition duration-500 ease-in-out"
        :enter-from-class="placement === 'left' ? '-translate-x-full' : 'translate-x-full'"
        :enter-to-class="placement === 'left' ? 'translate-x-0' : 'translate-x-0'"
        :leave-from-class="placement === 'left' ? 'translate-x-0' : 'translate-x-0'"
        :leave-to-class="placement === 'left' ? '-translate-x-full' : 'translate-x-full'">
        <SfDrawer ref="drawerRef" v-model="open" :placement="placement" :class="[
        'bg-neutral-50',
        'border',
        'border-gray-300',
        { 'max-w-[370px]': placement === 'left' || placement === 'right' },
      ]">
            <header class="flex items-center justify-between px-10 py-6 bg-primary-700">
                <div class="flex items-center text-white">
                    <SfIconFavorite class="mr-2" /> Your favorite items
                </div>
                <v-btn square variant="tertiary" class="text-white" @click="open = false">
                    <SfIconClose />
                </v-btn>
            </header>
            <div class="p-5 px-10">
                <topmenu />
                <v-divider></v-divider>

                <socialmenu />

                <departmentsmenu />
                <v-divider></v-divider>

                <!---->
                <outlets />
                <v-divider></v-divider>

                <myaccountmenu />
                <v-divider></v-divider>

                <bottomsidebarmenu />
            </div>
        </SfDrawer>
    </transition>
</template>

<script lang="ts" setup>
    import { topmenu } from '~/app/components/menus/sidebar/topmenu.vue';
    import { socialmenu } from '~/app/components/menus/sidebar/socialmenu.vue';
    import { departmentsmenu } from '~/app/components/menus/sidebar/departmentsmenu.vue';
    import { outlets } from '~/app/components/menus/sidebar/outletsmenu.vue';
    import { myaccountmenu } from '~/app/components/menus/sidebar/myaccountmenu.vue';
    import { bottomsidebarmenu } from '~/app/components/menus/sidebar/bottomsidebarmenu.vue';
    import {
        SfDrawer,
        SfDrawerPlacement,
        
        SfRadio,
        SfIconFavorite,
        SfIconClose,
        useTrapFocus,
    } from '@storefront-ui/vue';
    import {
        ref
    } from 'vue';

    const placement = ref < `${SfDrawerPlacement}` > ('left');
    const open = ref(false);
    const drawerRef = ref();

    const options = ref([{
            label: 'Slide from left',
            value: 'left'
        },
        {
            label: 'Slide from right',
            value: 'right'
        },
    ]);

    useTrapFocus(drawerRef, {
        activeState: open
    });
</script>