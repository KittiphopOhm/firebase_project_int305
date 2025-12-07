import App from '@/App.vue'
import LoginSignupManager from '@/components/LoginSignupManager.vue'
import ProductManager from '@/components/ProductManager.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App,
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
  ],
})

export default router
