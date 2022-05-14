import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../components/DashboardView.vue'

function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/products',
    name: 'Products',
    component: lazyLoad('Products')
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: lazyLoad('PastOrders')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router