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
      path: '/BackView',
      name: 'BackView',
      component: () => import('../views/BackView.vue')
    }
  ]
})

export default router
