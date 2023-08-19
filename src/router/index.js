// Composables
import { createRouter, createWebHistory } from 'vue-router'
import loginAccessVue from '../views/loginAccess.vue'
import home from '@/views/Home.vue'
const routes = [
  {
    path: '',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: home
  },
  {
    path: '/backend',
    name: 'backend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/backend.vue'),
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loginAccessVue
},
]

const router = createRouter({
  history: createWebHistory('/shipping/'),
  routes,
})

export default router
