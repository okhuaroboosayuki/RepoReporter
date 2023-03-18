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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: {
        title: 'Home',
      }
    },
    {
      path: '/repos',
      name: 'Repos',
      component: Repositories,
      meta: {
        title: 'Repositories'
      }
    },
    {
      path: '/repos/:repo',
      name: 'Repo',
      component: SingleRepo,
      meta: {
        title: 'Single Repo'
      },
      children: [
        {
          path: '/repos/:repo/commits',
          name: 'Commits',
          component: Commits,
          meta: {
            title: 'Single Repo Commits'
          }
        },
        {
          path: '/repos/:repo/languages',
          name: 'Language',
          component: Languages,
          meta: {
            title: 'Single Repo Languages'
          }
        },
        {
          path: '/repos/:repo/createdAt',
          name: 'Created At',
          component: Created,
          meta: {
            title: 'Single Repo Date Created'
          }
        },
        {
          path: '/repos/:repo/license',
          name: 'License',
          component: License,
          meta: {
            title: 'Single Repo License'
          }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFound,
      meta: {
        title: '404'
      }
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: '404' }
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next()
})

export default router
