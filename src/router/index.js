import { createRouter, createWebHistory } from 'vue-router'
import TerminalView from '../views/TerminalView.vue'

const routes = [
  {
    path: '/',
    name: 'terminal',
    component: TerminalView
  },
  {
    path: "/home",
    name: "HomeView",
    component: () =>
      import("../views/HomeView.vue"),
    children: [
      { 
        path: ':projectId',
        component: () =>
        import("../components/ProjectComponent.vue"),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
