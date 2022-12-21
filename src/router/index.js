import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/projects",
    name: "ProjectsView",
    component: () =>
      import("../views/ProjectsView.vue"),
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
