import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'User portal',
      component: () => import('@/views/home-page.vue'),
      children: [
        {
          name: 'Users',
          path: '',
          component: () => import('@/components/home/users.vue')
        },
        {
          name: 'New user',
          path: '/new-user',
          component: () => import('@/components/home/new-user.vue')
        }
      ]
    }
  ]
})

export default router
