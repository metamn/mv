  // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'

Vue.config.productionTip = false

// Lazyload for images and components
// - https://github.com/hilongjw/vue-lazyload
// - it breaks the endless scrolling so using only for background images
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

// Waypoint scrolling - checking elements entering / leaving the viewport
// - https://github.com/scaccogatto/vue-waypoint
import VueWaypoint from 'vue-waypoint'
Vue.use(VueWaypoint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
