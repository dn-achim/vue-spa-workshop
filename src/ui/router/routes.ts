import { RouteConfig } from 'vue-router'

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "view-home" */ '../views/home/home.vue')
  },
  {
    path: '/projekte',
    component: () => import(/* webpackChunkName: "layout-empty" */ '../layouts/empty/empty.vue'),
    children: [
      {
        path: '/',
        name: 'project-index',
        component: () => import(/* webpackChunkName: "view-project-index" */ '../views/project/list/list.vue')
      },
      {
        path: ':uuid/detail',
        name: 'project-detail',
        component: () => import(/* webpackChunkName: "view-project-detail" */ '../views/project/detail/detail.vue'),
        props: true
      }
    ]
  }
]
