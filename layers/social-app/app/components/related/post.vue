<template>
    <div>
        <div class="media-container-row">
            <div class="wrap col-sm-12 col-lg-4 feedPost">
                <div class="card__wrap">
                    <div class="image">
                        <div v-if="post?.file">
                            <video :src="`${$directus.url}assets/${post?.file?.filename_disk}`"></video>
                        </div>

                        <div v-else-if="post?.audio">
                            <audio :src="`${$directus.url}assets/${post?.audio?.filename_disk}`"></audio>
                        </div>

                        <div v-else-if="post?.image && post?.image?.filename_disk.endsWith('.gif')">
                            <img loading="lazy" :src="`${$directus.url}assets/${post?.image?.filename_disk}`"
                                :alt="post?.title || 'No Title'" />
                        </div>

                        <div v-else>
                            <img loading="lazy" src="/images/background4.jpg"
                                :alt="post?.title || 'No Title'" />
                        </div>
                    </div>

                    <v-toolbar color="transparent" flat>
                        <v-toolbar-title>
                            <p class="card__date mbr-fonts-style display-4 auto-text">Posted:
                                {{ post?.date_created ? new Date(post?.date_created).toLocaleDateString() : 'Unknown date' }}
                            </p>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <share />

                        <NuxtLink v-if="post?.author?.avatar" :to="post?.author?.id">
                            <v-avatar :image="post?.author?.avatar"></v-avatar>
                        </NuxtLink>

                        <NuxtLink v-else :to="post?.author?.id">
                            <v-avatar image="/images/background4.jpg" size="31"></v-avatar>
                        </NuxtLink>
                    </v-toolbar>

                    <h4 class="card__title mbr-fonts-style display-7">{{ post?.title }}</h4>
                    <p v-html="post?.content"></p>

                    <div class="socialbar">
                        <div class="mbr-section-btn">
                            <reactions :contentId="post?.reactions?.reactions_id" :contentType="post?.type" />
                        </div>

                        <div class="mbr-section-btn">
                            <v-btn prepend-icon="fas fa-comment" title="Comment on this post"
                                class="btn btn-sm btn-black-outline display-4"
                                :href="`/connect/post/${post?.slug}`">Comment</v-btn>
                        </div>

                        <div class="mbr-section-btn">
                            <flag :reportId="post?.report?.report_id?.id" /><!---->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import share from '~/components/blocks/share.vue';
    import flag from '~/components/blocks/flag.vue';
    import reactions from '~/components/blocks/reactions.vue';
    import { toRef, onMounted, computed } from 'vue'
    import { useReactionsStore } from '~/stores/reactions'

    const props = defineProps({
        post: {
            type: Object,
            required: true,
        },
    });
    const post = toRef(props, 'post');

    const reactionsStore = useReactionsStore()
    const reactionState = computed(() => {
        const rid = post.value?.reactions?.reactions_id
        if (!rid) return { likeCount: 0, isLiked: false, loading: false }
        return reactionsStore.getItem(rid, post.value?.type)
    })

    onMounted(async () => {
        const rid = post.value?.reactions?.reactions_id
        if (rid) {
            await reactionsStore.fetchReactions(rid, post.value?.type)
        }
    })
</script>