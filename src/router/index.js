import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuoteView from '../views/QuoteView.vue'
import QuoteList from '../views/QuoteList.vue'
import NotFound from '../views/NotFound.vue'

import { checkIfQuoteExists } from '../utils'

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
      component: QuoteView,
      beforeEnter: (to, from, next) => {
        const quoteExists = checkIfQuoteExists(to.params.id)
        console.log(quoteExists)
        if (quoteExists) {
          next()
        } else {
          next({ name: 'notfound' })
        }
      }
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'notfound' }
    }
  ]
})

export default router
