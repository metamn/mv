import Vue from 'vue'
import Router from 'vue-router'
import homeLayout from '@/components/pages/home-layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homeLayout
    }
  ]
})
