import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Shelf',
    component: () => import('../views/Shelf/Shelf.vue')
  },
  {
    path: '/add-book',
    name: 'AddShelf',
    component: () => import('../views/AddShelf.vue')
  },
  {
    path: '/deleted-books',
    name: 'DeletedBooks',
    component: () => import('../views/DeletedBooks.vue')
  },
  {
    path: '/shelf/book/:id',
    name: 'Details',
    component: () => import('../views/Shelf/Details.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router