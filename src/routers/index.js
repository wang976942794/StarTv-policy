import { createRouter, createWebHistory } from 'vue-router'

// 引入组件
import Terms from '@/view/terms/index.vue'


// 异步加载的路由组件
const routes = [
  {
    path: '/',
    name: 'Terms',
    component: Terms,
    meta: {
      requiresAuth: false,
      title: 'Terms of Use - StarTV'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
