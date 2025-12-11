import App from '@/App.vue'
import LoginSignupManager from '@/components/LoginSignupManager.vue'
import ProductManager from '@/components/ProductList.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PaymentManager from '@/components/PaymentManager.vue'
import OrderDetail from '@/components/OrderDetail.vue'
import OrderList from '@/components/OrderList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginSignupManager,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: LoginSignupManager,
    },
    {
      path: '/products',
      name: 'ProductList',
      component: ProductManager,
    },
    {
      path: '/products/:brand',
      name: 'ProductListBrand',
      component: ProductManager,
    },
    {
      path: '/products/:brand/:id',
      name: 'ProductDetail',
      component: ProductDetail,
    },
    {
      path: '/payment/:id',
      name: 'Payment',
      component: PaymentManager,
    },
    {
      path: '/orders/:id',
      name: 'OrderDetail',
      component: OrderDetail,
    },
    {
      path: '/orders',
      name: 'OrderList',
      component: OrderList,
    },
  ],
})

export default router
