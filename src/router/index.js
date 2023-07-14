import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventView from '../views/EventView.vue'
import InfoView from '../views/InfoView.vue'
import PerformView from '../views/PerformView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/event',
    name: 'event',
    component: EventView
  },
  {
    path: '/informasi',
    name: 'informasi',
    component: InfoView
  },
  {
    path: '/prestasi',
    name: 'perstasi',
    component: PerformView
  },
  {
    path: '/tentang',
    name: 'tentang',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VITE_APP_BASE_URL),
  routes
})

export default router
