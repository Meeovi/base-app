<template>
    <div>
        <section data-bs-version="5.1" class="firmm4_features1 features1 cid-uhBuptnWmV" id="features1-9v">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-3 col-md-6 col-sm-6">
                        <div class="card_wrapper">
                            <div class="card-box">
                                <div class="icon_block">
                                    <div class="iconfont-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span>
                                    </div>
                                </div>
                                <h5 class="card-title mbr-fonts-style display-7"><strong>{{ coupon?.name }}</strong>
                                </h5>
                                <p class="card-text mbr-fonts-style display-4">{{ coupon?.amount }}</p>
                                <p class="card-text mbr-fonts-style display-4">{{ coupon?.excerpt }}</p>
                                <p class="btn_link mbr-fonts-style display-4">
                                    <NuxtLink :to="`/commerce/coupon/${coupon?.id}`" class="text-secondary">View<span
                                            class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></NuxtLink>
                                </p>
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
        coupon: {
            type: String,
            required: true,
        },
    });
</script>