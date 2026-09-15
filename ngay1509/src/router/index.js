/* import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/san-pham', component: ProductList },
  { path: '/san-pham/:id', component: ProductDetail },
  { path: '/login', component: Login },
  { path: '/account', component: Account, meta: { requiresAuth: true } }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router */


// Bài tập tổng hợp 2 buổi
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/san-pham', component: ProductList },
  { path: '/san-pham/:id', component: ProductDetail },
  { path: '/login', component: Login },
  { path: '/account', component: Account, meta: { requiresAuth: true } }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router