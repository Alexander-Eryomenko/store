<template>
    <div class="product-item">
      <button @click="addProductToCart" class="product-item__add-button">Add to cart</button>
      <div v-if="product.title">
        <span>Title: {{product.title}}</span>
      </div>
      <div v-if="product.image" class="product-item__img">
        <img :src="product.image" alt="img">
      </div>
      <div v-if="product.description">
        <span>Descr: {{product.description}}</span>
      </div>
      <div v-if="product.price">
        <span>Price: {{ product.price }}</span>
      </div>
    </div>

</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default: () => { },
    },
  },
  methods: {
    addProductToCart() {
      this.$store.commit('setItemToCart', this.product);
    },
  },
};

</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  justify-content: space-between;
  row-gap: 10px;
  padding: 10px;
  align-items: center;
  border: 2px solid #001f3f;
  overflow: auto;
  flex-basis: 33.3%;
  height: 470px;
  flex-direction: column;
  text-align: center;
  background-color: #3D9970;
  &__img {
    width: 100px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
  &__add-button {
    padding: 5px;
  }
}
</style>
