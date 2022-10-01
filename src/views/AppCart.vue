<template>
  <div class="app-cart">
    <div class="app-cart__text">
      <div class="app-cart__title">Cart</div>
      <div
        class="app-cart__price"
        v-if="this.$store.getters.totalPriceInCart"
      >
        Total price: ${{totalPriceInCart}}
      </div>
      <div
        class="app-cart__amount"
        v-if="totalItemsInCart"
      >
        Total items in cart {{totalItemsInCart}}
      </div>
    </div>
    <AppCartItem
      v-for="productInCart in productsInCart"
      :key="productInCart.id"
      :product="productInCart"
    />
    <div></div>
  </div>
</template>

<script>
import AppCartItem from '@/components/AppCartItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'AppCart',
  components: {
    AppCartItem,
  },
  computed: {
    ...mapGetters([
      'productsInCart',
      'totalItemsInCart',
      'totalPriceInCart'
    ]),
  },
};
</script>

<style lang="scss" scoped>
.app-cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 5px;
  background-color: #AAAAAA;
    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    &__title {
      margin-bottom: 20px;
     }
    &__price, &__amount, &__title {
      font-size: 1.6rem;
      color: #B10DC9;
    }
}
</style>
