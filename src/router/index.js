import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/recept',
      name: 'Recept',
      component: () => import('../views/RecepiesView.vue'),
    },
    {
      path: '/favoriter',
      name: 'Favoriter',
      component: () => import('../views/FavouritesView.vue'),
    },
    {
      path: '/:name',
      name: 'Recipe',
      component: () => import('../views/FullRecipe.vue'),
    },
  ],
})

export default router
