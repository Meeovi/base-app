<template>
  <div>
    <section class="mbr-section features20">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left display-5">Related Products</h2>
        <div class="underline align-left pb-3"><div class="line"></div></div>
        <div class="flex flex-wrap gap-4">
          <productCard v-for="product in relatedProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useVendureQuery } from '../../../composables/useVendureQuery';
import getRelatedProductsQuery from '#graphql/app/commerce/queries/getRelatedProducts.gql';
import productCard from './productCard.vue';

const props = defineProps({ productId: { type: String, required: true } });
const relatedProducts = ref([]);

const { data, refetch } = useVendureQuery(getRelatedProductsQuery, { productId: props.productId });
onMounted(() => {
  if (data.value?.relatedProducts) {
    relatedProducts.value = data.value.relatedProducts;
  }
});
</script>