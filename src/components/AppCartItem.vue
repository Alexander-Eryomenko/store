<template>
  <div class="app-cart-item">
    <div
      v-if="product.image"
      class="app-cart-item__img"
    >
      <img
      :src="product.image"
      alt="img"
      >
    </div>
    <div v-if="product.title">
      <span>Title: {{product.title}}</span>
    </div>
    <div v-if="product.price">
      <span>Price: {{product.price}}</span>
    </div>
    <div v-if="product.quantity">
      <span>Quantity: {{ product.quantity}}</span>
    </div>
    <div class="app-cart-item__buttons">
      <div>
        <button @click="removeItemFromCart">-</button>
        <button @click="addProductToCart">+</button>
      </div>
      <button @click="onDeleteItem">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCartItem',
  props: {
    product: {
      type: Object,
      default: () => { },
    },
  },
  methods: {
    onDeleteItem() {
      this.$store.commit('deleteItem', this.product.id);
    },
    addProductToCart() {
      this.$store.commit('setItemToCart', this.product);
    },
    removeItemFromCart() {
      this.$store.commit('removeItemFromCart', this.product.id);
    }
  },
  created() {
    this.$set(this.product, 'quantity', 1);
  },
};
</script>

<style lang="scss" scoped>
.app-cart-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 33.3%;
  background-color: #fff;
  width: 100%;
  padding: 10px 0;
    &__img {
     width: 100px;
     height: 100px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
   }
  &__buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: baseline;
    row-gap: 10px;
    div {
      width: 100%;
      button {
        width: 50%;
      }
    }
  }
}
</style>
