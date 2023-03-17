import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/views/HomePage.vue')
const Repositories = () => import(/* webpackChunkName: "Repositories" */ '@/views/RepoView.vue')
const SingleRepo = () => import(/* webpackChunkName: "SingleRepo" */ '@/views/SingleRepo.vue')
const Commits = () => import(/* webpackChunkName: "Commits" */ '@/views/RepoPages/RepoCommit.vue')
const Languages = () =>
  import(/* webpackChunkName: "Languages" */ '@/views/RepoPages/RepoLanguage.vue')
const Created = () => import(/* webpackChunkName: "Created" */ '@/views/RepoPages/RepoCreated.vue')
const License = () => import(/* webpackChunkName: "License" */ '@/views/RepoPages/RepoLicense.vue')
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/repos',
      name: 'Repos',
      component: Repositories
    },
    {
      path: '/repos/:repo',
      name: 'Repo',
      component: SingleRepo,
      children: [
        {
          path: '/repos/:repo/commits',
          name: 'Commits',
          component: Commits
        },
        {
          path: '/repos/:repo/languages',
          name: 'Language',
          component: Languages
        },
        {
          path: '/repos/:repo/createdAt',
          name: 'Created At',
          component: Created
        },
        {
          path: '/repos/:repo/license',
          name: 'License',
          component: License
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
