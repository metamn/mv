// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'

Vue.config.productionTip = false

// Progressive and responsive images with srcset
// - https://alligator.io/vuejs/progressive-image-loader/
import ProgressiveImage from 'progressive-image/dist/vue'
import 'progressive-image/dist/index.css'
Vue.use(ProgressiveImage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
