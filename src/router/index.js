import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/repositories',
      name: 'Repositories',
      component: () => import(/* webpackChunkName: "Repositories" */ '@/views/RepoView.vue')
    }
  ]
})

export default router
