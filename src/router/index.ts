import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LoginRedir',
    redirect: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/login/index.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
