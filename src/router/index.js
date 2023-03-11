import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/views/HomePage.vue')
const Repositories = () => import(/* webpackChunkName: "Repositories" */ '@/views/RepoView.vue')
const SingleRepo = () => import(/* webpackChunkName: "SingleRepo" */ '@/views/SingleRepo.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/repos',
      name: 'Repos',
      component: Repositories,
      children: [
        {
          path: '/repos/:repo',
          name: 'Repo',
          component: SingleRepo
        }
      ]
    }
  ]
})

export default router
