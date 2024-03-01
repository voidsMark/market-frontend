import { createRouter, createWebHistory } from 'vue-router'

import NotFound404 from './pages/NotFound404.vue'
import InDeveloping from './pages/InDeveloping.vue'

import Market from './pages/Market.vue'
// import Cart from './pages/Cart.vue'
// import Favorites from './pages/Favorites.vue'
// import Orders from './pages/Orders.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
  routes: [
    {path: '/', component: Market, name: 'market' },

    {path: '/cart', component: InDeveloping, name: 'cart' },
    {path: '/favorites', component: InDeveloping, name: 'favorites' },
    {path: '/orders', component: InDeveloping, name: 'orders' },
    {path: '/account', component: InDeveloping, name: 'account' },

    { path: '/:pathMatch(.*)*', component: NotFound404, name: '404' },
    { path: '/in-developing', component: InDeveloping, name: 'developing' },
  ]
})

// export const beforeEach = () => {

// }

// router.beforeEach(beforeEach)
