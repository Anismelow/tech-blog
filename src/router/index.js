import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/FrontView',
      name: 'FrontView',
      component: () => import('../views/FrontView.vue')
    },
    {
      path: '/BackendView',
      name: 'BackendView',
      component: () => import('../views/BackendView.vue')
    },
    {
      path: '/DevopsView',
      name: 'DevopsView',
      component: () => import('../views/DevopsView.vue')
    },
    {
      path: '/InteligenciaView',
      name: 'InteligenciaView',
      component: () => import('../views/InteligenciaView.vue')
    }

  ]
})

export default router
