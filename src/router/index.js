import Vue from 'vue';
import VueRouter from 'vue-router';
import AppCart from '@/components/AppCart.vue';
import ProductsList from '@/components/ProductsList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ProductsList',
    component: ProductsList,
  },
  {
    path: '/cart',
    name: 'AppCart',
    component: AppCart,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
