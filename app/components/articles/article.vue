<template>
    <div>
        <section data-bs-version="5.1" class="features07 healthm5 cid-uK6DfYHEV4" id="features07-ax">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="items-wrapper">
                            <div class="item features-image">
                                <div class="item-wrapper">
                                    <div class="item-img">
                                        <a href="#"><img src="assets/images/image6.jpg" alt=""></a>
                                        <div class="date-wrapper">
                                            <p class="item-date mbr-fonts-style display-4">
                                                {{ article?.created_at }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="item-content">
                                        <h4 class="item-title mbr-fonts-style display-7">
                                            {{ article?.name }}
                                        </h4>
                                        <p class="item-text mbr-fonts-style display-4">
                                            {{ article?.excerpt }}
                                        </p>
                                        <div class="mbr-section-btn">
                                            <a class="btn btn-primary-outline display-4" :href="`/help/article/${article?.slug}`">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
   const props = defineProps({
  article: {
    type: String,
    required: true,
  },
});
</script>