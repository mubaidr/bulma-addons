import vue from 'vue'
import VueRouter from 'vue-router'

// home
import Home from './views/demo/Home.vue'
import Addons from './views/demo/Addons.vue'
import View404 from './views/404.vue'

vue.use(VueRouter)

const router = new VueRouter({
  root: '/',
  routes: [
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/',
      component: Home,
    },
    {
      path: '/Addons',
      component: Addons,
    },
    {
      path: '*',
      component: View404,
    },
  ],
})

export default router
