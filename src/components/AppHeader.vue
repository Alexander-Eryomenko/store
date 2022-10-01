<template>
  <div class="app-header">
    <div class="app-header__title">{{headerTitle}}</div>
    <nav class="app-header__nav">
      <router-link to="/">Products</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
  </div>
</template>

<script>
import headerTitle from '@/constants/constants';

export default {
  name: 'AppHeader',
  computed: {
    headerTitle() {
      return headerTitle;
    },
  },
};

</script>

<style lang="scss" scoped>
  .app-header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    min-height: 40px;
    background-color: #85144b;
    padding: 10px 0;
    &__title {
      font-size: 1.7rem;
      color: #FFDC00;
    }
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 20px;
      a {
        color: #FFDC00;
        text-decoration: none;
        &:hover {
          color: white;
        }
      }
    }
  }
</style>
