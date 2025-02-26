import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/recept',
      name: 'recept',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/favorit',
      name: 'favorit',
      component: () => import('../views/MinaFavorit.vue'),
    },
  ],
})

export default router
