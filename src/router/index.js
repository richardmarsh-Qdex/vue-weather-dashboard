import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Forecast from '../views/Forecast.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/forecast', name: 'Forecast', component: Forecast }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
