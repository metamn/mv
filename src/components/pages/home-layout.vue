<template lang="html">
  <div id="home-layout">
    <v-waypoint @waypoint="waypointTop"></v-waypoint>
    <span class="homes" v-for="item in items">
      <mv-home></mv-home>
    </span>
    <v-waypoint @waypoint="waypointBottom"></v-waypoint>
  </div>
</template>

<script>
  import Vue from 'vue'
  import home from './home'
  import homeLayout from './home-layout'

  export default {
    name: 'mv-home-layout',
    components: {
      'mv-home': home
    },
    data: function () {
      return {
        items: ['a']
      }
    },
    methods: {
      waypointTop (direction, going) {
        if ((direction.y === 'up') && going === 'in') {
          console.log('insert to top')

          this.items.push('a')

          const NewHome = Vue.extend({})
          new NewHome({
            render (createElement) {
              return createElement(homeLayout)
            }
          }).$mount('#home-layout')
        }
      },
      waypointBottom (direction, going) {
        if ((direction.y === 'down') && going === 'in') {
          console.log('insert to bottom')

          this.items.push('a')

          const NewHome = Vue.extend({})
          new NewHome({
            render (createElement) {
              return createElement(homeLayout)
            }
          }).$mount('#home-layout')
        }
      }
    }
  }
</script>

<style lang="css">
</style>
