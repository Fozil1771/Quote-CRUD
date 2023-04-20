import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuoteView from '../views/QuoteView.vue'
import QuoteList from '../views/QuoteList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quotes',
      name: 'quoteList',
      component: QuoteList
    },
    {
      path: '/quotes/:id',
      name: 'quote',
      component: QuoteView
    }
  ]
})

export default router
