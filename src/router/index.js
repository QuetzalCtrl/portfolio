import { createRouter, createWebHistory } from 'vue-router'
import TerminalView from '../views/TerminalView.vue'

const routes = [
  {
    path: '/terminal',
    name: 'terminal',
    component: TerminalView
  },
  {
    path: "/",
    name: "HomeView",
    component: () =>
      import("../views/HomeView.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
