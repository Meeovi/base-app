<template>
    <div>
        <section data-bs-version="5.1" class="header2 cid-v0pkVRjU84" id="header2-i">
            <div>
                <div class="container">
                    <div class="row main">
                        <div class="col-12 col-lg-5">
                            <h5 class="mbr-section-title mbr-fonts-style display-5">@{{ user?.username }}
                            </h5>
                            <p class="mbr-text mbr-fonts-style display-5">{{ user?.first_name }} {{ user?.last_name }}</p>
                            <div id="bootstrap-toggle" class="toggle-panel accordionStyles tab-content">
                                <div class="card">
                                    <div class="card-header" role="tab" id="headingOne">
                                        <a role="button" class="collapsed panel-title text-black" data-toggle="collapse"
                                            data-bs-toggle="collapse" data-core="" href="#collapse1_9"
                                            aria-expanded="false" aria-controls="collapse1">
                                            <h6 class="panel-title-edit mbr-fonts-style display-7">
                                                <span
                                                    class="p-2 mbr-iconfont mobi-mbri-arrow-next mobi-mbri"></span>About Me
                                            </h6>
                                        </a>
                                    </div>
                                    <div id="collapse1_9" class="panel-collapse noScroll collapse" role="tabpanel"
                                        aria-labelledby="headingOne">
                                        <div class="panel-body">
                                            <p class="mbr-fonts-style panel-text display-4">
                                                {{ user?.description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" role="tab" id="headingTwo">
                                        <a role="button" class="collapsed panel-title text-black" data-toggle="collapse"
                                            data-bs-toggle="collapse" data-core="" href="#collapse2_9"
                                            aria-expanded="false" aria-controls="collapse2">
                                            <h6 class="panel-title-edit mbr-fonts-style mb-0 display-7">
                                                <span
                                                    class="p-2 mbr-iconfont mobi-mbri-arrow-next mobi-mbri"></span>Location
                                            </h6>
                                        </a>
                                    </div>
                                    <div id="collapse2_9" class="panel-collapse noScroll collapse" role="tabpanel"
                                        aria-labelledby="headingTwo">
                                        <div class="panel-body">
                                            <p class="mbr-fonts-style panel-text display-4">
                                                {{ user?.city?.city_id?.name }}, {{ user?.state?.state_id?.name }}, {{ user?.country?.country_id?.name }}, {{ user?.postalcode }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" v-if="user?.company">
                                    <div class="card-header" role="tab" id="headingThree">
                                        <a role="button" class="collapsed panel-title text-black" data-toggle="collapse"
                                            data-bs-toggle="collapse" data-core="" href="#collapse3_9"
                                            aria-expanded="false" aria-controls="collapse3">
                                            <h6 class="panel-title-edit mbr-fonts-style mb-0 display-7">
                                                <span
                                                    class="p-2 mbr-iconfont mobi-mbri-arrow-next mobi-mbri"></span>Company Details
                                            </h6>
                                        </a>
                                    </div>
                                    <div id="collapse3_9" class="panel-collapse noScroll collapse" role="tabpanel"
                                        aria-labelledby="headingThree">
                                        <div class="panel-body">
                                            <p class="mbr-fonts-style panel-text display-4">
                                                {{ user?.company }}
                                            </p>
                                        </div>
                                    </div>
                                </div>



                                <div class="button-align">
                                    <div class="mbr-section-btn margin"><a class="btn btn-warning display-4" href="">ADD
                                            FRIEND</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-7 b">
                            <div class="im card1">
                                <img :src="`${$directus.url}assets/${user?.avatar?.filename_disk}`" :alt="user?.username" class="img2">
                                <svg class="svg1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px"
                                    viewBox="0 0 178.4 178.3" style="enable-background:new 0 0 178.4 178.3;"
                                    xml:space="preserve">
                                    <path class="st0"
                                        d="M89.2,89.2v89.1c49.2,0,89.2-39.9,89.2-89.1v0C178.4,39.9,138.4,0,89.2,0V89.2z">
                                    </path>
                                    <path class="st1"
                                        d="M0,89.2v89.1c49.2,0,89.2-39.9,89.2-89.1v0C89.2,39.9,49.3,0,0,0V89.2z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1077.35 1080" class="svg2">
                                    <g id="Layer_3" data-name="Layer 3">
                                        <path class="cls-1"
                                            d="M538.18,1080C240.48,1080-.88,838.69-1,541H1077.35C1077.25,838.69,835.9,1080,538.18,1080Z">
                                        </path>
                                        <path class="cls-2"
                                            d="M1077.35,541H-1v-.18C-1,243.06,240.41,1.68,538.18,1.68s539.17,241.38,539.17,539.15Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const route = useRoute();
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: user
    } = await useAsyncData('user', () => {
        return $directus.request($readItems('profiles', {
            filter: {
                slug: {
                    _eq: `${route.params.slug}`
                }
            },
            fields: ['*'],
            limit: 1
        })).then(response => response?.[0]) // Get first item from response
    })

    useHead({
        title: user?.value?.username || 'User Profile',
    })
</script>