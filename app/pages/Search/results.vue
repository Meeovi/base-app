<template>
    <ais-instant-search :search-client="searchClient" index-name="steam-video-games">
        <ais-search-box />
        <ais-hits>
            <template v-slot:item="{ item }">
                <h2>{{ item.name }}</h2>
            </template>
        </ais-hits>
    </ais-instant-search>
</template>

<script>

    export default {
        data() {
            return {

            };
        },
    };
</script>