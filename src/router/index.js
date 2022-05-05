import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../components/DashboardView.vue'
import Products from '../views/Products.vue'
import PastOrders from '../views/PastOrders.vue'

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router