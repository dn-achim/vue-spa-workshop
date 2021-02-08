import { RouteConfig } from 'vue-router'

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "view-home" */ '../views/home/home.vue')
  },
  {
    path: '/projekte',
    name: 'project-index',
    component: () => import(/* webpackChunkName: "project-index" */ '../views/project/list/list.vue')
  }
]
