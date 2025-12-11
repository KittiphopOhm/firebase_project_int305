import App from '@/App.vue'
import LoginSignupManager from '@/components/LoginSignup.vue'
import ProductManager from '@/components/ProductList.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import PaymentManager from '@/components/Payment.vue'
import OrderDetail from '@/components/OrderDetail.vue'
import OrderList from '@/components/OrderList.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      meta: {
        requiresAuth: true
      }
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
      meta: {
        requiresAuth: true
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const email = sessionStorage.getItem("email")
    if (email) {
      next()
    } else {
      next({name: 'Login'})
    }
  } else {
    next()
  }
})

export default router
