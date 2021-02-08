import { RouteConfig } from 'vue-router'
import Home from '@/ui/views/Home.vue'

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "view-about" */ '../views/About.vue')
  }
]
