import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('should import typography', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js App')
  })
})
