import Vue from 'vue'
import Router from 'vue-router'
import homeLayout from '@/components/pages/home-layout'
import about from '@/components/pages/about'
import yona from '@/components/pages/yona'

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
    },
    {
      path: '/yona-frideman-the-dilution-of-architecture',
      name: 'About',
      component: yona
    }
  ]
})
