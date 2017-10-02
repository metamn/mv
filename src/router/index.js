import Vue from 'vue'
import Router from 'vue-router'
import homeLayout from '@/components/pages/home-layout'
import about from '@/components/pages/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homeLayout
    },
    {
      path: '/about',
      name: 'About',
      component: about
    }
  ]
})
