<template>
  <div class="products-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductsList',
  components: {
    ProductItem,
  },
  created() {
    this.getProducts();
  },
  methods: {
    ...mapActions([
      'getProducts',
    ]),
  },
  computed: {
    ...mapGetters([
      'products',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.products-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  flex-wrap: wrap;
}
</style>
