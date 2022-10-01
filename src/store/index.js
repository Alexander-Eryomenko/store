import Vue from 'vue';
import Vuex from 'vuex';
import ApiProducts from '@/api/apiProducts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCartShow: false,
    products: [],
    productsInCart: [],
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setCartItemFromLocalStorage(state, products) {
      state.productsInCart = products;
    },
    setItemToCart(state, product) {
      if (state.productsInCart.length) {
        // eslint-disable-next-line no-unused-vars
        let has = false;
        // eslint-disable-next-line no-unused-vars
        // eslint-disable-next-line array-callback-return
        state.productsInCart.map((item) => {
          if (item.id === product.id) {
            has = true;
            // eslint-disable-next-line no-param-reassign,no-plusplus
            product.quantity++;
          }
        });
        if (!has) {
          state.productsInCart.push(product);
        }
      } else {
        state.productsInCart.push(product);
      }
    },
    removeItemFromCart(state, productId) {
      // eslint-disable-next-line array-callback-return
      state.productsInCart.map((item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            // eslint-disable-next-line no-param-reassign,no-plusplus
            item.quantity--;
          }
        }
      });
    },
    deleteItem(state, id) {
      const filteredProductInCart = state.productsInCart.filter((item) => {
        return item.id !== id;
      });
      state.productsInCart = filteredProductInCart;
    },
  },
  actions: {
    getProducts({ commit }) {
      ApiProducts.getAllProducts().then((data) => {
        commit('setProducts', data);
      });
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    productsInCart(state) {
      return state.productsInCart;
    },
    totalItemsInCart(state) {
      const totalQuantity = state.productsInCart.reduce((acc, item) => {
        // eslint-disable-next-line no-param-reassign
        acc += item.quantity;
        return acc;
      }, 0);
      return totalQuantity;
    },
    totalPriceInCart(state) {
      const totalPrice = state.productsInCart.reduce((acc, item) => {
        // eslint-disable-next-line no-param-reassign
        acc += item.price * item.quantity;
        return acc;
      }, 0);
      return totalPrice.toFixed(2);
    },
  },
});
