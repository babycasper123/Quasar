import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'User portal',
      component: () => import('@/views/home.vue'),
      children: [
        {
          name: 'Users',
          path: '',
          component: () => import('@/components/home/user-list.vue')
        },
        {
          name: 'New user',
          path: '/new-user',
          component: () => import('@/components/home/new-user.vue')
        }
      ]
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('@/views/shop.vue'),
      children: [
        {
          name: 'Grocery',
          path: '',
          component: () => import('@/components/shop/grocery.vue')
        }
      ]
    }
  ]
})

export default router
