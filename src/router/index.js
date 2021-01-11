import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ActivityEntry',
    component: () => import('@/views/ActivityEntry.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
